import React, { useState } 	from 'react';
import DetailedContentCard from './DetailedContentCard';
import { Transition } from '@headlessui/react'
import { GET_TOP_RATED_CONTENT } from '../../cache/queries'
import { useQuery } from '@apollo/client';

const HomeTopRated = () => {
  // USES DETAILED CONTENT CARD
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=273%3A835

  const [slide,setSlide] = useState(0);

  const { data, loading, refetch } = useQuery(GET_TOP_RATED_CONTENT);
  if(loading){
    return <div></div>
  }
  const topRatedContent = data.getTopRatedContent;

  // const temp = [
  //   {
  //     title: "Steel Ball Run",
  //     content_type: "C",
  //     cover_image:"https://images-na.ssl-images-amazon.com/images/I/81eLhkI1VPL.jpg",
  //     genres:["Action","Horror"],
  //     synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  //   },
  //   {
  //     title: "One Piece",
  //     content_type: "C",
  //     cover_image:"https://images-na.ssl-images-amazon.com/images/I/91NxYvUNf6L.jpg",
  //     genres:["Adventure","Fantasy"],
  //     synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  //   },
  //   {
  //     title: "Berserk",
  //     content_type: "C",
  //     cover_image: "https://static.wikia.nocookie.net/berserk/images/2/26/Manga_V1_Cover.png",
  //     genres:["Action","Adventure"],
  //     synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  //   },
  //   {
  //     title: "Vagabond",
  //     content_type: "S",
  //     cover_image:"https://images-na.ssl-images-amazon.com/images/I/71TY7kJBo9L.jpg",
  //     genres:["Action","Adventure"],
  //     synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  //   },
  //   {
  //     title: "Monster",
  //     content_type: "C",
  //     cover_image:"https://upload.wikimedia.org/wikipedia/en/thumb/0/00/Monster_manga_volume_1_cover.jpg/220px-Monster_manga_volume_1_cover.jpg",
  //     genres:["Action","Adventure"],
  //     synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  //   },
  //   {
  //     title: "Fullmetal Alchemist",
  //     content_type: "C",
  //     cover_image:"https://images-na.ssl-images-amazon.com/images/I/819gbwpjLcL.jpg",
  //     genres:["Psychological"],
  //     synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  //   },
  //   {
  //     title: "Grand Blue",
  //     content_type: "C",
  //     cover_image:"https://images-na.ssl-images-amazon.com/images/I/91nsXODFxRL.jpg",
  //     genres:["Action","Comedy"],
  //     synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  //   },
  //   {
  //     title: "Slam Dunk",
  //     content_type: "C",
  //     cover_image:"https://static.wikia.nocookie.net/slamdunk/images/7/77/Volume_1_%28English%29.jpg",
  //     genres:["Action","Adventure"],
  //     synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  //   },
  //   {
  //     title: "Vinland Saga",
  //     content_type: "S",
  //     cover_image:"https://images-na.ssl-images-amazon.com/images/I/81ePwl5Sm+L.jpg",
  //     genres:["Action","Adventure"],
  //     synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  //   },
  // ]
  
  const maxContent = 3;
  let splitContent = [];
  // split content into arrays of length=maxContent
  for (let i = 0; i < topRatedContent.length; i += maxContent){
    splitContent.push(topRatedContent.slice(i, i + maxContent)); 
  }

  return (
    <div>
      <div className="ml-10 text-2xl">Top Rated</div>
      {splitContent.map((contentChunk, index) => {
        return <Transition
          show={slide == index}
          enter="transition-opacity duration-1000"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-0"
          leaveFrom="hidden"
          leaveTo="hidden"
        >
          <div className="flex flex-row overflow-x-auto space-x-2">
            <div className="mt-[6.5rem]">
              <div className={"btn btn-circle btn-sm "+(slide == 0 ? "invisible":"")} onClick={() => {setSlide(slide-1)}}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </div>
            </div>
            {contentChunk.map((content) => (
              <DetailedContentCard title={content.title} cover={content.cover_image} genres={content.genres} synopsis={content.synopsis} type={content.content_type}/>
            ))}
            <div className="mt-[6.5rem]">
              <div className={"btn btn-circle btn-sm "+(slide == splitContent.length-1 ? "invisible" : "")} onClick={() => {setSlide(slide+1)}}>
                <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        </Transition>
      })}
    </div>
  );
}

export default HomeTopRated;
