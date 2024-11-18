/* eslint-disable react/prop-types */
// Fa6 Icon here
import { FaMoon,
        FaSun,
        FaCirclePlus,
    } from "react-icons/fa6";

// Fa Icon
import { 
    FaCompass,
    FaBook,
    FaQuestion,
    FaChartBar,
    FaChalkboardTeacher,
    FaThLarge,
    FaCog,
    FaUser,
    FaSignOutAlt

    } from "react-icons/fa";



import {NavLink} from "react-router-dom";



const AdminNav = ({toggleDarkMode, darkMode}) => {
                //Admin NavItems here
     // Nav items
    const navItems = [
        { path: "/admin", link: "Explore" , icon: <FaCompass/>},
        { path: "/library", link: "My Library", icon: <FaBook/> },
        { path: "/quizz", link: "Quizz All", icon: <FaQuestion/> },
        { path: "/report", link: "Reports", icon: <FaChartBar/>},
        { path: "/classes", link: "Classes", icon: <FaChalkboardTeacher/>},
        { path: "/collections", link: "Collections", icon: <FaThLarge/>},
        { path: "/setting", link: "Settings", icon: <FaCog/>},
        { path: "/profile", link: "Profile", icon: <FaUser/>},
        { path: "/", link: "Logout", icon: <FaSignOutAlt/>},


    ];

    return (
        <div className="flex flex-col w-full m-auto">
            {/* Admin Navbar */}
            <div className="w-[15%] bg-[#fffefe] dark:bg-gray-900 fixed top-0 left-0 bottom-0 shadow-[0_1px_8px_rgba(0,0,0,0.1)] pl-4 pt-4 pr-4">
                <div>
                    <img src="/public/images/logo.png" alt="logo" className="w-32" />

                    {/* UserName */}
                    <div className="pt-2 pl-1">
                        <a href="#" className="font-poppins font-medium text-sm">Bickrom Sen</a>
                        <p className="bg-[#e8e8e8c8] w-[60%] text-[11px] mt-2 text-center rounded font-poppins">Bacis Account</p>
                    </div>
                    {/* Update botton */}
                    <button className="bg-[#FFF4D6] text-yellow-600 w-[90%] m-auto mt-4 py-1 font-medium font-poppins rounded-2xl text-[11px]">Upgrade Now</button>
                    {/* Create Quizze */}

                    <button className="mt-4 px-8 py-2 w-[100%] m-auto bg-[#8854C0] hover:bg-[#7b44b5] text-white rounded text-sm font-roboto flex justify-center gap-2 items-center border-b-4 border-[#6930a6] hover:border-none transition-all duration-75"><FaCirclePlus /> Create</button>
                </div>
                

                {/* All Tab Page */}
                <div>
                <ul className="mt-6 space-y-4">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <NavLink
                                    to={item.path}
                                    className="flex items-center gap-3 text-sm font-medium font-roboto text-gray-800 dark:text-gray-200 hover:text-purple-600"
                                    activeClassName="text-purple-600 font-semibold"
                                >
                                    {item.icon}
                                    {item.link}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>




            {/* Second Navbar */}
            <div className="bg-[#fffefe] w-[85%] grid grid-cols-5 justify-between dark:bg-gray-900 fixed top-0 right-0 border-b border-s pt-3 pb-3 pl-3">
                <div className="col-span-4 bg-[#F2F2F2] text-black pt-[5px]">
                    <input 
                    className="bg-[#F2F2F2] outline-none text-black placeholder:text-[#717171] rounded w-[90%] pl-4 text-sm font-roboto "
                    type="search"
                    placeholder="Search in Quizz"
                    />
                    <button className="w-[10%] border-s border-gray-700 font-roboto">Search</button>
                </div>


                {/* =======Ligh, Dark and Logout Button here============ */}
                <div className="flex gap-4 justify-end pr-5 col-span-1">
                                        {/* Dark-light toggle button */}
                    <button
                        onClick={toggleDarkMode}
                        className="p-2 rounded-full text-xl"
                        aria-label="Toggle Dark Mode"
                        >
                        {darkMode ? <FaSun /> : <FaMoon />}
                    </button>

                    {/* Sign in & Sign Out */}
                    <div className="flex gap-3">
                        <NavLink to="/" className="bg-[#f6f0ff] hover:bg-[#ede6f8] text-[#8854c0] font-noto_font py-2 px-3 text-sm text-center rounded-md">Logout</NavLink>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AdminNav;
