import React, { useState } from "react";

const BoardEditModal = ({ content, modalName }) => {
  const [checked, setChecked] = useState(false);

  function handleChecked() {
    setChecked(!checked);
    setInputValues({
      character_name: "Eren Yeager",
      notes: "This is information about Eren Yeager",
      character_image:
        "https://pbs.twimg.com/media/FCulVSXXEAMe91s.jpg?name=small",
    });
  }

  const [inputValues, setInputValues] = useState({
    character_name: "Eren Yeager",
    notes: "This is information about Eren Yeager",
    character_image:
      "https://pbs.twimg.com/media/FCulVSXXEAMe91s.jpg?name=small",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  }

  function handleDelete(e) {
    console.log("Delete Character");
    e.preventDefault();
    setInputValues({
      character_name: "Eren Yeager",
      notes: "This is information about Eren Yeager",
      character_image:
        "https://pbs.twimg.com/media/FCulVSXXEAMe91s.jpg?name=small",
    });
    setChecked(false);
  }

  function handleSubmit(e) {
    console.log(inputValues);
    e.preventDefault();
    setInputValues({
      character_name: "Eren Yeager",
      notes: "This is information about Eren Yeager",
      character_image:
        "https://pbs.twimg.com/media/FCulVSXXEAMe91s.jpg?name=small",
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
        edit {content}
      </label>

      <input
        type="checkbox"
        id={modalName}
        class="modal-toggle"
        checked={checked}
        onClick={handleChecked}
      />

      <label for={modalName} class="modal cursor-pointer">
        <label class="modal-box w-5/12 max-w-full h-1/2 max-h-full ">
          <form
            class="w-full h-full grid place-items-center items-center"
            onSubmit={handleSubmit}
          >
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

            <div class="w-full h-full grid grid-cols-6">
              <div class="col-span-4">
                <h3 class="text-left text-xl font-bold">
                  Edit "{inputValues.character_name}" ?
                </h3>

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
                  <div class="relative w-48 h-48">
                    <img
                      class="absolute h-full w-full object-cover"
                      src={inputValues.character_image}
                    ></img>
                  </div>
                  <br />
                  <label class="btn border-none bg-story">Upload Image</label>
                </div>
              </div>
              <span class="w-full flex auto-cols-auto place-items-center items-center ">
                <label
                  class="text-zinc-400 text-xs absolute bottom-6 right-28"
                  onClick={handleChecked}
                >
                  Cancel
                </label>
                <button
                  class="text-story text-xs font-bold absolute bottom-6 right-12"
                  type="submit"
                >
                  Change
                </button>
                <label
                  class="text-story text-xs font-bold absolute bottom-6 left-8"
                  onClick={handleDelete}
                >
                  DELETE
                </label>
              </span>
            </div>
          </form>
        </label>
      </label>
    </div>
  );
};

export default BoardEditModal;
