import React, { useState } from "react";
import { useMutation } 		from '@apollo/client';
import { Transition } from '@headlessui/react'
import { CREATE_CHAPTER }	from '../../cache/mutations';
import { useNavigate } from 'react-router-dom';

const CreateChapter = ({toggleCreateChapterCallback,contentID,series_title}) => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=208%3A296
  let navigate = useNavigate();

  const [error,setError] = useState({status:false,message:""});
  const [title,setTitle] = useState("");

  const [CreateChapter] = useMutation(CREATE_CHAPTER);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(title.length < 3){
      setError({status:true,message:"Series title must be at least 3 characters"});
      setTimeout(() => {
        setError({status:false,message:''});
        setTitle("");
      },3000)
    }
    let result = await CreateChapter({variables: {contentID: contentID, chapterTitle: title, seriesTitle: series_title}});
    navigate(`/comic-edit/${result.data.createChapter}`);
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
              Create new chapter
            </div>
            <div className="cursor-pointer" onClick={() => {toggleCreateChapterCallback(false)}}>
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
              placeholder="Chapter Title"
              class="input input-bordered w-full focus:outline-none"
              value={title}
              onChange={(e) => {setTitle(e.target.value)}}
            />
          </span>
          <span class="w-full flex flex-row justify-between items-center">
            <label
              className="text-zinc-400 text-sm ml-2 cursor-pointer"
              onClick={() => {toggleCreateChapterCallback(false)}}
            >
              Cancel
            </label>
            <button
              className="btn border-none bg-forum hover:bg-forum/80 normal-case mr-2"
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

export default CreateChapter;
