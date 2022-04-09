import React, { useState } from "react";

const SignUp = () => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=208%3A296

  const [checked, setChecked] = useState(false);
  function handleChecked() {
    setChecked(!checked);
  }
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
    setChecked(false);
  }
  return (
    <div>
      {/* I think we can just move this button to the navbar we might have to rename id */}
      <label for="signup-modal" class="btn modal-button">
        open modal
      </label>

      <input
        type="checkbox"
        id="signup-modal"
        class="modal-toggle"
        checked={checked}
        onClick={handleChecked}
      />

      <label for="signup-modal" class="modal cursor-pointer">
        <label class="modal-box w-5/12 max-w-full h-7/12 max-h-full flex flex-wrap place-items-center items-center">
          <form
            class="w-full h-full grid place-items-center items-center"
            onSubmit={handleSubmit}
          >
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
              <span class="w-full flex auto-cols-auto place-items-center items-center ">
                <label
                  class="text-zinc-400 text-sm absolute bottom-10 left-20"
                  for="signup-modal"
                >
                  Cancel
                </label>

                <button
                  class="btn border-none bg-forum absolute bottom-6 right-[72px]"
                  type="submit"
                >
                  Create
                </button>
              </span>
            </div>
          </form>
        </label>
      </label>
    </div>
  );
};

export default SignUp;
