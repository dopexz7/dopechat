import { forwardRef, useState } from 'react';
import { Select, Slider, Text } from '@mantine/core';
import { useChromeStorageLocal } from 'use-chrome-storage';
import { fontData } from './fontData';
import ColorComp from '../comps/ColorComp';

export default function TextSettings() {
  const [chatTextColor, setChatTextColor] = useChromeStorageLocal('chatTextColor', null);
  const [chatFont, setChatFont] = useChromeStorageLocal('changefont', 'Helvetica');
  const [fontSize, setFontSize] = useChromeStorageLocal('chatTextSize', null);
  const [fontSizeValue, setFontSizeValue] = useState(13);

  const SelectItem = forwardRef(({ image, label, description, ...others }, ref) => (
    <div ref={ref} {...others}>
      <Text style={{ fontFamily: label }}>{label}</Text>
    </div>
  ));

  const changeFontSize = (e) => {
    setFontSize(e + 'px');
    setFontSizeValue(e);
  };

  return (
    <>
      <div className="flex items-center flex-col w-full">
        <div className="border-0 border-darker-purple flex flex-col w-full p-6 rounded-3xl self-stretch overflow-hidden relative transition-[300ms]">
          <div className="text-white text-base font-bold tracking-wider mb-3">Chat text color</div>
          <ColorComp value={chatTextColor} onChange={setChatTextColor} />

          <div className="text-white text-base font-bold tracking-wider mb-3 mt-3">Chat text font</div>
          <div className="border-2 border-darker-purple flex flex-col w-full px-4 p-3 rounded-3xl self-stretch overflow-hidden relative transition-[300ms]">
            <div className="flex flex-row justify-center items-center">
              <Select
                placeholder="Search and select a font or input your own"
                itemComponent={SelectItem}
                classNames={{
                  defaultVariant: 'text-main-white ml-3',
                  icon: 'bg-darker-purple rounded-3xl',
                  input: 'text-main-white bg-transparent border-0',
                  dropdownBody: 'rounded-2xl',
                }}
                defaultValue={chatFont ? chatFont : 'kekw'}
                className="w-full"
                data={fontData}
                nothingFound="Nothing found"
                searchable
                creatable
                onChange={setChatFont}
                getCreateLabel={(query) => `Set chat font ${query}`}
                onCreate={(query) => setChatFont(query)}
                maxDropdownHeight={400}
              />
            </div>
          </div>
          <div className="text-white text-base font-bold tracking-wider mb-3 mt-3">Chat text size</div>
          <div className="border-2 border-darker-purple flex flex-col w-full px-4 p-3 rounded-3xl self-stretch overflow-hidden relative transition-[300ms]">
            <div className="flex flex-row justify-center items-center h-10">
              <Slider
                value={fontSizeValue}
                className="w-full"
                classNames={{
                  bar: 'bg-main-purple',
                  thumb: 'border-0',
                  dragging: 'bg-main-purple',
                  label: 'bg-transparent p-0 mt-3 text-white',
                }}
                styles={{
                  label: { fontSize: fontSizeValue },
                }}
                onChange={(e) => {
                  changeFontSize(e);
                }}
                defaultValue={fontSize ? fontSize : 13}
                min={1}
                max={23}
                labelTransition="skew-down"
                labelTransitionDuration={150}
                labelTransitionTimingFunction="ease"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
