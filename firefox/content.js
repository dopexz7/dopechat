var obj={},storage=chrome.storage.local;function addPopoutChat(){var e=setInterval(function(){var t=document.querySelectorAll(".rq0escxv.l9j0dhe7.du4w35lb.j83agx80.pfnyh3mw.jifvfom9.bp9cbjyn.owycx6da.btwxx1t3.jb3vyjys.nkwizq5d.scwd0bx6.hop8lmos.ggphbty4")[0],o=document.getElementById("popbtn");if(t&&null===o){var n=document.createElement("div");n.classList.add("popoutbutton"),n.id="popbtn",n.setAttribute("title","Popout chat"),n.addEventListener("click",function(){window.open(window.location.href);var e=setInterval(function(){try{document.title="Popout chat",document.querySelectorAll('[role="banner"]')[0].style.display="none",document.querySelectorAll('[role="main"]')[0].style.display="none",document.documentElement.style.setProperty("--chatwidth","100%"),document.querySelectorAll(".jgljxmt5")[0].style.minHeight="100vh",document.querySelectorAll(".fop5sh7t.cgat1ltu.tv7at329.j83agx80.c4hnarmi.bp9cbjyn")[0].style.left="1%",document.querySelectorAll(".be9z9djy")[0].style.top="0",document.getElementsByClassName("popoutbutton")[0].style.display="none",document.querySelectorAll(".tw6a2znq.f10w8fjw.d1544ag0.pybr56ya.j83agx80.bp9cbjyn")[0].style.paddingBottom="0",clearInterval(e)}catch(e){console.log(e)}},1)}),t.appendChild(n),clearInterval(e)}},1)}function addTheatherMode(){var e=document.querySelectorAll(".rq0escxv.l9j0dhe7.du4w35lb.j83agx80.pfnyh3mw.jifvfom9.bp9cbjyn.owycx6da.btwxx1t3.jb3vyjys.nkwizq5d.scwd0bx6.hop8lmos.ggphbty4")[0],t=document.getElementById("thtbtn");if(e&&null===t){var o=document.createElement("div");o.classList.add("theatrebutton"),o.setAttribute("title","Theather mode(alt+z)"),o.id="thtbtn",o.addEventListener("click",function(){console.log(document.querySelectorAll(".bkyfam09")),"none"!==document.querySelectorAll('[role="banner"]')[0].style.display?(document.querySelectorAll('[role="banner"]')[0].style.display="none",document.querySelectorAll(".bkyfam09")[0].style.height="100vh",document.querySelectorAll(".bkyfam09")[1].style.height="100vh",document.querySelectorAll(".tw6a2znq.f10w8fjw.d1544ag0.pybr56ya.j83agx80.bp9cbjyn")[0].style.paddingBottom="0",document.querySelector(".jgljxmt5").style.minHeight="100vh",document.querySelector(".be9z9djy").style.top="0"):(document.querySelectorAll('[role="banner"]')[0].style.display="",document.querySelectorAll(".tw6a2znq.f10w8fjw.d1544ag0.pybr56ya.j83agx80.bp9cbjyn")[0].style.paddingBottom="",document.querySelectorAll(".bkyfam09")[0].style.height="",document.querySelectorAll(".bkyfam09")[1].style.height="",document.querySelector(".jgljxmt5").style.minHeight="",document.querySelector(".be9z9djy").style.top="")}),e.appendChild(o)}}window.addEventListener("keydown",function(e){1==e.altKey&&84==e.keyCode&&("none"!==document.querySelectorAll('[role="banner"]')[0].style.display?(document.querySelectorAll('[role="banner"]')[0].style.display="none",document.querySelectorAll(".bkyfam09")[0].style.height="100vh",document.querySelectorAll(".bkyfam09")[1].style.height="100vh",document.querySelectorAll(".tw6a2znq.f10w8fjw.d1544ag0.pybr56ya.j83agx80.bp9cbjyn")[0].style.paddingBottom="0",document.querySelector(".jgljxmt5").style.minHeight="100vh",document.querySelector(".be9z9djy").style.top="0"):(document.querySelectorAll('[role="banner"]')[0].style.display="",document.querySelectorAll(".tw6a2znq.f10w8fjw.d1544ag0.pybr56ya.j83agx80.bp9cbjyn")[0].style.paddingBottom="",document.querySelectorAll(".bkyfam09")[0].style.height="",document.querySelectorAll(".bkyfam09")[1].style.height="",document.querySelector(".jgljxmt5").style.minHeight="",document.querySelector(".be9z9djy").style.top=""))});var thtbtn=document.getElementById("thtbtn"),popbutn=document.getElementById("popbtn");if(null==popbutn||null==thtbtn){var observeForPop=new MutationObserver(function(e){e.forEach(function(e){addPopoutChat(),addTheatherMode()})});observeForPop.observe(document.body,{childList:!0,subtree:!0})}setInterval(function(){try{const o=fetch("https://dopexz7.github.io/emotes/ramee.json?r=").then(e=>e.json()).then(e=>e),n=fetch("https://dopexz7.github.io/emotes/rated.json?r=").then(e=>e.json()).then(e=>e),l=fetch("https://dopexz7.github.io/emotes/vader.json?r=").then(e=>e.json()).then(e=>e);async function e(){let e=await o;obj.currentRameeSet=e;let t=await n;obj.currentRatedSet=t;let r=await l;obj.currentVaderSet=r,storage.set(obj),storage.get(["SETS","SET"],function(o){var n,l=o.SETS;void 0!==l&&(l.includes(1)&&l.includes(2)&&l.includes(3)?n=(n=e.concat(t,r)).filter((e,t)=>n.indexOf(e)==t):l.includes(1)&&l.includes(2)&&!0!==l.includes(3)?n=(n=e.concat(t)).filter((e,t)=>n.indexOf(e)==t):l.includes(1)&&l.includes(3)&&!0!==l.includes(2)?n=(n=e.concat(r)).filter((e,t)=>n.indexOf(e)==t):l.includes(2)&&l.includes(3)&&!0!==l.includes(2)?n=(n=t.concat(r)).filter((e,t)=>n.indexOf(e)==t):(l.includes(1)||l.includes(2)||l.includes(3))&&(l.includes(1)&&!0!==l.includes(2)&&!0!==l.includes(3)?n=e:l.includes(2)&&!0!==l.includes(1)&&!0!==l.includes(3)?n=t:l.includes(3)&&!0!==l.includes(2)&&!0!==l.includes(1)&&(n=r)),obj.SET=n,obj.setDate=(new Date).toLocaleString("en-US"),storage.set(obj))})}var t;storage.get(["currentRameeSet","currentRatedSet","currentVaderSet"],function(o){jQuery.getJSON("https://dopexz7.github.io/emotes/ramee.json?r="+Math.random(),function(n){t=n,o.currentRameeSet!==t&&e()}),jQuery.getJSON("https://dopexz7.github.io/emotes/rated.json?r="+Math.random(),function(n){t=n,o.currentRatedSet!==t&&e()}),jQuery.getJSON("https://dopexz7.github.io/emotes/vader.json?r="+Math.random(),function(n){t=n,o.currentVaderSet!==t&&e()})})}catch(e){console.log(e)}},6e5),function(){var e="#000";document.documentElement.style.setProperty("--usernamecolor",e),document.documentElement.style.setProperty("--fontfamily","Helvetica"),document.documentElement.style.setProperty("--chatwidth","354px"),document.documentElement.style.setProperty("--chattopbarcolor","#18181b"),document.documentElement.style.setProperty("--messagestyle","left"),document.documentElement.style.setProperty("--currentvolon","0");var t=3,o=function(e,o){if(Boolean(o.webkitAudioDecodedByteCount)){var n=1;o.volume>t/100||o.volume===t/100&&event.deltaY<0?(n=o.volume+t/100*(event.deltaY/100*-1),n*=100,n/=t,n=Math.round(n),n*=t,n/=100):n=o.volume+event.deltaY/100*-1*.01,n<0?n=0:n>1&&(n=1),o.muted=n<=0,o.volume=n,o.dataset.volume=n;var l=Math.round(100*o.volume),r=document.querySelector(".k4urcfbm.pmk7jnqg.i09qtzwb.qttc61fc.ihh4hy1g.kdgqqoy6.jk6sbkaj.bogkn74s");null!=r&&(r.style.height=l+"%")}},n=function(e){var t=document.elementsFromPoint(e.clientX,e.clientY);for(var n of t)"VIDEO"===n.tagName&&(e.preventDefault(),o(0,n),document.documentElement.style.setProperty("--currentvolon","1"),document.documentElement.style.setProperty("--currentvolonb","block"),setTimeout(function(){document.documentElement.style.setProperty("--currentvolon","0"),document.documentElement.style.setProperty("--currentvolonb","none")},3e3))};function l(){var e;(e=document.getElementById("emotetable")).getElementsByTagName("a"),Array.prototype.forEach.call(e.children,e=>{e.addEventListener("click",t=>{!function(e){var t=document.querySelector(".oo9gr5id.lzcic4wl.jm1wdb64.l9j0dhe7.gsox5hk5.mdldhsdk.ii04i59q.notranslate").childNodes[0].childNodes[0].childNodes,o=(document.getElementById("emotetable"),document.getElementById("emoteInput").value);void 0!==t[0]?t[0].textContent+=" "+e:(document.getElementById("emoteInput").value="You have to type something in first",document.getElementById("emoteInput").style.background="linear-gradient(-45deg, #23d5ab, #ee7752, #e73c7e, #23a6d5)",document.getElementById("emoteInput").style.height="30px",document.getElementById("emoteInput").style.width="250px",document.getElementById("emoteInput").style.backgroundSize="400% 400%",document.getElementById("emoteInput").style.textAlign="center",setTimeout(function(){document.getElementById("emoteInput").value=o,document.getElementById("emoteInput").style.background="rgba(0,0,0,0.4)",document.getElementById("emoteInput").style.height="",document.getElementById("emoteInput").style.width="",document.getElementById("emoteInput").style.textAlign=""},2e3))}(e.id)})})}function r(){var e,t,o;for(e=document.getElementById("emoteInput").value.toUpperCase(),t=document.getElementById("emotetable").getElementsByTagName("a"),o=0;o<t.length;o++)t[o].getElementsByTagName("img")[0].alt.toUpperCase().indexOf(e)>-1?t[o].style.display="":t[o].style.display="none"}function c(){var t=browser.runtime.getURL("content_new.css"),o=document.head,c=document.createElement("link");c.type="text/css",c.rel="stylesheet",c.href=t,o.appendChild(c);var d,a,s,u="Dopexz Ed",m=chrome.storage.local;function i(e,t,o){m.get(e,function(n){"on"===n[e]?document.documentElement.style.setProperty(t,"none"):document.documentElement.style.setProperty(t,o)})}function y(e,t,o){m.get(e,function(n){n[e]?document.documentElement.style.setProperty(t,n[e]):document.documentElement.style.setProperty(t,o)})}function h(e,t,o,n,l,r){m.get(e,function(c){c[e]===l?document.documentElement.style.setProperty(t,n):c[e]===r&&document.documentElement.style.setProperty(t,o)})}d="changeChatWidth",a="--chatwidth",s="354px",m.get(d,function(e){e[d]?document.documentElement.style.setProperty(a,e[d]+"px"):document.documentElement.style.setProperty(a,s)});var p=document.createElement("div");p.className="lmao";var g=document.createElement("div");g.className="lmaot";var f=browser.runtime.getURL("images/kekw.png");document.documentElement.style.setProperty("--emotebg","url("+f+")"),g.id="lmaox",g.addEventListener("dblclick",function(){chrome.storage.local.get(["SET"],function(e){var t=e.SET,o=document.getElementById("emotetable"),n=document.getElementById("emoteInput");for("block"!==o.style.display?(o.style.display="block",n.style.display="block"):(o.style.display="none",n.style.display="none");o.firstChild;)o.removeChild(o.firstChild);for(var r=0;r<t.length;r++){var c=document.createElement("a");c.id=t[r].code,c.className="_5zfs",c.setAttribute("role","button"),c.setAttribute("data-title",t[r].code);var d=document.createElement("img");d.src=t[r].src,d.alt=t[r].code,c.appendChild(d),o.appendChild(c)}l()})}),p.appendChild(g);var b=document.createElement("div");function v(){document.body.appendChild(p),function(e){var t=0,o=0,n=0,l=0;function r(r){(r=r||window.event).preventDefault(),t=n-r.clientX,o=l-r.clientY,n=r.clientX,l=r.clientY;var c=document.getElementById("emotetable"),d=document.getElementById("emoteInput");e.offsetTop-o<=-90?(c.style.top=e.offsetTop-o+"px",c.style.left=e.offsetLeft-t-252+"px",d.style.top=e.offsetTop-o+197+"px",d.style.left=e.offsetLeft-t-252+"px"):(c.style.top=e.offsetTop-o-170+"px",c.style.left=e.offsetLeft-t-252+"px",d.style.top=e.offsetTop-o+27+"px",d.style.left=e.offsetLeft-t-252+"px"),e.style.top=e.offsetTop-o+"px",e.style.left=e.offsetLeft-t+"px"}function c(){document.onmouseup=null,document.onmousemove=null}e.onmousedown=function(e){(e=e||window.event).preventDefault(),n=e.clientX,l=e.clientY,document.onmouseup=c,document.onmousemove=r}}(document.getElementById("lmaox"));var e=document.createElement("input");e.type="text",e.placeholder="Filter emotes...",e.id="emoteInput",e.autocomplete="off",document.getElementById("emotetable").parentNode.appendChild(e),document.getElementById("emoteInput").addEventListener("keyup",r)}b.innerHTML='<div id="emotetable"></div>',p.appendChild(b),m.get("emoteMenuCheck",function(e){"on"===e.emoteMenuCheck&&setTimeout(v,3e3)}),new MutationObserver(function(e){e.forEach(function(e){e.addedNodes.length&&(i("chatRepliesHide","--hidereplies","block"),i("chatThreeDots","--chatthreedots","block"),i("chatCommentReacts","--chatreacts","block"),i("chatLikeReplyCheck","--likereply","list-item"),i("chatTopBarCheck","--chattopbardisplay","block"),y("chatBackground","--chatbg","#18181b"),y("chatTextSize","--textsize","13px"),y("chatTextColor","--textcolor","#FFF"),y("topbarColor","--topbarcolor","#18181b"),y("chattopbarColor","--chattopbarcolor","#18181b"),y("changefont","--fontfamily","Helvetica"),h("hideChatProfilePictures","--pfpdisplay","block","none","hide","show"),h("messageStyle","--messagestyle","left","none","2","1"),m.get("messageStyle",function(e){"1"===e.messageStyle?document.documentElement.style.setProperty("--messagestyle","left"):"2"===e.messageStyle&&document.documentElement.style.setProperty("--messagestyle","none")}),m.get("volumeScrollCheck",function(e){"on"===e.volumeScrollCheck&&document.addEventListener("wheel",n,{passive:!1})}))})}).observe(document.body,{childList:!0,subtree:!0});var E=document.getElementsByClassName("d2edcug0 hpfvmrgz qv66sw1b c1et5uql"),S=document.getElementsByClassName("l9j0dhe7 ll8tlv6m rq0escxv j83agx80 pfnyh3mw e5nlhep0 hv4rvrfc dati1w0a ecm0bbzt btwxx1t3 lzcic4wl"),w={};new MutationObserver(function(t){t.forEach(function(t){var o;t.addedNodes.length&&(m.get(["yourUsername","yourUsernameColor","othersUsernameColor"],function(t){t.yourUsername&&t.yourUsernameColor?(u=t.yourUsername,e=t.yourUsernameColor,w[u]=e):(e="blue",w[u="Dopexz Ed"]=e);for(var o=0;o<E.length;o++)if("random"!==t.othersUsernameColor&&null!==t.othersUsernameColor&&void 0!==t.othersUsernameColor)E[o].style.color=t.othersUsernameColor;else if(E[o].textContent in w)E[o].style.color=w[E[o].textContent];else{var n="hsl("+360*Math.random()+","+(50+50*Math.random())+"%,"+(40+40*Math.random())+"%)";E[o].style.color=n,w[E[o].textContent]=n}}),o=[],m.get(["highlightEnable","highlightKeywords","highlightColor","highlightOpacity"],function(e){if(void 0!==e.highlightEnable&&"off"!==e.highlightEnable){if(e.highlightKeywords&&e.highlightColor){o=e.highlightKeywords.split(",");for(var t=0;t<S.length;t++){S[t].style.backgroundColor="transparent",S[t].style.opacity="1",S[t].style.transform="none";for(var n=S[t].textContent.split(" "),l=0;l<n.length;l++)for(var r=0;r<o.length;r++)n[l].includes(o[r])&&(S[t].style.transform="scale(1.02)",S[t].style.opacity=e.highlightOpacity,S[t].style.backgroundColor=e.highlightColor)}}}else for(var c=0;c<S.length;c++)S[c].style.backgroundColor="transparent"}),m.get(["messageSeperate","chatSplittingEnable"],function(e){"off"!==e.chatSplittingEnable&&void 0!==e.chatSplittingEnable&&void 0!==e.messageSeperate?document.documentElement.style.setProperty("--messageSeparateBorder","2px solid"+e.messageSeperate):("off"===e.chatSplittingEnable||e.messageSeperate,document.documentElement.style.setProperty("--messageSeparateBorder","0"))}))})}).observe(document.body,{childList:!0,subtree:!0})}var d=[];chrome.storage.local.get(["SET"],function(e){d=e.SET});var a=["www.facebook.com"];function s(e){for(var t=e.querySelectorAll("div:not(.tw-tooltip):not(.bttv-tooltip):not(.ffz__tooltip--inner)"),o=0;o<t.length;o++)for(var n=0;n<t[o].childNodes.length;n++){var l=t[o].childNodes[n];if(3===l.nodeType){var r=l.nodeValue.split(" ");if(!(r.length<38))break;for(var c=document.createDocumentFragment(),a=0;a<r.length;a++){for(var s=!1,u=0;u<d.length;u++)if(r[a]===d[u].code){s=!0;var m=document.createElement("span");m.className="emote_wrapper";var i=document.createElement("img");i.className="inserted_emote",i.src=d[u].src,i.alt=d[u].code;var y=document.createElement("span");y.className="tooltiptext",y.textContent=d[u].code,m.appendChild(i),m.appendChild(y),c.appendChild(m);break}!1===s&&c.appendChild(document.createTextNode(r[a])),a<r.length-1&&c.appendChild(document.createTextNode(" "))}c.normalize(),t[o].replaceChild(c,l)}}}var u=new MutationObserver(function(e){e.forEach(function(e){for(var t=0;t<e.addedNodes.length;t++)e.addedNodes[t].childNodes.length&&s(e.addedNodes[t])})});function m(){for(var e=window.location.hostname,t=0;t<a.length;t++)if(e===a[t]){s(document.body),u.observe(document.body,{childList:!0,subtree:!0});break}}chrome.storage.sync.get(["ON"],function(e){1===e.ON&&(c(),m())});chrome.runtime.onMessage.addListener(function(e,t,o){"stop"===e.order?u.disconnect():"start"===e.order&&m(),"change"===e.newemotes&&chrome.storage.local.get(["SET"],function(e){d=e.SET,chrome.storage.sync.get(["ON"],function(e){if(1===e.ON)for(var t=window.location.hostname,o=0;o<a.length;o++)if(t===a[o]){s(document.body);break}})}),"add"===e.context&&void 0!==null.alt&&o({alt:null.alt,src:null.src})})}();