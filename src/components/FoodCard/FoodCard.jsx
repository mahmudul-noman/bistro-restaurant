import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
    const { name, image, price, recipe, _id } = item;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useCart();

    const handleAddToCart = item => {
        console.log(item);
        if (user && user.email) {
            const orderItem = { menuItemId: _id, name, image, price, email: user.email }
            console.log(orderItem);
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(orderItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'center-center',
                            icon: 'success',
                            title: 'Your Item Added In The Cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please Login for Order Food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            })
        }
    }

    return (
        <div className="card w-96 bg-gray-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="bg-black text-white absolute right-0 mr-4 mt-4 p-2">${price}</p>
            <div className="card-body">
                <h2 className="card-title justify-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 tracking-widest font-bold border-b-4 border-yellow-600 text-yellow-600 bg-gray-100 hover:text-yellow-600 rounded-[8px]">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;