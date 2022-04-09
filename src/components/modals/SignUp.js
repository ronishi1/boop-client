import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = ({toggleLoginCallback,toggleSignUpCallback,signUpCallback}) => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=208%3A296
  const [inputValues, setInputValues] = useState({
    firstname: "",
    lastname: "",
    emailaddress: "",
    username: "",
    createpassword: "",
    confirmpassword: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    console.log(inputValues);
    e.preventDefault();
    setInputValues({
      firstname: "",
      lastname: "",
      emailaddress: "",
      username: "",
      createpassword: "",
      confirmpassword: "",
    });
    toggleSignUpCallback(false);
    signUpCallback();

  }

  return (
    <div>
      <form
        class="w-full h-full m-1.5"
        onSubmit={handleSubmit}
      >
      <div class="grid items-center space-y-4 p-4 mr-8 ml-8">
        <div class="w-full flex flex-row justify-between">
            <div class="text-left text-xl font-medium">
              Sign up for a free account
            </div>
            <div className="cursor-pointer" onClick={() => {toggleSignUpCallback(false)}}>
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
              Already have an account?
              <a class="ml-1 text-forum cursor-pointer" onClick={() => {toggleLoginCallback(true)}}>
                Log in here.
              </a>
            </div>
          </div>
          <span class="w-full flex auto-cols-auto place-items-center items-center space-x-4">
            <input
              type="text"
              name="firstname"
              placeholder="First name"
              class="input input-bordered w-1/2 focus:outline-none "
              value={inputValues.firstname}
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last name"
              class="input input-bordered w-1/2  focus:outline-none"
              value={inputValues.lastname}
              onChange={handleChange}
            />
          </span>
          <span class="w-full">
            <input
              type="text"
              name="username"
              placeholder="Username"
              class="input input-bordered w-full focus:outline-none"
              value={inputValues.username}
              onChange={handleChange}
            />
          </span>
          <span class="w-full">
            <input
              type="text"
              name="emailaddress"
              placeholder="Email Address"
              class="input input-bordered w-full focus:outline-none"
              value={inputValues.emailaddress}
              onChange={handleChange}
            />
          </span>
          <span class="w-full">
            <input
              type="password"
              name="createpassword"
              placeholder="Create password"
              class="input input-bordered w-full focus:outline-none"
              value={inputValues.createpassword}
              onChange={handleChange}
            />
          </span>
          <span class="w-full">
            <input
              type="password"
              name="confirmpassword"
              placeholder="Confirm password"
              class="input input-bordered w-full focus:outline-none"
              value={inputValues.confirmpassword}
              onChange={handleChange}
            />
          </span>
          <span class="w-full flex flex-row justify-between items-center">
            <label
              class="text-zinc-400 text-sm ml-2 cursor-pointer"
              onClick={() => {toggleSignUpCallback(false)}}
            >
              Cancel
            </label>
            <button
              class="btn border-none bg-forum normal-case mr-2"
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

export default SignUp;
