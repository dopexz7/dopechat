import { FunctionComponent } from "preact";
import { useChromeStorageLocal } from "use-chrome-storage";
import ColorComp from "../comps/ColorComp";
import ToggleComp from "../comps/ToggleComp";

const ReadabilitySettings: FunctionComponent = (): JSX.Element => {
    const [chatSplitting, setChatSplitting] = useChromeStorageLocal(
        "chatSplittingEnable",
        false,
    );
    const [splitColor, setSplitColor] = useChromeStorageLocal(
        "messageSeperate",
        null,
    );
    return (
        <div id="readability" className="flex flex-col w-full">
            <div className="text-white text-xl font-medium tracking-wider mt-3">
                Readability settings
            </div>
            <div className="flex flex-col w-full px-6 py-2 rounded-3xl self-stretch relative transition-[300ms]">
                <ToggleComp
                    checked={chatSplitting}
                    onChange={setChatSplitting}
                    title="Chat splitting"
                />

                <ColorComp
                    value={splitColor}
                    onChange={setSplitColor}
                    title={"Chat splitting color"}
                />
            </div>
        </div>
    );
};
export default ReadabilitySettings;
