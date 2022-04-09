import React, { useState } from "react";

const Login = () => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=208%3A348
  const [checked, setChecked] = useState(false);
  function handleChecked() {
    setChecked(!checked);
  }

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    console.log({ username, password });
    e.preventDefault();
    setUsername("");
    setPassword("");
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
            class="w-full h-full grid place-items-center items-center m-4"
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
                <h3 class="text-left text-xl font-medium">Log In</h3>
              </div>
              <div class="place-items-start w-full">
                <h3 class="text-left text-sm ">
                  Don't have an account?
                  <a class="text-forum" href="./signup">
                    Sign up here.
                  </a>
                </h3>
              </div>
              <span class="w-full ">
                <input
                  type="text"
                  name="username"
                  value={username}
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                  class="input input-bordered w-full focus:outline-none"
                />
              </span>
              <span class="w-full">
                <input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  class="input input-bordered w-full focus:outline-none"
                />
              </span>
              <div class="place-items-start w-full">
                <a class="text-forum text-xs pl-1" href="./resetpassword">
                  Forgot Password
                </a>
              </div>

              <span class="w-full flex auto-cols-auto place-items-center items-center ">
                <label
                  class="text-zinc-400 text-sm absolute bottom-12 left-20"
                  for="signup-modal"
                >
                  Cancel
                </label>
                <button
                  class="btn border-none bg-forum absolute bottom-8 right-[72px]"
                  type="submit"
                  onClick={handleChecked}
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

export default Login;
