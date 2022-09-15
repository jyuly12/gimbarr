import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Image from "next/image"
import { useSession } from "next-auth/react"
import BgImage from "../assets/background.png"
import UserDefault from "../assets/UserDefault.png"
import { HiOutlinePencil, HiOutlinePlusCircle } from "react-icons/hi";

interface modal{
  label: string,
  name: string,
  title: string,
  content : any,
  buttons: boolean,
  icon: string,
}

export default function SettingsModal(props:modal) {
  const { data: session } = useSession()
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  function upload(){
    if (props.name == 'name'){
      console.log('upload name');
    };
    if (props.name == 'username'){
      console.log('upload username');
    };
    if (props.name == 'email'){
      console.log('upload email');
    };
        
  }

  return (
    <>
      <div className="">
        <button
          type="button"
          onClick={openModal}
          className="flex gap-x-2 items-center rounded-md bg-opacity-20  bg-cyan-900 px-4 py-2 text-sm font-medium text-cyan-800 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          {props.icon === 'pencil' ? <HiOutlinePencil/> : <HiOutlinePlusCircle/>} 
          {props.label}
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 capitalize"
                  >
                    {props.title}
                  </Dialog.Title>
                    {props.content}

                    {props.buttons && 
                      <div className="mt-4 flex gap-x-5">
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={closeModal}
                        >
                          Cancel
                        </button>
                        <button
                          type='button'
                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={upload}
                        >
                          Upload Changes
                        </button>
                      </div>
                    }
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
