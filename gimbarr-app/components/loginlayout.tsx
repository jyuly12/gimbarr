import Image from "next/image";
import LoginBg from "../public/images/bg-gimbar.png";

interface Props {
    children: React.ReactNode
    title: string | null
}

export default function Loginlayout(props: Props) {
    return (
        <>
          <div className="bg-white dark:bg-gray-900">
            <div className="flex justify-center h-screen">
                
                {/* bg image */}
                <div className="hidden relative lg:block lg:w-2/3">
                    {/* image component */}
                    <div className="absolute w-full h-full">
                        <Image src={LoginBg} alt="Workflow" layout='fill' priority/>
                        {/* central text 
                        <div className="absolute lg:top-1/3 xl:top-1/2  lg:left-10 xl:left-1/3  opacity-60 rounded p-4 bg-white " >
                            <p className="text-4xl font-bold text-gray-600">Brand</p>
                            <p className="max-w-xl mt-3 text-gray-900">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In autem ipsa, nulla laboriosam dolores, repellendus perferendis libero suscipit nam temporibus molestiae</p>
                        </div>*/}
                    </div>
                </div>
                        
                <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                    <div className="flex-1">
                        <div className="text-center">
                            <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">{props.title ?? 'Gimbarr'}</h2>
                            <p className="mt-3 text-gray-500 dark:text-gray-300">Sign in to access your account</p>
                        </div>

                        <div className="mt-8">
                            {/*  */}
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}