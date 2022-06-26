'use strict';

// With background scripts you can communicate with popup
// and contentScript files.
// For more information on background script,
// See https://developer.chrome.com/extensions/background_pages

chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason == 'install') {
    chrome.storage.local.get(['SET'], (r) => {
      //check for custom emotes at install
      if (r.SET == null) {
        //if no emote set is saved
        var emotes = [];
        chrome.storage.local.set({ SET: emotes }); //save default set
      }
    });
    chrome.tabs.create({ url: 'https://dopechat.ddns.net/' });
  } else if (details.reason == 'update') {
    chrome.storage.local.get('vers1', (r) => {
      if (!r.vers1) {
        chrome.tabs.create({ url: 'https://dopechat.ddns.net/' });
        chrome.storage.local.set({ vers1: 'dontdisplaythisshit' });
      }
    });
  }
});

// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//   if (request.type === 'GREETINGS') {
//     const message = `Hi ${
//       sender.tab ? 'Con' : 'Pop'
//     }, my name is Bac. I am from Background. It's great to hear from you.`;

//     // Log message coming from the `request` parameter
//     console.log(request.payload.message);
//     // Send a response message
//     sendResponse({
//       message,
//     });
//   }
// });
