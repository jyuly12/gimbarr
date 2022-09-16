
import React, { useState } from "react";
import Router from "next/router";

const CreateData: React.FC = () => {
  const [username, setUsername] = useState("");

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { username };
      await fetch(`/api/user/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      await Router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="h-screen w-screen bg-slate-300 flex place-items-center place-content-center">
        
        <form onSubmit={submitData} className="bg-white w-1/3 shadow-xl p-5 rounded-2xl ">

          <h1 className="capitalize font-semibold text-lg">please put a username</h1>

          {/* Post Username */}
          <input
            autoFocus
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
            type="text"
            value={username}
            className="w-full p-2 my-5 border-4 border-gray-300 outline-cyan-700 rounded-xl"
          />
          
        <div className="my-5">
          {/* Create Button */}
          <input disabled={!username} type="submit" value="Create" 
          className="bg-gray-200 rounded-xl py-3 px-4  hover:bg-slate-300"/>
          
          {/* when cancel redirect to*/}
          <a className="ml-4" href="#" onClick={() => Router.push("/")}>
            or Cancel
          </a>
        </div>
        </form>
          
        

      </div>
    </>
  );
};

export default CreateData;
