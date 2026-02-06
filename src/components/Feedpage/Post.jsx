import React, { useState } from "react";
import { Addfeedcomment } from "./Feedcomment";
import { Link, useLocation } from 'react-router-dom'

const Post = () => {
    return (
        <div className='max-w-330 mx-auto px-4 font-["Poppins",sans-serif]'>
            <Addpost />
        </div>
    );
};

export function Like() {
    const [liked, setLiked] = useState(false);
    const [count, setCount] = useState(10);

    const handleClick = () => {
        setLiked(!liked);
        setCount(liked ? 10 : 11);
    };

    return (
        <div
            className="flex items-center gap-2 w-10 cursor-pointer"
            onClick={handleClick}
        >
            <svg
                width="22"
                height="20"
                viewBox="0 0 22 20"
                fill={liked ? "red" : "none"}
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M6.5 1C3.4625 1 1 3.4625 1 6.5C1 12 7.5 17 11 18.163C14.5 17 21 12 21 6.5C21 3.4625 18.5375 1 15.5 1C13.64 1 11.995 1.9235 11 3.337C10.4928 2.6146 9.81908 2.02505 9.03577 1.61824C8.25245 1.21144 7.38265 0.999377 6.5 1Z"
                    stroke={liked ? "red" : "black"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            <h1>{count}</h1>
        </div>
    );
}

export const Addpost = () => {
    const [showComments, setShowComments] = useState(false);
    const [commentCount, setCommentCount] = useState(3);

    return (
        <div className="p-6 sm:p-9 shadow-2xl mt-8 rounded-[30px] mb-20">
            <div className="flex flex-col lg:flex-row gap-9 ">
                <div className="flex-1">
                    <div className="flex flex-row gap-6">
                        <img src="/png/P2section4img.png" alt="" className="w-16 sm:w-18" />
                        <div className="flex flex-col mt-2">
                            <h1 className="text-xl sm:text-2xl font-semibold">Username</h1>
                            <p className="text-[16px] font-normal">Post event name</p>
                        </div>
                    </div>

                    <p className="mt-8 sm:mt-11 text-xl sm:text-2xl font-semibold">
                        Fusce adipiscing nunc et tellus eu, tristique <br className="hidden sm:block" />
                        sodales sit aliquet.
                    </p>
                    <div className="flex flex-row mt-5 gap-3 items-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.6">
                                <path d="M7 11H9V13H7V11ZM7 15H9V17H7V15ZM11 11H13V13H11V11ZM11 15H13V17H11V15ZM15 11H17V13H15V11ZM15 15H17V17H15V15Z" fill="black" />
                                <path d="M5 22H19C20.103 22 21 21.103 21 20V6C21 4.897 20.103 4 19 4H17V2H15V4H9V2H7V4H5C3.897 4 3 4.897 3 6V20C3 21.103 3.897 22 5 22ZM19 8L19.001 20H5V8H19Z" fill="black" />
                            </g>
                        </svg>
                        <h1>10/02/2022</h1>
                    </div>
                    <div className="mt-5 text-[16px] font-normal text-[#6b6b6b]">
                        <p>
                            Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla. <br /> Senectus gravida sed interdum pretium at quam morbi. Nunc, libero <br /> nam cursus sem faucibus urna. Hendrerit vulputate in duis donec sit. <br /> Ut vitae dolor fringilla urna eget aliquet.
                        </p>
                        <p className="mt-3">
                            Sed interdum pretium at quam morbi. Nunc, libero nam cursus sem <br /> faucibus urna. Hendrerit vulputate in duis donec sit. Ut vitae dolor  <br />fringilla urna eget aliquet.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-6 sm:gap-7 justify-left">
                    <div className="flex flex-col gap-6">
                        <img src="./png/feedone.png" alt="" className="w-full lg:w-65 h-auto  2xl:w-75 hover:scale-[1.1] transition-transform duration-200 " />
                        <img src="./png/feedtwo.png" alt="" className="w-full lg:w-65 h-auto  2xl:w-75  hover:scale-[1.1] transition-transform duration-200" />
                    </div>
                    <div className="relative flex flex-col gap-6">
                        <img
                            src="./png/feedthree.png"
                            alt=""
                            className="w-full lg:w-65 h-auto 2xl:w-75 hover:scale-[1.1] transition-transform duration-200"
                        />

                        <img
                            src="./png/feedfour.png"
                            alt=""
                            className="w-full lg:w-65 h-auto 2xl:w-75 hover:scale-[1.1] transition-transform duration-200"
                        />
                        <Link to='/Events'>
                        <div className="
                                      absolute 
                                      bottom-6 right-6
                                      flex flex-col py-6 bg-white
                                      rounded-[20px] shadow-2xl
                                      hover:scale-[1.04] transition-transform duration-200
                                      justify-center items-center
                                      w-40 max-[1535px]:mb-6 max-[1237px]:mb-12 max-[1234px]:mb-18 max-[1228px]:mb-25 max-[1213px]:mb-33 max-[1209px]:mb-39 max-[1207px]:mb-45 max-[1024px]:mb-0
                                  ">
                            <h1 className="text-3xl font-semibold">+15</h1>
                            <p className="text-[16px]">more</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="flex flex-row gap-6 mt-6">
                <Like />
                <div
                    className="flex flex-row gap-2 cursor-pointer"
                    onClick={() => setShowComments(prev => !prev)}
                >
                    <svg width="24" height="17" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1">
                        <path d="M6.75018 8.25C5.92049 8.25 5.25018 8.92031 5.25018 9.75C5.25018 10.5797 5.92049 11.25 6.75018 11.25C7.57987 11.25 8.25018 10.5797 8.25018 9.75C8.25018 8.92031 7.57987 8.25 6.75018 8.25ZM12.0002 8.25C11.1705 8.25 10.5002 8.92031 10.5002 9.75C10.5002 10.5797 11.1705 11.25 12.0002 11.25C12.8299 11.25 13.5002 10.5797 13.5002 9.75C13.5002 8.92031 12.8299 8.25 12.0002 8.25ZM17.2502 8.25C16.4205 8.25 15.7502 8.92031 15.7502 9.75C15.7502 10.5797 16.4205 11.25 17.2502 11.25C18.0799 11.25 18.7502 10.5797 18.7502 9.75C18.7502 8.92031 18.0799 8.25 17.2502 8.25ZM12.0002 0C5.37206 0 0.000181322 4.36406 0.000181322 9.75C0.000181322 11.9812 0.932994 14.025 2.47987 15.6703C1.78143 17.5172 0.328306 19.0828 0.304869 19.1016C-0.00450618 19.4297 -0.0888812 19.9078 0.0892438 20.3203C0.267369 20.7328 0.675181 21 1.12518 21C4.00799 21 6.28143 19.7953 7.64549 18.8297C9.00018 19.2563 10.4627 19.5 12.0002 19.5C18.6283 19.5 24.0002 15.1359 24.0002 9.75C24.0002 4.36406 18.6283 0 12.0002 0ZM12.0002 17.25C10.7486 17.25 9.51112 17.0578 8.32518 16.6828L7.26112 16.3453L6.34706 16.9922C5.67674 17.4656 4.75799 17.9953 3.65174 18.3516C3.99393 17.7844 4.32674 17.1469 4.58456 16.4672L5.08143 15.15L4.11581 14.1281C3.26737 13.2234 2.25018 11.7281 2.25018 9.75C2.25018 5.61563 6.62362 2.25 12.0002 2.25C17.3767 2.25 21.7502 5.61563 21.7502 9.75C21.7502 13.8844 17.3767 17.25 12.0002 17.25Z" fill="black" />
                    </svg>
                    <h1>{commentCount}</h1>
                </div>
            </div>

            {showComments && (
                <div>
                    <div className="border border-[#b4b4b4] mt-6"></div>
                    <Addfeedcomment
                        onAddComment={() => setCommentCount(prev => prev + 1)}
                        onDeleteComment={() => setCommentCount(prev => Math.max(0, prev - 1))}
                    />
                </div>
            )}
        </div>
    );
};

export default Post;
