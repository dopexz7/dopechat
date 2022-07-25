import { FunctionComponent } from "preact";
const Main: FunctionComponent = (): JSX.Element => {
    return (
        <div id="main" className="flex flex-col w-full">
            <div className=" text-white text-xl font-medium tracking-wider mb-3">
                Latest updates
            </div>
            <div className="flex flex-col w-full px-6 py-3 rounded-3xl self-stretch relative transition-[300ms]">
                <div className="border-[1px] border-white border-opacity-5 backdrop-blur-sm shadow-2xl flex flex-col w-full px-7 p-3 rounded-3xl self-stretch relative transition-[300ms]">
                    <div className="flex flex-row justify-center items-center">
                        <div className="text-white lg:text-lg font-medium">
                            Want to see your emotes featured?
                        </div>
                        <a
                            href="https://dopechat.ddns.net/dashboard"
                            className={`ml-auto border-[1px] border-white border-opacity-5 backdrop-blur-sm shadow-2xl px-4 py-1 rounded-2xl text-center content-center text-base font-normal cursor-pointer duration-300 hover:bg-white hover:text-darker-purple text-white`}
                        >
                            Upload your own emotes!
                        </a>
                    </div>
                </div>

                <div className="mt-2 flex flex-col w-full p-0 self-stretch relative transition-[300ms]">
                    <div className="flex flex-row">
                        <div className="m-1 h-44 border-[1px] border-white border-opacity-5 backdrop-blur-sm shadow-2xl flex flex-col w-full px-7 p-3 rounded-3xl self-stretch relative transition-[300ms]">
                            <div className="flex flex-col justify-center items-center">
                                <div className="mr-auto text-white lg:text-lg font-medium">
                                    Emote menu
                                </div>
                                <div className="mr-auto w-full text-white lg:text-sm font-normal mt-3">
                                    Before clicking on an emote in the emote
                                    menu, you have to type something in the
                                    input box first.
                                </div>
                            </div>
                        </div>
                        <div className="m-1 h-44 border-[1px] border-white border-opacity-5 backdrop-blur-sm shadow-2xl flex flex-col w-full px-7 p-3 rounded-3xl self-stretch relative transition-[300ms]">
                            <div className="flex flex-col justify-center items-center">
                                <div className="mr-auto text-white lg:text-lg font-medium">
                                    Emote sets
                                </div>
                                <div className="mr-auto w-full text-white lg:text-sm font-normal mt-3">
                                    Emote sets now automatically activate on the
                                    streamers' pages!
                                </div>
                            </div>
                        </div>
                        <div className="m-1 h-44 border-[1px] border-white border-opacity-5 backdrop-blur-sm shadow-2xl flex flex-col w-full px-7 p-3 rounded-3xl self-stretch relative transition-[300ms]">
                            <div className="flex flex-col justify-center items-center">
                                <div className="mr-auto text-white lg:text-lg font-medium">
                                    Other issues
                                </div>
                                <div className="mr-auto w-full text-white lg:text-sm font-normal mt-3">
                                    If you have any issues where chat looks
                                    weird, is buggy or glitchy - try resetting
                                    your settings to defaults or send us a
                                    message on the website using the contact
                                    form!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
