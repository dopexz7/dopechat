var storage = chrome.storage.local;
var obj = {};
var otherobj = {};

let stylesheetText = `
#slider-container {
    --value : 0 ;
    --slider-track-color : #18181b;
    --slider-thumb-color : #ffbe76;
    --slider-fill-color  : #ffbe76;
    --slider-fill2-color : #18181b;
    float: left;
    width : 100% ;
    height: 1rem ;
    display: flex ;
    align-items: center ;
    justify-content: center ;
    padding: 0 ;
    margin: 0 ;

    animation: color-cycle 1s infinite alternate linear;
}

@keyframes color-cycle {
    0% {
        --slider-fill-color  : #ffbe76  ;
    }
    100% {
        --slider-fill-color : #ffbe76  ;
    }
}

#slider {
    -webkit-appearance: none;
    appearance: none;

    height: 1rem ;
    width: 100% ;
    margin : 0 ;
    padding: 0 ;

    background-color: #00000000 ;
    outline: none ;
    z-index: 99 ;
}

#slider-track {
    position: absolute ;
    top: calc(50% - 0.25rem);
    left: 0 ;
    width: 100% ;
    height: 0.5rem ;
    border-radius: 0.25rem ;
    background-color: var(--slider-track-color) ;
    overflow: hidden ;
}

#slider-track::before {
    position: absolute ;
    content: "" ;
    left: calc(-100% + 1.5rem) ;
    top : 0 ;
    width : calc(100% - 1rem) ;
    height: 100% ;
    background-color: var(--slider-fill-color) ;
    transition: background-color 300ms ease-out ;
    transform-origin: 100% 0%;
    transform: translateX(calc( var(--value) * 100% )) scaleX(1.2);
}

#slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width : 1rem ;
    height: 1rem ;
    border-radius: 50% ;
    background-color: var(--slider-thumb-color) ;
    cursor: pointer ;
    z-index: 99 ;
    border: 2px solid var(--slider-fill-color) ;
    transition: border-color 300ms ease-out ;
}

#value {
    position: absolute ;
    bottom: calc(100% + 0.5rem) ;
    left: calc( var(--value) * calc(100% - 1rem) - 0.8rem) ;
    min-width: 3ch ;
    border-radius: 6px ;
    pointer-events: none ;

    padding: 0.5rem ;
    display: flex ;
    align-items: center ;
    justify-content: center ;

    color: rgba(0,0,0,0.7) ;
    background-color: var(--slider-fill-color);
    opacity: 0 ;

    transition: left 300ms ease-out , opacity 300ms 300ms ease-out , background-color 300ms ease-out ;
}

#value::before {
    position: absolute ;
    content: "" ;
    top: 100% ;
    left: 50% ;
    width: 1rem ;
    height: 1rem ;
    border-radius: 2px ;
    background-color: inherit ;
    transform: translate(-50%,-80%) rotate(45deg);
    z-index: -1 ;
}

#slider-container:hover  #value {
    opacity: 1 ;
} 
` ;

class customSlider extends HTMLElement {
    constructor(){
        super();
        this.value = parseFloat(this.getAttribute("value")) || 0;
        this.min   = parseFloat(this.getAttribute("min"))   || 0;
        this.max   = parseFloat(this.getAttribute("max"))   || 100;
        this.step  = parseFloat(this.getAttribute("step"))  || 1;

        this.style.minWidth = "12rem" ;
        this.style.minHeight = "1rem" ;
        this.style.position = "relative" ;

        // Slider Element
        this.root = this.attachShadow({mode:"open"}) ;

        // Functionality
        this.dragging = false ;

        this.create();
        this.update();
    }

    create(){
        let slider   = document.createElement("input") ;
        let sliderContainer = document.createElement("div");
        let sliderTrack = document.createElement("div");
        let value = document.createElement("div");

        // let style = document.createElement("link");
        // style.rel = "stylesheet" ;
        // style.href = "/src/custom-slider-style.css" ;

        let style = document.createElement("style") ;
        style.textContent = stylesheetText ;

        // set properties
        slider.type = "range" ;
        slider.id = "slider" ;
        slider.min = this.min ;
        slider.max = this.max ;
        slider.step = this.step ;
        slider.value = this.value ;

        // add ids
        sliderContainer.id = "slider-container" ;
        sliderTrack.id = "slider-track" ;
        value.id = "value" ;

        // add event listeners
        slider.addEventListener("input",this.update.bind(this));

        // Appened Elements
        sliderContainer.appendChild(slider);
        sliderContainer.appendChild(value);
        sliderContainer.appendChild(sliderTrack);
        this.root.appendChild(style);
        this.root.appendChild(sliderContainer);
    }

    update(){
        let track  = this.root.getElementById("slider-container");
        let slider = this.root.getElementById("slider");
        let value = this.root.getElementById("value");
        let valuePercentage = slider.value / (this.max-this.min);
        value.innerText = slider.value + "px";
        obj['chatTextSize'] = slider.value + "px";
        storage.set(obj)
        track.style.setProperty("--value",valuePercentage);
        document.documentElement.style.setProperty("--msgfontsize", slider.value + "px"), 
        track.style.setProperty("--value", valuePercentage);
    }


}

customElements.define('custom-slider', customSlider );


PICKER = {
    mouse_inside: false,

    to_hex: function (dec) {
        hex = dec.toString(16);
        return hex.length == 2 ? hex : '0' + hex;
    },

    show: function () {
        var input = $(this);
        var position = input.offset();

        PICKER.$colors  = $('<canvas width="230" height="150" ></canvas>');
        PICKER.$colors.css({
            'position': 'absolute',
            'top': position.top + input.height() + 9,
            'left': position.left,
            'cursor': 'crosshair',
            'border-radius': '6px',
            'display': 'none'
        });
        $('body').append(PICKER.$colors.fadeIn());
        PICKER.colorctx = PICKER.$colors[0].getContext('2d');

        PICKER.render();

        PICKER.$colors
            .click(function (e) {
                var new_color = PICKER.get_color(e);
                $(input).css({'background-color': new_color}).val(new_color).trigger('change').removeClass('color-picker-binded');
                PICKER.close();
            })
            .hover(function () {
                PICKER.mouse_inside=true;
            }, function () {
                PICKER.mouse_inside=false;
            });

        $("body").mouseup(function () {
            if (!PICKER.mouse_is_inside)  {
                $(input).css({'background-color': '#18181b'})
                PICKER.close();
                }
        });
    },

    bind_inputs: function () {
        $('input[type="color-picker"]').not('.color-picker-binded').each(function () {
            $(this).click(PICKER.show);
        }).addClass('color-picker-binded');
    },

    close: function () {PICKER.$colors.fadeOut(PICKER.$colors.remove);},

    get_color: function (e) {
        var pos_x = e.pageX - PICKER.$colors.offset().left;
        var pos_y = e.pageY - PICKER.$colors.offset().top;

        data = PICKER.colorctx.getImageData(pos_x, pos_y, 1, 1).data;
        return '#' + PICKER.to_hex(data[0]) + PICKER.to_hex(data[1]) + PICKER.to_hex(data[2]);
    },

  // Build Color palette
    render: function () {
        var gradient = PICKER.colorctx.createLinearGradient(0, 0, PICKER.$colors.width(), 0);

        // Create color gradient
        gradient.addColorStop(0,    "rgb(255,   0,   0)");
        gradient.addColorStop(0.15, "rgb(255,   0, 255)");
        gradient.addColorStop(0.33, "rgb(0,     0, 255)");
        gradient.addColorStop(0.49, "rgb(0,   255, 255)");
        gradient.addColorStop(0.67, "rgb(0,   255,   0)");
        gradient.addColorStop(0.84, "rgb(255, 255,   0)");
        gradient.addColorStop(1,    "rgb(255,   0,   0)");

        // Apply gradient to canvas
        PICKER.colorctx.fillStyle = gradient;
        PICKER.colorctx.fillRect(0, 0, PICKER.colorctx.canvas.width, PICKER.colorctx.canvas.height);

        // Create semi transparent gradient (white -> trans. -> black)
        gradient = PICKER.colorctx.createLinearGradient(0, 0, 0, PICKER.$colors.height());
        gradient.addColorStop(0,   "rgba(255, 255, 255, 1)");
        gradient.addColorStop(0.5, "rgba(255, 255, 255, 0)");
        gradient.addColorStop(0.5, "rgba(0,     0,   0, 0)");
        gradient.addColorStop(1,   "rgba(0,     0,   0, 1)");

        // Apply gradient to canvas
        PICKER.colorctx.fillStyle = gradient;
        PICKER.colorctx.fillRect(0, 0, PICKER.colorctx.canvas.width, PICKER.colorctx.canvas.height);
    }
};

PICKER.bind_inputs();

const first = document.getElementById("chatset"), second = document.getElementById("textset"), third = document.getElementById("otherset");

const yourusernamesettings = document.getElementById("yourusernamesettings"), yourtextsettings = document.getElementById("yourtextsettings"), otherusersettings = document.getElementById("otherusersettings");

function hideShowButtons(chatsettings, first, second, third) {
   document.getElementById(chatsettings).addEventListener("click", function () {
        if (first.style.display !== "inline") {
            first.style.display = "inline";
            second.style.display = "none";
            third.style.display = "none";
        } else {
            first.style.display = "none";
        }
    }); 
}

hideShowButtons('chatsettings', first, second, third);
hideShowButtons('textsettings', second, first, third);
hideShowButtons('othersettings', third, first, second);
hideShowButtons('yourusernameinner', yourusernamesettings, yourtextsettings, otherusersettings);
hideShowButtons('otherusernamesettings', otherusersettings, yourtextsettings, yourusernamesettings);
hideShowButtons('textsettingsinner', yourtextsettings, otherusersettings, yourusernamesettings);

(function() { 
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
	       
	checkboxState('checkboxx', '2', '1');  
	checkboxState('checkboxxd', '2', '1');  
    checkboxState('checkboxxd2', '2', '1');

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

	checkboxCheck('hideChatProfilePictures', 'hide', 'show', 'checkboxx');
	checkboxCheck('messageStyle', '2', '1', 'checkboxxd');
    checkboxCheck('volumeScrollCheck', 'on', 'off', 'checkboxxd2');


    

    const timeout = document.getElementById("feedback6");


    function setValueSettings(addusername, usernm, resultUsername) {
            document.getElementById(addusername).addEventListener('click', (function() {
                var c = document.getElementById(usernm).value;
                    timeout.style.display = 'block';
                    if (c == "") {
                        document.getElementById("feedback6").textContent = "Nothing given.";
                        setTimeout(hideElement, 1000) //milliseconds until timeout//
                            function hideElement() {
                                timeout.style.display = 'none'
                       
                            }
                        document.getElementById("found").className = "hide";
                    } else {
                        obj[resultUsername] = c;
                        storage.set(obj);
                        document.getElementById("feedback6").textContent = "Successfully set.";
                        
                          setTimeout(hideElement, 1000) //milliseconds until timeout//
                            function hideElement() {
                                timeout.style.display = 'none'
                       
                            }
                    }
            }));
        }
        storage.get('usernames',  function(result) {
                            if (document.getElementById("myText").innerHTML !== undefined) {
                                document.getElementById("myText").innerHTML = result['usernames'];
                            } else {
                                document.getElementById("myText").innerHTML += result['usernames'];
                            }
                        });
        function setOValueSettings() {
            document.getElementById("addotherusername").addEventListener('click', (function() {
                var c = document.getElementById('ousernm').value;
                    timeout.style.display = 'block';
                    if (c == "") {
                        document.getElementById("feedback6").textContent = "Nothing given.";
                        setTimeout(hideElement, 1000) //milliseconds until timeout//
                            function hideElement() {
                                timeout.style.display = 'none'
                       
                            }
                        document.getElementById("found").className = "hide";
                    } else {
                        otherobj["usernames"] = c;
                        storage.set(otherobj);
                        console.log(otherobj["usernames"]);
                        storage.get('usernames',  function(result) {
                            if (document.getElementById("myText").innerHTML !== undefined) {
                                document.getElementById("myText").innerHTML = result['usernames'];
                            } else {
                                document.getElementById("myText").innerHTML += result['usernames'];
                            }
                        });
                        //console.log(otherobj);


                        document.getElementById("feedback6").textContent = "Successfully set.";
                          setTimeout(hideElement, 1000) //milliseconds until timeout//
                            function hideElement() {
                                timeout.style.display = 'none'
                            }
                    }
            }));
        }

        function setOValueSColor() {
            document.getElementById("addotheryucolor").addEventListener('click', (function() {
                var c = document.getElementById('ocusernm').value;
                    timeout.style.display = 'block';
                    if (c == "") {
                        document.getElementById("feedback6").textContent = "Nothing given.";
                        setTimeout(hideElement, 1000) //milliseconds until timeout//
                            function hideElement() {
                                timeout.style.display = 'none'
                       
                            }
                        document.getElementById("found").className = "hide";
                    } else {
                        otherobj['highlightColor'] = c;
                        storage.set(otherobj);
                        document.getElementById("feedback6").textContent = "Successfully set.";
                          setTimeout(hideElement, 1000) //milliseconds until timeout//
                            function hideElement() {
                                timeout.style.display = 'none'
                            }
                    }
            }));
        }
        
        setValueSettings("addchatBG", "chatbg", "chatBackground");
        setValueSettings("addyourucolor", "usernmc", "yourUsernameColor");
        setValueSettings("addusername", "usernm", "yourUsername");
        setOValueSettings();
        setOValueSColor();
        
        setValueSettings("addtextcolor", "textcolor", "chatTextColor");
        setValueSettings("addtopbar", "topbarx", "topbarColor");
        setValueSettings("addchattopbar", "chattopbarx", "chattopbarColor");

		setValueSettings("addfont", "font", "changefont");
        setValueSettings("addchatwidth", "chatwidth", "changeChatWidth");
        


   	document.getElementById("hints").addEventListener("click", function(){
   		var hintsblock = document.getElementById("helpx");
   		if (hintsblock.style.display !== "block") {
   			hintsblock.style.display = "block";
   		} else {
   			hintsblock.style.display = "none";
   		}
	});





  	document.getElementById("import").addEventListener('change', function(event) { //import emote set file
        var reader = new FileReader();
        reader.onload = function() {
            try {
                var loaded = JSON.parse(reader.result);
                if (loaded && typeof loaded === "object") {
                    chrome.storage.local.set({ SET: loaded }, function() { //set emote reference object array
                        document.getElementById("feedback1").textContent = "Import successful.";
                        document.getElementById("feedback2").textContent = "";
                        document.getElementById("found").className = "hide";
                        document.getElementById("feedback3").textContent = "";
                        document.getElementById("alltable1").style.display = "none";
                        setswap(); //use changed emote set
                    });
                }
            }
            catch (e) {
                document.getElementById("feedback1").textContent = "Import failed.";
            }
        };
        reader.readAsText(event.target.files[0]);
        document.getElementById("import").value = ""; //clears loaded file so it can be selected again
    });

    var savelink = null; //null by default
    document.getElementById("export").addEventListener('click', function() { //export emote set file
        chrome.storage.local.get(['SET'], function(result) { //check for custom emotes at page load
            if (result.SET == null) {
                document.getElementById("feedback1").textContent = "No emote set to export (default should be set on installation).";
            }
            else {
                if (savelink) {
                    URL.revokeObjectURL(savelink); //releases blob (not done immediately so link has enough time)
                }
                var blob = new Blob([JSON.stringify(result.SET)], { type: "text/plain;charset=utf-8" });
                savelink = URL.createObjectURL(blob);
                var a = document.createElement("a");
                a.setAttribute("href", savelink);
                a.setAttribute("download", "my.emotes");
                document.body.appendChild(a); //must append or certain browsers will not click()
                a.click(); //activates download
                a.remove();
                document.getElementById("feedback1").textContent = "Emote set exported.";
            }
        });
    });

    document.getElementById("add").addEventListener('click', function() { //add emote to set
        chrome.storage.local.get(['SET'], function(result) { //check for custom emotes
            var emotes = result.SET;
            if (emotes == null) {
                document.getElementById("feedback2").textContent = "No emote set to add to (default should be set on installation).";
            }
            else {
                var c = document.getElementById("code").value;
                if (c == "") {//if code field is blank
                    document.getElementById("feedback2").textContent = "No code given.";
                    document.getElementById("found").className = "hide";
                }
                else if (c.match("^[A-Za-z0-9:_]+$")) { //allowed characters
                    var found = false;
                    for (var i = 0; i < emotes.length; i++) {
                        if (c == emotes[i].code) {
                            document.getElementById("feedback2").textContent = "Code already in use as:";
                            found = true;
                            document.getElementById("addedimg").src = emotes[i].src;
                            setremove(c); //make button remove found emote
                            document.getElementById("found").className = "show";
                            break;
                        }
                    }
                    if (found == false) {
                        var s = document.getElementById("src").value;
                        if (s == "") { //if source field is blank
                            document.getElementById("feedback2").textContent = "Code not found.";
                            document.getElementById("found").className = "hide";
                        }
                        else {
                            emotes.push({ code: c, src: s }); //append new emote to array for emotes
                            chrome.storage.local.set({ SET: emotes }, function() { //set emote reference object array
                                document.getElementById("feedback2").textContent = "Code added with image:";
                                document.getElementById("addedimg").src = s;
                                setremove(c); //make button remove new emote
                                document.getElementById("found").className = "show";
                                setswap(); //use changed emote set
                            });
                        }
                    }
                }
                else {
                    document.getElementById("feedback2").textContent = "Code contains invalid characters.";
                }
            }
        });
    });

    function setremove(c) { //add functionality to the emote delete button
        var rmvbtn = document.getElementById("del");
        rmvbtn.addEventListener('click', function rmv() {
            document.getElementById("found").className = "hide";
            chrome.storage.local.get(['SET'], function(result) { //check for custom emotes
                var emotes = result.SET;
                for (var i = 0; i < emotes.length; i++) {
                    if (c == emotes[i].code) {
                        emotes.splice(i, 1); //remove the emote at the given index from the given set
                        chrome.storage.local.set({ SET: emotes }, function() { //save the changed set
                            if (document.getElementById("alltable1").style.display == "block") {
                                showemotes(); //update emote table
                            }
                            setswap(); //use changed emote set
                        });
                        break;
                    }
                }
            });
            document.getElementById("feedback2").textContent = "Emote removed.";
            rmvbtn.removeEventListener('click', rmv, false);
        }, false);
    }

    function setswap() { //use changed emote set in current tabs
        chrome.tabs.query({}, function(tabs) {
            for (var i = 0; i < tabs.length; i++) {
                chrome.tabs.sendMessage(tabs[i].id, { newemotes: "change" });
            }
        });
    }

    function listremove(s, i, el) { //add functionality to the emote delete buttons
        el.addEventListener('click', function rmv() {
            s.splice(i, 1); //remove the element at the given index from the given set
            chrome.storage.local.set({ SET: s }, function() {
                showemotes(); //update emote table
                setswap(); //use changed emote set
            }); //save the changed set
            el.removeEventListener('click', rmv, false);
        }, false);
    }

    function showemotes() { //show table with all emotes
        chrome.storage.local.get(['SET'], function(result) {
            var emotes = result.SET;
            var table = document.getElementById("emotetable");
            if (document.getElementById("alltable1").style.display !== "block") {
            	document.getElementById("alltable1").style.display = "block";
            } else {
            	document.getElementById("alltable1").style.display = "none";
            }
            
            while (table.firstChild) {
                table.removeChild(table.firstChild); //clears emotes
            }
            if (emotes == null) {
                document.getElementById("feedback3").textContent = "No emote set to show (default will be set on first webpage load).";
            }
            else {
            	if (document.getElementById("alltable1").style.display === "block") {
            		document.getElementById("feedback3").textContent = "Your set has " + emotes.length + " emote(s):";
            	} else {
            		document.getElementById("feedback3").textContent = "";
            	}
            	               
                var list = document.createDocumentFragment();
                for (var i = 0; i < emotes.length; i++) {
                    var item = document.createElement("tr"); //table row
                    var box = document.createElement("td"); //table node
                    box.textContent = emotes[i].code;
                    item.appendChild(box);
                    box = document.createElement("td"); //table node
                    var img = document.createElement("img"); //table node
                    img.src = emotes[i].src;
                    box.appendChild(img);
                    item.appendChild(box);
                    box = document.createElement("td"); //table node
                    var lbl = document.createElement("label"); //emote remove button label
                    lbl.className = "btn red";
                    lbl.title = "remove";
                    lbl.textContent = "X";
                    btn = document.createElement("input"); //emote remove button
                    btn.type = "button";
                    btn.className = "hide";
                    listremove(emotes, i, btn); //make button remove adjacent emote
                    lbl.appendChild(btn);
                    box.appendChild(lbl);
                    item.appendChild(box);
                    list.appendChild(item);
                }
                table.appendChild(list);
            }
        });
    }
    document.getElementById("see").addEventListener('click', showemotes);

}());