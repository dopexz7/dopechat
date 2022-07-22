import { TextInput } from "@mantine/core";
import React, { FC } from "react";
import { useChromeStorageLocal } from "use-chrome-storage";
import ColorComp from "../comps/ColorComp";
import ToggleComp from "../comps/ToggleComp";

const randomColor: Function = (): string =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const UsernamesSettings: FC = () => {
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
        <div className="flex items-center flex-col w-full">
            <div className="flex flex-col w-full px-6 py-2 rounded-3xl self-stretch relative transition-[300ms]">
                <div className="text-white text-base font-medium tracking-wider mb-3 mt-3">
                    Your username
                </div>
                <div className="border-[1px] border-white border-opacity-5 backdrop-blur-sm shadow-2xl flex flex-row justify-center items-center w-full px-3 p-2 rounded-3xl self-stretch relative transition-[300ms]">
                    <TextInput
                        // @ts-ignore
                        classNames={{
                            defaultVariant: "text-main-white ml-3",
                            input: "text-main-white bg-transparent border-0",
                        }}
                        className="w-full"
                        variant="default"
                        value={yourUsername}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>,
                        ) => setYourUsername(event.currentTarget.value)}
                        placeholder={
                            yourUsername ? yourUsername : "Enter your username"
                        }
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
