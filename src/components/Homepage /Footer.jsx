import React from 'react'
import Button from '../common/Button'

const Footer = () => {
    return (
        <div className='max-w-330 mx-auto'>
            <div className='bg-[#2C49FEBD] max-w-240.5  mx-4 mt-40.25 items-center   p-4 min-[701px]:flex max-[420px]:flex-col max-[420px]:flex max-[420px]:w-fit
    min-[701px]:flex-row min-[701px]:justify-between min-[701px]:rounded-[150px] max-[700px]:grid max-[700px]:grid-cols-2 max-[700px]:grid-rows-2 max-[700px]:gap-4 max-[700px]:rounded-4xl'>
                <div className='flex flex-row items-center gap-4 ml-4 '>
                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5 16.7917C17.6401 16.7917 19.375 15.0569 19.375 12.9167C19.375 10.7766 17.6401 9.04175 15.5 9.04175C13.3599 9.04175 11.625 10.7766 11.625 12.9167C11.625 15.0569 13.3599 16.7917 15.5 16.7917Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15.4993 2.58337C12.7588 2.58337 10.1305 3.67206 8.19258 5.60994C6.2547 7.54781 5.16602 10.1761 5.16602 12.9167C5.16602 15.3605 5.68527 16.9596 7.10352 18.7292L15.4993 28.4167L23.8952 18.7292C25.3134 16.9596 25.8327 15.3605 25.8327 12.9167C25.8327 10.1761 24.744 7.54781 22.8061 5.60994C20.8682 3.67206 18.2399 2.58337 15.4993 2.58337V2.58337Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15.5 16.7917C17.6401 16.7917 19.375 15.0569 19.375 12.9167C19.375 10.7766 17.6401 9.04175 15.5 9.04175C13.3599 9.04175 11.625 10.7766 11.625 12.9167C11.625 15.0569 13.3599 16.7917 15.5 16.7917Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15.4993 2.58337C12.7588 2.58337 10.1305 3.67206 8.19258 5.60994C6.2547 7.54781 5.16602 10.1761 5.16602 12.9167C5.16602 15.3605 5.68527 16.9596 7.10352 18.7292L15.4993 28.4167L23.8952 18.7292C25.3134 16.9596 25.8327 15.3605 25.8327 12.9167C25.8327 10.1761 24.744 7.54781 22.8061 5.60994C20.8682 3.67206 18.2399 2.58337 15.4993 2.58337V2.58337Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className='text-white font-medium text-[20px] font-["Yantramanav",sans-serif]'>Location <br />
                        <span className=' font-normal text-[14px] text-[#FFFFFFB2] font-["Yantramanav",sans-serif]'>Search by city</span>
                    </p>
                </div>
                <div className="min-h-18.5 border-2 border-white w-0 max-md:hidden">
                </div>
                <div className='flex flex-row items-center gap-4 '>
                    <div >
                        <i className="fa-solid fa-calendar text-white text-2xl"></i>
                    </div>
                    <p className='text-white font-medium text-[20px] font-["Yantramanav",sans-serif]'>Date <br /><span className='font-normal text-[14px] text-[#FFFFFFB2] font-["Yantramanav",sans-serif]'>
                        21/01/2026
                    </span></p>
                </div>
                <div className="min-h-18.5 border-2 border-white w-0 max-md:hidden">
                </div>
                <div className='flex flex-row items-center gap-4  '>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.8981 24.69L20.0981 18.285C19.9848 17.3778 19.5439 16.5432 18.8583 15.9383C18.1728 15.3333 17.2899 14.9996 16.3756 15H13.6206C12.7068 15.0003 11.8245 15.3342 11.1395 15.9391C10.4545 16.544 10.0139 17.3782 9.90062 18.285L9.09937 24.69C9.0554 25.0419 9.08679 25.3991 9.19147 25.7379C9.29615 26.0768 9.47171 26.3894 9.70651 26.6552C9.9413 26.921 10.2299 27.1338 10.5533 27.2794C10.8766 27.4251 11.2272 27.5003 11.5819 27.5H18.4169C18.7714 27.5001 19.1219 27.4248 19.4451 27.279C19.7683 27.1333 20.0567 26.9205 20.2914 26.6547C20.5261 26.389 20.7015 26.0764 20.8061 25.7376C20.9107 25.3989 20.9421 25.0418 20.8981 24.69V24.69Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15 10C17.0711 10 18.75 8.32107 18.75 6.25C18.75 4.17893 17.0711 2.5 15 2.5C12.9289 2.5 11.25 4.17893 11.25 6.25C11.25 8.32107 12.9289 10 15 10Z" stroke="white" strokeWidth="2" />
                        <path d="M5 13.75C6.38071 13.75 7.5 12.6307 7.5 11.25C7.5 9.86929 6.38071 8.75 5 8.75C3.61929 8.75 2.5 9.86929 2.5 11.25C2.5 12.6307 3.61929 13.75 5 13.75Z" stroke="white" strokeWidth="2" />
                        <path d="M25 13.75C26.3807 13.75 27.5 12.6307 27.5 11.25C27.5 9.86929 26.3807 8.75 25 8.75C23.6193 8.75 22.5 9.86929 22.5 11.25C22.5 12.6307 23.6193 13.75 25 13.75Z" stroke="white" strokeWidth="2" />
                        <path d="M5.00023 17.5H4.61773C4.02593 17.4999 3.4533 17.7098 3.0017 18.0923C2.5501 18.4747 2.24883 19.005 2.15148 19.5887L1.73523 22.0887C1.67549 22.4469 1.69451 22.8138 1.79094 23.1639C1.88738 23.514 2.05892 23.8389 2.29364 24.116C2.52836 24.393 2.82062 24.6156 3.1501 24.7683C3.47957 24.921 3.83835 25 4.20148 25H8.75023" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M25 17.5H25.3825C25.9743 17.4999 26.5469 17.7098 26.9985 18.0923C27.4501 18.4747 27.7514 19.005 27.8487 19.5887L28.265 22.0887C28.3247 22.4469 28.3057 22.8138 28.2093 23.1639C28.1129 23.514 27.9413 23.8389 27.7066 24.116C27.4719 24.393 27.1796 24.6156 26.8501 24.7683C26.5207 24.921 26.1619 25 25.7987 25H21.25" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className='text-white font-medium text-[20px] font-["Yantramanav",sans-serif]'>Capicity <br /><span className='font-normal text-[14px] text-[#FFFFFFB2] font-["Yantramanav",sans-serif]'>
                        Search by city
                    </span></p>
                </div>
                <div className="min-h-18.5 border-2 border-white w-0 max-md:hidden">
                </div>
                <Button
                    text={'GO CHECK'} style={'bg-[#fff] hover:bg-[#2C49FE] hover:text-[white] font-bold sm:px-10 sm:py-5 px-2 py-1 sm:rounded-[150px] rounded-[20px] text-[#2C49FE] sm:text-[20px] min-[700px]:mr-2 max-[700px]:mt-5'}
                />
            </div>
        </div>
    )
}

export default Footer
