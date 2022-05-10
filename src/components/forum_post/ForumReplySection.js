import React, { useState } 	from 'react';
import ForumReply from './ForumReply';
import PageSelectModal from './PageSelectModal';
import { Link } from "react-router-dom";

const ForumReplySection = ({replies, user,handleDeleteReply,handleEditReply, post}) => {
  const months = [ "Jan", "Feb", "Mar", "April", "May", "June",
  "July", "Aug", "Sep", "Oct", "Nov", "Dec" ];
  const [page, setPage] = useState(1);
  const [pageModal, toggleModal] = useState(false);
  const repliesPerPage = 2;

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

  const handleSetPage = (page) => {
    toggleModal(false);
    setPage(page);
  }

  return (
    <div className='card flex flex-col p-4 rounded-none shadow bg-forum bg-opacity-20 space-y-4 mb-4 static'>
      {replies.length == 0 ?
      <div>There are currently no replies to this post.</div>
      :
      <div className='space-y-2'>
        <div className='card rounded-none w-full bg-white shadow static'>
          <div className='card-title bg-gray-800 text-white p-2 flex justify-between'>
            <p className='w-max text-white hover:underline font-medium flex flex-row'>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
              </svg>
              <Link to={'/profile/'+post.author_name}>
                {post.author_name}
              </Link>
            </p>
            <div>
              {formatDate(post)}
            </div>
          </div>
          <div className='whitespace-pre-wrap p-4'>
            {post.content}
          </div>
        </div>
        {replies.slice((page-1)*repliesPerPage,page*repliesPerPage).map(reply =>
          <ForumReply reply={reply} formatDate={formatDate} key={reply._id} user={user}
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
      {replies.length > repliesPerPage ? <div className='flex justify-center'>
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
              onClick={() => toggleModal(true)}
            >
              Page {page}
            </button>
            {page == Math.ceil(replies.length/repliesPerPage) ? <button className="btn btn-disabled">»</button> :
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
      <PageSelectModal visible={pageModal} maxPage={Math.ceil(replies.length/repliesPerPage)} handleSetPage={handleSetPage} cancel={() => toggleModal(false)}/>
    </div>
  );
}

export default ForumReplySection;
