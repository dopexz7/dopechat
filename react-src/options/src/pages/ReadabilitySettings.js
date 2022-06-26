import { useChromeStorageLocal } from 'use-chrome-storage';
import ColorComp from '../comps/ColorComp';
import ToggleComp from '../comps/ToggleComp';

export default function ReadabilitySettings() {
  const [chatSplitting, setChatSplitting] = useChromeStorageLocal('chatSplittingEnable', false);
  const [splitColor, setSplitColor] = useChromeStorageLocal('messageSeperate', null);
  return (
    <>
      <div className="flex items-center flex-col w-full">
        <div className="border-0 border-darker-purple flex flex-col w-full p-6 rounded-3xl self-stretch overflow-hidden relative transition-[300ms]">
          <div className="text-white text-base font-bold tracking-wider mb-3">Enable chat splitting</div>
          <ToggleComp checked={chatSplitting} onChange={setChatSplitting} />

          <div className="text-white text-base font-bold tracking-wider mb-3 mt-3">Chat splitting color</div>
          <ColorComp value={splitColor} onChange={setSplitColor} />
        </div>
      </div>
    </>
  );
}
