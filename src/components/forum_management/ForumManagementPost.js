import React, {useState} from 'react';
import { Link } from "react-router-dom";
import ForumEditModal from '../forum_edit/ForumEditModal';
import DeleteForumModal from "../modals/DeleteForumModal";

const ForumManagementPost = ({postId, cover, title, linked_title, publicationDate, tags, content}) => {
  
  const [showForumEdit, toggleForumEdit] = useState(false);
  const [showForumDelete, toggleForumDelete] = useState(false);

  const months = [ "Jan", "Feb", "Mar", "April", "May", "June",
  "July", "Aug", "Sep", "Oct", "Nov", "Dec" ];

  const toggleForumCallback = (show) => {
    toggleForumEdit(show);
    if (show) {
      toggleForumDelete(false);
    }
  }

  const toggleForumDeleteCallback = (show) => {
    toggleForumDelete(show);
    if(show){
      toggleForumEdit(false);
    }
  }

  const formatDate = () => {
    let date = new Date(publicationDate);
    let month = months[date.getMonth()-1];
    let pm = date.getHours() > 12;
    let hour = date.getHours();
    if(pm) hour -= 12;
    if(hour == 0) hour = 12;
    let strHour = ("0" + hour).slice(-2);
    let strMinutes = ("0" + date.getMinutes()).slice(-2);
    return month + " " + date.getDate() + ", " + strHour + ":" + strMinutes + (pm ? "pm" : "am");
  }

  return (
    <div>
      <div className="flex flex-row mb-4 justify-between">
        <div className="flex flex-row">
          <div>
            <Link to={`/post/${postId}`}><img className="max-h-40 max-w-[110px] mb-4 mr-4 rounded" src={cover}/></Link>
          </div>
          <div>
            <Link to={`/post/${postId}`}><div className="text-lg font-medium truncate">{title}</div></Link>
            <p>{formatDate()}</p>
            { tags.includes("Spoiler") ? 
            <div className={`badge bg-spoiler text-white border-spoiler badge-outline text-xs mr-1`}>Spoiler</div> : <div></div>}
            
            { tags.includes("NSFW") ? 
            <div className={`badge bg-nsfw text-white border-nsfw badge-outline text-xs mr-1`}>NSFW</div> : <div></div>}
            { tags.includes("Discussion") ? 
            <div className={`badge bg-discussion text-white border-discussion badge-outline text-xs mr-1`}>Discussion</div> : <div></div>}
            <div className="text-sm line-clamp-3">
              {content}
            </div>
          </div>
        </div>
          <div className="flex flex-row">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" onClick={() => (toggleForumCallback(true))}>
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer stroke-red-600" fill="none" viewBox="0 0 24 24" stroke-width="2" onClick={() => (toggleForumDeleteCallback(true))}>
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </div>
        </div>

        <div>
          <input 
            type="checkbox" 
            id="forum-modal" 
            className="modal-toggle"
            checked={showForumEdit}
            onClick={() => {toggleForumCallback(false)}}/>
          <div className="modal">
          
            <div className="modal-box">
              <ForumEditModal
              postId={postId}
              title={title}
              linked_title={linked_title}
              content={content}
              propTags={tags}
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
              postId={postId}
              title={title} 
              />
            </label>
          </label>
        </div>
        
      </div>
  );
}

export default ForumManagementPost;
