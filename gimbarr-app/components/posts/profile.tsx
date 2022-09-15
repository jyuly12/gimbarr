import React from "react";
import ReactMarkdown from "react-markdown";
import { videoURL } from "../../lib/video";

export type PostProps = {
  id: number;
  videoclip: string;
  title: string;
  author: {
    name: string;
    email: string;
  } | null;
  content: string;
  
  published: boolean;
};

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
  const authorName = post.author ? post.author.name : "Unknown author";

  const videourl = videoURL(post.videoclip)

  return (
    <div className="">
    
    <div className="bg-white hover:shadow-2xl rounded-xl p-8  " /* onClick={() => Router.push("/post/[id]", `/post/${post.id}`)} */>
      
      <div className="overflow-hidden  w-auto mb-2">
     
        <iframe src={videourl} className="w-full h-[14rem] my-2" />
      </div>
        <h2 className="font-semibold text-lg uppercase">{post.title}</h2>
        
        <div className="text-md mt-2">
          <p className="font-semibold">Description:</p>
          <ReactMarkdown children={post.content} className="text-sm capitalize" />
        </div>
      </div>
      
    </div>
    
  );
};

export default Post;
