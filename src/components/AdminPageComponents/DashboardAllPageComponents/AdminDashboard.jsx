import { NavLink } from 'react-router-dom';

import {
    FaArrowRight,
    FaAtom,
    FaBook,
    FaCode,
    FaDesktop,
    FaFlask,
    FaKeyboard,
    FaSquareRootAlt,
    FaStar,
    FaWordpress
} from "react-icons/fa";
import ChemistryCardData from '../../../../public/api/AdminMathCards/ChemistryCard.json';
import EnglishCardData from "../../../../public/api/AdminMathCards/EnglishCard.json";
import MathCard from "../../../../public/api/AdminMathCards/MathCard.json";


const AdminDashboard = () => {
    

    // Skills
    const skills = [
        { name: "Math", path: "#", icon: <FaSquareRootAlt /> },
        { name: "English", path: "#", icon: <FaBook /> },
        { name: "Chemistry", path: "#", icon: <FaFlask /> },
        { name: "Physics", path: "#", icon: <FaAtom /> },
        { name: "Basic Computer", path: "#", icon: <FaKeyboard /> },
        { name: "Advanced Computer", path: "#", icon: <FaDesktop /> },
        { name: "Web Development", path: "#", icon: <FaCode /> },
        { name: "WordPress Skill", path: "#", icon: <FaWordpress /> },
    ];

    return (
        <div className="pl-5 pt-5"> 
            {/* ====First container with search bar=== */}
            <div className="m-auto flex flex-col justify-center items-center pt-10">
                <h2 className="text-2xl font-poppins font-semibold pb-6">What will you teach today?</h2>
                {/* Search any Quizz */}
                <div className="w-[55%] m-auto flex items-center shadow-md rounded">
                    <input 
                        type="search" 
                        placeholder="Search for activities on any topic" 
                        className="flex-grow py-3 px-3 rounded-l font-roboto outline-none placeholder:font-semibold placeholder:font-poppins"
                    />
                    <button className="text-[#6D6D6D] bg-white px-4 py-4 rounded-r">
                        <FaArrowRight size={16} />
                    </button>
                </div>

                {/* Quizze item icon */}
                <div className="pt-10 w-[60%] m-auto">
                    <ul className="grid grid-cols-4 gap-y-6 gap-x-4">
                        {skills.map((skill, index) => (
                            <li key={index} className="flex flex-col items-center text-center group">
                                <a 
                                    href={skill.path} 
                                    className="flex flex-col items-center justify-center space-y-2  transform transition-transform duration-300 group-hover:scale-110"
                                >
                                    <span className="h-14 w-14 text-2xl bg-[#e6e6e6] flex justify-center items-center rounded-full ">
                                        {skill.icon}
                                    </span>
                                    <span className="text-xs font-base font-poppins break-words">
                                        {skill.name}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>




            {/* =====Template container with quiz game====== */}
            <div className="mt-10 flex flex-col">
                {/* Mathematics section */}
                <div className="flex flex-col w-[95%] m-auto">
                <div className="flex flex-cols gap-3 items-center">
                    <FaStar className="text-yellow-500 text-xl" />
                    <h3 className="text-xl font-poppins font-semibold">Mathematics</h3>
                </div>

                {/* Carousel */}
                <div className="carousel carousel-center  space-x-4 bg-neutral-100 p-4 rounded-box">
                    {MathCard.map((mathdata, index) => (
                        <NavLink
                            key={index}
                            to={`/quizz/${mathdata.title}`} 
                            className="carousel-item flex flex-col h-60 w-52 shadow rounded cursor-pointer bg-white hover:shadow-md transition-transform duration-200"
                        >
                            <img src={mathdata.image} alt="image" className="h-32 w-full object-cover rounded-t" />
                            <div className="p-2">
                                <h3 className="font-medium text-sm font-poppins">{mathdata.title}</h3>
                                <div className="flex flex-cols justify-between pt-12">
                                    <p className="text-xs font-poppins font-light">{mathdata.view} views</p>
                                    <p className="text-xs font-poppins font-light">{mathdata.play} plays</p>
                                </div>
                            </div>
                        </NavLink>
                    ))}
                </div>
                </div>
                
                {/* English section */}
                <div className="flex flex-col w-[95%] m-auto mt-5">
                    <div className="flex flex-cols gap-3 items-center">
                        <FaStar className="text-yellow-500 text-xl" />
                        <h3 className="text-xl font-poppins font-semibold">English</h3>
                    </div>

                    {/* Carousel */}
                    <div className="carousel carousel-center  space-x-4 bg-neutral-100 p-4 rounded-box">
                        {EnglishCardData.map((Englishdata, index) => (
                            <NavLink
                                to={`/quizz/${Englishdata.title}`}
                                key={index}
                                className="carousel-item flex flex-col h-60 w-52 shadow rounded cursor-pointer bg-white hover:shadow-md transition-transform duration-200"
                            >
                                <img src={Englishdata.image} alt="image" className="h-32 w-full object-cover rounded-t" />
                                <div className="p-2">
                                    <h3 className="font-medium text-sm font-poppins">{Englishdata.title}</h3>
                                    <div className="flex flex-cols justify-between pt-12">
                                        <p className="text-xs font-poppins font-light">{Englishdata.view} views</p>
                                        <p className="text-xs font-poppins font-light">{Englishdata.play} plays</p>
                                    </div>
                                </div>
                            </NavLink>
                        ))}
                    </div>
                </div>

                {/* Chemistry section */}
                <div className="flex flex-col w-[95%] m-auto mt-5">
                    <div className="flex flex-cols gap-3 items-center">
                        <FaStar className="text-yellow-500 text-xl" />
                        <h3 className="text-xl font-poppins font-semibold">Chemistry</h3>
                    </div>

                    {/* Carousel */}
                    <div className="carousel carousel-center  space-x-4 bg-neutral-100 p-4 rounded-box">
                        {ChemistryCardData.map((Chemistrydata, index) => (
                            <NavLink
                                to={`/quizz/${Chemistrydata.title}`}
                                key={index}
                                className="carousel-item flex flex-col h-60 w-52 shadow rounded cursor-pointer bg-white hover:shadow-md transition-transform duration-200"
                            >
                                <img src={Chemistrydata.image} alt="image" className="h-32 w-full object-cover rounded-t" />
                                <div className="p-2">
                                    <h3 className="font-medium text-sm font-poppins">{Chemistrydata.title}</h3>
                                    <div className="flex flex-cols justify-between pt-12">
                                        <p className="text-xs font-poppins font-light">{Chemistrydata.view} views</p>
                                        <p className="text-xs font-poppins font-light">{Chemistrydata.play} plays</p>
                                    </div>
                                </div>
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AdminDashboard;
