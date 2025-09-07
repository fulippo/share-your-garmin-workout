class GarminShare {
	
	static sendButtonSelector = 'span a.send-to-device';
	static sendButtonAlternativeSelector = '#headerBtnRightState-readonly button'
	static getWorkoutEndpoint = 'https://connect.garmin.com/workout-service/workout/';

	static addEvents(){
		document.addEventListener('GarminShareWorkoutReady', GarminShare.getWorkout);
	}

	static prepareShareButton(button){
		button.text = chrome.i18n.getMessage('downloadButtonLabel');
		button.removeAttribute('data-target');
		button.removeAttribute('data-toggle');
		button.style.marginLeft = '3px';
		button.setAttribute('class', 'btn btn-medium');
		button.setAttribute('id', 'garmin-share-button');
		return button;
	}

	static injectShareButton(workoutText){
		
		if(document.getElementById('garmin-share-button')){
			return; // button already there
		}

        let jsonBlob = new Blob([workoutText], { type: "text/plain;charset=utf-8" });
        let url = window.URL || window.webkitURL;
        let link = url.createObjectURL(jsonBlob);
		let workout;
		try {
			workout = JSON.parse(workoutText);
		} catch (e) {
			console.error('Failed to parse workout JSON:', e);
			alert(chrome.i18n.getMessage('errorInvalidWorkoutData'));
			return;
		}
		let title = workout.workoutName.replace(/[^a-z0-9A-Z]+/g, '-');

		let addButton = document.querySelectorAll(GarminShare.sendButtonSelector);
		let oldAddButton = document.querySelectorAll(GarminShare.sendButtonAlternativeSelector);
		if (addButton.length == 0 && oldAddButton.length == 0){
			console.warn(chrome.i18n.getMessage('couldNotFindSendButton'));
			return;
		}
		let shareButton;
		let parentNode;
		if (addButton.length > 0) {
			shareButton = addButton[0].cloneNode(true);
			parentNode = addButton[0];
		} else if (oldAddButton.length > 0) {
			shareButton = document.createElement("a")
			parentNode = oldAddButton[0];
		}
		
		shareButton = GarminShare.prepareShareButton(shareButton);
		shareButton.download = title + '.json';
		shareButton.href = link;
		parentNode.parentNode.insertBefore(shareButton, parentNode.nextSibling);	

	}

	static ajaxRequest(method, url, callback){
		let xhr = new XMLHttpRequest();

		
		xhr.onreadystatechange = function() {
			if (this.readyState == 4) {
				if (this.status == 200) {
					callback(xhr.response);
				} else {
					console.error('Failed to fetch workout:', this.status, this.statusText);
					alert(chrome.i18n.getMessage('errorFetchWorkout'));
				}
			}
		};
		let localStoredToken = window.localStorage.getItem("token");
		if (!localStoredToken) {
			console.error('No authentication token found');
			alert(chrome.i18n.getMessage('errorNoAuthToken'));
			return;
		}
		let accessTokenMap, token;
		try {
			accessTokenMap = JSON.parse(localStoredToken);
			token = accessTokenMap.access_token;
			if (!token) {
				throw new Error('Access token not found in stored data');
			}
		} catch (e) {
			console.error('Failed to parse authentication token:', e);
			alert(chrome.i18n.getMessage('errorInvalidAuthData'));
			return;
		}
		
		xhr.open(method, url);		
		xhr.setRequestHeader("x-app-ver", "4.41.1.0");
		xhr.setRequestHeader("x-requested-with", "XMLHttpRequest");
		xhr.setRequestHeader("x-lang", "it-IT");
		xhr.setRequestHeader("nk", "NT");
		xhr.setRequestHeader("Di-Backend", "connectapi.garmin.com");
		xhr.setRequestHeader("authorization", "Bearer "+token);

		xhr.withCredentials = true;
		xhr.send();
	}

	static downloadWorkout(xhr){
		let workoutJson = "data:text/json;charset=utf-8," + encodeURIComponent(xhr.response);
		window.open(workoutJson);

	}

	static getWorkout(){
		// Add delay to ensure button injection doesn't conflict
		if (document.getElementById('garmin-share-button')) {
			return; // Button already exists
		}
		
		let workoutID = document.URL.split('/').slice(-1).pop();
		let queryString = '?includeAudioNotes=true&_=' + Date.now();
		let workoutMatchID = workoutID.match(new RegExp('^([0-9]+)'))
		if (workoutMatchID && workoutMatchID.length > 0){
			GarminShare.ajaxRequest('GET', GarminShare.getWorkoutEndpoint + workoutMatchID[0] + queryString, GarminShare.injectShareButton);
		}
	}
}
GarminShare.addEvents();

class GarminImport{
	
	static createWorkoutButtonSelector = 'button.create-workout';
	static addWorkoutEndpoint = 'https://connect.garmin.com/workout-service/workout';

	static deleteProps = [
		'workoutId',
		'ownerId',
		'updatedDate',
		'createdDate',
		'author',
		'estimatedDurationInSecs',
		'estimatedDistanceInMeters'
	]

	static addEvents(){
		document.addEventListener('GarminImportWorkoutReady', GarminImport.injectImportButton);
	}

	static prepareImportButton(button){
		button.innerHTML = chrome.i18n.getMessage('importButtonLabel');
		button.removeAttribute('disabled');
		button.style.marginLeft = '3px';
		button.setAttribute('class', 'btn btn-form');
		return button;
	}



	static injectImportButton(workoutText){
		
        
		if(document.getElementById('garmin-share-workout-file')){
			return; // Button already there
		}

		let createButton = document.querySelectorAll(GarminImport.createWorkoutButtonSelector);
		if (createButton.length === 0) {
			console.warn('Create workout button not found for import button injection');
			return;
		}
		let importButton = createButton[0].cloneNode(true);

		var inputFile = document.createElement('input');
		inputFile.setAttribute('type', 'file');
		inputFile.setAttribute('id', 'garmin-share-workout-file');
		inputFile.style.display = 'none';
		
		importButton = GarminImport.prepareImportButton(importButton);
		importButton.addEventListener('click', function(event){
			inputFile.click();
			event.preventDefault();
		}) ;

		inputFile.addEventListener('change', GarminImport.upload);

		createButton[0].parentNode.insertBefore(importButton, createButton[0].nextSibling);
		createButton[0].parentNode.insertBefore(inputFile, createButton[0].nextSibling);

	}


	static upload(){
		
		var files = this.files;
		for (var i = 0, file; file = files[i]; ++i) {
			var reader = new FileReader();
					
			reader.onload = function(e) {
				try {
					let uploadedData = JSON.parse(e.target.result);
					let payload = GarminImport.createWorkoutPayload(uploadedData);
					GarminImport.ajaxRequest('POST', GarminImport.addWorkoutEndpoint, payload, function(response){
						try {
							let copiedWorkout = JSON.parse(response);
							window.alert(chrome.i18n.getMessage('workoutImportedCorrectly'));
							window.location.href = 'https://connect.garmin.com/modern/workout/' + copiedWorkout['workoutId'];
						} catch (e) {
							console.error('Failed to parse import response:', e);
							alert(chrome.i18n.getMessage('errorImportResponseParsing'));
						}
					});
				} catch (e) {
					console.error('Failed to parse uploaded file:', e);
					alert(chrome.i18n.getMessage('errorInvalidWorkoutFile'));
				}
			};
	
			reader.readAsBinaryString(file);	
		}
	}


	static createWorkoutPayload(uploadedJson){
		// Delete all the unwanted props
		for (const propName of GarminImport.deleteProps){
			if(uploadedJson[propName] !== undefined){
				delete uploadedJson[propName];
			}
		}
		
		// workout name
		uploadedJson['workoutName'] += ' - copy';

		let segmentsNumber = uploadedJson['workoutSegments'].length;
		for(let x=0; x<segmentsNumber; x++){
			let segment = uploadedJson['workoutSegments'][x];
			for(let y=0; y<segment['workoutSteps'].length; y++){
				let workoutStep = segment['workoutSteps'][y];
				workoutStep['stepId'] = null;
				segment['workoutSteps'][y] = workoutStep;
			}
			uploadedJson['workoutSegments'][x] = segment;
		}

		return uploadedJson;
	}


	static ajaxRequest(method, url, payload, callback){

		let garminVersion = document.getElementById('garmin-connect-version');
		let xhr = new XMLHttpRequest();
		
		xhr.onreadystatechange = function() {
			if (this.readyState == 4) {
				if (this.status == 200) {
					callback(xhr.response);
				} else {
					console.error('Failed to import workout:', this.status, this.statusText);
					alert(chrome.i18n.getMessage('errorImportWorkout'));
				}
			}
		};

		let localStoredToken = window.localStorage.getItem("token");
		if (!localStoredToken) {
			console.error('No authentication token found');
			alert(chrome.i18n.getMessage('errorNoAuthToken'));
			return;
		}
		let accessTokenMap, token;
		try {
			accessTokenMap = JSON.parse(localStoredToken);
			token = accessTokenMap.access_token;
			if (!token) {
				throw new Error('Access token not found in stored data');
			}
		} catch (e) {
			console.error('Failed to parse authentication token:', e);
			alert(chrome.i18n.getMessage('errorInvalidAuthData'));
			return;
		}

		
		xhr.open(method, url, true);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.setRequestHeader("Accept", "application/json, text/javascript, */*; q=0.01");
	
		xhr.setRequestHeader("x-app-ver", garminVersion.innerText || '4.27.1.0');
		xhr.setRequestHeader("x-requested-with", "XMLHttpRequest");
		xhr.setRequestHeader("x-lang", "it-IT");
		xhr.setRequestHeader("nk", "NT");
		xhr.setRequestHeader("Di-Backend", "connectapi.garmin.com");
		xhr.setRequestHeader("authorization", "Bearer "+token);
		xhr.withCredentials = true;

		xhr.send(JSON.stringify(payload));

		
	}

}
GarminImport.addEvents();

class GarminEvent{

	static checkCurrentPage(){
		let currentUrl = window.location.href;
		let body = document.body;
		
		// Check for workout index page (workouts list)
		if ((currentUrl.includes('/modern/workouts') || currentUrl.includes('/workouts')) && 
		    (body.classList.contains('body-workouts-index') || document.querySelector('.create-workout'))) {
			GarminEvent.dispatchEvent('GarminImportWorkoutReady');
			return true;
		}
		
		// Check for individual workout page
		if ((currentUrl.includes('/modern/workout/') || currentUrl.includes('/workout/')) && 
		    (body.classList.contains('body-workout') || body.classList.contains('body-workoutPage') || 
		     document.querySelector(GarminShare.sendButtonSelector) || document.querySelector(GarminShare.sendButtonAlternativeSelector))) {
			GarminEvent.dispatchEvent('GarminShareWorkoutReady');
			return true;
		}
		
		return false;
	}

	static dispatchEvent(eventName){
		let evt = new Event(eventName);
		document.dispatchEvent(evt);
	}

	static waitPageLoaded(){
		// Check immediately on load
		setTimeout(() => GarminEvent.checkCurrentPage(), 500);
		
		// Set up MutationObserver for body class changes
		let MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
		let observer = new MutationObserver(function(mutations) {
			for (let mutation of mutations) {
				if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
					// Delay check to allow DOM to settle
					setTimeout(() => GarminEvent.checkCurrentPage(), 100);
				}
			}
		});

		observer.observe(document.body, {
			attributes: true,
			attributeOldValue: true,
			attributeFilter: ['class']
		});

		// Also observe the entire document for dynamic content changes
		let contentObserver = new MutationObserver(function(mutations) {
			for (let mutation of mutations) {
				if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
					// Check if relevant elements were added
					for (let node of mutation.addedNodes) {
						if (node.nodeType === 1) { // Element node
							if (node.querySelector && 
								(node.querySelector(GarminShare.sendButtonSelector) || 
								 node.querySelector(GarminShare.sendButtonAlternativeSelector) ||
								 node.querySelector('.create-workout'))) {
								setTimeout(() => GarminEvent.checkCurrentPage(), 200);
								break;
							}
						}
					}
				}
			}
		});

		contentObserver.observe(document.body, {
			childList: true,
			subtree: true
		});

		// URL change detection for SPAs
		let currentUrl = window.location.href;
		setInterval(() => {
			if (window.location.href !== currentUrl) {
				currentUrl = window.location.href;
				// Delay to allow page content to load
				setTimeout(() => GarminEvent.checkCurrentPage(), 1000);
			}
		}, 1000);
		
		// Periodic fallback check every 5 seconds
		setInterval(() => {
			GarminEvent.checkCurrentPage();
		}, 5000);
	}
}

GarminEvent.waitPageLoaded()