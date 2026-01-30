import React, { useEffect, useState } from "react";
import Commentsection from "./Commentsection";


const P2section4 = () => {
    return (

        <div className="flex flex-col mt-17 font-[Poppins,sans-serif] justify-center items-center ">
            <div>
                <div className="flex flex-col justify-center items-center ">
                    <div className="flex w-48 mb-4 ">
                        <div className="h-2 bg-[#2C49FE] w-3/4"></div>
                        <div className="h-2 bg-[#01C8FF] w-1/4"></div>
                    </div>
                    <h1 className='text-5xl font-semibold'>Tell Us!</h1>
                </div>
                <p className="text-center mt-4 text-[16px] font-normal ">Dictumst vulputate eget quisque iaculis hendrerit quis ut fringilla. Senectus gravida sed  <br />interdum pretium at quam morbi. Nunc, libero nam cursus sem faucibus urna. Hendrerit <br /> vulputate in duis donec sit. Ut vitae dolor fringilla urna eget aliquet.</p>
            </div>
            <Addcomment />
        </div>

    );
};

export const Addcomment = () => {
    const [input, setInput] = useState("");
    const [tasks, setTasks] = useState([]);


    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("tasks")) || [];
        setTasks(saved);
    }, []);
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const addTask = () => {
        if (input.trim() === "") return;

        setTasks([...tasks, { text: input, completed: false }]);
        setInput("");
    };

    const deleteTask = (index) => {
        const updated = tasks.filter((_, i) => i !== index);
        setTasks(updated);
    };

    return (
        <div className="w-full mt-12 max-w-330">
            <div className=" p-6">
                <div className="flex gap-3 rounded-4xl border mb-8 border-[#9CA1BE]  p-2 shadow-sm">
                    <img src="P2section4img.png" alt="" className="absolute -mt-0.75 -ml-0.75" />
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="           Add a new comment"
                        className="w-[85%] p-3 border-none outline-none"
                    />
                    <button
                        onClick={addTask}
                        className="w-[15%] px-5 bg-[#2C49FE] text-white font-semibold rounded-4xl hover:opacity-90 transition"
                    >
                        Post Comment
                    </button>
                </div>
                <ul className="space-y-3  mb-6 ">
                    {tasks.map((task, index) => (
                        <div className="mt-10">
                            <img src="/P2section4img.png" alt="" className=" absolute  " />
                            <li
                                key={index}
                                className="flex ml-17 justify-between max-w-310 flex-col  items-start  p-3   rounded-b-[20px] rounded-r-[20px] bg-[#F1F2F5]">
                                <h1>username</h1>
                                <span
                                    className={`task-text text-gray-700 ${task.completed ? "line-through max-w-310 text-gray-400" : ""
                                        }`}
                                >
                                    {task.text}
                                </span>
                            </li>
                            <div className="flex ml-23 mt-1 gap-4 text-gray-500 text-xl">
                                <button
                                    onClick={() => deleteTask(index)}
                                    className="hover:text-red-600 flex gap-2  items-center flex-row text-black opacity-50" >
                                    <svg width="19" height="21" viewBox="0 0 19 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 4.5C19 4.74493 18.91 4.98134 18.7473 5.16437C18.5845 5.34741 18.3603 5.46434 18.117 5.493L18 5.5H17.155L15.924 18.02C15.857 18.6994 15.5397 19.3295 15.0338 19.7879C14.5279 20.2462 13.8697 20.5001 13.187 20.5H5.813C5.13035 20.5001 4.47207 20.2462 3.9662 19.7879C3.46033 19.3295 3.14302 18.6994 3.076 18.02L1.845 5.5H1C0.734784 5.5 0.48043 5.39464 0.292893 5.20711C0.105357 5.01957 0 4.76522 0 4.5C0 4.23478 0.105357 3.98043 0.292893 3.79289C0.48043 3.60536 0.734784 3.5 1 3.5H6C6 3.04037 6.09053 2.58525 6.26642 2.16061C6.44231 1.73597 6.70012 1.35013 7.02513 1.02513C7.35013 0.700121 7.73597 0.442313 8.16061 0.266422C8.58525 0.0905302 9.04037 0 9.5 0C9.95963 0 10.4148 0.0905302 10.8394 0.266422C11.264 0.442313 11.6499 0.700121 11.9749 1.02513C12.2999 1.35013 12.5577 1.73597 12.7336 2.16061C12.9095 2.58525 13 3.04037 13 3.5H18C18.2652 3.5 18.5196 3.60536 18.7071 3.79289C18.8946 3.98043 19 4.23478 19 4.5ZM11.75 7.75C11.5688 7.75001 11.3937 7.81564 11.2571 7.93477C11.1205 8.05389 11.0316 8.21845 11.007 8.398L11 8.5V15.5L11.007 15.602C11.0317 15.7815 11.1206 15.946 11.2571 16.0651C11.3937 16.1842 11.5688 16.2498 11.75 16.2498C11.9312 16.2498 12.1063 16.1842 12.2429 16.0651C12.3794 15.946 12.4683 15.7815 12.493 15.602L12.5 15.5V8.5L12.493 8.398C12.4684 8.21845 12.3795 8.05389 12.2429 7.93477C12.1063 7.81564 11.9312 7.75001 11.75 7.75ZM7.25 7.75C7.06876 7.75001 6.89366 7.81564 6.75707 7.93477C6.62048 8.05389 6.53165 8.21845 6.507 8.398L6.5 8.5V15.5L6.507 15.602C6.5317 15.7815 6.62055 15.946 6.75714 16.0651C6.89372 16.1842 7.0688 16.2498 7.25 16.2498C7.4312 16.2498 7.60628 16.1842 7.74286 16.0651C7.87945 15.946 7.9683 15.7815 7.993 15.602L8 15.5V8.5L7.993 8.398C7.96835 8.21845 7.87952 8.05389 7.74293 7.93477C7.60634 7.81564 7.43124 7.75001 7.25 7.75ZM9.5 2C9.10218 2 8.72064 2.15804 8.43934 2.43934C8.15804 2.72064 8 3.10218 8 3.5H11C11 3.10218 10.842 2.72064 10.5607 2.43934C10.2794 2.15804 9.89782 2 9.5 2Z" fill="black" />
                                    </svg>
                                    <h1>Remove Comment</h1>
                                </button>
                            </div>
                        </div>
                    ))}
                </ul>
                <Commentsection />
            </div>
        </div>

    );
};

export default P2section4;
