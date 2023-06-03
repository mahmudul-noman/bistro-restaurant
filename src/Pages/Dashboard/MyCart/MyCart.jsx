import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import './MyCart.css'
import { Link } from "react-router-dom";

const MyCart = () => {
    const [cart, refetch] = useCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0);
    

    const handleDelete = item => {
        console.log(item);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }


    return (
        <>
            <SectionTitle heading="WANNA ADD MORE?" subHeading="My Cart"></SectionTitle>
            <Helmet>
                <title>Bistro | My Cart</title>
            </Helmet>
            <div className="bg-white p-10">
                <div className="uppercase text-xl font-bold mb-4 flex justify-evenly items-center">
                    <h2>Total Orders: {cart.length}</h2>
                    <h2>Total Price: $ {total}</h2>
                    <Link to='/dashboard/payment'><button className="btn btn-md bg-[#D1A054] border-0">Pay</button></Link>
                </div>


                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr className="header-bg">
                                <th>#</th>
                                <th>Item Image</th>
                                <th>Food Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                cart.map((item, index) => <tr key={item._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="avatar">
                                            <div className="rounded object-cover w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h2>{item.name}</h2>
                                    </td>
                                    <td><p>${item.price}</p></td>
                                    <td>
                                        <button onClick={() => handleDelete(item)} className="btn bg-red-700 text-white border-0"><FaTrashAlt className="text-lg"></FaTrashAlt></button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    );
};

export default MyCart;