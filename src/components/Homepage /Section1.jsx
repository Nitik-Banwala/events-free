import React from 'react'
import Button from '../common/Button'
import Footer from '../Homepage /Footer'


const Section1 = () => {
  return (
      <div>     
          <div className="w-full">
              <div className="min-h-screen bg-[url('/png/background.png')] bg-cover bg-center">
                  <div className="min-h-screen bg-black/60">
                      <div className="max-w-330 mx-auto px-6 pt-32 md:pt-40">
                          <h1 className='text-white font-bold font-["Poppins",sans-serif]
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>
                              Sed tortor in quisque morbi
                          </h1>
                          <div className="flex mt-4 w-40 sm:w-90 sm:ml-35 md:ml-77 lg:ml-120 ">
                              <div className="h-2 bg-[#2C49FE] w-3/4"></div>
                              <div className="h-2 bg-[#01C8FF] w-1/4"></div>
                          </div>
                          <h1 className='text-white font-bold font-["Poppins",sans-serif]
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2'>
                              scelerisque etiam eu.
                          </h1>
                          <p className='text-white mt-6 font-["Yantramanav",sans-serif]
              text-base sm:text-[20px] '>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur urna in dictum <br /> suscipit. Suspendisse maximus ipsum sem. Donec ut justo et leo congue lacinia vitae nec  <br />arcu. Nunc elit elit, malesuada id suscipit cursus,
                          </p>
                          <div className="flex flex-wrap items-center gap-6 mt-8">
                              <Button
                                  text="Get Started" style={'py-[11px] px-[28px] bg-[#2C49FE] rounded-[28px] font-["Poppins",sans-serif] text-white font-semibold hover:text-[#2C49FE] hover:bg-[white]'} />
                              <p className='text-white font-["Poppins",sans-serif] text-lg cursor-pointer'>
                                  Learn more
                              </p>
                          </div>
                      </div>
                      <Footer/>
                  </div>
                  <div
                      className="bg-black/60 w-full h-10"></div>
              </div>
          </div>
    </div>
  )
}

export default Section1