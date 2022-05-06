import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } 		from '@apollo/client';
import { LOGIN }	from '../../cache/mutations';
import { Transition } from '@headlessui/react'
import {useNavigate} from 'react-router-dom';
const Login = ({toggleLoginCallback, toggleRegisterCallback, toggleResetPasswordCallback, fetchUser}) => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=208%3A348
  let navigate = useNavigate();

  const [Login] = useMutation(LOGIN);

  const [inputValues, setInputValues] = useState({ usernameOrEmail: '', password: '' });
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
      console.log(inputValues)
      const result = await Login({ variables: { ...inputValues } });
      if(result.data){
        await fetchUser();
        setInputValues({
          usernameOrEmail:'',
          password:''
        });
        toggleLoginCallback(false);
        navigate("/");
      }
    } catch (e) {
      setError({status:true,message:e.message});
      setTimeout(() => setError({status:false,message:""}), 3000);
      setInputValues({
        usernameOrEmail:'',
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
        className="w-full h-full m-1.5"
        onSubmit={handleSubmit}
      >
        <div className="grid items-center space-y-4 p-4 mr-8 ml-8">
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
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>{error.message}</span>
              </div>
            </div>
          </Transition>
          <div className="w-full flex flex-row justify-between">
            <div className="text-left text-xl font-medium">Log In</div>
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
          <div className="place-items-start w-full">
            <div className="text-left text-sm">
              Don't have an account?
              <a className="ml-1 text-forum cursor-pointer" onClick={() => {toggleRegisterCallback(true)}}>
                Sign up here.
              </a>
            </div>
          </div>
          <span className="w-full">
            <input
              type="text"
              name="usernameOrEmail"
              value={inputValues.usernameOrEmail}
              placeholder="Username or Email"
              onChange={handleChange}
              className="input input-bordered w-full focus:outline-none"
            />
          </span>
          <span className="w-full">
            <input
              type="password"
              name="password"
              value={inputValues.password}
              placeholder="Password"
              onChange={handleChange}
              className="input input-bordered w-full focus:outline-none"
            />
          </span>
          <div className="w-full">
            <div className="text-forum text-xs pl-1 cursor-pointer" onClick={() => {toggleResetPasswordCallback(true)}}>
              Forgot Password
            </div>
          </div>

          <span className="w-full flex flex-row justify-between items-center">
            <label
              className="text-zinc-400 text-sm ml-2 cursor-pointer"
              onClick={() => {toggleLoginCallback(false)}}
            >
              Cancel
            </label>
            <button
              className="btn border-none bg-forum normal-case mr-2"
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
