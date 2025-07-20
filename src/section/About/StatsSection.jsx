import React from "react";
import {
    FaUserCheck,
    FaCalendarCheck,
    FaThumbsUp,
    FaStar,
} from "react-icons/fa";

const stats = [
    {
        icon: <FaUserCheck className="text-3xl text-green-500" />,
        value: "1000+",
        label: "Patients Treated",
    },
    {
        icon: <FaCalendarCheck className="text-3xl text-orange-500" />,
        value: "15+",
        label: "Years Experience",
    },
    {
        icon: <FaThumbsUp className="text-3xl text-pink-500" />,
        value: "98%",
        label: "Success Rate",
    },
    {
        icon: <FaStar className="text-3xl text-yellow-500" />,
        value: "4.9/5",
        label: "Patient Rating",
    },
];

const StatsSection = () => {
    return (
        <div className="h-[70vh] md:h-screen w-full">
            <div className="h-full w-full bg-[url(/stats.png)] bg-cover bg-center flex flex-col items-center justify-center">
                <div className="  poppins-font grid grid-cols-2   md:grid-cols-2 lg:grid-cols-4 gap-8 z-30 relative  sm:w-[85%] w-full p-2 sm:p-0">
                    {stats.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col gap-y-2 items-start justify-center  bg-transparent backdrop-blur-xl border-1 border-[#AEE2E3]  rounded-lg p-3 sm:p-6 transition-transform duration-300 hover:scale-105  sm:shadow-[3px_3px_2px_2px_rgba(0,0,0,.25)] shadow-[1px_1px_1px_1px_#AEE2E3] "
                        >
                            <div className="flex items-center justify-center gap-x-3">
                                {" "}
                                <span>{item.icon}</span>
                                <h1 className="text-2xl sm:text-3xl font-bold">
                                    {item.value}
                                </h1>
                            </div>
                            <p className="text-gray-80 font-semibold text-xs sm:text-lg ">
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StatsSection;
