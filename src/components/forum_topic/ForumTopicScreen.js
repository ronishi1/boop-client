import React 	from 'react';
import ForumTopicTable from './ForumTopicTable';

const ForumTopicScreen = () => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=255%3A636
  const data = {
    topic_title: "Topic Title",
    topic_description: "this is the description of topic title",
    topic_color: "comic",
    topic_posts: [{
      cover_image: "https://i.pinimg.com/originals/66/6e/59/666e59a6a8e6982d099a552eb6cdd99f.jpg",
      title: "sample post 1",
      replies: [{},{},{},{},{},{}],
      tags: ["Discussion","Spoilers"],
      publication_date: new Date(2022,4,17,2,14),
      author: "post author",
      recent_post: new Date(2022,4,16,4,17),
    },{
      cover_image: "https://i.pinimg.com/originals/0d/19/39/0d1939679a3a4377383d5c38f928d5d8.jpg",
      title: "sample post 2",
      replies: [{},{},{},],
      tags: ["Discussion","Spoilers"],
      publication_date: new Date(2022,6,12,15,20),
      author: "post author",
      recent_post: new Date(2022,4,16,4,17),
    },],
  }
  
  return (
    <div className='flex place-content-center'>
      <div className={'card rounded-none w-5/6 h-3/4-screen'}>
        <div className={'grid grid-cols-2 bg-'+data.topic_color}>
          <div className='p-4 text-lg font-bold text-white'>
            {data.topic_title}{" - "}{data.topic_description}
          </div>
          <div class="dropdown dropdown-end justify-self-end self-center pr-2">
            <label tabindex="0" class="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Most Views</a></li>
              <li><a>Most Replies</a></li>
              <li><a>Most Recent</a></li>
              <li><a>Oldest</a></li>
            </ul>
          </div>
        </div>
        <ForumTopicTable posts={data.topic_posts}/>
      </div>
    </div>
  );
}

export default ForumTopicScreen;
