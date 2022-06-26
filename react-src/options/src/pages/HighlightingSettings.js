import { MultiSelect, NumberInput } from '@mantine/core';
import { useChromeStorageLocal } from 'use-chrome-storage';
import ColorComp from '../comps/ColorComp';
import ToggleComp from '../comps/ToggleComp';

export default function HighlightingSettings() {
  const [highlightingOn, setHighlightingOn] = useChromeStorageLocal('highlightEnable', null);
  const [data, setData] = useChromeStorageLocal('highlightKeywords', []);
  const [highC, setHighC] = useChromeStorageLocal('highlightColor', null);
  const [opacity, setOpacity] = useChromeStorageLocal('highlightOpacity', 0);
  return (
    <div className="flex items-center flex-col w-full">
      <div className="border-0 border-darker-purple flex flex-col w-full p-6 rounded-3xl self-stretch overflow-hidden relative transition-[300ms]">
        <div className="text-white text-base font-bold tracking-wider mb-3">Enable highlighting keywords</div>
        <ToggleComp checked={highlightingOn} onChange={setHighlightingOn} />

        <div className="border-0 border-darker-purple flex flex-col w-full p-0 mt-3 self-stretch overflow-hidden relative transition-[300ms]">
          <div className="text-white text-base font-bold tracking-wider mb-3">Highlight keywords</div>

          <div className="border-2 border-darker-purple flex flex-col w-full px-4 p-3 rounded-3xl self-stretch overflow-hidden relative transition-[300ms]">
            <div className="flex flex-row justify-center items-center">
              <MultiSelect
                classNames={{
                  defaultVariant: 'text-main-white ml-3',
                  icon: 'bg-darker-purple rounded-3xl',
                  input: 'text-main-white bg-transparent border-0',
                  dropdownBody: 'rounded-2xl',
                  defaultValue: 'p-3',
                  defaultValueRemove: 'hidden',
                }}
                className="w-full"
                data={data}
                placeholder="keywords"
                defaultValue={data}
                searchable
                creatable
                getCreateLabel={(query) => `+ Add ${query}`}
                onCreate={(query) => setData((current) => [...current, query])}
              />
              <button
                onClick={() => {
                  setData([]);
                }}
                className="mr-auto px-3 py-1 w-full max-w-max border-2 rounded-2xl text-center font-bold content-center text-white text-base cursor-pointer duration-300 hover:bg-white hover:text-darker-purple "
              >
                Remove all
              </button>
            </div>
          </div>

          <div className="text-white text-base font-bold tracking-wider mb-3 mt-3">Highlight color</div>
          <ColorComp value={highC} onChange={setHighC} />

          <div className="text-white text-base font-bold tracking-wider mb-3 mt-3">Highlight opacity</div>
          <div className="border-2 border-darker-purple flex flex-col w-full px-4 p-3 rounded-3xl self-stretch overflow-hidden relative transition-[300ms]">
            <div className="flex flex-row justify-center items-center">
              <NumberInput
                classNames={{
                  defaultVariant: 'text-main-white ml-3',
                  input: 'text-main-white bg-transparent border-0',
                  rightSection: 'border-0 p-0',
                  controlUp:
                    'border-0 p-2 after:border-b-white duration-300 rounded-full hover:after:border-b-darker-purple',
                  controlDown:
                    'border-0 p-2 after:border-t-white duration-300 rounded-full  hover:after:border-t-darker-purple',
                }}
                className="w-full"
                defaultValue={opacity ? opacity : 0}
                precision={2}
                onChange={(val) => setOpacity(val)}
                min={0}
                step={0.05}
                max={1}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
