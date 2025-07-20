import React from "react";
import Button from "../../component/Button";
import { FaArrowRight } from "react-icons/fa6";
import { FaUserMd } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { SlPeople } from "react-icons/sl";

const Hero = () => {
    return (
        <div className="w-full  bg-[#EAF2F5] overflow-x-hidden">
            <div className="flex flex-col lg:flex-row h-full mt-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-26 py-20 items-center justify-between gap-8 lg:gap-0">
                {/* Text Content - Left Side */}
                <div className="w-full lg:w-[40%] flex flex-col items-start justify-start gap-y-4 sm:gap-y-5">
                    <h1 className="text-3xl sm:text-3xl md:text-4xl font-semibold leading-tight">
                        Your Journey to Better Health Starts Here
                    </h1>

                    <p className="w-full lg:w-[90%] text-md sm:text-base">
                        Expert physiotherapy care with personalized treatment
                        plans. Our experienced team helps you recover,
                        strengthen, and achieve your optimal health goals.
                    </p>

                    <button className="w-fit rounded-full px-4 hover:scale-105 transition-all duration-300 py-2 bg-[#72A6BB] backdrop-blur-md shadow-[4px_4px_4px_rgba(255,255,255,0.25)] border-2 border-[rgba(255,255,255,0.5)] flex items-center gap-x-2 text-white font-semibold text-sm sm:text-base">
                        Book Your Assessment{" "}
                        <span>
                            <FaArrowRight />
                        </span>
                    </button>

                    {/* Stats Cards */}
                    <div className="mt-6 sm:mt-8 lg:mt-10 flex flex-wrap gap-2 sm:gap-3">
                        <div className="flex flex-col text-sm sm:text-sm items-center bg-[#d3e4eb] py-2 px-2 sm:px-4 rounded-tr-2xl rounded-bl-2xl">
                            <FaUserMd size={23} className="text-[#4CAF50]" />
                            Licensed Professionals
                        </div>
                        <div className="flex flex-col items-center text-sm sm:text-sm bg-[#d3e4eb] py-2 px-2 sm:px-4 rounded-tl-2xl rounded-br-2xl">
                            <SlPeople size={23} className="text-[#4CAF50]" />
                            1000+ Patients Helped
                        </div>
                        <div className="flex flex-col items-center text-sm sm:text-sm bg-[#d3e4eb] py-2 px-2 sm:px-4 rounded-tr-2xl rounded-bl-2xl">
                            <FaRegClock size={23} className="text-[#4CAF50]" />
                            Same Day Appointments
                        </div>
                    </div>
                </div>

                {/* Image Content - Right Side */}
                <div className="w-full lg:w-[56%] relative h-auto lg:h-full flex items-center justify-center mt-8 lg:mt-0">
                    <div className="absolute text-center bg-green-500 px-2 py-1 sm:px-3 sm:py-2 top-0 sm:top-0 -left-8 sm:-left-15 rounded-md -rotate-35 text-xs sm:text-sm font-medium">
                        15+ Years of Experience
                    </div>
                    <img
                        src="/hero.jpeg"
                        className="w-full h-auto sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-xl object-cover shadow-lg"
                        alt="Physiotherapy session"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
