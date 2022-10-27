import { FunctionComponent } from "preact";
import { useChromeStorageLocal } from "use-chrome-storage";
import ColorComp from "../comps/ColorComp";
import ToggleComp from "../comps/ToggleComp";

const HighlightingSettings: FunctionComponent = (): JSX.Element => {
    const [highlightingOn, setHighlightingOn] = useChromeStorageLocal(
        "highlightEnable",
        null,
    );
    const [data, setData] = useChromeStorageLocal("highlightKeywords", []);
    const [highC, setHighC] = useChromeStorageLocal("highlightColor", null);
    const [opacity, setOpacity] = useChromeStorageLocal("highlightOpacity", 0);

    const addKeyword = (keyword: string) => {
        //console.log(keyword);
        setData((current: any) => [...current, keyword]);
    };

    const removeKeyword = (keyword: string) => {
        console.log(keyword);
        setData((current: any) =>
            current.filter((item: string) => item !== keyword),
        );
    };
    return (
        <div id="highlighting" className="flex flex-col w-full">
            <div className="text-white text-xl font-medium tracking-wider mt-3">
                Highlighting settings
            </div>
            <div className="flex flex-col w-full px-6 py-2 rounded-3xl self-stretch relative transition-[300ms]">
                <ToggleComp
                    checked={highlightingOn}
                    onChange={setHighlightingOn}
                    title="Highlighting keywords"
                />

                <div className="flex flex-col w-full p-0 mt-3 self-stretch relative transition-[300ms]">
                    <div className="border-[1px] border-white border-opacity-5 backdrop-blur-sm shadow-2xl flex flex-col w-full px-4 py-2 rounded-3xl self-stretch relative transition-[300ms]">
                        <div className="flex flex-row space-x-3 justify-center items-center">
                            <input
                                placeholder="Input keyword...(ENTER to submit)"
                                type="text"
                                className="text-sm w-full px-6 py-1 text-main-white bg-transparent border-[1px] border-white border-opacity-5 backdrop-blur-sm shadow-2xl rounded-3xl"
                                onKeyDown={(event: any) => {
                                    if (event.key === "Enter") {
                                        addKeyword(event.target.value);
                                    }
                                }}
                            />
                            <select
                                name="highlightKeywords"
                                className="bg-transparent w-full text-main-white border-[1px] border-white border-opacity-5 backdrop-blur-sm shadow-2xl rounded-3xl px-6 py-1 text-sm"
                            >
                                {data
                                    ? data.map((d: any) => (
                                          <option
                                              value={d}
                                              className="bg-darker-purple text-white"
                                          >
                                              {d}
                                          </option>
                                      ))
                                    : ""}
                            </select>
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

                    <div className="mt-3 border-[1px] border-white border-opacity-5 backdrop-blur-sm shadow-2xl flex flex-col w-full px-4 py-2 rounded-3xl self-stretch relative transition-[300ms]">
                        <div className="flex flex-row justify-center space-x-3 items-center">
                            <div className="text-main-white text-base w-full">
                                Opacity
                            </div>
                            <div className="text-main-white text-sm">
                                {opacity ? opacity : 0}
                            </div>
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.1"
                                value={opacity ? opacity : 0}
                                onChange={(e) => {
                                    setOpacity(e.target.value);
                                }}
                                className="slider w-full bg-black bg-opacity-10 border-[1px] border-white border-opacity-5 backdrop-blur-sm shadow-2xl rounded-3xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HighlightingSettings;
