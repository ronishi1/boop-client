import React 	from 'react';
import ContentCard from '../common/ContentCard'
import {Link} from 'react-router-dom'
const ListScreen = ({listType,contents,username}) => {
  console.log(contents);
  // USES LARGE CONTENT CARDS
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=328%3A2472
  let hasComic = false;
  let listName = listType.toLowerCase();
  let hasStory = false;
  return (
    <div class="container mx-auto">
      <div className="text-2xl">
        <Link to={`/profile/${username}`} className="text-link">
          {username + '\'s '}
        </Link>
       {listType}
     </div>
      <div>
        <div className="text-2xl text-comic">Comics</div>
        <div className="flex flex-row space-x-5 overflow-x-scroll">
          {contents.map((content) => {
            if(content.content_type == "C"){
              hasComic = true;
              return <ContentCard title={content.series_title} cover={content.cover_image} size="L" id={content._id}/>
            }
          })}
          {!hasComic ? <div className="text-xl text-gray-400">There are no comics in this {listName}. </div> : <></>}
        </div>
      </div>
      <div>
        <div className="text-2xl text-story">Stories</div>
        <div className="flex flex-row space-x-5 overflow-x-scroll">
          {contents.map((content) => {
            if(content.content_type == "S"){
              hasStory = true;
              return <ContentCard title={content.series_title} cover={content.cover_image} size="L" id={content._id} />
            }
          })}
          {!hasStory ? <div className="text-xl text-gray-400">There are no no stories in this {listName}. </div> : <></>}

        </div>
      </div>
    </div>
  );
}

export default ListScreen;
