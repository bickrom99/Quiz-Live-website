import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import HomeFaqs from '../../../public/api/HomeFaq.json';

const HomeFaqSection = () => {
    const [openFaq, setOpenFaq] = useState(null); 

    // Toggle function for showing/hiding FAQ answers
    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };
    return (
        <div className="bg-[#F8FAFC] dark:bg-[#333333]">
            <div className="max-w-4xl m-auto pb-8">
                <div className="font-poppins font-semibold text-[1.5rem] text-center pt-5 pb-5">
                    FAQ'S
                </div>

                <div className="sm:p-0 p-3">
                    {/* FAQ list */}
                    {HomeFaqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-300 py-4">
                            <div
                                className="flex justify-between items-center cursor-pointer"
                                onClick={() => toggleFaq(index)}
                            >
                                <h3 className="font-medium text-lg font-poppins">{faq.question}</h3>
                                {openFaq === index ? <FaChevronUp /> : <FaChevronDown />}
                            </div>

                            {/* Answer with transition */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out transform ${
                                    openFaq === index ? "max-h-screen opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"
                                }`}
                            >
                                <p className="mt-2 text-gray-600 font-poppins font-normal text-sm">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeFaqSection;
