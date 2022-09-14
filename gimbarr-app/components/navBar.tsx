import Image from 'next/image'
import Logo from '../assets/LogoXL.png'
import {ImSearch} from 'react-icons/im'
import MyMenu from './menuItem'





export default function NavBar(){
    /* Controlador de busquedas */
    const SubmitSearch =()=>{
    console.log('realiza busqueda');
    
  }
    return (
        <div>
            <div className='bg-gray-300 w-full h-16 flex flex-row '>

            {/* logo-section */}
            <div className='basis-1/4 h-16 flex ml-10 items-center'>
              <div className='relative h-[45.8px] w-[102.5px] mt-1  ml-2'>
                  <Image src={Logo} alt="logo" layout='fill' />
              </div>
            </div>

            {/* search section*/}
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
                <MyMenu />
              </div>
              
            </div>
          </div>
        </div>
    )
}