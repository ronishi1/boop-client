import React 	from 'react';

const DeleteReplyModal = ({ visible, deleteFunction, cancelDelete }) => {
// https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=341%3A2898

return (
  <div>
    <input type="checkbox" checked={visible} id="delete-modal" className="modal-toggle" readOnly/>
    <div className="modal">
      <div className="modal-box">
        <div className='flex justify-end'>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 hover:cursor-pointer" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth="2"
            onClick={cancelDelete}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        <p className='text-xl font-semibold'>Are you sure you want to permanently delete this reply?</p>
        <p className="">This action cannot be undone.</p>
        <div className="modal-action space-x-4">
          <a 
            className="link no-underline text-gray-400
            hover:brightness-90 grid content-center"
            onClick={cancelDelete}
          >
            Cancel
          </a>
          <label 
            className="btn btn-sm border-red-600 bg-red-600 
            hover:border-red-600 hover:bg-red-600 hover:brightness-90" 
            onClick={deleteFunction}
          >
            Delete
          </label>
        </div>
      </div>
    </div>
  </div>
);
}

export default DeleteReplyModal;
          