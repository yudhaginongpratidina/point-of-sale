import { useState } from "react";
import { MdEmail, MdPassword, MdOutlinePhoneAndroid  } from "react-icons/md";
import { Link } from "react-router-dom"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema, RegisterFormSchema } from "../validators/register.validator";

export default function RegisterView(){
    const [isError, setIsError] = useState<boolean>(false)
    const [message, setMessage] = useState<string>("")
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)

    const handleShowPassword = (e: React.MouseEvent) => {
        e.preventDefault()
        setShowPassword(!showPassword)
    }

    const handleShowConfirmPassword = (e: React.MouseEvent) => {
        e.preventDefault()
        setShowConfirmPassword(!showConfirmPassword)
    }

    const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormSchema>({
        resolver: zodResolver(registerFormSchema)
    })

    const onSubmit = async (data: RegisterFormSchema) => {
        try {
            setIsError(false)
            setMessage("register successfully")
            console.log(data)
        } catch (error) {
            setIsError(true)
            setMessage((error as Error).message)
        }
    }

    return (
        <div className="w-full min-h-screen flex justify-center items-center p-2">
            <div className="w-full max-w-md border shadow-md bg-white">
                <div className="w-full p-4 border-b-2 border-blue-500">
                    <h1 className="text-2xl font-bold text-blue-500">Register</h1>
                    <p className="text-md font-medium text-gray-500">Please enter your details for register</p>
                </div>
                <div className="w-full p-4 flex flex-col gap-4">
                    {message &&
                        <div className={`w-full h-14 p-2.5 flex items-center justify-center rounded-md border shadow ${isError ? "bg-red-500" : "bg-green-500"}`}>
                            <p className="text-md font-semibold text-white">{message}</p>
                        </div>
                    }
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4">
                        <div className="w-full flex items-center justify-between gap-2.5">
                            <div className="w-full flex flex-col gap-2">
                                <div className="w-full flex items-center">
                                    <input 
                                        type="text" 
                                        placeholder="First Name" 
                                        className="w-full p-2.5 border rounded-md outline-none focus:shadow-md" 
                                        {...register("firstName")}
                                    />
                                </div>
                                {errors.firstName && <span className="text-sm font-semibold text-red-500">{errors.firstName.message}</span>}
                            </div>
                            <div className="w-full flex flex-col gap-2">
                                <div className="w-full flex items-center">
                                    <input 
                                        type="text" 
                                        placeholder="Last Name" 
                                        className="w-full p-2.5 border rounded-md outline-none focus:shadow-md" 
                                        {...register("lastName")}
                                    />
                                </div>
                                {errors.lastName && <span className="text-sm font-semibold text-red-500">{errors.lastName.message}</span>}
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <div className="w-full flex items-center relative">
                                <MdOutlinePhoneAndroid className="w-6 h-6 text-gray-500 absolute top-3 left-3" />
                                <input 
                                    type="text" 
                                    placeholder="Enter your phone number" 
                                    className="w-full p-2.5 pl-12 border rounded-md outline-none focus:shadow-md" 
                                    {...register("phoneNumber")}
                                />
                            </div>
                            {errors.phoneNumber && <span className="text-sm font-semibold text-red-500">{errors.phoneNumber.message}</span>}
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <div className="w-full flex items-center relative">
                                <MdEmail className="w-6 h-6 text-gray-500 absolute top-3 left-3" />
                                <input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    className="w-full p-2.5 pl-12 border rounded-md outline-none focus:shadow-md" 
                                    {...register("email")}
                                />
                            </div>
                            {errors.email && <span className="text-sm font-semibold text-red-500">{errors.email.message}</span>}
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <div className="w-full flex items-center relative">
                                <MdPassword className="w-6 h-6 text-gray-500 absolute top-3 left-3" />
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    placeholder={showPassword ? "Enter your password" : "********"} 
                                    className="w-full p-2.5 px-12 border rounded-md outline-none focus:shadow-md" 
                                    {...register("password")}
                                />
                                <button onClick={handleShowPassword} className="text-gray-500 absolute top-3 right-3 text-sm">
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                            {errors.password && <span className="text-sm font-semibold text-red-500">{errors.password.message}</span>}
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <div className="w-full flex items-center relative">
                                <MdPassword className="w-6 h-6 text-gray-500 absolute top-3 left-3" />
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    placeholder={showConfirmPassword ? "Enter your confirm password" : "********"} 
                                    className="w-full p-2.5 px-12 border rounded-md outline-none focus:shadow-md" 
                                    {...register("confirmPassword")}
                                />
                                <button onClick={handleShowConfirmPassword} className="text-gray-500 absolute top-3 right-3 text-sm">
                                    {showConfirmPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                            {errors.confirmPassword && <span className="text-sm font-semibold text-red-500">{errors.confirmPassword.message}</span>}
                        </div>
                        <button className="w-full p-2.5 border rounded-md bg-blue-500 hover:bg-blue-700 text-white">Register</button>
                    </form>
                </div>
                <div className="w-full p-4 border-t-2 border-blue-500">
                    <Link to="/login" className="w-full flex items-center justify-center gap-2">
                        <span className="text-md font-medium text-gray-500">I have no account ?</span>
                        <span className="text-md font-semibold text-blue-500">Login</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}