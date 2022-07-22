import { ActionIcon } from "@mantine/core";
import { FC, useCallback, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";
import useClickOutside from "../../hooks/useClickOutside";
import { RandomIcon } from "./Icons";

const randomColor = () =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const ColorComp: FC<any> = ({ value, onChange, title }) => {
    const close = useCallback(() => toggle(false), []);
    const popover = useRef();
    useClickOutside(popover, close);
    const [isOpen, toggle] = useState(false);

    return (
        <>
            <div className="text-white text-base font-medium tracking-wider mt-3">
                {title}
            </div>
            <div
                style={{ zIndex: isOpen ? "9999" : "0" }}
                className="border-[1px] my-3 border-white border-opacity-5 backdrop-blur-sm shadow-2xl flex flex-col w-full px-4 p-3 rounded-3xl self-stretch relative transition-[300ms]"
            >
                <div className="flex flex-row items-center">
                    <div className="relative">
                        <div
                            className="w-9 h-9 rounded-3xl border-8 border-darker-purple border-opacity-50 cursor-pointer"
                            style={{ backgroundColor: value }}
                            onClick={() => toggle(true)}
                        />

                        {isOpen && (
                            <div
                                className="fixed top-0 shadow-2xl rounded-3xl bg-black w-32 h-32 mt-3"
                                ref={popover as any}
                            >
                                <HexColorPicker
                                    color={value ? value : "#FFF"}
                                    onChange={onChange}
                                />
                                <div
                                    className="m-auto p-1 text-center text-main-white rounded-b-2xl text-xs"
                                    style={{
                                        backgroundColor: value ? value : "#FFF",
                                    }}
                                >
                                    {value}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="ml-3 text-main-white text-xs">
                        {value ? value : "Default(not set)"}
                    </div>
                    <ActionIcon
                        className="text-white ml-auto hover:text-darker-purple border-[1px] border-white border-opacity-5 backdrop-blur-sm shadow-2xl p-1.5 hover:p-0 duration-300 rounded-3xl hover:bg-white"
                        onClick={(): void => onChange(randomColor())}
                    >
                        <RandomIcon />
                    </ActionIcon>
                </div>
            </div>
        </>
    );
};

export default ColorComp;
