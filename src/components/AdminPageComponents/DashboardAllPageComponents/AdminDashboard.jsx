import { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
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
    const [search, setSearch] = useState('');
    const [quizData, setQuizData] = useState([]);
    const navigate = useNavigate();

    // Load all quizzes dynamically
    useEffect(() => {
        const loadQuizzes = async () => {
            const modules = [
                "/api/AdminMathCards/MathCard.json",
                "/api/AdminMathCards/EnglishCard.json",
                "/api/AdminMathCards/ChemistryCard.json",
            ];

            try {
                const allData = await Promise.all(
                    modules.map(async (module) => {
                        const response = await fetch(module);
                        if (!response.ok) throw new Error(`Failed to load ${module}`);
                        return response.json();
                    })
                );
                setQuizData(allData.flat()); // Combine all quiz data into one array
            } catch (error) {
                console.error("Error loading quiz data:", error);
            }
        };

        loadQuizzes();
    }, []);

    // Handle search submit
    const handleSubmit = (e) => {
        e.preventDefault();

        const matchedQuiz = quizData.find((quiz) =>
            quiz.title.toLowerCase().includes(search.toLowerCase())
        );

        if (matchedQuiz) {
            navigate(`/quizz/${matchedQuiz.title}`);
        } else {
            alert("No quiz found!");
        }
    };

    // Skills data
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
        <div className="sm:pl-5 pt-5 w-[90%] ml-auto">
            {/* Search Container */}
            <div className="m-auto flex flex-col justify-center items-center pt-10">
                <h2 className="text-2xl font-poppins font-semibold pb-6">What will you teach today?</h2>
                <form onSubmit={handleSubmit} className="sm:w-[55%] w-[80%] m-auto flex items-center shadow-md rounded">
                    <input
                        type="search"
                        placeholder="Search for activities on any topic"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="flex-grow py-3 px-3 rounded-l font-roboto outline-none placeholder:font-semibold placeholder:font-poppins dark:text-black"
                    />
                    <button type="submit" className="text-[#6D6D6D] bg-white px-4 py-4 rounded-r">
                        <FaArrowRight size={16} />
                    </button>
                </form>

                {/* Quiz Skills */}
                <div className="pt-10 sm:w-[60%] w-[75%] m-auto">
                    <ul className="grid grid-cols-4 gap-y-6 gap-x-4">
                        {skills.map((skill, index) => (
                            <li key={index} className="flex flex-col items-center text-center group">
                                <a
                                    href={skill.path}
                                    className="flex flex-col items-center justify-center space-y-2 transform transition-transform duration-300 group-hover:scale-110"
                                >
                                    <span className="h-14 w-14 text-2xl bg-[#e6e6e6] flex justify-center items-center rounded-full dark:text-black">
                                        {skill.icon}
                                    </span>
                                    <span className="text-xs font-base font-poppins break-words">{skill.name}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* All card here */}
                {/* Math card */}
                <div className="mt-10 flex flex-col sm:pl-0 pl-2">
                    {["Mathematics",].map((subject) => (
                        <div key={subject} className="flex flex-col w-[95%] m-auto mt-5">
                            <div className="flex flex-cols gap-3 items-center">
                                <FaStar className="text-yellow-500 text-xl" />
                                <h3 className="text-xl font-poppins font-semibold">{subject}</h3>
                            </div>

                            {/* Carousel */}
                            <div className="carousel carousel-center space-x-4 bg-neutral-100 dark:bg-[#333333] p-4 rounded-box">
                                {MathCard.map((quiz, index) => (
                                        <NavLink
                                            key={index}
                                            to={`/quizz/${quiz.title}`}
                                            className="carousel-item flex flex-col h-60 w-52 shadow rounded cursor-pointer bg-white dark:text-black hover:shadow-md transition-transform duration-200"
                                        >
                                            <img src={quiz.image} alt="image" className="h-32 w-full object-cover rounded-t" />
                                            <div className="p-2">
                                                <h3 className="font-medium text-sm font-poppins">{quiz.title}</h3>
                                                <div className="flex flex-cols justify-between pt-12">
                                                    <p className="text-xs font-poppins font-light">{quiz.view} views</p>
                                                    <p className="text-xs font-poppins font-light">{quiz.play} plays</p>
                                                </div>
                                            </div>
                                        </NavLink>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* English Quizz card section */}
                <div className="mt-10 flex flex-col sm:pl-0 pl-2">
                    {[ "English"].map((subject) => (
                        <div key={subject} className="flex flex-col w-[95%] m-auto mt-5">
                            <div className="flex flex-cols gap-3 items-center">
                                <FaStar className="text-yellow-500 text-xl" />
                                <h3 className="text-xl font-poppins font-semibold">{subject}</h3>
                            </div>

                            {/* Carousel */}
                            <div className="carousel carousel-center space-x-4 bg-neutral-100 dark:bg-[#333333] p-4 rounded-box">
                                {EnglishCardData.map((quiz, index) => (
                                        <NavLink
                                            key={index}
                                            to={`/quizz/${quiz.title}`}
                                            className="carousel-item flex flex-col h-60 w-52 shadow rounded cursor-pointer bg-white dark:text-black hover:shadow-md transition-transform duration-200"
                                        >
                                            <img src={quiz.image} alt="image" className="h-32 w-full object-cover rounded-t" />
                                            <div className="p-2">
                                                <h3 className="font-medium text-sm font-poppins">{quiz.title}</h3>
                                                <div className="flex flex-cols justify-between pt-12">
                                                    <p className="text-xs font-poppins font-light">{quiz.view} views</p>
                                                    <p className="text-xs font-poppins font-light">{quiz.play} plays</p>
                                                </div>
                                            </div>
                                        </NavLink>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Chemistry Quizz card section */}
                <div className="mt-10 flex flex-col sm:pl-0 pl-2">
                    {[ "Chemistry"].map((subject) => (
                        <div key={subject} className="flex flex-col w-[95%] m-auto mt-5">
                            <div className="flex flex-cols gap-3 items-center">
                                <FaStar className="text-yellow-500 text-xl" />
                                <h3 className="text-xl font-poppins font-semibold">{subject}</h3>
                            </div>

                            {/* Carousel */}
                            <div className="carousel carousel-center space-x-4 bg-neutral-100 dark:bg-[#333333] p-4 rounded-box">
                                {ChemistryCardData.map((quiz, index) => (
                                        <NavLink
                                            key={index}
                                            to={`/quizz/${quiz.title}`}
                                            className="carousel-item flex flex-col h-60 w-52 shadow rounded cursor-pointer bg-white dark:text-black hover:shadow-md transition-transform duration-200"
                                        >
                                            <img src={quiz.image} alt="image" className="h-32 w-full object-cover rounded-t" />
                                            <div className="p-2">
                                                <h3 className="font-medium text-sm font-poppins">{quiz.title}</h3>
                                                <div className="flex flex-cols justify-between pt-12">
                                                    <p className="text-xs font-poppins font-light">{quiz.view} views</p>
                                                    <p className="text-xs font-poppins font-light">{quiz.play} plays</p>
                                                </div>
                                            </div>
                                        </NavLink>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
        </div>
    );
};

export default AdminDashboard;
