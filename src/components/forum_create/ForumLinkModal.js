import React, { useState } from "react";

const ForumLinkModal = () => {
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

  return (
    <div>
      {/* I think we can just move this button to the navbar we might have to rename id */}
      <label for="forum-link-modal" class="btn modal-button">
        {content}
      </label>

      <input
        type="checkbox"
        id="forum-link-modal"
        class="modal-toggle"
        checked={checked}
        onClick={handleChecked}
      />

      <label for="forum-link-modal" class="modal cursor-pointer">
        <label class="modal-box w-1/4 max-w-full h-1/4 max-h-full grid place-items-center items-center">
          <form
            class="w-full h-full grid place-items-center items-center"
            onSubmit={handleSubmit}
          >
            <label class="absolute top-6 right-8 " for="forum-link-modal">
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
                  Link Post to Story/Comic
                </h3>
              </div>
              <input
                type="text"
                placeholder={`Search`}
                name="item"
                class={`input  w-11/12 focus:outline-none border border-gray-600`}
                value={item}
                onChange={(e) => setItem(e.target.value)}
              />
              <span class="w-full flex auto-cols-auto place-items-center items-center ">
                <button class="btn border-forum bg-forum" type="submit">
                  Link
                </button>
              </span>
            </div>
          </form>
        </label>
      </label>
    </div>
  );
};

export default ForumLinkModal;
