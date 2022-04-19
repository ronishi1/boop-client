import React 	from 'react';
import { Link } from "react-router-dom";

const WorkCard = ({contentID,seriesTitle,contentType,published}) => {
  // Work card is each individual document on the google drive esque page
  let badge;
  if(contentType == "C"){
    badge = <div className="badge text-xs border-none bg-comic mr-1">Comic</div>;
  }
  else {
    badge = <div className="badge text-xs border-none bg-story mr-1">Story</div>
  }
  return (
    <Link to={`/content-management/${contentID}`}>
      <div className="flex flex-row items-center justify-between cursor-pointer p-2 mr-5 border-base-content-10 border-b-2">
        <div className="text-sm mr-1">
          {seriesTitle}
        </div>
        <div className="">
          {badge}
          {published ?
            <div className="badge text-xs border-none bg-forum">Published</div>
          :
            <div className="badge text-xs border-none bg-[#dcc08f]">Unpublished</div>
          }
          </div>
      </div>
    </Link>
  );
}

export default WorkCard;
