import React, { useState } 	from 'react';
import ForumTopicCard from './ForumTopicCard';

const ForumHomeStory = ({data}) => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=255%3A469
  const [open, setOpen] = useState(true);
  
  return (
    <div tabindex="0" class="collapse collapse-plus border-4 border-story bg-base-100 shadow-md">
      <input type="checkbox" checked={open} onClick={() => setOpen(!open)}/> 
      <div class="collapse-title text-xl text-white font-medium bg-story">
        Stories
      </div>
      <div class="collapse-content"> 
        <ForumTopicCard data={data[0]}/>
        <div class="divider m-0"></div> 
        <ForumTopicCard data={data[1]}/>
        <div class="divider m-0"></div> 
        <ForumTopicCard data={data[2]}/>
      </div>
    </div>
    
  );
}

export default ForumHomeStory;
