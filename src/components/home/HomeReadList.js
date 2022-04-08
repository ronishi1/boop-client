import React 	from 'react';
import ContentCard from '../common/ContentCard';

const HomeReadList = () => {
  // USES MEDIUM CONTENT CARDS
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=276%3A760
  const data = [
    {
      title: "Kaguya-sama Love Is War",
      cover_image: "http://animeushi.com/wp-content/uploads/2018/07/kaguyasama.jpg"
    },
    {
      title: "Black Clover",
      cover_image:"https://upload.wikimedia.org/wikipedia/en/6/69/Black_Clover%2C_volume_1.jpg"
    },
    {
      title: "Chainsaw Man",
      cover_image:"https://images-na.ssl-images-amazon.com/images/I/81s8xJUzWGL.jpg"
    },
    {
      title: "Fullmetal Alchemist",
      cover_image:"https://upload.wikimedia.org/wikipedia/en/9/9d/Fullmetal123.jpg"
    }
  ]
  return (
    <div>
      <div className="ml-10 text-2xl">My Read List</div>
        <div className="flex flex-row space-x-3 overflow-x-scroll ml-10">
          {data.map((content) => (
            <ContentCard title={content.title} cover={content.cover_image} size="M"/>
          ))}
        </div>
    </div>
  );
}

export default HomeReadList;
