import {Link} from 'react-router-dom';
import {FaAngleRight} from 'react-icons/fa6';

const HomeSection1 = () => {
    return (
        <div className="max-w-3xl mx-auto mt-6">
            <div className="text-center">
                <h3 className="font-poppins font-semibold text-[1.5rem]">What are live quizzes?</h3>
                <p className="mt-2 font-poppins leading-7 text-base">
                    Live quizzes are quizzes   that are conducted in real time, either in person or via the internet. They’re perfectly suited for boosting motivation in a classroom, as they offer a quick and interactive way to engage students. </p>
                <p className="mt-5 font-poppins leading-7 text-base">
                    A live quiz can don many hats. It can take on the shape of a bell ringer, an entry or exit ticket, a revision activity, an ice breaker, or a formative assessment. Playing an online quiz live can offer an added benefit here. It enables you to experiment with multimedia, by adding audio-visual elements to captivate your students. 
                </p>
                <p className="mt-5 font-poppins leading-7 text-base">
                    An online live quizzing platform, like Quizizz, can also generate instant reports for you. Live quizzes partner real-time assessment with immediate feedback, so you can address learning gaps on the fly.
                </p>
                <Link to="/" className="inline-block items-center justify-center mt-7 mb-7">
                    <button className="px-8 py-3 bg-[#8854C0] hover:bg-[#7b44b5] text-white rounded text-sm font-roboto flex justify-center items-center border-b-4 border-[#6930a6] hover:border-none transition-all duration-75 ">
                    Create a Quiz<FaAngleRight className="text-[1rem]" />
                    </button>
                </Link>
            </div>

        </div>
    );
};

export default HomeSection1;