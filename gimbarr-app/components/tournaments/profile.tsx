import ReactMarkdown from "react-markdown";
import Image from "next/image"
import Router from "next/router";
import UserDefault from "../../assets/UserDefault.png"

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

const Tournament: React.FC<{ tournament: TournamentProps }> = ({ tournament }) => {
  console.log(tournament)
  const authorName = tournament.sponsor ? tournament.sponsor.name : "Unknown author";
  const authorImg =  tournament?.sponsor?.image || UserDefault;

  return (
    <div className="bg-white hover:shadow-md rounded-xl p-8 " onClick={() => Router.push("/tournament/[id]", `/tournament/${tournament.id}`)}>
      
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

export default Tournament;
