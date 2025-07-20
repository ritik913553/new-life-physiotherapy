import React, { useEffect, useState, useRef } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "./Button";
import MobileNav from "./MobileNav";

const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
];

const Navbar = () => {
    const [show, setShow] = useState(true);
    const [lastScroll, setLastScroll] = useState(0);
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const [hovered, setHovered] = useState("Home");
    const linkRefs = useRef({});
    const [underlineProps, setUnderlineProps] = useState({ left: 0, width: 1 });
    const containerRef = useRef(null);

    const location = useLocation();

    useEffect(() => {
        if (location.pathname == "/") {
            setHovered("Home");
        }else if(location.pathname=='/about'){
            setHovered("About")
        }else if(location.pathname=='/contact'){
            setHovered("Contact")
        }
    }, [location]);

    // Update underline position
    useEffect(() => {
        const linkEl = linkRefs.current[hovered];
        const containerEl = containerRef.current;
        if (linkEl && containerEl) {
            const linkRect = linkEl.getBoundingClientRect();
            const containerRect = containerEl.getBoundingClientRect();

            const left = linkRect.left - containerRect.left;
            const width = linkRect.width;

            setUnderlineProps({ left, width });
        }
    }, [hovered, location]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            if (currentScroll > window.innerHeight - 600) {
                setShow(currentScroll < lastScroll);
            } else {
                setShow(true);
            }
            setLastScroll(currentScroll);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScroll]);

    return (
        <div
            className={`font-mono fixed top-0 z-50 w-full px-2 sm:px-0 transition-transform duration-500 ${
                show ? "translate-y-0" : "-translate-y-full"
            } bg-transparent bg-opacity-70  backdrop-blur-md`}
            onMouseLeave={() => {
               if(location.pathname=='/'){
                setHovered("Home")
               }else if(location.pathname=='/about'){
                   setHovered("About")
               }else if(location.pathname=='/contact'){
                   setHovered("Contact")
               }
            }}
        >
            <div className="h-15 max-w-6xl mx-auto overflow-y-hidden bg-[#72A6BB] shadow-[2px_4px_4px_rgba(0,0,0,0.25)] rounded-full mt-3 px-5 flex items-center justify-between w-full text-white">
                {/* Logo / Title */}
                <div className="flex items-center ">
                    <img className="h-24 w-15 " src="logo.png" alt="" />
                    <h1 className="text-sm sm:text-lg font-bold sm:font-semibold leading-5 whitespace-nowrap">
                        NEW LIFE <br />{" "}
                        <span className="font-bold sm:font-black text-[#006190]">
                            {" "}
                            PHYSIOTHERAPY CENTER
                        </span>
                    </h1>
                </div>

                {/* Desktop Navigation */}
                <div
                    ref={containerRef}
                    className="hidden sm:flex relative gap-8 items-center font-medium text-sm h-full"
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            ref={(el) => (linkRefs.current[link.name] = el)}
                            onMouseEnter={() => setHovered(link.name)}
                            className={`px-3 py-2 font-bold z-10 transition-all cursor-pointer text-lg duration-300 ${
                                hovered === link.name ? "text-[#006190]" : ""
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* Animated underline */}
                    <motion.div
                        className="absolute bottom-0 h-13 -mb-3 overflow-hidden"
                        initial={false}
                        animate={{
                            left: underlineProps.left,
                            width: underlineProps.width,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                        }}
                    >
                        {/* Grass SVG */}
                        <img
                            src="/grass.svg"
                            alt=""
                            className="w-full h-full "
                            // style={{ filter: "hue-rotate(120deg)" }}
                        />
                    </motion.div>
                </div>

                {/* Call to Action Button */}
                <div className="hidden sm:block">
                    <Button title="Book Appointement" />
                </div>

                {/* Mobile Nav Toggle */}
                <button
                    onClick={() => setMobileNavOpen(!mobileNavOpen)}
                    className="sm:hidden text-4xl text-white"
                >
                    {mobileNavOpen ? <RxCross1 /> : <FiAlignJustify />}
                </button>
            </div>

            {/* Mobile Navigation Drawer */}
            <div className="sm:hidden overflow-hidden">
                {mobileNavOpen && (
                    <MobileNav setMobileNavOpen={setMobileNavOpen} />
                )}
            </div>
        </div>
    );
};

export default Navbar;
