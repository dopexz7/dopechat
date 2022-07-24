import { FunctionComponent } from "preact";
import { useChromeStorageLocal } from "use-chrome-storage";
import { fontData } from "./fontData";
import ColorComp from "../comps/ColorComp";

const TextSettings: FunctionComponent = (): JSX.Element => {
    const [chatTextColor, setChatTextColor] = useChromeStorageLocal(
        "chatTextColor",
        null,
    );
    const [chatFont, setChatFont] = useChromeStorageLocal(
        "changefont",
        "Helvetica",
    );
    const [fontSize, setFontSize] = useChromeStorageLocal("chatTextSize", null);
    return (
        <div id="text" className="flex flex-col w-full">
            <div className="text-white text-xl font-medium tracking-wider mt-3">
                Text settings
            </div>
            <div className="flex flex-col w-full px-6 py-2 rounded-3xl self-stretch relative transition-[300ms]">
                <ColorComp
                    value={chatTextColor}
                    onChange={setChatTextColor}
                    title={"Chat text color"}
                />

                <div className="mt-3 border-[1px] border-white border-opacity-5 backdrop-blur-sm shadow-2xl flex flex-col w-full px-4 py-3 rounded-3xl self-stretch overflow-hidden relative transition-[300ms]">
                    <div className="flex flex-row justify-center items-center h-7">
                        <div className="text-main-white text-base w-full">
                            Text font
                        </div>
                        <div className="flex flex-row items-center w-full">
                            <div className="text-main-white text-base text-center w-48">
                                Input font
                            </div>
                            <input
                                placeholder="Input font..."
                                type="text"
                                style={{
                                    fontFamily: chatFont ? chatFont : "",
                                }}
                                className="text-sm w-full px-6 py-1 text-main-white ml-3 bg-transparent border-[1px] border-white border-opacity-5 backdrop-blur-sm shadow-2xl rounded-3xl"
                                onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>,
                                ) => setChatFont(event.currentTarget.value)}
                                value={chatFont ? chatFont : ""}
                            />
                        </div>
                        <div className="text-main-white text-base ml-2">or</div>
                        <div className="flex flex-row items-center w-full">
                            <div className="text-main-white text-base text-center w-48">
                                Select font
                            </div>
                            <select
                                name="font"
                                value={chatFont ? chatFont : ""}
                                style={{
                                    fontFamily: chatFont ? chatFont : "",
                                }}
                                onChange={(event: any) =>
                                    setChatFont(event.currentTarget.value)
                                }
                                className="bg-transparent w-full text-main-white border-[1px] border-white border-opacity-5 backdrop-blur-sm shadow-2xl rounded-3xl px-6 py-1 text-sm"
                            >
                                {fontData.map((font: any) => (
                                    <option
                                        style={{
                                            fontFamily: font,
                                        }}
                                        value={font}
                                        className="bg-darker-purple text-white"
                                    >
                                        {font}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
                <div className="mt-3 border-[1px] border-white border-opacity-5 backdrop-blur-sm shadow-2xl flex flex-col w-full px-4 py-3 rounded-3xl self-stretch overflow-hidden relative transition-[300ms]">
                    <div className="flex flex-row justify-center space-x-3 items-center h-7">
                        <div className="text-main-white text-base w-full">
                            Chat text size
                        </div>
                        <div className="text-main-white text-sm">
                            {fontSize ? fontSize : 13}
                        </div>
                        <input
                            type="range"
                            min="1"
                            max="23"
                            step="1"
                            value={fontSize ? fontSize.replace("px", "") : 350}
                            onChange={(e) => {
                                setFontSize(e.target.value + "px");
                            }}
                            className="slider w-full bg-black bg-opacity-10 border-[1px] border-white border-opacity-5 backdrop-blur-sm shadow-2xl rounded-3xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default TextSettings;
