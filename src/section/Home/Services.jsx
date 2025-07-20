import React, { useEffect, useRef } from "react";
import { FaArrowRight, FaBone, FaRunning, FaUserInjured } from "react-icons/fa";
import { GiHand, GiGymBag } from "react-icons/gi";
import { MdOutlineMonitorHeart } from "react-icons/md";

const Services = () => {
    const servicesData = [
        {
            title: "Orthopedic Physiotherapy",
            description:
                "Specialized treatment for bone, joint, and muscle injuries. Expert care for post-surgical recovery and chronic pain management.",
            features: [
                "Joint Mobilization",
                "Muscle Strengthening",
                "Pain Relief",
            ],
            icon: "FaBone",
            image: "/services/orthopedic.png",
        },
        {
            title: "Sports Injury Rehabilitation",
            description:
                "Get back to your sport stronger than before. Comprehensive treatment and prevention strategies for athletic injuries.",
            features: [
                "Performance Enhancement",
                "Injury Prevention",
                "Return to Sport",
            ],
            icon: "FaRunning",
            image: "/services/sports.png",
        },
        {
            title: "Manual Therapy",
            description:
                "Hands-on treatment techniques to improve mobility, reduce pain, and enhance function through targeted manipulation.",
            features: [
                "Soft Tissue Mobilization",
                "Joint Manipulation",
                "Trigger Point Release",
            ],
            icon: "GiHand",
            image: "/services/manual.png",
        },
        {
            title: "Exercise Prescription",
            description:
                "Customized exercise programs designed to restore strength, flexibility, and endurance for optimal recovery.",
            features: [
                "Personalized Programs",
                "Progress Tracking",
                "Home Exercise Plans",
            ],
            icon: "GiGymBag",
            image: "/services/exercise.png",
        },
        {
            title: "Post-Surgical Rehab",
            description:
                "Specialized care following surgical procedures to ensure optimal healing and fastest return to function.",
            features: [
                "Scar Management",
                "Range of Motion",
                "Strength Building",
            ],
            icon: "FaUserInjured",
            image: "/services/rehab.png",
        },
        {
            title: "Chronic Pain Management",
            description:
                "Long-term strategies and treatments to manage persistent pain conditions and improve quality of life.",
            features: [
                "Pain Education",
                "Movement Therapy",
                "Lifestyle Modification",
            ],
            icon: "MdOutlineMonitorHeart",
            image: "/services/pain.png",
        },
    ];
    const iconMap = {
        FaBone: <FaBone className="text-5xl text-[#72A6BB]" />,
        FaRunning: <FaRunning className="text-5xl text-[#72A6BB]" />,
        GiHand: <GiHand className="text-5xl text-[#72A6BB]" />,
        GiGymBag: <GiGymBag className="text-5xl text-[#72A6BB]" />,
        FaUserInjured: <FaUserInjured className="text-5xl text-[#72A6BB]" />,
        MdOutlineMonitorHeart: (
            <MdOutlineMonitorHeart className="text-5xl text-[#72A6BB]" />
        ),
    };

  

    return (
        <div
            className="w-full service hmin-h-screen bg-[#EAF2F5] pb-10 overflow-x-hidden"
        >
            <div className="max-w-6xl mx-auto h-full px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold w-fit mx-auto">
                    Our Specialized{" "}
                    <span className="text-[#00C950]">services</span>
                </h1>
                <p className="text-center opacity-85 w-full md:w-[80%] lg:w-[70%] mx-auto mt-3 sm:mt-5 leading-5 text-sm sm:text-base">
                    Comprehensive physiotherapy treatments tailored to your
                    specific needs. Our evidence-based approach ensures the best
                    outcomes for your recovery.
                </p>

                <div className="mt-8 stackedCard sm:mt-10  flex flex-col gap-y-4 sm:gap-y-5 md:gap-y-6">
                    {servicesData.map((service, idx) => (
                        <div
                            key={idx}
                            className="bg-white serviceCard  rounded-xl shadow-lg p-4 sm:p-6 flex flex-col md:flex-row gap-10 sm:gap-6"
                        >
                            <div className="w-full md:w-1/2 flex flex-col justify-center gap-3 sm:gap-4 mt-0 md:mt-4 lg:mt-10">
                                <div className="relative w-fit">
                                    <span className="absolute -top-7 -right-14">
                                        {iconMap[service.icon]}
                                    </span>
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                                        {service.title}
                                    </h3>
                                </div>
                                <p className="text-sm  xl:text-sm font-bold sm:leading-5 w-full md:w-[90%] text-gray-600">
                                    {service.description}
                                </p>
                                <ul className="list-disc ml-5 sm:ml-10 list-inside mt-1 sm:mt-2 text-sm  xl:text-md   text-gray-700">
                                    {service.features.map((feat, i) => (
                                        <li key={i}>{feat}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="w-full md:w-1/2 rounded-xl overflow-hidden order-first md:order-last">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-auto sm:h-64 md:h-80 lg:h-90 object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-10 sm:mt-12 md:mt-15">
                    <button className="mx-auto rounded-full px-4 hover:scale-105 transition-all duration-300 py-2 bg-[#72A6BB] backdrop-blur-md shadow-[4px_4px_4px_rgba(255,255,255,0.25)] border-2 border-[rgba(255,255,255,0.5)] flex items-center gap-x-2 text-white font-semibold text-sm sm:text-base">
                        Schedule Your Assessment Today{" "}
                        <span>
                            <FaArrowRight />
                        </span>
                    </button>
                    <p className="text-xs mx-auto w-fit mt-3 sm:mt-5 opacity-65">
                        Free initial consultation • No referral needed
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Services;
