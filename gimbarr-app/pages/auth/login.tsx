import React from "react";
import Input from "../../components/input";
import Loginlayout from "../../components/loginlayout";
import { useRouter } from 'next/router';
import { useSession, signIn, getCsrfToken, getProviders } from "next-auth/react";

interface sessionprovider {
    csrfToken: any,
    providers: any
}


export default function Login( props:sessionprovider) {
  
  const { data: session } = useSession()
  const router = useRouter();
  

  if (session) {
    router.push('/')
  }
  return (
      <>
                
        <Loginlayout title="Gimbarr log in">
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
              {/* Password  later interation*/}
              {/* <Input 
                name="password" 
                placeholder="insert your password" 
                label="password"
                rightlabel="forgotpassword?"
                rightroute="#"
                type="password"
                id="password"
              /> */}
            </div> 

            <div className="my-6">
              <button type="submit"
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Sign in with magic link
              </button>
            </div>
          </form>
          <hr className="mb-10" />
          {props.providers &&
              Object.values(props.providers).map(provider => (
                
                <div key={provider?.name } style={{ marginBottom: 0 }}>
                  { provider?.name === 'Google' && (
                  <button className="my-2 border flex justify-center w-full py-2  rounded-lg" onClick={() => signIn(provider?.id)} >
                    Sign in with{' '} {provider?.name}
                  </button>)}
                </div>
              ))}

                {/* credentials for later implementation */}
         {/*  <form method="post" action="/api/auth/callback/credentials">
            <input name="csrfToken" type="hidden" defaultValue={props.csrfToken} />
            <label>
              Username
              <input name="username" type="text" />
            </label>
            <label>
              Password
              <input name="password" type="password" />
            </label>
            <button type="submit">Sign in</button>
          </form> */}

        {/* redirection to register for later implementation */}
         {/*  <p className="mt-6 text-sm text-center text-gray-400">Don&#x27;t have an account yet? <a href="/auth/register" className="text-blue-500 focus:outline-none focus:underline hover:underline">Sign up</a>.</p> */}

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