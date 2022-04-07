import React 	from 'react';
import ContentCard from '../common/ContentCard';

const BrowseFiltered = () => {
  // USES MEDIUM CONTENT CARDS
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=298%3A1298
  const data = [
    {
      title: "Steel Ball Run",
      cover_image: "https://images-na.ssl-images-amazon.com/images/I/715hSpTTzHL.jpg"
    },
    {
      title: "One Piece",
      cover_image:"https://comicvine.gamespot.com/a/uploads/scale_medium/11136/111369808/6786544-one%20piece%201.jpg"
    },
    {
      title: "Vagabond",
      cover_image:"https://images-na.ssl-images-amazon.com/images/I/81AQnk9bGaL.jpg"
    },
    {
      title: "Monster",
      cover_image:"https://upload.wikimedia.org/wikipedia/en/thumb/0/00/Monster_manga_volume_1_cover.jpg/220px-Monster_manga_volume_1_cover.jpg"
    },
    {
      title: "Grand Blue",
      cover_image:"https://images-na.ssl-images-amazon.com/images/I/91nsXODFxRL.jpg"
    },
    {
      title: "Slam Dunk",
      cover_image:"https://static.wikia.nocookie.net/slamdunk/images/7/77/Volume_1_%28English%29.jpg"
    },
    {
      title: "Kingdom",
      cover_image: "https://static.wikia.nocookie.net/kingdom-anime/images/4/46/Volume_1_cover.PNG"
    },
    {
      title: "Kaguya-sama Love Is War",
      cover_image: "http://animeushi.com/wp-content/uploads/2018/07/kaguyasama.jpg"
    },
    {
      title: "GTO",
      cover_image:"https://static.wikia.nocookie.net/great-teacher-onizuka-gto/images/a/a9/GTO-volume_1_cover.png"
    },
    {
      title: "A Silent Voice",
      cover_image:"https://images-na.ssl-images-amazon.com/images/I/91dg9Ky+AIL.jpg"
    },
    {
      title: "Haikyuu",
      cover_image:"https://static.wikia.nocookie.net/haikyuu/images/0/0e/Volume_1.png"
    },
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
  ]
  return (
    <div>
      <div className="grid lg:grid-cols-8 md:grid-cols-4 gap-6">
        {data.map((content) => (
          <ContentCard title={content.title} cover={content.cover_image} size="M" />
        ))}
      </div>
    </div>
  );
}

export default BrowseFiltered;
