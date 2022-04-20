import React 	from 'react';
import {Link} from 'react-router-dom';
import { GET_CONTENT_CHAPTER } from '../../cache/queries';
import {useQuery} from '@apollo/client'
const ChapterEntry = ({chapterID,contentType}) => {
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
  if(chapter.publication_date){
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
    <Link to={link}>
      <div className="flex flex-row justify-between border-b-2 border-base-content/10 hover:cursor-pointer hover:bg-gray-400/25">
        <p>{chapter.chapter_title}</p>
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
  ) : <div>Loading...</div>
}

export default ChapterEntry;
