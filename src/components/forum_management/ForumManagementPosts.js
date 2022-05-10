import React, {useState, useEffect}	from 'react';
import ForumManagementPost from "./ForumManagementPost"
import { GET_MY_POSTS } from '../../cache/queries'
import { useQuery } from '@apollo/client'
import Loading from '../loading/Loading';

const ForumManagementPosts = () => {
  const { loading, error, data } = useQuery(GET_MY_POSTS);

  if (loading) return <Loading/>;
  if (error) return `Error! ${error.message}`;
  console.log(data)
  return (
    <div>
      
      {data.getMyPosts.length !== 0 
      ? <div>
          <div 
            id="ForumManagementPosts-TableHeaders" 
            className='flex flex-row'
          >
            <div className='w-2/3'>Post</div>
            <div className='w-1/6'>Date</div>
            <div className='w-1/6'></div>
          </div>
        <div>
          {data.getMyPosts.map((post,i) => (
          <ForumManagementPost
              key={i} 
              postId={post._id}
              cover={post.linked_image}
              title={post.title}
              linked_title={post.linked_title}
              publicationDate={post.timestamp}
              tags={post.tags}
              content={post.content}
          />
        ))}
        </div>
      </div>
        : 
        <div className='text-gray-400'> No forum posts have been created </div>}
    </div>
  );
}

export default ForumManagementPosts;
