import { useState } from "react";
import {userServiceFactory} from "../clientServices/userService";
import useUser from "../lib/useUser";
import React from "react";
import Input from "../components/input";
import Loginlayout from "../components/loginlayout";


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

    return (
        <>
            {!user ? (<h1>Loading....</h1>) : 
                <>
                    {!user.isLoggedIn && 
                
                    <Loginlayout content={
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
                    }
                    />        
                    }
                </>
            }
        </>
    )
}