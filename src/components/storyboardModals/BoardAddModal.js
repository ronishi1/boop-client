import React from "react";

const BoardAddModal = ({ content, modalName }) => {
  function noun() {
    if (content === "Character") return "Name";
    else return "Title";
  }
  return (
    <div>
      {/* I think we can just move this button to the navbar we might have to rename id */}
      <label for={modalName} class="btn modal-button">
        add {content}
      </label>

      <input type="checkbox" id={modalName} class="modal-toggle" />

      <label for={modalName} class="modal cursor-pointer">
        <label class="modal-box w-5/12 max-w-full h-1/2 max-h-full ">
          <label class="absolute top-6 right-8 " for={modalName}>
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

          <div class="w-full h-full grid grid-cols-6">
            <div class="col-span-4">
              <h3 class="text-left text-xl font-bold">Add New {content}</h3>

              <div class="place-items-start w-full ">
                <h3 class="text-left text-sm py-2">{`${content} ${noun()}`}</h3>
              </div>

              <span class="w-full flex auto-cols-auto place-items-center items-center space-x-4">
                <input
                  type="text"
                  id="name"
                  placeholder=""
                  class="input input-bordered w-full focus:outline-none border-story"
                />
              </span>
              <div class="place-items-start w-full ">
                <h3 class="text-left text-sm py-2">{content} Notes</h3>
              </div>
              <div class="place-items-start  h-3/5">
                <textarea
                  type="text"
                  id="notes"
                  placeholder=""
                  class="input input-bordered w-full h-full focus:outline-none border-story text-xs"
                />
              </div>
            </div>
            <div class="col-span-2 ">
              <br />
              <div class="place-items-center items-center grid w-full">
                <div class="w-48 h-48">
                  <img
                    class="object-fill w-48 h-48"
                    src="https://static.thenounproject.com/png/1743560-200.png"
                  ></img>
                </div>
                <br />
                <label class="btn border-none bg-story">Upload Image</label>
              </div>
            </div>
            <span class="w-full flex auto-cols-auto place-items-center items-center ">
              <label
                class="text-zinc-400 text-xs absolute bottom-6 right-28"
                for="signup-modal"
              >
                Cancel
              </label>
              <label class="text-story text-xs font-bold absolute bottom-6 right-12">
                Create
              </label>
            </span>
          </div>
        </label>
      </label>
    </div>
  );
};

export default BoardAddModal;
