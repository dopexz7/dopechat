import { FC } from "react";
import { CloseIcon, SearchIcon } from "./Icons";

const TopMenu: FC<any> = ({ inputValue, onChange, onKeyDown, onClick }) => {
    return (
        <div className="flex flex-row p-2.5 text-white text-sm border-b-[1px] border-white border-opacity-5 items-center">
            <div className="bg-black bg-opacity-5 rounded-2xl w-[270px] text-white border-[1px] border-white border-opacity-5 px-2.5 py-4 duration-300 flex items-center">
                <SearchIcon />
                <input
                    value={inputValue}
                    onChange={onChange}
                    placeholder="Search emotes..."
                    onKeyDown={onKeyDown}
                    className="bg-transparent border-0 w-full text-white text-sm outline-none ml-2"
                />
            </div>

            <div
                className="ml-auto p-0.5 flex text-lg rounded-3xl duration-300 cursor-pointer border-[1px] border-white border-opacity-5 hover:text-main-purple hover:bg-white"
                onClick={onClick}
            >
                <CloseIcon />
            </div>
        </div>
    );
};

export default TopMenu;
