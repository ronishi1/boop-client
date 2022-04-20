import React, { useState,useEffect } 	from 'react';
import DetailedContentCard from './DetailedContentCard';
import { Transition } from '@headlessui/react'
import { GET_TOP_RATED_CONTENT } from '../../cache/queries'
import { useQuery } from '@apollo/client';

const HomeTopRated = () => {
  // USES DETAILED CONTENT CARD
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=273%3A835

  const [slide,setSlide] = useState(0);

  const { data, loading, refetch } = useQuery(GET_TOP_RATED_CONTENT);

  useEffect(() => {
    refetch();
  },[])

  if(loading){
    return <div></div>
  }
  const topRatedContent = data.getTopRatedContent;

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
            <div className={"grid grid-cols-"+maxContent}>
              {contentChunk.map((content) => (
                <DetailedContentCard id={content._id} title={content.series_title} cover={content.cover_image} genres={content.genres} synopsis={content.synopsis} type={content.content_type}/>
              ))}
            </div>
            
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
