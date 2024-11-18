/* eslint-disable react/prop-types */
import { FaMoon, FaSun } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';


const Navbar = ({toggleDarkMode, darkMode}) => {
    // Nav items
    const navItems = [
        { path: "/school", link: "For School"},
        { path: "/about", link: "About Us" },
        { path: "/course", link: "Course" },
        { path: "/contact", link: "Contact"},
        { path: "/business", link: "For Business"}

    ];

   

    return (
        <header className="bg-[#fffefe] dark:bg-gray-900 fixed top-0 left-0 right-0 shadow-[0_4px_8px_rgba(0,0,0,0.1)]">
            <nav className="max-w-6xl py-2 mx-auto flex justify-between items-center dark:bg-gray-900">
                
                {/* Logo with NavLink */}
                <NavLink to="/">
                    <img src={darkMode?"https://img.freepik.com/free-vector/hand-drawn-elementary-school-logo-design_23-2149667294.jpg":"/images/logo.png"} className="max-h-12 max-w-32" alt="Logo" />
                </NavLink>
                
                {/* Nav menu items */}
                <ul className="md:flex gap-6 text-base">
                    {navItems.map(({ path, link }, index) => (
                        <li key={index} className="font-poppins text-sm text-[#343434] dark:text-white">
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


                <div className="flex gap-4 justify-start items-center">
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
                        <NavLink to="/login" className="bg-[#f6f0ff] hover:bg-[#ede6f8] text-[#8854c0] font-noto_font py-2 px-3 text-sm text-center rounded-md">Login</NavLink>
                        <NavLink to="/signup" className="bg-[#8854c0] hover:bg-[#854fbe] font-noto_font text-white py-2 px-3 text-sm text-center rounded-md">Sign up</NavLink>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
