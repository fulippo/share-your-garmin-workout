class GarminShare{
	
	static sendButtonSelector = '[data-target="#send-to-device"]';
	static getWorkoutEndpoint = 'https://connect.garmin.com/modern/proxy/workout-service/workout/';

	static run(){
		GarminShare.waitPageLoaded();
		GarminShare.addEvents();
	}

	static addEvents(){
		document.addEventListener('GarminPageLoadedCorrectly', GarminShare.getWorkout);
	}

	static waitPageLoaded(){
		
		var checkDomInterval = setInterval(function(){
			let addButton = document.querySelectorAll(GarminShare.sendButtonSelector);
			if(addButton.length > 0){
				clearInterval(checkDomInterval);
				let evt = new Event('GarminPageLoadedCorrectly')
				document.dispatchEvent(evt)
			}
		}, 100);
	}

	static prepareShareButton(button){
		button.text = chrome.i18n.getMessage('downloadButtonLabel');
		button.removeAttribute('data-target');
		button.removeAttribute('data-toggle');
		button.style.marginLeft = '3px';
		button.setAttribute('class', 'btn btn-small');
		return button;
	}



	static injectShareButton(workoutText){
		
        let jsonBlob = new Blob([workoutText], { type: "text/plain;charset=utf-8" });
        let url = window.URL || window.webkitURL;
        let link = url.createObjectURL(jsonBlob);

		let addButton = document.querySelectorAll(GarminShare.sendButtonSelector);
		let shareButton = addButton[0].cloneNode(true);
		shareButton = GarminShare.prepareShareButton(shareButton);
		shareButton.download = 'workout.json';
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

		xhr.open(method, url);
		xhr.send();
	}

	static downloadWorkout(xhr){
		let workoutJson = "data:text/json;charset=utf-8," + encodeURIComponent(xhr.response);
		window.open(workoutJson);

	}

	static getWorkout(){
		let workoutID = document.URL.split('/').slice(-1).pop();
		GarminShare.ajaxRequest('GET', GarminShare.getWorkoutEndpoint + workoutID, GarminShare.injectShareButton);
	}



}

GarminShare.run();