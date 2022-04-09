import React, { useState } from "react";

const DeleteAccountModal = () => {
  const [checked, setChecked] = useState(false);
  function handleChecked() {
    setChecked(!checked);
    setPassword("");
  }
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    console.log(password);
    e.preventDefault();
    setPassword("");
    setChecked(false);
  }
  return (
    <div>
      {/* I think we can just move this button to the navbar we might have to rename id */}
      <label for="account-delete-modal" class="btn modal-button">
        Delete Account
      </label>

      <input
        type="checkbox"
        id="account-delete-modal"
        class="modal-toggle"
        checked={checked}
        onClick={handleChecked}
      />

      <label for="account-delete-modal" class="modal cursor-pointer">
        <label class="modal-box w-1/4  h-1/4 ">
          <form class="w-full h-full" onSubmit={handleSubmit}>
            <div class="grid items-center  space-y-4 p-2">
              <div class="w-full flex flex-row justify-between">
                <h3 class="text-xl font-bold">Delete Account?</h3>
                <label class="cursor-pointer " onClick={handleChecked}>
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
              </div>
              <div class="w-full space-y-4">
                <div class="place-items-start items-center">
                  <h3 class="text-sm">This action cannot be undone.</h3>
                </div>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  class="input input-bordered w-full focus:outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <span class="w-full flex flex-row justify-between items-center ">
                <label
                  class="text-zinc-400 text-sm ml-1 cursor-pointer "
                  for="account-delete-modal"
                >
                  Cancel
                </label>
                <button
                  class={`text-sm font-bold mr-1 text-story`}
                  type="submit"
                >
                  Delete
                </button>
              </span>
            </div>
          </form>
        </label>
      </label>
    </div>
  );
};
export default DeleteAccountModal;
