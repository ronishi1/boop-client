import React, { useState } from "react";

const PublishModal = ({ title, content, modalName }) => {
  const [checked, setChecked] = useState(false);

  function handleChecked() {
    setChecked(!checked);
    setInputValues({
      genre: "",
      synopsis: "",
      confirm: "",
    });
  }

  const [inputValues, setInputValues] = useState({
    genre: "",
    synopsis: "",
    confirm: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    console.log(inputValues);
    e.preventDefault();
    setInputValues({
      genre: "",
      synopsis: "",
      confirm: "",
    });
    setChecked(false);
  }
  function borderColor() {
    if (content === "comic") return `border-[#57C694]`;
    if (content === "story") return `border-[#D65A47]`;
    if (content === "character") return `border-[#D65A47]`;
    if (content === "plot point") return `border-[#D65A47]`;
  }
  return (
    <div>
      {/* I think we can just move this button to the navbar we might have to rename id */}
      <label for={modalName} class="btn modal-button">
        Publish {content}
      </label>

      <input
        type="checkbox"
        id={modalName}
        class="modal-toggle"
        checked={checked}
        onClick={handleChecked}
      />

      <label for={modalName} class="modal cursor-pointer">
        <label class="modal-box w-1/3 max-w-full h-1/2  ">
          <form class="w-full h-full " onSubmit={handleSubmit}>
            <div class="grid grid-rows-6 grid-flow-col items-center space-y-5 ">
              <div class="w-full flex flex-row justify-between ">
                <div>
                  <h3 class="text-left text-xl font-bold ">
                    Publish "{title}" ?
                  </h3>
                </div>
                <div>
                  <label onClick={handleChecked} class="cursor-pointer ">
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

              <div class="w-full flex flex-row h-full">
                <div class=" grid place-items-start items-start mt-3">
                  <div class="text-left text-large font-large">Genre: </div>
                </div>
                <div class="px-4 w-full">
                  <input
                    type="text"
                    name="genre"
                    placeholder="Type a genre/genres"
                    class={`input  w-3/5 focus:outline-none  border  ${borderColor()}`}
                    value={inputValues.genre}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div class="w-full h-full row-span-3 ">
                <textarea
                  type="text"
                  name="synopsis"
                  placeholder="Type a brief synopsis"
                  class={`input  w-full h-full focus:outline-none border  ${borderColor()}`}
                  value={inputValues.synopsis}
                  onChange={handleChange}
                />
              </div>

              <div class="w-full h-1/12 flex flex-row justify-between items-center">
                <input
                  type="text"
                  name="confirm"
                  placeholder={`Type in name of ${content} to confirm`}
                  class={`input  w-3/5 focus:outline-none border ${borderColor()}`}
                  value={inputValues.confirm}
                  onChange={handleChange}
                />
                <label
                  class="text-zinc-400 text-sm cursor-pointer"
                  onClick={handleChecked}
                >
                  Cancel
                </label>
                <button
                  class={`text-${content} text-sm font-large `}
                  type="submit"
                >
                  Publish
                </button>
              </div>
            </div>
          </form>
        </label>
      </label>
    </div>
  );
};

export default PublishModal;
