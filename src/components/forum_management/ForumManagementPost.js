import React, {useState} from 'react';
import { Link } from "react-router-dom";
import ForumEditModal from '../forum_edit/ForumEditModal';
import DeleteForumModal from "../modals/DeleteForumModal";
import { useNavigate } from 'react-router-dom';

const ForumManagementPost = ({postId, cover, title, linked_title, publicationDate, tags, content}) => {
  
  const [showForumEdit, toggleForumEdit] = useState(false);
  const [showForumDelete, toggleForumDelete] = useState(false);

  let navigate = useNavigate();

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
    let month = months[date.getMonth()];
    return month + " " + date.getDate() + ", " + date.getFullYear();
  }



  return (
    <div>
      <div 
        className='hover:bg-forum hover:bg-opacity-20 flex flex-row'
      >
        <div className='w-2/3 flex flex-row space-x-2 px-2'>
          <img 
            className="h-36 w-24 rounded-sm object-cover hover:cursor-pointer" 
            src={(cover) ? cover:"https://cdn2.iconfinder.com/data/icons/user-interface-vol-2-21/64/No_Data-512.png"}
            onClick={() => navigate("/post/"+postId)}
          />
          <div className='flex flex-col truncate'>
            <div 
              className="text-md text-link font-semibold truncate hover:cursor-pointer"
              onClick={() => navigate("/post/"+postId)}
            >
              {title}
            </div>
            <div className='flex flex-row space-x-2'>
              {tags.map((tag,i) => <div className={`badge bg-${tag.toLowerCase()} text-white border-${tag.toLowerCase()} text-xs`} key={i}>{tag}</div>)}
            </div>
            <div className="text-sm max-h-[6em] whitespace-pre-wrap break-words truncate">
              {content}
            </div>
          </div>
        </div>

        <div className='w-1/6 font-semibold'>
          {formatDate()}
        </div>

        <div className='w-1/6'>
          <div className="flex flex-row justify-end px-4 space-x-1">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6 cursor-pointer hover:stroke-link" 
              fill="none" viewBox="0 0 24 24" 
              stroke="currentColor" 
              strokeWidth="2" 
              onClick={(e) => {
                toggleForumCallback(true);
              }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer hover:stroke-red-600" stroke="currentColor" fill="none" viewBox="0 0 24 24" strokeWidth="2" onClick={() => (toggleForumDeleteCallback(true))}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </div>
        </div>
      </div>
      <div>
        <input 
          readOnly={true}
          type="checkbox" 
          id="forum-modal" 
          className="modal-toggle"
          checked={showForumEdit}
          onClick={() => {toggleForumCallback(false)}}
        />
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
          readOnly={true}
          type="checkbox"
          id="delete-forum-modal"
          className="modal-toggle"
          checked={showForumDelete}
          onClick={() => {toggleForumDeleteCallback(false)}}
        />
        <div className="modal">
          <div className="modal-box w-1/3 max-w-full h-5/12">
            <DeleteForumModal 
              postId={postId}
              title={title} 
              toggleForumDeleteCallback={toggleForumDeleteCallback}
            />
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default ForumManagementPost;
