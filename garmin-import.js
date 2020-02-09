 class GarminImport{
	
	static createWorkoutButtonSelector = '#save-workout';
	static addWorkoutEndpoint = 'https://connect.garmin.com/modern/proxy/workout-service/workout';
	static workoutTemplate = {
		"sportType": {},
		"workoutName": "",
		"workoutSegments": []
	};

	run(){
		this.waitPageLoaded();
		this.addEvents();
	}

	addEvents(){
		document.addEventListener('GarminPageLoadedCorrectly', GarminImport.injectImportButton);
	}

	waitPageLoaded(){
		
		var checkDomInterval = setInterval(function(){
			let createButton = document.querySelectorAll(GarminImport.createWorkoutButtonSelector);
			if(createButton.length > 0){
				clearInterval(checkDomInterval);
				let evt = new Event('GarminPageLoadedCorrectly')
				document.dispatchEvent(evt)
			}
		}, 100);
	}

	static prepareImportButton(button){
		button.innerHTML = chrome.i18n.getMessage('importButtonLabel');;
		button.removeAttribute('disabled');
		button.style.marginLeft = '3px';
		button.setAttribute('class', 'btn btn-form');
		return button;
	}



	static injectImportButton(workoutText){
		
        
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
					window.alert(chrome.i18n.getMessage('workoutUploadedCorrectly'));
					let copiedWorkout = JSON.parse(response);
					window.location.href = 'https://connect.garmin.com/modern/workout/' + copiedWorkout['workoutId'];
				});
			};
	
			reader.readAsBinaryString(file);	
		}
	}


	static createWorkoutPayload(uploadedJson){
		let compiledTemplate = GarminImport.workoutTemplate;
		compiledTemplate['sportType'] = uploadedJson['sportType'];
		compiledTemplate['workoutName'] = uploadedJson['workoutName'];
		if(uploadedJson['author'] !== undefined){
			compiledTemplate['workoutName'] += ' - Shared by ' + uploadedJson['author']['fullName'];
		}
		compiledTemplate['workoutSegments'] = uploadedJson['workoutSegments'];
		let segmentsNumber = compiledTemplate['workoutSegments'].length;
		for(let x=0; x<segmentsNumber; x++){
			let segment = compiledTemplate['workoutSegments'][x];
			for(let y=0; y<segment['workoutSteps'].length; y++){
				let workoutStep = segment['workoutSteps'][y];
				workoutStep['stepId'] = null;
				segment['workoutSteps'][y] = workoutStep;
			}
			compiledTemplate['workoutSegments'][x] = segment;
		}

		return compiledTemplate;
	}


	static ajaxRequest(method, url, payload, callback){
		let xhr = new XMLHttpRequest();
		
		xhr.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				callback(xhr.response);
			}
		};

		xhr.open(method, url, true);
		xhr.setRequestHeader("Content-Type", "application/json");
		xhr.setRequestHeader("Accept", "application/json, text/javascript, */*; q=0.01");

		
		xhr.setRequestHeader("x-app-ver", "4.27.1.0");
		xhr.setRequestHeader("x-requested-with", "XMLHttpRequest");
		xhr.setRequestHeader("x-lang", "it-IT");
		xhr.setRequestHeader("nk", "NT");
		xhr.withCredentials = true;

		//xhr.setRequestHeader("referer", "https://connect.garmin.com/modern/workout/create/running");
		xhr.send(JSON.stringify(payload));
	}

}

g = new GarminImport();
g.run();