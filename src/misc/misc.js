const misc = () => {
  document.documentElement.style.setProperty('--usernamecolor', '#000');
  document.documentElement.style.setProperty('--fontfamily', 'Helvetica');
  document.documentElement.style.setProperty('--chatwidth', '354px');
  document.documentElement.style.setProperty('--chattopbarcolor', '#18181b');
  document.documentElement.style.setProperty('--messagestyle', 'left');
  document.documentElement.style.setProperty('--currentvolon', '0');

  window.addEventListener('keydown', (e) => {
    if (e.altKey == true && e.keyCode == 84) {
      if (
        document.querySelectorAll('[role="banner"]')[0].style.display !== 'none'
      ) {
        document.querySelectorAll('[role="banner"]')[0].style.display = 'none';
        document.querySelectorAll('.bkyfam09')[0].style.height = '100vh';
        document.querySelectorAll('.bkyfam09')[1].style.height = '100vh';
        document.querySelectorAll(
          '.tw6a2znq.f10w8fjw.d1544ag0.pybr56ya.j83agx80.bp9cbjyn'
        )[0].style.paddingBottom = '0';
        document.querySelector('.jgljxmt5').style.minHeight = '100vh';
        document.querySelector('.be9z9djy').style.top = '0';
      } else {
        document.querySelectorAll('[role="banner"]')[0].style.display = '';
        document.querySelectorAll(
          '.tw6a2znq.f10w8fjw.d1544ag0.pybr56ya.j83agx80.bp9cbjyn'
        )[0].style.paddingBottom = '';
        document.querySelectorAll('.bkyfam09')[0].style.height = '';
        document.querySelectorAll('.bkyfam09')[1].style.height = '';
        document.querySelector('.jgljxmt5').style.minHeight = '';
        document.querySelector('.be9z9djy').style.top = '';
      }
    }
  });
};

export default misc;
