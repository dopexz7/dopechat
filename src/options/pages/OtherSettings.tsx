import { FC } from "react";
import { useChromeStorageLocal } from "use-chrome-storage";
import ColorComp from "../comps/ColorComp";
import ToggleComp from "../comps/ToggleComp";

const OtherSettings: FC = (): JSX.Element => {
    const [scrollVolume, setscrollVolume] = useChromeStorageLocal(
        "volumeScrollCheck",
        null,
    );
    const [fbTopBar, setfbTopBar] = useChromeStorageLocal("topbarColor", null);
    const [experimentalCss, setExperimentalCss] = useChromeStorageLocal(
        "experimentalCSS",
        null,
    );
    const [emoteMenu, setEmoteMenu] = useChromeStorageLocal(
        "emoteMenuCheck",
        null,
    );
    const [timestamps, setTimestamps] = useChromeStorageLocal(
        "timestampCheck",
        false,
    );

    return (
        <div className="flex items-center flex-col w-full">
            <div className="flex flex-col w-full px-6 py-2 rounded-3xl self-stretch relative transition-[300ms]">
                <ColorComp
                    value={fbTopBar}
                    onChange={setfbTopBar}
                    title={"Facebook top bar color"}
                />

                <ToggleComp
                    checked={scrollVolume}
                    onChange={setscrollVolume}
                    title="Mousewheel scroll volume control"
                />

                <ToggleComp
                    checked={experimentalCss}
                    onChange={setExperimentalCss}
                    title="Experimental stylesheet (CSS)"
                />

                <ToggleComp
                    checked={emoteMenu}
                    onChange={setEmoteMenu}
                    title="Emote menu"
                />

                <ToggleComp
                    checked={timestamps}
                    onChange={setTimestamps}
                    title="Timestamps in chat"
                />
            </div>
        </div>
    );
};
export default OtherSettings;
