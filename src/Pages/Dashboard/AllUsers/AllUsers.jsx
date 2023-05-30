import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";

const AllUsers = () => {

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })

    return (
        <>
            <SectionTitle heading="MANAGE ALL USERS" subHeading="How many??"></SectionTitle>
            <Helmet>
                <title>Bistro | All Users</title>
            </Helmet>
            <div className="bg-white p-10 w-3/4">
                <div className="uppercase text-2xl font-bold mb-4">
                    <h2>Total Orders: {users.length}</h2>
                </div>

                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr className="header-bg">
                                <th>#</th>
                                <th>User Name</th>
                                <th>User Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th></th>
                                <td>
                                    <div className="avatar">
                                        <div className="rounded object-cover w-12 h-12">
                                            <img src="" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <h2></h2>
                                </td>
                                <td><p></p></td>
                                <td>
                                    <button className="btn bg-red-700 text-white border-0"><FaTrashAlt className="text-lg"></FaTrashAlt></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    );
};

export default AllUsers;