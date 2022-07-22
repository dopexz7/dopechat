import { FC } from "react";
import { useLocation } from "react-router-dom";

const HeaderNav: FC = (): JSX.Element => {
    const location = useLocation();
    return (
        <div className="bg-darker-purple backdrop-blur-sm w-screen flex flex-row justify-center items-center p-5">
            <div className="flex flex-row items-center w-screen max-w-6xl">
                <div className="text-base text-main-white capitalize">
                    {location.pathname
                        .replace("/", "")
                        .replace("-", " ")
                        .replace(".html", "")}
                </div>
                <div className="text-main-white ml-auto text-sm font-light">
                    <div>
                        Made by <span className="text-main-purple">dope</span>,
                        Copyright © 2022, All Rights Reserved by
                        <span className="text-main-purple"> dopeChat</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HeaderNav;
