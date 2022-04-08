import React 	from 'react';
import ContentCard from '../common/ContentCard';
const HomeRecentlyReleased= () => {
  // USES SMALL CONTENT CARDS
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=211%3A353
  const data = [
    {
      title: "Attack on Titan",
      cover_image: "https://static.wikia.nocookie.net/shingekinokyojin/images/d/db/Volume_1_Cover.png"
    },
    {
      title: "Berserk",
      cover_image:"https://static.wikia.nocookie.net/berserk/images/2/26/Manga_V1_Cover.png"
    },
    {
      title: "One Piece",
      cover_image:"https://images-na.ssl-images-amazon.com/images/I/91NxYvUNf6L.jpg"
    },
    {
      title: "Naruto",
      cover_image:"https://images-na.ssl-images-amazon.com/images/I/912xRMMra4L.jpg"
    },
    {
      title: "Chainsaw Man",
      cover_image:"https://images-na.ssl-images-amazon.com/images/I/81s8xJUzWGL.jpg"
    },
    {
      title: "Death Note",
      cover_image:"https://images-na.ssl-images-amazon.com/images/I/81iDNjn-r3L.jpg"
    },
    {
      title: "Solo Leveling",
      cover_image:"https://images-na.ssl-images-amazon.com/images/I/91ZiXDYRM6L.jpg"
    },
    {
      title: "My Hero Academia",
      cover_image:"https://upload.wikimedia.org/wikipedia/en/5/5a/Boku_no_Hero_Academia_Volume_1.png"
    },
    {
      title: "Horimiya",
      cover_image: "https://static.wikia.nocookie.net/horimiya/images/6/60/Horimiya_Volume_1.png"
    },
    {
      title: "Tokyo Ghoul",
      cover_image:"https://static.wikia.nocookie.net/tokyoghoul/images/6/6a/Volume_01.jpg"
    },
    {
      title: "One Punch Man",
      cover_image:"https://images-na.ssl-images-amazon.com/images/I/51dYG1ZNFaL._SX342_SY445_QL70_ML2_.jpg"
    },
    {
      title: "Fairy Tail",
      cover_image:"https://static.wikia.nocookie.net/fairytail/images/d/db/Volume_1_Cover.png"
    },
    {
      title: "Vinland Saga",
      cover_image:"https://upload.wikimedia.org/wikipedia/en/5/51/Vinland_Saga_volume_01_cover.jpg"
    },
    {
      title: "Fairy Tail",
      cover_image:"https://static.wikia.nocookie.net/fairytail/images/d/db/Volume_1_Cover.png"
    },
    {
      title: "Vinland Saga",
      cover_image:"https://upload.wikimedia.org/wikipedia/en/5/51/Vinland_Saga_volume_01_cover.jpg"
    },
    {
      title: "Fairy Tail",
      cover_image:"https://static.wikia.nocookie.net/fairytail/images/d/db/Volume_1_Cover.png"
    },
    {
      title: "Vinland Saga",
      cover_image:"https://upload.wikimedia.org/wikipedia/en/5/51/Vinland_Saga_volume_01_cover.jpg"
    },
    {
      title: "Fairy Tail",
      cover_image:"https://static.wikia.nocookie.net/fairytail/images/d/db/Volume_1_Cover.png"
    },
    {
      title: "Vinland Saga",
      cover_image:"https://upload.wikimedia.org/wikipedia/en/5/51/Vinland_Saga_volume_01_cover.jpg"
    },
  ]
  return (
    <div>
      <p className="text-2xl ml-10">Recently Released</p>
      <div className="flex flex-row space-x-3 overflow-x-scroll ml-10">
        {data.map((content) => (
          <ContentCard title={content.title} cover={content.cover_image} size="S"/>
        ))}
      </div>
    </div>
  );
}

export default HomeRecentlyReleased;
