import React, { useState } from "react";
import { DELETE_POST } from '../../cache/mutations'
import { useMutation } from '@apollo/client'

const DeleteForumModal = ({ postId, title, toggleForumDeleteCallback}) => {
  const [DeletePost] = useMutation(DELETE_POST);

  const handleSubmit = (e) => {
    DeletePost({variables: {postID: postId}})
  }
  return (
    <div>
          <form
            className="w-full h-full grid place-items-center items-center"
            onSubmit={handleSubmit}
          >
            <div className="grid items-center  space-y-1 p-2">
              <div className="w-full flex flex-row justify-between">
                <h3 className="font-medium text-xl items-center">
                  Delete Forum Post?
                </h3>
                <label className="cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="grey"
                    strokeWidth={2}
                    onClick={() => toggleForumDeleteCallback(false)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </label>
              </div>
              <div className="w-full grid place-items-center items-center space-y-4">
                <div className="place-items-start items-center">
                  <h3 className="">
                    Are you sure you want to delete the post titled
                  </h3>
                  <h3 className="font-bold text-lg italic">{title}?</h3>
                  <h3>
                    All replies in the forum will also be deleted. This action
                    cannot be undone.
                  </h3>
                </div>

                <div className="w-full flex flex-row justify-between items-center ">
                  <label
                    className="text-zinc-400 text-baseline font-bold cursor-pointer ml-2"
                    onClick={() => toggleForumDeleteCallback(false)}
                  >
                    Cancel
                  </label>
                  <button
                    className={`text-story text-baseline font-bold font-large mr-2`}
                    type="submit"
                  >
                    DELETE
                  </button>
                </div>
              </div>
            </div>
          </form>
    </div>
  );
};
export default DeleteForumModal;
