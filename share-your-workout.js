// Built-in translations
var TRANSLATIONS = {
	en: {
		downloadButtonLabel: 'Download',
		importButtonLabel: 'Import Workout',
		workoutImportedCorrectly: 'Workout imported correctly',
		errorFetchWorkout: 'Failed to download workout. Please try again.',
		errorImportWorkout: 'Failed to import workout. Please try again.',
		errorNoAuthToken: 'Authentication token not found. Please refresh the page and try again.',
		errorInvalidAuthData: 'Invalid authentication data. Please refresh the page and try again.',
		errorInvalidWorkoutData: 'Invalid workout data received. Please try again.',
		errorInvalidWorkoutFile: 'Invalid workout file. Please select a valid JSON file.',
		errorImportResponseParsing: 'Workout imported but failed to redirect. Please check your workouts page.',
		couldNotFindSendButton: 'Could not find SendToDevice button to clone'
	},
	fr: {
		downloadButtonLabel: 'Télécharger',
		importButtonLabel: 'Importer un entraînement',
		workoutImportedCorrectly: 'L\'entraînement a été importé avec succès',
		errorFetchWorkout: 'Échec du téléchargement de l\'entraînement. Veuillez réessayer.',
		errorImportWorkout: 'Échec de l\'importation de l\'entraînement. Veuillez réessayer.',
		errorNoAuthToken: 'Jeton d\'authentification introuvable. Veuillez actualiser la page et réessayer.',
		errorInvalidAuthData: 'Données d\'authentification invalides. Veuillez actualiser la page et réessayer.',
		errorInvalidWorkoutData: 'Données d\'entraînement invalides reçues. Veuillez réessayer.',
		errorInvalidWorkoutFile: 'Fichier d\'entraînement invalide. Veuillez sélectionner un fichier JSON valide.',
		errorImportResponseParsing: 'Entraînement importé mais échec de redirection. Veuillez vérifier votre page d\'entraînements.',
		couldNotFindSendButton: 'Impossible de trouver le bouton SendToDevice à cloner'
	},
	it: {
		downloadButtonLabel: 'Scarica',
		importButtonLabel: 'Importa Allenamento',
		workoutImportedCorrectly: 'Allenamento importato correttamente',
		errorFetchWorkout: 'Impossibile scaricare l\'allenamento. Riprova.',
		errorImportWorkout: 'Impossibile importare l\'allenamento. Riprova.',
		errorNoAuthToken: 'Token di autenticazione non trovato. Aggiorna la pagina e riprova.',
		errorInvalidAuthData: 'Dati di autenticazione non validi. Aggiorna la pagina e riprova.',
		errorInvalidWorkoutData: 'Dati dell\'allenamento non validi ricevuti. Riprova.',
		errorInvalidWorkoutFile: 'File allenamento non valido. Seleziona un file JSON valido.',
		errorImportResponseParsing: 'Allenamento importato ma impossibile reindirizzare. Controlla la tua pagina allenamenti.',
		couldNotFindSendButton: 'Impossibile trovare il pulsante SendToDevice da clonare'
	},
	de: {
		downloadButtonLabel: 'Herunterladen',
		importButtonLabel: 'Training importieren',
		workoutImportedCorrectly: 'Training erfolgreich importiert',
		errorFetchWorkout: 'Fehler beim Herunterladen des Trainings. Bitte versuchen Sie es erneut.',
		errorImportWorkout: 'Fehler beim Importieren des Trainings. Bitte versuchen Sie es erneut.',
		errorNoAuthToken: 'Authentifizierungstoken nicht gefunden. Bitte laden Sie die Seite neu und versuchen Sie es erneut.',
		errorInvalidAuthData: 'Ungültige Authentifizierungsdaten. Bitte laden Sie die Seite neu und versuchen Sie es erneut.',
		errorInvalidWorkoutData: 'Ungültige Trainingsdaten erhalten. Bitte versuchen Sie es erneut.',
		errorInvalidWorkoutFile: 'Ungültige Trainingsdatei. Bitte wählen Sie eine gültige JSON-Datei aus.',
		errorImportResponseParsing: 'Training importiert, aber Weiterleitung fehlgeschlagen. Bitte überprüfen Sie Ihre Trainingsseite.',
		couldNotFindSendButton: 'SendToDevice-Schaltfläche zum Klonen nicht gefunden'
	},
	es: {
		downloadButtonLabel: 'Descargar',
		importButtonLabel: 'Importar Entrenamiento',
		workoutImportedCorrectly: 'Entrenamiento importado correctamente',
		errorFetchWorkout: 'Error al descargar el entrenamiento. Por favor, inténtalo de nuevo.',
		errorImportWorkout: 'Error al importar el entrenamiento. Por favor, inténtalo de nuevo.',
		errorNoAuthToken: 'Token de autenticación no encontrado. Por favor, actualiza la página e inténtalo de nuevo.',
		errorInvalidAuthData: 'Datos de autenticación inválidos. Por favor, actualiza la página e inténtalo de nuevo.',
		errorInvalidWorkoutData: 'Datos de entrenamiento inválidos recibidos. Por favor, inténtalo de nuevo.',
		errorInvalidWorkoutFile: 'Archivo de entrenamiento inválido. Por favor, selecciona un archivo JSON válido.',
		errorImportResponseParsing: 'Entrenamiento importado pero falló la redirección. Por favor, verifica tu página de entrenamientos.',
		couldNotFindSendButton: 'No se pudo encontrar el botón SendToDevice para clonar'
	},
	pt: {
		downloadButtonLabel: 'Baixar',
		importButtonLabel: 'Importar Treino',
		workoutImportedCorrectly: 'Treino importado corretamente',
		errorFetchWorkout: 'Falha ao baixar o treino. Por favor, tente novamente.',
		errorImportWorkout: 'Falha ao importar o treino. Por favor, tente novamente.',
		errorNoAuthToken: 'Token de autenticação não encontrado. Por favor, atualize a página e tente novamente.',
		errorInvalidAuthData: 'Dados de autenticação inválidos. Por favor, atualize a página e tente novamente.',
		errorInvalidWorkoutData: 'Dados de treino inválidos recebidos. Por favor, tente novamente.',
		errorInvalidWorkoutFile: 'Arquivo de treino inválido. Por favor, selecione um arquivo JSON válido.',
		errorImportResponseParsing: 'Treino importado mas falha no redirecionamento. Por favor, verifique sua página de treinos.',
		couldNotFindSendButton: 'Não foi possível encontrar o botão SendToDevice para clonar'
	},
	nl: {
		downloadButtonLabel: 'Downloaden',
		importButtonLabel: 'Training Importeren',
		workoutImportedCorrectly: 'Training succesvol geïmporteerd',
		errorFetchWorkout: 'Fout bij het downloaden van de training. Probeer het opnieuw.',
		errorImportWorkout: 'Fout bij het importeren van de training. Probeer het opnieuw.',
		errorNoAuthToken: 'Authenticatietoken niet gevonden. Vernieuw de pagina en probeer het opnieuw.',
		errorInvalidAuthData: 'Ongeldige authenticatiegegevens. Vernieuw de pagina en probeer het opnieuw.',
		errorInvalidWorkoutData: 'Ongeldige trainingsgegevens ontvangen. Probeer het opnieuw.',
		errorInvalidWorkoutFile: 'Ongeldig trainingsbestand. Selecteer een geldig JSON-bestand.',
		errorImportResponseParsing: 'Training geïmporteerd maar omleiding mislukt. Controleer uw trainingspagina.',
		couldNotFindSendButton: 'Kan de SendToDevice-knop niet vinden om te klonen'
	},
	pl: {
		downloadButtonLabel: 'Pobierz',
		importButtonLabel: 'Importuj Trening',
		workoutImportedCorrectly: 'Trening zaimportowany pomyślnie',
		errorFetchWorkout: 'Nie udało się pobrać treningu. Spróbuj ponownie.',
		errorImportWorkout: 'Nie udało się zaimportować treningu. Spróbuj ponownie.',
		errorNoAuthToken: 'Nie znaleziono tokena uwierzytelnienia. Odśwież stronę i spróbuj ponownie.',
		errorInvalidAuthData: 'Nieprawidłowe dane uwierzytelnienia. Odśwież stronę i spróbuj ponownie.',
		errorInvalidWorkoutData: 'Otrzymano nieprawidłowe dane treningu. Spróbuj ponownie.',
		errorInvalidWorkoutFile: 'Nieprawidłowy plik treningu. Wybierz prawidłowy plik JSON.',
		errorImportResponseParsing: 'Trening zaimportowany, ale przekierowanie nie powiodło się. Sprawdź swoją stronę treningów.',
		couldNotFindSendButton: 'Nie można znaleźć przycisku SendToDevice do sklonowania'
	},
	ru: {
		downloadButtonLabel: 'Скачать',
		importButtonLabel: 'Импортировать Тренировку',
		workoutImportedCorrectly: 'Тренировка успешно импортирована',
		errorFetchWorkout: 'Ошибка при загрузке тренировки. Попробуйте еще раз.',
		errorImportWorkout: 'Ошибка при импорте тренировки. Попробуйте еще раз.',
		errorNoAuthToken: 'Токен аутентификации не найден. Обновите страницу и попробуйте еще раз.',
		errorInvalidAuthData: 'Неверные данные аутентификации. Обновите страницу и попробуйте еще раз.',
		errorInvalidWorkoutData: 'Получены неверные данные тренировки. Попробуйте еще раз.',
		errorInvalidWorkoutFile: 'Неверный файл тренировки. Выберите правильный JSON-файл.',
		errorImportResponseParsing: 'Тренировка импортирована, но перенаправление не удалось. Проверьте страницу ваших тренировок.',
		couldNotFindSendButton: 'Не удалось найти кнопку SendToDevice для клонирования'
	},
	ja: {
		downloadButtonLabel: 'ダウンロード',
		importButtonLabel: 'ワークアウトをインポート',
		workoutImportedCorrectly: 'ワークアウトが正常にインポートされました',
		errorFetchWorkout: 'ワークアウトのダウンロードに失敗しました。もう一度お試しください。',
		errorImportWorkout: 'ワークアウトのインポートに失敗しました。もう一度お試しください。',
		errorNoAuthToken: '認証トークンが見つかりません。ページを更新してもう一度お試しください。',
		errorInvalidAuthData: '認証データが無効です。ページを更新してもう一度お試しください。',
		errorInvalidWorkoutData: '無効なワークアウトデータを受信しました。もう一度お試しください。',
		errorInvalidWorkoutFile: '無効なワークアウトファイルです。有効なJSONファイルを選択してください。',
		errorImportResponseParsing: 'ワークアウトはインポートされましたが、リダイレクトに失敗しました。ワークアウトページをご確認ください。',
		couldNotFindSendButton: 'SendToDeviceボタンが見つかりませんでした'
	},
	ko: {
		downloadButtonLabel: '다운로드',
		importButtonLabel: '운동 가져오기',
		workoutImportedCorrectly: '운동을 성공적으로 가져왔습니다',
		errorFetchWorkout: '운동 다운로드에 실패했습니다. 다시 시도해 주세요.',
		errorImportWorkout: '운동 가져오기에 실패했습니다. 다시 시도해 주세요.',
		errorNoAuthToken: '인증 토큰을 찾을 수 없습니다. 페이지를 새로고침하고 다시 시도해 주세요.',
		errorInvalidAuthData: '유효하지 않은 인증 데이터입니다. 페이지를 새로고침하고 다시 시도해 주세요.',
		errorInvalidWorkoutData: '유효하지 않은 운동 데이터를 수신했습니다. 다시 시도해 주세요.',
		errorInvalidWorkoutFile: '유효하지 않은 운동 파일입니다. 유효한 JSON 파일을 선택해 주세요.',
		errorImportResponseParsing: '운동을 가져왔지만 리디렉션에 실패했습니다. 운동 페이지를 확인해 주세요.',
		couldNotFindSendButton: 'SendToDevice 버튼을 찾을 수 없습니다'
	}
};

// Helper function to get localized messages
function getMessage(key) {
	// Detect language from browser or default to English
	var lang = (navigator.language || navigator.userLanguage || 'en').substring(0, 2);
	
	// Use injected messages if available, otherwise use built-in translations
	var messages = window.GARMIN_EXTENSION_MESSAGES || TRANSLATIONS[lang] || TRANSLATIONS.en;
	
	var message = messages[key];
	if (!message) {
		console.warn('Message not found for key:', key);
		return key;
	}
	
	return message;
}

class GarminShare {
	
	static sendButtonSelector = 'span a.send-to-device';
	static sendButtonAlternativeSelector = '#headerBtnRightState-readonly button'
	static getWorkoutEndpoint = 'https://connect.garmin.com/workout-service/workout/';

	static addEvents(){
		document.addEventListener('GarminShareWorkoutReady', GarminShare.getWorkout);
	}

	static prepareShareButton(button, preserveClasses = false){
		// Set text content (works for both button and anchor elements)
		if (button.tagName === 'BUTTON') {
			button.innerHTML = getMessage('downloadButtonLabel');
		} else {
			button.text = getMessage('downloadButtonLabel');
		}
		
		button.removeAttribute('data-target');
		button.removeAttribute('data-toggle');
		button.removeAttribute('disabled');
		button.style.marginLeft = '3px';
		
		// Only override classes if not preserving original classes
		if (!preserveClasses) {
			button.setAttribute('class', 'btn btn-medium');
		}
		
		button.setAttribute('id', 'garmin-share-button');
		return button;
	}

	static injectShareButton(workoutText){
		
		if(document.getElementById('garmin-share-button')){
			return; // button already there
		}

        let jsonBlob = new Blob([workoutText], { type: "application/json;charset=utf-8" });
        let url = window.URL || window.webkitURL;
        let link = url.createObjectURL(jsonBlob);
		let workout;
		try {
			workout = JSON.parse(workoutText);
		} catch (e) {
			console.error('Failed to parse workout JSON:', e);
			alert(getMessage('errorInvalidWorkoutData'));
			return;
		}
		// Preserve UTF-8 characters, only replace filesystem-invalid characters
	let title = workout.workoutName.replace(/[<>:"\/\\|?*\x00-\x1F]/g, '-');

		let addButton = document.querySelectorAll(GarminShare.sendButtonSelector);
		let oldAddButton = document.querySelectorAll(GarminShare.sendButtonAlternativeSelector);
		if (addButton.length == 0 && oldAddButton.length == 0){
			console.warn(getMessage('couldNotFindSendButton'));
			return;
		}
		let shareButton;
		let parentNode;
		let preserveClasses = false;
		
		if (addButton.length > 0) {
			shareButton = addButton[0].cloneNode(true);
			parentNode = addButton[0];
		} else if (oldAddButton.length > 0) {
			shareButton = oldAddButton[0].cloneNode(true);
			parentNode = oldAddButton[0];
			preserveClasses = true; // Preserve original button classes for oldAddButton
		}
		
		shareButton = GarminShare.prepareShareButton(shareButton, preserveClasses);
		
		// Handle download functionality based on element type
		if (shareButton.tagName === 'BUTTON') {
			// For button elements, add click handler to trigger download
			shareButton.addEventListener('click', function(e) {
				e.preventDefault();
				e.stopPropagation();
				
				// Create temporary link element for download
				let tempLink = document.createElement('a');
				tempLink.href = link;
				tempLink.download = title + '.json';
				tempLink.style.display = 'none';
				document.body.appendChild(tempLink);
				tempLink.click();
				document.body.removeChild(tempLink);
			});
		} else {
			// For anchor elements, set href and download attributes directly
			shareButton.download = title + '.json';
			shareButton.href = link;
		}
		
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
					alert(getMessage('errorFetchWorkout'));
				}
			}
		};
		let localStoredToken = window.localStorage.getItem("token");
		if (!localStoredToken) {
			console.error('No authentication token found');
			alert(getMessage('errorNoAuthToken'));
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
			alert(getMessage('errorInvalidAuthData'));
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
		button.innerHTML = getMessage('importButtonLabel');
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
							window.alert(getMessage('workoutImportedCorrectly'));
							window.location.href = 'https://connect.garmin.com/modern/workout/' + copiedWorkout['workoutId'];
						} catch (e) {
							console.error('Failed to parse import response:', e);
							alert(getMessage('errorImportResponseParsing'));
						}
					});
				} catch (e) {
					console.error('Failed to parse uploaded file:', e);
					alert(getMessage('errorInvalidWorkoutFile'));
				}
			};
	
			reader.readAsText(file, 'UTF-8');	
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
			if (this.readyState == 4) {
				if (this.status == 200) {
					callback(xhr.response);
				} else {
					console.error('Failed to import workout:', this.status, this.statusText);
					alert(getMessage('errorImportWorkout'));
				}
			}
		};

		let localStoredToken = window.localStorage.getItem("token");
		if (!localStoredToken) {
			console.error('No authentication token found');
			alert(getMessage('errorNoAuthToken'));
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
			alert(getMessage('errorInvalidAuthData'));
			return;
		}

		
		xhr.open(method, url, true);
		xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
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