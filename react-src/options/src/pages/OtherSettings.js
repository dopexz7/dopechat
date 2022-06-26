import { useChromeStorageLocal } from 'use-chrome-storage';
import ColorComp from '../comps/ColorComp';
import ToggleComp from '../comps/ToggleComp';

export default function OtherSettings() {
  const [scrollVolume, setscrollVolume] = useChromeStorageLocal('volumeScrollCheck', null);
  const [fbTopBar, setfbTopBar] = useChromeStorageLocal('topbarColor', null);
  const [experimentalCss, setExperimentalCss] = useChromeStorageLocal('experimentalCSS', null);
  const [emoteMenu, setEmoteMenu] = useChromeStorageLocal('emoteMenuCheck', null);
  const [timestamps, setTimestamps] = useChromeStorageLocal('timestampCheck', false);

  return (
    <>
      <div className="flex items-center flex-col w-full">
        <div className="border-0 border-darker-purple flex flex-col w-full p-6 rounded-3xl self-stretch overflow-hidden relative transition-[300ms]">
          <div className="text-white text-base font-bold tracking-wider mb-3">
            Enable mousewheel scroll volume control
          </div>
          <ToggleComp checked={scrollVolume} onChange={setscrollVolume} />

          <div className="text-white text-base font-bold tracking-wider mb-3 mt-3">Facebook top bar color</div>
          <ColorComp value={fbTopBar} onChange={setfbTopBar} />

          <div className="text-white text-base font-bold tracking-wider mb-3 mt-3">
            Enable experimental stylesheet (CSS)
          </div>
          <ToggleComp checked={experimentalCss} onChange={setExperimentalCss} />

          <div className="text-white text-base font-bold tracking-wider mb-3 mt-3">Enable emote menu</div>
          <ToggleComp checked={emoteMenu} onChange={setEmoteMenu} />

          <div className="text-white text-base font-bold tracking-wider mb-3 mt-3">Enable timestamps in chat</div>
          <ToggleComp checked={timestamps} onChange={setTimestamps} />
        </div>
      </div>
    </>
  );
}
