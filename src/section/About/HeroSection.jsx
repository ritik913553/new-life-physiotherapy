import React from "react";

const HeroSection = () => {
    return (
        <div className="poppins-font h-screen w-full bg-gradient-to-b  from-[#ffffff] to-[#72A6BB] p-4">
            <div className="max-w-6xl mx-auto  h-full flex flex-col items-center justify-center">
                <h1 className="text-4xl sm:text-5xl font-bold text-center">Expert Care You Can Trust</h1>
                <p className="text-center  sm:w-[70%] mt-10 sm:mt-4">
                    At New Life Physiotherapy Center, we're dedicated to helping
                    you achieve optimal health and wellness through expert care,
                    advanced techniques, and personalized treatment plans.
                </p>
            </div>
        </div>
    );
};

export default HeroSection;
