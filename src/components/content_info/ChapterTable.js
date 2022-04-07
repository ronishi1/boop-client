import React 	from 'react';
import ChapterTableEntry from './ChapterTableEntry';

const ChapterTable = ({chapters}) => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=311%3A3136

  return (
    <div className="card rounded-none">
      <p className='card-title'>Chapter List</p>
      <div className="card rounded-none h-full overflow-y-auto">
        {chapters.map(chapter => (
          <ChapterTableEntry chapter={chapter}/>
        ))}
      </div>
    </div>
  );
}

export default ChapterTable;
