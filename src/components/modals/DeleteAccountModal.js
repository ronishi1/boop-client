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
        <label class="modal-box w-1/4 max-w-full h-1/4 max-h-full grid place-items-center items-center">
          <form
            class="w-full h-full grid place-items-center items-center"
            onSubmit={handleSubmit}
          >
            <label class="absolute top-6 right-8 " onClick={handleChecked}>
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

            <div class="w-full grid place-items-center items-center space-y-4">
              <div class="place-items-start items-center">
                <h3 class="font-medium text-xl items-center text-center">
                  Delete Account?
                </h3>
                <h3 class="text-xs text-center">
                  This action cannot be undone.
                </h3>
              </div>
              <input
                type="password"
                placeholder="Password"
                name="password"
                class="input input-bordered w-4/5 focus:outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                class="btn btn-outline border-story  text-story"
                type="submit"
              >
                Delete Account
              </button>
            </div>
          </form>
        </label>
      </label>
    </div>
  );
};
export default DeleteAccountModal;
