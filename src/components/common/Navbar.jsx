import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Button from "./Button";

const Navbar = ({ style }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    const current = location.pathname;

    const isDarkMode = current === "/Feed" || current === "/username";
    const isHomeOrEvents = current === "/" || current === "/events";

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 1200) setIsOpen(false);
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const navbarBgClass =
        isDarkMode || (isHomeOrEvents && isScrolled)
            ? "bg-white shadow-lg"
            : "bg-transparent";

    const getLinkClass = ({ isActive }) =>
        `transition hover:font-semibold ${isActive
            ? "text-black font-semibold"
            : isDarkMode || isScrolled
                ? "text-black"
                : "text-white"
        }`;

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full backdrop-blur-[9px] p-4 z-50 ${navbarBgClass} ${style}`}>
                <div className="flex justify-between items-center min-[500px]:px-6 px-0 max-w-330 mx-auto">
                    <div className="flex items-center gap-2 sm:scale-100 scale-70">
                        <img src="/png/logo.png" className="scale-80" alt="logo" />
                        <p className="text-4xl font-bold text-[#2c49fe]">
                            Events<span className="text-[#01c8ff]">Free</span>
                        </p>
                    </div>
                    <div className="hidden min-[1200px]:flex items-center gap-8">
                        <NavLink to="/" className={getLinkClass}>
                            HOME
                        </NavLink>

                        <NavLink to="/events" className={getLinkClass}>
                            EVENTS
                        </NavLink>

                        <NavLink to="/Feed" className={getLinkClass}>
                            FEED
                        </NavLink>

                        <NavLink to="/username" className={getLinkClass}>
                            USERNAME
                        </NavLink>

                        <Button
                            text="Log Out"
                            style='py-[11px] px-[28px] bg-[#2C49FE] rounded-[28px] font-["Poppins",sans-serif] text-white font-semibold hover:text-[#2C49FE] hover:bg-white'/>
                    </div>
                </div>
            </nav>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-6 right-6 flex flex-col gap-1 min-[1200px]:hidden z-1001">
                <span className={`w-7 h-0.75 bg-[#2C49FECC] transition ${isOpen && "rotate-45 translate-y-1"}`}/> 
                <span className={`w-7 h-0.75 bg-[#2C49FECC] transition ${isOpen && "hidden"}`} />
                <span className={`w-7 h-0.75 bg-[#2C49FECC] transition ${isOpen && "-rotate-45 -translate-y-1"}`} />
            </button>
            <div
                onClick={() => setIsOpen(false)} className={`fixed inset-0 bg-black/50 transition-opacity ${isOpen ? "opacity-100 visible" : "opacity-0 invisible" } z-998`}/>
            <div
                className={`fixed top-0 right-0 h-screen w-[50%] sm:w-[40%] bg-black text-white
        transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                    } z-999`}
            >
                <div className="flex flex-col gap-6 p-8 pt-24">
                    {["/", "/events", "/Feed", "/username"].map((path, i) => (
                        <NavLink key={i} to={path} onClick={() => setIsOpen(false)} className={({ isActive }) => `text-lg transition ${isActive ? "text-[#2C49FE]" : "text-white"  }` } >
                            {path === "/" ? "HOME" : path.replace("/", "").toUpperCase()}
                        </NavLink>
                    ))}

                    <Button
                        text="Log Out" textColor="text-white" bgColor="bg-[#2C49FE]"  padding="px-6 py-2" rounded="rounded-[23px]" font="font-semibold" hover="hover:bg-white hover:text-[#2C49FE]" />
                </div>
            </div>
        </>
    );
};

export default Navbar;