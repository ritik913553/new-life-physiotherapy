import React from "react";

const testimonials = [
    {
        name: "Priya Sharma",
        role: "School Teacher, Mumbai",
        quote: "After my ACL surgery, I was anxious about recovery. New Life Physiotherapy gave me the confidence and support I needed. I'm now pain-free and active again!",
        avatar: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=60",
        image: "https://media.istockphoto.com/id/1399391074/photo/cheerful-indian-female-teacher-smiling-while-standing-in-the-classroom.jpg?s=612x612&w=0&k=20&c=b5hSMGU6ayEGnLk8zDRd2WqY9uR_GDrG1o1DCKrMe_Q=",
        metric: "🦵 Full mobility in 4 weeks",
    },
    {
        name: "Rakesh Iyer",
        role: "IT Consultant, Pune",
        quote: "Chronic back pain affected my work and sleep. The therapists designed a program tailored to my needs. Within weeks, I felt the improvement!",
        avatar: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        image: "https://media.istockphoto.com/id/1220318825/photo/smiling-indian-businessman-using-laptop-sitting-in-coworking-office.jpg?s=612x612&w=0&k=20&c=FCJbLGgWyAWUB4KzmzwqFyz_b5hYTZjZYoBxOhLGmUg=",
        metric: "💼 Back to work with zero pain",
    },
    {
        name: "Neha Verma",
        role: "New Mother, Bangalore",
        quote: "Postpartum physiotherapy at New Life helped me regain strength and reduce pelvic pain. The care was professional and empathetic.",
        avatar: "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=400&q=60",
        image: "https://media.istockphoto.com/id/1450170139/photo/young-indian-mother-sitting-on-bed-holding-her-baby-daughter.jpg?s=612x612&w=0&k=20&c=xpkRLCbskpeYX9c8kuMmlLFVHG8b-2JGID02vQuwD8Q=",
        metric: "👶 Recovery post-delivery",
    },
    {
        name: "Aarav Mehta",
        role: "Student Athlete, Delhi",
        quote: "A sports injury could’ve set me back for months. Their rehab program helped me return to football stronger and faster!",
        avatar: "https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
        image: "https://media.istockphoto.com/id/1408884731/photo/young-man-stretching-leg-muscles-on-a-field-before-sports-training.jpg?s=612x612&w=0&k=20&c=bErmvKrVn-rg2yRH43ZZDxakVA4Q-bMLi_8X2vVpxOQ=",
        metric: "⚽ Back in the game in 6 weeks",
    },
];
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);


const ClientTestinomial = () => {

    useGSAP(()=>{
        gsap.to(".testinomial", {
            x:"0%",
            duration:2,
            opacity:1,
            scrollTrigger:{
                trigger:".clientSection",
                // scroller:'body',
                start:"top top",
                end:"bottom center",
                scrub:2,
                // markers:true,
                pin:true
            }
        })
    })
    

    return (
        <div className="clientSection poppins-font w-full  bg-[#EAF2F5] px-4 sm:px-6 lg:px-8 py-8 md:py-12 ">
            <div className="max-w-6xl mx-auto overflow-x-hidden ">
                {/* Heading Section */}
                <div className="text-center">
                    <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold text-green-500">
                        Empowering Recovery, Restoring Confidence
                        <br />
                        <span className="text-black mt-1 sm:mt-2 inline-block text-2xl sm:text-2xl md:text-3xl">
                            Here What Our Patients Say About Us
                        </span>
                    </h1>

                    {/* Rating Section */}
                    <div className="flex flex-col items-center mt-2 sm:mt-4 text-xs sm:text-sm">
                        <div className="flex items-center">
                            {/* Stars */}
                            <div className="flex mr-2">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className={`w-4 h-4 sm:w-5 sm:h-5 ${
                                            i < 4
                                                ? "text-yellow-400"
                                                : "text-gray-300"
                                        }`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        {i === 4 && (
                                            <defs>
                                                <linearGradient
                                                    id="partialFill"
                                                    x1="0%"
                                                    y1="0%"
                                                    x2="100%"
                                                    y2="0%"
                                                >
                                                    <stop
                                                        offset="60%"
                                                        stopColor="#fbbf24"
                                                    />
                                                    <stop
                                                        offset="60%"
                                                        stopColor="#d1d5db"
                                                    />
                                                </linearGradient>
                                            </defs>
                                        )}
                                        <path
                                            fill={
                                                i === 4
                                                    ? "url(#partialFill)"
                                                    : "currentColor"
                                            }
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                        />
                                    </svg>
                                ))}
                            </div>
                            {/* Rating Text */}
                            <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#04bcbe] to-[#056d90]">
                                4.6
                            </span>
                            <span className="text-gray-600 ml-1">out of 5</span>
                        </div>
                        <p className="text-gray-500 mt-1">
                            Based on 100+ client reviews
                        </p>
                    </div>
                </div>

                {/* Testimonials Grid */}
                <div className="grid testinomial overflow-hidden p-2 opacity-0 transform translate-x-[200%] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-8 sm:mt-10">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="relative bg-gradient-to-b from-[#f1f5f9] to-[#72A6BB] hover:scale-105 duration-300 transition-all ease-in-out overflow-hidden p-4 sm:p-6 rounded-lg shadow-[3px_3px_5px_rgba(0,0,0,0.2)] sm:shadow-[5px_5px_6px_rgba(0,0,0,0.25)] group"
                        >
                            {/* Content container */}
                            <div className="relative z-10 h-full flex flex-col">
                                <div className="flex items-center mb-3 sm:mb-4">
                                    <img
                                        src={item.avatar}
                                        alt="Client"
                                        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-white"
                                    />
                                </div>

                                <div className="flex flex-col flex-grow justify-between">
                                    {/* Quote */}
                                    <p className="text-gray-700 italic text-xs sm:text-sm mb-4 sm:mb-6">
                                        "{item.quote}"
                                    </p>

                                    <div className="flex flex-col">
                                        <h1 className="text-base sm:text-lg md:text-xl font-semibold group-hover:text-white transition-colors duration-300">
                                            {item.name}
                                        </h1>
                                        <p className="text-xs sm:text-sm text-gray-600 group-hover:text-white transition-colors duration-300">
                                            {item.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default ClientTestinomial;
