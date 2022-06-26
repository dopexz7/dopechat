import { ActionIcon, ColorInput, TextInput } from '@mantine/core';
import * as Fa from 'react-icons/fa';
import { useChromeStorageLocal } from 'use-chrome-storage';
import ToggleComp from '../comps/ToggleComp';

const randomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

export default function UsernamesSettings() {
  const [yourUsername, setYourUsername] = useChromeStorageLocal('yourUsername', '');
  const [yourUsernameColor, setYourUsernameColor] = useChromeStorageLocal('yourUsernameColor', null);
  const [randomColors, setRandomColors] = useChromeStorageLocal('setRandomUsernames', true);
  const [othersColors, setOthersColors] = useChromeStorageLocal('othersUsernameColor', '#FFFFFF');

  const ShowOtherColors = () => (
    <>
      <div className="mt-3 text-white text-base font-bold tracking-wider mb-3">Set other usernames color</div>
      <div className="border-2 border-darker-purple flex flex-col w-full px-4 p-3 rounded-3xl self-stretch overflow-hidden relative transition-[300ms]">
        <div className=" flex flex-row justify-center items-center">
          <ColorInput
            classNames={{
              defaultVariant: 'text-main-white ml-3',
              icon: 'bg-darker-purple rounded-3xl',
              input: 'text-main-white bg-transparent border-0',
              dropdownBody: 'rounded-2xl',
            }}
            className="w-full"
            placeholder="Pick color"
            value={othersColors ? othersColors : '#FFF'}
            radius="xl"
            onChange={setOthersColors}
            rightSection={
              <ActionIcon
                className="text-white hover:text-darker-purple border-2 border-darker-purple p-1.5 hover:p-0 duration-300 rounded-3xl hover:bg-white"
                onClick={() => setOthersColors(randomColor())}
              >
                <Fa.FaRandom className="" />
              </ActionIcon>
            }
          />
        </div>
      </div>
    </>
  );

  return (
    <>
      <div className="flex items-center flex-col w-full">
        <div className="border-0 border-darker-purple flex flex-col w-full p-6 rounded-3xl self-stretch overflow-hidden relative transition-[300ms]">
          <div className="text-white text-base font-bold tracking-wider mb-3">Set your username color</div>

          <div className="border-2 border-darker-purple flex flex-col w-full px-4 p-3 rounded-3xl self-stretch overflow-hidden relative transition-[300ms]">
            <div className="flex flex-row justify-center items-center">
              <TextInput
                classNames={{
                  defaultVariant: 'text-main-white ml-3',
                  input: 'text-main-white bg-transparent border-0',
                }}
                className="w-full"
                variant="default"
                value={yourUsername}
                onChange={(event) => setYourUsername(event.currentTarget.value)}
                placeholder={yourUsername ? yourUsername : 'Enter your username'}
              />
            </div>
          </div>

          <div className="mt-3 border-2 border-darker-purple flex flex-col w-full px-4 p-3 rounded-3xl self-stretch overflow-hidden relative transition-[300ms]">
            <div className=" flex flex-row justify-center items-center">
              <ColorInput
                classNames={{
                  defaultVariant: 'text-main-white ml-3',
                  icon: 'bg-darker-purple rounded-3xl',
                  input: 'text-main-white bg-transparent border-0',
                  dropdownBody: 'rounded-2xl',
                }}
                className="w-full"
                placeholder="Pick color"
                value={yourUsernameColor ? yourUsernameColor : '#FFF'}
                radius="xl"
                onChange={setYourUsernameColor}
                rightSection={
                  <ActionIcon
                    className="text-white hover:text-darker-purple border-2 border-darker-purple p-1.5 hover:p-0 duration-300 rounded-3xl hover:bg-white"
                    onClick={() => setYourUsernameColor(randomColor())}
                  >
                    <Fa.FaRandom className="" />
                  </ActionIcon>
                }
              />
            </div>
          </div>

          <div className="mt-3 text-white text-base font-bold tracking-wider mb-3">Random username colors</div>
          <ToggleComp checked={randomColors} onChange={setRandomColors} />
          {randomColors ? '' : <ShowOtherColors />}
        </div>
      </div>
    </>
  );
}
