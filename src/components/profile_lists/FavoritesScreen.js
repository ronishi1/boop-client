import React 	from 'react';
import ListTemplate from './ListTemplate';

const FavoritesScreen = () => {
  // Holds the users favorites list
  // USES LARGE CONTENT CARDS
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=328%3A2472
  let data =[
    {
      title: "Attack on Titan",
      cover_image: "https://static.wikia.nocookie.net/shingekinokyojin/images/d/db/Volume_1_Cover.png",
      content_type: "C",
    },
    {
      title: "Berserk",
      cover_image:"https://static.wikia.nocookie.net/berserk/images/2/26/Manga_V1_Cover.png",
      content_type: "S",
    },
    {
      title: "One Piece",
      cover_image:"https://images-na.ssl-images-amazon.com/images/I/91NxYvUNf6L.jpg",
      content_type: "C",
    },
    {
      title: "Naruto",
      cover_image:"https://images-na.ssl-images-amazon.com/images/I/912xRMMra4L.jpg",
      content_type: "C",
    },
    {
      title: "My Hero Academia",
      cover_image:"https://upload.wikimedia.org/wikipedia/en/5/5a/Boku_no_Hero_Academia_Volume_1.png",
      content_type: "S",
    },
    {
      title: "Horimiya",
      cover_image: "https://static.wikia.nocookie.net/horimiya/images/6/60/Horimiya_Volume_1.png",
      content_type: "S",
    },
    {
      title: "Tokyo Ghoul",
      cover_image:"https://static.wikia.nocookie.net/tokyoghoul/images/6/6a/Volume_01.jpg",
      content_type: "S",
    },
    {
      title: "One Punch Man",
      cover_image:"https://images-na.ssl-images-amazon.com/images/I/51dYG1ZNFaL._SX342_SY445_QL70_ML2_.jpg",
      content_type: "S",
    },
  ]
  return (
    <div>
      <ListTemplate list_type="Favorites" data={data}/>
    </div>
  );
}

export default FavoritesScreen;
