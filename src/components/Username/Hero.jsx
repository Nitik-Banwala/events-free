import React from 'react'
import Cards from './Cards'
import { Link } from 'react-router'

const Hero = () => {
  return (
    <div className="font-[Poppins,sans-serif]">

      <div className="h-96 bg-[url('/png/Usernamehero.png')] bg-cover bg-center">
        <div className="mx-auto max-w-7xl px-4 pt-56">
          <h1 className="text-white flex flex-row gap-2  ">
            <Link to='/' >
              <h1 className='cursor-pointer'>
                Home
              </h1>
            </Link>
            {">"} Events</h1>
          <p className="text-white text-4xl sm:text-5xl md:text-[64px] mt-2">
            Events
          </p>
        </div>
      </div>

      <div className="mt-20 mb-32 px-4">

        <div className="flex flex-col items-center text-center">
          <div className="flex w-48 mb-4">
            <div className="h-2 bg-[#2C49FE] w-4/5"></div>
            <div className="h-2 bg-[#01C8FF] w-1/5"></div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            Choose your next event
          </h1>
        </div>

        <div className=" mt-12 mx-auto  max-w-330 grid grid-cols-1 min-[890px]:grid-cols-2 min-[1310px]:grid-cols-3 gap-6 justify-items-center
        ">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-full max-w-106">
              <Cards />
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Hero
