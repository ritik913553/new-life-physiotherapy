import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    FaUserMd,
    FaHandsHelping,
    FaRunning,
    FaSyringe,
    FaBone,
} from "react-icons/fa";

const OurCrediantials = () => {
    const [breakpoint, setBreakpoint] = useState();
    useEffect(() => {
        setBreakpoint(window.innerWidth);
    }, [window.innerWidth]);

    return (
        <div className="h-[60vh] sm:h-screen w-full bg-[#EAF2F5]">
            <div className="relative max-w-6xl mx-auto h-full">
                {/* Center Title */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 sm:p-5 backdrop-blur-md rounded-md w-fit gap-x-3 bg-gradient-to-bl from-[#72A6BB] to-[#4CAF50] text-white font-semibold sm:text-lg shadow-[4px_4px_4px_rgba(0,0,0,0.25)]">
                    <div className="flex items-center gap-x-2">
                        <img
                            className="h-7 w-7"
                            src="/credentials.png"
                            alt=""
                        />
                        Our Credentials
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        // viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="absolute  sm:-top-37 -top-20 right-0 sm:right-0 "
                    >
                        <img
                            className="w-full sm:h-40 h-20"
                            src="/arrow.png"
                            alt=""
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="absolute  sm:left-0 sm:-bottom-35  rotate-180"
                    >
                        <img
                            className="w-full sm:h-40 h-20"
                            src="/arrow.png"
                            alt=""
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1, rotateY: 180 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="absolute  sm:left-0 sm:-top-37 -top-20 rotate-y-180 "
                    >
                        <img
                            className="w-full sm:h-40 h-20"
                            src="/arrow.png"
                            alt=""
                        />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1, rotateX: 180 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="absolute  right-0 sm:-bottom-35  rotate-x-180 "
                    >
                        <img
                            className="w-full sm:h-40 h-20"
                            src="/arrow.png"
                            alt=""
                        />
                    </motion.div>
                </div>

                {/* Credential Cards */}
                {/* Licensed Physiotherapist */}
                <motion.div
                    initial={{ x: 0, y: 0, opacity: 0 }}
                    whileInView={{
                        x: breakpoint < 768 ? "-56%" : "-150%",
                        y: breakpoint < 768 ? "-150%" : "-250%",
                        opacity: 1,
                    }}
                    // viewport={{ once: true, amount: 0.5 }}
                    transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 sm:p-5 text-white backdrop-blur-md shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md w-45 sm:w-72  bg-gradient-to-r from-[#006190] to-[#38B2AC] sm:flex items-center gap-3 hover:scale-105 transition-all duration-300"
                >
                    <div className="text-2xl">
                        <FaUserMd />
                    </div>
                    <h1 className="text-base font-medium">
                        Licensed Physiotherapist
                    </h1>
                </motion.div>

                {/* Manual Therapy Certified */}
                <motion.div
                    initial={{ x: 0, y: 0, opacity: 0 }}
                    whileInView={{
                        x: breakpoint < 768 ? "54%" : "150%",
                        y: breakpoint < 768 ? "-150%" : "-250%",
                        opacity: 1,
                    }}
                    // viewport={{ once: true, amount: 0.5 }}
                    transition={{ type: "spring", stiffness: 100, delay: 1 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 sm:p-5 text-white backdrop-blur-md  shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md w-45 sm:w-72  bg-gradient-to-r from-[#8ddb8f] to-[#034b22] sm:flex items-center gap-3 hover:scale-105 transition-all duration-300"
                >
                    <div className="text-2xl">
                        <FaHandsHelping />
                    </div>
                    <h1 className="text-base font-medium">
                        Manual Therapy Certified
                    </h1>
                </motion.div>

                {/* Sports Injury Specialist */}
                <motion.div
                    initial={{ x: 0, y: 0, opacity: 0 }}
                    whileInView={{
                        x: breakpoint < 768 ? "-56%" : "-150%",
                        y: breakpoint < 768 ? "150%" : "250%",
                        opacity: 1,
                    }}
                    // viewport={{ once: true, amount: 0.5 }}
                    transition={{ type: "spring", stiffness: 100, delay: 1.5 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 sm:p-5 text-white backdrop-blur-md  shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md w-45 sm:w-72  bg-gradient-to-r from-[#f0a2a2] to-[#C92A2A] sm:flex items-center gap-3 hover:scale-105 transition-all duration-300"
                >
                    <div className="text-2xl">
                        <FaRunning />
                    </div>
                    <h1 className="text-base font-medium">
                        Sports Injury Specialist
                    </h1>
                </motion.div>

                {/* Dry Needling Certified */}
                <motion.div
                    initial={{ x: 0, y: 0, opacity: 0 }}
                    whileInView={{
                        x: breakpoint < 768 ? "55%" : "150%",
                        y: breakpoint < 768 ? "150%" : "250%",
                        opacity: 1,
                    }}
                    // viewport={{ once: true, amount: 0.5 }}
                    transition={{ type: "spring", stiffness: 100, delay: 2 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 sm:p-5 text-white backdrop-blur-md  shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-md w-45 sm:w-72  bg-gradient-to-r from-[#afa0ca] to-[#512DA8] sm:flex  items-center gap-3 hover:scale-105 transition-all duration-300"
                >
                    <div className="text-2xl">
                        <FaSyringe />
                    </div>
                    <h1 className="text-base font-medium">
                        Dry Needling Certified
                    </h1>
                </motion.div>
            </div>
        </div>
    );
};

export default OurCrediantials;
