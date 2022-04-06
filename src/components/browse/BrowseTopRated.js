import React 	from 'react';
import ContentCard from '../common/ContentCard';

const BrowseTopRated = () => {
  // USES MEDIUM CONTENT CARDS
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=293%3A2131
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
  ]

  return (
    <div>
      <p className="text-2xl">Top Rated</p>
      <div class="carousel rounded-box">
        <div className="flex flex-row space-x-3">
          {data.map((content) => (
            <ContentCard class="carousel-item" title={content.title} cover={content.cover_image} size="M" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BrowseTopRated;
