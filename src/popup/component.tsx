import { FC } from "react";
import { useChromeStorageLocal } from "use-chrome-storage";
import { PowerIcon, SettingsIcon } from "./Icons";

const Popup: FC = () => {
    const [value, setValue] = useChromeStorageLocal("dopeChatEnabled", false);
    return (
        <>
            <div className="flex flex-row w-screen h-screen justify-center bg-main-purple bg-header-bg bg-blend-multiply">
                <div className="mr-auto flex flex-col pl-6 justify-center">
                    <div className="flex flex-col text-lg text-white text-opacity-100 hover:scale-105 cursor-default duration-300 tracking-widest">
                        dopeChat
                    </div>
                    <span className="w-max bg-accent-purple transform px-2 py-1 rounded-xl text-xs text-main-white duration-300 opacity-1">
                        {chrome.runtime.getManifest().version}
                    </span>
                </div>
                <div className="flex flex-row ml-auto pr-6 space-x-2 justify-center items-center">
                    <button
                        onClick={() =>
                            chrome.runtime.openOptionsPage &&
                            chrome.runtime.openOptionsPage()
                        }
                    >
                        <SettingsIcon />
                    </button>

                    <PowerIcon
                        onChange={() => setValue(!value)}
                        value={value}
                    />
                </div>
            </div>
        </>
    );
};
export default Popup;
