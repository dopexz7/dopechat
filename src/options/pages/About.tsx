import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";
import { ChatLookIcon, CustomEmotesIcon, QoLIcon } from "../comps/Icons";

const About: FunctionComponent = (): JSX.Element => {
    const [exportLoad, setExportLoad] = useState<string>("");
    const [importLoad, setImportLoad] = useState<string>("");
    const [resetLoad, setResetLoad] = useState<string>("");

    const exportSettings: Function = () => {
        setExportLoad("Exporting settings...");
        var savelink: any = null;

        chrome.storage.local.get(null, (items: any): void => {
            var allKeys: any = Object.keys(items);
            var val: any = Object.values(items);
            var result: any = {};
            allKeys.forEach((key: any, i: any) => {
                if (key !== "FULLSET" && key !== "userNameColors") {
                    result[key] = val[i];
                }
            });
            if (savelink) {
                URL.revokeObjectURL(savelink);
            }
            var blob: Blob = new Blob([JSON.stringify(result)], {
                type: "text/plain;charset=utf-8",
            });
            savelink = URL.createObjectURL(blob);
            var a: HTMLAnchorElement = document.createElement("a");
            a.setAttribute("href", savelink);
            a.setAttribute(
                "download",
                "dopeChat-v" +
                    chrome.runtime.getManifest().version +
                    ".settings",
            );
            document.body.appendChild(a);
            a.click();
            a.remove();
        });
        setExportLoad("Exported settings.");
        setTimeout(() => {
            setExportLoad("");
        }, 1000);
    };

    const resetSettings: Function = (): void => {
        setResetLoad("Reseting settings...");
        chrome.storage.local.clear();
        setResetLoad("Settings reset.");
        setTimeout(() => {
            setResetLoad("");
        }, 1000);
    };

    const importSettings: Function = (ex: any): void => {
        var reader: any = new FileReader();
        reader.onload = () => {
            try {
                var loaded: any = JSON.parse(reader.result);
                if (loaded && typeof loaded === "object") {
                    chrome.storage.local.set({ SET: loaded }, function () {
                        importFile(loaded);
                    });
                }
            } catch (e) {
                console.log(e);
            }
        };
        reader.readAsText(ex.target.files[0]);
    };

    const importFile: Function = (x: any): void => {
        var obj: any = {};
        var storage = chrome.storage.local;
        for (const [key, value] of Object.entries(x)) {
            obj[key] = value;
            storage.set(obj);
        }
        setImportLoad("Imported settings.");
        setTimeout(() => {
            setImportLoad("");
        }, 1000);
    };

    return (
        <>
            <div id="about" className="flex flex-col w-full">
                <div className="text-white text-xl font-medium tracking-wider mt-3">
                    About
                </div>
                <div className="mt-3 flex flex-col w-full px-6 py-2 rounded-3xl self-stretch relative transition-[300ms]">
                    <div className="border-[1px] border-white border-opacity-5 backdrop-blur-sm shadow-2xl flex flex-col w-full px-4 p-3 rounded-3xl self-stretch relative transition-[300ms]">
                        <div className="ml-3 flex flex-row justify-center items-center text-main-white text-base">
                            Submit suggestions or report bugs
                            <a
                                href="https://dopechat.ddns.net/"
                                className="ml-auto border-[1px] border-white border-opacity-5 backdrop-blur-sm shadow-2xl px-4 py-1 rounded-2xl text-center font-medium content-center text-white text-base cursor-pointer duration-300 hover:bg-white hover:text-darker-purple "
                            >
                                here
                            </a>
                        </div>
                    </div>

                    <div className="border-[1px] border-white border-opacity-5 backdrop-blur-sm shadow-2xl flex flex-col w-full px-4 p-3 rounded-3xl self-stretch relative transition-[300ms] mt-3">
                        <div className="ml-3 flex flex-row justify-center items-center text-main-white text-base">
                            Extension version
                            <div className="ml-auto px-4 py-1.5 text-center font-medium content-center text-white text-base">
                                {chrome.runtime.getManifest().version}
                            </div>
                        </div>
                    </div>

                    <div className="border-[1px] border-white border-opacity-5 backdrop-blur-sm shadow-2xl flex flex-col w-full px-4 p-3 rounded-3xl self-stretch relative transition-[300ms] mt-3">
                        <div className="ml-3 py-3 mr-3 flex flex-row justify-center items-center text-main-white text-base">
                            <div
                                onClick={(): void => {
                                    exportSettings();
                                }}
                                className={` ${
                                    exportLoad
                                        ? "bg-white text-darker-purple"
                                        : "text-white"
                                } w-full ml-3 border-[1px] border-white border-opacity-5 backdrop-blur-sm shadow-2xl px-4 py-3 rounded-3xl text-center font-medium content-center  text-base cursor-pointer duration-300 hover:bg-white hover:text-darker-purple`}
                            >
                                {exportLoad ? exportLoad : "Export settings"}
                            </div>
                            <label
                                htmlFor="importsettings"
                                onClick={(): void =>
                                    setImportLoad("Importing settings...")
                                }
                                className={` ${
                                    importLoad
                                        ? "bg-white text-darker-purple"
                                        : "text-white"
                                } flex flex-row items-center justify-center w-full ml-3 border-[1px] border-white border-opacity-5 backdrop-blur-sm shadow-2xl px-4 py-3 rounded-3xl text-center font-medium content-center  text-base cursor-pointer duration-300 hover:bg-white hover:text-darker-purple`}
                            >
                                {importLoad ? importLoad : "Import settings"}
                            </label>
                            <input
                                onChange={(e: any): void => importSettings(e)}
                                type="file"
                                id="importsettings"
                                accept=".settings"
                                style={{ display: "none" }}
                            />
                            <div
                                onClick={(): void => resetSettings()}
                                className={` ${
                                    resetLoad
                                        ? "bg-white text-darker-purple"
                                        : "text-white"
                                } w-full ml-3 border-[1px] border-white border-opacity-5 backdrop-blur-sm shadow-2xl px-4 py-3 rounded-3xl text-center font-medium content-center text-base cursor-pointer duration-300 hover:bg-white hover:text-darker-purple`}
                            >
                                {resetLoad ? resetLoad : "Reset settings"}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-6 py-2 w-full flex flex-col text-main-white space-y-1">
                    <div className="text-base font-light">
                        <span className="text-main-purple">dopeChat</span> aims
                        to provide the best possible Facebook Gaming livestream
                        viewing experience. It features tons of new features,
                        customizations (and customizations to those
                        customizations...), quality of life improvements with
                        some other tweaks. It is not opinionated, provides
                        settings for every possible new feature, from how a live
                        stream&apos;s chat looks, to how it behaves.
                    </div>
                    <div className="text-white text-xl mt-3">FEATURES</div>
                    <div className="flex flex-row text-main-white w-full mt-3">
                        <div className="w-full flex flex-row space-x-3">
                            <div className="text-sm font-normal">
                                -Custom emotes
                            </div>
                            <div className="text-sm font-normal">
                                -Customizable chat appearance
                            </div>
                            <div className="text-sm font-normal">
                                -Popout chat
                            </div>
                            <div className="text-sm font-normal">
                                -Theatre mode
                            </div>
                            <div className="text-sm font-normal">
                                -Mouse wheel scroll volume adjusting
                            </div>
                            <div className="text-sm font-normal">
                                -Chat splitting
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row text-white space-x-16 mt-3 border-[1px] border-white border-opacity-5 backdrop-blur-sm shadow-2xl bg-black bg-opacity-10 mx-6 p-10 rounded-3xl">
                    <div className="flex flex-col m-auto items-center ">
                        <ChatLookIcon />
                        <div className="mt-14 text-lg text-white font-medium w-full text-center">
                            Chat look
                        </div>
                        <div className="mt-6 text-sm tracking-wider font-light w-full p-3 text-left">
                            Freedom to customize the chat however you want:
                            change colors, font, text size, hide elements and
                            more! All within the easy-to-use settings.
                        </div>
                    </div>
                    <div className="flex flex-col m-auto items-center ">
                        <CustomEmotesIcon />
                        <div className="mt-14 text-lg text-white font-medium w-full text-center">
                            Custom emotes
                        </div>
                        <div className="mt-6 text-sm tracking-wider font-light w-full p-3 text-left">
                            Streamers have the ability to create their own
                            custom emote sets for their followers. Extension
                            also features a global emote set which is updated
                            regularly.
                        </div>
                    </div>
                    <div className="flex flex-col m-auto items-center ">
                        <QoLIcon />
                        <div className="mt-14 text-lg text-white font-medium w-full text-center">
                            Quality of life
                        </div>
                        <div className="mt-6 text-sm tracking-wider font-light w-full p-3 text-left">
                            The extension features other quality of life
                            (toggleable) tweaks, including mouse wheel scroll
                            volume control, chat splitting and more!
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
