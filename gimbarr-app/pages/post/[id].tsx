import React, { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import ReactMarkdown from "react-markdown";
import Router, { useRouter } from "next/router";
import { PostProps } from "../../components/posts/Index";
import prisma from '../../lib/prisma'
import { useSession } from "next-auth/react";
import SlideBar from "../../components/slidebar";

/* page where we can edit a publication */
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const post = await prisma.post.findUnique({
    where: {
      id: Number(params?.id) || -1,
    },
    include: {
      author: {
        select: { name: true, email: true },
      },
    },
  });
  return {
    props: post,
  };
};



async function deletePost(id: number): Promise<void> {
  await fetch(`/api/post/${id}`, {
    method: "DELETE",
  });
  await Router.push("/myProfile")
}

const Post: React.FC<PostProps> = (props) => {

  const [title, setTitle] = useState(props.title);
  const [content, setContent] = useState(props.content);
  const [video, setVideo] = useState(props.videoclip);

  async function editPost(id: number): Promise<void> {
    try {
      const body = { title, video, content };
      await fetch(`/api/post/update/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
      });
      await Router.push("/myProfile")
    }catch (error) {
      console.error(error);
    }
  }


  const { data: session, status } = useSession();
  const router = useRouter();
  
    useEffect(()=> {
      if (!session) {
        router.push('/auth/login');
      }
    })
   

  if (status === 'loading') {
    return <div>Authenticating ...</div>;
  }
  const userHasValidSession = Boolean(session);
  const postBelongsToUser = session?.user?.email === props.author?.email;
  let id = props.id;   
 if (session)  {
      return (    
        <SlideBar>
          <div className="mx-auto w-4/5 mt-10">

            <h1>Edit your publication</h1>

            {/* Post Title */}
            {<input
              autoFocus
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              type="text"
              value={title}
              className="w-full p-2 mt-2 border-4 border-gray-300 rounded-md"
            />}

            {/* Post Youtube video link */}
            <input 
              type="text"
              autoFocus
              onChange={(e) => setVideo(e.target.value)}
              placeholder="Insert your video link"
              value={video}
              className="w-full p-2 mt-2 border-4 border-gray-300 rounded-md"/>

            {/* Post description */}
            <textarea
              cols={50}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Content"
              rows={8}
              value={content}
              className="w-full p-2 mt-2  border-4 border-gray-300 rounded-md"
            />

            <div className="flex justify-between">
              <div className="flex gap-x-4">

                {/* Update Button */}
                {props.published && userHasValidSession && postBelongsToUser && (
                  <button className="bg-green-400  py-4 px-8 rounded-lg text-white capitalize font-bold"
                    onClick={() => editPost(props.id)}>update
                  </button>
                )}
                {/* Delete Button */}
                {userHasValidSession && postBelongsToUser && (
                  <button className="ml-4 bg-red-400 px-4 py-4 text-white rounded-lg"
                  onClick={() => deletePost(props.id)}>Delete
                  </button>
                )}
              </div>

              {/* when cancel redirect to*/}
              <a className="ml-4 bg-gray-400 px-4 py-4 text-white rounded-lg" href="#" onClick={() => Router.push("http://localhost:3000/myProfile")}>
                Cancel
              </a> 
            </div>
          </div>      
        </SlideBar>
      );
    }
};

export default Post;