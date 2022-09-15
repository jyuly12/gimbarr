import { useSession, signIn, signOut } from "next-auth/react"
import youtube_parser from '../lib/idVideo'
import SlideBar from '../components/slidebar'
import type { GetServerSideProps } from "next";
import prisma from '../lib/prisma'


import link from "next/link"

import IndexPost, { PostProps } from "../components/posts/Index";


const youtubeUrl = "https://www.youtube.com/watch?v=Pw-0pbY9JeU&list=RDMM&start_radio=1&rv=qbLPmZCX7q0&ab_channel=twentyonepilots"

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

export default function Index(props:Props) {

  /* videojs */
  const videoId = youtube_parser(youtubeUrl)
  const video = "https://www.youtube.com/embed/"+ videoId

  const { data: session } = useSession()

  
  if (!session) {

  }
    return (
        <>       
          <SlideBar>
            <div className="mx-auto max-w-6xl w-4/5">

              {/* Content */}
              <div className='h-full'>

                {/* Week challenge section */}
                <div className='text-center flex flex-col justify-center m-10 border-double border-4 border-cyan-800'>
                  <h1 className='font-extrabold text-6xl '>WEEK CHALLENGE</h1>
                  <div className=' w-2/5 my-5 mx-auto h-[270px] '>
                    <iframe className="w-full h-full" src={video} title="Saw en Gusano | Gimbarr" frameBorder="0" ></iframe>
                  </div>
                </div>

                {/* List Videos videos */}
                <div className="page">
                  <h1>Public Feed</h1>
                  <main>
                    {props.feed.map((post) => (
                      <div key={post.id} className="post">

                        {/* individual Video Post */}
                        <IndexPost post={post} />
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

