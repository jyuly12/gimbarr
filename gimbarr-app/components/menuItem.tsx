import { Menu, Transition } from '@headlessui/react'
import { UserCircleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';
import UserImg from '../assets/UserDefault.png';
import { useSession} from "next-auth/react"
import { 
  FaUserEdit,
  FaRegUser,
  FaRegQuestionCircle } from 'react-icons/fa'
const links = [
  { href: '/myProfile', label: 'My Profile',  icon: FaRegUser},
  { href: '/account-settings', label: 'Account Settings', icon: FaUserEdit},
  { href: '/support', label: 'Support', icon: FaRegQuestionCircle },
]
export default function MyMenu() {
  
  const { data: session } = useSession()
  
  return (
    <Menu as='div' className='relative inline-block text-left z-20'>
      <div className=''>
        <Menu.Button className='rounded-full h-12 w-12 place-content-center '>
         {/*  <Image src={} layout="fill"/>  */}
            <UserCircleIcon className='text-base text-gray-600'/>
        </Menu.Button>
      </div>
      <Transition
          
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
            <Menu.Items 
              className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 
                  rounded-md  bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className='px-1 py-1'>
                {links.map((link) => (

                <Menu.Item
                    as="a"
                    key={link.href}
                    href={link.href}
                    className="ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-red-200 
                                ui-not-active:text-black flex w-full items-center hover:bg-slate-300
                                rounded-md px-2 py-2 text-sm gap-x-2 text-cyan-800"
                >   
                    <link.icon/>
                    {link.label}
                </Menu.Item>
                ))}
                </div>
            </Menu.Items>
        </Transition>
    </Menu>
  )
}