import React, {useState} 	from 'react';
import { Transition } from '@headlessui/react'
import "../../css/Sidebar.css";

const SideBar = ({showSidebar,hideSidebarCallback}) => {
  const [comicMode,setComicMode] = useState(false);
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=312%3A4342
  // need logged in logged out version like nav, might split or do smthing else
  return (
    <div className="absolute top-0">
      <Transition show={showSidebar} appear={true}>
            {/* Background overlay */}
            <Transition.Child
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
            <div className="bg-slate-400/50 h-full w-full fixed z-20" onClick={() => {hideSidebarCallback()}}></div>
            </Transition.Child>

            {/* Sliding sidebar */}
            <Transition.Child
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
            <div className="h-full z-30 relative">
              <ul class="menu bg-base-100 w-56">
                <li className="border-b-2 disabled">
                  <a className="flex flex-row">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer hover:fill-gray-400" onClick={() => {hideSidebarCallback()}}>
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    <div class="flex items-center justify-center w-full">
                      <label for="toggleB" class="flex items-center cursor-pointer">
                        <div class="relative">
                          <input type="checkbox" id="toggleB" class="sr-only" />
                          <div class="dot-holder block border-2 border-comic w-16 h-8 rounded-full transition duration-700"></div>
                          <div class="dot absolute left-1 top-1 bg-comic w-6 h-6 rounded-full transition duration-700"></div>
                        </div>
                      </label>

                    </div>

                  </a>
                </li>
                <li><a>Home</a></li>
                <li><a>Forum</a></li>
                <li><a>Browse</a></li>
                <li><a>About Us</a></li>
                <li><a>Help</a></li>
              </ul>
            </div>

            </Transition.Child>
          </Transition>
    </div>
  );
}

export default SideBar;
