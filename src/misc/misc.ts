const misc: Function = (): void => {
  document.documentElement.style.setProperty('--usernamecolor', '#000');
  document.documentElement.style.setProperty('--fontfamily', 'Helvetica');
  document.documentElement.style.setProperty('--chatwidth', '354px');
  document.documentElement.style.setProperty('--chattopbarcolor', '#18181b');
  document.documentElement.style.setProperty('--messagestyle', 'left');
  document.documentElement.style.setProperty('--currentvolon', '0');

  window.addEventListener('keydown', (e: KeyboardEvent): void => {
    if (e.altKey == true && e.key === '84') {
      if (
        document.querySelectorAll<HTMLElement>('[role="banner"]')[0].style.display !== 'none'
      ) {
        document.querySelectorAll<HTMLElement>(
          '[role="banner"]'
        )[0].style.display = 'none';
        document.querySelectorAll<HTMLElement>('.bkyfam09')[0].style.height =
          '100vh';
        document.querySelectorAll<HTMLElement>('.bkyfam09')[1].style.height =
          '100vh';
        document.querySelectorAll<HTMLElement>(
          '.tw6a2znq.f10w8fjw.d1544ag0.pybr56ya.j83agx80.bp9cbjyn'
        )[0].style.paddingBottom = '0';
        document.querySelector<HTMLElement | any>('.jgljxmt5').style.minHeight =
          '100vh';
        document.querySelector<HTMLElement | any>('.be9z9djy').style.top = '0';
      } else {
        document.querySelectorAll<HTMLElement>('[role="banner"]')[0].style.display = '';
        document.querySelectorAll<HTMLElement>(
          '.tw6a2znq.f10w8fjw.d1544ag0.pybr56ya.j83agx80.bp9cbjyn'
        )[0].style.paddingBottom = '';
        document.querySelectorAll<HTMLElement>('.bkyfam09')[0].style.height = '';
        document.querySelectorAll<HTMLElement>('.bkyfam09')[1].style.height = '';
        document.querySelector<HTMLElement | any>('.jgljxmt5').style.minHeight = '';
        document.querySelector<HTMLElement | any>('.be9z9djy').style.top = '';
      }
    }
  });
};

export default misc;
