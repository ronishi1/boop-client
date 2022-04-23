import React, { useEffect, useState } from 'react';

const ComicTopToolbar = ({currentPage, pages, handleUndo, handleRedo, hasUndo, hasRedo, handleSelectPage, handleSave, handleAddPage, handleDeletePage}) => {

  return (
    <div className='p-4' style={{boxShadow: "0 1px 0 0 rgb(0 0 0 / 0.1)"}}>
      <div className="flex flex-row justify-between pt-2">
        <div className='space-x-4'>
          <div className="dropdown">
            <label
              tabindex="0"
              className="select select-bordered h-8 min-h-0 w-28"
            >
              Page: {currentPage}
            </label>
            <ul
              tabindex="0"
              class="dropdown-content absolute z-10 mt-2 border-solid border-2 menu bg-base-100 w-28 rounded-box overflow-auto max-h-88"
            >
              {pages.map((page, i) => {
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
          </div>
          <div className="btn cursor-pointer" onClick={handleAddPage}>Add Page</div>
          <div className={"btn cursor-pointer "+(hasUndo ? "":"btn-disabled")} onClick={handleUndo}>Undo</div>
          <div className={"btn cursor-pointer "+(hasRedo ? "":"btn-disabled") } onClick={handleRedo}>Redo</div>
        </div>

        <div className='space-x-4'>
          <div className="btn cursor-pointer" onClick={handleSave}>Save</div>
          <div className="btn cursor-pointer" onClick={handleDeletePage}>Delete Page</div>
        </div>
      </div>
    </div>
  );
};

export default ComicTopToolbar;
