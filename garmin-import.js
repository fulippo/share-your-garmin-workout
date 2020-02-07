 class GarminImport{
	
	static createWorkoutButtonSelector = 'button.create-workout';
	static getWorkoutEndpoint = 'https://connect.garmin.com/modern/proxy/workout-service/workout/';

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
		button.innerHTML = 'Import Workout';
		button.removeAttribute('disabled');
		button.style.marginLeft = '3px';
		button.setAttribute('class', 'btn btn-form');
		return button;
	}



	static injectImportButton(workoutText){
		
        
		let createButton = document.querySelectorAll(GarminImport.createWorkoutButtonSelector);
		let importButton = createButton[0].cloneNode(true);
		importButton = GarminImport.prepareImportButton(importButton);
		createButton[0].parentNode.insertBefore(importButton, createButton[0].nextSibling);	

	}


	static ajaxRequest(method, url, callback){
		let xhr = new XMLHttpRequest();
		
		xhr.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				callback(xhr.response);
			}
		};

		xhr.open(method, url);
		xhr.send();
	}

}

g = new GarminImport();
g.run();