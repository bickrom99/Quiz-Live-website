/* eslint-disable react/prop-types */
import { FaMoon, FaSun } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const Navbar = ({toggleDarkMode, darkMode}) => {
    // Nav items
    const navItems = [
        { path: "/", link: "Home" },
        { path: "/about", link: "About Us" },
        { path: "/course", link: "Course" },
        { path: "/contact", link: "Contact" }
    ];

   

    return (
        <header className="bg-[#fffefe] dark:bg-gray-900 fixed top-0 left-0 right-0 shadow-[0_4px_8px_rgba(0,0,0,0.1)]">
            <nav className="max-w-6xl py-2 mx-auto flex justify-between items-center dark:bg-gray-900">
                
                {/* Logo with NavLink */}
                <NavLink to="/">
                    <img src={darkMode?"https://img.freepik.com/free-vector/hand-drawn-elementary-school-logo-design_23-2149667294.jpg":"/public/images/logo.png"} className="max-h-12 max-w-32" alt="Logo" />
                </NavLink>
                
                {/* Nav menu items */}
                <ul className="md:flex gap-8 text-base">
                    {navItems.map(({ path, link }, index) => (
                        <li key={index} className="font-poppins font-medium text-[#343434] dark:text-white">
                            <NavLink
                                to={path}
                                className={({isActive, isPending}) => 
                                    isActive? "active": isPending? "panding": ""
                                }
                            >
                                {link}
                            </NavLink>
                        </li>
                    ))}
                </ul>


                {/* Dark-light Button */}
                <button
                    onClick={toggleDarkMode}
                    className="p-2 rounded-full text-xl"
                    aria-label="Toggle Dark Mode"
                    >
                    {darkMode ? <FaSun /> : <FaMoon />}
                </button>
            </nav>
        </header>
    );
};

export default Navbar;
