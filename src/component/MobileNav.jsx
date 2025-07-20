import React, { useState } from "react";
import Button from "./Button";
import { motion } from "framer-motion";
import { FaAngleDown } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const MobileNav = ({ setMobileNavOpen }) => {
    const [isOpen, setIsOpen] = useState(false);
    const current = useLocation().pathname;

    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            exit={{ opacity: 0, y: -100 }}
            className="mt-4 poppins-font text-lg pb-10 font-bold flex flex-col gap-y-5 p-1  "
        >
            <ul className="flex flex-col gap-y-5">
                <Link
                    onClick={() => setMobileNavOpen(false)}
                    to="/"
                    className={`${current === "/" ? "text-[#006190]" : ""}`}
                >
                    Home
                </Link>
                <Link
                    onClick={() => setMobileNavOpen(false)}
                    to="/about"
                    className={`${
                        current === "/about" ? "text-[#0488A0]" : ""
                    }`}
                >
                    About
                </Link>
                <Link
                    onClick={() => setMobileNavOpen(false)}
                    to="/contact"
                    className={`${
                        current === "/contact" ? "text-[#0488A0]" : ""
                    }`}
                >
                    Contact
                </Link>
            </ul>
            <div className="mx-auto w-[70%] mt-5">
                {" "}
                <Button title="Book Appointment" />
            </div>
        </motion.div>
    );
};

export default MobileNav;
