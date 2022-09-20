import React from "react";
import Image from "next/image"
import UserDefault from "../../assets/UserDefault.png"
import ReactMarkdown from "react-markdown";
import { videoURL } from "../../lib/video";

export type PostProps = {
  id: number;
  videoclip: string;
  title: string;
  author: {
    name: string;
    email: string;
    image: string;
  } | null;
  content: string;
  
  published: boolean;
};

const Index: React.FC<{ post: PostProps }> = ({ post }) => {
  const authorName = post.author ? post.author.name : "Unknown author";
  const authorImg =  post?.author?.image || UserDefault;
  console.log(post)
  const videourl = videoURL(post.videoclip)

  return (
    <div className="bg-white hover:shadow-md rounded-xl p-8 my-4" /* onClick={() => Router.push("/post/[id]", `/post/${post.id}`)} */>
      
      <div className="overflow-hidden mx-auto w-[80%] mb-2">
        <h2 className="font-semibold text-lg uppercase">{post.title}</h2>
        <iframe src={videourl} className="w-full h-[26rem] my-2" />
      </div>
      <div className="w-[80%] mx-auto">
        
        <div className="flex flex-row ">
          <div className="w-6 h-6 relative bg-slate-50 border rounded-full ">
            <Image alt="user profile" src={ authorImg } layout='fill' className="border rounded-full self-center"/>
          </div>
          <p className="">By {authorName}</p>
        </div>
        <div className="text-md mt-2">
          <p className="font-semibold">Description:</p>
          <ReactMarkdown children={post.content} className="text-sm capitalize" />
        </div>
      </div>
      
    </div>
  );
};

export default Index;
