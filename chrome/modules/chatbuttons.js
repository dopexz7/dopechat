export function addTheatherMode() {

    var elements = document.querySelectorAll('.rq0escxv.l9j0dhe7.du4w35lb.j83agx80.pfnyh3mw.jifvfom9.bp9cbjyn.owycx6da.btwxx1t3.jb3vyjys.nkwizq5d.scwd0bx6.hop8lmos.ggphbty4')[0];        
    var thtbtn = document.getElementById('thtbtn');

    if (elements && thtbtn === null) {
        var theatherButton = document.createElement("div");
        theatherButton.classList.add('theatrebutton');
        theatherButton.setAttribute('title', 'Theather mode(alt+z)');
        theatherButton.id = 'thtbtn';
        theatherButton.addEventListener('click', (function() {
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

export function addPopoutChat() {

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


export function observeFunc(){
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
}
