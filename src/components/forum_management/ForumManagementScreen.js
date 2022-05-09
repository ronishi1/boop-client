import React, {useState} from "react";
import ForumManagementPosts from "./ForumManagementPosts";
import ForumManagementReplies from "./ForumManagementReplies";
import ForumCreateModal from "../forum_create/ForumCreateModal.js"

const ForumManagementScreen = ({user}) => {
  const [showForumCreate, toggleForumCreate] = useState(false);

  const toggleForumCreateCallback = (show) => {
    toggleForumCreate(show);
  }
  
  return (
    <div>
    <div className="flex flex-row justify-between">
        <p className="text-lg ml-4 mb-4 font-semibold">
          Forum Management
        </p>
        <div className="btn btn-sm bg-base-content/90 pr-3 border-none" onClick={() => {toggleForumCreateCallback(true)}}>+ Create Post</div>
      </div>

      <div className="mx-16 ">
        <p className="text-lg font-semibold">
          My Posts
        </p>
        <ForumManagementPosts />
      </div>
      
      <div>
        <input 
          type="checkbox" 
          id="forum-modal" 
          className="modal-toggle"
          checked={showForumCreate}
          onClick={() => {toggleForumCreateCallback(false)}}/>
        <div className="modal">
          <div className="modal-box">
            <ForumCreateModal
              toggleForumCreateCallback={toggleForumCreateCallback}
            />
          </div>
        </div>
      </div>


      </div>
  );
};

export default ForumManagementScreen;
