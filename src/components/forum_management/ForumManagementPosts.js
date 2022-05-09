import React, {useState, useEffect}	from 'react';
import ForumManagementPost from "./ForumManagementPost"
import { GET_MY_POSTS } from '../../cache/queries'
import { useQuery } from '@apollo/client'

const ForumManagementPosts = () => {
  const { loading, error, data } = useQuery(GET_MY_POSTS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  console.log(data)
  return (
    <div>
      {data.getMyPosts.length !== 0 
      ? 
        data.getMyPosts.map((post,i) => (
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
        ))
        : 
        <div> No forum posts have been created </div>}
    </div>
  );
}

export default ForumManagementPosts;
