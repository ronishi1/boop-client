import React, { useState } 	from 'react';
import ForumReply from './ForumReply';
    
const ForumReplySection = ({replies, userId,handleDeleteReply,handleEditReply}) => {
  const months = [ "Jan", "Feb", "Mar", "April", "May", "June",
  "July", "Aug", "Sep", "Oct", "Nov", "Dec" ];
  const [page, setPage] = useState(1);
  const repliesPerPage = 8;
  
  const formatDate = (reply) => {
    let date = new Date(reply.timestamp);
    let month = months[date.getMonth()];
    let pm = date.getHours() > 12;
    let hour = date.getHours();
    if(pm) hour -= 12;
    if(hour == 0) hour = 12;
    let strHour = ("0" + hour).slice(-2);
    let strMinutes = ("0" + date.getMinutes()).slice(-2);
    return month + " " + date.getDate() + ", " + strHour + ":" + strMinutes + (pm ? "pm" : "am");
  }
  
  return (
    <div className='card flex flex-col p-4 rounded-none shadow bg-forum bg-opacity-20 space-y-4 mb-4'>
      {replies.length == 0 ? 
      <div>There are currently no replies to this post.</div>
      : 
      <div className='space-y-2'>
        {replies.slice((page-1)*repliesPerPage,page*repliesPerPage).map(reply => 
          <ForumReply reply={reply} formatDate={formatDate} key={reply._id} userId={userId} 
            handleDeleteReply={(replyId) => {
              if(page > 1 && replies.slice((page-1)*repliesPerPage,page*repliesPerPage).length == 1)
                setPage(page-1); 
              handleDeleteReply(replyId);
            }} 
            handleEditReply={handleEditReply}
          />
        )}
      </div>
      
      }
      {replies.length > repliesPerPage ?<div className='flex justify-center'>
        <div className='col-start-2 col-end-4 justify-self-center'>
          <div className="btn-group">
            {page==1 ? <button className="btn btn-disabled">«</button> : 
              <button 
                className="btn border-forum bg-forum text-white 
                hover:border-forum hover:bg-white hover:text-forum" 
                onClick={() => setPage(page-1)}
              >
                «
              </button>
            }
            <button 
              className="btn w-[10em] border-forum bg-forum text-white
              hover:border-forum hover:bg-white hover:text-forum"
            >
              Page {page}
            </button>
            {(page+1) > Math.ceil(replies.length/repliesPerPage) ? <button className="btn btn-disabled">»</button> : 
              <button 
                className="btn border-forum bg-forum text-white 
                hover:border-forum hover:bg-white hover:text-forum" 
                onClick={() => setPage(page+1)}
              >
                »
              </button>
            }
          </div>
        </div>
      </div> : <></>}
    </div>
  );
}

export default ForumReplySection;
    