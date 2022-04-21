import React, { useState } from "react";
import ChapterTable from "./ChapterTable";
import DiscussionPost from "./DiscussionPost";
import PopularPost from "./PopularPost";
import { Link, useParams } from "react-router-dom";
import { GET_CONTENT_INFO, GET_USER_CONTENT_INFO } from '../../cache/queries'
import {RATE_CONTENT, ADD_CONTENT_TO_READ_LIST, ADD_CONTENT_TO_FAVORITES,
  REMOVE_CONTENT_FROM_READ_LIST, REMOVE_CONTENT_FROM_FAVORITES, FOLLOW_USER, UNFOLLOW_USER} from '../../cache/mutations'
import { useMutation, useQuery } from '@apollo/client';

const ContentInfoScreen = ({auth}) => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=311%3A1266
  const [followed, toggleFollow] = useState(false);
  let { id } = useParams();
  const ratings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  const { data:userData, loading: userLoading, error: userError, refetch: fetchUser } = useQuery(GET_USER_CONTENT_INFO);
  const { data, loading, error, refetch } = useQuery(GET_CONTENT_INFO, {
    variables: { contentID: id },
  });
  let user = userData ? userData.getCurrentUser: null;
  const [RateContent] = useMutation(RATE_CONTENT);
  const [AddContentToFavorites] = useMutation(ADD_CONTENT_TO_FAVORITES);
  const [RemoveContentFromFavorites] = useMutation(REMOVE_CONTENT_FROM_FAVORITES);
  const [AddContentToReadList] = useMutation(ADD_CONTENT_TO_READ_LIST);
  const [RemoveContentFromReadList] = useMutation(REMOVE_CONTENT_FROM_READ_LIST);
  const [FollowUser] = useMutation(FOLLOW_USER);
  const [UnfollowUser] = useMutation(UNFOLLOW_USER);

  if(loading || userLoading){
    return <></>;
  }
  
  if(error || userError){
    return <div>error</div>;
  }

  let content = data.getContentInfo;
  if(!content || (new Date(content.publication_date).getTime() == (new Date(0)).getTime())) {
    return <div className="flex place-content-center">Could not find content</div>
  }

  let contentColor = "";
  switch(content.content_type) {
    case "C":
      contentColor = "comic"
      break;
    case "S":
      contentColor = "story"
      break;
    default:
  } 

  const handleFavorite = async () => {
    if(user.favorites.includes(id)){
      await RemoveContentFromFavorites({variables: {
        contentID: id
      }})
    }
    else{
      await AddContentToFavorites({variables: {
        contentID: id
      }});
    }
    fetchUser();
  };

  const handleBookmark = async () => {
    if(user.read_list.includes(id)){
      await RemoveContentFromReadList({variables: {
        contentID: id
      }})
    }
    else {
      await AddContentToReadList({variables: {
        contentID: id
      }});
    }
    fetchUser();
  };

  const handleFollow = async () => {
    if(user.following.includes(content.author)){
      await UnfollowUser({variables: {
        followID: content.author
      }});
    }
    else {
      await FollowUser({variables: {
        followID: content.author
      }});
    }
    fetchUser();
  };

  const handleRate = async (rating) => {
    await RateContent({ variables: {
      contentID: id,
      rating: rating
    }});
    fetchUser();
    refetch();
  };
  // sharing just copies link to clipboard
  const handleShare = async () => {
    let temp = document.createElement('input'),
    text = window.location.href;
    document.body.appendChild(temp);
    temp.value = text;
    temp.select();
    await navigator.clipboard.writeText(temp.value);
    document.body.removeChild(temp);
  };

  return (
    <div className="flex place-content-center">
      <div
        className="card static w-288 h-192 bg-base-100 shadow-xl bg-secondary-content
        grid grid-rows-6 grid-cols-6"
      >
        <div
          className="card-title row-start-1 row-end-2 col-span-full p-5 border-b-2
          align-center"
        >
          <p class={"text-2xl text-"+contentColor}>{content.series_title}</p>
        </div>
        <div
          className="card-body row-start-2 row-end-4 col-start-1 col-end-3 border-r-2
          px-4 py-4"
        >
          <figure className="h-full">
            <img
              className="h-56 w-40 object-cover"
              src={content.cover_image}
              alt="cover art"
            />
            {auth && user ? <div className="self-start pt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer h-7 w-7 hover:opacity-70"
                fill={user.favorites && user.favorites.includes(id) ? "currentColor" : "none"}
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                onClick={handleFavorite}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer h-7 w-7 hover:opacity-70"
                fill={user.read_list && user.read_list.includes(id) ? "currentColor" : "none"}
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                onClick={handleBookmark}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer h-7 w-7 hover:opacity-70"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                onClick={handleShare}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
            </div> : <></>}
          </figure>
        </div>
        <div
          className="card-body card-compact row-start-4 row-end-7 col-start-1 col-end-3 border-r-2
          pt-0 px-5"
        >
          {/* Either start from beginning or continue */}
          <button
            className={"w-full text-white font-bold border border-comic hover:opacity-70 py-2 px-2 mr-4 rounded bg-"+contentColor}
          >
            Read
          </button>
          <div className="card-body rounded-none max-h-48 overflow-y-auto">
            <p className="text-xs">{content.synopsis}</p>
          </div>
          <div className="card-body">
            <p className="text-xs">Views: {content.views}</p>
            {/* <p className="text-xs">Favorites: {content.favorites}</p> */}
            <p className="text-xs">Chapters: {content.num_chapters}</p>
            <p className="text-xs">
              Completion Status:{" "}
              {content.completion_status ? "Complete" : "Incomplete"}
            </p>
            <div className="text-xs flex flex-wrap space-x-1">Genres: {content.genres.map((genre) => {
              return <div>{genre}</div>
            })}</div>
          </div>
        </div>
        <div className="card-body row-start-2 row-end-3 col-start-3 col-end-5 border-b-2 flex-row items-center">
          {auth && user ? <svg
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer h-6 w-6 hover:opacity-70"
            fill={user.following && user.following.includes(content.author) ? "currentColor" : "none"}
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            onClick={handleFollow}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
            />
          </svg> : <></>}
          <Link className="text-link"to={`/profile/${content.author_username}`}>
            Author: {content.author_username}
          </Link>
        </div>
        <div className="card-body row-start-2 row-end-3 col-start-5 col-end-7 border-b-2 flex-row items-center justify-center">
          <div className="flex flex-col">
            Rating: {content.current_rating}/10
            {auth && user ? <div class={"dropdown"}>
              <label
                tabIndex="0"
                className="select select-bordered h-8 min-h-0 w-28"
              >
                {user.rated_content && user.rated_content.find(c => c.content_ID ===id) ? user.rated_content.find(c => c.content_ID ===id).rating : "Rate" }
              </label>
              <ul
                tabIndex="0"
                class="dropdown-content absolute z-10 mt-2 border-solid border-2 menu bg-base-100 w-28 rounded-box overflow-auto max-h-88"
              >
                {ratings.map((rating) => {
                  return (
                    <li>
                      <a
                        className="text-sm py-1.5 h-8 hover:bg-gray-400/25"
                        onClick={() => {
                          handleRate(rating);
                        }}
                      >
                        {rating}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div> : <></>}
          </div>
        </div>
        <div className="card-body row-start-3 row-end-6 col-start-3 col-end-7">
          <ChapterTable chapterIds={content.chapters} />
        </div>
        <div className="card-body row-start-6 row-end-7 col-start-3 col-end-5 border-t-2 p-4">
          <DiscussionPost post={content.discussion_post} coverImage={content.cover_image}/>
        </div>
        {/* <div className="card-body row-start-6 row-end-7 col-start-5 col-end-7 border-t-2 p-4">
          <PopularPost post={content.discussion_post} />
        </div> */}
      </div>
    </div>
  );
};

export default ContentInfoScreen;
