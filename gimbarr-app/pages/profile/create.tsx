import { useSession, signIn, signOut } from "next-auth/react"
import type { GetServerSideProps } from "next";




type Props = {
};

export default function Index(props:Props) {

  /* videojs */
  const youtubeUrl = "https://www.youtube.com/watch?v=jfKfPfyJRdk&ab_channel=LofiGirl"
  
  const { data: session } = useSession()

  
  if (!session) {

  }
    return (
        <>       
          <div>asdkljashdka</div>
        </>
    )  
} 