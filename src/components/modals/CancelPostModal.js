import React, { useState } from "react";

const CancelPostModal = () => {
  const [checked, setChecked] = useState(false);

  function handleChecked() {
    setChecked(!checked);
  }

  function handleSubmit(e) {
    console.log("Cancelled");
    e.preventDefault();
    setChecked(!checked);
  }
  return (
    <div>
      {/* I think we can just move this button to the navbar we might have to rename id */}
      <label for="cancel-post-modal" class="btn modal-button">
        Cancel Post
      </label>

      <input
        type="checkbox"
        id="cancel-post-modal"
        class="modal-toggle"
        checked={checked}
        onClick={handleChecked}
      />

      <label for="cancel-post-modal" class="modal cursor-pointer">
        <label class="modal-box w-1/3 max-w-full h-5/12 max-h-full grid place-items-center items-center ">
          <form
            class="w-full h-full grid place-items-center items-center"
            onSubmit={handleSubmit}
          >
            <label class="absolute top-6 right-8 " for="cancel-post-modal">
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
              <div class="grid place-content-start w-full">
                <h3 class="font-bold text-xl">Cancel Post Creation</h3>
              </div>
              <div class="place-items-start items-center">
                <div class="text-sm items-center">
                  Your work will not be saved. Are you sure you want to leave
                  this page?
                </div>
              </div>
              <div></div>
              <div class="flex">
                <button
                  class="btn btn-outline text-zinc-400 text-sm relative right-32"
                  for="signup-modal"
                >
                  Cancel
                </button>
                <button
                  class="btn border-forum bg-forum relative left-28"
                  type="submit"
                >
                  Confirm
                </button>
              </div>
            </div>
          </form>
        </label>
      </label>
    </div>
  );
};
export default CancelPostModal;
