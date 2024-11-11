import HomePackegeData from "../../../public/api/HomePackege.json";
const HomePackege = () => {
    return (
        <div className="pt-8 pb-8">
            <h2 className="font-poppins font-semibold text-[1.5rem] text-center pb-6"> Our Packages</h2>

            <div className="max-w-5xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 m-auto">
                {
                    HomePackegeData.map((data, index) => (
                        <div key={index} className="shadow dark:bg-slate-700 hover:shadow-xl hover:transition-all hover:duration-150 hover:border-none cursor-pointer">
                            <div className="pl-3 pt-4 text-start" >
                                <h4 className="text-md font-semibold font-poppins pb-3">{data.title}</h4>
                                <p className="text-2xl font-semibold font-roboto"> <sup className="text-sm font-semibold font-roboto ">$</sup> {data.price} <sub className="text-sm">{data.date}</sub></p>
                                <ul className="text-start pt-2 pb-3 font-poppins text-sm font-normal leading-7">
                                    <li>{data.des1}</li>
                                    <li>{data.des2}</li>
                                    <li>{data.des3}</li>
                                </ul>
                                <div className="text-center mb-4">
                                    <button className="bg-[#fcce36] py-1 px-4 font-poppins text-sm rounded shadow hover:text-base hover:shadow-sm">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default HomePackege;