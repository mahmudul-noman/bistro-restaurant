import { FaCalendarAlt, FaCalendarCheck, FaCartPlus, FaCommentDots, FaHome, FaList, FaThLarge, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {

    const [cart] = useCart();

    // TODO
    const isAdmin = true;


    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex bg-gray-100 flex-col items-center justify-center">
                {/* <!-- Page content here --> */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open Menu</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-2 w-80 bg-[#D1A054] text-base-content">

                    {
                        isAdmin ?
                            // Admin Dashboard
                            <>
                                <li><NavLink to='userHome' className="bg-transparent uppercase"><FaHome></FaHome> Admin Home</NavLink></li>
                                <li><NavLink to='/dashboard/history' className="bg-transparent uppercase"><FaUtensils></FaUtensils> Add Item</NavLink></li>
                                <li><NavLink className="bg-transparent uppercase" to='/dashboard/manageItems'><FaList></FaList> Manage Item</NavLink></li>
                                <li><NavLink to='/dashboard/reviews' className="bg-transparent uppercase"><FaThLarge></FaThLarge> Manage Bookings</NavLink></li>
                                <li><NavLink to='/dashboard/allusers' className="bg-transparent uppercase"><FaUsers></FaUsers> All Users</NavLink></li>
                            </>
                            :
                            // User Dashboard
                            <>
                                <li><NavLink to='userHome' className="bg-transparent uppercase"><FaHome></FaHome> User Home</NavLink></li>
                                <li><NavLink to='/dashboard/reservations' className="bg-transparent uppercase"><FaCalendarAlt></FaCalendarAlt> Reservation</NavLink></li>
                                <li><NavLink to='/dashboard/history' className="bg-transparent uppercase"><FaWallet></FaWallet> Payment History</NavLink></li>
                                <li><NavLink className="bg-transparent uppercase" to='/dashboard/mycart'>
                                    <FaCartPlus className="text-lg"></FaCartPlus>
                                    <span className="-ml-6 text-lg text-red-600 font-extrabold -mt-2">+{cart?.length || 0}</span>
                                    My Cart</NavLink></li>
                                <li><NavLink to='/dashboard/reviews' className="bg-transparent uppercase"><FaCommentDots></FaCommentDots> Add Review</NavLink></li>
                                <li><NavLink to='/dashboard/bookings' className="bg-transparent uppercase"><FaCalendarCheck></FaCalendarCheck> My Booking</NavLink></li>
                            </>
                    }

                    <div className="divider bg-white h-[1px]"></div>
                    <li><NavLink to='/' className="bg-transparent uppercase"><FaHome></FaHome> Home</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;