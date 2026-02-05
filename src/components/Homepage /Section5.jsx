import React, { useState } from "react";
import Button from "../common/Button";
import Input from "./Input";

const Section5 = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        about: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let newErrors = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = "First name is required";
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = "Last name is required";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Invalid email address";
        }

        const passwordRegex = /^(?=.*[A-Z])(?=.*[@$!%*?&#])/;
        if (!passwordRegex.test(formData.password)) {
            newErrors.password = "1 capital & 1 symbol required";

        }

        if (formData.confirmPassword !== formData.password) {
            newErrors.confirmPassword = "Passwords do not match";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log("Form Submitted", formData);
        }
    };

    return (
        <div className="max-w-330 mx-auto px-4 py-16 flex flex-col lg:flex-row items-center gap-20">

            <div className="w-full lg:w-1/2 flex justify-center">
                <img
                    src="/png/section5img.png"
                    alt="Join Us"
                    className="max-w-full h-auto"
                />
            </div>

            <div className="w-full lg:w-1/2">

                <div className="flex w-48 mb-4">
                    <div className="h-1.5 bg-[#2C49FE] w-3/4"></div>
                    <div className="h-1.5 bg-[#01C8FF] w-1/4"></div>
                </div>

                <h1 className="text-5xl font-bold text-gray-900 mb-3">
                    Join Us!
                </h1>

                <p className="text-gray-600 leading-relaxed mb-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc <br />
                    efficitur urna in dictum suscipit. Suspendisse maximus ipsum sem. <br />
                    Donec ut justo et leo congue.
                </p>

                <div>
                    <h2 className="text-4xl font-bold mb-6 text-gray-900">
                        Sign Up
                    </h2>

                    <form onSubmit={handleSubmit}>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            <div className="flex flex-col">
                            <Input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 border rounded`}
                            />

                            {errors.firstName && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.firstName}
                                </p>
                                )}
                            </div>
                            <div className="flex flex-col">
                            <Input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                                className={`w-full px-4 py-3 border rounded`}
                            />

                            {errors.lastName && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.lastName}
                                </p>
                                )}
                            </div>
                        </div>
                        <div className="flex  mt-2 flex-col">
                        <Input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-4 py-3 border rounded`}
                        />

                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.email}
                            </p>
                        )}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 mt-2 gap-2">
                            <div className="flex flex-col">
                            <Input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                className={`w-full  px-4 py-3 border rounded`}
                            />

                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.password}
                                </p>
                                )}
                            </div>
                            <div className="flex flex-col">
                            <Input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className={`w-full  px-4 py-3 border rounded`}
                            />

                            {errors.confirmPassword && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.confirmPassword}
                                </p>
                                )}
                            </div>
                        </div>

                        <textarea
                            name="about"
                            value={formData.about}
                            onChange={handleChange}
                            rows={5}
                            placeholder="About Me"
                            className="w-full rounded-[5px] border mt-2 border-[#00000066]
                            px-4 py-3 outline-none focus:border-[#2C49FE]
                            focus:ring-2 focus:ring-[#2C49FE]/20 resize-none"
                        />

                        <Button
                            text="Sign Up"
                            style="w-full mt-2 bg-[#2C49FE] hover:bg-[#1e38d8]
                            text-white py-3 rounded-full text-lg font-medium transition"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Section5;
