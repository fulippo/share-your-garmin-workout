class GarminInject{
	
	
	static run(){
		var node = document.getElementsByTagName('body')[0];
		var script = document.createElement('script');
		script.setAttribute('type', 'text/javascript');
		script.setAttribute('src', chrome.extension.getURL('share-your-workout.js'));
		node.appendChild(script);
	}
}

GarminInject.run();