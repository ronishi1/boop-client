import React 	from 'react';
import {Link} from 'react-router-dom';
import { GET_CONTENT_CHAPTER } from '../../cache/queries';
import {useQuery} from '@apollo/client'
const ChapterEntry = ({chapterID,contentType,deleteChapterCallback}) => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=311%3A3160
  let chapter = {}
  const { loading, error, data, refetch } = useQuery(GET_CONTENT_CHAPTER, {
    variables: { chapterID:chapterID },
  });

  if(loading) { console.log(loading, 'loading'); }
  if(error) { console.log(error, 'error'); }
  if(data) {
    chapter = data.getContentChapter;
  }

  let link;
  let publicationDate = new Date(chapter.publication_date)
  let unix = new Date(null)
  if(publicationDate.getTime() !== unix.getTime()){
    link = "/view/" + chapterID
  }
  else {
    if(contentType == "C"){
      link = "/comic-edit/" + chapterID
    }
    else {
      link = "/story-edit/" + chapterID
    }
  }
  return Object.keys(chapter).length !== 0 ? (
    <div className="flex flex-row justify-between items-center border-b-2 border-base-content/10 hover:cursor-default hover:bg-zinc-200">
      <Link to={link}>
        <div className="text-sm mr-1 -mb-.5truncate hover:cursor-pointer hover:opacity-70">
          {chapter.chapter_title}
        </div>
      </Link>
      <div className="flex flex-row items-center space-x-1 mb-1">
        {publicationDate.getTime() !== unix.getTime() ?
          <div className="flex flex-row space-x-2 items-center mt-1.5">
            <p className="text-right pr-4">{publicationDate.getMonth()+"/"
              +publicationDate.getDay()+"/"+publicationDate.getFullYear()}</p>
            <div className="badge text-xs border-none bg-forum">Published</div>
          </div>
          :
          <div>
            <div className="badge text-xs border-none bg-[#dcc08f]">Unpublished</div>
          </div>}
          <div className="cursor-pointer mt-1.5" onClick={() => deleteChapterCallback(chapterID)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-red-400 stroke-2" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </div>
        </div>
      </div>
    ) : <div>Loading...</div>
  }

  export default ChapterEntry;
