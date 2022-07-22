import { MultiSelect, NumberInput } from "@mantine/core";
import { FC } from "react";
import { useChromeStorageLocal } from "use-chrome-storage";
import ColorComp from "../comps/ColorComp";
import ToggleComp from "../comps/ToggleComp";

const HighlightingSettings: FC = () => {
    const [highlightingOn, setHighlightingOn] = useChromeStorageLocal(
        "highlightEnable",
        null,
    );
    const [data, setData] = useChromeStorageLocal("highlightKeywords", []);
    const [highC, setHighC] = useChromeStorageLocal("highlightColor", null);
    const [opacity, setOpacity] = useChromeStorageLocal("highlightOpacity", 0);
    return (
        <div className="flex items-center flex-col w-full">
            <div className="flex flex-col w-full px-6 py-2 rounded-3xl self-stretch relative transition-[300ms]">
                <ToggleComp
                    checked={highlightingOn}
                    onChange={setHighlightingOn}
                    title="Highlighting keywords"
                />

                <div className="flex flex-col w-full p-0 mt-3 self-stretch relative transition-[300ms]">
                    <div className="text-white text-base font-medium tracking-wider mb-3">
                        Highlight keywords
                    </div>

                    <div className="border-[1px] border-white border-opacity-5 backdrop-blur-sm shadow-2xl flex flex-col w-full px-4 p-3 rounded-3xl self-stretch relative transition-[300ms]">
                        <div className="flex flex-row justify-center items-center">
                            <MultiSelect
                                // @ts-ignore
                                classNames={{
                                    defaultVariant: "text-main-white ml-3",
                                    icon: "bg-darker-purple rounded-3xl",
                                    input: "text-main-white bg-transparent border-0",
                                    defaultValue: "p-3",
                                    defaultValueRemove: "hidden",
                                }}
                                className="w-full"
                                data={data}
                                placeholder="keywords"
                                defaultValue={data}
                                searchable
                                creatable
                                getCreateLabel={(query) => `+ Add ${query}`}
                                onCreate={(query) =>
                                    setData((current: any) => [
                                        ...current,
                                        query,
                                    ])
                                }
                            />
                            <button
                                onClick={() => {
                                    setData([]);
                                }}
                                className="mr-auto px-3 py-1 w-full max-w-max border-[1px] border-white border-opacity-5 backdrop-blur-sm shadow-2xl rounded-2xl text-center font-medium content-center text-white text-base cursor-pointer duration-300 hover:bg-white hover:text-darker-purple "
                            >
                                Remove all
                            </button>
                        </div>
                    </div>

                    <ColorComp
                        value={highC}
                        onChange={setHighC}
                        title={"Highlight color"}
                    />

                    <div className="text-white text-base font-medium tracking-wider mb-3 mt-3">
                        Highlight opacity
                    </div>
                    <div className="border-[1px] border-white border-opacity-5 backdrop-blur-sm shadow-2xl flex flex-col w-full px-4 p-3 rounded-3xl self-stretch relative transition-[300ms]">
                        <div className="flex flex-row justify-center items-center">
                            <NumberInput
                                // @ts-ignore
                                classNames={{
                                    defaultVariant: "text-main-white ml-3",
                                    input: "text-main-white bg-transparent border-0",
                                    rightSection: "border-0 p-0",
                                    controlUp:
                                        "border-0 p-2 after:border-b-white duration-300 rounded-full hover:after:border-b-darker-purple",
                                    controlDown:
                                        "border-0 p-2 after:border-t-white duration-300 rounded-full  hover:after:border-t-darker-purple",
                                }}
                                className="w-full"
                                defaultValue={opacity ? opacity : 0}
                                precision={2}
                                onChange={(val: any) => setOpacity(val)}
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
};
export default HighlightingSettings;
