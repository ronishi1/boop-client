import React, { useState } from "react";

const UploadCoverModal = ({ title, content, modalName }) => {
  const [checked, setChecked] = useState(false);

  function handleChecked() {
    setChecked(!checked);
  }

  function handleSubmit(e) {
    console.log("Uploaded Cover");
    e.preventDefault();
    setChecked(!checked);
  }

  return (
    <div>
      {/* I think we can just move this button to the navbar we might have to rename id */}
      <label for={modalName} class="btn modal-button">
        Upload {content} Cover
      </label>

      <input
        type="checkbox"
        id={modalName}
        class="modal-toggle"
        checked={checked}
        onClick={handleChecked}
      />

      <label for={modalName} class="modal cursor-pointer">
        <label class="modal-box w-1/2 h-1/2 ">
          <form class="w-full h-full " onSubmit={handleSubmit}>
            <div class="grid items-center space-y-10 mr-4 ml-4">
              <div class="w-full flex flex-row justify-between">
                <div>
                  <h3 class="font-bold text-xl">Upload cover for "{title}"</h3>
                </div>
                <div>
                  <label for={modalName} class="cursor-pointer ">
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
              </div>
              <div class="w-full grid place-items-center items-center ">
                <div class="w-4/5 h-full border border-black">
                  <div>
                    <label
                      for="upload-photo"
                      class="grid place-items-center items-center cursor-pointer "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-64 w-64"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                        />
                      </svg>
                    </label>
                    <input type="file" id="upload-photo" hidden="true" />
                  </div>
                </div>
              </div>
              <div class="w-full h-1/12 flex flex-row justify-between items-center">
                <label
                  class="text-zinc-400 text-base cursor-pointer "
                  onClick={handleChecked}
                >
                  Cancel
                </label>
                <button
                  class={`text-${content} text-base font-bold `}
                  type="submit"
                >
                  Upload
                </button>
              </div>
            </div>
          </form>
        </label>
      </label>
    </div>
  );
};
export default UploadCoverModal;
