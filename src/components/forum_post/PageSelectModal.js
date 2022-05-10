import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

const PageSelectModal = ({ visible, maxPage, handleSetPage, cancel }) => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=341%3A2898
  const [selectedPage, setSelectedPage] = useState(1);
  const [error,setError] = useState({status:false,message:""});

  const handleEnter = () => {
    if(selectedPage > 0 && selectedPage < (maxPage+1)){
      handleSetPage(selectedPage);
      return;
    }
    setError({status:true,message:"Please enter a page number within the given range"});
    setTimeout(() => {
      setError({status:false,message:''});
      setSelectedPage("")
    },1000)
  }

  const handleChange = (e) => {

    if(!isNaN(e.target.value))
      setSelectedPage(parseInt(e.target.value))
    else
    setSelectedPage("")
  }

  return (
    <div>
      <input type="checkbox" checked={visible} id="delete-modal" className="modal-toggle" readOnly/>
      <div className="modal">
        <div className="modal-box">
          <div className='flex justify-end'>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 hover:cursor-pointer" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth="2"
              onClick={cancel}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <p className='text-xl font-semibold'>
            Page Navigation
          </p>
          <div className="">
          <Transition
            show={error.status}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="alert alert-error py-1.5 shadow-lg">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{error.message}</span>
              </div>
            </div>
          </Transition>
            <div>Enter a page number between <strong>1</strong> and <strong>{maxPage}</strong>: </div>
            <input 
              type='Number'
              className='input input-bordered w-full'
              value={selectedPage}
              onChange={handleChange}
              min={1}
              max={maxPage}
            />
          </div>
          <div className="modal-action space-x-4">
            <a 
              className="link no-underline text-gray-400
              hover:brightness-90 grid content-center"
              onClick={cancel}
            >
              Cancel
            </a>
            <label 
              className="btn btn-sm border-forum bg-forum 
              hover:border-forum hover:bg-forum hover:brightness-90" 
              onClick={handleEnter}
            >
              Go
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageSelectModal;
          