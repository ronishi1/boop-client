import React 	from 'react';
import ContentCard from '../common/ContentCard'
const ListScreen = ({list_type,data}) => {
  // Holds the users favorites list
  // USES LARGE CONTENT CARDS
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=328%3A2472
  return (
    <div class="container mx-auto">
      <div className="text-2xl">My {list_type}</div>
      <div>
        <div className="text-2xl text-comic">Comics</div>
        <div className="flex flex-row space-x-5 overflow-x-scroll">
          {data.map((content) => {
            if(content.content_type == "C"){
              return <ContentCard title={content.title} cover={content.cover_image} size="L" />
            }
          })}
        </div>
      </div>
      <div>
        <div className="text-2xl text-story">Stories</div>
        <div className="flex flex-row space-x-5 overflow-x-scroll">
          {data.map((content) => {
            if(content.content_type == "S"){
              return <ContentCard title={content.title} cover={content.cover_image} size="L" />
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default ListScreen;
