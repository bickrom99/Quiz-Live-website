import MentorData from "../../../public/api/HomeMentorsData.json"

const MentorSection = () => {
    return (
        <div className="pt-6 pb-6 bg-[#F8FAFC] dark:bg-[#252222]">
            <div className="max-w-5xl m-auto">
                <div className="font-poppins font-semibold text-[1.5rem] text-center pb-4">Honorable Mentors</div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-auto text-center">
                    {
                        MentorData.map((data, index) => (
                            <div key={index} className="shadow rounded-lg dark:bg-slate-700 hover:shadow-md hover:transition-all hover:duration-150 hover:border-none cursor-pointer">
                                <div className="p-2 pb-4">
                                    <img src={data.image} alt="Image here" className="h-[220px] w-full" />
                                    <div>
                                        <h4 className="text-lg font-semibold font-poppins pt-4">{data.name}</h4>
                                        <div className="leading-7">
                                            <p className="font-noto_font text-sm text-[#4B63D6]">{data.title}</p>
                                            <p className="font-roboto text-xs pt-2">{data.post}</p>
                                            <p className="font-poppins text-sm pt-2">{data.collage}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default MentorSection;