import React, { useState } 	from 'react';

const GenreSelector = ({genre, initialState, contentType, selectGenreCallback}) => {
  const [select, toggleSelect] = useState(initialState);

  let color;
  switch (contentType) {
    case "C":
      color = "comic"
      break;
    case "S":
      color = "story"
      break;
    default:
  }



  return (
    <div>
      {select ?
        <div
          className={'badge border-'+color+' bg-'+color+' text-white hover:cursor-pointer hover:opacity-80'}
          onClick={() => {toggleSelect(!select);selectGenreCallback(genre)}}
        >
          {genre}
        </div>
      :
        <div
          className='badge border-gray-300 bg-white text-gray-300 hover:cursor-pointer hover:opacity-80'
          onClick={() => {toggleSelect(!select);selectGenreCallback(genre)}}
        >
          {genre}
        </div>
      }
    </div>
  );
}

export default GenreSelector;
