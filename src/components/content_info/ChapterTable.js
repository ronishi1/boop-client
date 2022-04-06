import React 	from 'react';
import ChapterTableEntry from './ChapterTableEntry';

const ChapterTable = ({chapters, contentColor}) => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=311%3A3136

  return (
    <div className="card">
      <p>Chapter List</p>
      <div className="card rounded-none h-full overflow-y-auto">
        {chapters.map(chapter => (
          <ChapterTableEntry chapter={chapter} contentColor={contentColor}/>
        ))}
      </div>
    </div>
  );
}

export default ChapterTable;
