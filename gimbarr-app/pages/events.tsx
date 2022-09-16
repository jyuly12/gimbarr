import { useSession, signIn, signOut } from "next-auth/react"
import SlideBar from '../components/slidebar'
import type { GetServerSideProps } from "next";
import prisma from '../lib/prisma'
import IndexTournament, { TournamentProps } from "../components/tournaments/Index";
import { videoURL } from "../lib/video";
import { useRouter } from 'next/router';



/* browse published videos */
export const getServerSideProps: GetServerSideProps = async () => {
  const feed = await prisma.tournament.findMany({
    where: {
      published: true,
    },
    include: {
      sponsor: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  });
  return {
    props: { feed },
};
};

type Props = {
  feed: TournamentProps[];
};

export default function Events(props:Props) {
  
  /* videojs */
  const youtubeUrl = "https://www.youtube.com/watch?v=oTZbaVthvyU"
  
  const { data: session } = useSession()
  const router = useRouter();
  
  
  if (session)  {
    return (
        <>     
          <SlideBar>
            <div className="mx-auto max-w-6xl w-4/5">

              {/* Content */}
              <div className='h-full'>

                {/* Week challenge section */}
                <div className='text-center flex flex-col justify-center my-10 py-10 bg-white shadow-lg rounded-md'>
                  <h1 className='font-semibold capitalize mb-6 text-6xl '>lats tournament recopilation</h1>
                  <div className=' w-[80%] my-5 mx-auto h-[26rem] '>
                    <iframe className="w-full h-full" src={videoURL(youtubeUrl)} title="Saw en Gusano | Gimbarr" frameBorder="0" ></iframe>
                    
                  </div>
                </div>

                {/* List Videos videos */}
                <div className="page">
                  <h1 className="font-bold text-gray-800 text-lg capitalize">coming tournaments</h1>
                  <main>
                    {props.feed.map((tournament) => (
                      <div key={tournament.id} className="">
                        {/* individual Video Post */}
                        <IndexTournament tournament={tournament} />
                      </div>
                    ))}
                  </main>
                </div>

              </div>
            </div> 
          </SlideBar> 
        </>
    )  
  }
} 

