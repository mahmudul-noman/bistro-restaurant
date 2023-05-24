import MenuItem from "./MenuItem";


const MenuCategory = ({ items, menuButton }) => {

    return (
        <div className="my-14">
            <div className="grid grid-cols-2 gap-10">
                {
                    items.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
            <div className="text-center mt-4">
                <button className="btn btn-outline border-0 tracking-widest font-bold border-b-4 border-black text-black hover:text-yellow-600 rounded-[8px]">{menuButton}</button>
            </div>
        </div>
    );
};

export default MenuCategory;