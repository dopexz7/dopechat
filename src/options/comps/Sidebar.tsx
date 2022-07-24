import { useState } from "preact/hooks";
import { Link } from "react-scroll";
import { reactRoutes } from "../routes";
import { FunctionComponent } from "preact";

const NavItem: FunctionComponent<any> = ({ item }): JSX.Element => {
    const [active, setActive] = useState(false);

    return (
        <div className={`px-3 py-2 ${active ? "bg-white" : ""} rounded-3xl`}>
            <Link
                className="hover:text-accent-purple hover:scale-95 text-lg flex flex-row space-x-3 items-center cursor-pointer duration-300"
                to={item.id}
                containerId="containerElement"
                spy={true}
                onSetActive={() => setActive(true)}
                onSetInactive={() => setActive(false)}
                activeClass="text-accent-purple"
                smooth={true}
                offset={-50}
                duration={600}
            >
                {item.icon}
            </Link>
        </div>
    );
};

const Sidebar: FunctionComponent = (): JSX.Element => {
    return (
        <div className={`z-50 w-screen`}>
            <div
                className={`relative mx-auto max-w-5xl w-screen flex flex-row justify-center items-center pt-3 duration-300 text-main-white text-sm font-semibold`}
            >
                <Link
                    className="text-xl duration-300 font-normal cursor-pointer whitespace-nowrap text-clip w-max mr-auto text-white"
                    to="main"
                    containerId="containerElement"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={600}
                >
                    dopeChat settings
                </Link>
                <div className="flex space-x-1 px-3 py-2 border-[1px] shadow-2xl backdrop-blur-sm border-white border-opacity-5 rounded-3xl flex-row text-sm">
                    {reactRoutes.map((item, index) => {
                        return <NavItem item={item} key={index} />;
                    })}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
