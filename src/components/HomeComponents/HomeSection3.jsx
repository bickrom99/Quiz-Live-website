import HomeTestimonialData from "../../../public/api/HomeTestimonials.json";
const HomeSection3 = () => {
    return (
        <div className="mt-10 max-w-5xl mx-auto">
            <div className="font-poppins font-semibold text-[1.5rem] text-center underline pb-2">
            Testimonials</div>
            {/* all testimonials*/}
            <div className="grid grid-cols-3 gap-8 m-auto">
                {
                    HomeTestimonialData.map((data, index) => (
                        // Card start here
                        <div key={index} className="shadow rounded-lg hover:shadow-lg hover:transition-all hover:duration-150 hover:border-none cursor-pointer">
                            <div className="grid grid-cols-5 justify-center items-center p-2">
                                {/* image */}
                                <div className="inline-flex justify-center items-center col-span-2 text-center">
                                <img src={data.image} className="w-16 h-16 rounded-full" alt="all image" />
                                </div>
                                {/* all indentiry & riview */}
                                <div className="col-span-3">
                                    <h2>{data.name}</h2>
                                    <h4>{data.title}</h4>
                                    <p>{data.description}</p>
                                    <div>{data.review}</div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default HomeSection3;