import React, {useState} 	from 'react';
import { Transition } from '@headlessui/react'
import "../../css/Sidebar.css";
import { Link } from "react-router-dom";

const SideBar = ({showSidebar,hideSidebarCallback,user}) => {
  const [comicMode,setComicMode] = useState(false);
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=312%3A4342
  // need logged in logged out version like nav, might split or do smthing else
  return (
    <div className="absolute top-0 z-10">
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
            <div className="bg-slate-400/50 h-full w-full fixed z-40" onClick={() => {hideSidebarCallback()}}></div>
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
            <div className="h-full z-50 relative">
              <ul className="menu bg-base-100 w-48 rounded-br-md">
                <li className="border-b-2 disabled">
                  <a className="flex flex-row items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 cursor-pointer hover:fill-gray-400" onClick={() => {hideSidebarCallback()}}>
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </li>
                {user ?
                <div>
                  <li>
                    <Link to="/" className="h-12 text-xl text-slate-600" onClick={hideSidebarCallback}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-slate-600 stroke-2" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link to={`/favorites/${user.username}`} className="h-12 text-xl text-slate-600" onClick={hideSidebarCallback}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-slate-600 stroke-2" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                      Favorites
                    </Link>
                  </li>

                  <li>
                    <Link to={`/read-list/${user.username}`} className="h-12 text-xl text-slate-600" onClick={hideSidebarCallback}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-slate-600 stroke-2" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                      </svg>
                      Read List
                    </Link>
                  </li>

                  <li>
                    <Link to="/forum-home" className="h-12 text-xl text-slate-600" onClick={hideSidebarCallback}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-slate-600 stroke-2" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                      Forums
                    </Link>
                  </li>

                  <li>
                    <Link to="/browse" className="h-12 text-xl text-slate-600" onClick={hideSidebarCallback}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-slate-600 stroke-2" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z" />
                      </svg>
                      Browse
                    </Link>
                  </li>

                  <li>
                    <Link to="/about" className="h-12 text-xl text-slate-600" onClick={hideSidebarCallback}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-slate-600 stroke-2" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      About Us
                    </Link>
                  </li>

                  <li>
                    <Link to="/help" className="h-12 text-xl text-slate-600" onClick={hideSidebarCallback}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-slate-600 stroke-2" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Help
                    </Link>
                  </li>

                  <li><a className="hover:bg-white cursor-default h-52"></a></li>

                  <li>
                    <div className="hover:bg-white cursor-default flex flex-row justify-center">
                      <div>
                        <span className="text-comic text-2xl">bo</span>
                        <span className="text-story text-2xl">op</span>
                      </div>
                    </div>
                  </li>
                </div>
                  :
                <div>
                  <li>
                    <Link to="/" className="h-12 text-xl text-slate-600" onClick={hideSidebarCallback}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-slate-600 stroke-2" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link to="/forum-home" className="h-12 text-xl text-slate-600" onClick={hideSidebarCallback}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-slate-600 stroke-2" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                      Forums
                    </Link>
                  </li>

                  <li>
                    <Link to="/browse" className="h-12 text-xl text-slate-600" onClick={hideSidebarCallback}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-slate-600 stroke-2" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z" />
                      </svg>
                      Browse
                    </Link>
                  </li>

                  <li>
                    <Link to="/about" className="h-12 text-xl text-slate-600" onClick={hideSidebarCallback}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-slate-600 stroke-2" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      About Us
                    </Link>
                  </li>

                  <li>
                    <Link to="/help" className="h-12 text-xl text-slate-600" onClick={hideSidebarCallback}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-slate-600 stroke-2" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Help
                    </Link>
                  </li>

                  <li><a className="hover:bg-white cursor-default h-52"></a></li>

                  <li>
                    <div className="hover:bg-white cursor-default flex flex-row justify-center">
                      <div>
                        <span className="text-comic text-2xl">bo</span>
                        <span className="text-story text-2xl">op</span>
                      </div>
                    </div>
                  </li>
              </div>
              }
              </ul>
            </div>

            </Transition.Child>
          </Transition>
    </div>
  );
}

export default SideBar;
