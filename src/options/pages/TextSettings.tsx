import { FC, forwardRef, useState } from "react";
import { Select, Slider, Text } from "@mantine/core";
import { useChromeStorageLocal } from "use-chrome-storage";
import { fontData } from "./fontData";
import ColorComp from "../comps/ColorComp";

const TextSettings: FC = (): JSX.Element => {
    const [chatTextColor, setChatTextColor] = useChromeStorageLocal(
        "chatTextColor",
        null,
    );
    const [chatFont, setChatFont] = useChromeStorageLocal(
        "changefont",
        "Helvetica",
    );
    const [fontSize, setFontSize] = useChromeStorageLocal("chatTextSize", null);
    const [fontSizeValue, setFontSizeValue] = useState(13);

    const SelectItem = forwardRef(
        (
            {
                image,
                label,
                description,
                ...others
            }: { image: any; label: string; description: string },
            ref,
        ) => (
            <div ref={ref as any} {...others}>
                <Text style={{ fontFamily: label }}>{label}</Text>
            </div>
        ),
    );

    const changeFontSize: Function = (e: any): void => {
        setFontSize(e + "px");
        setFontSizeValue(e);
    };

    return (
        <div className="flex items-center flex-col w-full">
            <div className="flex flex-col w-full px-6 py-2 rounded-3xl self-stretch relative transition-[300ms]">
                <ColorComp
                    value={chatTextColor}
                    onChange={setChatTextColor}
                    title={"Chat text color"}
                />

                <div className="text-white text-base font-medium tracking-wider mb-3 mt-3">
                    Chat text font
                </div>
                <div className="border-[1px] border-white border-opacity-5 backdrop-blur-sm shadow-2xl flex flex-col w-full px-4 p-3 rounded-3xl self-stretch overflow-hidden relative transition-[300ms]">
                    <div className="flex flex-row justify-center items-center">
                        <Select
                            placeholder="Search and select a font or input your own"
                            itemComponent={SelectItem}
                            classNames={{
                                defaultVariant: "text-main-white ml-3",
                                icon: "bg-darker-purple rounded-3xl",
                                input: "text-main-white bg-transparent border-0",
                            }}
                            defaultValue={chatFont ? chatFont : "kekw"}
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
                <div className="text-white text-base font-medium tracking-wider mb-3 mt-3">
                    Chat text size
                </div>
                <div className="border-[1px] border-white border-opacity-5 backdrop-blur-sm shadow-2xl flex flex-col w-full px-4 p-3 rounded-3xl self-stretch overflow-hidden relative transition-[300ms]">
                    <div className="flex flex-row justify-center items-center h-10">
                        <Slider
                            value={fontSizeValue}
                            className="w-full"
                            // @ts-ignore
                            classNames={{
                                bar: "bg-main-purple",
                                thumb: "border-0",
                                dragging: "bg-main-purple",
                                label: "bg-transparent p-0 mt-3 text-white",
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
    );
};
export default TextSettings;
