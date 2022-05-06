import React, { useState } from "react";
import { Link } from "react-router-dom";
import { REGISTER }	from '../../cache/mutations';
import { useMutation } 		from '@apollo/client';
import { Transition } from '@headlessui/react'
import { useNavigate} from 'react-router-dom'
const Register = ({toggleLoginCallback,toggleRegisterCallback,registerCallback,fetchUser}) => {
  let navigate = useNavigate();
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=208%3A296
  const [Register] = useMutation(REGISTER);

  const [error,setError] = useState({status:false,message:""});

  const [inputValues, setInputValues] = useState({
    email: "",
    username: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setInputValues({
      email: "",
      username: "",
      password: "",
      confirm_password: "",
    });
    console.log(inputValues.username.length);
    if(inputValues.username.length < 5 || inputValues.username.length > 15) {
      setError({status:true,message:"Username must be between 5 and 15 characters"});
      setTimeout(() => setError({status:false,message:""}), 3000);
      return;
    }
    if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValues.email))) {
      setError({status:true,message:"Invalid email format"});
      setTimeout(() => setError({status:false,message:""}), 3000);
      return;
    }
    if(inputValues.password.length < 6){
      setError({status:true,message:"Password must be at least 6 characters"});
      setTimeout(() => setError({status:false,message:""}), 3000);
      return;
    }
    if(inputValues.password !== inputValues.confirm_password){
      setError({status:true,message:"Passwords do not match"})
      setTimeout(() => setError({status:false,message:""}), 3000);
      return;
    }
    try{
      const result = await Register({ variables: { ...inputValues } });
      if(result.data){
        await fetchUser()
        toggleRegisterCallback(false);
        navigate("/");
      }
    } catch (e) {
      console.log(e.message);
      setError({status:true,message:e.message});
      setTimeout(() => setError({status:false,message:""}), 3000);
      return;
    }
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
            <div className="text-left text-xl font-medium">
              Sign up for a free account
            </div>
            <div className="cursor-pointer" onClick={() => {toggleRegisterCallback(false)}}>
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
              Already have an account?
              <a className="ml-1 text-forum cursor-pointer" onClick={() => {toggleLoginCallback(true)}}>
                Log in here.
              </a>
            </div>
          </div>
          <span className="w-full">
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="input input-bordered w-full focus:outline-none"
              value={inputValues.username}
              onChange={handleChange}
            />
          </span>
          <span className="w-full">
            <input
              type="text"
              name="email"
              placeholder="Email Address"
              className="input input-bordered w-full focus:outline-none"
              value={inputValues.email}
              onChange={handleChange}
            />
          </span>
          <span className="w-full">
            <input
              type="password"
              name="password"
              placeholder="Create password"
              className="input input-bordered w-full focus:outline-none"
              value={inputValues.password}
              onChange={handleChange}
            />
          </span>
          <span className="w-full">
            <input
              type="password"
              name="confirm_password"
              placeholder="Confirm password"
              className="input input-bordered w-full focus:outline-none"
              value={inputValues.confirm_password}
              onChange={handleChange}
            />
          </span>
          <span className="w-full flex flex-row justify-between items-center">
            <label
              className="text-zinc-400 text-sm ml-2 cursor-pointer"
              onClick={() => {toggleRegisterCallback(false)}}
            >
              Cancel
            </label>
            <button
              className="btn border-none bg-forum normal-case mr-2"
              type="submit"
            >
              Sign Up
            </button>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Register;
