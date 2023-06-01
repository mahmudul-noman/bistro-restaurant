import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useMenu from "../../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageItems = () => {

    // const [menu, , refetch] = useMenu();
    // const [axiosSecure] = useAxiosSecure();

    const [menu, , refetch] = useMenu();
    const [axiosSecure] = useAxiosSecure();


    // const handleDelete = item => {
    //     console.log(item);
    //     Swal.fire({
    //         title: 'Are you sure?',
    //         text: "You won't be able to revert this!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!'
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             axiosSecure.delete(`/menu/${item._id}`)
    //                 .then(res => {
    //                     console.log('deleted response', res);
    //                     if (res.data.deletedCount > 0) {
    //                         refetch();
    //                         Swal.fire({
    //                             position: 'center-center',
    //                             icon: 'success',
    //                             title: `${item.name} is an Admin Now!`,
    //                             showConfirmButton: false,
    //                             timer: 1500
    //                         })
    //                     }
    //                 })
    //         }
    //     })
    // }


    const handleDelete = item => {
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

                axiosSecure.delete(`/menu/${item._id}`)
                    .then(res => {
                        console.log('deleted res', res.data);
                        if (res.data.deletedCount > 0) {
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
            <SectionTitle subHeading="Hurry Up!" heading="MANAGE ALL ITEMS"></SectionTitle>
            <Helmet>
                <title>Bistro | Manage Items</title>
            </Helmet>
            <div className="bg-white p-4 w-3/4">
                <div className="uppercase text-xl font-bold mb-4">
                    <h2>Total Items: {menu.length}</h2>
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
                                menu.map((item, index) => <tr key={item._id}>
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
                                        <button className="btn bg-[#D1A054] text-white border-0"><FaEdit className="text-lg"></FaEdit></button>
                                    </td>
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

export default ManageItems;