import React, { useState, useEffect } 	from 'react';
import ForumTopicCard from './ForumTopicCard';
import { GET_CATEGORY_POSTS } from '../../cache/queries';
import {useQuery} from '@apollo/client'

const ForumHomeStory = () => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=255%3A469
  let topics = [];
  const [open, setOpen] = useState(true);
  const { loading, error, data, refetch } = useQuery(GET_CATEGORY_POSTS, {
      variables: { category: "Stories" },
    });

    useEffect(() => {
      refetch();
    },[])
  if(data) {
    console.log(data.getCategoryPosts);
    topics = data.getCategoryPosts;

  }
  return (
    <div tabindex="0" class="collapse collapse-plus border-4 border-story bg-base-100 shadow-md">
      <input type="checkbox" checked={open} onClick={() => setOpen(!open)}/>
      <div class="collapse-title text-xl text-white font-medium bg-story">
        Stories
      </div>
      <div class="collapse-content">
        {topics.length == 0 ? <></> :
          <div>
            <ForumTopicCard data={topics[0]}/>
            <div class="divider m-0"></div>
            <ForumTopicCard data={topics[1]}/>
            <div class="divider m-0"></div>
            <ForumTopicCard data={topics[2]}/>
          </div>
        }
      </div>
    </div>

  );
}

export default ForumHomeStory;
