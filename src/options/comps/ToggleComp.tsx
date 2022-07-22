import { FC } from "react";

const ToggleComp: FC<any> = ({
    checked,
    onChange,
    title,
}: {
    checked: any;
    onChange: any;
    title: string;
}) => {
    return (
        <div className="border-[1px] border-white border-opacity-5 p-3 rounded-3xl text-white text-base font-medium flex flex-row items-center tracking-wider mb-3 mt-3">
            <div className="px-3">{title}</div>
            <div
                onClick={() => onChange(!checked)}
                className={`${
                    checked
                        ? "bg-white text-darker-purple "
                        : "hover:bg-white hover:text-darker-purple text-white"
                } backdrop-blur-sm border-[1px] border-white border-opacity-5 w-max shadow-2xl px-4 py-1.5 rounded-2xl font-medium  text-base cursor-pointer duration-300 ml-auto`}
            >
                {checked ? "Disable" : "Enable"}
            </div>
        </div>
    );
};

export default ToggleComp;
