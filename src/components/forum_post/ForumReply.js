import React, { useState } 	from 'react';
import { Link } from "react-router-dom";
import DeleteReplyModal from "./DeleteReplyModal";
import { Transition } from '@headlessui/react';

const ForumReply = ({reply, formatDate, user, handleDeleteReply,handleEditReply}) => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=341%3A2898
  const [deleteModal, toggleDeleteModal] = useState(false);
  const [isEditing, toggleEdit] = useState(false);
  const [content, setContent] = useState(reply.content);
  const [error,setError] = useState({status:false,message:""});

  const handleDeleteConfirm = () => {
    toggleDeleteModal(false);
    handleDeleteReply(reply._id);
  }

  const handleEditSave = () => {
    if(content.length === 0){
      setError({status:true,message:"Reply cannot be empty"});
      setTimeout(() => {
        setError({status:false,message:''});
      },2000)
      return;
    }
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
        <Transition
          show={error.status}
          enter="transition-opacity duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="alert alert-error py-1.5 shadow-lg">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>{error.message}</span>
            </div>
          </div>
        </Transition>
        {isEditing ? 
          <div className='p-2'>
            <textarea
              className='textarea textarea-bordered w-full leading-normal'
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Reply to post"
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
