import React 	from 'react';
import {Link} from 'react-router-dom';
const ChapterEntry = ({chapter}) => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=311%3A3160
  return (
    <Link to="/comic-edit">
      <div className="flex flex-row justify-between border-b-2 border-base-content/10 hover:cursor-pointer hover:bg-gray-400/25">
        <p>{chapter.title}</p>
        {chapter.publication_date ?
          <div className="flex flex-row space-x-2 items-center">
            <p className="text-right pr-4">{chapter.publication_date.getMonth()+"/"
              +chapter.publication_date.getDay()+"/"+chapter.publication_date.getFullYear()}</p>
            <div className="badge text-xs border-none bg-forum">Published</div>
          </div>
        :
        <div>
          <div className="badge text-xs border-none bg-[#dcc08f]">Unpublished</div>
        </div>}
      </div>
    </Link>
  );
}

export default ChapterEntry;
