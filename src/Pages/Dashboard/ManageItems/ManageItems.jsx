import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useMenu from "../../../hooks/useMenu";

const ManageItems = () => {
    const [menu] = useMenu();
    return (
        <>
            <SectionTitle subHeading="Hurry Up!" heading="MANAGE ALL ITEMS"></SectionTitle>
            <Helmet>
                <title>Bistro | Manage Items</title>
            </Helmet>
            <div className="bg-white p-10 w-3/4">
                <div className="uppercase text-xl font-bold mb-4 flex justify-evenly items-center">
                    <h2>Total Orders:</h2>
                    <h2>Total Price: </h2>
                    <button className="btn btn-sm bg-[#D1A054] border-0">Pay</button>
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
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                menu.map(item => <tr key={item._id}>
                                    <th></th>
                                    <td>
                                        <div className="avatar">
                                            <div className="rounded object-cover w-12 h-12">
                                                <img src='' alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <h2>Name</h2>
                                    </td>
                                    <td><p>Price</p></td>
                                    <td>
                                        <button className="btn bg-[#D1A054] text-white border-0"><FaEdit className="text-lg"></FaEdit></button>
                                    </td>
                                    <td>
                                        <button className="btn bg-red-700 text-white border-0"><FaTrashAlt className="text-lg"></FaTrashAlt></button>
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

export default ManageItems;