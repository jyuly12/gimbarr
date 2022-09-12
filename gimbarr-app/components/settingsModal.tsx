import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function SettingsModal({name}) {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  function upload(){
    if (name == 'name'){
      console.log('upload name');
    };
    if (name == 'username'){
      console.log('upload username');
    };
    if (name == 'email'){
      console.log('upload email');
    };
        
  }

  return (
    <>
      <div className="">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-opacity-20  bg-cyan-900 px-4 py-2 text-sm font-medium text-cyan-800 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Edit
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 capitalize"
                  >
                    {name}
                  </Dialog.Title>
                  { name == 'name' && 
                    <div className="py-6 grid grid-cols-2 gap-6">
                      <p>Name: </p>
                      <input type="text" className='border border-gray-400 rounded-lg px-3 py-1 outline-cyan-700'/>
                      <p>Last Name:</p>
                      <input type="text" className='border border-gray-400 rounded-lg px-3 py-1 outline-cyan-700'/>
                  </div>
                  }

                  { name == 'username' &&
                    <div className="py-6 grid grid-cols-2 gap-6">
                      <p>Username: </p>
                      <input type="text" className='border border-gray-400 rounded-lg px-3 py-1 outline-cyan-700'/>
                      {/* <button className='text-gray-700 bord '>
                        verify
                      </button> */}
                    </div>
                  }

                  {
                    name == 'email' && 
                    <div className="py-6 grid grid-cols-2 gap-6">
                      <p>Email:</p>
                      <input type="email" className='border border-gray-400 rounded-lg px-3 py-1 outline-cyan-700'/>
                    </div>                    
                  }

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
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
