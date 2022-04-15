import React , {useState} from 'react';
import { Transition } from '@headlessui/react'
import { Link,useNavigate } from "react-router-dom";
import Login from '../modals/Login';
import { useMutation, useApolloClient }     from '@apollo/client';
import { LOGOUT }	from '../../cache/mutations';

const NavBar = ({showSidebarCallback,auth,toggleLoginCallback,toggleRegisterCallback,fetchUser,user}) => {
  let navigate = useNavigate();

  const client = useApolloClient();
  const [Logout] = useMutation(LOGOUT);

  const handleLogout = async() => {
    Logout();
    const { data } = await fetchUser();
    if (data) {
        let reset = await client.resetStore();
        navigate("/");
    }
  }
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
          <div>
            <Link to="/studio">
              <div className="btn btn-ghost btn-circle h-9 w-9 min-h-0 m-1" title="Creator Studio">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 stroke-icon-grey stroke-[1.5]" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
                </svg>
              </div>
            </Link>
            <Link to="/browse" className="btn btn-ghost btn-circle h-9 w-9 min-h-0 m-1">
              <div title="Browse content">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 stroke-icon-grey stroke-[1.5]" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z" />
                </svg>
              </div>
            </Link>
            <div className="dropdown dropdown-end">
              <label tabindex="0" className="btn btn-ghost btn-circle h-9 w-9 min-h-0 m-2" title="Forums">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 stroke-icon-grey stroke-[1.5]" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </label>
              <ul tabindex="0" class="dropdown-content menu mt-3 shadow bg-base-100 rounded-box w-52">
                <li>
                  <Link to="/forum-management">
                    <a className="flex flex-row">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-icon-grey stroke-[1.5]" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div className="ml-3">
                        Manage posts
                      </div>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/forum-home">
                    <a className="flex flex-row">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-icon-grey stroke-[1.5]" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <div className="ml-3">
                        Go to forums
                      </div>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="dropdown dropdown-end" >
              <label tabindex="0" className="btn btn-ghost btn-circle h-9 w-9 min-h-0 m-2" title="Profile">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 stroke-[1.5] stroke-icon-grey" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </label>
              <ul tabindex="0" class="dropdown-content menu mt-3 shadow bg-base-100 rounded-box w-52">
                <li>
                  <Link to={`/profile/${user.username}`}>
                    <a className="flex flex-row">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-icon-grey stroke-[1.5]" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <div className="ml-3">
                        My Profile
                      </div>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link to="/update-account">
                    <a className="flex flex-row">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-icon-grey stroke-[1.5]" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div className="ml-3">
                        Account Settings
                      </div>
                    </a>
                  </Link>
                </li>
                <li>
                  <a onClick={() => {handleLogout()}}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-icon-grey stroke-[1.5]" fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
          :
          <div>
            <Link to="/browse" className="btn btn-ghost btn-circle h-9 w-9 min-h-0 m-1">
              <div title="Browse content">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 stroke-icon-grey stroke-[1.5]" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z" />
                </svg>
              </div>
            </Link>
            <Link to="/forum-home">
                <div className="btn btn-ghost btn-circle h-9 w-9 min-h-0 m-1" title="Forums">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 stroke-icon-grey stroke-[1.5]" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
            </Link>
            <div className="dropdown dropdown-end">
              <label tabindex="0" className="btn btn-ghost btn-circle h-9 w-9 min-h-0 m-1" title="Login/Register">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 stroke-[1.5] stroke-icon-grey" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </label>
              <ul tabindex="0" class="dropdown-content menu mt-3 shadow bg-base-100 rounded-box w-40">
                <li>
                  <a onClick={() => {toggleLoginCallback(true)}}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-icon-grey stroke-[1.5]" fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                    Login
                  </a>
                </li>
                <li>
                  <a onClick={() => {toggleRegisterCallback(true)}}>
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
