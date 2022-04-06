import React 	from 'react';

const ChapterTableEntry = ({chapter, contentColor}) => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=311%3A3160
  return (
    <div className={"flex flex-row hover:cursor-pointer hover:opacity-70 hover:bg-"+contentColor}>
      <p>{chapter.title}</p>
      <p className="text-right pr-4">{chapter.publication_date.getMonth()+"/"
      +chapter.publication_date.getDay()+"/"+chapter.publication_date.getFullYear()}</p>
    </div>
  );
}

export default ChapterTableEntry;
