import React 	from 'react';
import { Link } from 'react-router-dom';

const ComicViewScreen = ({handleSeries, chapter, currentChapter, chapterTitles,
  chapterIds, handleChapter, currentPage, pageDropdown, handleSelectPage}) => {
  // Might get rid of page select? also maybe change this format or story view format to match since it's weird
  // to have them have different designs
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=314%3A2148
  return (
    <div>
      <div className="flex justify-center">
      {
        chapter.page_images !== undefined && currentPage > 0 ? 
        <div className='flex flex-row'>
          
          <div className="h-[1650px] w-[1275px] flex justify-center border-2 my-4">
            <img className="h-full object-contain" src={chapter.page_images[currentPage-1]}/>
          </div>
          
        </div>
        : 
        <div>No Image</div>
      }
    </div>
  </div>
  );
}

export default ComicViewScreen;
