import React, { useState } from "react";

const UploadPicture = () => {
  const [checked, setChecked] = useState(false);

  function handleChecked() {
    setChecked(!checked);
  }

  function handleSubmit(e) {
    console.log("Uploaded Picture");
    e.preventDefault();
    setChecked(!checked);
  }
  return (
    <div>
      {/* I think we can just move this button to the navbar we might have to rename id */}
      <label for="upload-picture-modal" class="btn modal-button">
        Upload Picture
      </label>

      <input
        type="checkbox"
        id="upload-picture-modal"
        class="modal-toggle"
        checked={checked}
        onClick={handleChecked}
      />

      <label for="upload-picture-modal" class="modal cursor-pointer">
        <label class="modal-box w-1/4 max-w-full h-1/2 max-h-full grid place-items-center items-center ">
          <form
            class="w-full h-full grid place-items-center items-center"
            onSubmit={handleSubmit}
          >
            <label class="absolute top-6 right-8 " for="upload-picture-modal">
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
              <div class="grid place-items-center items-center w-full">
                <h3 class="font-bold text-xl">Upload Profile Picture</h3>
              </div>
              <div class="grid place-items-center items-center w-3/4 h-full border border-black">
                <div class="text-sm grid place-items-center items-center w-full h-full">
                  <label
                    for="upload-photo"
                    class="grid place-items-center items-center w-full h-full"
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
              <div></div>
              <div class="flex">
                <button class="btn border-forum bg-forum" type="submit">
                  Apply
                </button>
              </div>
            </div>
          </form>
        </label>
      </label>
    </div>
  );
};
export default UploadPicture;
