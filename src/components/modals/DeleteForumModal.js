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
              <p>
                Are you sure you want to delete the post titled <strong>{title}</strong>? All replies in the forum will also be deleted. This action cannot be undone.
              </p>
              
            </div>

            <div className="w-full flex flex-row justify-between items-center ">
              <label
                className="text-zinc-400 text-baseline font-bold cursor-pointer hover:brightness-90"
                onClick={() => toggleForumDeleteCallback(false)}
              >
                Cancel
              </label>
              <button
                className="btn btn-sm bg-red-600 border-red-600
                hover:bg-red-700 hover:border-red-700"
                type="submit"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default DeleteForumModal;
