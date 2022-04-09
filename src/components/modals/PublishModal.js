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
        <label class="modal-box w-1/3 max-w-full h-1/2 max-h-full ">
          <form class="w-full h-full " onSubmit={handleSubmit}>
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
            <div class="h-100 py-2">
              <h3 class="text-left text-xl font-bold relative left-6">
                Publish "{title}" ?
              </h3>
            </div>
            <div class="w-full h-1/6 grid grid-cols-7 place-items-center items-center">
              <h3 class="text-left text-large font-large col-span-1 relative left-3">
                Genre:
              </h3>
              <input
                type="text"
                name="genre"
                placeholder="Type a genre/genres"
                class={`input  w-11/12 focus:outline-none col-span-3 border  ${borderColor()}`}
                value={inputValues.genre}
                onChange={handleChange}
              />
            </div>
            <div class="w-full h-1/2 grid place-items-center items-start">
              <textarea
                type="text"
                name="synopsis"
                placeholder="Type a brief synopsis"
                class={`input  w-11/12 h-full focus:outline-none border  ${borderColor()}`}
                value={inputValues.synopsis}
                onChange={handleChange}
              />
            </div>
            <br />
            <div class="w-full h-1/12 grid place-items-start items-start">
              <input
                type="text"
                name="confirm"
                placeholder={`Type in name of ${content} to confirm`}
                class={`input  w-3/5 focus:outline-none relative left-6 border ${borderColor()}`}
                value={inputValues.confirm}
                onChange={handleChange}
              />
            </div>
            <span class="w-full flex auto-cols-auto place-items-center items-center ">
              <label
                class="text-zinc-400 text-base absolute bottom-12 right-32"
                onClick={handleChecked}
              >
                Cancel
              </label>
              <button
                class={`text-${content} text-base font-bold absolute bottom-12 right-12`}
                type="submit"
              >
                Publish
              </button>
            </span>
          </form>
        </label>
      </label>
    </div>
  );
};

export default PublishModal;
