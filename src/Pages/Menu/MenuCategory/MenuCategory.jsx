import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";
import Cover from "../../Shared/Cover/Cover";


const MenuCategory = ({ items, title, img }) => {


    return (
        <div className="mb-14">
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid grid-cols-2 gap-10">
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="text-center mt-4">
                <Link to={`/order/${title}`}>
                    <button className="btn btn-outline border-0 tracking-widest font-bold border-b-4 border-black text-black hover:text-yellow-600 rounded-[8px]">ORDER YOUR FAVOURITE FOOD</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;