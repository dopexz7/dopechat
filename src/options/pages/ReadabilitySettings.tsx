import { FC } from "react";
import { useChromeStorageLocal } from "use-chrome-storage";
import ColorComp from "../comps/ColorComp";
import ToggleComp from "../comps/ToggleComp";

const ReadabilitySettings: FC = () => {
    const [chatSplitting, setChatSplitting] = useChromeStorageLocal(
        "chatSplittingEnable",
        false,
    );
    const [splitColor, setSplitColor] = useChromeStorageLocal(
        "messageSeperate",
        null,
    );
    return (
        <div className="flex items-center flex-col w-full">
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
