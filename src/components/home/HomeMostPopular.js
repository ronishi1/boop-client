import React, {useState}	from 'react';
import DetailedContentCard from './DetailedContentCard';
import { Transition } from '@headlessui/react'

const HomeMostPopular = () => {
  // USES DETAILED CONTENT CARD
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=211%3A556
  const [first,setFirst] = useState(true);
  const [second,setSecond] = useState(false);
  const [third,setThird] = useState(false);

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
      cover_image: "https://static.wikia.nocookie.net/shingekinokyojin/images/d/db/Volume_1_Cover.png",
      genres:["Action","Adventure"],
      synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      title: "Berserk",
      cover_image:"https://static.wikia.nocookie.net/berserk/images/2/26/Manga_V1_Cover.png",
      genres:["Action","Horror"],
      synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      title: "One Piece",
      cover_image:"https://images-na.ssl-images-amazon.com/images/I/91NxYvUNf6L.jpg",
      genres:["Adventure","Fantasy"],
      synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      title: "Naruto",
      cover_image:"https://images-na.ssl-images-amazon.com/images/I/912xRMMra4L.jpg",
      genres:["Action","Adventure"],
      synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      title: "Chainsaw Man",
      cover_image:"https://images-na.ssl-images-amazon.com/images/I/81s8xJUzWGL.jpg",
      genres:["Action","Adventure"],
      synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      title: "Death Note",
      cover_image:"https://images-na.ssl-images-amazon.com/images/I/81iDNjn-r3L.jpg",
      genres:["Psychological"],
      synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      title: "One Punch Man",
      cover_image:"https://images-na.ssl-images-amazon.com/images/I/51dYG1ZNFaL._SX342_SY445_QL70_ML2_.jpg",
      genres:["Action","Comedy"],
      synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      title: "Solo Leveling",
      cover_image:"https://images-na.ssl-images-amazon.com/images/I/91ZiXDYRM6L.jpg",
      genres:["Action","Adventure"],
      synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      title: "Demon Slayer",
      cover_image:"https://images-na.ssl-images-amazon.com/images/I/81ZNkhqRvVL.jpg",
      genres:["Action","Adventure"],
      synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
  ]
  return (
    <div>
      <div className="flex flex-row">
        <div className="invisible">
          <div className="btn btn-circle btn-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
        <div className="ml-1.5 text-2xl">Most popular</div>

      </div>
      <Transition
        show={first}
        enter="transition-opacity duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
      >
      <div className="flex flex-row overflow-x-scroll space-x-2">
        <div className="invisible">
          <div className="btn btn-circle btn-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
        {data.slice(0,3).map((content) => (
          <DetailedContentCard title={content.title} cover={content.cover_image} genres={content.genres} synopsis={content.synopsis} />
        ))}
        <div className="mt-[6.5rem]" onClick={() => {setFirst(false);setSecond(true);}}>
          <div className="btn btn-circle btn-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
      </Transition>
      <Transition
        show={second}
        enter="transition-opacity duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
      >
        <div className="flex flex-row overflow-x-scroll space-x-2">
          <div className="mt-[6.5rem]">
            <div className="btn btn-circle btn-sm" onClick={() => {setFirst(true);setSecond(false);}}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </div>
          </div>
          {data.slice(3,6).map((content) => (
            <DetailedContentCard title={content.title} cover={content.cover_image} genres={content.genres} synopsis={content.synopsis} />
          ))}
          <div className="mt-[6.5rem]">
            <div className="btn btn-circle btn-sm" onClick={() => {setSecond(false);setThird(true);}}>
              <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </Transition>
      <Transition
        show={third}
        enter="transition-opacity duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
      >
        <div className="flex flex-row overflow-x-scroll space-x-2">
          <div className="mt-[6.5rem]">
            <div className="btn btn-circle btn-sm" onClick={() => {setSecond(true);setThird(false);}}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </div>
          </div>
          {data.slice(6,9).map((content) => (
            <DetailedContentCard title={content.title} cover={content.cover_image} genres={content.genres} synopsis={content.synopsis} />
          ))}
          <div className="invisible">
            <div className="btn btn-circle btn-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </Transition>

    </div>
  );
}

export default HomeMostPopular;
