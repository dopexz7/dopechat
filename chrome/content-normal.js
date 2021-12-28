var obj={},storage=chrome.storage.local;function addPopoutChat(){var e=document.querySelectorAll(".rq0escxv.l9j0dhe7.du4w35lb.j83agx80.pfnyh3mw.jifvfom9.bp9cbjyn.owycx6da.btwxx1t3.jb3vyjys.nkwizq5d.scwd0bx6.hop8lmos.ggphbty4")[0],t=document.getElementById("popbtn");if(e&&null===t){var o=document.createElement("div");o.classList.add("popoutbutton"),o.setAttribute("title","Popout chat"),o.id="popbtn",o.addEventListener("click",function(){var e=window.open(window.location.href,"newWindow","width=500,height=700"),t=setInterval(function(){try{void 0!==e.document.querySelectorAll('[role="banner"]')[0]&&void 0!==e.document.querySelectorAll('[role="main"]')[0]&&void 0!==e.document.querySelectorAll(".jgljxmt5")[0]&&void 0!==e.document.querySelectorAll(".fop5sh7t.cgat1ltu.tv7at329.j83agx80.c4hnarmi.bp9cbjyn")[0]&&void 0!==e.document.querySelectorAll(".be9z9djy")[0]&&void 0!==e.document.getElementsByClassName("popoutbutton")[0]&&void 0!==e.document.querySelectorAll(".tw6a2znq.f10w8fjw.d1544ag0.pybr56ya.j83agx80.bp9cbjyn")[0]&&(e.document.querySelectorAll('[role="banner"]')[0].style.display="none",e.document.querySelectorAll('[role="main"]')[0].style.display="none",e.document.title="Popout chat",e.document.documentElement.style.setProperty("--chatwidth","100%"),e.document.querySelectorAll(".jgljxmt5")[0].style.minHeight="100vh",e.document.querySelectorAll(".fop5sh7t.cgat1ltu.tv7at329.j83agx80.c4hnarmi.bp9cbjyn")[0].style.left="1%",e.document.querySelectorAll(".be9z9djy")[0].style.top="0",e.document.getElementsByClassName("popoutbutton")[0].style.display="none",e.document.getElementById("thtbtn").style.display="none",e.document.querySelectorAll(".tw6a2znq.f10w8fjw.d1544ag0.pybr56ya.j83agx80.bp9cbjyn")[0].style.paddingBottom="0",clearInterval(t))}catch(e){console.log(e)}},1)}),e.appendChild(o)}}function addTheatherMode(){var e=document.querySelectorAll(".rq0escxv.l9j0dhe7.du4w35lb.j83agx80.pfnyh3mw.jifvfom9.bp9cbjyn.owycx6da.btwxx1t3.jb3vyjys.nkwizq5d.scwd0bx6.hop8lmos.ggphbty4")[0],t=document.getElementById("thtbtn");if(e&&null===t){var o=document.createElement("div");o.classList.add("theatrebutton"),o.setAttribute("title","Theather mode(alt+z)"),o.id="thtbtn",o.addEventListener("click",function(){console.log(document.querySelectorAll(".bkyfam09")),"none"!==document.querySelectorAll('[role="banner"]')[0].style.display?(document.querySelectorAll('[role="banner"]')[0].style.display="none",document.querySelectorAll(".bkyfam09")[0].style.height="100vh",document.querySelectorAll(".bkyfam09")[1].style.height="100vh",document.querySelectorAll(".tw6a2znq.f10w8fjw.d1544ag0.pybr56ya.j83agx80.bp9cbjyn")[0].style.paddingBottom="0",document.querySelector(".jgljxmt5").style.minHeight="100vh",document.querySelector(".be9z9djy").style.top="0"):(document.querySelectorAll('[role="banner"]')[0].style.display="",document.querySelectorAll(".tw6a2znq.f10w8fjw.d1544ag0.pybr56ya.j83agx80.bp9cbjyn")[0].style.paddingBottom="",document.querySelectorAll(".bkyfam09")[0].style.height="",document.querySelectorAll(".bkyfam09")[1].style.height="",document.querySelector(".jgljxmt5").style.minHeight="",document.querySelector(".be9z9djy").style.top="")}),e.appendChild(o)}}window.addEventListener("keydown",function(e){1==e.altKey&&84==e.keyCode&&("none"!==document.querySelectorAll('[role="banner"]')[0].style.display?(document.querySelectorAll('[role="banner"]')[0].style.display="none",document.querySelectorAll(".bkyfam09")[0].style.height="100vh",document.querySelectorAll(".bkyfam09")[1].style.height="100vh",document.querySelectorAll(".tw6a2znq.f10w8fjw.d1544ag0.pybr56ya.j83agx80.bp9cbjyn")[0].style.paddingBottom="0",document.querySelector(".jgljxmt5").style.minHeight="100vh",document.querySelector(".be9z9djy").style.top="0"):(document.querySelectorAll('[role="banner"]')[0].style.display="",document.querySelectorAll(".tw6a2znq.f10w8fjw.d1544ag0.pybr56ya.j83agx80.bp9cbjyn")[0].style.paddingBottom="",document.querySelectorAll(".bkyfam09")[0].style.height="",document.querySelectorAll(".bkyfam09")[1].style.height="",document.querySelector(".jgljxmt5").style.minHeight="",document.querySelector(".be9z9djy").style.top=""))});var thtbtn=document.getElementById("thtbtn"),popbutn=document.getElementById("popbtn");if(null==popbutn||null==thtbtn){var observeForPop=new MutationObserver(function(e){e.forEach(function(e){addPopoutChat(),addTheatherMode()})});observeForPop.observe(document.body,{childList:!0,subtree:!0})}setInterval(function(){try{const o=fetch("https://dopexz7.github.io/emotes/ramee.json?r=").then(e=>e.json()).then(e=>e),n=fetch("https://dopexz7.github.io/emotes/rated.json?r=").then(e=>e.json()).then(e=>e),l=fetch("https://dopexz7.github.io/emotes/vader.json?r=").then(e=>e.json()).then(e=>e);async function e(){let e=await o;obj.currentRameeSet=e;let t=await n;obj.currentRatedSet=t;let r=await l;obj.currentVaderSet=r,storage.set(obj),storage.get(["SETS","SET"],function(o){var n,l=o.SETS;void 0!==l&&(l.includes(1)&&l.includes(2)&&l.includes(3)?n=(n=e.concat(t,r)).filter((e,t)=>n.indexOf(e)==t):l.includes(1)&&l.includes(2)&&!0!==l.includes(3)?n=(n=e.concat(t)).filter((e,t)=>n.indexOf(e)==t):l.includes(1)&&l.includes(3)&&!0!==l.includes(2)?n=(n=e.concat(r)).filter((e,t)=>n.indexOf(e)==t):l.includes(2)&&l.includes(3)&&!0!==l.includes(2)?n=(n=t.concat(r)).filter((e,t)=>n.indexOf(e)==t):(l.includes(1)||l.includes(2)||l.includes(3))&&(l.includes(1)&&!0!==l.includes(2)&&!0!==l.includes(3)?n=e:l.includes(2)&&!0!==l.includes(1)&&!0!==l.includes(3)?n=t:l.includes(3)&&!0!==l.includes(2)&&!0!==l.includes(1)&&(n=r)),obj.SET=n,obj.setDate=(new Date).toLocaleString("en-US"),storage.set(obj))})}var t;storage.get(["currentRameeSet","currentRatedSet","currentVaderSet"],function(o){jQuery.getJSON("https://dopexz7.github.io/emotes/ramee.json?r="+Math.random(),function(n){t=n,o.currentRameeSet!==t&&e()}),jQuery.getJSON("https://dopexz7.github.io/emotes/rated.json?r="+Math.random(),function(n){t=n,o.currentRatedSet!==t&&e()}),jQuery.getJSON("https://dopexz7.github.io/emotes/vader.json?r="+Math.random(),function(n){t=n,o.currentVaderSet!==t&&e()})})}catch(e){console.log(e)}},6e5),function(){var e="#000";document.documentElement.style.setProperty("--usernamecolor",e),document.documentElement.style.setProperty("--fontfamily","Helvetica"),document.documentElement.style.setProperty("--chatwidth","354px"),document.documentElement.style.setProperty("--chattopbarcolor","#18181b"),document.documentElement.style.setProperty("--messagestyle","left"),document.documentElement.style.setProperty("--currentvolon","0");var t=3,o=function(e,o){if(Boolean(o.webkitAudioDecodedByteCount)){var n=1;o.volume>t/100||o.volume===t/100&&event.deltaY<0?(n=o.volume+t/100*(event.deltaY/100*-1),n*=100,n/=t,n=Math.round(n),n*=t,n/=100):n=o.volume+event.deltaY/100*-1*.01,n<0?n=0:n>1&&(n=1),o.muted=n<=0,o.volume=n,o.dataset.volume=n;var l=Math.round(100*o.volume),r=document.querySelector(".k4urcfbm.pmk7jnqg.i09qtzwb.qttc61fc.ihh4hy1g.kdgqqoy6.jk6sbkaj.bogkn74s");null!=r&&(r.style.height=l+"%")}},n=function(e){var t=document.elementsFromPoint(e.clientX,e.clientY);for(var n of t)"VIDEO"===n.tagName&&(e.preventDefault(),o(0,n),document.documentElement.style.setProperty("--currentvolon","1"),document.documentElement.style.setProperty("--currentvolonb","block"),setTimeout(function(){document.documentElement.style.setProperty("--currentvolon","0"),document.documentElement.style.setProperty("--currentvolonb","none")},3e3))};function l(){var e;(e=document.getElementById("emotetable")).getElementsByTagName("a"),Array.prototype.forEach.call(e.children,e=>{e.addEventListener("click",t=>{!function(e){var t=document.querySelector(".oo9gr5id.lzcic4wl.jm1wdb64.l9j0dhe7.gsox5hk5.mdldhsdk.ii04i59q.notranslate").childNodes[0].childNodes[0].childNodes,o=(document.getElementById("emotetable"),document.getElementById("emoteInput").value);void 0!==t[0]?t[0].textContent+=" "+e:(document.getElementById("emoteInput").value="You have to type something in first",document.getElementById("emoteInput").style.background="linear-gradient(-45deg, #23d5ab, #ee7752, #e73c7e, #23a6d5)",document.getElementById("emoteInput").style.height="30px",document.getElementById("emoteInput").style.width="250px",document.getElementById("emoteInput").style.backgroundSize="400% 400%",document.getElementById("emoteInput").style.textAlign="center",setTimeout(function(){document.getElementById("emoteInput").value=o,document.getElementById("emoteInput").style.background="rgba(0,0,0,0.4)",document.getElementById("emoteInput").style.height="",document.getElementById("emoteInput").style.width="",document.getElementById("emoteInput").style.textAlign=""},2e3))}(e.id)})})}function r(){var e,t,o;for(e=document.getElementById("emoteInput").value.toUpperCase(),t=document.getElementById("emotetable").getElementsByTagName("a"),o=0;o<t.length;o++)t[o].getElementsByTagName("img")[0].alt.toUpperCase().indexOf(e)>-1?t[o].style.display="":t[o].style.display="none"}function c(){var t=chrome.runtime.getURL("content_new.css"),o=document.head,c=document.createElement("link");c.type="text/css",c.rel="stylesheet",c.href=t,o.appendChild(c);var d,a,s,u="Dopexz Ed",m=chrome.storage.local;function i(e,t,o){m.get(e,function(n){"on"===n[e]?document.documentElement.style.setProperty(t,"none"):document.documentElement.style.setProperty(t,o)})}function y(e,t,o){m.get(e,function(n){n[e]?document.documentElement.style.setProperty(t,n[e]):document.documentElement.style.setProperty(t,o)})}function h(e,t,o,n,l,r){m.get(e,function(c){c[e]===l?document.documentElement.style.setProperty(t,n):c[e]===r&&document.documentElement.style.setProperty(t,o)})}d="changeChatWidth",a="--chatwidth",s="354px",m.get(d,function(e){e[d]?document.documentElement.style.setProperty(a,e[d]+"px"):document.documentElement.style.setProperty(a,s)});var p=document.createElement("div");p.className="lmao";var g=document.createElement("div");g.className="lmaot";var f=chrome.runtime.getURL("images/kekw.png");document.documentElement.style.setProperty("--emotebg","url("+f+")"),g.id="lmaox",g.addEventListener("dblclick",function(){chrome.storage.local.get(["SET"],function(e){var t=e.SET,o=document.getElementById("emotetable"),n=document.getElementById("emoteInput");for("block"!==o.style.display?(o.style.display="block",n.style.display="block"):(o.style.display="none",n.style.display="none");o.firstChild;)o.removeChild(o.firstChild);for(var r=0;r<t.length;r++){var c=document.createElement("a");c.id=t[r].code,c.className="_5zfs",c.setAttribute("role","button"),c.setAttribute("data-title",t[r].code);var d=document.createElement("img");d.src=t[r].src,d.alt=t[r].code,c.appendChild(d),o.appendChild(c)}l()})}),p.appendChild(g);var b=document.createElement("div");function v(){document.body.appendChild(p),function(e){var t=0,o=0,n=0,l=0;function r(r){(r=r||window.event).preventDefault(),t=n-r.clientX,o=l-r.clientY,n=r.clientX,l=r.clientY;var c=document.getElementById("emotetable"),d=document.getElementById("emoteInput");e.offsetTop-o<=-90?(c.style.top=e.offsetTop-o+"px",c.style.left=e.offsetLeft-t-252+"px",d.style.top=e.offsetTop-o+197+"px",d.style.left=e.offsetLeft-t-252+"px"):(c.style.top=e.offsetTop-o-170+"px",c.style.left=e.offsetLeft-t-252+"px",d.style.top=e.offsetTop-o+27+"px",d.style.left=e.offsetLeft-t-252+"px"),e.style.top=e.offsetTop-o+"px",e.style.left=e.offsetLeft-t+"px"}function c(){document.onmouseup=null,document.onmousemove=null}e.onmousedown=function(e){(e=e||window.event).preventDefault(),n=e.clientX,l=e.clientY,document.onmouseup=c,document.onmousemove=r}}(document.getElementById("lmaox"));var e=document.createElement("input");e.type="text",e.placeholder="Filter emotes...",e.id="emoteInput",e.autocomplete="off",document.getElementById("emotetable").parentNode.appendChild(e),document.getElementById("emoteInput").addEventListener("keyup",r)}b.innerHTML='<div id="emotetable"></div>',p.appendChild(b),m.get("emoteMenuCheck",function(e){"on"===e.emoteMenuCheck&&setTimeout(v,3e3)}),new MutationObserver(function(e){e.forEach(function(e){e.addedNodes.length&&(i("chatRepliesHide","--hidereplies","block"),i("chatThreeDots","--chatthreedots","block"),i("chatCommentReacts","--chatreacts","block"),i("chatLikeReplyCheck","--likereply","list-item"),i("chatTopBarCheck","--chattopbardisplay","block"),y("chatBackground","--chatbg","#18181b"),y("chatTextSize","--textsize","13px"),y("chatTextColor","--textcolor","#FFF"),y("topbarColor","--topbarcolor","#18181b"),y("chattopbarColor","--chattopbarcolor","#18181b"),y("changefont","--fontfamily","Helvetica"),h("hideChatProfilePictures","--pfpdisplay","block","none","hide","show"),h("messageStyle","--messagestyle","left","none","2","1"),m.get("messageStyle",function(e){"1"===e.messageStyle?document.documentElement.style.setProperty("--messagestyle","left"):"2"===e.messageStyle&&document.documentElement.style.setProperty("--messagestyle","none")}),m.get("volumeScrollCheck",function(e){"on"===e.volumeScrollCheck&&document.addEventListener("wheel",n,{passive:!1})}))})}).observe(document.body,{childList:!0,subtree:!0});var E=document.getElementsByClassName("d2edcug0 hpfvmrgz qv66sw1b c1et5uql"),S=document.getElementsByClassName("l9j0dhe7 ll8tlv6m rq0escxv j83agx80 pfnyh3mw e5nlhep0 hv4rvrfc dati1w0a ecm0bbzt btwxx1t3 lzcic4wl"),w={};new MutationObserver(function(t){t.forEach(function(t){var o;t.addedNodes.length&&(m.get(["yourUsername","yourUsernameColor","othersUsernameColor"],function(t){t.yourUsername&&t.yourUsernameColor?(u=t.yourUsername,e=t.yourUsernameColor,w[u]=e):(e="blue",w[u="Dopexz Ed"]=e);for(var o=0;o<E.length;o++)if("random"!==t.othersUsernameColor&&null!==t.othersUsernameColor&&void 0!==t.othersUsernameColor)E[o].style.color=t.othersUsernameColor;else if(E[o].textContent in w)E[o].style.color=w[E[o].textContent];else{var n="hsl("+360*Math.random()+","+(50+50*Math.random())+"%,"+(40+40*Math.random())+"%)";E[o].style.color=n,w[E[o].textContent]=n}}),o=[],m.get(["highlightEnable","highlightKeywords","highlightColor","highlightOpacity"],function(e){if(void 0!==e.highlightEnable&&"off"!==e.highlightEnable){if(e.highlightKeywords&&e.highlightColor){o=e.highlightKeywords.split(",");for(var t=0;t<S.length;t++){S[t].style.backgroundColor="transparent",S[t].style.opacity="1",S[t].style.transform="none";for(var n=S[t].textContent.split(" "),l=0;l<n.length;l++)for(var r=0;r<o.length;r++)n[l].includes(o[r])&&(S[t].style.transform="scale(1.02)",S[t].style.opacity=e.highlightOpacity,S[t].style.backgroundColor=e.highlightColor)}}}else for(var c=0;c<S.length;c++)S[c].style.backgroundColor="transparent"}),m.get(["messageSeperate","chatSplittingEnable"],function(e){"off"!==e.chatSplittingEnable&&void 0!==e.chatSplittingEnable&&void 0!==e.messageSeperate?document.documentElement.style.setProperty("--messageSeparateBorder","2px solid"+e.messageSeperate):("off"===e.chatSplittingEnable||e.messageSeperate,document.documentElement.style.setProperty("--messageSeparateBorder","0"))}))})}).observe(document.body,{childList:!0,subtree:!0})}var d=[];chrome.storage.local.get(["SET"],function(e){d=e.SET});var a=["www.facebook.com"];function s(e){for(var t=e.querySelectorAll("div:not(.tw-tooltip):not(.bttv-tooltip):not(.ffz__tooltip--inner)"),o=0;o<t.length;o++)for(var n=0;n<t[o].childNodes.length;n++){var l=t[o].childNodes[n];if(3===l.nodeType){var r=l.nodeValue.split(" ");if(!(r.length<38))break;for(var c=document.createDocumentFragment(),a=0;a<r.length;a++){for(var s=!1,u=0;u<d.length;u++)if(r[a]===d[u].code){s=!0;var m=document.createElement("span");m.className="emote_wrapper";var i=document.createElement("img");i.className="inserted_emote",i.src=d[u].src,i.alt=d[u].code;var y=document.createElement("span");y.className="tooltiptext",y.textContent=d[u].code,m.appendChild(i),m.appendChild(y),c.appendChild(m);break}!1===s&&c.appendChild(document.createTextNode(r[a])),a<r.length-1&&c.appendChild(document.createTextNode(" "))}c.normalize(),t[o].replaceChild(c,l)}}}var u=new MutationObserver(function(e){e.forEach(function(e){for(var t=0;t<e.addedNodes.length;t++)e.addedNodes[t].childNodes.length&&s(e.addedNodes[t])})});function m(){for(var e=window.location.hostname,t=0;t<a.length;t++)if(e===a[t]){s(document.body),u.observe(document.body,{childList:!0,subtree:!0});break}}chrome.storage.sync.get(["ON"],function(e){1===e.ON&&(c(),m())});chrome.runtime.onMessage.addListener(function(e,t,o){"stop"===e.order?u.disconnect():"start"===e.order&&m(),"change"===e.newemotes&&chrome.storage.local.get(["SET"],function(e){d=e.SET,chrome.storage.sync.get(["ON"],function(e){if(1===e.ON)for(var t=window.location.hostname,o=0;o<a.length;o++)if(t===a[o]){s(document.body);break}})}),"add"===e.context&&void 0!==null.alt&&o({alt:null.alt,src:null.src})})}();

var obj = {};
var storage = chrome.storage.local;

function addPopoutChat() {

    var elements = document.querySelectorAll('.rq0escxv.l9j0dhe7.du4w35lb.j83agx80.pfnyh3mw.jifvfom9.bp9cbjyn.owycx6da.btwxx1t3.jb3vyjys.nkwizq5d.scwd0bx6.hop8lmos.ggphbty4')[0];        
    var popbtn = document.getElementById('popbtn');

    if (elements && popbtn === null) {
        var popoutButton = document.createElement("div");
        popoutButton.classList.add('popoutbutton');
        popoutButton.setAttribute('title', 'Popout chat');
        popoutButton.id = 'popbtn';
        popoutButton.addEventListener('click', (function() {
            var myWindow = window.open(window.location.href,"newWindow","width=500,height=700");  
            var setChatPopout = setInterval ((function () {
                try { 
                if (myWindow.document.querySelectorAll('[role="banner"]')[0] !== undefined && myWindow.document.querySelectorAll('[role="main"]')[0] !== undefined && myWindow.document.querySelectorAll('.jgljxmt5')[0] !== undefined &&  myWindow.document.querySelectorAll('.fop5sh7t.cgat1ltu.tv7at329.j83agx80.c4hnarmi.bp9cbjyn')[0] !== undefined && myWindow.document.querySelectorAll('.be9z9djy')[0] !== undefined && myWindow.document.getElementsByClassName('popoutbutton')[0] !== undefined && myWindow.document.querySelectorAll('.tw6a2znq.f10w8fjw.d1544ag0.pybr56ya.j83agx80.bp9cbjyn')[0] !== undefined) {
                    myWindow.document.querySelectorAll('[role="banner"]')[0].style.display = "none";
                    myWindow.document.querySelectorAll('[role="main"]')[0].style.display = "none"; 
                    myWindow.document.title = "Popout chat";
                    myWindow.document.documentElement.style.setProperty('--chatwidth', '100%'); 
                    myWindow.document.querySelectorAll('.jgljxmt5')[0].style.minHeight = '100vh';
                    myWindow.document.querySelectorAll('.fop5sh7t.cgat1ltu.tv7at329.j83agx80.c4hnarmi.bp9cbjyn')[0].style.left = "1%"; 
                    myWindow.document.querySelectorAll('.be9z9djy')[0].style.top = '0';  
                    myWindow.document.getElementsByClassName('popoutbutton')[0].style.display = "none";
                    myWindow.document.getElementById('thtbtn').style.display = "none";
                    myWindow.document.querySelectorAll('.tw6a2znq.f10w8fjw.d1544ag0.pybr56ya.j83agx80.bp9cbjyn')[0].style.paddingBottom = '0';

                    clearInterval(setChatPopout);
                }
                } catch(e){
                console.log(e);
                }                  
            }), 1);
        }));
        elements.appendChild(popoutButton);
    }           

}



window.addEventListener('keydown', function(e) {
  if (e.altKey == true && e.keyCode == 84) {
    if(document.querySelectorAll('[role="banner"]')[0].style.display !== 'none') {
                document.querySelectorAll('[role="banner"]')[0].style.display= 'none';
                document.querySelectorAll('.bkyfam09')[0].style.height = '100vh';
                document.querySelectorAll('.bkyfam09')[1].style.height = '100vh';
                document.querySelectorAll('.tw6a2znq.f10w8fjw.d1544ag0.pybr56ya.j83agx80.bp9cbjyn')[0].style.paddingBottom = '0';
                document.querySelector('.jgljxmt5').style.minHeight = '100vh';
                document.querySelector('.be9z9djy').style.top = '0';
            } else {
                document.querySelectorAll('[role="banner"]')[0].style.display= '';
                document.querySelectorAll('.tw6a2znq.f10w8fjw.d1544ag0.pybr56ya.j83agx80.bp9cbjyn')[0].style.paddingBottom = '';
                document.querySelectorAll('.bkyfam09')[0].style.height = '';
                document.querySelectorAll('.bkyfam09')[1].style.height = '';
                document.querySelector('.jgljxmt5').style.minHeight = '';
                document.querySelector('.be9z9djy').style.top = '';
            }
  }
    
});


function addTheatherMode() {

    var elements = document.querySelectorAll('.rq0escxv.l9j0dhe7.du4w35lb.j83agx80.pfnyh3mw.jifvfom9.bp9cbjyn.owycx6da.btwxx1t3.jb3vyjys.nkwizq5d.scwd0bx6.hop8lmos.ggphbty4')[0];        
    var thtbtn = document.getElementById('thtbtn');

    if (elements && thtbtn === null) {
        var theatherButton = document.createElement("div");
        theatherButton.classList.add('theatrebutton');
        theatherButton.setAttribute('title', 'Theather mode(alt+z)');
        theatherButton.id = 'thtbtn';
        theatherButton.addEventListener('click', (function() {
            console.log(document.querySelectorAll('.bkyfam09'))
            if(document.querySelectorAll('[role="banner"]')[0].style.display !== 'none') {
                document.querySelectorAll('[role="banner"]')[0].style.display= 'none';
                document.querySelectorAll('.bkyfam09')[0].style.height = '100vh';
                document.querySelectorAll('.bkyfam09')[1].style.height = '100vh';
                document.querySelectorAll('.tw6a2znq.f10w8fjw.d1544ag0.pybr56ya.j83agx80.bp9cbjyn')[0].style.paddingBottom = '0';
                document.querySelector('.jgljxmt5').style.minHeight = '100vh';
                document.querySelector('.be9z9djy').style.top = '0';
            } else {
                document.querySelectorAll('[role="banner"]')[0].style.display= '';
                document.querySelectorAll('.tw6a2znq.f10w8fjw.d1544ag0.pybr56ya.j83agx80.bp9cbjyn')[0].style.paddingBottom = '';
                document.querySelectorAll('.bkyfam09')[0].style.height = '';
                document.querySelectorAll('.bkyfam09')[1].style.height = '';
                document.querySelector('.jgljxmt5').style.minHeight = '';
                document.querySelector('.be9z9djy').style.top = '';
            }
            
            
        }));
        elements.appendChild(theatherButton);
    }           

}




var thtbtn = document.getElementById('thtbtn');
var popbutn = document.getElementById('popbtn');
if (popbutn === null || popbutn === undefined || thtbtn === null || thtbtn === undefined) {
    var observeForPop = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation){
            addPopoutChat();
            addTheatherMode();
        });        
    });
    observeForPop.observe(document.body, {childList: true, subtree: true});
}


// auto update emotes from link in real time
setInterval ((function () {
    
    try { 

        const rameeEmotes = fetch("https://dopexz7.github.io/emotes/ramee.json?r=")
          .then((response) => response.json())
          .then((user) => {
            return user;
        });

        const ratedEmotes = fetch("https://dopexz7.github.io/emotes/rated.json?r=")
          .then((response) => response.json())
          .then((user) => {
            return user;
        });

        const vaderEmotes = fetch("https://dopexz7.github.io/emotes/vader.json?r=")
          .then((response) => response.json())
          .then((user) => {
            return user;
        });

        async function dopeFunction() {
            // ramee - 1 rated - 2 vader - 3

            let resultx = await rameeEmotes;
            obj.currentRameeSet = resultx;
            let result2 = await ratedEmotes;
            obj.currentRatedSet = result2;
            let result3 = await vaderEmotes;
            obj.currentVaderSet = result3;
            storage.set(obj);
            storage.get(['SETS', 'SET'], function(result) {
                var x = result.SETS;
                //var array = result.SET;
                var newArr;
                if (x !== undefined) {
                    if (x.includes(1) && x.includes(2) && x.includes(3)) { // if 1,2 and 3
                    newArr = resultx.concat(result2, result3);
                    newArr = newArr.filter((item,index)=>{
                        return (newArr.indexOf(item) == index);
                    });  
                } else if(x.includes(1) && x.includes(2) && x.includes(3) !== true) { // if 1 and 2, but not 3
                    newArr = resultx.concat(result2);
                    newArr = newArr.filter((item,index)=>{
                        return (newArr.indexOf(item) == index);
                    });  
                } else if(x.includes(1) && x.includes(3) && x.includes(2) !== true) { // if 1 and 3, but not 2
                    newArr = resultx.concat(result3);
                    newArr = newArr.filter((item,index)=>{
                        return (newArr.indexOf(item) == index);
                    });  
                } else if(x.includes(2) && x.includes(3) && x.includes(2) !== true) { // if 2 and 3, but not 1
                    newArr = result2.concat(result3);
                    newArr = newArr.filter((item,index)=>{
                        return (newArr.indexOf(item) == index);
                    });  
                } else if(x.includes(1) || x.includes(2) || x.includes(3)) {
                    if(x.includes(1) && x.includes(2) !== true && x.includes(3) !== true) {
                        newArr = resultx;
                    } else if(x.includes(2) && x.includes(1) !== true && x.includes(3) !== true) {
                        newArr = result2;
                    } else if(x.includes(3) && x.includes(2) !== true && x.includes(1) !== true) {
                        newArr = result3;
                    }
                }
                obj.SET = newArr;
                obj.setDate = new Date().toLocaleString('en-US');
                storage.set(obj);
                //setswap(); //refreshes emotes
                }
            });
        }





        var emotes;

        storage.get(['currentRameeSet', 'currentRatedSet', 'currentVaderSet'], function(result) {
           jQuery.getJSON("https://dopexz7.github.io/emotes/ramee.json?r=" + Math.random(), function(response) {
                emotes = response;
                if(result.currentRameeSet !== emotes) {
                    dopeFunction();
                    //setswap(); //use changed emote set
                }
    
            });
           jQuery.getJSON("https://dopexz7.github.io/emotes/rated.json?r=" + Math.random(), function(response) {
                emotes = response;
                if(result.currentRatedSet !== emotes) {
                    dopeFunction();
                    //setswap(); //use changed emote set
                }

            });
           jQuery.getJSON("https://dopexz7.github.io/emotes/vader.json?r=" + Math.random(), function(response) {
                emotes = response;
                if(result.currentVaderSet !== emotes) {
                    dopeFunction();
                    //setswap(); //use changed emote set
                }

            });
        });
        
    } catch(e){
    console.log(e);
    }                   
    }), 600000);



(function() { 
    var yourUsernameColor = "#000";
    document.documentElement.style.setProperty('--usernamecolor', yourUsernameColor);
    document.documentElement.style.setProperty('--fontfamily', 'Helvetica');
    document.documentElement.style.setProperty('--chatwidth', '354px'); 
    document.documentElement.style.setProperty('--chattopbarcolor', '#18181b'); 
    document.documentElement.style.setProperty('--messagestyle', 'left');
    document.documentElement.style.setProperty('--currentvolon', '0');

    var settings = {
        volume: 20,
        volumeIncrement: 3,
    };

    var handleScroll = function (element, video) {
        if (!Boolean(video.webkitAudioDecodedByteCount)) //video has audio. If not stops volume scrolling
            return;

        var volume = 1;

        if (video.volume > settings.volumeIncrement / 100 || (video.volume === settings.volumeIncrement / 100 && event.deltaY < 0)) {
            volume = video.volume + (settings.volumeIncrement / 100) * (event.deltaY / 100 * -1); //deltaY is how much the wheel scrolled, 100 up, -100 down. Divided by 100 to only get direction, then inverted

            //Rounding the volume to the nearest increment, in case the original volume was not on the increment.
            volume = volume * 100;
            volume = volume / settings.volumeIncrement;
            volume = Math.round(volume);
            volume = volume * settings.volumeIncrement;
            volume = volume / 100;
        } else {
            volume = video.volume + (1 / 100) * (event.deltaY / 100 * -1);
        }

        //Limiting the volume to between 0-1
        if (volume < 0) {
            volume = 0;

        } else if (volume > 1) {
            volume = 1;
        }

        video.muted = volume <= 0;

        video.volume = volume;
        video.dataset.volume = volume;



        var currentvol = Math.round(video.volume * 100); 
        //document.querySelector('.k4urcfbm.j9ispegn.pmk7jnqg.pcp91wgn.iuny7tx3.p8fzw8mz.ipjc6fyt.rq0escxv.pqc7ok08').style.opacity = '0';
        var volSlider = document.querySelector('.k4urcfbm.pmk7jnqg.i09qtzwb.qttc61fc.ihh4hy1g.kdgqqoy6.jk6sbkaj.bogkn74s');
        if(volSlider !== null && volSlider !== undefined) {
            volSlider.style.height = currentvol + '%';
        }
        

        
        
    };

    var onScroll = function (event) {
        var elements = document.elementsFromPoint(event.clientX, event.clientY);
        for (var element of elements) {
            if (element.tagName === "VIDEO") {
                event.preventDefault();
                handleScroll(element, element);
                document.documentElement.style.setProperty('--currentvolon', "1");
                document.documentElement.style.setProperty('--currentvolonb', "block");
                setTimeout((function(){
                    document.documentElement.style.setProperty('--currentvolon', "0");
                    document.documentElement.style.setProperty('--currentvolonb', "none");
                }), 3000);
            }
        }


    };
    
    function insertEmote(emoteCode) {
        var textbox = document.querySelector('.oo9gr5id.lzcic4wl.jm1wdb64.l9j0dhe7.gsox5hk5.mdldhsdk.ii04i59q.notranslate');
        var textbox2 = textbox.childNodes[0];
        var textbox3 = textbox2.childNodes[0];
        var textbox4 = textbox3.childNodes;
        var emtab = document.getElementById('emotetable');
        var curVal = document.getElementById('emoteInput').value;
        if (textbox4[0] !== undefined) {
            textbox4[0].textContent +=  " " + emoteCode;  
        } else {
            document.getElementById('emoteInput').value = "You have to type something in first";
            document.getElementById('emoteInput').style.background = "linear-gradient(-45deg, #23d5ab, #ee7752, #e73c7e, #23a6d5)"
            document.getElementById('emoteInput').style.height = "30px";
            document.getElementById('emoteInput').style.width = "250px";
            document.getElementById('emoteInput').style.backgroundSize = "400% 400%";
            document.getElementById('emoteInput').style.textAlign = "center"
            setTimeout(function(){
                document.getElementById('emoteInput').value = curVal;
                document.getElementById('emoteInput').style.background = "rgba(0,0,0,0.4)";
                document.getElementById('emoteInput').style.height = "";
                document.getElementById('emoteInput').style.width = "";
                document.getElementById('emoteInput').style.textAlign = ""
            
            },2000);
        }
     
    }

    function clickEmotes() {
        var table, elements;
        table = document.getElementById("emotetable");
        elements = table.getElementsByTagName("a");
        Array.prototype.forEach.call(table.children, child => {
            child.addEventListener('click', event => {
                    insertEmote(child.id);
            });
        });
                
    }

    function autocc() {
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById("emoteInput");
        filter = input.value.toUpperCase();
        ul = document.getElementById("emotetable");
        li = ul.getElementsByTagName("a");
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("img")[0];
            txtValue = a.alt;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }

        }
    }
    ///* emote menu
    function showemotes() { //show table with all emotes         
        chrome.storage.local.get(['SET'], (function(result) {
            var emotes = result.SET;
            var table = document.getElementById("emotetable");
            var tableInput = document.getElementById('emoteInput');
            if (table.style.display !== "block") {
                table.style.display = "block";
                tableInput.style.display = 'block';
            } else{
                table.style.display = "none";
                tableInput.style.display = 'none';
                }
                while (table.firstChild) {
                    table.removeChild(table.firstChild); //clears emotes
                }
                for (var i = 0; i < emotes.length; i++) {
                var imga = document.createElement('a');
                imga.id = emotes[i].code;
                imga.className = "_5zfs";
                imga.setAttribute('role','button');
                imga.setAttribute('data-title', emotes[i].code);
                var img = document.createElement("img");
                img.src = emotes[i].src;
                img.alt = emotes[i].code;
                imga.appendChild(img);
                table.appendChild(imga);

            }
            clickEmotes();

        }));
        
                    
    }

    
    


    function enableStyles(){
        var a = chrome.runtime.getURL("content_new.css");
        var head = document.head;
        var link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = a;
        head.appendChild(link);
        var yourUsername = "Dopexz Ed";
        var storage = chrome.storage.local;
        
        function volumeScrollEnable() {
            storage.get('volumeScrollCheck', (function(result) {
                if (result.volumeScrollCheck === 'on') {
                    document.addEventListener("wheel", onScroll, {passive: false});
                    }
            }));
        }

        function chatAppToggles(resultValue, rootVal, value) {
            storage.get(resultValue, (function(result){
                if (result[resultValue] === 'on') {
                    document.documentElement.style.setProperty(rootVal, 'none');
                } else {
                    document.documentElement.style.setProperty(rootVal, value);
                }
            }));
        }
        
        // function chatOnLeftSide() {
        //     storage.get('chatOnLeft', (function(result) {
        //         if (result.chatOnLeft === 'on') {
        //             document.querySelector('.hybvsw6c.j83agx80.n7fi1qx3.cbu4d94t.pad24vr5.poy2od1o.iyyx5f41.ap132fyt.pphwfc2g.be9z9djy').style.position = 'fixed';
        //             document.querySelector('.hybvsw6c.j83agx80.n7fi1qx3.cbu4d94t.pad24vr5.poy2od1o.iyyx5f41.ap132fyt.pphwfc2g.be9z9djy').style.left = '0';
        //             document.querySelector('.hybvsw6c.j83agx80.pfnyh3mw.dp1hu0rb.l9j0dhe7.o36gj0jk').style.maxWidth = '0';
        //             document.querySelector('.j83agx80.cbu4d94t.d2edcug0').style.left = '';
        //             document.querySelector('.j83agx80.cbu4d94t.d2edcug0').style.maxWidth = '82%';
        //             document.querySelector('.j83agx80.cbu4d94t.d2edcug0').style.position = 'fixed';
        //             document.querySelector('.j83agx80.cbu4d94t.d2edcug0').style.right = '0';

        //              //document.querySelector('.pphwfc2g ').style.minHeight = '0';
        //             } else {
        //             //document.querySelector('.hybvsw6c.j83agx80.pfnyh3mw.dp1hu0rb.l9j0dhe7.o36gj0jk').style.maxWidth = '0';
        //             //document.querySelector('.hybvsw6c.j83agx80.n7fi1qx3.cbu4d94t.pad24vr5.poy2od1o.iyyx5f41.ap132fyt.pphwfc2g.be9z9djy').style.position = 'relative';
        //             document.querySelector('.hybvsw6c.j83agx80.n7fi1qx3.cbu4d94t.pad24vr5.poy2od1o.iyyx5f41.ap132fyt.pphwfc2g.be9z9djy').style.left = '';
        //             document.querySelector('.hybvsw6c.j83agx80.n7fi1qx3.cbu4d94t.pad24vr5.poy2od1o.iyyx5f41.ap132fyt.pphwfc2g.be9z9djy').style.right = '0';
        //             document.querySelector('.j83agx80.cbu4d94t.d2edcug0').style.right = '';
        //             document.querySelector('.j83agx80.cbu4d94t.d2edcug0').style.left = '0';
        //             }
        //     }));
        // }

        function storageSetValueSettings(resultValue, styleRootValue, defaultValue) {
            storage.get(resultValue, (function(result) {
                if (result[resultValue]) {
                    document.documentElement.style.setProperty(styleRootValue, result[resultValue]); 
                    } else {
                        document.documentElement.style.setProperty(styleRootValue, defaultValue);  
                        } 
            }));
        }
        function storageSetValueChatWidth(resultValue, styleRootValue, defaultValue) {
            storage.get(resultValue, (function(result) {
                if (result[resultValue]) {
                    document.documentElement.style.setProperty(styleRootValue, result[resultValue] + 'px'); 
                    } else {
                        document.documentElement.style.setProperty(styleRootValue, defaultValue);  
                        } 
            }));
        }

        function storageSetValueSettingsConditional(resultValue, styleRootValue, defaultValue, firstValue, firstCond, secondCond) {
            storage.get(resultValue, (function(result) {
                if (result[resultValue] === firstCond) {
                    document.documentElement.style.setProperty(styleRootValue, firstValue); 

                    } else if (result[resultValue] === secondCond) {
                        document.documentElement.style.setProperty(styleRootValue, defaultValue);  
                        } 
            }));
        }
        function storageSetValueInterval() {
            storageSetValueSettings('chatBackground', '--chatbg', '#18181b');
            storageSetValueSettings('chatTextSize', '--textsize', '13px');
            storageSetValueSettings('chatTextColor', '--textcolor', '#FFF');
            storageSetValueSettings('topbarColor', '--topbarcolor', '#18181b');
            storageSetValueSettings('chattopbarColor', '--chattopbarcolor', '#18181b');
            storageSetValueSettings('changefont', '--fontfamily', 'Helvetica');
            //storageSetValueChatWidth('changeChatWidth', '--chatwidth', '354px');



            storageSetValueSettingsConditional('hideChatProfilePictures', '--pfpdisplay', 'block', 'none', 'hide', 'show');

            storageSetValueSettingsConditional('messageStyle', '--messagestyle', 'left', 'none', '2', '1');

            storage.get('messageStyle', (function(result) {
                if (result.messageStyle === '1') {
                    document.documentElement.style.setProperty('--messagestyle', 'left');
                } else if (result.messageStyle === '2') {
                        document.documentElement.style.setProperty('--messagestyle', 'none');
                } 
            }));
        }
        storageSetValueChatWidth('changeChatWidth', '--chatwidth', '354px');
        function setHighlightWords() {
            var newc = [];
            storage.get(['highlightEnable', 'highlightKeywords', 'highlightColor', 'highlightOpacity'],  (function(result) {
            	if (result.highlightEnable !== undefined && result.highlightEnable !== 'off') {
            		if (result.highlightKeywords && result.highlightColor) {
	                    newc = result.highlightKeywords.split(",");
	                    for (var x=0; x<messageElement.length; x++) {
	                        messageElement[x].style.backgroundColor = 'transparent';
	                        messageElement[x].style.opacity = '1';
	                        messageElement[x].style.transform = "none";
	                        var textassplit = messageElement[x].textContent.split(" ");
	                        for (var l=0; l<textassplit.length; l++) {
	                            for (var j=0; j<newc.length; j++) {
	                                if (textassplit[l].includes(newc[j])) {
	                                    messageElement[x].style.transform = "scale(1.02)";
	                                    messageElement[x].style.opacity = result.highlightOpacity;
	                                    messageElement[x].style.backgroundColor = result.highlightColor;

	                                }
	                            }  
	                        }      
	                    }          
                	}  
            	} else {
            		for (var p=0; p<messageElement.length; p++) {
            		  messageElement[p].style.backgroundColor = 'transparent';
            	    }
            	}
            }));
            
        }

        function usernameElementInterval() {
            storage.get(['yourUsername', 'yourUsernameColor', 'othersUsernameColor'], (function(result) {
                if (result.yourUsername && result.yourUsernameColor) {
                    yourUsername = result.yourUsername;
                    yourUsernameColor = result.yourUsernameColor;
                    userNameColors[yourUsername] = yourUsernameColor;
                } else{
                    yourUsername = 'Dopexz Ed';
                    yourUsernameColor = 'blue';
                    userNameColors[yourUsername] = yourUsernameColor;
                }
                
                for(var i = 0; i < usernameElement.length; i++) {
                    if (result.othersUsernameColor !== "random" && result.othersUsernameColor !== null && result.othersUsernameColor !== undefined) {
                        usernameElement[i].style.color = result.othersUsernameColor;
                    } else if (usernameElement[i].textContent in userNameColors) {
                        usernameElement[i].style.color = userNameColors[usernameElement[i].textContent];
                    } else {
                        var randomGeneratedColor = getRandomColor();
                        usernameElement[i].style.color = randomGeneratedColor;
                        userNameColors[usernameElement[i].textContent] = randomGeneratedColor;
                    }
                }        
                
                    
            }));
                
        }
        function seperateChatMessages() {
            storage.get(['messageSeperate', 'chatSplittingEnable'], (function(result) {
                if (result.chatSplittingEnable !== 'off' && result.chatSplittingEnable !== undefined &&  result.messageSeperate !== undefined) {
                    document.documentElement.style.setProperty('--messageSeparateBorder', "2px solid" + result.messageSeperate);
                } else if (result.chatSplittingEnable === 'off' || result.messageSeperate === undefined) {
                    document.documentElement.style.setProperty('--messageSeparateBorder', "0");
                } else {
                	document.documentElement.style.setProperty('--messageSeparateBorder', "0");
                }
                
            }));       
        }
        
        var tabBlock = document.createElement("div");
        tabBlock.className = "lmao";          
        var emoteButton = document.createElement("div");
        emoteButton.className = "lmaot";
        var imgUrl = chrome.runtime.getURL("images/kekw.png");
        document.documentElement.style.setProperty('--emotebg', "url(" + imgUrl + ")");
        emoteButton.id = "lmaox";
        emoteButton.addEventListener('dblclick', (function() {
            showemotes();             
        }));

        tabBlock.appendChild(emoteButton);
        var alltable1 = document.createElement('div');

        alltable1.innerHTML = '<div id="emotetable"></div>'; 
        
            //document.getElementById('emotetable').appendChild(modal);     
        tabBlock.appendChild(alltable1);

        function dragElement(elmnt) {
            var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
            elmnt.onmousedown = dragMouseDown;
            function dragMouseDown(e) {
                e = e || window.event;
                e.preventDefault();
                // cursor position at startup
                pos3 = e.clientX;
                pos4 = e.clientY;
                document.onmouseup = closeDragElement;
                 // call a function whenever the cursor moves:
                document.onmousemove = elementDrag;
            }
            function elementDrag(e) {
                e = e || window.event;
                e.preventDefault();
                // calculate the new cursor position:
                pos1 = pos3 - e.clientX;
                pos2 = pos4 - e.clientY;
                pos3 = e.clientX;
                pos4 = e.clientY;
                // set the element's new position:
                var kek = document.getElementById('emotetable');
                var kekinput = document.getElementById('emoteInput');
                if ((elmnt.offsetTop - pos2) <= -90) {
                    kek.style.top = (elmnt.offsetTop - pos2) + "px";
                    kek.style.left = (elmnt.offsetLeft - pos1 - 252) + "px";
                    kekinput.style.top = (elmnt.offsetTop - pos2 + 197) + "px";
                    kekinput.style.left = (elmnt.offsetLeft - pos1 - 252) + "px";
                } else {
                    kek.style.top = (elmnt.offsetTop - pos2 - 170) + "px";
                    kek.style.left = (elmnt.offsetLeft - pos1 - 252) + "px";
                    kekinput.style.top = (elmnt.offsetTop - pos2 + 27) + "px";
                    kekinput.style.left = (elmnt.offsetLeft - pos1 - 252) + "px";
                }
                elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
                elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
                }
            function closeDragElement() {
                document.onmouseup = null;
                document.onmousemove = null;
            }
        }
                
    
        function appendTabBlock(){
            document.body.appendChild(tabBlock);
            dragElement(document.getElementById("lmaox"));
            var emoteAutoComplete = document.createElement('input');
            emoteAutoComplete.type = 'text';
            emoteAutoComplete.placeholder = 'Filter emotes...';
            emoteAutoComplete.id = "emoteInput";
            emoteAutoComplete.autocomplete = "off";
            document.getElementById('emotetable').parentNode.appendChild(emoteAutoComplete); 
            document.getElementById('emoteInput').addEventListener("keyup", autocc);
        }
        function emoteMenuEnable() {
            storage.get('emoteMenuCheck', (function(result) {
                if (result.emoteMenuCheck === 'on') {
                    setTimeout(appendTabBlock, 3000);
                }
            }));
        }
        emoteMenuEnable();
        var obvpage = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation){
                if(mutation.addedNodes.length){
                    chatAppToggles('chatRepliesHide', '--hidereplies', 'block');
                    chatAppToggles('chatThreeDots', '--chatthreedots', 'block');
                    chatAppToggles('chatCommentReacts', '--chatreacts', 'block');
                    chatAppToggles('chatLikeReplyCheck', '--likereply', 'list-item');
                    chatAppToggles('chatTopBarCheck', '--chattopbardisplay', 'block');
                    //chatOnLeftSide();
                    storageSetValueInterval();
                    volumeScrollEnable();
                }
            
            });        
        });
        obvpage.observe(document.body, {childList: true, subtree: true});
        
        
        function getRandomColor(){
            return "hsl(" + 360 * Math.random() + ',' + (50 + 50 * Math.random()) + '%,' + (40 + 40 * Math.random()) + '%)';
        }

        var usernameElement = document.getElementsByClassName("d2edcug0 hpfvmrgz qv66sw1b c1et5uql");
        var messageElement = document.getElementsByClassName("l9j0dhe7 ll8tlv6m rq0escxv j83agx80 pfnyh3mw e5nlhep0 hv4rvrfc dati1w0a ecm0bbzt btwxx1t3 lzcic4wl");
        var userNameColors = {};



        var obvchat = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation){
                if(mutation.addedNodes.length){
                    usernameElementInterval();
                    setHighlightWords(); 
                    seperateChatMessages();
                }
            
            });        
        });
        obvchat.observe(document.body, {childList: true, subtree: true});
        
    }

    
    var emotes = []; //array for emote objects
    chrome.storage.local.get(['SET'], (function(result) { //get custom emotes at page load
        emotes = result.SET; //used saved emote set
    }));

    var hostnames = ["www.facebook.com"]; //array for hostname objects

    function substitute(nodes) { //substitutes text patterns in generally visible text elements with assigned inline images
        var elements = nodes.querySelectorAll("div:not(.tw-tooltip):not(.bttv-tooltip):not(.ffz__tooltip--inner)");
        for (var i = 0; i < elements.length; i++) {
            for (var j = 0; j < elements[i].childNodes.length; j++) {
                var node = elements[i].childNodes[j];
                if (node.nodeType === 3) { //if the node is a text node
                    var text = node.nodeValue.split(" "); //split text by spaces
                    if (text.length < 38) {
                        var new_node = document.createDocumentFragment();
                        for (var k = 0; k < text.length; k++) {
                            var found = false;
                            for (var l = 0; l < emotes.length; l++) {
                                if (text[k] === emotes[l].code) { //if emote match is found
                                    found = true;
                                    var wrapper = document.createElement("span");
                                    wrapper.className = "emote_wrapper";
                                    var icon = document.createElement("img");
                                    icon.className = "inserted_emote";
                                    icon.src = emotes[l].src; //emote image source
                                    icon.alt = emotes[l].code; //alternate text (for copy/paste)
                                    var tip = document.createElement("span");
                                    tip.className = "tooltiptext";
                                    tip.textContent = emotes[l].code;
                                    wrapper.appendChild(icon);
                                    wrapper.appendChild(tip);
                                    new_node.appendChild(wrapper);
                                    break; //break loop when a match is found (only one emote can match)
                                }
                            }
                            if (found === false) { //if no emote match has been found
                                new_node.appendChild(document.createTextNode(text[k])); //re-insert word
                            }
                            if (k < text.length - 1) { //miss last word
                                new_node.appendChild(document.createTextNode(" ")); //add a space
                            }
                        }
                        new_node.normalize(); //concatenate adjacent text nodes
                        elements[i].replaceChild(new_node, node); //replace text node with fragment including inserted emotes
                    }
                    else {
                        break;
                    }
                }
            }
        }
    }

    var observer = new MutationObserver(function(mutations) { //checks nodes that are subjected to change after initial page load
        mutations.forEach((function(mutation) {
            for (var i = 0; i < mutation.addedNodes.length; i++) {
                    if (mutation.addedNodes[i].childNodes.length) {
                        substitute(mutation.addedNodes[i]); //subsequent substitutions
                        } 
            }
        }));
    });

    function initiate() {
        var hn = window.location.hostname; //get hostname of frame
        for (var i = 0; i < hostnames.length; i++) {
            if (hn === hostnames[i]) { //if hostname included
                substitute(document.body); //activated substitution
                observer.observe(document.body, { //start checking
                    childList: true, subtree: true
                });
                break;
            }
        }
    }
    
    
    chrome.storage.sync.get(['ON'], (function(result) { //check if the extension is on at page load
        if (result.ON === 1) {
            enableStyles();
            initiate();
            
        }
    }));

    var target = null;

    chrome.runtime.onMessage.addListener((function(request, sender, sendResponse) { //menu actions
        if (request.order === "stop") { //switch extension off
            observer.disconnect(); //stop checking
        }
        else if (request.order === "start") { //switch extension on
            initiate();
        }
        if (request.newemotes === "change") { //use new custom emotes set
            chrome.storage.local.get(['SET'], (function(result) {
                emotes = result.SET;
                chrome.storage.sync.get(['ON'], (function(result) {
                    if (result.ON === 1) {
                        var hn = window.location.hostname; //get hostname of frame
                        for (var i = 0; i < hostnames.length; i++) {
                            if (hn === hostnames[i]) { //if hostname included
                                substitute(document.body); //activated substitution
                                break;
                            }
                        }
                    }
                }));
            }));
        }
        if (request.context === "add") {
            if (typeof target.alt !== "undefined") {
                sendResponse({ alt: target.alt, src: target.src });
            }
        }
    }));
}());