class GarminShare {
	
	static sendButtonSelector = '[data-target="#send-to-device"]';
	static getWorkoutEndpoint = 'https://connect.garmin.com/workout-service/workout/';

	static addEvents(){
		document.addEventListener('GarminShareWorkoutReady', GarminShare.getWorkout);
	}

	static prepareShareButton(button){
		button.text = 'Download';
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
		let workout = JSON.parse(workoutText);
		let title = workout.workoutName.replace(/[^a-z0-9]+/g, '-');

		let addButton = document.querySelectorAll(GarminShare.sendButtonSelector);
		let shareButton = addButton[0].cloneNode(true);
		shareButton = GarminShare.prepareShareButton(shareButton);
		shareButton.download = title + '.json';
		shareButton.href = link;
		addButton[0].parentNode.insertBefore(shareButton, addButton[0].nextSibling);	

	}

	static ajaxRequest(method, url, callback){
		let xhr = new XMLHttpRequest();

		
		xhr.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				callback(xhr.response);
			}
		};
		let localStoredToken = window.localStorage.getItem("token");
		let accessTokenMap = JSON.parse(localStoredToken);
		let token = accessTokenMap.access_token;
		
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
		let workoutID = document.URL.split('/').slice(-1).pop();
		let queryString = '?includeAudioNotes=true&_=' + Date.now();
		let workoutMatchID = workoutID.match(new RegExp('^([0-9]+)'))
		if (workoutMatchID.length > 0){
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
		button.innerHTML = 'Import Workout';
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
				let payload = GarminImport.createWorkoutPayload(JSON.parse(e.target.result));
				GarminImport.ajaxRequest('POST', GarminImport.addWorkoutEndpoint, payload, function(response){
					window.alert('Workout imported correctly');
					let copiedWorkout = JSON.parse(response);
					window.location.href = 'https://connect.garmin.com/modern/workout/' + copiedWorkout['workoutId'];
				});
			};
	
			reader.readAsBinaryString(file);	
		}
	}


	static createWorkoutPayload(uploadedJson){
		// Delete all the unwanted props
		for (const propName in GarminImport.deleteProps){
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
			if (this.readyState == 4 && this.status == 200) {
				callback(xhr.response);
			}
		};

		let localStoredToken = window.localStorage.getItem("token");
		let accessTokenMap = JSON.parse(localStoredToken);
		let token = accessTokenMap.access_token;

		console.log("Fulippo: ", payload);
		
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

	static waitPageLoaded(){
		let MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

		let observer = new MutationObserver(function(mutations, observer) {
		    var evtName = null;
			var evt = null;
			let mutation = mutations.pop();
			let target = mutation.target;
			
			if( target.classList.contains('body-workouts-index') && mutation.oldValue.indexOf('body-workouts-index') !== -1 ){
				evtName = 'GarminImportWorkoutReady';
			} else if( target.classList.contains('body-workout') && mutation.oldValue.indexOf('body-workout') !== -1 ){
				evtName = 'GarminShareWorkoutReady';
			}

			if ( evtName ){
				evt = new Event(evtName);
				document.dispatchEvent(evt);
			}
		});

		observer.observe(document.getElementsByTagName('body')[0], {
		  subtree: false,
		  attributes: true,
		  attributeOldValue: true,
		  attributeFilter: ['class']
		});

		
	}
}

GarminEvent.waitPageLoaded()