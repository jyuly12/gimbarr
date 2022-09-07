import { useState } from "react";
import {userServiceFactory} from "../clientServices/userService";
import useUser from "../lib/useUser";
import Image from "next/image";
import React from "react";
import Input from "../components/input";
import LoginBg from "../public/images/login.avif";


const userService = userServiceFactory();

export default function Login() {
    const { user, mutateUser } = useUser({
        redirectTo: "/",
        redirectIfFound: true,
    });
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            mutateUser(
                await userService.login(username, password)
            );
        } catch (error) {
            alert(error.response.data.error);
        }
    };

    const usernameHandler =  (e) => {
        setUsername(e.target.value);
    }

    const passwordHandler =  (e) => {
        setPassword(e.target.value);
    }

    return <>
        {!user ? (<h1>Loading....</h1>) : 
        <>{!user.isLoggedIn && 
        
        <div className="bg-white dark:bg-gray-900">
            <div className="flex justify-center h-screen">
                {/* bg image */}
                <div className="hidden relative lg:block lg:w-2/3">
                    {/* image component */}
                    <div className="absolute w-full h-full">
                        <Image src={LoginBg} alt="Workflow" layout='fill' priority/>
                        {/* central text */}
                        <div className="absolute lg:top-1/3 xl:top-1/2  lg:left-10 xl:left-1/3  opacity-60 rounded p-4 bg-white " >
                            <p className="text-4xl font-bold text-gray-600">Brand</p>
                            <p className="max-w-xl mt-3 text-gray-900">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In autem ipsa, nulla laboriosam dolores, repellendus perferendis libero suscipit nam temporibus molestiae</p>
                        </div>
                    </div>
                </div>
                        
                <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                    <div className="flex-1">
                        <div className="text-center">
                            <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">Brand</h2>
                            <p className="mt-3 text-gray-500 dark:text-gray-300">Sign in to access your account</p>
                        </div>

                        <div className="mt-8">
                            <form onSubmit={handleSubmit}>
                                <div>
                                    {/* Email  */}
                                    <Input 
                                        name="email" 
                                        placeholder="example@example.com" 
                                        label="email address"
                                        type="email"
                                        id="email"
                                        onChange={usernameHandler}
                                    />
                                </div>

                                <div className="mt-6">
                                    {/* Password  */}
                                    <Input 
                                        name="password" 
                                        placeholder="insert your password" 
                                        label="password"
                                        rightlabel="forgotpassword?"
                                        rightroute="#"
                                        type="password"
                                        id="password"
                                        onChange={passwordHandler}
                                    />
                                </div>

                                <div className="mt-6">
                                    <button
                                        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                        Sign in
                                    </button>
                                </div>
                            </form>
                            <p className="mt-6 text-sm text-center text-gray-400">Don&#x27;t have an account yet? <a href="#" className="text-blue-500 focus:outline-none focus:underline hover:underline">Sign up</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }</>}</>
}