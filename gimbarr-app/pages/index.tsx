import { useSession, signIn, signOut } from "next-auth/react"
import youtube_parser from '../lib/idVideo'
import SlideBar from '../components/slidebar'
import NavBar from '../components/navBar'

const youtubeUrl = "https://www.youtube.com/watch?v=Pw-0pbY9JeU&list=RDMM&start_radio=1&rv=qbLPmZCX7q0&ab_channel=twentyonepilots"



export default function Index() {

  /* videojs */
  const videoId = youtube_parser(youtubeUrl)
  const video = "https://www.youtube.com/embed/"+ videoId

  const { data: session } = useSession()

  
  if (session) {
    return (
      <>       
        <SlideBar>
          <div>
            
            {/* Content */}
            <div className='h-full'>
              {/* Week challenge section */}
              <div className='text-center flex flex-col justify-center m-10 border-double border-4 border-cyan-800'>
                <h1 className='font-extrabold text-6xl '>WEEK CHALLENGE</h1>
                <div className=' w-2/5 my-5 mx-auto h-[270px] '>
                  <iframe className="w-full h-full" src={video} title="Saw en Gusano | Gimbarr" frameBorder="0" ></iframe>
                </div>
              </div>
              {/* more videos */}
              <div className='bg-blue-200'>
                <div>
                Signed in as {session?.user?.email} <br />
                <button onClick={() => signOut()}>Sign out</button>
                </div>
              </div>  
            </div>
          </div> 
        </SlideBar> 
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
} 


