import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUser, FaUserCheck } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {

    const [axiosSecure] = useAxiosSecure()
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'center-center',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }


    const handleDelete = user => {
        console.log(user);
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
                fetch(`http://localhost:5000/users/admin/${user._id}`, {
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
            <SectionTitle heading="MANAGE ALL USERS" subHeading="How many??"></SectionTitle>
            <Helmet>
                <title>Bistro | All Users</title>
            </Helmet>
            <div className="bg-white p-10 w-3/4">
                <div className="uppercase text-xl font-bold mb-4">
                    <h2 className="heading-font">Total Users: {users.length}</h2>
                </div>

                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>User Name</th>
                                <th>User Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) =>
                                    <tr key={user._id}>
                                        <th>{index + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            {
                                                user.role === 'admin' ? <button title="Admin" className="btn bg-teal-600 text-white border-0"><FaUserCheck className="text-xl"></FaUserCheck></button> :
                                                    <button title="Member" onClick={() => handleMakeAdmin(user)} className="btn bg-[#D1A054] text-white border-0"><FaUser className="text-xl"></FaUser></button>
                                            }
                                        </td>
                                        <td>
                                            <button onClick={() => handleDelete(user)} className="btn bg-red-700 text-white border-0"><FaTrashAlt className="text-lg"></FaTrashAlt></button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    );
};

export default AllUsers;