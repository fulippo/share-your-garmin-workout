class GarminInject{
	static run(){
		// Simple injection - translations are now embedded in the main script
		var node = document.getElementsByTagName('body')[0];
		var script = document.createElement('script');
		script.setAttribute('type', 'text/javascript');
		script.setAttribute('src', chrome.runtime.getURL('share-your-workout.js'));
		node.appendChild(script);
	}
}

GarminInject.run();