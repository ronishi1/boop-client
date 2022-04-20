import React 	from 'react';
import {Link} from 'react-router-dom'
const ChapterTableEntry = ({chapter}) => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=311%3A3160
  let date = new Date(chapter.publication_date);

  return (
    <Link to="/view">
      <div className={"flex flex-row hover:cursor-pointer hover:bg-gray-400/25"}>
        <p>{chapter.chapter_title}</p>
        <p className="text-right pr-4">{date.getMonth()+"/"
        +date.getDay()+"/"+date.getFullYear()}</p>
      </div>
    </Link>
  );
}

export default ChapterTableEntry;
