
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center md:w-3/12 mx-auto mt-20">
            <p className="text-yellow-500 mb-4 font-semibold italic text-xl">---{subHeading}---</p>
            <h3 className="text-3xl font-semibold uppercase border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;