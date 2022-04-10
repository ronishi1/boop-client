import React 	from 'react';
import {Link} from 'react-router-dom'
const ChapterTableEntry = ({chapter}) => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=311%3A3160
  return (
    <Link to="/view">
      <div className={"flex flex-row hover:cursor-pointer hover:bg-gray-400/25"}>
        <p>{chapter.title}</p>
        <p className="text-right pr-4">{chapter.publication_date.getMonth()+"/"
        +chapter.publication_date.getDay()+"/"+chapter.publication_date.getFullYear()}</p>
      </div>
    </Link>
  );
}

export default ChapterTableEntry;
