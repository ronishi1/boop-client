import React, { useState } from "react";
import SearchEntry from "./SearchEntry";
import { useParams } from 'react-router-dom';
import { GET_SEARCH } from '../../cache/queries'
import { useQuery } from '@apollo/client';
import Loading from '../loading/Loading';
const SearchScreen = () => {
  let {search_term} = useParams();
  let results = [];
  console.log(search_term)
  const [comic, toggleComic] = useState(true);
  const [story, toggleStory] = useState(true);
  const [forumPost, toggleForumPost] = useState(true);
  const [searchResults, setResults] = useState([]);
  const [filterOptions, setFilter] = useState(new Set(["C", "S", "F"]));

  const { loading, error, data, refetch } = useQuery(GET_SEARCH, {
      variables: {searchTerm: search_term}
    });

  if(data){
    results = data.getSearch;
    console.log(results);
  }

  const handleClick = (contentType) => {
    if (contentType == "C") {
      if (comic) {
        filterOptions.delete("C");
      } else {
        filterOptions.add("C");
      }
      toggleComic(!comic);
    } else if (contentType == "S") {
      if (story) {
        filterOptions.delete("S");
      } else {
        filterOptions.add("S");
      }
      toggleStory(!story);
    } else if (contentType == "F") {
      if (forumPost) {
        filterOptions.delete("F");
      } else {
        filterOptions.add("F");
      }
      toggleForumPost(!forumPost);
    }
  };
  if(loading){
    return <Loading />
  }
  // return <div>test</div>
  return (
    <div className="container mx-auto">
      <div class="w-full flex flex-row items-center justify-between">
        <div className="text-lg">
          Search Results for <strong>{search_term}</strong>
        </div>
        <div>
          <button
            className={`${
              comic == true
                ? "bg-comic text-white"
                : "bg-transparent text-comic"
            }  font-bold border border-comic hover:opacity-70 py-2 px-2 mr-4 rounded`}
            onClick={() => handleClick("C")}
          >
            Comic
          </button>
          <button
            className={`${
              story == true
                ? "bg-story text-white"
                : "bg-transparent text-story"
            } font-bold border border-story hover:opacity-70 py-2 px-2 mr-4 rounded`}
            onClick={() => handleClick("S")}
          >
            Story
          </button>
          <button
            className={`${
              forumPost == true
                ? "bg-forum text-white"
                : "bg-transparent text-forum"
            } font-bold border border-forum hover:opacity-70 py-2 px-2 mr-4 rounded`}
            onClick={() => handleClick("F")}
          >
            Forum Post
          </button>
        </div>
      </div>
      {results.length == 0 ? <div className="text-gray-400 text-xl">There are no results for the search term {search_term}.</div> : <></>}

      <div className="grid gap-3 lg:grid-cols-3 mt-3">
        {results
          .filter((result) => {
            return filterOptions.has(result.content_type);
          })
          .map((result, i) => (
            <SearchEntry
              key={i}
              content={result}
            />
          ))}
      </div>
    </div>
  );
};

export default SearchScreen;
