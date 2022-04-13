import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } 		from '@apollo/client';
import { LOGIN }	from '../../cache/mutations';

const Login = ({toggleLoginCallback, toggleRegisterCallback, toggleResetPasswordCallback, fetchUser}) => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=208%3A348

  const [Login] = useMutation(LOGIN);

  const [inputValues, setInputValues] = useState({ username: '', password: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { loading, error, data } = await Login({ variables: { ...inputValues } });
    setInputValues({
      username:'',
      password:''
    })
    if (data) {
      // Might need to do more things if login was successful (maybe routing?)
      fetchUser()
    }
    toggleLoginCallback();
  }
  return (
    <div>
      <form
        class="w-full h-full m-1.5"
        onSubmit={handleSubmit}
      >
        <div class="grid items-center space-y-4 p-4 mr-8 ml-8">
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
