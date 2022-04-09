import React, { useState } from "react";

const BoardAddModal = ({ content, modalName }) => {
  const [checked, setChecked] = useState(false);

  function handleChecked() {
    setChecked(!checked);
    setInputValues({
      character_name: "",
      notes: "",
      character_image: "",
    });
  }

  const [inputValues, setInputValues] = useState({
    character_name: "",
    notes: "",
    character_image: "",
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
      character_name: "",
      notes: "",
      character_image: "",
    });
    setChecked(false);
  }

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

      <input
        type="checkbox"
        id={modalName}
        class="modal-toggle"
        checked={checked}
        onClick={handleChecked}
      />

      <label for={modalName} class="modal cursor-pointer">
        <label class="modal-box w-5/12 max-w-full h-1/2  ">
          <form class="w-full h-full" onSubmit={handleSubmit}>
            <div class="grid items-center space-y-4 ">
              <div class="w-full flex flex-row justify-between ">
                <h3 class="text-left text-xl font-bold">Add New {content}</h3>
                <label onClick={handleChecked} class="cursor-pointer">
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
              <div class="w-full h-full grid grid-cols-6">
                <div class="col-span-4">
                  <div class="place-items-start w-full ">
                    <h3 class="text-left text-sm py-2">{`${content} ${noun()}`}</h3>
                  </div>

                  <span class="w-full flex auto-cols-auto place-items-center items-center space-x-4">
                    <input
                      type="text"
                      name="character_name"
                      placeholder=""
                      class="input input-bordered w-full focus:outline-none border-story"
                      value={inputValues.character_name}
                      onChange={handleChange}
                    />
                  </span>
                  <div class="place-items-start w-full ">
                    <h3 class="text-left text-sm py-2">{content} Notes</h3>
                  </div>
                  <div class="place-items-start  h-3/5">
                    <textarea
                      type="text"
                      name="notes"
                      placeholder=""
                      class="input input-bordered w-full h-full focus:outline-none border-story text-xs"
                      value={inputValues.notes}
                      onChange={handleChange}
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

                    <label for="upload-photo" class="btn border-none bg-story">
                      Upload Image
                    </label>
                    <input type="file" id="upload-photo" hidden="true" />
                  </div>
                </div>
              </div>

              <div class="w-full h-full flex flex-row justify-between items-end ">
                <label
                  class="text-zinc-400 text-baseline cursor-pointer"
                  onClick={handleChecked}
                >
                  Cancel
                </label>
                <button
                  class="text-story text-baseline font-bold "
                  type="submit"
                >
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

export default BoardAddModal;
