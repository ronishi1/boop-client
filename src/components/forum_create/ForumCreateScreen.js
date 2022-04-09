import React, { useState } from "react";
import CancelPostModal from "../modals/CancelPostModal";

const ForumCreateScreen = () => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=274%3A632
  const [spoiler, toggleSpoiler] = useState(false);
  const [nsfw, toggleNSFW] = useState(false);
  const [discussion, toggleDiscussion] = useState(false);
  const [tags, setTags] = useState(new Set());
  const [link, setLink] = useState("Spy x Family");

  const handleSpoiler = () => {
    if (spoiler) {
      tags.delete("Spoiler");
    } else {
      tags.add("Spoiler");
    }

    toggleSpoiler(!spoiler);
    setTags(tags);
  };
  const handleNSFW = () => {
    if (nsfw) {
      tags.delete("NSFW");
    } else {
      tags.add("Spoiler");
    }

    toggleSpoiler(!spoiler);
    setTags(tags);
  };
  const handleDiscussion = () => {
    if (spoiler) {
      tags.delete("Spoiler");
    } else {
      tags.add("Spoiler");
    }

    toggleSpoiler(!spoiler);
    setTags(tags);
  };
  return (
    <div>
      <label for="my-modal" className="btn modal-button">
        Create Forum Post
      </label>

      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <label className="absolute top-0 right-0 pt-4 pr-4" for="my-modal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </label>
          <h3 className="font-bold text-lg">Create Forum Post</h3>
          <input
            type="text"
            placeholder="Post Title"
            className="input input-bordered w-full focus:outline-none py-4"
          />
          <p className="py-4">
            Linked to <strong>{link}</strong>
          </p>
          <div className="flex">
            {/* <div className={`badge ${badgeColor()} text-xs border-none -ml-1`}>{setContent()}</div> */}

            <div
              className={`badge ${spoiler == true ? "bg-spoiler" : ""} ${
                spoiler == true ? "text-white" : "text-spoiler"
              } border-spoiler badge-outline text-xs mr-1 cursor-pointer`}
              onClick={handleSpoiler}
            >
              Spoiler
            </div>
            <div
              className={`badge ${nsfw == true ? "bg-nsfw" : ""} ${
                nsfw == true ? "text-white" : "text-spoiler"
              } border-nsfw badge-outline text-xs mr-1 cursor-pointer`}
              onClick={handleNSFW}
            >
              NSFW
            </div>
            <div
              className={`badge ${discussion == true ? "bg-discussion" : ""} ${
                spoiler == true ? "text-white" : "text-discussion"
              } border-discussion badge-outline text-xs mr-1 cursor-pointer`}
              onClick={handleDiscussion}
            >
              Discussion
            </div>
          </div>
          <div className="modal-action">
            <label for="my-modal" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
      <CancelPostModal />
    </div>
  );
};

export default ForumCreateScreen;
