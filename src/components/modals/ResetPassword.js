import React, { useState } from "react";
import { useMutation } 		from '@apollo/client';
import { GENERATE_RESET_PASSWORD }	from '../../cache/mutations';
import { Transition } from '@headlessui/react'

const ResetPassword = ({toggleResetPasswordCallback}) => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=208%3A435
  const [email, setEmail] = useState("");
  const [GenerateResetPassword] = useMutation(GENERATE_RESET_PASSWORD);
  const [submitted,setSubmitted] = useState(false);

  const handleSubmit = async(e) => {
    e.preventDefault();
    setEmail("");
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      toggleResetPasswordCallback(false);
    }, 3000);
    await GenerateResetPassword({ variables: {email:email} });
  }

  return (
    <div>
      <form
        className="w-full h-full m-1.5"
        onSubmit={handleSubmit}
      >
        <div className="grid items-center space-y-4 p-4 mr-8 ml-8">
          <Transition
            show={submitted}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="alert alert-info shadow-lg">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>
                  <div>A link to reset your password has been sent.</div>
                  <div>Please check your spam if you don't see it.</div>
                </span>
              </div>
            </div>
          </Transition>
          <div className="w-full flex flex-row justify-between">
            <div className="text-left text-xl font-medium">Reset Password</div>
            <div className="cursor-pointer" onClick={() => {toggleResetPasswordCallback(false)}}>
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
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input input-bordered focus:outline-none"
          />
        <button className="btn border-none bg-forum" type="submit" disabled={submitted}>
            Reset Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
