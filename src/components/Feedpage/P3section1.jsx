import React from 'react'

const P3section1 = () => {
  return (
    <div className='max-w-330 mx-auto'>
      <div className='mt-40 flex flex-row font-["Poppins",sans-serif]'>
        <img src="/png/p3s1img.png" alt="rfweqd" className='max-w-100' />
        <div className='ml-15'>
          <h1 className="text-sm text-gray-500 mb-3">
            Home <span className="mx-1">{">"}</span> Username
          </h1>
          <div className="flex flex-row max-[947px]:flex-col sm:items-center mt-3 mb-5  gap-25 max-[1240px]:gap-2">
            <h1 className="text-5xl font-semibold">Jhone Doe</h1>
          </div>
          <p className="text-gray-600 text-sm mt-5 leading-relaxed ">
            Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla.
            Senectus gravida sed interdum pretium  <br />at quam morbi. Nunc, libero nam
            cursus sem faucibus urna. Hendrerit vulputate in duis donec sit.
            Ut vitae  <br />dolor fringilla urna eget aliquet.
          </p>
          <h1 className='mt-8 text-[16px] font-semibold '>Following Events :</h1>
          <div className='flex flex-row gap-5 mt-11'>
            <div className=' shadow-2xl p-3 rounded-[20px] max-w-80.5 flex flex-row gap-3.25'>
              <img src="/png/Augueentiamone.png" alt="" className='max-w-28.5' />
              <div className='mt-4.5'>
                <h1 className='font-bold '>Augue etiam</h1>
                <p className='font-normal text-[12px]'> Quis et id urna sagittis. <br /> Enim lacus, felis, libero sed <br /> nisl vitae blandit sociis.</p>
              </div>
            </div>
            <div className='rounded-[20px] shadow-2xl p-3  max-w-80.5 flex flex-row gap-3.25'>
              <img src="/png/Augueentiamtwo.png" alt="" className='max-w-28.5' />
              <div className='mt-4.5'>
                <h1 className='font-bold '>Augue etiam</h1>
                <p className='font-normal text-[12px]'> Quis et id urna sagittis. <br /> Enim lacus, felis, libero sed <br /> nisl vitae blandit sociis.</p>
              </div>
            </div>
            <div className='flex flex-col py-8 px-14 bg-[#d3daff] rounded-[20px] shadow-2xl justify-center items-center '>
              <h1 className='text-4xl font-semibold'>+15</h1>
              <p className='text-[16px] font-normal'>more</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default P3section1