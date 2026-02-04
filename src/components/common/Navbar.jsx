import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import Button from "./Button";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);


    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 1200) setIsOpen(false);
        };
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    return (
        < >
            <nav className="fixed  top-0 left-0 w-full bg-black/40 backdrop-blur-[9px] p-4  z-50">
                <div className="flex justify-between items-center  min-[500px]:px-6 px-0 max-w-330 mx-auto ">
                    <div className="flex items-center gap-2 sm:scale-100 scale-70">
                        <img src="/png/logo.png" className="scale-80 " alt="logo" />
                        <p className="text-4xl font-bold text-[#2c49fe]">
                            Events<span className="text-[#01c8ff]">Free</span>
                        </p>
                    </div>
                    <div className="hidden min-[1200px]:flex items-center gap-8 text-white">

                        <Link to="/" className="hover:font-semibold transition">
                            HOME
                        </Link>

                        <Link to="/EVENTS" className="hover:font-semibold transition">
                            EVENTS
                        </Link>

                        <Link to="/FEED" className="hover:font-semibold transition">
                            FEED
                        </Link>

                        <Link to="/USERNAME" className="hover:font-semibold transition">
                            USERNAME
                        </Link>

                        <Button
                            text="Log Out"
                            style={'py-[11px] px-[28px] bg-[#2C49FE] rounded-[28px] font-["Poppins",sans-serif] text-white font-semibold hover:text-[#2C49FE] hover:bg-[white]'} />

                    </div>

                </div>
            </nav>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-6 right-6 flex flex-col gap-1 mt-5 mr-3 min-[1200px]:hidden z-1001 "
            >
                <span className={`w-7 h-0.75 bg-white rounded transition ${isOpen && "rotate-45 translate-y-1.75"}`} />
                <span className={`w-7 h-0.75 bg-white rounded transition ${isOpen && "opacity-0"}`} />
                <span className={`w-7 h-0.75 bg-white rounded transition ${isOpen && "-rotate-45 -translate-y-1.75"}`} />
            </button>


            <div
                onClick={() => setIsOpen(false)}
                className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    } z-998`}
            />


            <div
                className={`fixed top-0 right-0 h-screen w-[50%] sm:w-[40%] bg-black text-white
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"} z-999`}
            >
                <div className="flex flex-col gap-6 p-8 pt-24">

                    <Link
                        to="/"
                        onClick={() => setIsOpen(false)}
                        className="text-lg hover:text-[#2C49FE] transition cursor-pointer"
                    >
                        HOME
                    </Link>

                    <Link
                        to="/EVENTS"
                        onClick={() => setIsOpen(false)}
                        className="text-lg hover:text-[#2C49FE] transition cursor-pointer"
                    >
                        EVENTS
                    </Link>

                    <Link
                        to="/FEED"
                        onClick={() => setIsOpen(false)}
                        className="text-lg hover:text-[#2C49FE] transition cursor-pointer"
                    >
                        FEED
                    </Link>

                    <Link
                        to="/ USERNAME"
                        onClick={() => setIsOpen(false)}
                        className="text-lg hover:text-[#2C49FE] transition cursor-pointer"
                    >
                        USERNAME
                    </Link>

                    <Button
                        text="Log Out"
                        textColor="text-white"
                        bgColor="bg-[#2C49FE]"
                        padding="px-6 py-2"
                        rounded="rounded-[23px]"
                        font="font-semibold"
                        hover="hover:bg-white hover:scale-105 transition-all duration-500 ease-in-out hover:text-[#2C49FE]"
                    />
                </div>

            </div>
        </>
    );
};

export default Navbar;