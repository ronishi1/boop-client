import React, { useState } 	from 'react';
import ForumReply from './ForumReply';

const ForumPost = ({post}) => {
  // This is the initial post, should make it different in looks like reddit does
  // replies should be a less of a focus, don't follow figma mockup
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=341%3A2882
  const [page, setPage] = useState(1);
  const repliesPerPage = 4;

  const handlePageChange = async(target) => {
    setPage(target);
  }

  return (
    <div className='w-3/4'>
      <div className='grid grid-cols-3 bg-comic p-4 mb-4 items-center shadow'>
        <div className='text-white font-bold'>
          {post.title}
        </div>
        <div className='flex flex-row'>
          {post.tags.map((tag) => {
            return (
              <span class="badge">{tag}</span>)
          })}
        </div>
        <button className="btn btn-sm btn-outline justify-self-end">Reply</button>
      </div>
      <div className='flex flex-cols-2'>
        <div className='card h-max p-6 flex flex-col rounded-none w-1/3 shadow'>
          <div>
            <p className='text-center font-bold text-comic'>
              {post.content.title}
            </p>
          </div>
          <div className='flex flex-row place-content-center'>
            {post.tags.map((tag) => {
              return <span class="badge">{tag}</span>
            })}
          </div>
          <div className='flex my-4 place-content-center h-2/5'>
            <img className='h-72' src={post.content.cover_image} alt="cover image"/>
          </div>
          <div className='h-72 overflow-y-auto'>
            <p>{post.content.synopsis}</p>
          </div>
        </div>
        <div className='w-2/3 ml-12'>
          
            {post.replies.slice((page-1)*repliesPerPage,page*repliesPerPage).map((reply) => {
              return <ForumReply reply={reply}/>
            })}
          
        </div>
      </div>
      <div className='grid grid-cols-3 my-2'>
        <div className='col-start-2 col-end-4 justify-self-center'>
          <div class="btn-group">
            {page==1 ? <button class="btn btn-disabled">«</button> : <button class="btn" onClick={() => handlePageChange(page-1)}>«</button>}
            <button class="btn">Page {page}</button>
            {(page+1) > Math.ceil(post.replies.length/repliesPerPage) ? <button class="btn btn-disabled">»</button> : <button class="btn" onClick={() => handlePageChange(page+1)}>»</button>}
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default ForumPost;
