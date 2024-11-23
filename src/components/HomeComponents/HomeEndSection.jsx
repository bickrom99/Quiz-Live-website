import {Link} from 'react-router-dom';
import {FaAngleRight} from 'react-icons/fa6';

const HomeEndSection = () => {
return (
        <div
        className="dark:bg-black dark:text-white bg-[#5D2057]">
            <div className="max-w-4xl mx-auto grid grid-cols-6 justify-between items-center pt-8 pb-8">
            <div className="col-span-3">
                <p className=" pt-2 text-[#e6e6e6] font-poppins">The best way to ask questions, explore ideas, and let students show what they know.</p>
                <p className="font-poppins font-semibold text-2xl pt-3 pb-3 text-white">Use Quizizz for free, interactive, and live quizzes</p>

                {/* hero button */}
                <Link to="/">
                <button className="mt-4 px-8 py-3 bg-[#fff] text-[#6930a6] rounded text-sm font-roboto flex justify-center items-center border-b-4 border-[#afafaf] hover:border-none transition-all duration-75">
                Sign up<FaAngleRight className="text-[1rem]" />
                </button>
                </Link>
            </div>
            <div className="col-span-3">
                <img className="w-[400px] h-[350px]" src="/images/homeImage/EndSection.png" alt="" />
            </div>
            </div>
        </div>
    );
};

export default HomeEndSection;

  