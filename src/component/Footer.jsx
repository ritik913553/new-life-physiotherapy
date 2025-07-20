import { small } from "framer-motion/client";
import {
    FacebookIcon,
    Instagram,
    LinkedinIcon,
    Twitter,
    Youtube,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { FaRegClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
const Footer = () => {
    return (
        <div className="poppins-font sm:p-10 bg-[#EAF2F5]  pt-15 p-5">
            {" "}
            <footer className="bg-[#EAF2F5]  text-black max-w-6xl mx-auto ">
                <div className="flex flex-col md:flex-row justify-between gap-10">
                    {/* Left Section */}
                    <div className="flex  flex-col gap-3 max-w-sm">
                        <div
                            onClick={() => {
                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth",
                                });
                            }}
                            className="flex cursor-pointer  items-center "
                        >
                            <img className="h-24 w-15" src="logo.png" alt="" />
                            <h1 className="text-lg font-semibold leading-5 whitespace-nowrap">
                                NEW LIFE <br />{" "}
                                <span className="font-black text-[#006190]">
                                    {" "}
                                    PHYSIOTHERAPY CENTER
                                </span>
                            </h1>
                        </div>
                        <div className="text-sm ">
                            Dedicated to helping you achieve optimal health and
                            wellness through expert physiotherapy care and
                            personalized treatment plans.
                        </div>
                        <div className="text-sm  mt-5 flex gap-x-7 items-center justify-start">
                            <p>
                                <span className="font-semibold">
                                    Phone number
                                </span>
                                <br />
                                +91-8709822926
                            </p>
                            <p className="">
                                <span className="font-semibold">Email</span>
                                <br />
                                <a
                                    href="mailto:support@skipmatrix.com"
                                    className="hover:underline"
                                >
                                    info@newlifephysio.com
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row sm:flex-col gap-5 sm:mt-10">
                        <div className="flex   items-start gap-x-2 justify-start">
                            <span className="text-green-500">
                                <FaRegClock />
                            </span>
                            <p className="text-sm">
                                Mon-Fri: 8AM-8PM <br />
                                Sat: 9AM-5PM <br />
                                Sun: Closed
                            </p>
                        </div>
                        <div className="flex  items-start gap-x-2 justify-start">
                            <span className="text-green-500">
                                <FaLocationDot />
                            </span>
                            <p className="text-sm">
                                123 Health Street <br />
                                Medical District <br />
                                City, State 12345
                            </p>
                        </div>
                    </div>
                    {/* Link Sections */}
                    <div className="grid grid-cols-3 sm:mt-10 gap-10 sm:text-sm text-xs">
                        {/* Quick Links */}
                        <div>
                            <h3 className="font-black mb-3">Quick links</h3>
                            <ul className="sm:space-y-2 space-y-5">
                                <li>
                                    <Link
                                        to={"/"}
                                        className="hover:underline hover:text-blue-600"
                                    >
                                        Home
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to={"/about"}
                                        className="hover:underline hover:text-blue-600"
                                    >
                                        About us
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to={"/contact"}
                                        className="hover:underline hover:text-blue-600"
                                    >
                                        Contact us
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Social */}
                        <div className="">
                            <h3 className="font-black mb-3">Social</h3>
                            <ul className="space-y-4 text-center">
                                <li>
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="#"
                                        className=" text-[#048099] flex items-center gap-2"
                                    >
                                        <FacebookIcon />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        target="_blank"
                                        href="#"
                                        className="text-[#7255A1]"
                                    >
                                        <Instagram />
                                    </a>
                                </li>
                                <li>
                                    <a
                                        target="_blank"
                                        href="#"
                                        className=" text-[#048099]"
                                    >
                                        <LinkedinIcon />
                                    </a>
                                </li>

                                <li>
                                    <a
                                        target="_blank"
                                        href="#"
                                        className=" text-red-500"
                                    >
                                        <Youtube />
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <h3 className="font-black mb-3">Legal</h3>
                            <ul className="space-y-4 sm:space-y-2">
                                <li>
                                    <Link
                                        to={"/privacy-policy"}
                                        className="hover:underline"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="text-center text-sm text-gray-800 mt-10">
                    © 2025 New Life Physiotherapy Center. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default Footer;
