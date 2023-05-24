
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Menu from "./Menu";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')


    return (
        <section className="my-20">
            <SectionTitle
                subHeading={"Check it out"}
                heading={"FROM OUR MENU"}
            ></SectionTitle>

            <div className="grid grid-cols-2 gap-10 mt-10">
                {
                    popular.map(item => <Menu key={item._id} item={item}></Menu>)
                }
            </div>
            <div className="text-center mt-4">
                <button className="btn btn-outline border-0 tracking-widest font-bold border-b-4 border-black text-black hover:text-yellow-600 rounded-[8px]">View Full  Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;