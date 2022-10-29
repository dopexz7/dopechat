import { FunctionComponent } from "preact";
import { useChromeStorageLocal } from "use-chrome-storage";
import ColorComp from "../comps/ColorComp";
import ToggleComp from "../comps/ToggleComp";

const OtherSettings: FunctionComponent = (): JSX.Element => {
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
        <div id="other" className="flex flex-col w-full">
            <div className="text-white text-xl font-medium tracking-wider mt-3">
                Other settings
            </div>
            <div className="flex flex-col w-full px-6 py-2 rounded-3xl self-stretch relative transition-[300ms]">
                <ColorComp
                    value={fbTopBar}
                    onChange={setfbTopBar}
                    title={"Facebook top bar color"}
                />
                {process.env.BROWSER != "firefox" ? (
                    <ToggleComp
                        checked={scrollVolume}
                        onChange={setscrollVolume}
                        title="Mousewheel scroll volume control"
                    />
                ) : (
                    ""
                )}

                <ToggleComp
                    checked={experimentalCss}
                    onChange={setExperimentalCss}
                    title="Experimental stylesheet (CSS)"
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
