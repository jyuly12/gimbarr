import SlideBar from "../components/slidebar"
import Image from "next/image"
import { useSession, getSession } from "next-auth/react"
import BgImage from "../assets/background.png"
import UserDefault from "../assets/UserDefault.png"
import SettingsModal from "../components/settingsModal"
import CreatePost from "../components/posts/create"
import prisma from '../lib/prisma'
import type { GetServerSideProps } from "next";
import IndexPost, { PostProps } from "../components/posts/profile";

/* browse published videos */
export const getServerSideProps: GetServerSideProps = async (req) => {
  const session  = await getSession(req)
  const feed = await prisma.post.findMany({
    where: {
      author: { email: session?.user?.email},
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


export default function ProfilePanel(props:Props){
    const { data: session } = useSession()
    
    return(
        <SlideBar>
            
            {/* Content */}
            <div className='w-full bg-gray-200 m py-3'>
                <div className="mx-auto max-w-6xl w-4/5">
                        
                    {/* Profile */}
                    <div className=" h-full">
                            
                        {/* Banner */}
                        <div className="w-full h-96 mx-auto relative">
                            <Image src={BgImage} layout="fill" alt="banner" className="border rounded-2xl"/>
                        </div>

                        <div className=" mx-auto h-full px-8 mb-10 z-10 flex ">
                                
                            {/* profile picture */}
                            <div className="w-1/5 ">
                                <div className="w-[8rem] h-[8rem] absolute bg-slate-50 border rounded-full mt-[-70px]">
                                    <Image alt="user profile" src={ session?.user?.image || UserDefault} layout='fill' className="border rounded-full self-center"/>
                                </div>
                            </div>

                            {/* user name and  edit profile */}
                            <div className=" grow mt-2 justify-start">
                                <h2 className="p-2 text-3xl capitalize text-cyan-900 font-bold">{session?.user?.name}</h2>
                            </div>
                            <div className="flex justify-end mt-3">
                                <SettingsModal 
                                    buttons={false}
                                    buttonStyle="flex gap-x-2 items-center rounded-md bg-opacity-20  bg-cyan-900 px-4 py-2 text-sm font-medium text-cyan-800 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                                    title="update your images"
                                    label="Edit Profile"
                                    icon='pencil'
                                    name="profile"
                                    content={
                                      <div>
                                        <hr className='border mt-2 border-gray-300'/>
                                        <div className='flex justify-between  my-3'>
                                        <h1 className='font-semibold'>Profile Image</h1>
                                        <button 
                                            className='text-cyan-700 font-medium hover:bg-slate-300 p-1 rounded-lg'
                                            >Edit
                                        </button>
                                        </div>
                                        <div className='w-[150px] h-[150px] relative mx-auto'>
                                            <Image alt="user image" src={ session?.user?.image || UserDefault} layout='fill' className="border rounded-full self-center"/>
                                        </div>
                                        <hr className='border mt-2 border-gray-300'/>
                                        <div className='flex justify-between  my-3'>
                                            <h1 className='font-semibold'>Cover Photo</h1>
                                            <button className='text-cyan-700 font-medium hover:bg-slate-300 p-1 rounded-lg'>Edit</button>
                                        </div>
                                        <div className='w-[300px] h-[150px] relative mx-auto'>
                                            <Image alt="user banner" src={ BgImage} layout='fill' className="self-center"/>
                                        </div>
                                      </div>
                                }/>
                            </div>
                        </div>
                    </div>
                    <hr className="border-gray-400"/>
                    
                    
                    {/* user posts */}
                    <div className="w-4/5 mx-auto h-auto mt-5 flex flex-col">

                            {/* Create a new post */}
                            <SettingsModal 
                                buttons={false}
                                name = ''
                                label= 'Add New Video'
                                title= 'Add Video'
                                icon= 'plus'
                                buttonStyle= "flex w-2/3 mx-auto gap-x-2 justify-center items-center rounded-md bg-opacity-20  bg-cyan-900 px-auto py-2 text-md font-medium text-cyan-800 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                                content = {
                                <CreatePost/>}
                            />                         
                                
                            {/* video section */}
                            <div className="page mt-6">
                                <h1 className="font-bold text-gray-800 text-lg capitalize">My Videos</h1>
                                <main className=" grid grid-cols-2 gap-5 mt-6">
                                    {props.feed.map((post) => (
                                    <div key={post.id} className="post ">

                                        {/* individual Video Post */}
                                        <IndexPost post={post} />
                                    </div>
                                    ))}
                                </main>
                            </div>
                            
                        </div>
                        
                    </div>
            </div>
            
        </SlideBar>
    )
}