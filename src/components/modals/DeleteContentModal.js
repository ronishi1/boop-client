import React, { useState } from "react";

const DeleteContentModal = ({ title, modalName, content }) => {
  const [checked, setChecked] = useState(false);
  function handleChecked() {
    setChecked(!checked);
    setItem("");
  }

  const [item, setItem] = useState("");

  function handleSubmit(e) {
    console.log(item);
    e.preventDefault();
    setItem("");
    setChecked(false);
  }
  function borderColor() {
    if (content === "comic") return `border-[#57C694]`;
    if (content === "story") return `border-[#D65A47]`;
    if (content === "character") return `border-[#D65A47]`;
    if (content === "plot point") return `border-[#D65A47]`;
  }
  function textColor() {
    if (content === "comic") return "comic";
    if (content === "story") return "story";
    if (content === "character") return "story";
    if (content === "plot point") return "story";
  }

  return (
    <div>
      <label for={modalName} class="btn modal-button">
        Delete {content}
      </label>

      <input
        type="checkbox"
        id={modalName}
        class="modal-toggle"
        checked={checked}
        onClick={handleChecked}
      />

      <label for={modalName} class="modal cursor-pointer">
        <label class="modal-box w-1/4 h-1/5 ">
          <form class="w-full h-full" onSubmit={handleSubmit}>
            <div class="grid items-center  space-y-4 p-2">
              <div class="w-full flex flex-row justify-between">
                <h3 class="text-left text-lg font-bold">Delete "{title}" ?</h3>

                <div>
                  <label for={modalName}>
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
              <div class="w-full ">
                <input
                  type="text"
                  placeholder={`Type in the name of the ${content} to confirm`}
                  name="deleteItem"
                  class={`input  w-full focus:outline-none border  ${borderColor()}`}
                  value={item}
                  onChange={(e) => setItem(e.target.value)}
                />
              </div>
              <span class="w-full flex flex-row justify-between items-center ">
                <label class="text-zinc-400 text-sm ml-1" for={modalName}>
                  Cancel
                </label>
                <button
                  class={`text-sm mr-1 text-${textColor()}`}
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

export default DeleteContentModal;
