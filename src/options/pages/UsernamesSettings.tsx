import { FunctionComponent } from "preact";
import { useChromeStorageLocal } from "use-chrome-storage";
import ColorComp from "../comps/ColorComp";
import ToggleComp from "../comps/ToggleComp";

const UsernamesSettings: FunctionComponent = () => {
    const [yourUsername, setYourUsername]: any = useChromeStorageLocal(
        "yourUsername",
        "",
    );
    const [yourUsernameColor, setYourUsernameColor]: any =
        useChromeStorageLocal("yourUsernameColor", null);
    const [randomColors, setRandomColors]: any = useChromeStorageLocal(
        "setRandomUsernames",
        true,
    );
    const [othersColors, setOthersColors]: any = useChromeStorageLocal(
        "othersUsernameColor",
        "#FFFFFF",
    );

    return (
        <div id="usernames" className="flex flex-col w-full">
            <div className="text-white text-xl font-medium tracking-wider mt-3">
                Usernames settings
            </div>
            <div className="flex flex-col w-full px-6 py-2 rounded-3xl self-stretch relative transition-[300ms]">
                <div className="mt-3 border-[1px] border-white border-opacity-5 backdrop-blur-sm shadow-2xl flex flex-row justify-center items-center w-full px-3 p-2 rounded-3xl self-stretch relative transition-[300ms]">
                    <div className="px-1 text-main-white text-base w-full">
                        Your username
                    </div>
                    <input
                        placeholder="Enter your username..."
                        type="text"
                        className="text-sm px-6 py-2 text-main-white ml-3 bg-transparent border-[1px] border-white border-opacity-5 backdrop-blur-sm shadow-2xl rounded-3xl w-full"
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>,
                        ) => setYourUsername(event.currentTarget.value)}
                        value={yourUsername ? yourUsername : ""}
                    />
                </div>

                <ColorComp
                    value={yourUsernameColor}
                    onChange={setYourUsernameColor}
                    title={"Your username color"}
                />

                <ToggleComp
                    checked={randomColors}
                    onChange={setRandomColors}
                    title="Random username colors"
                />
                {randomColors ? (
                    ""
                ) : (
                    <>
                        <ColorComp
                            value={othersColors}
                            onChange={setOthersColors}
                            title={"Other usernames color"}
                        />
                    </>
                )}
            </div>
        </div>
    );
};

export default UsernamesSettings;
