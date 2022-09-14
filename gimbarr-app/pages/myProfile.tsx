import SlideBar from "../components/slidebar"
import NavBar from "../components/navBar"
import Image from "next/image"
import { useSession } from "next-auth/react"
import BgImage from "../assets/background.png"
import UserDefault from "../assets/UserDefault.png"
import SettingsModal from "../components/settingsModal"



export default function ProfilePanel(){
    const { data: session } = useSession()
    
    return(
        <SlideBar>
            <div className="h-screen w-full bg-gray-100 py-3">
                {/* Profile */}
                <div className="w-4/5 h-3/5 mx-auto  relative ">
                    <Image src={BgImage} layout="fill" className="border rounded-2xl"/>
                </div>
                <div className="w-4/5 mx-auto  px-8 mb-10 flex ">
                    <div className="w-1/5">
                        <div className="w-[150px] h-[150px] absolute bg-slate-50 border rounded-full mt-[-70px]">
                            <Image src={ session?.user?.image || UserDefault} layout='fill' className="border rounded-full self-center"/>
                        </div>
                    </div>
                    <div className=" grow mt-2 justify-start">
                        <h2 className="p-2 text-3xl capitalize text-cyan-900 font-bold">{session?.user?.name}</h2>
                    </div>
                    <div className="flex justify-end mt-3">
                        <SettingsModal label="Edit Profile" name="profile"/>
                    </div>
                </div>
                <hr className="border-black"/>
                <div className="w-4/5 mx-auto h-auto mt-5 flex flex-col">
                    <button className="shadow-xl rounded-2xl bg-gray-400 border-black w-2/3 mx-auto">Add New Video</button>
                    <div className="grid grid-cols-4">
                        {}
                        {/* video section */}
                        <div className="">
                            
                        </div>
                    </div>
                </div>
            </div>
        </SlideBar>
    )
}