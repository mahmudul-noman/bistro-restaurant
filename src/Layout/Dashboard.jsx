import { FaCalendarAlt, FaCalendarCheck, FaCartPlus, FaCommentDots, FaHome, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {

    const [cart] = useCart();


    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* <!-- Page content here --> */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-[#D1A054] text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><NavLink to='/' className="bg-transparent"><FaHome></FaHome> User Home</NavLink></li>
                    <li><NavLink to='/dashboard/reservations' className="bg-transparent"><FaCalendarAlt></FaCalendarAlt> Reservation</NavLink></li>
                    <li><NavLink to='/dashboard/history' className="bg-transparent"><FaWallet></FaWallet> Payment History</NavLink></li>
                    <li><NavLink className="bg-transparent" to='/dashboard/mycart'>
                        {/* <div> */}
                            <FaCartPlus className="text-lg"></FaCartPlus>
                            <span className="-ml-4 text-black text-base font-extrabold -mt-2">{cart?.length || 0}</span>
                        {/* </div> */}
                        My Cart</NavLink></li>
                    <li><NavLink to='/dashboard/reviews' className="bg-transparent"><FaCommentDots></FaCommentDots> Add Review</NavLink></li>
                    <li><NavLink to='/dashboard/bookings' className="bg-transparent"><FaCalendarCheck></FaCalendarCheck> My Booking</NavLink></li>
                    <div className="divider bg-white h-[1px]"></div>

                    <li><NavLink className="bg-transparent" to='/home'><FaHome></FaHome> Home</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;