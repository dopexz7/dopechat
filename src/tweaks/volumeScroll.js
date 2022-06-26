const settings = {
  volume: 20,
  volumeIncrement: 3,
};
const handleScroll = (element, video) => {
  if (!Boolean(video.webkitAudioDecodedByteCount))
    //video has audio. If not stops volume scrolling
    return;

  var volume = 1;

  if (
    video.volume > settings.volumeIncrement / 100 || // eslint-disable-next-line no-restricted-globals
    (video.volume === settings.volumeIncrement / 100 && event.deltaY < 0)
  ) {
    volume =
      video.volume + // eslint-disable-next-line no-restricted-globals
      (settings.volumeIncrement / 100) * ((event.deltaY / 100) * -1); //deltaY is how much the wheel scrolled, 100 up, -100 down. Divided by 100 to only get direction, then inverted

    //Rounding the volume to the nearest increment, in case the original volume was not on the increment.
    volume = volume * 100;
    volume = volume / settings.volumeIncrement;
    volume = Math.round(volume);
    volume = volume * settings.volumeIncrement;
    volume = volume / 100;
  } else {
    // eslint-disable-next-line no-restricted-globals
    volume = video.volume + (1 / 100) * ((event.deltaY / 100) * -1);
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
  var volSlider = document.querySelector(
    '.k4urcfbm.pmk7jnqg.i09qtzwb.qttc61fc.ihh4hy1g.kdgqqoy6.jk6sbkaj.bogkn74s'
  );
  if (volSlider !== null && volSlider !== undefined) {
    volSlider.style.height = currentvol + '%';
  }
};

const onScroll = (event) => {
  var elements = document.elementsFromPoint(event.clientX, event.clientY);
  for (var element of elements) {
    if (element.tagName === 'VIDEO') {
      event.preventDefault();
      handleScroll(element, element);
      document.documentElement.style.setProperty('--currentvolon', '1');
      document.documentElement.style.setProperty('--currentvolonb', 'block');
      setTimeout(() => {
        document.documentElement.style.setProperty('--currentvolon', '0');
        document.documentElement.style.setProperty('--currentvolonb', 'none');
      }, 3000);
    }
  }
};

const volumeScrollEnable = () => {
  chrome.storage.local.get('volumeScrollCheck', (r) => {
    if (r.volumeScrollCheck === true) {
      document.addEventListener('wheel', onScroll, { passive: false });
    } else {
      document.removeEventListener('wheel', onScroll, {
        passive: false,
      });
    }
  });
};

export default volumeScrollEnable;
