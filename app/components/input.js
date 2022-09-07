import React, { useState } from "react";

export default function Input(props) {
    return (
        <>
            {/* Label */}
            <div className="flex justify-between mb-2">
                <label htmlFor={props.name} className="block text-sm text-gray-600 dark:text-gray-200 capitalize">{props.label}</label>
                <a href={props.rightroute} className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">{props.rightlabel}</a>
            </div>

            {/* Input */}
            <div>

                <input type={props.type} name={props.name} id={props.id} placeholder={props.placeholder} onChange={props.onChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border 
                border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 
                focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
            </div>
        </>
    )
}