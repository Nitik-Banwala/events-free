import React from "react";

const Section4 = () => {
    return (
        <section className="w-full py-16  px-4 font-[Poppins,sans-serif]">
            <div className="max-w-330 mx-auto flex flex-col lg:flex-row gap-14 items-start">
                <div className="">
                    <div className="flex w-48 mb-4">
                        <div className="h-2 bg-[#2C49FE] w-3/4"></div>
                        <div className="h-2 bg-[#01C8FF] w-1/4"></div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                        Explore our <br /> latest events
                    </h1>
                    <p className="text-gray-600 text-[16px] leading-7 mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc <br />
                        efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. <br />
                        Donec ut justo et leo congue lacinia vitae nec arcu.
                    </p>
                    <a
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="font-semibold text-sm tracking-wide hover:underline cursor-pointer"
                    >
                        Learn more
                    </a>
                </div>
                <div className=" flex flex-row gap-10 max-[568px]:flex-col  ">
                    <div className="bg-white max-w-85 cursor-pointer  overflow-hidden shadow-md hover:shadow-2xl transition duration-300">
                        <img src="/png/section4img1.png" alt="" className="p-3" />
                        <div className="p-4">
                            <p className="text-sm text-gray-500 mb-1">09/23/2026</p>
                            <h3 className="text-xl font-semibold mb-2">
                                Lorem ipsum
                            </h3>
                            <p className="text-sm text-gray-600 leading-6">
                                Lorem ipsum dolor sit amet,  <br /> consectetur adipiscing elit.
                                Nunc  <br />efficitur urna in
                            </p>
                        </div>
                    </div>
                    <div className="bg-white max-w-85 cursor-pointer overflow-hidden shadow-md hover:shadow-2xl transition duration-300">
                        <img src="/png/section4img2.png" alt="" className=" p-3" />
                        <div className="p-4">
                            <p className="text-sm text-gray-500 mb-1">09/23/2026</p>
                            <h3 className="text-xl font-semibold mb-2">
                                Lorem ipsum
                            </h3>
                            <p className="text-sm text-gray-600 leading-6">
                                Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
                                Nunc  <br />efficitur urna in
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section4;