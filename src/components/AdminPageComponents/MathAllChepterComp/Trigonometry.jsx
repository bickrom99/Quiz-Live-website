/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

const Trigonometry = () => {
    const questions = [
        {
            id: 1,
            question: "01. What is the value of sin(90°)?",
            answer: "1",
            options: ["0", "1", "0.5", "Undefined"],
        },
        {
            id: 2,
            question: "02. What is the value of tan(45°)?",
            answer: "1",
            options: ["0", "1", "√2", "Undefined"],
        },
        {
            id: 3,
            question: "03. What is the reciprocal of sin(θ)?",
            answer: "cosec(θ)",
            options: ["cos(θ)", "tan(θ)", "cosec(θ)", "sec(θ)"],
        },
        {
            id: 4,
            question: "04. What is the value of cos(0°)?",
            answer: "1",
            options: ["0", "1", "Undefined", "-1"],
        },
        {
            id: 5,
            question: "05. Which trigonometric identity is correct?",
            answer: "sin²(θ) + cos²(θ) = 1",
            options: [
                "sin(θ) + cos(θ) = 1",
                "sin²(θ) + cos²(θ) = 1",
                "tan²(θ) + sec²(θ) = 1",
                "cot²(θ) + 1 = sin²(θ)",
            ],
        },
    ];

    const [selectedOptions, setSelectedOptions] = useState(Array(questions.length).fill(null));
    const [highlightedAnswers, setHighlightedAnswers] = useState({});
    const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
    const [results, setResults] = useState({ score: 0, fail: 0, completed: false });

    const resultRef = useRef(null);

    useEffect(() => {
        if (timeLeft > 0 && !results.completed) {
            const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
            return () => clearInterval(timer);
        } else if (timeLeft === 0) {
            calculateResults();
        }
    }, [timeLeft, results.completed]);

    const handleOptionClick = (questionIndex, optionIndex) => {
        if (results.completed) return;

        const updatedOptions = [...selectedOptions];
        updatedOptions[questionIndex] = optionIndex;
        setSelectedOptions(updatedOptions);
    };

    const calculateResults = () => {
        const correctAnswers = {};
        let score = 0;

        questions.forEach((question, index) => {
            const userAnswer = question.options[selectedOptions[index]];
            if (userAnswer === question.answer) {
                correctAnswers[index] = "correct";
                score += 1;
            } else {
                correctAnswers[index] = "incorrect";
            }
        });

        setHighlightedAnswers(correctAnswers);
        setResults({
            score,
            fail: questions.length - score,
            completed: true,
        });

        setTimeout(() => {
            resultRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 300);
    };

    const formatTime = (seconds) =>
        `${Math.floor(seconds / 60).toString().padStart(2, "0")}:${(seconds % 60).toString().padStart(2, "0")}`;

    return (
        <div className="w-[90%] m-auto">
            <div className="grid grid-cols-6 gap-5">
                {/* Quiz Section */}
                <div className="col-span-4 shadow p-4 text-center">
                    <h3 className="text-2xl font-poppins font-medium pt-5">Trigonometry</h3>
                    <p className="pt-3 font-poppins text-sm font-normal text-[#4c4c4c]">
                        {"Reach for the stars, because angles always lead to heights!"}
                    </p>
                    <h3 className="text-lg font-bold mt-3 font-poppins">
                        Time Left: <span className="text-red-500">{formatTime(timeLeft)}</span>
                    </h3>

                    {/* Questions */}
                    <div className="pt-8 flex flex-col gap-6">
                        {questions.map((q, questionIndex) => (
                            <div key={q.id} className="w-[90%] m-auto shadow rounded text-start px-5 py-3">
                                <h3 className="font-poppins font-semibold text-[14px] pb-3">{q.question}</h3>
                                <ul className="flex flex-col gap-4">
                                    {q.options.map((option, optionIndex) => {
                                        let bgColor = "";
                                        if (results.completed) {
                                            if (highlightedAnswers[questionIndex] === "correct" && option === q.answer) {
                                                bgColor = "bg-green-600";
                                            } else if (option === q.answer) {
                                                bgColor = "bg-green-600";
                                            } else if (selectedOptions[questionIndex] === optionIndex) {
                                                bgColor = "bg-red-500";
                                            }
                                        } else if (selectedOptions[questionIndex] === optionIndex) {
                                            bgColor = "bg-gray-400";
                                        }

                                        return (
                                            <li
                                                key={optionIndex}
                                                onClick={() => handleOptionClick(questionIndex, optionIndex)}
                                                className={`shadow rounded py-2 px-3 cursor-pointer ${bgColor} ${
                                                    bgColor && "text-white"
                                                }`}
                                            >
                                                <span className="font-semibold">{String.fromCharCode(65 + optionIndex)}.</span>{" "}
                                                {option}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="mt-5 flex justify-between w-[90%] m-auto">
                        <NavLink
                            to="/admin"
                            className="bg-[#f34949] text-white px-5 py-2 rounded font-medium font-poppins"
                        >
                            Back
                        </NavLink>
                        <button
                            onClick={calculateResults}
                            disabled={results.completed}
                            className="bg-green-600 text-white px-5 py-2 rounded font-medium font-poppins"
                        >
                            Submit
                        </button>
                    </div>
                </div>

                {/* Results Section */}
                <div className="col-span-2 shadow p-4">
                    <div className="w-[90%] m-auto" ref={resultRef}>
                        <h2 className="text-center font-poppins font-semibold text-xl">Time Counting</h2>
                        <div className="bg-[#4be9f4] text-white font-poppins text-lg w-full py-2 rounded mt-2 text-center">
                            {formatTime(timeLeft)}
                        </div>

                            {/* result show */}
                            <div className="flex flex-col">
                                <div className="mt-6">
                                    <h3 className="text-center text-xl font-semibold font-poppins pb-2">Result</h3>
                                    <div className="grid grid-cols-2 gap-10">
                                        <div>
                                            <h3 className="font-poppins font-normal">Correct:</h3>
                                            <div className="bg-green-500 text-white px-3 py-2 rounded text-center">
                                                {results.score}
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-poppins font-normal">Incorrect: </h3>
                                            <div className="bg-red-500 text-white px-3 py-2 rounded text-center">
                                            {results.fail}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* win or loss section */}
                                {
                                    results.completed &&(
                                        <div className="mt-5">
                                    {results.score >= 3 ? (
                                        <h2 className="text-green-600 text-xl font-semibold text-center">
                                            Congratulations! You nailed it! 🎉
                                        </h2>
                                    ) : (
                                        <h2 className="text-red-500 text-xl font-semibold text-center">
                                            Keep trying! You’re improving! 💪
                                        </h2>
                                    )}
                                </div>
                                    )
                                }
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trigonometry;
