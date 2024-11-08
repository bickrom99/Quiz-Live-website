import {Link} from 'react-router-dom';
import {FaAngleRight} from 'react-icons/fa6';
const HeroSection = () => {
  return (
    <div
      className="mt-16 dark:bg-black dark:text-white bg-[#E2E6E9]">
        <div className="h-[80vh] max-w-4xl mx-auto grid grid-cols-6 justify-between items-center">
          <div className="col-span-4">
            <p className="font-poppins font-bold text-4xl">Host Live Quizzes for <br/> Free on Quizizz</p>
            <p className="font-noto_font pt-2">Host online quizzes live and interact with your <br/> participants in real time with Quizizz</p>

            {/* hero button */}
            <Link to="/">
            <button className="mt-4 px-8 py-3 bg-[#8854C0] hover:bg-[#7b44b5] text-white rounded text-sm font-roboto flex justify-center items-center border-b-4 border-[#6930a6] hover:border-none transition-all duration-75">
              Create a Quiz<FaAngleRight className="text-[1rem]" />
            </button>
            </Link>
          </div>
          <div className="col-span-2">
            <img className="w-[300px] h-[400px]" src="/images/hero-image.png" alt="" />
          </div>
        </div>
    </div>
  );
};

export default HeroSection;

  