
const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item;

    return (
        <div className="card w-96 bg-gray-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="bg-black text-white absolute right-0 mr-4 mt-4 p-2">${price}</p>
            <div className="card-body">
                <h2 className="card-title justify-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-outline border-0 tracking-widest font-bold border-b-4 border-yellow-600 text-yellow-600 bg-gray-100 hover:text-yellow-600 rounded-[8px]">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;