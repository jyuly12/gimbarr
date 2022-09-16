import React, { useState } from "react";
import Router from "next/router";
import SettingsModal from "../settingsModal"

const CreatePost: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [video, setVideo] = useState("");

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { title, video, content };
      await fetch(`/api/post/create`, {
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

          <h1>New Draft</h1>

          {/* Post Title */}
          <input
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            type="text"
            value={title}
            className="w-full p-2 mt-2 border-4 border-gray-300 rounded-md"
          />
          
          {/* Post Youtube video link */}
          <input 
            type="text"
            autoFocus
            onChange={(e) => setVideo(e.target.value)}
            placeholder="Insert your video link"
            value={video}
            className="w-full p-2 mt-2 border-4 border-gray-300 rounded-md"/>

          {/* Post description */}
          <textarea
            cols={50}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
            rows={8}
            value={content}
            className="w-full p-2 mt-2  border-4 border-gray-300 rounded-md"
          />

          {/* Create Button */}
          <input disabled={!content || !title} type="submit" value="Create" 
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

export default CreatePost;
