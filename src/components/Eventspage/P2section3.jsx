import React from 'react'

const P2section3 = () => {
    return (
        <div className='flex flex-col font-[Poppins,sans-serif] mt-16 '>
            <div className='w-full flex flex-col justify-center items-center'>
                <div className="flex w-48 mb-4 ">
                    <div className="h-2 bg-[#2C49FE] w-3/4"></div>
                    <div className="h-2 bg-[#01C8FF] w-1/4"></div>
                </div>
                <h1 className='text-5xl font-semibold'>Gallery</h1>
            </div>
            <div className="bg-white flex items-center justify-center min-h-screen p-4 mt-17">
                <div className="w-full max-w-330">
                    <div
                        className=" grid gap-3 h-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-[150px] sm:auto-rows-[200px] md:auto-rows-[250px] lg:auto-rows-[300px]" >
                        <div className="rounded-2xl overflow-hidden">
                            <img src="/png/P2section3img1.png" alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="rounded-2xl overflow-hidden">
                            <img src="/png/P2section3img2.png" alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="rounded-2xl overflow-hidden md:row-span-2">
                            <img src="/png/P2section3img3.png" alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="rounded-2xl overflow-hidden md:col-span-2">
                            <img src="/png/P2section3img4.png" alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="rounded-2xl overflow-hidden">
                            <img src="/png/P2section3img5.png" alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="rounded-2xl overflow-hidden md:col-span-2">
                            <img src="/png/P2section3img6.png" alt="" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default P2section3