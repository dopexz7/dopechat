const getRandomColor = () =>
  'hsl(' +
  360 * Math.random() +
  ',' +
  (50 + 50 * Math.random()) +
  '%,' +
  (40 + 40 * Math.random()) +
  '%)';

const colorUsernames = () => {
  let usernameElement = document.getElementsByClassName(
    'd2edcug0 hpfvmrgz qv66sw1b c1et5uql lr9zc1uh a8c37x1j fe6kdd0r mau55g9w c8b282yb keod5gw0 nxhoafnm aigsh9s9 d9wwppkn mdeji52x e9vueds3 j5wam9gi lrazzd5p oo9gr5id'
  );
  chrome.storage.local.get(
    [
      'yourUsername',
      'yourUsernameColor',
      'othersUsernameColor',
      'setRandomUsernames',
      'userNameColors',
    ],
    (r) => {
      let yourusobj = r.userNameColors ? r.userNameColors : {};
      if (r.yourUsername && r.yourUsernameColor) {
        let yourUsername = r.yourUsername;
        let yourUsernameColor = r.yourUsernameColor;
        yourusobj[yourUsername] = yourUsernameColor;
        chrome.storage.local.set({ userNameColors: yourusobj });
      }
      for (var i = 0; i < usernameElement.length; i++) {
        if (r.setRandomUsernames === null || r.setRandomUsernames === true) {
          if (usernameElement[i].textContent in yourusobj) {
            usernameElement[i].style.color =
              yourusobj[usernameElement[i].textContent];
          } else {
            yourusobj[usernameElement[i].textContent] = getRandomColor();
            chrome.storage.local.set({ userNameColors: yourusobj });
            usernameElement[i].style.color =
              yourusobj[usernameElement[i].textContent];
          }
        } else if (r.othersUsernameColor) {
          usernameElement[i].style.color = r.othersUsernameColor;
        } else {
          usernameElement[i].style.color = '#FFF';
        }
      }
    }
  );
};
export default colorUsernames;
