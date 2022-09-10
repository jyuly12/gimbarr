import withSession from '../lib/session'
import youtube_parser from '../lib/idVideo'
import SlideBar from '../components/slidebar'
import Image from 'next/image'
import Logo from '../assets/LogoXL.png'
import {ImSearch} from 'react-icons/im'
import MyMenu from '../components/menu'
import { 
  FaUserEdit,
  FaRegUser,
  FaRegQuestionCircle } from 'react-icons/fa'

const youtubeUrl = "https://www.youtube.com/watch?v=Pw-0pbY9JeU&list=RDMM&start_radio=1&rv=qbLPmZCX7q0&ab_channel=twentyonepilots"
const links = [
  { href: '/myProfile', label: 'My Profile',  icon: FaRegUser},
  { href: '/account-settings', label: 'Account Settings', icon: FaUserEdit},
  { href: '/support', label: 'Support', icon: FaRegQuestionCircle },
]
export default function Index({user}) {

  /* Controlador de busquedas */
  const SubmitSearch =()=>{
    console.log('realiza busqueda');
  }
  /* videojs */
  const videoId = youtube_parser(youtubeUrl)
  const video = "https://www.youtube.com/embed/"+ videoId
  return (
    <SlideBar>
        <div>
          {/* navBar */}
          <div className='bg-gray-300 w-full h-16 flex flex-row'>

            {/* logo-section */}
            <div className='basis-1/4 h-16 flex ml-10 items-center'>
              <div className='relative h-[45.8px] w-[102.5px] mt-1  ml-2'>
                  <Image src={Logo} alt="logo" layout='fill' />
              </div>
            </div>

            {/* search */}
            <div className='basis-1/2'>
              <div className='flex items-center justify-center h-full '>
                <div className='relative items-stretch  w-2/3'>
                  <input type="text" placeholder='Search for anything...' 
                          className='border  focus:outline-none border-gray-500 py-1 px-5 rounded-lg w-full
                                    placeholder:italic placeholder:text-gray-500'/>
                  <button onClick={SubmitSearch} className='bg-gray-600 py-1 px-2 border border-gray-500 absolute right-0 top-0 rounded-r-lg '>
                    <ImSearch className='text-base text-white m-1'/>
                  </button>
                </div>
              </div>
            </div>

            {/* User */}
            <div className='basis-1/4 flex justify-end items-center'>
              <div className=' w-full h-full my-auto items-center flex justify-end pr-5'>
                <MyMenu items={links}/>
              </div>
              
            </div>
          </div>
          
          {/* Content */}
          <div className='h-full'>
            {/* Week challenge section */}
            <div className='text-center flex flex-col justify-center m-10 border-double border-4 border-cyan-800'>
              <h1 className='font-extrabold text-6xl '>WEEK CHALLENGE</h1>
              <div className=' w-2/5 my-5 mx-auto h-[270px] '>
                <iframe className="w-full h-full" src={video} title="Saw en Gusano | Gimbarr" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
              </div>
            </div>
            {/* more videos */}
            <div className='bg-blue-200'>
              <div>

              </div>
            </div>  
          </div>
        </div> 
    </SlideBar>

  )
}


export const getServerSideProps = withSession(async function ({ req, res }) {
  const user = req.session.get("user");

  if (user === undefined) {
    res.setHeader("location", "/login");
    res.statusCode = 302;
    res.end();
    return { props: {} };
  }

  return {
    props: { user: req.session.get("user") },
  };
});
