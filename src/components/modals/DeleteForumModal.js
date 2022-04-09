import React, { useState } from "react";

const DeleteForumModal = ({ title }) => {
  const [checked, setChecked] = useState(false);

  function handleChecked() {
    setChecked(!checked);
  }

  function handleSubmit(e) {
    console.log(title);
    e.preventDefault();
    setChecked(!checked);
  }
  return (
    <div>
      {/* I think we can just move this button to the navbar we might have to rename id */}
      <label for="delete-forum-modal" class="btn modal-button">
        Delete Forum
      </label>

      <input
        type="checkbox"
        id="delete-forum-modal"
        class="modal-toggle"
        checked={checked}
        onClick={handleChecked}
      />

      <label for="delete-forum-modal" class="modal cursor-pointer">
        <label class="modal-box w-1/3 max-w-full h-5/12">
          <form
            class="w-full h-full grid place-items-center items-center"
            onSubmit={handleSubmit}
          >
            <div class="grid items-center  space-y-1 p-2">
              <div class="w-full flex flex-row justify-between">
                <h3 class="font-medium text-xl items-center">
                  Delete Forum Post?
                </h3>
                <label for="delete-forum-modal" class="cursor-pointer">
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
              <div class="w-full grid place-items-center items-center space-y-4">
                <div class="place-items-start items-center">
                  <h3 class="">
                    Are you sure you want to delete the post titled
                  </h3>
                  <h3 class="font-bold text-lg italic">{title}?</h3>
                  <h3>
                    All replies in the forum will also be deleted. This action
                    cannot be undone.
                  </h3>
                </div>

                <div class="w-full flex flex-row justify-between items-center ">
                  <label
                    class="text-zinc-400 text-baseline font-bold cursor-pointer ml-2"
                    onClick={handleChecked}
                  >
                    Cancel
                  </label>
                  <button
                    class={`text-story text-baseline font-bold font-large mr-2`}
                    type="submit"
                  >
                    DELETE
                  </button>
                </div>
              </div>
            </div>
          </form>
        </label>
      </label>
    </div>
  );
};
export default DeleteForumModal;
