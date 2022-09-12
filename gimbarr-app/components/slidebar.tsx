import { useState, useEffect } from 'react'

import { 
    HiMenu,
    HiOutlineX,
    HiOutlinePlusCircle,
    HiOutlineUserCircle,
    HiOutlineLogout,
    HiOutlineCog,
    HiFire,
    HiAcademicCap,
    HiHome,
    HiOutlineShoppingBag} from "react-icons/hi";
import { ImCalendar } from "react-icons/im";

import { motion, useAnimation } from 'framer-motion'

const data = [
  {
    name: 'Discover',
    items: [
      { title: 'Home',              icon: HiHome,               href: '/'},
      { title: 'Popular',           icon: HiFire,               href: '/most-popupar'},
      { title: 'Events',            icon: ImCalendar,           href: '/events'},
      { title: 'About',             icon: HiAcademicCap,        href: '/about'},
      { title: 'Shop',              icon: HiOutlineShoppingBag, href: '/shop'},
    ]
  },
  {
    name: 'Manage',
    items: [
      { title: 'Bookmarks',       icon: ImCalendar},
      { title: 'Reading history', icon: ImCalendar},
      { title: 'Focus Mode',      icon: ImCalendar},
      { title: 'Customize',       icon: ImCalendar},
    ]
  },
]

const datafooter = [

  {
    name: '',
    items: [
      { title: 'Settings',      icon: HiOutlineCog},
      { title: 'Logout',        icon: HiOutlineLogout,},
    ]
  },
]

interface Props {
    children: React.ReactNode
}

export default function SlideBar({children}: Props) {

  const [active, setActive] = useState(false)
  const controls = useAnimation()
  const controlText = useAnimation()
  const controlTitleText = useAnimation()

  /* SlideBar Animations */
  const showMore = () => {
    controls.start({
      width: '200px',
      transition: { duration: 0.001 }
    })
    controlText.start({
      opacity: 1,
      display: 'block',
      transition: {delay:0.3}
    })
    controlTitleText.start({
      opacity: 1,
      transition: {delay:0.3}
    })

    setActive(true)
  }

  const showLess = () => {
    controls.start({
      width: '55px',
      transition: { duration: 0.001 }
    })

    controlText.start({
      opacity: 0,
      display: 'none',
    })

    controlTitleText.start({
      opacity: 0,
    })

    setActive(false)

  }



  useEffect(() => {
    showMore()
  },[])




  return (
    <div className='min-h-screen bg-gray-200' >
        <div className='flex flex-col md:flex-row flex-1'>
            <aside>
                <motion.div animate={controls} className='max-w-[200px]  animate duration-300 border-r border-gray-300 sticky top-0  flex flex-col pb-10 pt-4 min-h-screen group bg-cyan-900' >                
                    {active && <button onClick={showLess} className='ml-auto mr-2 text-2xl text-white cursor-pointer  group-hover:block '><HiOutlineX/></button>}
                    {!active && <button onClick={showMore} className='mx-auto text-2xl text-white cursor-pointer mt-2'><HiMenu/></button> }
                    <div className='grow'>
                          
                    {data.map((group, index) => (
                        <div key={index} className='my-4' >
                        <motion.p animate={controlTitleText} className='mb-2 ml-4 text-sm font-bold text-white' >{group.name}</motion.p>

                        {group.items.map((item, index2) => (
                            <div key={index2} className={`flex  w-full ${active ? 'px-4 hover:bg-cyan-700' : 'justify-center'} py-2 cursor-pointer `} >
                            <item.icon className='text-xl text-white' />
                            <motion.p animate={controlText} className='ml-4 text-sm font-bold text-white ' > {item.title}</motion.p>
                            </div>

                        ))}
                        </div>
                    ))}
                    </div>

                    <div>
                    {datafooter.map((group, index) => (
                        <div key={index} className='my-2' >
                        <motion.p animate={controlTitleText} className='mb-2 ml-4 text-sm font-bold text-white' >{group.name}</motion.p>

                        {group.items.map((item, index2) => (
                            <div key={index2} className='flex px-4 py-1 cursor-pointer' >
                              <item.icon className='text-xl text-white' />
                              <motion.p animate={controlText} className='ml-4 text-sm font-bold text-white'> {item.title}</motion.p>
                            </div>

                        ))}
                        </div>
                    ))}
                    </div>

                </motion.div>
            </aside>

            <main className='flex-1'>{children}</main>
        </div>
    </div>
  )
}