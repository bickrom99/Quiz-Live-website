import HomePackegeData from "../../../public/api/HomePackege.json";
const HomePackege = () => {
    return (
        <div className="bg-[#F8FAFC] pt-8 pb-8">
            <h2 className="font-poppins font-semibold text-[1.5rem] text-center pb-6">Packages</h2>

            <div className="max-w-5xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 m-auto">
                {
                    HomePackegeData.map((data, index) => (
                        <div key={index} className="shadow dark:bg-slate-700 hover:shadow-lg hover:transition-all hover:duration-150 hover:border-none cursor-pointer">
                            <div className="p-3 text-center" >
                                <h4>{data.title}</h4>
                                <p> <sup>$</sup> {data.price} <sub>{data.date}</sub></p>
                                <ul>
                                    <li>{data.des1}</li>
                                    <li>{data.des2}</li>
                                    <li>{data.des3}</li>
                                </ul>
                                <div className="text-center">
                                    <button className="bg-[#fcce36] py-1 px-4 font-poppins text-sm rounded shadow">Buy Now</button>
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