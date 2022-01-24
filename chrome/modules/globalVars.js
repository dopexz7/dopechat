export function globalVariables(){
	var obj = {};
	var storage = chrome.storage.local;

	document.documentElement.style.setProperty('--currentvolon', '0');
	var yourUsernameColor = "#000";
	document.documentElement.style.setProperty('--usernamecolor', yourUsernameColor);
	document.documentElement.style.setProperty('--fontfamily', 'Helvetica');
	document.documentElement.style.setProperty('--chatwidth', '354px'); 
	document.documentElement.style.setProperty('--chattopbarcolor', '#18181b'); 
	document.documentElement.style.setProperty('--messagestyle', 'left');
}