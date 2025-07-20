// ContactUs.jsx
import { Facebook, Instagram, Linkedin } from "lucide-react";
import React, { useEffect } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Contact = () => {
    useEffect(() => {
        document.title = "DigitalMato | ContactUs";
    }, []);
    return (
        <div
            style={{
                background: "#a4dfe0",
                background:
                    "linear-gradient(355deg,rgba(164, 223, 224, 1) 10%, rgba(255, 255, 255, 1) 80%)",
            }}
            className="poppins-font  pt-20 bg-black"
        >
            {" "}
            <div className="h-full  max-w-6xl mx-auto text-white flex flex-col md:flex-row p-4 md:p-12 gap-8">
                {/* Left: Contact Info */}
                <div className=" bg-gradient-to-b from-[#72A6BB] to-[#f1f5f9] shadow-[7px_7px_6px_rgba(0,0,0,0.25)] text-black rounded-xl p-5 sm:p-8 w-full md:w-1/3 flex flex-col justify-between">
                    <div>
                        <h2 className="text-2xl font-bold mb-2">
                            Get In Touch
                        </h2>
                        <p className="text-sm">
                            Ready to start your journey to better health?
                            Contact us today to schedule your assessment or ask
                            any questions about our services.
                        </p>
                        <div className="mt-6">
                            <h3 className="font-semibold">Visit us</h3>
                            <p className="text-sm">
                                Come say hello at our center .
                                <br />
                                <span className="text-sm">
                                    #1, 1st Floor, above Karnataka Bank, 5th
                                    Cross, 13th Main, Sector 6, HSR Layout,
                                    Bengaluru, Karnataka 560102
                                </span>
                            </p>
                        </div>

                        <div className="mt-4">
                            <h3 className="font-semibold">Chat to us</h3>
                            <p className="text-sm">
                                Our friendly team is here to help.
                                <br />
                                <a
                                    href="mailto:hello@paysphere.com"
                                    className="text-blue-600 hover:underline"
                                >
                                    info@newlifephysio.com
                                </a>
                            </p>
                        </div>

                        <div className="mt-4">
                            <h3 className="font-semibold">Call us</h3>
                            <p className="text-sm">
                                Mon–Fri from 8am to 6pm
                                <br />
                                <span className="text-sm">
                                    +1 (555) 123-4567
                                </span>
                            </p>
                        </div>

                        <div className="mt-4">
                            <h3 className="font-semibold">Social media</h3>
                            <div className="flex gap-4 mt-3 text-sm ">
                                <a href="">
                                    {" "}
                                    <Facebook size={20} />{" "}
                                </a>
                                <a href="">
                                    {" "}
                                    <Linkedin size={20} />{" "}
                                </a>
                                <a href="">
                                    {" "}
                                    <Instagram size={20} />{" "}
                                </a>
                            </div>
                        </div>

                        <button className="w-fit  rounded-full mt-7 px-4 hover:scale-105 transition-all duration-300 py-2 bg-[#72A6BB] backdrop-blur-md shadow-[4px_4px_4px_rgba(255,255,255,0.25)] border-2 border-[rgba(255,255,255,0.5)] text-sm flex items-center gap-x-4 text-white ">
                            <span className="">
                                <FaCalendarAlt />
                            </span>
                            Book Online Appointment{" "}
                        </button>
                    </div>
                </div>

                {/* Right: Contact Form */}
                <div className="w-full md:w-2/3 space-y-4">
                    <div className="flex gap-4">
                        <input
                            type="text"
                            placeholder="First Name"
                            className="w-1/2 p-3 outline-none rounded bg-transparent text-black border border-gray-700"
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="w-1/2 p-3  outline-none rounded bg-transparent text-black border border-gray-700"
                        />
                    </div>

                    <input
                        type="number"
                        placeholder="phone"
                        className="w-full p-3  outline-none rounded bg-transparent text-black border border-gray-700"
                    />
                    <select className="w-full  outline-none p-3 rounded bg-transparent text-gray-800 border border-gray-700">
                        <option
                            className="text-gray-800"
                            defaultValue=""
                            disabled
                            selected
                        >
                            Select Service Intrested In
                        </option>
                        <option value="orthopedic-physiotherapy">
                            Orthopedic Physiotherapy
                        </option>
                        <option value="sports-injury-rehabilitation">
                            Sports Injury Rehabilitation
                        </option>
                        <option value="manual-therapy">Manual Therapy</option>
                        <option value="exercise-prescription">
                            Exercise Prescription
                        </option>
                        <option value="post-surgical-rehab">
                            Post-Surgical Rehab
                        </option>
                        <option value="chronic-pain-management">
                            {" "}
                            Chronic Pain Management
                        </option>
                    </select>
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full outline-none p-3 rounded bg-transparent text-black border border-gray-700"
                    />

                    <textarea
                        placeholder="Tell us what we can help you with"
                        rows={4}
                        className="w-full outline-none p-3 rounded bg-transparent text-black border border-gray-700"
                    />

                    <div className="flex items-start gap-2 bg-transparent text-black">
                        <input type="checkbox" className="mt-1" />
                        <label className="text-sm text-black bg-transparent">
                            I’d like to receive more information about company.
                            I understand and agree to the{" "}
                            <a href="#" className="text-blue-500 underline">
                                Privacy Policy
                            </a>
                        </label>
                    </div>

                    <button className="bg-[#72A6BB] hover:bg-[#006190] transition-all duration-300 text-white py-3 px-6 rounded w-full">
                        Send Message
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Contact;
