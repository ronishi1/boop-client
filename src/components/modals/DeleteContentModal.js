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
      {/* I think we can just move this button to the navbar we might have to rename id */}
      <label for={modalName} class="btn modal-button">
        {content}
      </label>

      <input
        type="checkbox"
        id={modalName}
        class="modal-toggle"
        checked={checked}
        onClick={handleChecked}
      />

      <label for={modalName} class="modal cursor-pointer">
        <label class="modal-box w-1/4 max-w-full h-1/4 max-h-full grid place-items-center items-center">
          <form
            class="w-full h-full grid place-items-center items-center"
            onSubmit={handleSubmit}
          >
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

            <div class="w-full grid place-items-center items-center space-y-4">
              <div class="place-items-start w-full">
                <h3 class="text-left text-lg indent-4 font-bold">
                  Delete "{title}" ?
                </h3>
              </div>
              <input
                type="text"
                placeholder={`Type in the name of the ${content} to confirm`}
                name="deleteItem"
                class={`input  w-11/12 focus:outline-none border  ${borderColor()}`}
                value={item}
                onChange={(e) => setItem(e.target.value)}
              />
              <span class="w-full flex auto-cols-auto place-items-center items-center ">
                <label
                  class="text-zinc-400 text-sm absolute bottom-8 right-28"
                  for={modalName}
                >
                  Cancel
                </label>
                <button
                  class={`text-sm absolute bottom-8 right-12 text-${textColor()}`}
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
