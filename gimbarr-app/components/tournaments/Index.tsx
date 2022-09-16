import React from "react";
import Image from "next/image"
import UserDefault from "../../assets/UserDefault.png"
import ReactMarkdown from "react-markdown";

export type TournamentProps = {
  id: number;
  title: string;
  description: string;
  location: string;
  price: number;
  published: boolean;
  sponsor: {
    name: string;
    email: string;
    image: string;
  } | null;
  
};

const Index: React.FC<{ tournament: TournamentProps }> = ({ tournament }) => {
  const authorName = tournament.sponsor ? tournament.sponsor.name : "Unknown author";
  const authorImg =  tournament?.sponsor?.image || UserDefault;



  return (
    <div className="bg-white hover:shadow-md rounded-xl p-8 my-4" /* onClick={() => Router.push("/post/[id]", `/post/${post.id}`)} */>
      
      <div className="overflow-hidden mx-auto w-[80%] mb-2">
        <h2 className="font-semibold text-lg uppercase">{tournament.title}</h2>
        
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
          <ReactMarkdown children={tournament.description} className="text-sm capitalize" />
        </div>
      </div>
      
    </div>
  );
};

export default Index;
