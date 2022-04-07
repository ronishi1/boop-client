import React, { useState } from 'react';
import ChapterTable from './ChapterTable';
import DiscussionPost from './DiscussionPost';
import PopularPost from './PopularPost';

const ContentInfoScreen = () => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=311%3A1266
  const [favorited, toggleFavorite] = useState(false);
  const [bookmarked, toggleBookmark] = useState(false);
  const [followed, toggleFollow] = useState(false);
  const [rating, setRating] = useState(0);
  const link = "localhost:3000/"
  const id = "";

  const ratings = [1,2,3,4,5,6,7,8,9,10];
  const data = {
      title: "Kaguya-sama Love Is War",
      author: "Aka Akasaka",
      current_rating: 8.8,
      cover_image: "http://animeushi.com/wp-content/uploads/2018/07/kaguyasama.jpg",
      content_type: "C",
      synopsis: "Considered a genius due to having the highest grades in the country, Miyuki Shirogane leads the prestigious Shuchiin Academy's student council as its president, working alongside the beautiful and wealthy vice president Kaguya Shinomiya. The two are often regarded as the perfect couple by students despite them not being in any sort of romantic relationship. However, the truth is that after spending so much time together, the two have developed feelings for one another; unfortunately, neither is willing to confess, as doing so would be a sign of weakness. With their pride as elite students on the line, Miyuki and Kaguya embark on a quest to do whatever is necessary to get a confession out of the other. Through their daily antics, the battle of love begins!",
      views: 1000,
      favorites: 100,
      chapter_count: 10,
      completion_status: true,
      genres: ["Comedy", "Romance"],
      chapters: [{
        title: "Chapter Title",
        publication_date: new Date(2018, 11, 24),
      }],
      forumPosts:[{
        title:"Discussion Post",
        cover_image:"http://animeushi.com/wp-content/uploads/2018/07/kaguyasama.jpg",
        author:"AutoMod",
        publication_date:new Date(2022, 3, 20, 0, 24),
      },{
        title:"Most Popular Post",
        cover_image:"https://www.manga-sanctuary.com/v10_good/public/img/objet/origin/322709.jpg",
        author:"User1",
        publication_date:new Date(2022, 3, 24, 14, 11),
      }]
  };

  const handleFavorite = async () => {
    toggleFavorite(!favorited);
  }

  const handleBookmark = async () => {
    toggleBookmark(!bookmarked);
  }

  const handleFollow = async () => {
    toggleFollow(!followed);
  }

  const handleRate = async (rating) => {
    setRating(rating);
  }
  // sharing just copies link to clipboard
  const handleShare = async () => {
    await navigator.clipboard.writeText(link+"info/"+id);
  }

  const duplicateChapters = () => {
    let duplicatedChapters = []
    for(let i =0; i< 20; i++){
      duplicatedChapters.push(data.chapters[0])
    }
    return duplicatedChapters;
  }

  const getContentColoredText = (text) => {
    switch(data.content_type) {
      case "C":
        return (<p class="text-comic">{text}</p>);
      case "S":
        return (<p class="text-story">{text}</p>);
      default:
        return;
    } 
  }

  return (
    <div className="flex place-content-center">
      <div className="card w-288 h-192 bg-base-100 shadow-xl bg-secondary-content 
        grid grid-rows-6 grid-cols-6">
          <div className="card-title row-start-1 row-end-2 col-span-full p-5 border-b-2
          align-center">
            {getContentColoredText(data.title)}
          </div>
          <div className="card-body row-start-2 row-end-4 col-start-1 col-end-3 border-r-2
          px-4 py-4">
            <figure className="h-full">
              <img className="h-full object-contain" src={data.cover_image} alt="cover art"/>
            <div className="self-start pt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer h-5 w-5 hover:opacity-70" fill={favorited ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" onClick={handleFavorite}>
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer h-5 w-5 hover:opacity-70" fill={bookmarked ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" onClick={handleBookmark}>
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer h-5 w-5 hover:opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" onClick={handleShare}>
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </div>
            </figure>
          </div>
          <div className="card-body card-compact row-start-4 row-end-7 col-start-1 col-end-3 border-r-2
          pt-0 px-5">
            <div className="card-body rounded-none max-h-48 overflow-y-auto">
              <p className="text-xs">{data.synopsis}</p>
            </div>
            <div className="card-body">
              <p className="text-xs">Views: {data.views}</p>
              <p className="text-xs">Favorites: {data.favorites}</p>
              <p className="text-xs">Chapters: {data.chapter_count}</p>
              <p className="text-xs">Completion Status: {data.completion_status ? "Complete" : "Incomplete"}</p>
              <p className="text-xs">Genres: {data.genres.toString()}</p>
            </div>
          </div>
          <div className="card-body row-start-2 row-end-3 col-start-3 col-end-5 border-b-2 flex-row items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer h-6 w-6 hover:opacity-70" fill={followed ? "currentColor": "none"} viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" onClick={handleFollow}>
              <path stroke-linecap="round" stroke-linejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
            Author: {data.author}
          </div>
          <div className="card-body row-start-2 row-end-3 col-start-5 col-end-7 border-b-2 flex-col items-center justify-end">
            Rating: {data.current_rating}/10
            <div class="dropdown">
              <label tabindex="0" className="select select-bordered h-8 min-h-0 w-28">
                {rating==0 ? "Rate" : rating}
              </label>
              <ul tabindex="0" class="dropdown-content absolute z-10 mt-2 border-solid border-2 menu bg-base-100 w-28 rounded-box overflow-auto max-h-88">
                {ratings.map((rating) => {
                  return <li><a className="text-sm py-1.5 h-8 hover:bg-gray-400/25" onClick={() => {handleRate(rating)}}>{rating}</a></li>
                })}
                
              </ul>
            </div>
          </div>
          <div className="card-body row-start-3 row-end-6 col-start-3 col-end-7">
          {/* DUPLICATE CHAPTERS TESTING PURPOSES ONLY */}
            <ChapterTable chapters={duplicateChapters()}/>
          </div>
          <div className="card-body row-start-6 row-end-7 col-start-3 col-end-5 border-t-2 p-4">
            <DiscussionPost post={data.forumPosts[0]}/>
          </div>
          <div className="card-body row-start-6 row-end-7 col-start-5 col-end-7 border-t-2 p-4">
            <PopularPost post={data.forumPosts[1]}/>
          </div>
      </div>
    </div>
  );
}

export default ContentInfoScreen;
