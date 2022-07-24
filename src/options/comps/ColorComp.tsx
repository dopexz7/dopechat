import { FunctionComponent } from "preact";
import { useCallback, useRef, useState } from "preact/hooks";
import { HexColorPicker } from "react-colorful";
import useClickOutside from "../../hooks/useClickOutside";
import { BucketIcon, RandomIcon } from "./Icons";

const randomColor = () =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const ColorComp: FunctionComponent<any> = ({ value, onChange, title }) => {
    const close = useCallback(() => toggle(false), []);
    const popover = useRef();
    useClickOutside(popover, close);
    const [isOpen, toggle] = useState(false);

    return (
        <>
            <div
                style={{ zIndex: isOpen ? "9999" : "0" }}
                className="border-[1px] mt-3 border-white border-opacity-5 backdrop-blur-sm shadow-2xl flex flex-col w-full px-4 p-3 rounded-3xl self-stretch relative transition-[300ms]"
            >
                <div className="flex flex-row items-center">
                    <div className="text-main-white text-base">{title}</div>
                    <div className="flex flex-row items-center ml-auto space-x-1">
                        <div className="relative">
                            <div
                                className="text-white hover:text-darker-purple border-[1px] border-white border-opacity-5 backdrop-blur-sm shadow-2xl p-1.5 cursor-pointer duration-300 rounded-3xl hover:bg-white"
                                onClick={() => toggle(true)}
                                style={{ backgroundColor: value }}
                            >
                                <BucketIcon />
                            </div>

                            {isOpen && (
                                <div
                                    className="fixed -top-56 right-20 shadow-2xl rounded-3xl bg-black w-32 h-32 mt-3"
                                    ref={popover as any}
                                >
                                    <HexColorPicker
                                        color={value ? value : "#FFF"}
                                        onChange={onChange}
                                    />
                                    <div
                                        className="m-auto p-1 text-center text-main-white rounded-b-2xl text-xs"
                                        style={{
                                            backgroundColor: value
                                                ? value
                                                : "#FFF",
                                        }}
                                    >
                                        {value}
                                    </div>
                                </div>
                            )}
                        </div>
                        <div
                            className="text-white hover:text-darker-purple border-[1px] border-white border-opacity-5 backdrop-blur-sm shadow-2xl p-1.5 cursor-pointer duration-300 rounded-3xl hover:bg-white"
                            onClick={(): void => onChange(randomColor())}
                        >
                            <RandomIcon />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ColorComp;
