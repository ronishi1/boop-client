import React, {useState} from "react";
import WorkCard from './WorkCard';
import WorkListEntry from './WorkListEntry';
import CreateContent from './CreateContent';
const CreatorStudioScreen = () => {
  // will replace published with dates later, currently just using booleans to make it easier

  const [showCreate,setShowCreate] = useState(false);

  let data =[
    {
      title: "Attack on Titan",
      cover_image: "https://static.wikia.nocookie.net/shingekinokyojin/images/d/db/Volume_1_Cover.png",
      content_type: "C",
      published: true
    },
    {
      title: "Berserk",
      cover_image:"https://static.wikia.nocookie.net/berserk/images/2/26/Manga_V1_Cover.png",
      content_type: "S",
      published: true
    },
    {
      title: "One Piece",
      cover_image:"https://images-na.ssl-images-amazon.com/images/I/91NxYvUNf6L.jpg",
      content_type: "C",
      published: false
    },
    {
      title: "Naruto",
      cover_image:"https://images-na.ssl-images-amazon.com/images/I/912xRMMra4L.jpg",
      content_type: "C",
      published: false
    },
    {
      title: "My Hero Academia",
      cover_image:"https://upload.wikimedia.org/wikipedia/en/5/5a/Boku_no_Hero_Academia_Volume_1.png",
      content_type: "S",
      published: true
    },
    {
      title: "Horimiya",
      cover_image: "https://static.wikia.nocookie.net/horimiya/images/6/60/Horimiya_Volume_1.png",
      content_type: "S",
      published: true
    },
    {
      title: "Tokyo Ghoul",
      cover_image:"https://static.wikia.nocookie.net/tokyoghoul/images/6/6a/Volume_01.jpg",
      content_type: "S",
      published: false
    },
    {
      title: "One Punch Man",
      cover_image:"https://images-na.ssl-images-amazon.com/images/I/51dYG1ZNFaL._SX342_SY445_QL70_ML2_.jpg",
      content_type: "S",
      published: true
    }
  ]
  return (
    <div>
      <div>
        <input
          type="checkbox"
          id="reset-password-modal"
          class="modal-toggle"
          checked={showCreate}
          onClick={() => {setShowCreate(false)}}
        />

        <label for="reset-password-modal" class="modal cursor-pointer">
          <label class="modal-box w-4/12 max-w-5xl">
            <CreateContent
              toggleCreateCallback={setShowCreate}/>
          </label>
        </label>
      </div>
      <div class="container mx-auto">
        <div className="grid grid-cols-4">
          <div className="col-span-1 border-r-2  border-base-content/10">
            <div className="flex flex-row items-center justify-between">
              <div className="text-2xl font-normal">Works Overview</div>
              <div className="btn btn-xs mr-7 bg-base-content/90 pr-3 border-none" onClick={() => {setShowCreate(true)}}>+ Create</div>
            </div>
            {data.map((content) => (
              <WorkListEntry title={content.title} content_type={content.content_type} published={content.published} />
            ))}
          </div>
          <div className="col-span-3 ml-10">
            <div className="text-2xl font-normal">Published Works</div>
            <div className="flex flex-row overflow-x-scroll space-x-5">
              {data.map((content) => {
                console.log(content.publication_date);
                if(content.published){
                  return <WorkCard title={content.title} cover={content.cover_image} content_type={content.content_type}/>
                }
              })}
            </div>
            <div className="divider"></div>
            <div className="text-2xl font-normal">Unpublished Works</div>
            <div className="flex flex-row overflow-x-scroll space-x-5">
              {data.map((content) => {
                console.log(content.publication_date);
                if(!content.published){
                  return <WorkCard title={content.title} cover={content.cover_image} content_type={content.content_type}/>
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorStudioScreen;
