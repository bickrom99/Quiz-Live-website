import { FaAngleRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
const HeroSection = () => {
  return (
    <div
      className="mt-5 pt-16 dark:bg-black dark:text-white bg-[#E2E6E9]  p-3">
        <div className="sm:h-[80vh] sm:py-0 py-2 sm:max-w-4xl w-full mx-auto grid sm:grid-cols-6 grid-cols-5 gap-3 justify-between items-center">
          <div className="sm:col-span-4 col-span-3">
            <p className="font-poppins font-bold sm:text-4xl text-xl">Host Live Quizzes for <br/> Free on Quizizz</p>
            <p className="font-noto_font pt-2 sm:text-base text-sm">Host online quizzes live and interact with your <br/> participants in real time with Quizizz</p>

            {/* hero button */}
            <Link to="/admin">
            <button className="mt-4 sm:px-8 px-4 sm:py-3 py-2 bg-[#8854C0] hover:bg-[#7b44b5] text-white rounded text-sm font-roboto flex justify-center items-center border-b-4 border-[#6930a6] hover:border-none transition-all duration-75">
              Create a Quiz<FaAngleRight className="text-[1rem]" />
            </button>
            </Link>
          </div>
          <div className="col-span-2">
            <img className="sm:w-[300px] sm:h-[400px] h-[250px]" src="/images/hero-image.png" alt="" />
          </div>
        </div>
    </div>
  );
};

export default HeroSection;

  