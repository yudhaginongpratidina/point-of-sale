import React, { useState } from "react";
import { Link } from "react-router-dom"
import { MdEmail, MdPassword } from "react-icons/md";

export default function LoginView(){
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const handleShowPassword = (e: React.MouseEvent) => {
        e.preventDefault()
        setShowPassword(!showPassword)
    }

    return (
        <div className="w-full min-h-screen flex justify-center items-center p-2">
            <div className="w-full max-w-md border shadow-md bg-white">
                <div className="w-full p-4 border-b-2 border-blue-500">
                    <h1 className="text-2xl font-bold text-blue-500">Login</h1>
                    <p className="text-md font-medium text-gray-500">Please enter your email and password for login</p>
                </div>
                <div className="w-full p-4 flex flex-col gap-4">
                    <div className="w-full h-14 p-2.5 flex items-center justify-center rounded-md border shadow bg-green-500">
                        <p className="text-md font-semibold text-white">Login Success</p>
                    </div>
                    <form className="w-full flex flex-col gap-4">
                        <div className="w-full flex flex-col gap-2">
                            <div className="w-full flex items-center relative">
                                <MdEmail className="w-6 h-6 text-gray-500 absolute top-3 left-3" />
                                <input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    className="w-full p-2.5 pl-12 border rounded-md outline-none focus:shadow-md" 
                                />
                            </div>
                            <span className="text-sm font-semibold text-red-500">Email is required</span>
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <div className="w-full flex items-center relative">
                                <MdPassword className="w-6 h-6 text-gray-500 absolute top-3 left-3" />
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    placeholder={showPassword ? "Enter your password" : "********"} 
                                    className="w-full p-2.5 px-12 border rounded-md outline-none focus:shadow-md" 
                                />
                                <button onClick={handleShowPassword} className="text-gray-500 absolute top-3 right-3 text-sm">
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                            <span className="text-sm font-semibold text-red-500">Password is required</span>
                        </div>
                        <button className="w-full p-2.5 border rounded-md bg-blue-500 hover:bg-blue-700 text-white">Login</button>
                    </form>
                </div>
                <div className="w-full p-4 border-t-2 border-blue-500">
                    <Link to="/register" className="w-full flex items-center justify-center gap-2">
                        <span className="text-md font-medium text-gray-500">I dont have an account ?</span>
                        <span className="text-md font-semibold text-blue-500">Register</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}