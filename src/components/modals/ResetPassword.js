import React, { useState } from "react";

const ResetPassword = ({toggleResetPasswordCallback}) => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=208%3A435
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    console.log(email);
    e.preventDefault();
    setEmail("");
    toggleResetPasswordCallback(false);
  }

  return (
    <div>
      <form
        class="w-full h-full m-1.5"
        onSubmit={handleSubmit}
      >
        <div class="grid items-center space-y-4 p-4 mr-8 ml-8">
          <div class="w-full flex flex-row justify-between">
            <div class="text-left text-xl font-medium">Reset Password</div>
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
            class="input input-bordered focus:outline-none"
          />
        <button class="btn border-none bg-forum" type="submit">
            Reset Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
