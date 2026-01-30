import React from 'react'
import { Video2 } from '../Homepage /Video'

const P2section2 = () => {
    return (
        <div className="w-full px-4 font-[Poppins,sans-serif]">
            <div className="max-w-330 mx-auto flex flex-col lg:flex-row gap-10 lg:gap-18 mt-16 lg:mt-32
            ">
                <div className="w-full lg:w-1/2 text-[16px]  sm:text-base leading-relaxed">
                    <svg className="mb-6"  width="118"  height="98" viewBox="0 0 118 98"  fill="none" xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M50.9833 6.10352e-05C30.0734 1.46936 0.0165176 4.80778 0 45.7589V97.2826H46.6596V42.156H31.1663C30.1849 27.4361 42.3059 23.6353 55.4869 20.7176L50.9833 6.10352e-05ZM113.496 6.10352e-05C92.5861 1.46936 62.5293 4.80798 62.5129 45.7589V97.2826H109.173V42.156H93.6793C92.6978 27.436 104.819 23.6352 118 20.7175L113.496 6.10352e-05Z"
                            fill="#2C49FE"
                        />
                    </svg>
                    Semper faucibus suscipit ultricies eleifend semper sit tellus gravida pretium.
                    Cras cursus ut semper eleifend tortor lectus tristique turpis. Laoreet amet
                    ultrices est lectus accumsan nibh cursus nunc. Faucibus orci, neque, pretium,
                    massa volutpat convallis nisl pellentesque. Gravida in ultrices vitae tortor.
                    Dignissim viverra volutpat neque gravida aliquet urna faucibus viverra
                    vulputate. nibh cursus nunc. Faucibus orci, neque, pretium, massa volutpat
                    convallis nisl pellentesque. Gravida in ultrices vitae tortor. Dignissim
                    viverra volutpat neque gravida aliquet urna faucibus viverra vulputate.
                </div>

                <div className="w-full lg:w-1/2 flex justify-center">
                    <Video2 />
                </div>
            </div>
        </div>
    )
}

export default P2section2
