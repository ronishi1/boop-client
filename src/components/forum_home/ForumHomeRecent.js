import React from 'react';
import ForumPostCard from "./ForumPostCard";
import { GET_RECENT_POSTS } from '../../cache/queries';
import {useQuery} from '@apollo/client'

const ForumHomeRecent = () => {
  let recentPosts =[];

  const { loading, error, data, refetch } = useQuery(GET_RECENT_POSTS);

  if(data){
    recentPosts = data.getRecentPosts;
  }
  return (
    <div className="flex flex-col">
      {recentPosts.map((post) => {
        return (
          <div className="m-2">
            <ForumPostCard post={post} />
          </div>
        );
      })}
    </div>
  );
}

export default ForumHomeRecent;
