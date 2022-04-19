import React, {useState}	from 'react';
import DetailedContentCard from './DetailedContentCard';
import { Transition } from '@headlessui/react'

const HomeMostPopular = () => {
  // USES DETAILED CONTENT CARD
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=211%3A556

  const [slide,setSlide] = useState({first:true,second:false,third:false});
  // ASSUMES THAT THERE ARE 9 MOST POPULAR THINGS RETURNED IN THE QUERY
  // ASSUMES THAT THERE ARE 9 MOST POPULAR THINGS RETURNED IN THE QUERY
  // ASSUMES THAT THERE ARE 9 MOST POPULAR THINGS RETURNED IN THE QUERY
  // ASSUMES THAT THERE ARE 9 MOST POPULAR THINGS RETURNED IN THE QUERY
  // ASSUMES THAT THERE ARE 9 MOST POPULAR THINGS RETURNED IN THE QUERY
  // ASSUMES THAT THERE ARE 9 MOST POPULAR THINGS RETURNED IN THE QUERY
  // ASSUMES THAT THERE ARE 9 MOST POPULAR THINGS RETURNED IN THE QUERY
  const data = [
    {
      title: "Attack on Titan",
      content_type: "C",
      cover_image: "https://static.wikia.nocookie.net/shingekinokyojin/images/d/db/Volume_1_Cover.png",
      genres:["Action","Adventure"],
      synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      title: "Berserk",
      content_type: "C",
      cover_image:"https://static.wikia.nocookie.net/berserk/images/2/26/Manga_V1_Cover.png",
      genres:["Action","Horror"],
      synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      title: "One Piece",
      content_type: "C",
      cover_image:"https://images-na.ssl-images-amazon.com/images/I/91NxYvUNf6L.jpg",
      genres:["Adventure","Fantasy"],
      synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      title: "Naruto",
      content_type: "C",
      cover_image:"https://images-na.ssl-images-amazon.com/images/I/912xRMMra4L.jpg",
      genres:["Action","Adventure"],
      synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      title: "Chainsaw Man",
      content_type: "C",
      cover_image:"https://images-na.ssl-images-amazon.com/images/I/81s8xJUzWGL.jpg",
      genres:["Action","Adventure"],
      synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      title: "Death Note",
      content_type: "C",
      cover_image:"https://images-na.ssl-images-amazon.com/images/I/81iDNjn-r3L.jpg",
      genres:["Psychological"],
      synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      title: "One Punch Man",
      content_type: "C",
      cover_image:"https://images-na.ssl-images-amazon.com/images/I/51dYG1ZNFaL._SX342_SY445_QL70_ML2_.jpg",
      genres:["Action","Comedy"],
      synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      title: "Solo Leveling",
      content_type: "S",
      cover_image:"https://images-na.ssl-images-amazon.com/images/I/91ZiXDYRM6L.jpg",
      genres:["Action","Adventure"],
      synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      title: "Demon Slayer",
      content_type: "C",
      cover_image:"https://images-na.ssl-images-amazon.com/images/I/81ZNkhqRvVL.jpg",
      genres:["Action","Adventure"],
      synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
  ]
  return (
    <div>
      <div className="ml-10 text-2xl">Most popular</div>
      <Transition
        show={slide.first}
        enter="transition-opacity duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-0"
        leaveFrom="hidden"
        leaveTo="hidden"
      >
      <div className="flex flex-row overflow-x-auto space-x-2 ml-10">
        {data.slice(0,3).map((content) => (
          <DetailedContentCard title={content.title} cover={content.cover_image} genres={content.genres} synopsis={content.synopsis} type={content.content_type}/>
        ))}
        <div className="mt-[6.5rem]" onClick={() => {setSlide({first:false,second:true,third:false})}}>
          <div className="btn btn-circle btn-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
      </Transition>
      <Transition
        show={slide.second}
        enter="transition-opacity duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-0"
        leaveFrom="hidden"
        leaveTo="hidden"
      >
        <div className="flex flex-row overflow-x-auto space-x-2">
          <div className="mt-[6.5rem]">
            <div className="btn btn-circle btn-sm" onClick={() => {setSlide({first:true,second:false,third:false})}}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </div>
          </div>
          {data.slice(3,6).map((content) => (
            <DetailedContentCard title={content.title} cover={content.cover_image} genres={content.genres} synopsis={content.synopsis} type={content.content_type}/>
          ))}
          <div className="mt-[6.5rem]">
            <div className="btn btn-circle btn-sm" onClick={() => {setSlide({first:false,second:false,third:true})}}>
              <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </Transition>
      <Transition
        show={slide.third}
        enter="transition-opacity duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-0"
        leaveFrom="hidden"
        leaveTo="hidden"
      >
        <div className="flex flex-row overflow-x-auto space-x-2 mr-10">
          <div className="mt-[6.5rem]">
            <div className="btn btn-circle btn-sm" onClick={() => {setSlide({first:false,second:true,third:false})}}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </div>
          </div>
          {data.slice(6,9).map((content) => (
            <DetailedContentCard title={content.title} cover={content.cover_image} genres={content.genres} synopsis={content.synopsis} type={content.content_type}/>
          ))}
        </div>
      </Transition>

    </div>
  );
}

export default HomeMostPopular;
