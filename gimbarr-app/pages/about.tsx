import { useSession, signIn, signOut } from "next-auth/react"
import SlideBar from '../components/slidebar'
import type { GetServerSideProps } from "next";
import prisma from '../lib/prisma'
import IndexPost, { PostProps } from "../components/posts/Index";
import { videoURL } from "../lib/video";
import { useRouter } from 'next/router';
import { useEffect } from "react";



/* browse published videos */
export const getServerSideProps: GetServerSideProps = async () => {
  const feed = await prisma.post.findMany({
    where: {
      published: true,
    },
    include: {
      author: {
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
  feed: PostProps[];
};

export default function About(props:Props) {
  
  /* videojs */
  const youtubeUrl = "https://www.youtube.com/watch?v=O0dEByfPfOk&t=55s"
  
  const { data: session } = useSession()
  const router = useRouter();
  
  
  if (session)  {
    return (
        <>     
          <SlideBar>
            <div className="mx-auto max-w-6xl w-4/5">

              {/* Content */}
              <div className='h-full'>

                {/* our main video about*/}
                <div className='text-center flex flex-col justify-center m-10 border-double border-4 border-cyan-800'>
                  <h1 className='font-extrabold text-6xl '>What is Gimbarr</h1>
                  <div className=' w-3/5 my-5 mx-auto h-[24rem] '>
                    <iframe className="w-full h-full" src={videoURL(youtubeUrl)} title="Saw en Gusano | Gimbarr" frameBorder="0" ></iframe>
                    
                  </div>
                </div>

                {/* List Videos videos */}
                <div className="page">
                    
                    <main>
                        <div className="bg-white hover:shadow-md rounded-xl p-8 my-4">

                            <p className=" mb-10 text-xl uppercase text-gray-700 font-semibold">a little bit information</p>

                            <p className="text-base text-gray-600">Gimbarr or Barristic Gymnastics is a sport that is practiced on a horizontal bar, 2 m or more high. It is a sport that combines a lot of strength, flexibility and agility in the arms, shoulders and the body in general to execute combinations that are called figures, yo-yos and turns. Each element has a different name and varies a lot according to its complexity and the way it is executed on the bar.
                                This sport originated in Bogotá (Colombia) more than 50 years ago in the neighborhoods of Fontibón and Kennedy by curious young people (some with knowledge in gymnastics), who wanted to take advantage of the bars that the district had located in the different parks of the city. For a long time it was practiced in the underground by young people as a hobby, but at the beginning of the 21st century, between the years 2000 and 2002, it took the name of Gimbarr.
                                Today this sport is still practiced furiously in places where the classic bar is still preserved. In some other places, the traditional bar to practice the gimbar has been removed and replaced by other types of bars that are thicker and more uncomfortable to practice the gimbar, this is due to the fact that the parks have been adapting more for children and the lack of knowledge by part of the district government about this sport, since as mentioned it is an underground sport.
                                Practiced for several generations, Gimbarr is consolidated as an [urban sport] that is currently also practiced in other countries such as Russia, Ecuador, Venezuela, Mexico, Japan, among others. Due to the expansion of this sport, different styles have also been developed and currently more than seven styles of execution have been identified.
                            </p>
                        </div>
                    </main>
                </div>

              </div>
            </div> 
          </SlideBar> 
        </>
    )  
  }
} 

