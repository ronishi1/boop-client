import React, { useState } 	from 'react';
import { Link } from "react-router-dom";
import DeleteReplyModal from "./DeleteReplyModal";

const ForumReply = ({reply, formatDate, user, handleDeleteReply,handleEditReply}) => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=341%3A2898
  const [deleteModal, toggleDeleteModal] = useState(false);
  const [isEditing, toggleEdit] = useState(false);
  const [content, setContent] = useState(reply.content);

  const handleDeleteConfirm = () => {
    toggleDeleteModal(false);
    handleDeleteReply(reply._id);
  }

  const handleEditSave = () => {
    toggleEdit(false);
    handleEditReply(reply._id, content);
  }

  return (
    <div>
      <div className='card rounded-none w-full bg-white shadow'>
        <div className='card-title bg-forum text-white p-2 flex justify-between'>
          <p className='w-max text-white hover:underline font-medium'>
            <Link to={'/profile/'+reply.author}>
              {reply.author_name}
            </Link>
          </p>
          <div>
            {formatDate(reply)}
          </div>
        </div>
        {isEditing ? 
          <div className='p-2'>
            <textarea
              className='textarea textarea-bordered w-full leading-normal'
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <div className='flex justify-end space-x-2 text-xs'>
              <a 
                className="link no-underline text-gray-400
                hover:brightness-90"
                onClick={() => toggleEdit(false)}
              >
                Cancel
              </a>
              <a 
                className="link no-underline text-forum
                hover:brightness-90"
                onClick={handleEditSave}
              >
                Save
              </a>
            </div>
          </div>
        :
          <div className='whitespace-pre-wrap p-4'>
            {reply.content}
          </div>
        }
        {user && user._id == reply.author && !isEditing ? 
          <div className='flex justify-end space-x-2 text-xs p-2'>
            <a 
              className="link no-underline text-forum
              hover:brightness-90"
              onClick={() => toggleEdit(true)}
            >
              Edit
            </a>
            <a 
              className="link no-underline text-red-600
              hover:brightness-90"
              onClick={() => toggleDeleteModal(true)}
            >
              Delete
            </a>
          </div> : <></>
        }
      </div>
      <DeleteReplyModal visible={deleteModal} deleteFunction={handleDeleteConfirm} cancelDelete={() => toggleDeleteModal(false)}/>
    </div>
    
  );
}

export default ForumReply;
