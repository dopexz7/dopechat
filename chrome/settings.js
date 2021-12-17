var obj = {};
var storage = chrome.storage.local;
var otherobj = {};
//tabs start
function hideShowTabs(btnid, tabid, name) {
	function showhide(id){
        if (document.getElementById) {
          var divid = document.getElementById(id);
          var divs = document.getElementsByClassName("hide");
          for(var i=0;i<divs.length;i++) {
             divs[i].style.display = "none";
          }
          divid.style.display = "block";
        } 
        return false;
 	}
 	
	document.getElementById(btnid).addEventListener('click', function() {
		showhide(tabid);
		document.getElementById('breadcrumb').innerText = name;
	});
}

hideShowTabs('show-main-page', 'main-tab', 'Main page');
hideShowTabs('show-emote-settings', 'emote-settings', 'Emote settings');
hideShowTabs('show-chat-settings', 'chat-settings', 'Chat settings');
hideShowTabs('show-text-settings', 'text-settings', 'Text settings');
hideShowTabs('show-usernames-settings', 'usernames-settings', 'Usernames settings');
hideShowTabs('show-readability-settings', 'readability-settings', 'Readability settings');
hideShowTabs('show-high-settings', 'high-settings', 'Highlighting settings');
hideShowTabs('show-other-settings', 'other-settings', 'Other settings');
hideShowTabs('show-changelog', 'changelog', 'Changelog');
hideShowTabs('show-changelogx', 'changelog', 'Changelog');
hideShowTabs('show-about', 'about', 'About');
hideShowTabs('show-faq', 'faq', 'FAQ');
//tabs end

//install x set

function setswap() { //use changed emote set in current tabs
        chrome.tabs.query({}, (function(tabs) {
            for (var i = 0; i < tabs.length; i++) {
                chrome.tabs.sendMessage(tabs[i].id, { newemotes: "change" });
            }
        }));
    }



function setEmoteSets(btnid, x) {
	document.getElementById(btnid).addEventListener("click", function() {
		var element = document.getElementById(btnid);
		var otherelement;
		if (btnid === "userameemotes") {
			jQuery.getJSON("https://dopexz7.github.io/emotes/ramee.json?r=" + Math.random(), function(response) {
			    obj.SET = response;
			    obj.setDate = new Date().toLocaleString('en-US');
			    storage.set(obj);
				setswap(); //refreshes emotes
		
					
			});
			element.innerText = "Installed";
			element.classList.add('installed-btn');
			otherelement = document.getElementById('useratedemotes');
			otherelementx = document.getElementById('usevaderemotes');
			otherelement.innerText = "Install";
			otherelement.classList.remove('installed-btn');
			otherelementx.innerText = "Install";
			otherelementx.classList.remove('installed-btn');
		} else if (btnid === "useratedemotes") {
			jQuery.getJSON("https://dopexz7.github.io/emotes/rated.json?r=" + Math.random(), function(response) {
			    obj.SET = response;
			    obj.setDate = new Date().toLocaleString('en-US');
			    storage.set(obj);
				setswap(); //refreshes emotes
			});

			element.innerText = "installed";
			element.classList.add('installed-btn');
			otherelement = document.getElementById('userameemotes');
			otherelementx = document.getElementById('usevaderemotes');
			otherelement.innerText = "Install";
			otherelement.classList.remove('installed-btn');
			otherelementx.innerText = "Install";
			otherelementx.classList.remove('installed-btn');
		} else if (btnid === "usevaderemotes") {
			jQuery.getJSON("https://dopexz7.github.io/emotes/vader.json?r=" + Math.random(), function(response) {
			    obj.SET = response;
			    obj.setDate = new Date().toLocaleString('en-US');
			    storage.set(obj);
				setswap(); //refreshes emotes
			});

			element.innerText = "installed";
			element.classList.add('installed-btn');
			otherelement = document.getElementById('userameemotes');
			otherelementx = document.getElementById('useratedemotes');

			otherelement.innerText = "Install";
			otherelement.classList.remove('installed-btn');
			otherelementx.innerText = "Install";
			otherelementx.classList.remove('installed-btn');
		}

		
		obj[x] = btnid;
		storage.set(obj);
		
	});
}
setEmoteSets('userameemotes', 'using');
setEmoteSets('useratedemotes', 'using');
setEmoteSets('usevaderemotes', 'using');


function setEmoteButtonState(buttonid, y) {
	storage.get(y, function(result) {
		var element = document.getElementById(buttonid);
		if (result[y] === buttonid) {
			element.classList.add('installed-btn');
			element.innerText = 'Installed';	
		}
	});
}



	




// interactive chat toggles start
//set state every refresh
function interactiveChatTogglesC(classnamex, resultValuex, firstValuex, secondValuex) {
storage.get(resultValuex, function(result) {
  		var element = document.getElementsByClassName(classnamex);
  		for (var i=0; i<element.length; i++) {
	    	if (result[resultValuex] === firstValuex) {
	    		if(element[i].classList.contains('interactive-chat-message-pfp')) {
	    			element[i].classList.remove('interactive-chat-toggled-show-pfp');
	    			element[i].classList.add('interactive-chat-toggled-hide-pfp');
	    		} else if(element[i].classList.contains('interactive-chat-message-text')) {
	    			element[i].classList.remove('interactive-chat-toggled-show-text');
	    			element[i].classList.add('interactive-chat-toggled-hide-text');
	    		} else {
	    			element[i].classList.remove('interactive-chat-toggled-show');
	    			element[i].classList.add('interactive-chat-toggled-hide');
	    		}
	    		
	    	} else if (result[resultValuex] === secondValuex) {
	    		if(element[i].classList.contains('interactive-chat-message-pfp')) {
	    			element[i].classList.remove('interactive-chat-toggled-hide-pfp');
	    			element[i].classList.add('interactive-chat-toggled-show-pfp');
	    		} else if(element[i].classList.contains('interactive-chat-message-text')) {
	    			element[i].classList.remove('interactive-chat-toggled-hide-text');
	    			element[i].classList.add('interactive-chat-toggled-show-text');
	    		}
	    		else {
	    			element[i].classList.remove('interactive-chat-toggled-hide');
	    			element[i].classList.add('interactive-chat-toggled-show');
	    		}
	    		
	    	}
    	}
    });
}
//actual toggles
function interactiveChatToggles(classname, resultValue, firstValue, secondValue) {
	var element = document.getElementsByClassName(classname);
	for (var i = 0, len = element.length; i < len; i++) {
		element[i].onclick = function(){
    		var element = document.getElementsByClassName(classname);
    		for(var j=0; j<element.length; j++) {
    			if (element[j].classList.contains('interactive-chat-toggled-show')) {
    				element[j].classList.remove('interactive-chat-toggled-show');
    				element[j].classList.add('interactive-chat-toggled-hide');
    				obj[resultValue] = firstValue;
    				storage.set(obj);
    			} else if (element[j].classList.contains('interactive-chat-toggled-hide')) {
    				element[j].classList.remove('interactive-chat-toggled-hide');
    				element[j].classList.add('interactive-chat-toggled-show');  				
    				obj[resultValue] = secondValue;
    				storage.set(obj);
    			} else if (element[j].classList.contains('interactive-chat-toggled-show-pfp')) {
    				element[j].classList.remove('interactive-chat-toggled-show-pfp');
    				element[j].classList.add('interactive-chat-toggled-hide-pfp');
    				obj[resultValue] = firstValue;
    				storage.set(obj);
    				
    			} else if (element[j].classList.contains('interactive-chat-toggled-hide-pfp')) {
    				element[j].classList.remove('interactive-chat-toggled-hide-pfp');
    				element[j].classList.add('interactive-chat-toggled-show-pfp');
    				obj[resultValue] = secondValue;
    				storage.set(obj);
    			} else if (element[j].classList.contains('interactive-chat-toggled-show-text')) {
    				element[j].classList.remove('interactive-chat-toggled-show-text');
    				element[j].classList.add('interactive-chat-toggled-hide-text');
    				obj[resultValue] = firstValue;
    				storage.set(obj);
    			} else if (element[j].classList.contains('interactive-chat-toggled-hide-text')) {
    				element[j].classList.remove('interactive-chat-toggled-hide-text');
    				element[j].classList.add('interactive-chat-toggled-show-text');
    				obj[resultValue] = secondValue;
    				storage.set(obj);
    			}
    		}
		};
	}
}

interactiveChatToggles('interactive-chat-message-likereply', 'chatLikeReplyCheck', 'on', 'off');
interactiveChatToggles('interactive-chat-message-right-like', 'chatCommentReacts', 'on', 'off');
interactiveChatToggles('interactive-chat-message-pfp', 'hideChatProfilePictures', 'hide', 'show');
interactiveChatToggles('interactive-chat-message-right', 'chatThreeDots', 'on', 'off');
interactiveChatToggles('interactive-chat-topbar', 'chatTopBarCheck', 'on', 'off');
interactiveChatToggles('interactive-chat-reply', 'chatRepliesHide', 'on', 'off');
interactiveChatToggles('interactive-chat-message-text', 'messageStyle', '2', '1');


window.onload = function() {
	interactiveChatTogglesC('interactive-chat-topbar', 'chatTopBarCheck', 'on', 'off');
	interactiveChatTogglesC('interactive-chat-message-likereply', 'chatLikeReplyCheck', 'on', 'off');
	interactiveChatTogglesC('interactive-chat-message-right-like', 'chatCommentReacts', 'on', 'off');
	interactiveChatTogglesC('interactive-chat-message-pfp', 'hideChatProfilePictures', 'hide', 'show');
	interactiveChatTogglesC('interactive-chat-message-right', 'chatThreeDots', 'on', 'off');
	interactiveChatTogglesC('interactive-chat-reply', 'chatRepliesHide', 'on', 'off');
	interactiveChatTogglesC('interactive-chat-message-text', 'messageStyle', '2', '1');

	setEmoteButtonState('userameemotes', 'using');
	setEmoteButtonState('useratedemotes', 'using');
	setEmoteButtonState('usevaderemotes', 'using');
};

// interactive chat toggles end
//color picker  	
function setColorInputBg(firstColorInputId, firstTextInputId, pickerClass){
		var colorInputId, colorOutputId, colorPicker;
    colorInputId = document.getElementById(firstColorInputId);
    colorOutputId = document.getElementById(firstTextInputId);
    colorPicker = document.getElementsByClassName(pickerClass)[0];
    colorInputId.addEventListener('input', (function(){
        colorOutputId.value = colorInputId.value;
        colorPicker.style.background = colorInputId.value;
        }), true);
}


function setColorValues(addchatBG, chattopbarx, objvalue) {
    document.getElementById(addchatBG).addEventListener('click', (function() {
    var c = document.getElementById(chattopbarx).value;
    
    if (c == "") {
        
        } else {
            obj[objvalue] = c;
            storage.set(obj);
            
            
        }
    }));
}

setColorInputBg('colorInputId', 'chatbg', 'chatcolor');
setColorValues('addchatBG', 'chatbg', 'chatBackground');
setColorInputBg('colorInputIdChatTopBar', 'chattopbarx', 'chattopbarcolor');
setColorValues('addchattopbar', 'chattopbarx', "chattopbarColor");
setColorInputBg('colorInputIdOtherNameColor', 'userothermc', 'otherusernameco');
setColorValues('addotheruolor', 'userothermc', 'othersUsernameColor');
setColorInputBg('colorInputIdYourNameColor', 'usernmc', 'yourusernameco');
setColorValues('addyourucolor', 'usernmc', 'yourUsernameColor');
setColorInputBg('colorInputIdTextColor', 'textcolor', 'chatextcolor');
setColorValues('addtextcolor', 'textcolor', 'chatTextColor');
setColorInputBg('colorInputIdHighlight', 'ocusernm', 'highlightcolpicker');
setColorValues('addotheryucolor', 'ocusernm', 'highlightColor');
setColorInputBg('colorInputIdTopBar', 'topbarx', 'fbtopbarcolor');
setColorValues('addtopbar', 'topbarx', 'topbarColor');
setColorInputBg('colorInputIdSepColor', 'sepcolor', 'sepacolor');
setColorValues('addsepcolor', 'sepcolor', 'messageSeperate');

function setValueSettings(addusername, usernm, resultUsername) {
        document.getElementById(addusername).addEventListener('click', ((function() {
            var c = document.getElementById(usernm).value;
                //timeout.style.display = 'block';
                if (c == "") {
                    //document.getElementById("feedback6").textContent = "Nothing given.";
                    //setTimeout(hideElement, 1000); //milliseconds until timeout//    
                    //document.getElementById("found").className = "hide";
                } else {
                    obj[resultUsername] = c;
                    storage.set(obj);
                    //document.getElementById("feedback6").textContent = "Successfully set.";
                    //setTimeout(hideElement, 1000); //milliseconds until timeout// 
                    }
                })
            ));
        }
    
    function setOValueSettings() {
        document.getElementById("addotherusername").addEventListener('click', (function() {
            var c = document.getElementById('ousernm').value;
            //timeout.style.display = 'block';
            if (c == "") {
                //document.getElementById("feedback6").textContent = "Nothing given.";
                //setTimeout(hideElement, 1000); //milliseconds until timeout//
                //document.getElementById("found").className = "hide";
            } else {
                otherobj.highlightKeywords = c;
                storage.set(otherobj);
                storage.get('highlightKeywords',  (function(result) {
                    //if (document.getElementById("myText").textContent !== undefined) {
                        //document.getElementById("myText").textContent = result.highlightKeywords;
                    //} else {
                        //document.getElementById("myText").textContent += result.highlightKeywords;
                   // }
                }));
                //document.getElementById("feedback6").textContent = "Successfully set.";
                //setTimeout(hideElement, 1000); //milliseconds until timeout//   
            }
        }));
    }

    function setOValueSColor() {
        document.getElementById("addotheryucolor").addEventListener('click', (function() {
            var c = document.getElementById('ocusernm').value;
            //timeout.style.display = 'block';
            if (c == "") {
                //document.getElementById("feedback6").textContent = "Nothing given.";
                //setTimeout(hideElement, 1000); //milliseconds until timeout//
                //document.getElementById("found").className = "hide";
            } else {
                otherobj.highlightColor = c;
                storage.set(otherobj);
                //document.getElementById("feedback6").textContent = "Successfully set.";
                //setTimeout(hideElement, 1000); //milliseconds until timeout//
            }
        }));
    }

    function setOOValueSColor() {
        document.getElementById("addootheryucolor").addEventListener('click', (function() {
            var c = document.getElementById('oocusernm').value;
                //timeout.style.display = 'block';
                if (c == "") {
                    //document.getElementById("feedback6").textContent = "Nothing given.";
                    //setTimeout(hideElement, 1000); //milliseconds until timeout//
                    //document.getElementById("found").className = "hide";
                } else {
                    otherobj.highlightOpacity = c;
                    storage.set(otherobj);
                    //document.getElementById("feedback6").textContent = "Successfully set.";
                    //setTimeout(hideElement, 1000); //milliseconds until timeout//
                }
        }));
    }
        
        
    setValueSettings("addusername", "usernm", "yourUsername");
    setValueSettings("addfont", "font", "changefont");
    setValueSettings("addchatwidth", "chatwidth", "changeChatWidth");

    setOValueSettings();
    setOValueSColor();
    setOOValueSColor();

//chat text size slider
var sliderInputId = document.getElementById('sliderInputId');
var sliderOutputId = document.getElementById('sliderOutputId');
sliderInputId.addEventListener('input', (function(){
    sliderOutputId.value = sliderInputId.value + 'px';
    document.documentElement.style.setProperty("--msgfontsize", sliderInputId.value + "px");
    obj.chatTextSize = sliderInputId.value + "px";
    storage.set(obj)
    ;}), true);

//checkbox checks start

function checkboxState(checkboxValue, firstValue, secondValue) {
	var checkbox = document.querySelector("input[name=" + checkboxValue + "]");
	storage.get(checkboxValue, (function(result) {
	  if (result[checkboxValue] === firstValue) {
	      checkbox.checked = true;
	  } else {
	      checkbox.checked = false;
	  }
	}));
}
checkboxState('checkboxxd2', '2', '1');
checkboxState('checkboxEmoteMenu', '2', '1');
checkboxState('checkboxEnableSplitting', '2', '1');
checkboxState('checkboxEnableHighlight', '2', '1');


function checkboxCheck(resultValue, firstValue, secondValue, checkboxValue) {
	document.addEventListener('DOMContentLoaded', (function () {
		var checkbox = document.querySelector("input[name=" + checkboxValue + "]");
		checkbox.addEventListener('change', (function () {
		if (checkbox.checked) {
			obj[resultValue] = firstValue;
			obj[checkboxValue] = '2';
			storage.set(obj);
		} else {
			obj[resultValue] = secondValue;
			obj[checkboxValue] = '1';
			storage.set(obj);
		}
		}));
	}));
}

checkboxCheck('volumeScrollCheck', 'on', 'off', 'checkboxxd2');
checkboxCheck('emoteMenuCheck', 'on', 'off', 'checkboxEmoteMenu');
checkboxCheck('chatSplittingEnable', 'on', 'off', 'checkboxEnableSplitting');
checkboxCheck('highlightEnable', 'on', 'off', 'checkboxEnableHighlight');
//checkboxes end

//reset to defaults
document.getElementById('resetdefaults').addEventListener('click', function() {
    var modal = document.getElementById("myModal");
    var modalcontent = document.getElementById('resetToDefaultUnderstand');
    var yes = document.getElementById('resetyes');
    var no = document.getElementById('resetno');
    modal.style.display = "flex";
    modalcontent.style.display = "block";

    yes.addEventListener('click', (function() {
        modal.style.display = "none";
        storage.clear();
        chrome.storage.local.get(['SET'], function(result) { //check for custom emotes at install
            if (result.SET == null) { //if no emote set is saved
                var emotes = [{"code": "LUL", "src": "https://static-cdn.jtvnw.net/emoticons/v1/425618/2.0"}, {"code": "widepeepoHappy", "src": "https://cdn.frankerfacez.com/emote/270930/1"}, {"code": "HandsUp", "src": "https://cdn.frankerfacez.com/emoticon/229760/1"}, {"code": "4Head", "src": "https://static-cdn.jtvnw.net/emoticons/v1/354/2.0"}, {"code": "KKonaW", "src": "https://cdn.frankerfacez.com/emoticon/229486/1"}, {"code": "Clap", "src": "https://cdn.betterttv.net/emote/55b6f480e66682f576dd94f5/2x"}, {"code": "D:", "src": "https://cdn.betterttv.net/emote/55028cd2135896936880fdd7/1x"}, {"code": "EZ", "src": "https://cdn.betterttv.net/emote/5590b223b344e2c42a9e28e3/3x"}, {"code": "PepegaAim", "src": "https://cdn.betterttv.net/emote/5d0d7140ca4f4b50240ff6b4/3x"}, {"code": "peepoRiot", "src": "https://cdn.betterttv.net/emote/5e1fc363bca2995f13fb89d7/3x"}, {"code": "DonoWall", "src": "https://cdn.betterttv.net/emote/5f29959d713a6144748ae376/3x"}, {"code": "SadgeCry", "src": "https://cdn.betterttv.net/emote/5efd9d2572ac200523c5e455/3x"}, {"code": "peepoDJ", "src": "https://cdn.betterttv.net/emote/5fb972c7e2900c6f07df3adb/3x"}, {"code": "OuttaPocket", "src": "https://cdn.betterttv.net/emote/5ebfbb8bec17d81685a51621/3x"}, {"code": "catKISS", "src": "https://cdn.betterttv.net/emote/5f455410b2efd65d77e8cb14/3x"}, {"code": "FeelsRainMan", "src": "https://cdn.betterttv.net/emote/5eaa596a6c27013608bdb8ba/3x"}, {"code": "gachiHYPER", "src": "https://cdn.betterttv.net/emote/59143b496996b360ff9b807c/3x"}, {"code": "ratJAM", "src": "https://cdn.betterttv.net/emote/5f43037db2efd65d77e8a88f/3x"}, {"code": "Mexico", "src": "https://cdn.betterttv.net/emote/5f4692bdb2efd65d77e8dcec/3x"}, {"code": "ABDULpls", "src": "https://cdn.betterttv.net/emote/59a4ea2865231102cde26e9c/3x"}, {"code": "AlienPls3", "src": "https://cdn.betterttv.net/emote/5ea5b6cbd023b362f639427d/3x"}, {"code": "smokeTime", "src": "https://cdn.betterttv.net/emote/5e24755a8af14b5f1b4407eb/3x"}, {"code": "WICKEDSTEER", "src": "https://cdn.betterttv.net/emote/605c51297493072efdeb42b9/3x"}, {"code": "peepoPopcorn", "src": "https://cdn.betterttv.net/emote/5fa028c31b017902db158a73/3x"}, {"code": "peepoGiggles", "src": "https://cdn.betterttv.net/emote/606a14aea407570b72f2b0d9/3x"}, {"code": "Maracas", "src": "https://cdn.betterttv.net/emote/603708f57c74605395f33ddd/3x"}, {"code": "FEMLY", "src": "https://cdn.betterttv.net/emote/60bf6e6df8b3f62601c3aa1d/3x"}, {"code": "COPIUM", "src": "https://cdn.betterttv.net/emote/60c2f948f8b3f62601c3c191/3x"}, {"code": "3Heading", "src": "https://cdn.betterttv.net/emote/5f5cbe0268d9d86c020e615c/3x"}, {"code": "peepoSadPig", "src": "https://cdn.betterttv.net/emote/5e654bb56d485d372b28bc22/3x"}, {"code": "MikeShake", "src": "https://cdn.betterttv.net/emote/610eeefe76ea4e2b9f75ed66/3x"}, {"code": "monkaGun", "src": "https://cdn.frankerfacez.com/emoticon/187256/1"}, {"code": "monkaSpeed", "src": "https://cdn.frankerfacez.com/emoticon/227495/1"}, {"code": "PagMan", "src": "https://cdn.frankerfacez.com/emoticon/517647/1"}, {"code": "peepoAww", "src": "https://cdn.frankerfacez.com/emoticon/466805/1"}, {"code": "peepoEnter", "src": "https://cdn.frankerfacez.com/emoticon/367738/1"}, {"code": "Prayge", "src": "https://cdn.frankerfacez.com/emoticon/507766/1"}, {"code": "FistBump", "src": "https://cdn.frankerfacez.com/emoticon/596765/1"}, {"code": "PepeLa", "src": "https://cdn.frankerfacez.com/emoticon/355871/1"}, {"code": "peepoExit", "src": "https://cdn.frankerfacez.com/emoticon/355966/1"}, {"code": "FeelsBirthdayMan", "src": "https://cdn.frankerfacez.com/emoticon/52846/1"}, {"code": "sumSmash", "src": "https://cdn.betterttv.net/emote/5af84b9e766af63db43bf6b9/3x"}, {"code": "monkaChrist", "src": "https://cdn.betterttv.net/emote/615cb750b63cc97ee6d4fb2e/2x"}, {"code": "pikaO", "src": "https://cdn.betterttv.net/emote/5be4b0c9e9207c147ebcb517/2x"}, {"code": "hypeE", "src": "https://cdn.betterttv.net/emote/5b6ded5560d17f4657e1319e/3x"}, {"code": "PogOHey", "src": "https://cdn.betterttv.net/emote/6142b35f42092e37fb1bab0a/3x"}, {"code": "monkeLick", "src": "https://cdn.betterttv.net/emote/6036e8bd7c74605395f33cb5/3x"}, {"code": "gordoL", "src": "https://cdn.betterttv.net/emote/604d94c3306b602acc59c936/3x"}, {"code": "gordoM", "src": "https://cdn.betterttv.net/emote/604d94a0306b602acc59c934/3x"}, {"code": "rameeRP", "src": "https://cdn.betterttv.net/emote/604d7ed2306b602acc59c8aa/3x"}, {"code": "rameeBusiness", "src": "https://cdn.betterttv.net/emote/605a87957493072efdeb3586/3x"}, {"code": "rameeBaited", "src": "https://cdn.betterttv.net/emote/605a87cf7493072efdeb3588/3x"}, {"code": "PETTHEBONAN", "src": "https://cdn.betterttv.net/emote/605a87e37493072efdeb3589/3x"}, {"code": "gordoDance", "src": "https://cdn.betterttv.net/emote/605a87fc7493072efdeb358a/3x"}, {"code": "rameePurrr", "src": "https://cdn.betterttv.net/emote/60a58f3267644f1d67e895a3/3x"}, {"code": "gordoW", "src": "https://cdn.betterttv.net/emote/615eb775b63cc97ee6d532ff/3x"}, {"code": "ModTime", "src": "https://cdn.betterttv.net/emote/5e1b12868af14b5f1b43921d/3x"}, {"code": "smartKEK", "src": "https://cdn.betterttv.net/emote/5e90f27adcb51b5ce63fc5f0/3x"}, {"code": "peepoFlower", "src": "https://cdn.betterttv.net/emote/5ee2430bf54be95e2a84b30a/3x"}, {"code": "PogU", "src": "https://cdn.betterttv.net/emote/5e4e7a1f08b4447d56a92967/3x"}, {"code": "PogO", "src": "https://cdn.betterttv.net/emote/5e9cdca974046462f7673006/3x"}, {"code": "4Shrug", "src": "https://cdn.betterttv.net/emote/5e5ac4daddc7a054d7f0e74b/3x"}, {"code": "peepoHey", "src": "https://cdn.betterttv.net/emote/5f623b9829c50203e01357e8/3x"}, {"code": "OMEGALUL", "src": "https://cdn.betterttv.net/emote/583089f4737a8e61abb0186b/3x"}, {"code": "rameeGordita", "src": "https://cdn.betterttv.net/emote/5ee69980f54be95e2a850461/3x"}, {"code": "FeelsOkayMan", "src": "https://cdn.betterttv.net/emote/5803757f3d506fea7ee35267/3x"}, {"code": "POGGERS", "src": "https://cdn.betterttv.net/emote/58ae8407ff7b7276f8e594f2/3x"}, {"code": "peepoShy", "src": "https://cdn.betterttv.net/emote/5eaa12a074046462f768344b/3x"}, {"code": "kissahomie", "src": "https://cdn.betterttv.net/emote/5ef33318f91de70dea5bf9cd/3x"}, {"code": "VeryPog", "src": "https://cdn.betterttv.net/emote/5fba85d6c242076f1a051989/3x"}, {"code": "ModCheck", "src": "https://cdn.betterttv.net/emote/5d7eefb7c0652668c9e4d394/3x"}, {"code": "HYPERS", "src": "https://cdn.betterttv.net/emote/5980af4e3a1ac5330e89dc76/3x"}, {"code": "OkayChamp", "src": "https://cdn.betterttv.net/emote/5d2eb3dfabb461681ab7d4fb/3x"}, {"code": "PagChomp", "src": "https://cdn.betterttv.net/emote/5f284a13cf6d2144653dee4a/3x"}, {"code": "OMEGADANCEBUTFASTER", "src": "https://cdn.betterttv.net/emote/5f95254a58e96102e929e153/3x"}, {"code": "monkaPilot", "src": "https://cdn.betterttv.net/emote/5fad8aebeca18f6455c303ad/3x"}, {"code": "vibePls", "src": "https://cdn.betterttv.net/emote/5e8507e08b4f04096c5a7b18/3x"}, {"code": "BOOBA", "src": "https://cdn.betterttv.net/emote/5ff767bc94ed120c66d39b87/3x"}, {"code": "PETTHERAMEE", "src": "https://cdn.betterttv.net/emote/5fe262f7c158a13494c48f82/3x"}, {"code": "TomatoTime", "src": "https://cdn.betterttv.net/emote/5eceba4e10aaa55e2946f227/3x"}, {"code": "peepoBaba", "src": "https://cdn.betterttv.net/emote/5e10afe93267f72103fd482d/3x"}, {"code": "WAYTOODANK", "src": "https://cdn.betterttv.net/emote/5ad22a7096065b6c6bddf7f3/3x"}, {"code": "PogT", "src": "https://cdn.betterttv.net/emote/5f01f03973e8e20538d7659c/3x"}, {"code": "ActinUp", "src": "https://cdn.betterttv.net/emote/5fd4d761f534b2348746e030/3x"}, {"code": "SillyChamp", "src": "https://cdn.betterttv.net/emote/5dfd60a78245800d97562206/3x"}, {"code": "PepegaChat", "src": "https://cdn.betterttv.net/emote/5f2e77591ab9be446c4e8d9b/3x"}, {"code": "doctorPls", "src": "https://cdn.betterttv.net/emote/5f65d9644c714103dfb56cc3/3x"}, {"code": "FEMELY", "src": "https://cdn.betterttv.net/emote/60bf6e6df8b3f62601c3aa1d/3x"}, {"code": "lebronJAM", "src": "https://cdn.betterttv.net/emote/60a819e767644f1d67e8a825/3x"}, {"code": "Tssk", "src": "https://cdn.betterttv.net/emote/5fa1f87e1b017902db15aedd/3x"}, {"code": "Homies", "src": "https://cdn.betterttv.net/emote/5e21217e1df9195f1a4c75dc/3x"}, {"code": "PainChamp", "src": "https://cdn.betterttv.net/emote/5f77d7eaccde1f4a870c06c6/3x"}, {"code": "peepoGiggle", "src": "https://cdn.betterttv.net/emote/60a1e09f67644f1d67e8796d/3x"}, {"code": "PepegaCredit", "src": "https://cdn.betterttv.net/emote/5e9643a2d023b362f6381be1/3x"}, {"code": "COCKA", "src": "https://cdn.betterttv.net/emote/5ff7c91f8476930c6d5affd7/3x"}, {"code": "NOOO", "src": "https://cdn.betterttv.net/emote/5fd1610acbd462462d56cd7d/3x"}, {"code": "PepeRun", "src": "https://cdn.betterttv.net/emote/5ff05a265ae5852e415491eb/3x"}, {"code": "BRUHMM", "src": "https://cdn.betterttv.net/emote/6041b2d0306b602acc597384/3x"}, {"code": "MEGALUL", "src": "https://cdn.betterttv.net/emote/6157ac23b63cc97ee6d45bb6/3x"}, {"code": "OppPack", "src": "https://cdn.betterttv.net/emote/6143d0d742092e37fb1bd2a6/3x"}, {"code": "GachiPls", "src": "https://cdn.betterttv.net/emote/58868aa5afc2ff756c3f495e/3x"}, {"code": "PepeHands", "src": "https://cdn.betterttv.net/emote/59f27b3f4ebd8047f54dee29/3x"}, {"code": "Pepega", "src": "https://cdn.betterttv.net/emote/5aca62163e290877a25481ad/3x"}, {"code": "pepeD", "src": "https://cdn.betterttv.net/emote/5b1740221c5a6065a7bad4b5/3x"}, {"code": "peepoGlad", "src": "https://cdn.betterttv.net/emote/5e1a0e188af14b5f1b4384c7/3x"}, {"code": "pepeJAM", "src": "https://cdn.betterttv.net/emote/5b77ac3af7bddc567b1d5fb2/3x"}, {"code": "catJAM", "src": "https://cdn.betterttv.net/emote/5f1b0186cf6d2144653d2970/3x"}, {"code": "nymnCorn", "src": "https://cdn.betterttv.net/emote/56cb56f5500cb4cf51e25b90/3x"}, {"code": "4WeirdBuff", "src": "https://cdn.betterttv.net/emote/60d27a2f8ed8b373e42180c0/3x"}, {"code": "Susge", "src": "https://cdn.betterttv.net/emote/6144f0ea42092e37fb1bf607/3x"}, {"code": "NODDERS", "src": "https://cdn.betterttv.net/emote/615648dab63cc97ee6d425fc/3x"}, {"code": "gachiBASS", "src": "https://cdn.betterttv.net/emote/57719a9a6bdecd592c3ad59b/3x"}, {"code": "peepoClap", "src": "https://cdn.betterttv.net/emote/5d38aaa592fc550c2d5996b8/3x"}, {"code": "PepegaGun", "src": "https://cdn.betterttv.net/emote/5db4816f8b059b723dc1a58d/3x"}, {"code": "TriHardoM", "src": "https://cdn.betterttv.net/emote/5dc6177127360247dd651072/3x"}, {"code": "PeepoJuice", "src": "https://cdn.betterttv.net/emote/5deaecf4515a2a77bc9e94ab/3x"}, {"code": "FeelsDankMan", "src": "https://cdn.betterttv.net/emote/5d6209854932b21d9c333195/3x"}, {"code": "peepoBlush", "src": "https://cdn.betterttv.net/emote/5d61bae91f77c11da35ac50e/3x"}, {"code": "KKool", "src": "https://cdn.betterttv.net/emote/56c2cff2d9ec6bf744247bf1/3x"}, {"code": "monkaSTEER", "src": "https://cdn.betterttv.net/emote/5ed0fd17f54be95e2a835054/3x"}, {"code": "HACKERMANS", "src": "https://cdn.betterttv.net/emote/5b490e73cf46791f8491f6f4/3x"}, {"code": "pepeMeltdown", "src": "https://cdn.betterttv.net/emote/5ba84271c9f0f66a9efc1c86/3x"}, {"code": "SmokeTime", "src": "https://cdn.betterttv.net/emote/5c86b32aa787200418a68742/3x"}, {"code": "TriDance", "src": "https://cdn.betterttv.net/emote/5d1e70f498539c4801cc3811/3x"}, {"code": "yikesJAM", "src": "https://cdn.betterttv.net/emote/5e206ce11df9195f1a4c6baf/3x"}, {"code": "4Champ", "src": "https://cdn.frankerfacez.com/emoticon/475474/4"}, {"code": "4Halt", "src": "https://cdn.frankerfacez.com/emoticon/431368/4"}, {"code": "4Joy", "src": "https://cdn.frankerfacez.com/emoticon/455275/4"}, {"code": "4Kid", "src": "https://cdn.frankerfacez.com/emoticon/452600/4"}, {"code": "4Love", "src": "https://cdn.frankerfacez.com/emoticon/387482/4"}, {"code": "4Weeb", "src": "https://cdn.frankerfacez.com/emoticon/626118/4"}, {"code": "4Weird", "src": "https://cdn.frankerfacez.com/emoticon/308193/4"}, {"code": "4WeirdW", "src": "https://cdn.frankerfacez.com/emoticon/325413/4"}, {"code": "5Head", "src": "https://cdn.frankerfacez.com/emoticon/239504/4"}, {"code": "BRUH", "src": "https://cdn.frankerfacez.com/emoticon/517775/4"}, {"code": "DankHug", "src": "https://cdn.frankerfacez.com/emoticon/444667/4"}, {"code": "DankLove", "src": "https://cdn.frankerfacez.com/emoticon/561459/4"}, {"code": "DankThink", "src": "https://cdn.frankerfacez.com/emoticon/533342/4"}, {"code": "FeelsStrongMan", "src": "https://cdn.frankerfacez.com/emoticon/585292/4"}, {"code": "FeelsWeirdManW", "src": "https://cdn.frankerfacez.com/emoticon/208616/4"}, {"code": "Gayge", "src": "https://cdn.frankerfacez.com/emoticon/626147/4"}, {"code": "Hmmm", "src": "https://cdn.frankerfacez.com/emoticon/498920/4"}, {"code": "Janny", "src": "https://cdn.frankerfacez.com/emoticon/545397/4"}, {"code": "Kapp", "src": "https://cdn.frankerfacez.com/emoticon/218860/4"}, {"code": "PopCat", "src": "https://cdn.betterttv.net/emote/5fa8f232eca18f6455c2b2e1/3x"}, {"code": "MLADY", "src": "https://cdn.betterttv.net/emote/5b34ef0dbe275b629fc726a2/3x"}, {"code": "TriKool", "src": "https://cdn.betterttv.net/emote/59a6d3dedccaf930aa8f3de1/3x"}, {"code": "pepePopcorn", "src": "https://cdn.betterttv.net/emote/5b157890aca8015213e555d1/3x"}, {"code": "PETTHEMODS", "src": "https://cdn.betterttv.net/emote/617452e578982e8cec110f6d/3x"}, {"code": "peepoTalk", "src": "https://cdn.betterttv.net/emote/608f154f39b5010444d0a765/3x"}, {"code": "gachiW", "src": "https://cdn.betterttv.net/emote/5ce66e8c1281d44f03de8051/3x"}, {"code": "DANKIES", "src": "https://cdn.betterttv.net/emote/5f92938a710f8302f0c8ee82/3x"}, {"code": "PepoThink", "src": "https://cdn.betterttv.net/emote/5a4ad2574884645e5706e51a/3x"}, {"code": "peepoPat", "src": "https://cdn.betterttv.net/emote/5c53afb3c5744c56e7a951d1/3x"}, {"code": "ppHop", "src": "https://cdn.betterttv.net/emote/60b99d3cf8b3f62601c383bc/3x"}, {"code": "peepoBye", "src": "https://cdn.betterttv.net/emote/5f6b6da762f49f0b2162e180/3x"}, {"code": "FeelsBadMan", "src": "https://cdn.betterttv.net/emote/5ff4a9ef85ffcf047a709b2e/3x"}, {"code": "NOPERS", "src": "https://cdn.betterttv.net/emote/60a8d02c67644f1d67e8ace7/3x"}, {"code": "Dance", "src": "https://cdn.betterttv.net/emote/6176ec931f8ff7628e6af723/3x"}, {"code": "forsenCoomer", "src": "https://cdn.betterttv.net/emote/5ec7287010aaa55e294663dc/3x"}, {"code": "ppOverheat", "src": "https://cdn.betterttv.net/emote/5b3e953a2c8a38720760c7f7/3x"}, {"code": "Jammies", "src": "https://cdn.betterttv.net/emote/6186a1381f8ff7628e6cb261/3x"}, {"code": "pepeCD", "src": "https://cdn.betterttv.net/emote/5b339e387d878d04acd5a1c1/3x"}, {"code": "hackerCD", "src": "https://cdn.betterttv.net/emote/5d82600ec0652668c9e4e2f2/3x"}, {"code": "PogTasty", "src": "https://cdn.betterttv.net/emote/612464ddaf28e9568649ca10/3x"}, {"code": "Glizzy", "src": "https://cdn.betterttv.net/emote/5fd390bcf534b2348746cb1d/3x"}, {"code": "docSpin", "src": "https://cdn.betterttv.net/emote/5e13c9140550d42106b8e48c/3x"}, {"code": "Lamonting", "src": "https://cdn.betterttv.net/emote/60203910381eb06cbaa67ee3/3x"}, {"code": "docArrive", "src": "https://cdn.betterttv.net/emote/5f140754713a61447489a76f/3x"}, {"code": "docLeave", "src": "https://cdn.betterttv.net/emote/5f13f4ca713a61447489a6da/3x"}, {"code": "rameeGordo", "src": "https://static-cdn.jtvnw.net/emoticons/v2/300710496/default/dark/1.0"}, {"code": "rameeChamp", "src": "https://static-cdn.jtvnw.net/emoticons/v2/301176733/default/dark/1.0"}, {"code": "rameeLove", "src": "https://static-cdn.jtvnw.net/emoticons/v2/304313143/default/dark/1.0"}, {"code": "rameePoggers", "src": "https://static-cdn.jtvnw.net/emoticons/v2/304313151/default/dark/1.0"}, {"code": "rameeCG", "src": "https://static-cdn.jtvnw.net/emoticons/v2/301123910/default/dark/1.0"}, {"code": "rameeBlue", "src": "https://static-cdn.jtvnw.net/emoticons/v2/302789669/default/dark/1.0"}, {"code": "rameeMonka", "src": "https://static-cdn.jtvnw.net/emoticons/v2/300219802/default/dark/1.0"}, {"code": "rameeWeird", "src": "https://static-cdn.jtvnw.net/emoticons/v2/1977446/default/dark/1.0"}, {"code": "rameeLaugh", "src": "https://static-cdn.jtvnw.net/emoticons/v2/304313157/default/dark/1.0"}, {"code": "rameeHmm", "src": "https://static-cdn.jtvnw.net/emoticons/v2/300219798/default/dark/1.0"}, {"code": "rameeEZ", "src": "https://static-cdn.jtvnw.net/emoticons/v2/300219795/default/dark/1.0"}, {"code": "rameeHands", "src": "https://static-cdn.jtvnw.net/emoticons/v2/300364711/default/dark/1.0"}, {"code": "rameeGGordo", "src": "https://static-cdn.jtvnw.net/emoticons/v2/301818707/default/dark/1.0"}, {"code": "rameeWTF", "src": "https://static-cdn.jtvnw.net/emoticons/v2/300219805/default/dark/1.0"}, {"code": "rameeLurk", "src": "https://static-cdn.jtvnw.net/emoticons/v2/301257706/default/dark/1.0"}, {"code": "rameeWave", "src": "https://static-cdn.jtvnw.net/emoticons/v2/300023124/default/dark/1.0"}, {"code": "rameePepega", "src": "https://static-cdn.jtvnw.net/emoticons/v2/301257712/default/dark/1.0"}, {"code": "rameeSpit", "src": "https://static-cdn.jtvnw.net/emoticons/v2/301123924/default/dark/1.0"}, {"code": "rameeStare", "src": "https://static-cdn.jtvnw.net/emoticons/v2/302944482/default/dark/1.0"}, {"code": "rameeVulture", "src": "https://static-cdn.jtvnw.net/emoticons/v2/301123927/default/dark/1.0"}, {"code": "rameeME", "src": "https://static-cdn.jtvnw.net/emoticons/v2/302525836/default/dark/1.0"}, {"code": "rameeD", "src": "https://static-cdn.jtvnw.net/emoticons/v2/301261819/default/dark/1.0"}, {"code": "rameeMaldini", "src": "https://static-cdn.jtvnw.net/emoticons/v2/301261656/default/dark/1.0"}, {"code": "rameeCash", "src": "https://static-cdn.jtvnw.net/emoticons/v2/301257709/default/dark/1.0"}, {"code": "rameeParkKnight", "src": "https://static-cdn.jtvnw.net/emoticons/v2/301257714/default/dark/1.0"}, {"code": "rameeLUL", "src": "https://static-cdn.jtvnw.net/emoticons/v2/301257704/default/dark/1.0"}, {"code": "rameeJail", "src": "https://static-cdn.jtvnw.net/emoticons/v2/301257702/default/dark/1.0"}, {"code": "rameeFP", "src": "https://static-cdn.jtvnw.net/emoticons/v2/301257691/default/dark/1.0"}, {"code": "rameeDab", "src": "https://static-cdn.jtvnw.net/emoticons/v2/301257688/default/dark/1.0"}, {"code": "rameeCozy", "src": "https://static-cdn.jtvnw.net/emoticons/v2/301257685/default/dark/1.0"}, {"code": "rameeRanger", "src": "https://static-cdn.jtvnw.net/emoticons/v2/301257684/default/dark/1.0"}, {"code": "ramee10", "src": "https://static-cdn.jtvnw.net/emoticons/v2/301257679/default/dark/1.0"}, {"code": "rameeSad", "src": "https://static-cdn.jtvnw.net/emoticons/v2/301176726/default/dark/1.0"}, {"code": "rameeUmbrella", "src": "https://static-cdn.jtvnw.net/emoticons/v2/301123921/default/dark/1.0"}, {"code": "rameeMald", "src": "https://static-cdn.jtvnw.net/emoticons/v2/301123918/default/dark/1.0"}, {"code": "rameeGfuel", "src": "https://static-cdn.jtvnw.net/emoticons/v2/301123916/default/dark/1.0"}, {"code": "rameeThermiteGod", "src": "https://static-cdn.jtvnw.net/emoticons/v2/301123914/default/dark/1.0"}, {"code": "rameeWarlord", "src": "https://static-cdn.jtvnw.net/emoticons/v2/300741609/default/dark/1.0"}, {"code": "rameeCode", "src": "https://static-cdn.jtvnw.net/emoticons/v2/306516701/default/dark/1.0"}, {"code": "rameeDice", "src": "https://static-cdn.jtvnw.net/emoticons/v2/306516709/default/dark/1.0"}, {"code": "rameeSB", "src": "https://static-cdn.jtvnw.net/emoticons/v2/306516723/default/dark/1.0"}, {"code": "rameeComputer", "src": "https://static-cdn.jtvnw.net/emoticons/v2/306516736/default/dark/1.0"}, {"code": "rameeGift", "src": "https://static-cdn.jtvnw.net/emoticons/v2/306516742/default/dark/1.0"}, {"code": "rameeGem", "src": "https://static-cdn.jtvnw.net/emoticons/v2/306516751/default/dark/1.0"}, {"code": "rameeHappy", "src": "https://static-cdn.jtvnw.net/emoticons/v2/306516759/default/dark/1.0"}, {"code": "rameeInspect", "src": "https://static-cdn.jtvnw.net/emoticons/v2/306516768/default/dark/1.0"}, {"code": "rameeCorn", "src": "https://static-cdn.jtvnw.net/emoticons/v2/306516786/default/dark/1.0"}, {"code": "rameeM", "src": "https://static-cdn.jtvnw.net/emoticons/v2/306516834/default/dark/1.0"}, {"code": "rameeNerd", "src": "https://static-cdn.jtvnw.net/emoticons/v2/306516849/default/dark/1.0"}, {"code": "rameeM1", "src": "https://static-cdn.jtvnw.net/emoticons/v2/306516854/default/dark/1.0"}, {"code": "rameeHypers", "src": "https://static-cdn.jtvnw.net/emoticons/v2/306516921/default/dark/1.0"}, {"code": "rameeJoy", "src": "https://static-cdn.jtvnw.net/emoticons/v2/306516975/static/light/3.0"}, {"code": "rameeChips", "src": "https://static-cdn.jtvnw.net/emoticons/v2/306516799/static/light/3.0"}, {"code": "rameeREE", "src": "https://static-cdn.jtvnw.net/emoticons/v2/1117919/static/light/3.0"}, {"code": "Pog", "src": "https://cdn.betterttv.net/emote/5ff827395ef7d10c7912c106/3x"}, {"code": "WeirdChamp", "src": "https://cdn.frankerfacez.com/emoticon/421124/4"}, {"code": "PogOFace", "src": "https://cdn.7tv.app/emote/610dcf70900cbd77c6957b1f/1x"}, {"code": "Hugahomie", "src": "https://cdn.7tv.app/emote/611c38fee179b4f2c7ad3932/1x"}, {"code": "PogOGlad", "src": "https://cdn.7tv.app/emote/611cca24c7e1fe52005c15a6/1x"}, {"code": "PogOHmm", "src": "https://cdn.7tv.app/emote/612d6a2a8f5e7546812c4828/1x"}, {"code": "Backseatega", "src": "https://cdn.7tv.app/emote/60fab6e6e57bec0216b411a4/1x"}, {"code": "4WeirdPls", "src": "https://cdn.7tv.app/emote/60b3736d3c9b35aea9938645/1x"}, {"code": "Clueless", "src": "https://cdn.7tv.app/emote/60b14a737a157a7f3360fb32/1x"}, {"code": "KEKL", "src": "https://cdn.7tv.app/emote/60b0c3ddb254a5e16b87afc4/1x"}, {"code": "monkerS", "src": "https://cdn.7tv.app/emote/60ae8c713c27a8b79cad9058/1x"}, {"code": "DankFlower", "src": "https://cdn.7tv.app/emote/60af999f566c3e1fc9d55ae9/1x"}, {"code": "CoffeeTime", "src": "https://cdn.7tv.app/emote/60ae7fc880dd689cc784aa74/1x"}, {"code": "Binoculars", "src": "https://cdn.7tv.app/emote/60411e5bcf6746000db10353/1x"}, {"code": "BorpaSpin", "src": "https://cdn.7tv.app/emote/60845a505e01df61570a6f1d/1x"}, {"code": "peepoChat", "src": "https://cdn.7tv.app/emote/60a4038db0dc46d7b43df99a/1x"}, {"code": "BLUBBERS", "src": "https://cdn.7tv.app/emote/605390b39d9e96000d244fc9/1x"}, {"code": "Okayge", "src": "https://cdn.7tv.app/emote/605391a99d9e96000d244fd0/1x"}, {"code": "4WeirdJam", "src": "https://cdn.7tv.app/emote/60b2a8eb7421c2077334778c/1x"}, {"code": "Latege", "src": "https://cdn.7tv.app/emote/60b2cce90616dd6156d14fc0/1x"}, {"code": "peepoBlushComfy", "src": "https://cdn.7tv.app/emote/60b331dcfdd0ee2f1b4325e6/1x"}, {"code": "PogOpium", "src": "https://cdn.7tv.app/emote/611c1fcc88f0e6c820fb9403/1x"}, {"code": "KEKWsike", "src": "https://cdn.7tv.app/emote/613150e8492022af58393fe3/1x"}, {"code": "pepoJS", "src": "https://cdn.7tv.app/emote/613fa148962a609048644900/1x"}, {"code": "borpaShy", "src": "https://cdn.7tv.app/emote/614feddd6251d7e000daa0a4/1x"}, {"code": "peepoLoser", "src": "https://cdn.7tv.app/emote/617da5c7c632476d20d075a4/1x"}, {"code": "PogOLove", "src": "https://cdn.7tv.app/emote/613b449bd39af29b8b6e9179/1x"}, {"code": "Batchesting", "src": "https://cdn.7tv.app/emote/613ec0e1962a60904864305c/1x"}, {"code": "Shrug", "src": "https://cdn.7tv.app/emote/6106d503e1f0b0767ef7855e/1x"}, {"code": "LiquorTime", "src": "https://cdn.7tv.app/emote/60b01e84aecc11e86c3d7a5e/1x"}, {"code": "pokiJam", "src": "https://cdn.7tv.app/emote/60ae91bc4b1ea4526dfe0b24/1x"}, {"code": "HARAM", "src": "https://cdn.7tv.app/emote/603cb4a5c20d020014423c55/1x"}, {"code": "Unlucky", "src": "https://cdn.7tv.app/emote/603cc20e73d7a5001441f9f4/1x"}, {"code": "stopbeingMean", "src": "https://cdn.7tv.app/emote/60bc8bb7824feec0de8f94cc/1x"}, {"code": "WutFaceW", "src": "https://cdn.7tv.app/emote/60ca35a03591d98c4040ea9a/1x"}, {"code": "peepoGun", "src": "https://cdn.7tv.app/emote/60f48309f7fdd1860ad98c7d/1x"}, {"code": "peepoSmile", "src": "https://cdn.7tv.app/emote/60bd00d5d04a92d5b25fb585/1x"}, {"code": "PogOSit", "src": "https://cdn.7tv.app/emote/611c2ba65dcf6feb51183113/1x"}, {"code": "Saj", "src": "https://cdn.7tv.app/emote/6122988ebc0fb9d60b9c612e/1x"}, {"code": "WideHardo", "src": "https://cdn.frankerfacez.com/emote/309114/1"}, {"code": "monkaW", "src": "https://cdn.betterttv.net/emote/59ca6551b27c823d5b1fd872/1x"}, {"code": "monkaS", "src": "https://cdn.frankerfacez.com/emote/465417/1"}, {"code": "KKona", "src": "https://cdn.betterttv.net/emote/566ca04265dbbdab32ec054a/1x"}, {"code": "KEKW", "src": "https://cdn.frankerfacez.com/emoticon/381875/4"}, {"code": "cmonBruh", "src": "https://static-cdn.jtvnw.net/emoticons/v2/84608/default/dark/1.0"}, {"code": "SeemsGood", "src": "https://static-cdn.jtvnw.net/emoticons/v2/64138/default/dark/1.0"}, {"code": "WutFace", "src": "https://static-cdn.jtvnw.net/emoticons/v2/28087/default/dark/1.0"}, {"code": "BabyRage", "src": "https://static-cdn.jtvnw.net/emoticons/v2/22639/default/dark/1.0"}, {"code": "HotPokket", "src": "https://static-cdn.jtvnw.net/emoticons/v2/357/default/dark/1.0"}, {"code": "ResidentSleeper", "src": "https://static-cdn.jtvnw.net/emoticons/v2/245/default/dark/1.0"}, {"code": "Kreygasm", "src": "https://static-cdn.jtvnw.net/emoticons/v2/41/default/dark/1.0"}, {"code": "DansGame", "src": "https://cdn.frankerfacez.com/static/replacements/33-DansGame.png"}, {"code": "squadW", "src": "https://static-cdn.jtvnw.net/emoticons/v2/117611/default/dark/1.0"}, {"code": "LULW", "src": "https://cdn.betterttv.net/emote/5dc79d1b27360247dd6516ec/1x"}, {"code": "02Hype", "src": "https://cdn.7tv.app/emote/60aef05411a994a4ac234110/4x"}, {"code": "rameeCopium", "src": "https://cdn.7tv.app/emote/619b7d4370bd99598795a585/4x"}, {"code": "NammersOut", "src": "https://cdn.7tv.app/emote/60ad1e90ff0c5122a7be7f27/4x"}, {"code": "miyanoHype", "src": "https://cdn.7tv.app/emote/60a1b9ccac2bcb20efc4b28d/4x"}, {"code": "WatchingStream", "src": "https://cdn.7tv.app/emote/609f3186326f0aaa85b34a45/4x"}, {"code": "HOPIUM", "src": "https://cdn.7tv.app/emote/60c43d1156d255581fcfb7f1/4x"}, {"code": "4KidHoodie", "src": "https://cdn.7tv.app/emote/619f013de9684edbbc36b96e/4x"}, {"code": "4Cozy", "src": "https://cdn.7tv.app/emote/619f1728ffa9aba101bb02cb/4x"}, {"code": "TeaTime", "src": "https://cdn.7tv.app/emote/60fbf6924653f5d6c1ef2eec/4x"}, {"code": "broWave", "src": "https://cdn.7tv.app/emote/619f4672ffa9aba101bb0703/4x"}, {"code": "ThumbsUp", "src": "https://cdn.7tv.app/emote/619ebfa1eecae7a725bccadf/4x"}, {"code": "NezukoHype", "src": "https://cdn.7tv.app/emote/611fa5c711f605af9d4cc543/4x"}, {"code": "VeryPag", "src": "https://cdn.7tv.app/emote/60ab8e5ed9ec9c6fc5fb4ff1/4x"}, {"code": "NekoHi", "src": "https://cdn.7tv.app/emote/60b173cee1d2d9b0f49b44ea/4x"}, {"code": "Homi", "src": "https://cdn.7tv.app/emote/60b28bf9407ad7d4e927d798/4x"}, {"code": "chikaHype", "src": "https://cdn.7tv.app/emote/60b18185e1d2d9b0f4e90815/4x"}, {"code": "AYAYA", "src": "https://cdn.7tv.app/emote/60cb2e0194befb7c93dbe281/4x"}, {"code": "Juice", "src": "https://cdn.7tv.app/emote/60b7cc2506e1b08974dc4010/4x"}, {"code": "VeryPogftxQcInTheShower", "src": "https://cdn.7tv.app/emote/6116637390ef9df34c935668/4x"}, {"code": "elmoPls", "src": "https://cdn.7tv.app/emote/60aeb5428a2d7f04b130b6f2/4x"}, {"code": "rameeWiggle", "src": "https://cdn.7tv.app/emote/61a3dee915b3ff4a5bb82c55/4x"}, {"code": "sumiPls", "src": "https://cdn.7tv.app/emote/618daa48d34608492cc2d522/4x"}, {"code": "GAMBA", "src": "https://cdn.7tv.app/emote/6175d52effc7244d797d15bf/4x"}, {"code": "DinkiHappy", "src": "https://cdn.7tv.app/emote/61471acf3d8c2d23697a9261/4x"}, {"code": "menheraCorn", "src": "https://cdn.7tv.app/emote/61454a877b14fdf700b957b4/4x"}, {"code": "monkaUOMEGA", "src": "https://cdn.7tv.app/emote/609f2100326f0aaa85aefe53/4x"}, {"code": "Thinking", "src": "https://cdn.7tv.app/emote/603e9f57284626000d068870/4x"}, {"code": "Thinking2", "src": "https://cdn.7tv.app/emote/603e9f61284626000d068871/4x"}, {"code": "HUH", "src": "https://cdn.7tv.app/emote/6141f07a962a60904864895e/4x"}, {"code": "PogOFF", "src": "https://cdn.7tv.app/emote/611c1b77ca726e2a0fddb3ce/4x"}, {"code": "kumaPls", "src": "https://cdn.7tv.app/emote/60ab6c8306222d3c18ca19c2/4x"}, {"code": "batPls", "src": "https://cdn.7tv.app/emote/610a8aab49dcebc8a3924f42/4x"}, {"code": "CaughtIn4K", "src": "https://cdn.7tv.app/emote/60bbc4a82412bfe45d06e800/4x"}, {"code": "chikaPls", "src": "https://cdn.7tv.app/emote/60b131d9bdea67539866ca77/4x"}, {"code": "koronePls", "src": "https://cdn.7tv.app/emote/60ad1de6ff0c5122a7be0421/4x"}, {"code": "peepoBless", "src": "https://cdn.7tv.app/emote/60b793775d373afbd697df06/4x"}, {"code": "FeelsCarriedMan", "src": "https://cdn.7tv.app/emote/60ba6d07b9bf8654d2c7d52d/4x"}, {"code": "PogOWiggle", "src": "https://cdn.7tv.app/emote/61261d7787db1fd6ee323d12/4x"}, {"code": "spongePls", "src": "https://cdn.7tv.app/emote/60ae9c3aac03cad60789fb4c/4x"}, {"code": "nyanPls", "src": "https://cdn.7tv.app/emote/60a948e99d598ea72faa2b3d/4x"}, {"code": "Mua", "src": "https://cdn.7tv.app/emote/611678a290ef9df34c9356f5/4x"}, {"code": "pepoHmm", "src": "https://cdn.7tv.app/emote/60b8008e903b41b7b735cea9/4x"}, {"code": "peepoPog", "src": "https://cdn.7tv.app/emote/60ae9693f6a2c3b332218a5d/4x"}, {"code": "SUSSY", "src": "https://cdn.7tv.app/emote/60ccf4479f5edeff9938fa77/4x"}, {"code": "widepeepoHappyRightHeart", "src": "https://cdn.7tv.app/emote/60b1dfb45b301a8ce80512e5/4x"}, {"code": "peepoLost", "src": "https://cdn.7tv.app/emote/61268e9987db1fd6ee3242f8/4x"}, {"code": "peepoSleep", "src": "https://cdn.7tv.app/emote/60a5e53635a601f90117c797/4x"}, {"code": "weebPeepoSmash", "src": "https://cdn.7tv.app/emote/60b41a91214e1ca5c3adca37/4x"}, {"code": "HutaoPls", "src": "https://cdn.7tv.app/emote/60d99ce79daf2660d8632eb1/4x"}, {"code": "rainbowPls", "src": "https://cdn.7tv.app/emote/60aebb2c955615deef2b2430/4x"}, {"code": "Applecatrun", "src": "https://cdn.7tv.app/emote/6072a058dcae02001b44e602/4x"}, {"code": "TRUEING", "src": "https://cdn.7tv.app/emote/6042076f77137b000de9e666/4x"}, {"code": "THIS", "src": "https://cdn.7tv.app/emote/618330c5f1ae15abc7ebb8c6/4x"}, {"code": "peepoBlushShake", "src": "https://cdn.7tv.app/emote/615355ef20eaf897465ac08d/4x"}, {"code": "peepoSit", "src": "https://cdn.7tv.app/emote/60e1b8f4dac155e3661b8090/4x"}, {"code": "Pain", "src": "https://cdn.7tv.app/emote/60b412877b2352c84b041252/4x"}, {"code": "peepoCozy", "src": "https://cdn.7tv.app/emote/60b09644ad7fb4b50b7bf3d6/4x"}, {"code": "YAAAY", "src": "https://cdn.7tv.app/emote/60afe5f9f405a517c01f2ddf/4x"}, {"code": "veiSway", "src": "https://cdn.7tv.app/emote/60ae95eaf6a2c3b332134fa6/4x"}, {"code": "4WeirdBusiness", "src": "https://cdn.7tv.app/emote/60ae84eb4b1ea4526d5bc117/4x"}, {"code": "squadJamming", "src": "https://cdn.7tv.app/emote/60a53b11a71d9fd1104453d3/4x"}, {"code": "4Evil", "src": "https://cdn.7tv.app/emote/609ef6d84c18609a1d9a9826/4x"}, {"code": "NezukoJam", "src": "https://cdn.7tv.app/emote/60ae9f0cf39a7552b68ccf34/4x"}, {"code": "AiWave", "src": "https://cdn.7tv.app/emote/618db59d17e4d50afc0d1381/4x"}, {"code": "ChizuPls", "src": "https://cdn.7tv.app/emote/618db679b1eb03daac7d5ab9/4x"}, {"code": "KannaPls", "src": "https://cdn.7tv.app/emote/60b13545a73592831b5223a1/4x"}, {"code": "MeguminFlick", "src": "https://cdn.7tv.app/emote/60b14ea37a157a7f33800842/4x"}, {"code": "Wiggle", "src": "https://cdn.7tv.app/emote/617f15a5b0bfad9428970713/4x"}, {"code": "4Time", "src": "https://cdn.7tv.app/emote/60bd7966dff5a27dafa21325/4x"}, {"code": "LIVE", "src": "https://cdn.7tv.app/emote/60be559962d85a7787910e90/4x"}, {"code": "4Fingers", "src": "https://cdn.7tv.app/emote/60bbc255fa25be34b68b6504/4x"}, {"code": "Nerdge", "src": "https://cdn.7tv.app/emote/60aeb2958a2d7f04b1f39091/4x"}, {"code": "Madge", "src": "https://cdn.7tv.app/emote/60a95f109d598ea72fad13bd/4x"}, {"code": "Danki", "src": "https://cdn.7tv.app/emote/60b28bb86078b7f956e7ee5f/4x"}, {"code": "KEKWaddle", "src": "https://cdn.7tv.app/emote/611418369bf574f1fded6603/4x"}, {"code": "peepo2Cozy", "src": "https://cdn.7tv.app/emote/60af5a2b35c50a77927fa7c2/4x"}, {"code": "PepegeSitSnack", "src": "https://cdn.7tv.app/emote/605388ef9d9e96000d244f84/4x"}, {"code": "HomerGrind", "src": "https://cdn.7tv.app/emote/60ae2ff2aee2aa5538c73c05/4x"}, {"code": "peepoCheer", "src": "https://cdn.7tv.app/emote/60b5ae6cfc5978e646cffd39/4x"}, {"code": "yoimiyaSip", "src": "https://cdn.7tv.app/emote/611f086cbb9ef42fc40d5ae6/4x"}, {"code": "PogO4K", "src": "https://cdn.discordapp.com/emojis/901331774104281108.png?size=96"}, {"code": "PPogO", "src": "https://cdn.discordapp.com/emojis/824538177037139989.gif?size=96"}, {"code": "donkSip", "src": "https://cdn.discordapp.com/emojis/807380570882703390.png?size=96"}, {"code": "PJSugar", "src": "https://cdn.discordapp.com/emojis/774843646427529277.png?size=96"}, {"code": "KannaNom", "src": "https://cdn.7tv.app/emote/60b13dc973472da2973ed7b3/4x"}, {"code": "ningPls", "src": "https://cdn.7tv.app/emote/61266c2a3e19d5484596a4ad/4x"}, {"code": "koroneHey", "src": "https://cdn.7tv.app/emote/60eb671ff9e2199b788958c0/4x"}, {"code": "chikaYo", "src": "https://cdn.7tv.app/emote/60b1312ef7d3c8cf66a70e78/4x"}, {"code": "peepoBox", "src": "https://cdn.7tv.app/emote/60b3319e2c1f0251fe58dcda/4x"}, {"code": "MadgeJuice", "src": "https://cdn.7tv.app/emote/60aede5ba564afa26e2f668c/4x"}, {"code": "peepoCoffee", "src": "https://cdn.7tv.app/emote/60ae4121b2ecb01505492dbe/4x"}, {"code": "JointTime", "src": "https://cdn.7tv.app/emote/60b39ac2d32fba7982a137eb/4x"}, {"code": "Chatting", "src": "https://cdn.7tv.app/emote/6105de63a32b8c587a52a21f/4x"}, {"code": "donkReading", "src": "https://cdn.7tv.app/emote/60be94498b32571f1eacde17/4x"}, {"code": "DonkiFlushed", "src": "https://cdn.7tv.app/emote/60ae991ef39a7552b61f3c3b/4x"}, {"code": "DonkWalk", "src": "https://cdn.7tv.app/emote/60c122d9171ad0293cc9ae5a/4x"}, {"code": "blushyHug", "src": "https://cdn.7tv.app/emote/61997551eecae7a725bc3361/4x"}, {"code": "PizzaTime", "src": "https://cdn.7tv.app/emote/60af406a2c36aae19e026ce3/4x"}, {"code": "marioStyle", "src": "https://cdn.7tv.app/emote/60b214ac2985f38fb4c62566/4x"}, {"code": "donkWeeb", "src": "https://cdn.7tv.app/emote/612ad65b9d60d44d5240abf9/4x"}, {"code": "peepoArriveandSit", "src": "https://cdn.7tv.app/emote/61398bb3f7977b64f644c92f/4x"}, {"code": "HUGGIES", "src": "https://cdn.7tv.app/emote/60afdfe7399a88148dd6ec77/4x"}, {"code": "Wokege", "src": "https://cdn.7tv.app/emote/60f26acdf7fdd1860a2d2b24/4x"}, {"code": "Bedge", "src": "https://cdn.7tv.app/emote/60f26ae8f7fdd1860a308e9d/4x"}, {"code": "Aware", "src": "https://cdn.7tv.app/emote/6145e8b10969108b671957ec/4x"}, {"code": "LemmeThink", "src": "https://cdn.7tv.app/emote/60d2f54991b6751bc118f22d/4x"}, {"code": "peepoBlushReallyHappyDank", "src": "https://cdn.7tv.app/emote/613c9c2b2d7724a96175c5ca/4x"}, {"code": "VeryPogftTakane", "src": "https://cdn.7tv.app/emote/614813651eb7078240526b0f/4x"}, {"code": "VeryPogftxQcOnTheToilet", "src": "https://cdn.7tv.app/emote/61153bd5d205eee1ff04cdec/4x"}, {"code": "peepoBlushy", "src": "https://cdn.7tv.app/emote/619f1923e9684edbbc36bb4d/4x"}, {"code": "VeryPogftKanna", "src": "https://cdn.7tv.app/emote/60b180f281bdd27f2beff78d/4x"}, {"code": "VeryPogftDoc", "src": "https://cdn.7tv.app/emote/6053a0ae9d9e96000d245032/4x"}, {"code": "VeryNice", "src": "https://cdn.7tv.app/emote/60aab6d720c9671269cf7509/4x"}, {"code": "nekoHeart", "src": "https://cdn.7tv.app/emote/60b172f34faf982ecaba9251/4x"}, {"code": "SadCat", "src": "https://cdn.7tv.app/emote/60f9bd1231ba6ae6228eb8b8/4x"}, {"code": "pepeStepBro", "src": "https://cdn.7tv.app/emote/60bd0c4ed04a92d5b2fd5c8c/4x"}, {"code": "4WeirdChef", "src": "https://cdn.7tv.app/emote/60b24f59b4c9c09d28e42e9a/4x"}, {"code": "borpaSpin", "src": "https://cdn.7tv.app/emote/60845a505e01df61570a6f1d/4x"}, {"code": "PepegaDriving", "src": "https://cdn.7tv.app/emote/60afbc9c52a13d1adb3d8135/4x"}, {"code": "Stalling", "src": "https://cdn.7tv.app/emote/60ad1f9cc7188f3be2207bb1/4x"}, {"code": "Weirdge", "src": "https://cdn.7tv.app/emote/619f569ee9684edbbc36c0c6/4x"}, {"code": "pepegeHmm", "src": "https://cdn.7tv.app/emote/61053a366ec21e98cdd05298/4x"}, {"code": "peepoDown", "src": "https://cdn.7tv.app/emote/60af75e884a2b8e655832d2d/4x"}, {"code": "BongoCat", "src": "https://cdn.7tv.app/emote/60b62cdde55a0832fcdeda24/4x"}, {"code": "VeryBased", "src": "https://cdn.7tv.app/emote/60ad3db7ff0c5122a7caaf6b/4x"}, {"code": "VaN", "src": "https://cdn.7tv.app/emote/603e6f69284626000d068846/4x"}, {"code": "4Ton", "src": "https://cdn.7tv.app/emote/6100d872ae1f587cd187e9f2/4x"}, {"code": "FeelsFurryman", "src": "https://cdn.7tv.app/emote/6100ad04654aa0034e1c37b8/4x"}, {"code": "BillyAPPROVE", "src": "https://cdn.7tv.app/emote/60acfeb439bba0ab6e311f71/4x"}, {"code": "SadLain", "src": "https://cdn.7tv.app/emote/60d896ad48f7e10ea774694a/4x"}, {"code": "guraWave", "src": "https://cdn.7tv.app/emote/60aeaf7b229664e866b9ecb6/4x"}, {"code": "peepoBlanket", "src": "https://cdn.7tv.app/emote/60ae9edaf6a2c3b332b57301/4x"}, {"code": "DrumTime", "src": "https://cdn.7tv.app/emote/60ae63c49627f9aff4dd2d2a/4x"}, {"code": "GuitarTime", "src": "https://cdn.7tv.app/emote/60ae4c510e354776346de9f7/4x"}, {"code": "Sussy", "src": "https://cdn.7tv.app/emote/60b7f21d5d373afbd62d90b2/4x"}, {"code": "cmonbRuh", "src": "https://cdn.7tv.app/emote/60ae2b1faee2aa5538ac7b5f/4x"}, {"code": "Pepepains", "src": "https://cdn.7tv.app/emote/603cb9fd73d7a5001441f9b4/4x"}, {"code": "PeepoFinger", "src": "https://cdn.7tv.app/emote/60b7f645d115b053116d74b7/4x"}, {"code": "peepoXmas", "src": "https://cdn.7tv.app/emote/617f667fe0801fb98788ac96/4x"}, {"code": "peepoSnow", "src": "https://cdn.7tv.app/emote/60fdfd6925bb6dd0b0fecd1d/4x"}, {"code": "peepoKiss", "src": "https://cdn.7tv.app/emote/60aeaac8f6a2c3b332b5a9aa/4x"}, {"code": "PauseChamp", "src": "https://cdn.7tv.app/emote/60aee6a9b74ea8ff79bde8c3/4x"}, {"code": "POGGIES", "src": "https://cdn.7tv.app/emote/60af1b5a35c50a77926314ad/4x"}, {"code": "Pepedadbod", "src": "https://cdn.frankerfacez.com/emoticon/634053/4"}, {"code": "donkBlush", "src": "https://cdn.7tv.app/emote/60b236ee2985f38fb4b328cf/4x"}, {"code": "peepoBlushCap", "src": "https://cdn.7tv.app/emote/60f32638c07d1ac193a725e2/4x"}, {"code": "WOOOO", "src": "https://cdn.7tv.app/emote/6172eef65ff09767de29eee4/4x"}, {"code": "Stare", "src": "https://cdn.7tv.app/emote/60e5d610a69fc8d27f2737b7/4x"}, {"code": "peepoFat", "src": "https://cdn.7tv.app/emote/60f7ac7031ba6ae622a7772e/4x"}, {"code": "menheraPls", "src": "https://cdn.7tv.app/emote/60a9495e03a8b64713868913/4x"}, {"code": "pog", "src": "https://cdn.7tv.app/emote/61384e97e23516922b0cf0be/4x"}, {"code": "UHM", "src": "https://cdn.7tv.app/emote/60ba5d7010a69e5dbb4293ca/4x"}, {"code": "NOTED", "src": "https://cdn.7tv.app/emote/60ae2440aee2aa553892c5f5/4x"}, {"code": "Sadge", "src": "https://cdn.7tv.app/emote/603cac391cd55c0014d989be/4x"}, {"code": "SadgeJam", "src": "https://cdn.7tv.app/emote/60e2a15aa940e09428b4731f/4x"}, {"code": "forsenCD", "src": "https://cdn.7tv.app/emote/60ae4d265d3fdae583f7de09/4x"}, {"code": "WEEBSOUT", "src": "https://cdn.7tv.app/emote/60c379226636a98bb47f220d/4x"}, {"code": "rameeBigHead", "src": "https://cdn.discordapp.com/emojis/842291876748197889.png?size=96"}, {"code": "OfflineChatters", "src": "https://cdn.7tv.app/emote/614f43c943b2d9da0d326bcc/4x"}, {"code": "PeepoGladRose", "src": "https://cdn.7tv.app/emote/60ae8aac4b1ea4526d954855/4x"}, {"code": "peepoShrug", "src": "https://cdn.7tv.app/emote/60c3c1b716215d7ba0f34d2e/4x"}, {"code": "pepoG", "src": "https://cdn.7tv.app/emote/611362ed3f8145d7f13c436e/4x"}, {"code": "TriPls", "src": "https://cdn.7tv.app/emote/60bd7598beaaefc859923c78/4x"}, {"code": "donkChad", "src": "https://cdn.7tv.app/emote/60a37e3fb36c6d959367098c/4x"}, {"code": "sadKEK", "src": "https://cdn.7tv.app/emote/60b0c3d488e8246a4b13d5c8/4x"}, {"code": "pepoJAMMIN", "src": "https://cdn.7tv.app/emote/60bd72e9dff5a27daf886cf9/4x"}, {"code": "DANKERMAN", "src": "https://cdn.7tv.app/emote/60aee1fe84a2b8e655853207/4x"}, {"code": "DankL", "src": "https://cdn.7tv.app/emote/611d5a7c95ab6c6c0e2f8d6e/4x"}, {"code": "Sadgers", "src": "https://cdn.7tv.app/emote/60b3a2575c2d9653583a210d/4x"}, {"code": "KannaPeer", "src": "https://cdn.7tv.app/emote/60b17e2b5827500178f4d756/4x"}, {"code": "KannaChomp", "src": "https://cdn.7tv.app/emote/60b151143f98974e48979aed/4x"}, {"code": "popCat", "src": "https://cdn.7tv.app/emote/60aef388b38361ea914aad89/4x"}, {"code": "PepePls", "src": "https://cdn.7tv.app/emote/60afca54a3648f409ab155b7/4x"}, {"code": "RemPls", "src": "https://cdn.7tv.app/emote/60b1819f582750017805b345/4x"}, {"code": "EmiDance", "src": "https://cdn.7tv.app/emote/61354eccb7ef1a05d0a20913/4x"}, {"code": "MenheraSlam", "src": "https://cdn.7tv.app/emote/60b1451c213e3888f975818e/4x"}, {"code": "HixilPls", "src": "https://cdn.7tv.app/emote/61201437ee0cbaf05832b383/4x"}, {"code": "DinkDonk", "src": "https://cdn.7tv.app/emote/603cb5e1c20d020014423c68/4x"}, {"code": "WineTime", "src": "https://cdn.7tv.app/emote/61057c09b80f269577bcd84b/4x"}, {"code": "4WeirdDude", "src": "https://cdn.discordapp.com/emojis/899695997423345685.png?size=96"}, {"code": "NaM", "src": "https://cdn.7tv.app/emote/603cb78973d7a5001441f99c/4x"}, {"code": "7Homis", "src": "https://cdn.7tv.app/emote/6139f65cd5c1b90dcffb3671/4x"}, {"code": "4Homis", "src": "https://cdn.7tv.app/emote/613936dff5c7c1b549d5c68d/4x"}, {"code": "FRICK", "src": "https://cdn.7tv.app/emote/60fbd4e45b7deb3de0a81c1f/4x"}, {"code": "POGCRAZY", "src": "https://cdn.7tv.app/emote/60d5713230694587f9950d03/4x"}, {"code": "02Flick", "src": "https://cdn.7tv.app/emote/611f612731cd3ac074f46bf1/4x"}, {"code": "JuiceTime", "src": "https://cdn.7tv.app/emote/60aee386b38361ea918606ac/4x"}, {"code": "FluteTime", "src": "https://cdn.7tv.app/emote/60a431e8a71d9fd1102b6076/4x"}, {"code": "BatChest", "src": "https://static-cdn.jtvnw.net/emoticons/v2/115234/static/light/3.0"}, {"code": "TriHard", "src": "https://static-cdn.jtvnw.net/emoticons/v2/120232/static/light/3.0"}, {"code": "TriHard7", "src": "https://cdn.7tv.app/emote/60aec8eccd23e6fed5d2131d/4x"}, {"code": "EleGiggle", "src": "https://static-cdn.jtvnw.net/emoticons/v2/4339/static/light/3.0"}, {"code": "GIMME", "src": "https://cdn.7tv.app/emote/619520c8eecae7a725bbae42/4x"}, {"code": "GivePLZ", "src": "https://static-cdn.jtvnw.net/emoticons/v2/112291/static/light/3.0"}, {"code": "PowerUpL", "src": "https://static-cdn.jtvnw.net/emoticons/v2/425688/static/light/3.0"}, {"code": "PowerUpR", "src": "https://static-cdn.jtvnw.net/emoticons/v2/425671/static/light/3.0"}, {"code": "blushHug", "src": "https://cdn.7tv.app/emote/60b52c08c81f4214cb8cd37d/4x"}, {"code": "pokiEars", "src": "https://cdn.7tv.app/emote/60ae8ad4f6a2c3b332942368/4x"}, {"code": "MenheraSip", "src": "https://cdn.7tv.app/emote/613d384ebe977eb5b436f26f/4x"}, {"code": "KannaSip", "src": "https://cdn.7tv.app/emote/60b184fa1a8f6ae777e426ad/4x"}, {"code": "blushHug", "src": "https://cdn.7tv.app/emote/60ccfde09f5edeff99cbba6c/4x"}];
                chrome.storage.local.set({ SET: emotes }); //save default set
            }
        });
        location.reload();
        return false;
    }));
     no.addEventListener('click', function(){
        modal.style.display = "none";
        //modalcontent.style.display = "block";
     });
});

storage.get('emoteMenuCheckModal', function(result) {  
        function emoteModal() {
                modal.style.display = "flex";
                modalcontent.style.display = "block";
        }
        var modal = document.getElementById("myModal2");
        var modalcontent = document.getElementById('emoteModalUnderstand');
        var btn = document.getElementById("modalBtn");
        var understand = document.getElementById('understand');
        if(result.emoteMenuCheckModal === undefined) {
            btn.addEventListener('click', emoteModal);
            understand.addEventListener('click', (function() {
                obj.emoteMenuCheckModal = 'off';
                storage.set(obj);
                modal.style.display = "none";
                location.reload();
                return false;
            }));
        } else {
            btn.removeEventListener('click', emoteModal);
        }
    });


function listremove(s, i, el) { //add functionality to the emote delete buttons
        el.addEventListener('click', (function rmv() {
            s.splice(i, 1); //remove the element at the given index from the given set
            chrome.storage.local.set({ SET: s }, (function() {
                showemotes(); //update emote table
                setswap(); //use changed emote set
            })); //save the changed set
            el.removeEventListener('click', rmv, false);
        }), false);
    }

    function showemotes() { //show table with all emotes
        chrome.storage.local.get(['SET'], (function(result) {
            var emotes = result.SET;
            var table = document.getElementById("emotetable");   
            while (table.firstChild) {
                table.removeChild(table.firstChild); //clears emotes
            }
            
            var list = document.createDocumentFragment();
            for (var i = 0; i < emotes.length; i++) {

	        	var item = document.createElement("div"); //table row
	            box = document.createElement("div"); //table node
	            box.className = "emotetable-img";
	            var img = document.createElement("img"); //table node
	            img.src = emotes[i].src;
	            box.appendChild(img);
	            item.appendChild(box);
	            box = document.createElement("div"); //table node
	            box.className = "emotetable-img";
	            var box = document.createElement("div"); //table node
	            box.textContent = emotes[i].code;
	            box.className = "emotetable-code";
	            item.className = "emotetable-div";
	            item.id = emotes[i].code;
	            item.appendChild(box);
	            var lbl = document.createElement("label"); //emote remove button label
	            lbl.className = "emotetable-remove";
	            lbl.title = "remove";
	            lbl.textContent = "Remove";
	            var btn = document.createElement("input"); //emote remove button
	            btn.type = "button";
	            btn.className = "hide";
	            listremove(emotes, i, btn); //make button remove adjacent emote
	            lbl.appendChild(btn);
	            box.appendChild(lbl);
	            item.appendChild(box);
	            list.appendChild(item);   
                }
                table.appendChild(list);
            
        }));
    }

function autocc() {
	var input, filter, ul, i, txtValue;
	input = document.getElementById("emoteInput");
	filter = input.value.toUpperCase();
	ul = document.getElementsByClassName("emotetable-div");
	for (i=0; i<ul.length; i++) {
		txtValue = ul[i].id;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
            ul[i].style.display = "";
        } else {
            ul[i].style.display = "none";
        }
	}
}
function showingEmotes() {
	var checkbox = document.getElementById('checkboxEmotes');
	checkbox.addEventListener('change', function(element) {
		if (checkbox.checked != true) {
			document.getElementById('showemotes').style.display = "none";
		}
    	else {
	    	document.getElementById('showemotes').style.display = "block";
			document.getElementById('emotetable').style.display = "flex";
			showemotes();
		}
    });
	
}


showingEmotes();
                    


document.getElementById('emoteInput').addEventListener("keyup", autocc);


document.getElementById("show-advanced-emote").addEventListener('click', (function() { 
        window.open(chrome.runtime.getURL('advanced.html'));
    }));