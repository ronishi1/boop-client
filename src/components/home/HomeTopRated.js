import React, {useState} 	from 'react';
import DetailedContentCard from './DetailedContentCard';
import { Transition } from '@headlessui/react'

const HomeTopRated = () => {
  // USES DETAILED CONTENT CARD
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=273%3A835

  const [first,setFirst] = useState(true);
  const [second,setSecond] = useState(false);
  const [third,setThird] = useState(false);

  const [slide,setSlide] = useState({first:true,second:false,third:false});

  // ASSUMES THAT THERE ARE 9 TOP RATED RETURNED IN THE QUERY
  // ASSUMES THAT THERE ARE 9 TOP RATED RETURNED IN THE QUERY
  // ASSUMES THAT THERE ARE 9 TOP RATED RETURNED IN THE QUERY
  // ASSUMES THAT THERE ARE 9 TOP RATED RETURNED IN THE QUERY
  // ASSUMES THAT THERE ARE 9 TOP RATED RETURNED IN THE QUERY
  // ASSUMES THAT THERE ARE 9 TOP RATED RETURNED IN THE QUERY
  // ASSUMES THAT THERE ARE 9 TOP RATED RETURNED IN THE QUERY
  const data = [
    {
      title: "Steel Ball Run",
      cover_image:"https://images-na.ssl-images-amazon.com/images/I/81eLhkI1VPL.jpg",
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
      title: "Berserk",
      cover_image: "https://static.wikia.nocookie.net/berserk/images/2/26/Manga_V1_Cover.png",
      genres:["Action","Adventure"],
      synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      title: "Vagabond",
      cover_image:"https://images-na.ssl-images-amazon.com/images/I/71TY7kJBo9L.jpg",
      genres:["Action","Adventure"],
      synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      title: "Monster",
      cover_image:"https://upload.wikimedia.org/wikipedia/en/thumb/0/00/Monster_manga_volume_1_cover.jpg/220px-Monster_manga_volume_1_cover.jpg",
      genres:["Action","Adventure"],
      synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      title: "Fullmetal Alchemist",
      cover_image:"https://images-na.ssl-images-amazon.com/images/I/819gbwpjLcL.jpg",
      genres:["Psychological"],
      synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      title: "Grand Blue",
      cover_image:"https://images-na.ssl-images-amazon.com/images/I/91nsXODFxRL.jpg",
      genres:["Action","Comedy"],
      synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      title: "Slam Dunk",
      cover_image:"https://static.wikia.nocookie.net/slamdunk/images/7/77/Volume_1_%28English%29.jpg",
      genres:["Action","Adventure"],
      synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      title: "Vinland Saga",
      cover_image:"https://images-na.ssl-images-amazon.com/images/I/81ePwl5Sm+L.jpg",
      genres:["Action","Adventure"],
      synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
  ]
  return (
    <div>
      <div className="ml-10 text-2xl">Top Rated</div>
        <Transition
          show={slide.first}
          enter="transition-opacity duration-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-0"
          leaveFrom="hidden"
          leaveTo="hidden"
          >
          <div className="flex flex-row overflow-x-scroll space-x-2 ml-10">
            {data.slice(0,3).map((content) => (
              <DetailedContentCard title={content.title} cover={content.cover_image} genres={content.genres} synopsis={content.synopsis} />
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
        <div className="flex flex-row overflow-x-scroll space-x-2">
          <div className="mt-[6.5rem]">
            <div className="btn btn-circle btn-sm" onClick={() => {setSlide({first:true,second:false,third:false})}}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </div>
          </div>
          {data.slice(3,6).map((content) => (
            <DetailedContentCard title={content.title} cover={content.cover_image} genres={content.genres} synopsis={content.synopsis} />
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
        <div className="flex flex-row overflow-x-scroll space-x-2 mr-10">
          <div className="mt-[6.5rem]">
            <div className="btn btn-circle btn-sm" onClick={() => {setSlide({first:false,second:true,third:false})}}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </div>
          </div>
          {data.slice(6,9).map((content) => (
            <DetailedContentCard title={content.title} cover={content.cover_image} genres={content.genres} synopsis={content.synopsis} />
          ))}
        </div>
      </Transition>
    </div>
  );
}

export default HomeTopRated;
