import HeaderNav from "./comps/HeaderNav";
import Sidebar from "./comps/Sidebar";
import { FunctionComponent } from "preact";
import { reactRoutes } from "./routes";

const App: FunctionComponent = (): JSX.Element => {
    return (
        <div className="overflow-hidden bg-header-bg bg-main-purple bg-blend-multiply h-screen w-screen flex flex-col justify-center items-center">
            <Sidebar />
            <div className="overflow-hidden max-w-6xl w-screen px-6 pb-6 pt-3 h-full flex flex-row space-y-3 items-center justify-center">
                <div className="overflow-hidden border-[1px] border-white border-opacity-5 backdrop-blur-sm shadow-2xl flex w-full h-full rounded-2xl text-base font-medium">
                    <div
                        id="containerElement"
                        className="flex flex-col py-6 px-6 overflow-auto max-w-7xl w-full anim"
                    >
                        {reactRoutes.map(
                            (route, index: number): JSX.Element => (
                                <div key={index}>{route.element}</div>
                            ),
                        )}
                    </div>
                </div>
            </div>
            <HeaderNav />
        </div>
    );
};
export default App;
