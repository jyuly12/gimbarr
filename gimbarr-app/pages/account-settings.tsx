import SlideBar from "../components/slidebar"
import SettingsModal from "../components/settingsModal"
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const user = [
    { label: 'Name',          content: 'Pepito ',             name: 'name',      },
    { label: 'Last name',          content: 'perez',          name: 'last',      },
    { label: 'Username',      content: 'pepito123',           name: 'username',  },
    { label: 'Email',         content: 'pepito@gmail.com',    name: 'email',     }
]

export default function UserSettings(){
    
    const { data: session } = useSession()
    const router = useRouter();
  
    useEffect(()=> {
      if (!session) {
        router.push('/auth/login');
      }
    })
    if (session)  {
        return(
            <SlideBar>
                <div>

                    {/* Settings */}
                    <div className="w-full h-full bg-gray-200 text-center ">
                        <h1 className="font-bold text-3xl py-4 text-cyan-800">Account Settings</h1>
                        <hr className="border-gray-400"/>
                        {/* User section */}
                        <div className="my-5 flex flex-col text-cyan-800">
                            <h2 className="font-bold text-xl self-start ml-14 ">User Settings</h2>
                            <div className=" w-3/4 gap-y-5 mx-auto grid grid-cols-3  p-4 justify-items-start mt-6 ">
                        
                            {user.map((item)=> (
                                <>
                                    <p>{item.label}:</p>
                                    <p>{item.content}</p>
                                    <div className="justify-self-end">                                    
                                        {/* name */}
                                        <SettingsModal 
                                            buttons={true} 
                                            icon='pencil'
                                            label='Edit'
                                            title={item.label}
                                            name={item.name}
                                            buttonStyle="flex gap-x-2 items-center rounded-md bg-opacity-20  bg-cyan-900 px-4 py-2 text-sm font-medium text-cyan-800 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75" 
                                            content={
                                            <div className="py-6 grid grid-cols-2 gap-6">
                                                    <p className="capitalize">{item.name}:</p>
                                                    <input type="email" className='border border-gray-400 rounded-lg px-3 py-1 outline-cyan-700'/>
                                            </div>
                                        }/>
                                    </div>
                                </>
                            ))}
                            
                            </div>
                        </div>
                        
                        <hr className="border-gray-400"/>

                        {/* Privacity */}
                        <div className="my-5 flex flex-col text-cyan-800">
                            <h2 className="font-bold text-xl self-start ml-14 ">Privacity</h2>
                            <div className=" w-1/3 gap-y-5 mx-auto p-4 justify-items-start grid lg:grid-cols-2 mb-3">
                                <p>Password:</p>
                                <input type="password" className="border border-gray-400 rounded-lg px-3 py-1 outline-cyan-700"/>

                                <p>New Password:</p>
                                <input type="password" className="border border-gray-400 rounded-lg px-3 py-1 outline-cyan-700" />

                                <p>Repeat Password:</p>
                                <input type="password" className="border border-gray-400 rounded-lg px-3 py-1 outline-cyan-700" />
                            </div>
                            <button className="w-auto rounded-md bg-opacity-20  bg-cyan-900 px-4 py-2 text-sm font-medium text-cyan-800 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 self-center">
                                Save
                            </button>
                        </div>
                        
                        <hr />
                        <div>
                        
                        </div>
                    </div>
                </div>
            </SlideBar>
        )
    }
}