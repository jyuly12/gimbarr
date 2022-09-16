import SettingsModal from "../settingsModal";

export type UserProps = {
  id: number;
  name: string;
  email: string;
  image: String;
  profile: {
    username: string;
    } ;       
};

const UserData: React.FC<{ post: UserProps }> = ({ post }) => {
  const nameData =  post.name || "Unknown Name";
  const data =  post?.profile;
  const usernameData =data.map((item)=>{return item.username})
  const Email = post.email || "Unknown Email" 
  console.log(post);


  const user = [
    { label: 'Name',          content: nameData,              name: 'name',      },
    { label: 'Username',      content: usernameData,          name: 'username',  },
    { label: 'Email',         content: Email,                 name: 'email',     }
] 
  return (<>
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
    ))}</div></>
  );
};

export default UserData;