import React, {useState} from "react";
import ForumCreateScreen from '../forum_create/ForumCreateScreen';
import DeleteForumModal from "../modals/DeleteForumModal";
import ForumManagementPosts from "./ForumManagementPosts";
import ForumManagementReplies from "./ForumManagementReplies";

const ForumManagementScreen = () => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=328%3A5250
  const [showForumCreate, toggleForumCreate] = useState(false);
  const [showForumDelete, toggleForumDelete] = useState(false);
  const [forumTitle, setForumTitle] = useState("");

  const toggleForumCallback = (show) => {
    toggleForumCreate(show);
    if (show) {
      toggleForumDelete(false);
    }
  }

  const toggleForumDeleteCallback = (show) => {
    toggleForumDelete(show);
    if(show){
      toggleForumCreate(false);
    }
  }
  return (
    <div>
      <p className="text-lg ml-4">
        Forum Management
      </p>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 ml-4 ">
          <ForumManagementPosts 
            toggleForumCallback={toggleForumCallback} 
            toggleForumDeleteCallback={toggleForumDeleteCallback}/>
        </div>
        <div>
          <p className="text-lg">
            Recent Replies To Your Posts
          </p>
          <ForumManagementReplies />
        </div>


        <div>
          <input 
            type="checkbox" 
            id="forum-modal" 
            className="modal-toggle"
            checked={showForumCreate}
            onClick={() => {toggleForumCallback(false)}}/>
          <div className="modal">
          
            <div className="modal-box">
              <ForumCreateScreen
              toggleForumCallback={toggleForumCallback}
              />
            </div>
          </div>
        </div>


        <div>
          <input
            type="checkbox"
            id="delete-forum-modal"
            class="modal-toggle"
            checked={showForumDelete}
            onClick={() => {toggleForumDeleteCallback(false)}}
          />
          <label for="delete-forum-modal" class="modal cursor-pointer">
            <label class="modal-box w-1/3 max-w-full h-5/12">
              <DeleteForumModal 
              title="Dark Fantasy Recs" 
              toggleForumDeleteCallback={toggleForumDeleteCallback}
              />
            </label>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ForumManagementScreen;
