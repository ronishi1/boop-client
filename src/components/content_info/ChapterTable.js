import React 	from 'react';
import ChapterTableEntry from './ChapterTableEntry';
import { GET_CHAPTERS } from '../../cache/queries'
import { useQuery } from '@apollo/client';

const ChapterTable = ({chapterIds, seriesId}) => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=311%3A3136
  const { data, loading, error, refetch } = useQuery(GET_CHAPTERS, {
    variables: { chapterIDs: chapterIds },
  });

  if(loading){
    return <></>;
  }

  let chapters = data.getChapters;
  let date = new Date(null)

  chapters = chapters.filter(chapter => new Date(chapter.publication_date).getTime() !== date.getTime())

  return (
    <div className="card rounded-none">
      <p className='card-title'>Chapter List</p>
      <div className="card rounded-none h-full overflow-y-auto">
        {chapters.map(chapter => (
          
          <ChapterTableEntry chapter={chapter} seriesId={seriesId}/>
        ))}
      </div>
    </div>
  );
}

export default ChapterTable;
