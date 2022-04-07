import React, { useRef } from "react";

const SignUp = () => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=208%3A296
  return (
    <div>
      {/* I think we can just move this button to the navbar we might have to rename id */}
      <label for="signup-modal" class="btn modal-button">
        open modal
      </label>

      <input type="checkbox" id="signup-modal" class="modal-toggle" />

      <label for="signup-modal" class="modal cursor-pointer">
        <label class="modal-box w-5/12 max-w-full h-7/12 max-h-full flex flex-wrap place-items-center items-center">
          <label class="absolute top-6 right-8 " for="signup-modal">
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
          </label>

          <div class="w-full grid place-items-center items-center space-y-4 p-4 m-8 ">
            <div class="place-items-start w-full">
              <h3 class="text-left text-xl font-medium">
                Sign up for a free account
              </h3>
            </div>
            <span class="w-full flex auto-cols-auto place-items-center items-center space-x-4">
              <input
                type="text"
                id="firstname"
                placeholder="First name"
                class="input input-bordered w-1/2 focus:outline-none "
              />
              <input
                type="text"
                id="lastname"
                placeholder="Last name"
                class="input input-bordered w-1/2  focus:outline-none"
              />
            </span>
            <span class="w-full">
              <input
                type="text"
                id="username"
                placeholder="Username"
                class="input input-bordered w-full focus:outline-none"
              />
            </span>
            <span class="w-full">
              <input
                type="text"
                id="emailaddress"
                placeholder="Email Address"
                class="input input-bordered w-full focus:outline-none"
              />
            </span>
            <span class="w-full">
              <input
                type="text"
                id="createpassword"
                placeholder="Create password"
                class="input input-bordered w-full focus:outline-none"
              />
            </span>
            <span class="w-full">
              <input
                type="text"
                id="confirmpassword"
                placeholder="Confirm password"
                class="input input-bordered w-full focus:outline-none"
              />
            </span>
            <span class="w-full flex auto-cols-auto place-items-center items-center ">
              <label
                class="text-zinc-400 text-sm absolute bottom-10 left-20"
                for="signup-modal"
              >
                Cancel
              </label>
              <label class="btn border-none bg-forum absolute bottom-6 right-[72px]">
                Create
              </label>
            </span>
          </div>
        </label>
      </label>
    </div>
  );
};

export default SignUp;
