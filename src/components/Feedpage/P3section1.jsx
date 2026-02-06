import React from "react";
import { Link } from "react-router";

const P3section1 = () => {
  return (
    <div className="max-w-330 mx-auto px-4">
      <div className="mt-20 lg:mt-40 flex flex-col lg:flex-row font-['Poppins',sans-serif] gap-10">
        <div className="flex justify-center lg:justify-start">
          <img
            src="/png/p3s1img.png"
            alt="profile"
            className="w-full max-w-125"
          />
        </div>
        <div className="lg:ml-15">
          <h1 className="text-sm text-gray-500 mb-3 text-center lg:text-left flex flex-row">
            <Link to='/' >
                          <h1 className='cursor-pointer'>
                            Home
                          </h1>
                        </Link> <span className="mx-1">{">"}</span> Feed
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center mt-3 mb-5 gap-6 justify-center lg:justify-start">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center lg:text-left">
              Jhone Doe
            </h1>
          </div>
          <p className="text-gray-600 text-sm mt-5  text-center lg:text-left ">
            Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla.
            Senectus gravida sed interdum pretium <br /> at quam morbi. Nunc, libero nam
            cursus sem faucibus urna. Hendrerit vulputate in duis donec sit.
            Ut vitae <br /> dolor fringilla urna eget aliquet.
          </p>
          <h1 className="mt-8 text-[16px] font-medium text-center text-[#000000] opacity-60 lg:text-left">
            Following Events :
          </h1>
          <div className="flex flex-col sm:flex-row flex-wrap gap-5 mt-11 justify-center lg:justify-start">
            <div className="shadow-2xl p-3 rounded-[20px] w-full sm:w-72 flex gap-3">
              <img
                src="/png/Augueentiamone.png"
                alt=""
                className="w-22.5"
              />
              <div className="mt-2">
                <h1 className="font-bold">Augue etiam</h1>
                <p className="text-[12px] text-gray-600">
                  Quis et id urna sagittis. <br />
                  Enim lacus, felis, libero sed <br />
                  nisl vitae blandit sociis.
                </p>
              </div>
            </div>
            <div className="shadow-2xl p-3 rounded-[20px] w-full sm:w-72 flex gap-3">
              <img
                src="/png/Augueentiamtwo.png"
                alt=""
                className="w-22.5"
              />
              <div className="mt-2">
                <h1 className="font-bold">Augue etiam</h1>
                <p className="text-[12px] text-gray-600">
                  Quis et id urna sagittis. <br />
                  Enim lacus, felis, libero sed <br />
                  nisl vitae blandit sociis.
                </p>
              </div>
            </div>
            <Link to='/Events'>
            <div className="flex flex-col py-8 px-10 bg-[#d3daff] rounded-[20px] shadow-2xl justify-center items-center w-full sm:w-40">
              <h1 className="text-3xl font-semibold">+15</h1>
              <p className="text-[16px]">more</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default P3section1;
