import React from "react";
import Input from "../../components/input";
import Loginlayout from "../../components/loginlayout";
import { useRouter } from 'next/router';
import { useSession, signIn, getCsrfToken, getProviders } from "next-auth/react";

interface sessionprovider {
    csrfToken: any,
    providers: any
}


export default function Register( props:sessionprovider) {
  
  const { data: session } = useSession()
  const router = useRouter();
  

  if (session) {
    router.push('/')
  }
  return (
      <>                
        <Loginlayout title="Gimbarr sign up" >
          <form method="post" action="/api/auth/signin/email">
            <div>
            <input name="csrfToken" type="hidden" defaultValue={props.csrfToken} />
              {/* Email */}
              <Input 
                name="email" 
                placeholder="example@example.com" 
                label="email address"
                type="email"
                id="email"
              />
            </div>

            <div className="mt-6"> 
              {/* Password */}
              <Input 
                name="password" 
                placeholder="insert your password" 
                label="password"
                rightlabel="forgotpassword?"
                rightroute="#"
                type="password"
                id="password"
              />
            </div> 

            <div className="mt-6">
              <button type="submit"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Sign in
              </button>
            </div>
          </form>
        </Loginlayout>              
      </>
    )
}

export async function getServerSideProps(context) {
  const providers = await getProviders()
  const csrfToken = await getCsrfToken(context)
  return {
    props: {
      providers,
      csrfToken
    },
  }
}