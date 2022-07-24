import { FunctionComponent } from "preact";

const HeaderNav: FunctionComponent = (): JSX.Element => {
    return (
        <div className="w-screen flex flex-row justify-center items-center pb-6">
            <div className="flex flex-row items-center w-screen max-w-5xl">
                <a
                    href="https://dopechat.ddns.net/"
                    className="text-sm font-light text-main-white hover:text-main-purple duration-300"
                >
                    Official website
                </a>
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
