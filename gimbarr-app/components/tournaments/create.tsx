import React, { useState } from "react";
import Router from "next/router";
import SettingsModal from "../settingsModal"

const CreateTournament: React.FC = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  
  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { title, location, description, price };
      await fetch(`/api/tournaments/create`, {
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
      <div>
        
          <form onSubmit={submitData}>

          {/* Post Title */}
          <input
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add a Title"
            type="text"
            value={title}
            className="w-full p-2 mt-2 border-4 border-gray-300 rounded-md"
          />
          
          {/* Post Youtube video link */}
          <input 
            type="text"
            autoFocus
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Insert tournament location"
            value={location}
            className="w-full p-2 mt-2 border-4 border-gray-300 rounded-md"/>

          {/* Post description */}
          <textarea
            cols={50}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Insert a description for this tournament"
            rows={8}
            value={description}
            className="w-full p-2 mt-2  border-4 border-gray-300 rounded-md"
          />
          
          {/* Post Price */}
          <input 
            type="text"
            autoFocus
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Insert price"
            value={ price}
            className="w-full p-2 mt-2 mb-4  border-4 border-gray-300 rounded-md"/>

          {/* Create Button */}
          <input disabled={!description || !title} type="submit" value="Create" 
          className="bg-gray-200  py-4 px-8"/>
          
          {/* when cancel redirect to*/}
          <a className="ml-4" href="#" onClick={() => Router.push("http://localhost:3000/myProfile")}>
            or Cancel
          </a>
        </form>
          
        

      </div>
    </>
  );
};

export default CreateTournament;
