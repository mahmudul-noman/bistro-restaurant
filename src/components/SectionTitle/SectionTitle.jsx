
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center md:w-3/12 mx-auto mb-10">
            <p className="text-yellow-500 mb-4 font-semibold italic text-lg">---{subHeading}---</p>
            <h3 className="text-xl font-semibold uppercase border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;