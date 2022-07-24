import { useEffect, useRef, useState } from "preact/hooks";
import { useChromeStorageLocal } from "use-chrome-storage";
import { supabase } from "../lib/supabaseClient";
import EmoteComponent from "./EmoteComponent";
import LeftNav from "./LeftNav";
import StreamerEmotes from "./StreamerEmotes";
import TopMenu from "./TopMenu";

const App = () => {
    const emoteTableRef = useRef(null);
    const [emoteTable, setEmoteTable] = useState<boolean>(false);
    const [globalEmotes, setGlobalEmotes] = useState<boolean>(false);
    const [q, setQ] = useState<string>("");
    const [posts, setPosts] = useState<any[]>([]);
    const [currentEmotes, setCurrentEmotes] = useState<any[]>([]);
    const [globalSet, setGlobalSet] = useState<any[]>([]);
    const [emoteMenu, setEmoteMenu] = useChromeStorageLocal(
        "emoteMenuCheck",
        false,
    );

    const insertEmote: Function = (x: any): void => {
        let textbox4: Element | any = document.querySelector(
            ".oo9gr5id.lzcic4wl.l9j0dhe7.gsox5hk5.notranslate",
        )?.childNodes[0].childNodes[0].childNodes;
        if (textbox4[0]) {
            textbox4[0].textContent += " " + x;
            return;
        }
    };

    window.addEventListener("keydown", (e: KeyboardEvent) => {
        if (e.altKey === true && e.keyCode === 69) {
            e.preventDefault();
            setEmoteTable(!emoteTable);
        }
    });
    let kekint: NodeJS.Timer = setInterval(() => {
        let emotebtn = document.getElementById("dopechat-emotebutton");
        if (emotebtn !== null) {
            emotebtn.addEventListener("click", function (e) {
                e.preventDefault();
                setEmoteTable(!emoteTable);
            });
            clearInterval(kekint);
        }
    }, 500);

    useEffect(() => {
        const gettingEmotes: Function = async (): Promise<any> =>
            await supabase.from("useremotes").select("*");

        gettingEmotes().then((res: any) => {
            let userEmotes = res?.data.filter(
                (v: any) =>
                    v?.name?.toLowerCase() ===
                    window.location.pathname.split("/")[1].toLowerCase(),
            )[0]?.emotes;
            let globalEmotes = res?.data.filter(
                (v: any) => v.name === "global",
            )[0].emotes;
            setCurrentEmotes(userEmotes ? userEmotes : []);
            setPosts(userEmotes ? userEmotes.slice(0, 72) : []);
            setGlobalSet(globalEmotes);
        });
    }, []);

    const onKeyDown: Function = (e: any): void => {
        let tempar: any[] = [];
        if (e.key === "ArrowRight") {
            e.preventDefault();
            currentEmotes.map((val: any) => {
                if (val.code.toLowerCase().includes(q.toLowerCase())) {
                    tempar.push(val);
                }
            });
            setQ(tempar.slice(0, 1)[0].code);
            insertEmote(tempar.slice(0, 1)[0].code);
            setTimeout(() => {
                setQ("");
            }, 1500);
        }
    };

    const handlingTab: Function = (): void => {
        let textbox4: Element | any = document.querySelector(
            ".oo9gr5id.lzcic4wl.l9j0dhe7.gsox5hk5.notranslate",
        )?.childNodes[0].childNodes[0].childNodes;
        let textAr: any[] = [];
        let x: string = textbox4[0].textContent.split(" ");
        for (var i = 0; i < x.length; i++) {
            textAr.push(x[i]);
        }
        let len: number = textAr.length;
        let pepAr;
        const startsWith: Function = (str: string, word: string): boolean => {
            return str.lastIndexOf(word, 0) === 0;
        };
        if (len === 1) {
            for (var j = 0; j < currentEmotes.length; j++) {
                if (startsWith(currentEmotes[j].code, textAr.toString())) {
                    textAr = currentEmotes[j].code;
                    pepAr = textAr;
                    textbox4[0].textContent = pepAr;
                }
            }
        } else {
            for (var k = 0; k < currentEmotes.length; k++) {
                if (
                    startsWith(currentEmotes[k].code, textAr[textAr.length - 1])
                ) {
                    textAr.splice(len - 1, 1, currentEmotes[k].code);
                    pepAr = textAr.join(" ");
                    textbox4[0].textContent = pepAr;
                }
            }
        }
    };

    window.addEventListener("keydown", (e: any): void =>
        e.keyCode === 9 ? (e.preventDefault(), handlingTab()) : null,
    );
    const fetchRequest = async () =>
        await supabase
            .from("useremotes")
            .select("emotes")
            .eq("name", window.location.pathname.split("/")[1]);

    const getMorePost = async () => {
        const kekl = posts.length + 16;
        fetchRequest().then((data: any) => {
            let res = data.data[0].emotes.slice(posts.length, kekl);
            return setPosts((post) => [...post, ...res]);
        });
    };

    const PostingEmotes = ({
        set,
        name,
    }: {
        set: any;
        name: any;
    }): JSX.Element => (
        <>
            {name ? (
                <div className="mb-2.5 opacity-75 text-xs font-medium mt-2.5 ml-1.5 p-0.5">
                    {name} emotes
                </div>
            ) : (
                ""
            )}
            {set &&
                set
                    .filter((val: any) => {
                        if (q === "") {
                            return val;
                        } else if (
                            val.code.toLowerCase().includes(q.toLowerCase())
                        ) {
                            return val;
                        }
                    })
                    .map((em: any, index: number) => {
                        return (
                            <EmoteComponent
                                key={index}
                                em={em}
                                onChange={() => insertEmote(em.code)}
                            />
                        );
                    })}
        </>
    );

    return (
        <>
            {emoteTable && emoteMenu ? (
                <div
                    id="emotetable"
                    className="z-50 w-[390px] h-[430px] flex flex-col absolute rounded-md bottom-[90px] right-[15px] bg-darker-purple bg-opacity-50 text-main-white overflow-hidden text-sm"
                    ref={emoteTableRef}
                    style={{
                        opacity: emoteTable ? "1" : "0",
                        display: emoteTable ? "block" : "none",
                    }}
                >
                    <TopMenu
                        inputValue={q}
                        onChange={(e: any) => setQ(e.target.value)}
                        onKeyDown={(e: any) => onKeyDown(e)}
                        onClick={() => setEmoteTable(false)}
                    />

                    <div className="flex h-[360px]">
                        <LeftNav
                            disableGlobalEmotes={() => setGlobalEmotes(false)}
                            enableGlobalEmotes={() => setGlobalEmotes(true)}
                        />
                        <div
                            className="h-full w-[370px] p-1.5 overflow-y-scroll"
                            id="scrollableDiv"
                        >
                            {globalEmotes ? (
                                <>
                                    <PostingEmotes
                                        name="Global"
                                        set={globalSet}
                                    />
                                </>
                            ) : (
                                <>
                                    <div className="mb-2.5 opacity-75 text-xs font-medium mt-2.5 ml-1.5 p-0.5">
                                        {window.location.pathname.split("/")[1]}
                                        `s emotes
                                    </div>
                                    {q.length >= 1 ? (
                                        <>
                                            <PostingEmotes
                                                name=""
                                                set={currentEmotes}
                                            />
                                        </>
                                    ) : (
                                        <StreamerEmotes
                                            posts={posts}
                                            next={getMorePost}
                                            onChange={insertEmote}
                                        />
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            ) : (
                ""
            )}
        </>
    );
};

export default App;
