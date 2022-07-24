const EmoteComponent = ({
    em,
    onChange,
}: {
    em: any;
    onChange: any;
}): JSX.Element => {
    return (
        <div
            className="inline-block rounded-md duration-300 max-w-[40px] hover:scale-105 hover:bg-darker-purple"
            id={em.code}
            onClick={onChange}
        >
            <img
                alt={em.code}
                src={em.src}
                className="align-bottom h-[30px] w-[30px] object-contain p-1"
            />
        </div>
    );
};
export default EmoteComponent;
