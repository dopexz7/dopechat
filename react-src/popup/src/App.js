/* global chrome */

import { useChromeStorageLocal } from 'use-chrome-storage';
import { Switch } from '@headlessui/react';
import * as Io from 'react-icons/io5';

export default function App() {
  const [value, setValue] = useChromeStorageLocal('dopeChatEnabled', false);
  const onSettings = () => {
    chrome.runtime.openOptionsPage && chrome.runtime.openOptionsPage();
  };

  return (
    <>
      <div className="flex flex-row w-screen h-screen justify-center bg-main-purple bg-header-bg bg-blend-multiply">
        <div className="mr-auto flex flex-col pl-6 justify-center">
          <div className="flex flex-col text-lg text-white text-opacity-100 hover:scale-105 cursor-default duration-300 tracking-widest">
            dopeChat{' '}
          </div>
          <span className="w-max bg-accent-purple transform px-2 py-1 rounded-xl text-xs text-main-white duration-300 opacity-1">
            {chrome.runtime.getManifest().version}
          </span>
        </div>
        <div className="flex flex-row ml-auto pr-6 justify-center items-center">
          <button
            onClick={() => {
              onSettings();
            }}
          >
            <Io.IoSettings className="w-8 h-8 bg-white text-accent-purple p-2 hover:p-1 rounded-full hover:text-white hover:bg-accent-purple duration-300" />
          </button>

          <Switch
            checked={value}
            onChange={setValue}
            className={`${value ? 'bg-white' : 'bg-accent-purple'}
           inline-flex flex-shrink-0 ml-3 h-8 w-16 border-2 border-transparent rounded-full cursor-pointer duration-300 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span
              aria-hidden="true"
              className={`${value ? 'bg-accent-purple translate-x-8' : 'bg-white translate-x-0 scale-75'}
            pointer-events-none inline-block h-7 w-7 rounded-full duration-300`}
            />
          </Switch>
        </div>
      </div>
    </>
  );
}
