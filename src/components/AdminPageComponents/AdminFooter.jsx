import { FaFacebook, FaTwitter, FaYoutube, FaPinterest, FaTelegram } from "react-icons/fa6";
const AdminFooter = () => {
    return (
        <div className="bg-[#FFFEFE]  max-w-[67rem] ml-auto mt-4 p-4">
            <div className="grid grid-cols-5 justify-between pt-10 pb-8 gap-10">
                <div className="col-span-2">
                    <a href="/">
                        <img className="max-h-16 max-w-40 pb-2" src="/images/logo.png" alt="" />
                    </a>
                    <div className="text-[15px] font-roboto font-medium ml-2 pb-1">Gmail: <a href="/">liveQuizz@gmail.com</a></div>
                    <div className="text-[15px] font-roboto font-medium ml-2 pb-1">Phone: <a href="/">+8801518993773</a></div>
                    <div className="text-[15px] font-roboto font-medium ml-2 pb-1">Location: Rangpur,Dhaka,Bangladesh</div>
                </div>
                <div className="col-span-1">
                    <h3 className="text-lg font-semibold text-gray-800 pb-2">Our Service</h3>
                    <ul className="flex flex-col">
                        <a href="/" className="font-roboto text-sm font-medium transition-all transform duration-300 ease-in-out pb-1 hover:text-[#5165d3]">The Quizizz Blog</a>
                        <a href="/" className="font-roboto text-sm font-medium transition-all transform duration-300 ease-in-out pb-1 hover:text-[#5165d3]">Teacher Resources</a>
                        <a href="/" className="font-roboto text-sm font-medium transition-all transform duration-300 ease-in-out pb-1 hover:text-[#5165d3]">State Test Prep</a>
                        <a href="/" className="font-roboto text-sm font-medium transition-all transform duration-300 ease-in-out pb-1 hover:text-[#5165d3]">Teacher Panel</a>
                        <a href="/" className="font-roboto text-sm font-medium transition-all transform duration-300 ease-in-out pb-1 hover:text-[#5165d3]" >IQAPS</a>
                    </ul>
                </div>
                <div className="col-span-1">
                    <h3 className="text-lg font-semibold text-gray-800 pb-2">Our Service</h3>
                    <ul className="flex flex-col">
                        <a href="/" className="font-roboto text-sm font-medium transition-all transform duration-300 ease-in-out pb-1 hover:text-[#5165d3]">Worksheets</a>
                        <a href="/" className="font-roboto text-sm font-medium transition-all transform duration-300 ease-in-out pb-1 hover:text-[#5165d3]">Reseller Program</a>
                        <a href="/" className="font-roboto text-sm font-medium transition-all transform duration-300 ease-in-out pb-1 hover:text-[#5165d3]">Privacy Policy</a>
                        <a href="/" className="font-roboto text-sm font-medium transition-all transform duration-300 ease-in-out pb-1 hover:text-[#5165d3]">Privacy Center</a>
                        <a href="/" className="font-roboto text-sm font-medium transition-all transform duration-300 ease-in-out pb-1 hover:text-[#5165d3]" >Careers</a>
                    </ul>
                </div>
                <div className="col-span-1 flex flex-col justify-center items-center ">
                    <a href="/"><img src="/images/GooglePlay.jpg" className="h-12 mb-5" alt="" /></a>
                    <a href="/"><img src="/images/AppStore.jpg" className="h-12" alt="" /></a>
                </div>
            </div>
            <div className="max-w-6xl m-auto border-s">
                <div className="border border-[#c5c4c4]"></div>
                <div className="flex flex-row justify-between pt-3 pb-4">
                    <div className="font-roboto font-normal text-base">
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

export default AdminFooter;