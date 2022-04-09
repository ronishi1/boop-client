import React, { useState } from "react";

const CreateChapterModal = ({ modalName, content }) => {
  const [checked, setChecked] = useState(false);
  function handleChecked() {
    setChecked(!checked);
    setItem("");
    setSearch("");
  }

  const [item, setItem] = useState("");
  const [search, setSearch] = useState("");

  function handleSubmit(e) {
    console.log(item);
    e.preventDefault();
    setItem("");
    setSearch("");
    setChecked(false);
  }
  function borderColor() {
    if (content === "comic") return `border-[#57C694]`;
    if (content === "story") return `border-[#D65A47]`;
    if (content === "character") return `border-[#D65A47]`;
    if (content === "plot point") return `border-[#D65A47]`;
  }
  function plural() {
    if (content === "comic") return `comics`;
    if (content === "story") return `stories`;
  }

  return (
    <div>
      {/* I think we can just move this button to the navbar we might have to rename id */}
      <label for={modalName} class="btn modal-button">
        Create {content}
      </label>

      <input
        type="checkbox"
        id={modalName}
        class="modal-toggle"
        checked={checked}
        onClick={handleChecked}
      />

      <label for={modalName} class="modal cursor-pointer">
        <label class="modal-box w-1/4 h-1/3 grid place-items-center items-center">
          <form class="w-full h-full " onSubmit={handleSubmit}>
            <div class="grid items-center space-y-4 ">
              <div class="w-full flex flex-row justify-between ">
                <h3 class="text-left text-lg font-bold">New Chapter</h3>
                <label for={modalName} class="cursor-pointer">
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

              <input
                type="text"
                placeholder={`Type in the name of the ${content}`}
                name="deleteItem"
                class={`input  w-full focus:outline-none border  ${borderColor()}`}
                value={item}
                onChange={(e) => setItem(e.target.value)}
              />
              <div class="place-items-start w-full">
                <h3 class="text-left text-lg font-bold">
                  Continuing from series?
                </h3>
              </div>
              <input
                type="text"
                placeholder={`search ${plural()}`}
                name="deleteItem"
                class={`input  focus:outline-none border border-gray-600`}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <div class="w-full h-full flex flex-row justify-between items-end">
                <label
                  class="text-zinc-400 text-sm cursor-pointer"
                  for={modalName}
                >
                  Cancel
                </label>
                <button class={`text-sm text-${content}`} type="submit">
                  Create
                </button>
              </div>
            </div>
          </form>
        </label>
      </label>
    </div>
  );
};

export default CreateChapterModal;
