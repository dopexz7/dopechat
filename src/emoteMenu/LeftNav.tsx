import { FC, useEffect, useState } from "react";

const LeftNav: FC<any> = ({ disableGlobalEmotes, enableGlobalEmotes }) => {
    const [streamerImg, setStreamImg] = useState<string>("");
    const getStreamerImg: Function = async (): Promise<any> => {
        await fetch(
            `https://api.frankerfacez.com/v1/user/${window.location.pathname
                .split("/")[1]
                .toLowerCase()}`,
        )
            .then((res) => res.json())
            .then((data) => setStreamImg(data?.user?.avatar));
    };
    useEffect(() => {
        getStreamerImg();
    }, []);
    return (
        <div className="h-full p-1.5 border-r-[1px] border-white border-opacity-5 w-[52px] flex flex-col items-center">
            <div
                className="block relative p-1.5 cursor-pointer"
                onClick={disableGlobalEmotes}
            >
                <img
                    className="w-[30px] hover:bg-white h-[30px] rounded-full p-0.5 border-[1px] border-white border-opacity-5 duration-300"
                    alt="Streamer set"
                    src={
                        streamerImg
                            ? streamerImg
                            : chrome.runtime.getURL("icon.png")
                    }
                />
            </div>
            <div
                className="block relative p-1.5 cursor-pointer"
                onClick={enableGlobalEmotes}
            >
                <img
                    className="w-[30px] h-[30px] hover:bg-white rounded-full p-0.5 border-[1px] border-white border-opacity-5 duration-300"
                    alt="Global set"
                    src={chrome.runtime.getURL("icon.png")}
                />
            </div>
        </div>
    );
};

export default LeftNav;
