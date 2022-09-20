import SlideBar from "../components/slidebar"
import SettingsModal from "../components/settingsModal"
import { useSession, getSession } from "next-auth/react"
import type { GetServerSideProps } from "next";
import UserDataPost,    { UserProps}  from "../components/user/settings";
import prisma from '../lib/prisma'



export const getServerSideProps: GetServerSideProps = async (req) => {
  const session  = await getSession(req)
  let settings = await prisma.user.findMany({
    where: {
      email: session?.user?.email,
    },
    include: {
      profile: {
        select: {
          username: true,
        
        },
      },
    },
  });
  settings = JSON.parse(JSON.stringify(settings))
  return {
    props: { settings },
};
};

type Props = {
  settings: UserProps[];
};

export default function UserSettings(props:Props){
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
                        
                            {props.settings.map((post) => (
                            <div key={post.id} className="post">

                                {/* individual Video Post */}
                                <UserDataPost post={post} />
                            </div>
                            ))}
                        
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