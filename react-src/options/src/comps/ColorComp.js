import { ActionIcon, ColorInput } from '@mantine/core';
import * as Fa from 'react-icons/fa';

export default function ColorComp({ value, onChange }) {
  const randomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return (
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
          value={value ? value : '#FFF'}
          radius="xl"
          onChange={onChange}
          rightSection={
            <ActionIcon
              className="text-white hover:text-darker-purple border-2 border-darker-purple p-1.5 hover:p-0 duration-300 rounded-3xl hover:bg-white"
              onClick={() => onChange(randomColor())}
            >
              <Fa.FaRandom className="" />
            </ActionIcon>
          }
        />
      </div>
    </div>
  );
}
