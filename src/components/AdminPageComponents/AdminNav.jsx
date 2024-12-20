/* eslint-disable react/prop-types */
import { useState } from 'react';
import { signOut as firebaseSignOut } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../AuthFirebase/firebase";

// Fa6 Icons
import { FaCirclePlus, FaMoon, FaSun } from "react-icons/fa6";

// Fa Icons
import {
    FaBars,
    FaBook,
    FaChalkboardTeacher,
    FaChartBar,
    FaCog,
    FaCompass,
    FaQuestion,
    FaSignOutAlt,
    FaThLarge,
    FaUser,
    FaWindowClose
} from "react-icons/fa";

const AdminNav = ({ toggleDarkMode, darkMode }) => {
    const navigate = useNavigate(); // Navigation hook for redirecting

    const [navShow, setNavShow] = useState(false); // navbar visibility

    // Nav items
    const navItems = [
        { path: "/admin", link: "Explore", icon: <FaCompass /> },
        { path: "/library", link: "My Library", icon: <FaBook /> },
        { path: "/quizz/QuizzAll", link: "Quizz All", icon: <FaQuestion /> },
        { path: "/report", link: "Reports", icon: <FaChartBar /> },
        { path: "/classes", link: "Classes", icon: <FaChalkboardTeacher /> },
        { path: "/collections", link: "Collections", icon: <FaThLarge /> },
        { path: "/setting", link: "Settings", icon: <FaCog /> },
        { path: "/profile", link: "Profile", icon: <FaUser /> },
        { path: "/", link: "Logout", icon: <FaSignOutAlt /> },
    ];

    // Sign Out handler
    const handleSignOut = (e) => {
        e.preventDefault();
        firebaseSignOut(auth)
            .then(() => {
                console.log("Sign out successful");
                navigate("/login"); // Redirect to login page
            })
            .catch((error) => {
                console.error("Error signing out:", error.message);
            });
    };

    // Toggle navbar visibility
    const toggleNav = () => {
        setNavShow((prev) => !prev); 
    };

    // Close the nav when a link is clicked
    const handleNavLinkClick = () => {
        setNavShow(false);
    };

    return (
        <div className="flex flex-col w-full m-auto">
            {/* Admin Navbar */}
            <div
                className={`sm:w-[15%] z-10 bg-[#fffefe] dark:bg-gray-900 fixed top-0 left-0 bottom-0 shadow-md sm:mt-0 mt-12 pl-4 pt-4 pr-4 transition-transform duration-300 sm:translate-x-0 ${
                    navShow ? "transform translate-x-0" : "transform -translate-x-full"
                }`}
            >
                <div>
                    <img src="/images/logo.png" alt="logo" className="w-32" />

                    {/* UserName */}
                    <div className="pt-2 pl-1">
                        <a href="#" className="font-poppins font-medium text-sm">Bickrom Sen</a>
                        <p className="bg-[#e8e8e8c8] sm:w-[60%] w-[70%] text-[11px] mt-2 text-center rounded font-poppins">Basic Account</p>
                    </div>
                    {/* Upgrade button */}
                    <button className="bg-[#FFF4D6] text-yellow-600 w-[90%] m-auto mt-4 py-1 font-medium font-poppins rounded-2xl text-[11px]">Upgrade Now</button>
                    {/* Create Quiz */}
                    <button className="mt-4 px-8 py-2 w-[100%] m-auto bg-[#8854C0] hover:bg-[#7b44b5] text-white rounded text-sm font-roboto flex justify-center gap-2 items-center border-b-4 border-[#6930a6] hover:border-none transition-all duration-75">
                        <FaCirclePlus /> Create
                    </button>
                </div>

                {/* Navigation */}
                <div>
                    <ul className="mt-6 space-y-4">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <NavLink
                                    to={item.path}
                                    className="flex items-center gap-3 text-sm font-medium font-roboto text-gray-800 dark:text-gray-200 hover:text-purple-600"
                                    onClick={handleNavLinkClick}
                                >
                                    {item.icon}
                                    {item.link}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Top Navbar */}
            <div className="bg-[#fffefe] sm:w-[85%] w-full grid grid-cols-5 justify-between dark:bg-gray-900 fixed top-0 right-0 border-b dark:border-b-[#111827] border-s dark:border-s-[#111827] pt-3 pb-3 pl-3 z-10">
                <div className="col-span-4 sm:block hidden bg-[#F2F2F2] text-black pt-[5px]">
                    <input
                        className="bg-[#F2F2F2] outline-none text-black placeholder:text-[#717171] rounded w-[90%] pl-4 text-sm font-roboto"
                        type="search"
                        placeholder="Search in Quizz"
                    />
                    <button className="w-[10%] border-s border-gray-700 font-roboto">Search</button>
                </div>
                {/* Light/Dark toggle and Logout */}
                <div className="flex gap-4 sm:justify-end justify-between items-center pr-5 sm:col-span-1 col-span-6">
                    <div className="md:hidden">
                        <button onClick={toggleNav}>
                            {navShow ? (
                                <FaWindowClose className="text-lg" />
                            ) : (
                                <FaBars className="text-lg" />
                            )}
                        </button>
                    </div>

                    <div className="flex items-center justify-center">
                        {/* Dark-light toggle */}
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-full text-xl"
                            aria-label="Toggle Dark Mode"
                        >
                            {darkMode ? <FaSun /> : <FaMoon />}
                        </button>

                        {/* Logout */}
                        <button
                            onClick={handleSignOut}
                            className="bg-[#f6f0ff] hover:bg-[#ede6f8] text-[#8854c0] font-noto_font py-2 px-3 text-sm text-center rounded-md"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminNav;
