import Image from "next/image";
import React from "react";
import Input from "../components/input";
import LoginBg from "../public/images/login.avif"


export default function Login() {

    

    return (
        <>
            <div class="bg-white dark:bg-gray-900">
                <div class="flex justify-center h-screen">

                    {/* bg image */}
                    <div class="hidden relative lg:block lg:w-2/3">
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
                        
                    <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                        <div class="flex-1">
                            <div class="text-center">
                                <h2 class="text-4xl font-bold text-center text-gray-700 dark:text-white">Brand</h2>
                                    
                                <p class="mt-3 text-gray-500 dark:text-gray-300">Sign in to access your account</p>
                            </div>

                            <div class="mt-8">
                                <form>
                                    <div>
                                        {/* Email  */}
                                        <Input 
                                            name="email" 
                                            placeholder="example@example.com" 
                                            label="email address"
                                            type="email"
                                            id="email"
                                        />
                                    </div>

                                    <div class="mt-6">
                                        {/* Password  */}
                                        <Input 
                                            name="password" 
                                            placeholder="insert your password" 
                                            label="password"
                                            rightlabel="forgotpassword?"
                                            rightroute="#"
                                            type="email"
                                            id="password"
                                        />
                                    </div>

                                    <div class="mt-6">
                                        <button
                                            class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                            Sign in
                                        </button>
                                    </div>

                                </form>

                                <p class="mt-6 text-sm text-center text-gray-400">Don&#x27;t have an account yet? <a href="#" class="text-blue-500 focus:outline-none focus:underline hover:underline">Sign up</a>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}