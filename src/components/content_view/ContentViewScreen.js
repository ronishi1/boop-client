import React, {useState, useEffect} from 'react';
import { useParams, Link} from 'react-router-dom';
import { GET_CHAPTER_VIEW } from '../../cache/queries';
import { useNavigate } from 'react-router-dom';
import { useLazyQuery } from '@apollo/client';
import StoryViewScreen from './StoryViewScreen';
import ComicViewScreen from './ComicViewScreen';
import ChapterSelect from './ChapterSelect';

const ContentViewScreen = () => {
  let navigate = useNavigate();

  const { id } = useParams();
  // const { loading, error, data, refetch } = useQuery(GET_CHAPTER_VIEW, {
  //   variables: { chapterID:id },
  // });
  const [GetChapterView, { loading, error, data, refetch }] = useLazyQuery(GET_CHAPTER_VIEW);
  const [chapter, setChapter] = useState({})
  const [chapterTitles, setChapterTitles] = useState([])
  const [pageDropdown, setPageDropdown] = useState([])
  const [chapterIds, setChapterIds] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [currentChapter, setCurrentChapter] = useState("")

  useEffect(() => {
    fetchData();
  },[currentChapter]);

  async function fetchData() {
    let result = await GetChapterView({variables: {chapterID:id}});
    
    let temp = [];
    for (var i = 0; i < result.data.getChapterView.chapter.page_images.length; i++) {
      console.log("HIT")
      temp.push(i+1)
    }
    setPageDropdown(temp);
    setChapter(result.data.getChapterView.chapter);
    setChapterTitles(result.data.getChapterView.chapter_titles)
    setChapterIds(result.data.getChapterView.chapter_ids)
    setCurrentChapter(result.data.getChapterView.chapter.chapter_title)

    // console.log(pageBackground)
  }
  
  // Conditionally render ComicViewScreen or StoryViewScreen depending on what the content pulled was
  const [seriesTitle, setSeriesTitle] = useState("One Punch Man")
  const [chapterTitle, setChapterTitle] = useState("The Return of the S Tier Hero")
  const [contentType, setContent] = useState("S")

  const handleChapter = (objectId, chapterTitle) => {
    // console.log(objectId);
    
    // setCurrentPage(1)
    // navigate(`/view/${objectId}`);
    setCurrentChapter(chapterTitle);
    // fetchData();
  }

  const handleSelectPage = (page) => {
    setCurrentPage(page)
  }
  const handleSeries = () => {
    navigate(`/info/${chapter.series_id}`);
  }
  return (
    <div className='flex flex-col'>
      <div className='flex place-content-center'>
        <div className='flex flex-col w-2/3'>
          <div className=''>
            Series Title: <strong className="cursor-pointer" onClick={handleSeries}>{chapter.series_title}</strong>
          </div>
          <ChapterSelect chapter={chapter} currentChapter={currentChapter} chapterTitles={chapterTitles} id={id} chapterIds={chapterIds} handleChapter={handleChapter} currentPage={currentPage}
          pageDropdown={pageDropdown} handleSelectPage={handleSelectPage}/>
        </div>
      </div>
      {chapter.content_type === "S"? 
        <StoryViewScreen seriesTItle={seriesTitle} chapter={chapter}/> 
        :
        <ComicViewScreen handleSeries={handleSeries} chapter={chapter} currentChapter={currentChapter} chapterTitles={chapterTitles}
          chapterIds={chapterIds} handleChapter={handleChapter} currentPage={currentPage} pageDropdown={pageDropdown} handleSelectPage={handleSelectPage}/>
      }
      <div className='flex place-content-center'>
        <div className='flex flex-col w-2/3'>
          <ChapterSelect chapter={chapter} currentChapter={currentChapter} chapterTitles={chapterTitles} id={id} chapterIds={chapterIds} handleChapter={handleChapter} currentPage={currentPage}
          pageDropdown={pageDropdown} handleSelectPage={handleSelectPage}/>
        </div>
      </div>
    </div>
  );
}

export default ContentViewScreen;
