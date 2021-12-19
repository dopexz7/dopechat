document.getElementById('update-settings-id').addEventListener('click', (function() {
	window.open(chrome.runtime.getURL('settings.html'), "_self");
}));