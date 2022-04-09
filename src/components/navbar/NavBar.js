import React , {useState} from 'react';
import { Transition } from '@headlessui/react'
import { Link } from "react-router-dom";
import Login from '../modals/Login';

const NavBar = ({showSidebarCallback,auth,toggleLoginCallback}) => {
  // Might split into a logged in nav and logged out nav not sure
  return (
    <div class="navbar bg-base-100 drop-shadow mb-5 h-14 min-h-0">
      <div class="navbar-start">
        <label tabindex="0" class="btn btn-ghost btn-circle h-9 w-9 min-h-0 mr-1" onClick={() => {showSidebarCallback()}}>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-icon-grey" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </label>
        <Link to="/">
          <div className="flex flex-row">
            <div className="text-comic text-xl">bo</div>
            <div className="text-story text-xl">op</div>
          </div>
        </Link>
      </div>
      <div class="navbar-center">
        <div class="form-control">
          <label class="input-group">
            <input type="text" placeholder="Search" class="focus:ring-0 focus:outline-none input input-bordered max-w-md w-96 h-10" />
            <Link to="/search">
              <span className="cursor-pointer pt-2 pb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-neutral-500 stroke-1 fill-icon-grey" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </span>
            </Link>
          </label>
          </div>
        </div>
        <div class="navbar-end">
          {auth ?
          <></>
          :
          <div>
            <div className="btn btn-ghost btn-circle h-9 w-9 min-h-0 m-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 stroke-[1.5] stroke-icon-grey" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
            <div className="dropdown dropdown-end">
              <label tabindex="0" className="btn btn-ghost btn-circle h-9 w-9 min-h-0 m-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 stroke-[1.5] stroke-icon-grey" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </label>
              <ul tabindex="0" class="dropdown-content menu mt-3 shadow bg-base-100 rounded-box w-40">
                <li>
                  <a onClick={toggleLoginCallback}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-icon-grey stroke-[1.5]" fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                    Login
                  </a>
                </li>
                <li>
                  <a>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-icon-grey stroke-[1.5]" fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    Register
                  </a>
                </li>
              </ul>
            </div>
          </div>
          }
        </div>
      </div>
    );
  }

  export default NavBar;
