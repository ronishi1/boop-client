import React 	from 'react';
import ForumPostCard from './ForumPostCard';

const ForumTopicCard = ({data}) => {
  // USED ON FORUM HOME SCREEN
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=255%3A540
  return (
    <div>
      <div className='text-lg font-medium text-link'>
        {data.title}
      </div>
      <div className='text-sm'>
        {data.description}
      </div>
      <div className='h-16 flex flex-row'>
        <ForumPostCard post={data.posts[0]}/>
        <ForumPostCard post={data.posts[1]}/>
        <ForumPostCard post={data.posts[2]}/>
      </div>
    </div>
    
  );
}

export default ForumTopicCard;
