import { useState } from 'react';
import HomeTestimonialData from "../../../public/api/HomeTestimonials.json";
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6"; // Import FaArrowUpLong

const HomeSection3 = () => {
    const [showAll, setShowAll] = useState(false); // State to toggle between showing 8 or all testimonials

    // Determine how many testimonials to show based on the showAll state
    const testimonialsToShow = showAll ? HomeTestimonialData : HomeTestimonialData.slice(0, 8);

    return (
        <div className="mt-5 pt-8 pb-10 dark:bg-[#0f0f0f]">
            <div className="max-w-5xl mx-auto">
            <div className="font-poppins font-semibold text-[1.5rem] text-center">
                Testimonials
            </div>

            <div className="text-center text-xl font-roboto pb-12">
                See what people are saying about our website
            </div>

            {/* Render testimonials in a grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-auto">
                {testimonialsToShow.map((data, index) => (
                    <div key={index} className="shadow rounded-lg dark:bg-slate-700 hover:shadow-lg hover:transition-all hover:duration-150 hover:border-none cursor-pointer">
                        <div className="p-3">
                            {/* Image and Identity */}
                            <div className="flex flex-row gap-4 justify-start items-center pb-4">
                                <img src={data.image} className="w-12 h-12 rounded-full shadow-md" alt="profile" />
                                <div>
                                    <h2 className="text-lg font-roboto dark:text-[#e1e1e1]">{data.name}</h2>
                                    <h4 className="text-xs font-noto_font text-[#4b42c5]">{data.title}</h4>
                                    <div className="text-sm">({data.review}) {data.rating}</div>
                                </div>
                            </div>
                            {/* Description */}
                            <div>
                                <p className="text-xs font-poppins dark:text-[#b3b3b3] text-gray-600 pb-3">{data.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Toggle button for 'More' and 'Less' */}
            <div className="flex justify-center mt-6">
                <button
                    onClick={() => setShowAll(!showAll)}
                    className="flex items-center justify-center shadow shadow-slate-200 border-[1.3px] border-gray-300 rounded-xl py-2 px-5 font-roboto font-medium text-xs hover:shadow-lg hover:border-[#4d43db] hover:text-sm hover:transition-all hover:transform hover:duration-300"
                >
                    {showAll ? (
                        <>
                            Show Less<FaArrowUpLong className="ml-1 text-[12px] hover:text-sm" />
                        </>
                    ) : (
                        <>
                            Show More<FaArrowDownLong className="ml-1 text-[12px] hover:text-sm" />
                        </>
                    )}
                </button>
            </div>
            </div>
        </div>
    );
};

export default HomeSection3;
