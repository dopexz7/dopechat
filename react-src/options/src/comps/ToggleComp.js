import { Switch } from '@headlessui/react';

export default function ToggleComp({ checked, onChange }) {
  return (
    <div className="border-2 border-darker-purple flex flex-col w-full px-4 p-3 rounded-3xl self-stretch overflow-hidden relative transition-[300ms]">
      <div className="flex flex-row justify-center items-center">
        <Switch
          checked={checked}
          onChange={onChange}
          className={`${checked ? 'bg-main-white' : 'bg-darker-purple'}
           mr-auto inline-flex flex-shrink-0 h-8 w-16 border-2 border-transparent rounded-full cursor-pointer duration-300 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span
            aria-hidden="true"
            className={`${checked ? 'bg-darker-purple translate-x-8' : 'bg-white translate-x-0 scale-75'}
            pointer-events-none inline-block h-7 w-7 rounded-full duration-300`}
          />
        </Switch>
      </div>
    </div>
  );
}
