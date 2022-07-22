import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { SidebarData } from "./SidebarData";

const Sidebar: FC = (): JSX.Element => {
    const location = useLocation();
    const { pathname } = location;
    const splitLocation: string[] = pathname.split("/");

    return (
        <div className={`z-50 w-screen bg-darker-purple`}>
            <div
                className={`relative max-w-6xl w-screen mx-auto flex flex-row justify-center items-center p-6 duration-300 space-x-3 text-main-white text-sm font-semibold`}
            >
                <Link
                    to="/options.html"
                    className={`text-xl duration-300 font-normal cursor-pointer whitespace-nowrap text-clip w-max mr-auto text-white`}
                >
                    dopeChat
                </Link>

                <div className="flex flex-row space-x-4">
                    {SidebarData.map((item, index) => {
                        return (
                            <Link
                                className={`${
                                    splitLocation[1] === item.path
                                        ? "text-accent-purple"
                                        : "text-main-white hover:text-accent-purple"
                                } ml-3 flex flex-row items-center group w-max text-center cursor-pointer duration-300 `}
                                to={item.path}
                                key={index}
                            >
                                {item.title}
                            </Link>
                        );
                    })}
                </div>
                {/* <a
                    className={`ml-3 hidden lg:flex flex-row items-center group w-max text-center cursor-pointer duration-300  text-main-white  hover:text-white`}
                >
                    Dashboard
                </a> */}
            </div>
        </div>
    );
};

export default Sidebar;
