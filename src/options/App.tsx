import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderNav from "./comps/HeaderNav";
import Sidebar from "./comps/Sidebar";
import { FC } from "react";
import { reactRoutes } from "./routes";

const App: FC = (): JSX.Element => {
    return (
        <Router>
            <div className="overflow-hidden bg-header-bg bg-main-purple bg-blend-multiply h-screen w-screen flex flex-col justify-center items-center">
                <Sidebar />
                <div className="overflow-hidden space-x-20 max-w-6xl w-screen p-6 h-full flex flex-row space-y-3 items-center justify-center">
                    <div className="border-[1px] border-white border-opacity-5 backdrop-blur-sm shadow-2xl flex w-full h-full rounded-2xl text-base font-medium">
                        <div className="flex flex-col p-[30px] overflow-auto max-w-7xl w-full anim">
                            <div className="flex flex-col w-full px-6 py-0 rounded-3xl self-stretch relative transition-[300ms]">
                                <div className="text-white lg:text-xl font-medium tracking-wider mb-3">
                                    Latest updates
                                </div>
                                <div className="flex flex-col px-7 p-3 border-[1px] border-white border-opacity-5 backdrop-blur-sm shadow-2xl rounded-3xl">
                                    <div className="text-main-white lg:text-sm w-2/4 font-normal tracking-wider mb-3 mt-3">
                                        <div className="font-medium text-white">
                                            Major fixes and improvements
                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center pb-2.5">
                                        <a
                                            href="https://dopechat.ddns.net#section3"
                                            className="border-[1px] border-white border-opacity-5 backdrop-blur-sm shadow-2xl px-4 py-1.5 rounded-2xl text-center font-medium content-center text-white text-base cursor-pointer duration-300 hover:bg-white hover:text-darker-purple "
                                        >
                                            Changelog
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <Routes>
                                {reactRoutes.map(
                                    (route, index: number): JSX.Element => (
                                        <Route
                                            key={index}
                                            path={route.path}
                                            element={route.element}
                                        />
                                    ),
                                )}
                            </Routes>
                        </div>
                    </div>
                </div>
                <HeaderNav />
            </div>
        </Router>
    );
};
export default App;
