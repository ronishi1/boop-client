import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } 		from '@apollo/client';
import { LOGIN }	from '../../cache/mutations';
import { Transition } from '@headlessui/react'

const Login = ({toggleLoginCallback, toggleRegisterCallback, toggleResetPasswordCallback, fetchUser}) => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=208%3A348

  const [Login] = useMutation(LOGIN);

  const [inputValues, setInputValues] = useState({ username: '', password: '' });
  const [error,setError] = useState({status:false,message:""});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const result = await Login({ variables: { ...inputValues } });
      if(result.data){
        await fetchUser();
        setInputValues({
          username:'',
          password:''
        });
        toggleLoginCallback(false);
      }
    } catch (e) {
      setError({status:true,message:e.message});
      setTimeout(() => setError({status:false,message:""}), 3000);
      setInputValues({
        username:'',
        password:''
      })
      return;
    }
    // if (data) {
      // Might need to do more things if login was successful (maybe routing?)
    //   fetchUser()
    // }
    // toggleLoginCallback(false);
  }
  return (
    <div>
      <form
        class="w-full h-full m-1.5"
        onSubmit={handleSubmit}
      >
        <div class="grid items-center space-y-4 p-4 mr-8 ml-8">
          <Transition
            show={error.status}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div class="alert alert-error py-1.5 shadow-lg">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{error.message}</span>
              </div>
            </div>
          </Transition>
          <div class="w-full flex flex-row justify-between">
            <div class="text-left text-xl font-medium">Log In</div>
            <div className="cursor-pointer" onClick={() => {toggleLoginCallback(false)}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="grey"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
          <div class="place-items-start w-full">
            <div class="text-left text-sm">
              Don't have an account?
              <a class="ml-1 text-forum cursor-pointer" onClick={() => {toggleRegisterCallback(true)}}>
                Sign up here.
              </a>
            </div>
          </div>
          <span class="w-full">
            <input
              type="text"
              name="username"
              value={inputValues.username}
              placeholder="Username"
              onChange={handleChange}
              class="input input-bordered w-full focus:outline-none"
            />
          </span>
          <span class="w-full">
            <input
              type="password"
              name="password"
              value={inputValues.password}
              placeholder="Password"
              onChange={handleChange}
              class="input input-bordered w-full focus:outline-none"
            />
          </span>
          <div class="w-full">
            <div class="text-forum text-xs pl-1 cursor-pointer" onClick={() => {toggleResetPasswordCallback(true)}}>
              Forgot Password
            </div>
          </div>

          <span class="w-full flex flex-row justify-between items-center">
            <label
              class="text-zinc-400 text-sm ml-2 cursor-pointer"
              onClick={() => {toggleLoginCallback(false)}}
            >
              Cancel
            </label>
            <button
              class="btn border-none bg-forum normal-case mr-2"
              type="submit"
            >
              Login
            </button>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
