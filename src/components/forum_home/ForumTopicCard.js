import React 	from 'react';
import ForumPostCard from './ForumPostCard';
import { Link } from "react-router-dom";

const ForumTopicCard = ({data}) => {
  // USED ON FORUM HOME SCREEN
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=255%3A540

  return (
    <div>
        <div className='text-lg font-medium text-link leading-normal'>
          <Link to={`/topic/${data._id}`}>
            {data.name}
          </Link>
        </div>
      <div className='text-sm leading-none pb-2'>
        {data.description}
      </div>
      {data.posts.length == 0 ? <div className="text-lg text-gray-400">There are currently no posts in this topic</div> :
      <div className='h-20 grid grid-cols-3'>
        {data.posts[0] ? <ForumPostCard post={data.posts[0]}/> : <></>}
        {data.posts[1] ? <ForumPostCard post={data.posts[1]}/> : <></>}
        {data.posts[2] ? <ForumPostCard post={data.posts[2]}/> : <></>}
      </div>
      }
    </div>

  );
}

export default ForumTopicCard;
