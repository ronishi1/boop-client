import React from 'react';
import ContentCard from '../common/ContentCard';

const StoryBoardTool = () => {
        
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
        },
        {
          title: "Jujutsu Kaisen",
          cover_image:"https://static.wikia.nocookie.net/jujutsu-kaisen/images/0/0e/Volume_1.png"
        },
        {
          title: "Fire Force",
          cover_image:"https://static.wikia.nocookie.net/fire-brigade-of-flames/images/f/f1/FIRE_FORCE_1.png"
        },
      ]

    return (
        <div class="drawer-side">
        <label for="my-drawer-4" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {data.map((content) => (
            <ContentCard title={content.title} cover={content.cover_image} size="S" />
            ))}
        </ul>
      </div>
    );
  }
  
  export default StoryBoardTool;
  