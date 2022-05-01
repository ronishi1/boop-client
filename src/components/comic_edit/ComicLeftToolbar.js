import React from 'react';

const ComicLeftToolbar = ({tool, setTool}) => {  
  return (
    <div className='p-4 space-y-2 grid grid-cols-1 auto-rows-max' style={{boxShadow: "1px 1px 0 0 rgb(0 0 0 / 0.1)"}}>
      <div 
        className={'tooltip tooltip-right p-2 hover:cursor-pointer hover:bg-gray-200 rounded '+(tool=="pen" ? "bg-gray-300" : "")}
        data-tip="Pen (p)"
        onClick={() => setTool("pen")}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6 "
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          strokeWidth="2"
        >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      </div>

      <div 
        className={'tooltip tooltip-right p-2 hover:cursor-pointer hover:bg-gray-200 rounded '+(tool=="eraser" ? "bg-gray-300" : "")}
        data-tip="Eraser (e)"
        onClick={() => setTool("eraser")}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z" />
        </svg>
      </div>

      <div 
        className={'tooltip tooltip-right p-2 text-center hover:cursor-pointer hover:bg-gray-200 rounded '+(tool=="text" ? "bg-gray-300" : "")}
        data-tip="Text (t)"
        onClick={() => setTool("text")}
      >
        T
      </div>
      {/* <div 
        className={'tooltip tooltip-right p-2 hover:cursor-pointer hover:bg-gray-200 rounded '+(tool=="dropper" ? "bg-gray-300" : "")}
        data-tip="Eyedropper (d)"
        onClick={() => setTool("dropper")}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      </div> */}
      
    </div>
  );
};

export default ComicLeftToolbar;
