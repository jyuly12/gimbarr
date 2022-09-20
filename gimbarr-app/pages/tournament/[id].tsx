import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import ReactMarkdown from "react-markdown";
import Router, { useRouter } from "next/router";
import { TournamentProps } from "../../components/tournaments/Index";
import prisma from '../../lib/prisma'
import { useSession } from "next-auth/react";
import SlideBar from "../../components/slidebar";

/* page where we can edit a publication */
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const tournament = await prisma.tournament.findUnique({
    where: {
      id: Number(params?.id) || -1,
    },
    include: {
      sponsor: {
        select: { name: true, email: true },
      },
    },
  });
  return {
    props: tournament,
  };
};

async function deleteTournament(id: number): Promise<void> {
  await fetch(`/api/tournaments/${id}`, {
    method: "DELETE",
  });
  await Router.push("/myProfile")
}

const Tournament : React.FC<TournamentProps> = (props) => {

  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);
  const [location, setLocation] = useState(props.location);
  const [price, setPrice] = useState(props.price);

  async function editTournament(id: number): Promise<void> {
    try {
      const body = { title, description, location, price };
      await fetch(`/api/tournaments/update/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
      });
      await Router.push("/myProfile")
    }catch (error) {
      console.error(error);
    }
  }


  const { data: session, status } = useSession();
  const router = useRouter();
  
    useEffect(()=> {
      if (!session) {
        router.push('/auth/login');
      }
    })
   

  if (status === 'loading') {
    return <div>Authenticating ...</div>;
  }
  const userHasValidSession = Boolean(session);
  const postBelongsToUser = session?.user?.email === props.sponsor?.email;
 if (session)  {
      return (    
        <SlideBar>
          <div className="mx-auto w-4/5 mt-10">

            <h1>Edit your publication</h1>

            {/* Post Title */}
            <input
              autoFocus
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Add a Title"
              type="text"
              value={title}
              className="w-full p-2 mt-2 border-4 border-gray-300 rounded-md"
            />

            {/* Tournament location */}
            <input 
              type="text"
              autoFocus
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Insert tournament location"
              value={location}
              className="w-full p-2 mt-2 border-4 border-gray-300 rounded-md"
            />

            {/* Tournament description */}
            <textarea
              cols={50}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Insert a description for this tournament"
              rows={8}
              value={description}
              className="w-full p-2 mt-2  border-4 border-gray-300 rounded-md"
            />

            {/* Tournament Price */}
           { <input 
              type="text"
              autoFocus
              onChange={(e) => setPrice(Number(e.target.value))}
              placeholder="Insert price"
              value={price}
              className="w-full p-2 mt-2 mb-4  border-4 border-gray-300 rounded-md"
            />}

            <div className="flex justify-between">
              <div className="flex gap-x-4">

                {/* Update Button */}
                {userHasValidSession && postBelongsToUser && (
                  <button className="bg-green-400  py-4 px-8 rounded-lg text-white capitalize font-bold"
                    onClick={() => editTournament(props.id)}>update
                  </button>
                )}
                {/* Delete Button */}
                {userHasValidSession && postBelongsToUser && (
                  <button className="ml-4 bg-red-400 px-4 py-4 text-white rounded-lg"
                  onClick={() => deleteTournament(props.id)}>Delete
                  </button>
                )}
              </div>

              {/* when cancel redirect to*/}
              <a className="ml-4 bg-gray-400 px-4 py-4 text-white rounded-lg" href="#" onClick={() => Router.push("http://localhost:3000/myProfile")}>
                Cancel
              </a> 
            </div>
          </div>      
        </SlideBar>
      );
    }
};

export default Tournament;