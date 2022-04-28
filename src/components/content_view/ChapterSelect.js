import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ChapterSelect = ({chapter, currentChapter, chapterTitles, chapterIds, handleChapter, currentPage, pageDropdown, handleSelectPage, id, contentType}) => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=315%3A2129 
  let navigate = useNavigate();

  const handleChapterNav = (num) => {
    let i = chapterIds.indexOf(id) + num;
    navigate(`/view/${chapterIds[i]}`);
    handleChapter(chapterIds[i],chapterTitles[i]);
    handleSelectPage(1);
  }

  return (
    <div className='flex justify-between'>
      <div className="flex flex-row space-x-2">
        <div className="grid justify-self-center dropdown">
          <label tabIndex="0" className="select select-bordered h-8 min-h-0 w-full overflow-hidden">Chapter : {currentChapter}</label>
          <ul tabIndex="0" className="dropdown-content absolute z-10 mt-10 border-solid border-2 menu bg-base-100 w-full rounded-box overflow-hidden max-h-80">
            {chapterTitles.map((chapterTitle, i) => {
              return (
                <Link to={`/view/${chapterIds[i]}`}>
                <li key={i}>
                  <a
                    onClick={() => {
                      handleChapter(chapterIds[i], chapterTitle);
                      handleSelectPage(1);
                    }}
                    className="text-sm py-1.5 h-8 hover:bg-gray-400/25"
                  >
                      {chapterTitle}
                  </a>
                </li>
                </Link>
              );
            })}
          </ul>
        </div>

        {contentType === "C" && <div className="grid justify-self-end dropdown mr-4">
          <label tabIndex="0" class="select select-bordered h-8 min-h-0 w-100">Page {currentPage}</label>
          <ul tabIndex="0" class="dropdown-content absolute z-10 mt-10 border-solid border-2 menu bg-base-100 w-24 rounded-box overflow-hidden max-h-80">
            {pageDropdown.map((page, i) => {
              return (
                <li key={i}>
                  <a
                    className="text-sm py-1.5 h-8 hover:bg-gray-400/25"
                    onClick={() => {
                      handleSelectPage(i + 1);
                    }}
                  >
                    {i+1}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>}
      </div>
      <div>
        <div className="btn-group">
          {currentPage > 1 ? 
            <button 
              className={"btn btn-sm btn-outline hover:bg-gray-200 hover:text-neutral"} 
              onClick={() => {
                handleSelectPage(currentPage - 1);
              }}
            >
              Prev Page
            </button>:
            <button
              className={"btn btn-sm btn-outline hover:bg-gray-200 hover:text-neutral "+(chapterIds.indexOf(id) > 0 ? "": "btn-disabled")}
              onClick={() => handleChapterNav(-1)}
            >
              Prev Chapter
            </button>
          }

          {chapter.page_images && currentPage < chapter.page_images.length ? 
            <button
              className={"btn btn-sm btn-outline hover:bg-gray-200 hover:text-neutral"}
              onClick={() => {
                handleSelectPage(currentPage + 1);
              }}
            >
              Next Page
            </button> 
            : 
            <button
              className={"btn btn-sm btn-outline hover:bg-gray-200 hover:text-neutral "+(chapterIds.indexOf(id) < chapterIds.length-1 ? "": "btn-disabled")}
              onClick={() => handleChapterNav(1)}
            >
              Next Chapter
            </button>
          }
        </div>
      </div>
    </div>
  );
}

export default ChapterSelect;
