import { FunctionComponent } from "preact";
import { useChromeStorageLocal } from "use-chrome-storage";
import ColorComp from "../comps/ColorComp";
import { interactiveChatMessages } from "./data/data";

const ChatSettings: FunctionComponent = (): JSX.Element => {
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
    const [chatTextColor, setChatTextColor] = useChromeStorageLocal(
        "chatTextColor",
        null,
    );
    const [chatFont, setChatFont] = useChromeStorageLocal(
        "changefont",
        "Helvetica",
    );
    const [fontSize, setFontSize] = useChromeStorageLocal("chatTextSize", null);

    return (
        <div id="chat" className="flex flex-col w-full">
            <div className="text-white text-xl font-medium tracking-wider">
                Chat settings
            </div>
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

                <div className="border-[1px] border-white border-opacity-5 backdrop-blur-sm shadow-2xl flex flex-col w-full px-4 p-3 rounded-3xl self-stretch relative transition-[300ms] mt-3">
                    <div className="flex flex-row items-center space-x-3 h-7">
                        <div className="text-main-white text-base w-full">
                            Chat width
                        </div>
                        <div className="text-main-white text-sm">
                            {width ? width + "px" : 350}
                        </div>
                        <input
                            type="range"
                            min="250"
                            max="600"
                            step="50"
                            value={width ? width : 350}
                            onChange={(e) => {
                                setWidth(e.target.value);
                            }}
                            className="slider w-full bg-black bg-opacity-10 border-[1px] border-white border-opacity-5 backdrop-blur-sm shadow-2xl rounded-3xl"
                        />
                    </div>
                </div>
                <div className="flex items-center py-3 space-x-3">
                    <div className="flex flex-row justify-center h-full">
                        <div
                            className="overflow-auto mr-auto w-96 h-full rounded-3xl p-3 flex flex-col relative items-center"
                            style={{
                                background: chatBg ? chatBg : "#18181b",
                                fontFamily: chatFont ? chatFont : "Helvetica",
                            }}
                        >
                            <div
                                onClick={() => setChattopbar(!chatTopbar)}
                                className={`${
                                    chatTopbar ? "opacity-20" : "opacity-100"
                                } hover:scale-95 duration-300 cursor-pointer mt-1 text-white border-b-[3px] rounded-md box-shadow-black flex flex-row border-white border-opacity-5 p-3 absolute z-10 h-16 items-center justify-center w-11/12`}
                                style={{
                                    background: chatTopBarBg
                                        ? chatTopBarBg
                                        : "#18181b",
                                }}
                            >
                                <div className="w-8 h-8 bg-darker-purple rounded-full"></div>
                                <div className="ml-3 w-4/5 text-sm">
                                    Streamer is live now — playing Grand Theft
                                    Auto V.
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
                                                                setChatImg(
                                                                    !chatImg,
                                                                )
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
                                                                <span
                                                                    style={{
                                                                        color: chatTextColor
                                                                            ? chatTextColor
                                                                            : "#fff",
                                                                    }}
                                                                >
                                                                    {v.msg}
                                                                </span>
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
                    <div className="flex flex-col">
                        <div className="text-white text-lg font-medium tracking-wider">
                            Chat appearance
                        </div>
                        <div className="text-main-white text-sm font-light">
                            Click an element to hide/show it
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatSettings;
