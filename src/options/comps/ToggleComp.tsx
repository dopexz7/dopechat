import { FunctionComponent } from "preact";

const ToggleComp: FunctionComponent<any> = ({
    checked,
    onChange,
    title,
}: {
    checked: any;
    onChange: any;
    title: string;
}) => {
    return (
        <div className="border-[1px] border-white border-opacity-5 px-3 py-2 rounded-3xl backdrop-blur-sm shadow-2xl text-white text-base font-medium flex flex-row items-center tracking-wider mt-3">
            <div className="px-1 text-main-white text-base w-full">{title}</div>
            <div
                onClick={() => onChange(!checked)}
                className={`${
                    checked
                        ? "bg-white text-darker-purple "
                        : "hover:bg-white hover:text-darker-purple text-white"
                } backdrop-blur-sm border-[1px] border-white border-opacity-5 w-max shadow-2xl px-4 py-1 rounded-2xl font-medium text-base cursor-pointer duration-300 ml-auto`}
            >
                {checked ? "Disable" : "Enable"}
            </div>
        </div>
    );
};

export default ToggleComp;
