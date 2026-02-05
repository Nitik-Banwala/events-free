import React from 'react'
import P3section1 from './P3section1'
import Navbar from '../common/Navbar'
import Comfooter from '../common/Comfooter'
import Post from './Post'

const Feed = () => {
  return (
    <div>
      <Navbar  style={'bg-white'}/>
      <P3section1 />
      <div className='max-w-330 mx-auto'>
        <div className="flex flex-col mt-20 ">
          <div className="flex w-48 mb-4">
            <div className="h-2 bg-[#2C49FE] w-4/5"></div>
            <div className="h-2 bg-[#01C8FF] w-1/5"></div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            New Posts
          </h1>
        </div>
      </div>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Comfooter />
    </div>
  )
}

export default Feed