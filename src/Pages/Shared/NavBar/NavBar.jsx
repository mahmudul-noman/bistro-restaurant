import { Link } from "react-router-dom";

const NavBar = () => {

    const navOptions = <>
        <div className="space-x-4">
            <Link className="uppercase text-yellow-500 font-extrabold" to='/'>Home</Link>
            <Link className="uppercase text-yellow-500 font-extrabold" to='/menu'>Our Menu</Link>
            <Link className="uppercase text-yellow-500 font-extrabold" to='/order/salad'>Order Food</Link>
        </div>
    </>

    return (
        <>
            <div className="navbar fixed py-5 z-10 bg-opacity-30 max-w-screen-xl text-white bg-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">BISTRO BOSS</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn btn-outline border-0 tracking-widest font-bold border-b-4 border-white text-white hover:text-yellow-600 rounded-[8px]">Login</button>

                </div>
            </div>
        </>
    );
};

export default NavBar;