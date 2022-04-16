import React, { useState } from "react";
import { useMutation } 		from '@apollo/client';
import { Transition } from '@headlessui/react'

const CreateContent = ({toggleCreateCallback}) => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=208%3A296

  const [error,setError] = useState({status:false,message:""});
  const [comicSelected,setComicSelected] = useState(true);
  const [storySelected,setStorySelected] = useState(false);
  const [title,setTitle] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(title);
    console.log(comicSelected);
    console.log(storySelected);
  }

  return (
    <div>
      <form
        class="w-full h-full m-1.5"
        onSubmit={handleSubmit}
      >
      <div class="grid items-center space-y-4 p-4 mr-8 ml-8">
        <Transition
          show={error.status}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div class="alert alert-error py-1.5 shadow-lg">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>{error.message}</span>
            </div>
          </div>
        </Transition>
        <div class="w-full flex flex-row justify-between">
            <div class="text-left text-xl font-medium">
              Create new content
            </div>
            <div className="cursor-pointer" onClick={() => {toggleCreateCallback(false)}}>
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
            </div>
          </div>
          <span class="w-full">
            <input
              type="text"
              name="title"
              placeholder="Title"
              class="input input-bordered w-full focus:outline-none"
              value={title}
              onChange={(e) => {setTitle(e.target.value)}}
            />
          </span>
          <span className="w-full flex flex-row">
            <div>
              <label className="cursor-pointer label">
                <span className="text-normal mr-2">Comic</span>
                <input
                  className="checkbox bg-transparent border-comic checked:bg-none checked:bg-comic"
                  type="checkbox" onClick={() => {setComicSelected(true);setStorySelected(false)}}
                  checked={comicSelected} />
              </label>
            </div>
            <div>
              <label className="cursor-pointer label">
                <span className="text-normal mr-2">Story</span>
                  <input
                    className="checkbox bg-transparent border-story checked:bg-none checked:bg-story"
                    type="checkbox"
                    onClick={() => {setComicSelected(false);setStorySelected(true);}}
                    checked={storySelected} />
              </label>
            </div>
          </span>
          <span class="w-full flex flex-row justify-between items-center">
            <label
              className="text-zinc-400 text-sm ml-2 cursor-pointer"
              onClick={() => {toggleCreateCallback(false)}}
            >
              Cancel
            </label>
            <button
              className="btn border-none bg-forum normal-case mr-2"
              type="submit"
            >
              Create
            </button>
          </span>
        </div>
      </form>
    </div>
  );
};

export default CreateContent;
