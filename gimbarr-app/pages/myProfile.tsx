import SlideBar from "../components/slidebar"
import Image from "next/image"
import { useSession } from "next-auth/react"
import BgImage from "../assets/background.png"
import UserDefault from "../assets/UserDefault.png"
import SettingsModal from "../components/settingsModal"
import CreatePost from "../components/posts/create"


export default function ProfilePanel(){
    const { data: session } = useSession()
    
    return(
        <SlideBar>
            
            {/* Content */}
            <div className='w-full bg-gray-100 m py-3'>
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
                                <SettingsModal buttons={false} title="update your images" label="Edit Profile" icon='pencil' name="profile" content={
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
                                      <button 
                                          className='text-cyan-700 font-medium hover:bg-slate-300 p-1 rounded-lg'
                                          
                                          >Edit
                                      </button>
                                    </div>
                                    <div className='w-[300px] h-[150px] relative mx-auto'>
                                      <Image alt="user banner" src={ BgImage} layout='fill' className="self-center"/>
                                    </div>
                                    
                                  </div>
                                }/>
                            </div>
                        </div>
                    </div>

                    <hr className="border-black"/>
                    
                    {/* user posts */}
                    <div className="w-4/5 mx-auto h-auto mt-5 flex flex-col">
                        
                        <button className="shadow-xl rounded-2xl bg-gray-400 border-black w-2/3 mx-auto">Add New Video</button>

                            {/* Create a new post */}
                            <SettingsModal 
                                buttons={false}
                                name = ''
                                label= 'Add New Video'
                                title= 'Add Video'
                                icon= 'plus'
                                content = {
                                    <CreatePost/>}/>

                            <div className="grid grid-cols-4">
                                
                                {/* video section */}
                                <div className="">

                                    {/* videos user area */}
                                    {/* put here you component with each video */}

                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            
        </SlideBar>
    )
}