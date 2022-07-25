import { useEffect, useState } from "preact/hooks";
import { supabase } from "../lib/supabaseClient";

const LeftNav = ({
    disableGlobalEmotes,
    enableGlobalEmotes,
}: {
    disableGlobalEmotes: any;
    enableGlobalEmotes: any;
}) => {
    const [streamerImg, setStreamImg] = useState<string>("");
    const gettingAvatar: Function = async (): Promise<any> =>
        await supabase
            .from("useremotes")
            .select("*")
            .then((res) => res.data)
            .then((data: any) => {
                for (var i = 0; i < data.length; i++) {
                    if (
                        data[i].name.toLowerCase() ===
                        window.location.pathname.split("/")[1].toLowerCase()
                    ) {
                        return data[i].logo;
                    }
                }
            });

    useEffect(() => {
        gettingAvatar().then((r: any) => {
            setStreamImg(r);
        });
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
                            : chrome.runtime.getURL("icon64.png")
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
                    src={chrome.runtime.getURL("icon64.png")}
                />
            </div>
        </div>
    );
};

export default LeftNav;
