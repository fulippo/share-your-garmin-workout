## 1.3.0
 - Added Japanese language support
 - Added Korean language support
 - Fixed UTF-8 encoding issues with workout names in API communication
 - Added UTF-8 charset meta tag to popup.html
 - Fixed deprecated readAsBinaryString method (now using readAsText with UTF-8)
 - Improved filename sanitization to preserve UTF-8 characters (Japanese, Korean, etc.)
 - Added charset=UTF-8 to Content-Type header for API requests
 - Added proper Chrome i18n support with _locales directory for all 11 languages
 - Extension now discoverable in all language listings on Chrome Web Store
## 1.2.0
 - Improved buttons rendering
 - Moved localizations to inline script
 - Improved localization and added more robust checks on DOMs
 - Improved manifest.json file
## 1.1.3
 - Fixed script to match changed page layout
## 1.1.2
 - Fixed regex to extract workout ID after Garmin has changed the URL structure
## 1.1.1
 - Added support to connect.garmin.cn
## 1.1.0
 - Fixed API changes
 - Improved README with screenshots
 - Migrated to V3 Manifest
## 1.0.5
 - Removed unused webRequest permission
## 1.0.4
 - Added this changelog :)
 - Fixed the style of the `Download` button to better honor the website's style
 - Small minor aesthetics changes 
