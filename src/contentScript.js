'use strict';

import { appToggles, storageSetValueSettingsData } from './misc/dataForChecks';
import misc from './misc/misc';
import colorUsernames from './tweaks/colorUsernames';
import addEmoteMenuButton from './tweaks/emoteMenu';
import setHighlightWords from './tweaks/higlightWords';
import seperateChatMessages from './tweaks/messageSeparate';
import addPopoutChatButton from './tweaks/popoutChat';
import volumeScrollEnable from './tweaks/volumeScroll';

const enableStyles = () => {
  const customCSSLink = 'https://dopexz7.github.io/emotes/content_new.css';

  misc();
  addEmoteMenuButton();
  addPopoutChatButton();

  chrome.storage.local.get('experimentalCSS', (r) => {
    if (r.experimentalCSS === true) {
      var head = document.head;
      var link = document.createElement('link');
      link.type = 'text/css';
      link.rel = 'stylesheet';
      link.href = customCSSLink;
      head.appendChild(link);
    } else {
      var head = document.head;
      var link = document.createElement('link');
      link.type = 'text/css';
      link.rel = 'stylesheet';
      link.href = chrome.runtime.getURL('content_new.css');
      head.appendChild(link);
    }
  });

  const chatAppToggles = () => {
    appToggles.forEach((v) => {
      chrome.storage.local.get(v.name, (r) => {
        if (r[v.name] === true) {
          document.documentElement.style.setProperty(v.cssValue, 'none');
        } else {
          document.documentElement.style.setProperty(v.cssValue, v.display);
        }
      });
    });
  };
  const storageSetValueSettings = () => {
    storageSetValueSettingsData.forEach((v) => {
      chrome.storage.local.get(v.name, (r) => {
        if (r[v.name]) {
          document.documentElement.style.setProperty(
            v.cssValue,
            v.name === 'changeChatWidth'
              ? r[v.name] + 'px'
              : 'secondValue' in v
              ? v.secondValue
              : r[v.name]
          );
        } else {
          document.documentElement.style.setProperty(v.cssValue, v.value);
        }
      });
    });
  };

  var obvpage = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.addedNodes.length) {
        chatAppToggles();
        storageSetValueSettings();
        volumeScrollEnable();
        colorUsernames();
        setHighlightWords();
        seperateChatMessages();
      }
    });
  });
  obvpage.observe(document.body, { childList: true, subtree: true });
};

let emotes = [];
chrome.storage.local.get('FULLSET', (r) => {
  emotes = r.FULLSET;
});

var hostnames = ['www.facebook.com']; //array for hostname objects

const substitute = (nodes) => {
  //substitutes text patterns in generally visible text elements with assigned inline images
  var elements = nodes.querySelectorAll(
    'div:not(.tw-tooltip):not(.bttv-tooltip):not(.ffz__tooltip--inner)'
  );
  for (var i = 0; i < elements.length; i++) {
    for (var j = 0; j < elements[i].childNodes.length; j++) {
      var node = elements[i].childNodes[j];
      if (node.nodeType === 3) {
        //if the node is a text node
        var text = node.nodeValue.split(' '); //split text by spaces
        if (text.length < 38) {
          var new_node = document.createDocumentFragment();
          for (var k = 0; k < text.length; k++) {
            var found = false;
            for (var l = 0; l < emotes.length; l++) {
              if (text[k] === emotes[l].code) {
                //if emote match is found
                found = true;
                var wrapper = document.createElement('span');
                wrapper.className = 'emote_wrapper';
                var icon = document.createElement('img');
                icon.className = 'inserted_emote';
                icon.src = emotes[l].src; //emote image source
                icon.alt = emotes[l].code; //alternate text (for copy/paste)
                var tip = document.createElement('span');
                tip.className = 'tooltiptext';
                tip.textContent = emotes[l].code;
                wrapper.appendChild(icon);
                wrapper.appendChild(tip);
                new_node.appendChild(wrapper);
                break; //break loop when a match is found (only one emote can match)
              }
            }
            if (found === false) {
              //if no emote match has been found
              new_node.appendChild(document.createTextNode(text[k])); //re-insert word
            }
            if (k < text.length - 1) {
              //miss last word
              new_node.appendChild(document.createTextNode(' ')); //add a space
            }
          }
          new_node.normalize(); //concatenate adjacent text nodes
          elements[i].replaceChild(new_node, node); //replace text node with fragment including inserted emotes
        } else {
          break;
        }
      }
    }
  }
};

var observer = new MutationObserver((mutations) => {
  //checks nodes that are subjected to change after initial page load
  mutations.forEach((mutation) => {
    for (var i = 0; i < mutation.addedNodes.length; i++) {
      if (mutation.addedNodes[i].childNodes.length) {
        substitute(mutation.addedNodes[i]); //subsequent substitutions
      }
    }
  });
});

const initiate = () => {
  var hn = window.location.hostname;
  for (var i = 0; i < hostnames.length; i++) {
    if (hn === hostnames[i]) {
      substitute(document.body);
      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });
      break;
    }
  }
};

chrome.storage.local.get('dopeChatEnabled', (r) => {
  if (r.dopeChatEnabled === true) {
    enableStyles();
    initiate();
  }
});
