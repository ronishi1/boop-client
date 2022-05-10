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
    <div className="px-4 pb-4">
      <div className="flex flex-row justify-between">
        <p className="text-2xl font-semibold">
          Forum Management
        </p>
        <div className="btn btn-sm bg-base-content/90 pr-3 border-none" onClick={() => {toggleForumCreateCallback(true)}}>+ Create Post</div>
      </div>

      <div>
        <p className="text-lg font-semibold">
          My Posts
        </p>
        <ForumManagementPosts />
      </div>
      
      <div id="ForumCreateModal">
        <input 
          type="checkbox" 
          id="forum-modal" 
          className="modal-toggle"
          checked={showForumCreate}
          onClick={() => {toggleForumCreateCallback(false)}}
          readOnly={true}
        />
        <div className="modal">
          <div className="modal-box w-1/3 min-w-[30rem] max-w-[60rem]">
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
