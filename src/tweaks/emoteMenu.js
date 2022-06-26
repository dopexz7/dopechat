const addEmoteMenu = () => {
  var elements = document.querySelectorAll(
    '.rq0escxv.l9j0dhe7.du4w35lb.j83agx80.pfnyh3mw.jifvfom9.bp9cbjyn.owycx6da.btwxx1t3.jb3vyjys.nkwizq5d.scwd0bx6.hop8lmos.ggphbty4'
  )[0];
  var emotebtn = document.getElementById('dopechat-emotebutton');

  if (elements && emotebtn === null) {
    var emotebutton = document.createElement('div');
    emotebutton.classList.add('emotebutton');
    emotebutton.setAttribute('title', 'Emote menu');
    emotebutton.id = 'dopechat-emotebutton';

    elements.insertBefore(emotebutton, elements.firstChild);
  }
};

const addEmoteMenuButton = () => {
  let emotebuttonDiv = document.getElementById('dopechat-emotebutton');
  if (!emotebuttonDiv) {
    var observeForPop = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        chrome.storage.local.get(['emoteMenuCheck'], (r) => {
          if (r.emoteMenuCheck === true) {
            addEmoteMenu();
          } else {
            document.getElementById('dopechat-emotebutton').style.display =
              'none';
          }
        });
      });
    });
    observeForPop.observe(document.body, { childList: true, subtree: true });
  }
};

export default addEmoteMenuButton;
