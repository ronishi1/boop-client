import React 	from 'react';
import { Link } from "react-router-dom";
import { DELETE_CONTENT } from '../../cache/mutations';

const WorkListEntry = ({contentID,seriesTitle,contentType,published,deleteContentCallback}) => {
  // Work card is each individual document on the google drive esque page
  let badge;
  if(contentType == "C"){
    badge = <div className="badge text-xs border-none bg-comic mr-1">Comic</div>;
  }
  else {
    badge = <div className="badge text-xs border-none bg-story mr-1">Story</div>
  }

  return (
    <div className="flex flex-row items-center text-zinc-500 justify-between p-2 mr-5 border-base-content-10 border-b-2 hover:cursor-default hover:bg-zinc-200">
      <Link to={`/content-management/${contentID}`}>
        <div className="text-sm mr-1 truncate hover:cursor-pointer hover:text-zinc-700">
          {seriesTitle}
        </div>
      </Link>
      <div className="flex flex-row items-center space-x-1">
        {badge}
        {published ?
          <div className="badge text-xs border-none bg-forum">Published</div>
        :
          <div className="badge text-xs border-none bg-[#dcc08f]">Unpublished</div>
        }
        <div className="cursor-pointer" onClick={() => deleteContentCallback(contentID)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-red-400 stroke-2" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </div>
        </div>
    </div>
  );
}

export default WorkListEntry;
