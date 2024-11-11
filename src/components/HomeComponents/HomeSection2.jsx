import {Link} from 'react-router-dom';
import {FaAngleRight} from 'react-icons/fa6';
import homepage from "../../../public/api/HomePageData.json";

const HomeSection2 = () => {
    return (
        <div className="bg-[#6acef5] dark:bg-[#333333]">
            <div className="max-w-3xl mx-auto">
                <h3 className="pt-8 text-center font-poppins font-semibold text-[1.5rem]">Build high-quality live quizzes
                </h3>
                <p className="mt-2 font-poppins leading-7 text-base">
                        LQuizizz enables you to create live quizzes that address your students’ learning needs as well as your administrative needs. With Quizizz, you can – 
                </p>
                            
                <div className="mt-5">
                    <div className="flex flex-col justify-between ">
                        {
                            homepage.map((data, index) => (
                                <div key={index} className="grid grid-cols-2 justify-between mb-4 ">
                                        <img className="h-44 w-72" src={data.image} alt="image" />
                                        <div className="font-poppins">
                                            <div className="text-[#5D2057] leading-7 text-xl font-medium">{data.title}</div>
                                            <div className="leading-7 text-base pt-4">{data.desciption}</div>
                                        </div>
                                </div>
                            ))}
                    </div>
                </div>
                
                <div className="text-center">
                <Link to="/" className="inline-block items-center justify-center mt-7 mb-7">
                    <button className="px-8 py-3 bg-[#8854C0] hover:bg-[#7b44b5] text-white rounded text-sm font-roboto flex justify-center items-center border-b-4 border-[#6930a6] hover:border-none transition-all duration-75 ">
                    Create a Quiz<FaAngleRight className="text-[1rem]" />
                    </button>
                </Link>
                </div>
            </div>
        </div>
    );
};

export default HomeSection2;