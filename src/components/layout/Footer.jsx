import { FaFacebook, FaPinterest, FaTelegram, FaTwitter, FaYoutube } from "react-icons/fa6";
const Footer = () => {
    return (
        <div className="bg-[#eeeeee] dark:bg-[#111827]">
            <div className="grid sm:grid-cols-5 grid-cols-1 justify-between max-w-6xl m-auto py-8 gap-10 sm:pl-0 pl-5">
                <div className="sm:col-span-2">
                    <a href="/">
                        <img className="max-h-16 max-w-40 pb-2" src="/images/logo.png" alt="" />
                    </a>
                    <div className="text-[15px] font-roboto font-medium dark:text-[#e4e4e4] ml-2 pb-1">Gmail: <a href="/">liveQuizz@gmail.com</a></div>
                    <div className="text-[15px] font-roboto font-medium dark:text-[#e4e4e4] ml-2 pb-1">Phone: <a href="/">+8801518993773</a></div>
                    <div className="text-[15px] font-roboto font-medium dark:text-[#e4e4e4] ml-2 pb-1">Location: Rangpur,Dhaka,Bangladesh</div>
                </div>
                <div className="sm:col-span-1">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white pb-2">Our Service</h3>
                    <ul className="flex flex-col dark:text-[#e4e4e4]">
                        <a href="/" className="font-roboto text-sm font-medium transition-all transform duration-300 ease-in-out pb-1 hover:text-[#5165d3]">The Quizizz Blog</a>
                        <a href="/" className="font-roboto text-sm font-medium transition-all transform duration-300 ease-in-out pb-1 hover:text-[#5165d3]">Teacher Resources</a>
                        <a href="/" className="font-roboto text-sm font-medium transition-all transform duration-300 ease-in-out pb-1 hover:text-[#5165d3]">State Test Prep</a>
                        <a href="/" className="font-roboto text-sm font-medium transition-all transform duration-300 ease-in-out pb-1 hover:text-[#5165d3]">Teacher Panel</a>
                        <a href="/" className="font-roboto text-sm font-medium transition-all transform duration-300 ease-in-out pb-1 hover:text-[#5165d3]" >IQAPS</a>
                    </ul>
                </div>
                <div className="sm:col-span-1">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white pb-2">Our Service</h3>
                    <ul className="flex flex-col dark:text-[#e4e4e4]">
                        <a href="/" className="font-roboto text-sm font-medium transition-all transform duration-300 ease-in-out pb-1 hover:text-[#5165d3]">Worksheets</a>
                        <a href="/" className="font-roboto text-sm font-medium transition-all transform duration-300 ease-in-out pb-1 hover:text-[#5165d3]">Reseller Program</a>
                        <a href="/" className="font-roboto text-sm font-medium transition-all transform duration-300 ease-in-out pb-1 hover:text-[#5165d3]">Privacy Policy</a>
                        <a href="/" className="font-roboto text-sm font-medium transition-all transform duration-300 ease-in-out pb-1 hover:text-[#5165d3]">Privacy Center</a>
                        <a href="/" className="font-roboto text-sm font-medium transition-all transform duration-300 ease-in-out pb-1 hover:text-[#5165d3]" >Careers</a>
                    </ul>
                </div>
                <div className="sm:col-span-1 flex sm:flex-col flex-row gap-8 justify-center items-center">
                    <a href="/"><img src="/images/GooglePlay.jpg" className="h-12 sm:mb-5" alt="" /></a>
                    <a href="/"><img src="/images/AppStore.jpg" className="h-12" alt="" /></a>
                </div>
            </div>
            <div className="sm:max-w-6xl w-full m-auto  sm:px-0 px-3">
                <div className="border border-[#c5c4c4]"></div>
                <div className="flex sm:flex-row flex-col justify-between items-center pt-3 pb-4">
                    <div className="font-roboto font-normal text-base sm:text-start text-center sm:pb-0 pb-3">
                        © Copyright 2024 | All Rights Reserved | Powered by <a href="" className="text-purple-600 underline">Bickrom99</a>
                    </div>
                    <div className="flex flex-row gap-5">
                        <a href="/"><FaFacebook className="text-2xl"/></a>
                        <a href="/"><FaTwitter className="text-2xl"/></a>
                        <a href="/"><FaYoutube className="text-2xl"/></a>
                        <a href="/"><FaPinterest className="text-2xl"/></a>
                        <a href="/"><FaTelegram className="text-2xl"/></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;