import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FaWhatsappSquare } from "react-icons/fa";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import Contact from './pages/Contact'
import About from "./pages/About";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const App = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smooth: true,
        });

        const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy(); // Cleanup on unmount
        };
    }, []);

    return (
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
            <a
                href={`https://wa.me/+91222222222`}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-3 right-5 text-6xl cursor-pointer text-green-600  z-100"
            >
                <FaWhatsappSquare />
            </a>
        </BrowserRouter>
    );
};

export default App;
