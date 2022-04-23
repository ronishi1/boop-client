import React 	from 'react';
import {Link} from 'react-router-dom'
import { INCREASE_VIEW } from '../../cache/mutations'
import { useMutation } from '@apollo/client';

const ChapterTableEntry = ({chapter, seriesId}) => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=311%3A3160
  let date = new Date(chapter.publication_date);
  console.log(chapter)
  const [IncreaseView] = useMutation(INCREASE_VIEW);

  const handleView = () => {
    IncreaseView({variables: {
        contentID: seriesId
      }});
  }
  return (
    <Link to={`/view/${chapter._id}`} onClick={handleView} >
      <div className={"flex flex-row hover:cursor-pointer hover:bg-gray-400/25"}>
        <p>{chapter.chapter_title}</p>
        <p className="text-right pr-4">{(date.getMonth()+1)+"/"
        +date.getDate()+"/"+date.getFullYear()}</p>
      </div>
    </Link>
  );
}

export default ChapterTableEntry;
