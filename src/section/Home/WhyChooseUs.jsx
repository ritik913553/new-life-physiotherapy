import React, { useEffect, useRef } from "react";
import { MdScience, MdLocalHospital, MdEventAvailable } from "react-icons/md";
import { FaUserCheck, FaStethoscope } from "react-icons/fa";
import { GiMedal } from "react-icons/gi";

const whyChooseUsData = [
    {
        title: "Evidence-Based Care",
        description:
            "Our treatment methods are grounded in the latest clinical research to ensure safe and effective results.",
        icon: <MdScience />,
        gradient: "bg-gradient-to-r from-[#D4EEF3] to-[#72A6BB]", // light teal to primary
    },
    {
        title: "Personalized Plans",
        description:
            "Every patient receives a custom treatment plan designed around their unique needs and goals.",
        icon: <FaUserCheck />,
        gradient: "bg-gradient-to-r from-[#FFF5D9] to-[#FFD580]", // light yellow to peach
    },
    {
        title: "Advanced Facilities",
        description:
            "We use state-of-the-art physiotherapy equipment in a clean, modern, and fully equipped clinic.",
        icon: <MdLocalHospital />,
        gradient: "bg-gradient-to-r from-[#D7EAFD] to-[#72A6BB]", // light blue to primary
    },
    {
        title: "Certified Experts",
        description:
            "Our experienced team includes licensed physiotherapists with specialized certifications in manual therapy, sports injury, and more.",
        icon: <GiMedal />,
        gradient: "bg-gradient-to-r from-[#FFF9D6] to-[#FCE588]", // light gold
    },
    {
        title: "Thorough Assessment",
        description:
            "We begin every treatment with a detailed evaluation to identify root causes and tailor interventions accordingly.",
        icon: <FaStethoscope />,
        gradient: "bg-gradient-to-r from-[#E3F9E5] to-[#A8E6A2]", // soft green
    },
    {
        title: "Flexible & Accessible",
        description:
            "With same-day appointments, easy scheduling, and a central location, getting the care you need is always convenient.",
        icon: <MdEventAvailable />,
        gradient: "bg-gradient-to-r from-[#E0F7F9] to-[#72A6BB]", // aqua to primary
    },
];


const WhyChooseUs = () => {
    const cardsRef = useRef([]);
    const sectionRef = useRef(null);

    const rotateCards = () => {
        let angle = 0;
        cardsRef.current.forEach((card, index) => {
            if (card.classList.contains("away")) {
                card.style.transform = `translateY(-120vh) rotate(48deg)`;
            } else {
                card.style.transform = `rotate(${angle}deg)`;
                card.style.zIndex = cardsRef.current.length - index;
                angle += 7;
            }
        });
    };

    const handleScroll = () => {
        const stackArea = sectionRef.current;
        const distance = window.innerHeight / 2;
        const topVal = stackArea.getBoundingClientRect().top;
        let index = -1 * (topVal / distance + 1);
        index = Math.floor(index);

        cardsRef.current.forEach((card, i) => {
            if (i <= index) {
                card.classList.add("away");
            } else {
                card.classList.remove("away");
            }
        });

        rotateCards();
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            ref={sectionRef}
            className="w-full relative h-[400vh] bg-[#EAF2F5]"
        >
            <div className="h-screen whyChoose sticky top-0 sm:flex sm:flex-row flex flex-col max-w-6xl mx-auto py-8 md:py-12 lg:pt-10">
                <div className="sm:w-1/2 h-full flex flex-col  justify-center p-4 sm:p-0">
                    <h1 className="text-4xl md:text-5xl font-bold">
                        Why Choose Us
                    </h1>
                    <p className="text-sm md:text-base mt-7 w-[90%] text-gray-700">
                        At New Life Physiotherapy Center, we combine expert care
                        with evidence-based techniques to deliver personalized
                        treatment for every patient. Our certified professionals
                        use advanced equipment to ensure accurate diagnosis,
                        effective rehabilitation, and a smooth recovery — all in
                        a modern, patient-friendly environment.
                    </p>
                </div>

                <div className="sm:w-1/2 h-full relative flex flex-col items-center justify-center overflow-hidden">
                    {whyChooseUsData.map((item, i) => (
                        <div
                            key={i}
                            ref={(el) => (cardsRef.current[i] = el)}
                            className={`absolute card ${item.gradient} transition-all duration-700 ease-in-out w-2/3 sm:h-82 rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg p-4  sm:p-6 sm:pt-19 flex flex-col items-start gap-3 `}
                        >
                            <div className="text-4xl text-[#72A6BB]">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-bold">{item.title}</h3>
                            <p className="text-sm text-gray-600">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
