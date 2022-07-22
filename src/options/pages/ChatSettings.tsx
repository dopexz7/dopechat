import { Slider } from "@mantine/core";
import { FC } from "react";
import { useChromeStorageLocal } from "use-chrome-storage";
import ColorComp from "../comps/ColorComp";
import { interactiveChatMessages } from "./data/data";

const ChatSettings: FC = (): JSX.Element => {
    const [chatBg, setChatBg] = useChromeStorageLocal("chatBackground", null);
    const [chatTopBarBg, setChatTopBarBg] = useChromeStorageLocal(
        "chattopbarColor",
        null,
    );
    const [width, setWidth] = useChromeStorageLocal("changeChatWidth", 350);
    const [chatTopbar, setChattopbar] = useChromeStorageLocal(
        "chatTopBarCheck",
        false,
    );
    const [chatImg, setChatImg] = useChromeStorageLocal(
        "hideChatProfilePictures",
        false,
    );
    const [chatLikeReply, setChatLikeReply] = useChromeStorageLocal(
        "chatLikeReplyCheck",
        false,
    );
    const [chatReplying, setChatReplying] = useChromeStorageLocal(
        "chatRepliesHide",
        false,
    );
    const [chatLike, setChatLike] = useChromeStorageLocal(
        "chatCommentReacts",
        false,
    );
    const [chatDots, setChatDots] = useChromeStorageLocal(
        "chatThreeDots",
        false,
    );

    return (
        <div className="flex items-center flex-col w-full">
            <div className="flex flex-col w-full max-w-6xl px-6 py-2 rounded-3xl self-stretch relative transition-[300ms]">
                <ColorComp
                    value={chatBg}
                    onChange={setChatBg}
                    title={"Chat background"}
                />
                <ColorComp
                    value={chatTopBarBg}
                    onChange={setChatTopBarBg}
                    title={"Chat top bar background"}
                />

                <div className="text-white text-base font-medium tracking-wider mb-3 mt-3">
                    Chat width
                </div>

                <div className="border-[1px] border-white border-opacity-5 backdrop-blur-sm shadow-2xl flex flex-col w-full px-4 p-3 rounded-3xl self-stretch relative transition-[300ms]">
                    <div className="flex flex-row justify-center items-center h-6">
                        <Slider
                            className="w-full"
                            classNames={{
                                bar: "bg-main-purple",
                                thumb: "border-0",
                                dragging: "bg-main-purple",
                                label: "bg-transparent p-0 mt-3 text-white",
                            }}
                            value={width}
                            onChange={(e) => {
                                setWidth(e);
                            }}
                            max={600}
                            min={250}
                            labelTransition="skew-down"
                            labelTransitionDuration={150}
                            labelTransitionTimingFunction="ease"
                            step={50}
                        />
                    </div>
                </div>
                <div className="text-white text-base font-medium tracking-wider mb-3 mt-3">
                    Chat appearance
                </div>

                <div className="flex flex-row justify-center  h-full">
                    <div className="overflow-auto mr-auto w-96 h-full bg-[#18181b] rounded-lg p-3 flex flex-col relative items-center ">
                        <div
                            onClick={() => setChattopbar(!chatTopbar)}
                            className={`${
                                chatTopbar ? "opacity-20" : "opacity-100"
                            } hover:scale-95 duration-300 cursor-pointer mt-1 bg-[#18181b] text-white border-b-[3px] rounded-md box-shadow-black flex flex-row border-white border-opacity-5 p-3 absolute z-10 h-16 items-center justify-center w-11/12`}
                        >
                            <div className="w-8 h-8 bg-darker-purple rounded-full"></div>
                            <div className="ml-3 w-4/5 text-sm">
                                Streamer is live now — playing Grand Theft Auto
                                V.
                            </div>
                        </div>
                        {interactiveChatMessages &&
                            interactiveChatMessages.map(
                                (
                                    v: {
                                        name: string;
                                        msg: string;
                                        color: string;
                                        reply: boolean;
                                        like: boolean;
                                    },
                                    index: number,
                                ) => {
                                    return (
                                        <div
                                            key={index}
                                            className="flex flex-col w-full"
                                        >
                                            <div className="w-full h-16 text-white flex justify-center items-center">
                                                <div className="flex flex-row w-full ml-3 items-center">
                                                    <div
                                                        onClick={(): void =>
                                                            setChatImg(!chatImg)
                                                        }
                                                        className={` ${
                                                            chatImg
                                                                ? "w-3 h-3"
                                                                : "w-8 h-8"
                                                        } duration-300 cursor-pointer bg-darker-purple rounded-full hover:scale-90`}
                                                    ></div>
                                                    <div className="flex flex-col">
                                                        <div className="ml-3 w-max text-sm">
                                                            <span
                                                                className="font-medium pr-1"
                                                                style={{
                                                                    color: v.color,
                                                                }}
                                                            >
                                                                {v.name}:
                                                            </span>
                                                            {v.msg}
                                                        </div>
                                                        <div
                                                            onClick={(): void =>
                                                                setChatLikeReply(
                                                                    !chatLikeReply,
                                                                )
                                                            }
                                                            className={`${
                                                                chatLikeReply
                                                                    ? "opacity-20"
                                                                    : ""
                                                            } cursor-pointer hover:scale-95 duration-300  ml-3  text-sm flex font-medium text-white text-opacity-25`}
                                                        >
                                                            Like Reply
                                                        </div>
                                                    </div>
                                                    {v.like === true ? (
                                                        <div
                                                            onClick={(): void =>
                                                                setChatLike(
                                                                    !chatLike,
                                                                )
                                                            }
                                                            className={` ${
                                                                chatLike
                                                                    ? "opacity-20"
                                                                    : ""
                                                            } cursor-pointer ml-auto mr-3 font-medium text-base self-center text-white text-opacity-30 hover:scale-75 duration-300`}
                                                        >
                                                            👍
                                                        </div>
                                                    ) : (
                                                        <div
                                                            onClick={(): void =>
                                                                setChatDots(
                                                                    !chatDots,
                                                                )
                                                            }
                                                            className={` ${
                                                                chatDots
                                                                    ? "opacity-20"
                                                                    : ""
                                                            } cursor-pointer ml-auto mr-3 font-medium text-xl text-white text-opacity-30 hover:scale-75 duration-300`}
                                                        >
                                                            ...
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                            {v.reply === true ? (
                                                <div
                                                    onClick={(): void =>
                                                        setChatReplying(
                                                            !chatReplying,
                                                        )
                                                    }
                                                    className={` ${
                                                        chatReplying
                                                            ? "opacity-20 p-0"
                                                            : "p-2"
                                                    } cursor-pointer w-full font-medium hover:scale-95 text-white duration-300 text-opacity-50 text-sm`}
                                                >
                                                    Replying to...
                                                </div>
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                    );
                                },
                            )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatSettings;
