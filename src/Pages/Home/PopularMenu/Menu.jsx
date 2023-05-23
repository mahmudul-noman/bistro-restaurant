

const Menu = ({ item }) => {

    const { name, image, price, recipe } = item;

    return (
        <div className="flex space-x-4 mb-4">
            <img style={{borderRadius:'0 120px 120px 120px'}} className="w-[100px] object-cover" src={image} alt="" />
            <div>
                <h3 className="uppercase text-xl">{name}------------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default Menu;