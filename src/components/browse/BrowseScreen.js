import React, {useState} from 'react';
import BrowseTrending from './BrowseTrending';
import BrowsePopular from './BrowsePopular';
import BrowseTopRated from './BrowseTopRated'
import FilterDropDown from './FilterDropDown';
import BrowseFiltered from './BrowseFiltered';

const BrowseScreen = () => {
  const [genres,setGenres] = useState([]);
  const [releaseYears,setReleaseYears] = useState([]);
  const [ratings,setRatings] = useState([]);
  const [status,setStatus] = useState([]);
  const [selected,setSelected] = useState([]);
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=293%3A1849
  const dropdowns = {
    genre:{
      title: "Genre",
      options:["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Horror", "Mecha", "Music", "Mystery", "Psychological", "Romance", "SciFi", "Slice of Life", "Sports", "Supernatural", "Thriller"]
    },
    releaseYears:{
      title: "Release Year",
      options: [2022,2021,2020,2019,2018,2017],
    },
    ratings:{
      title: "Rating",
      options: [">9",">8",">7",">6",">5",">4",">3",">2",">1"]
    },
    status:{
      title: "Completion Status",
      options: ["Ongoing","Completed"]
    }
  }
  const handleSelect = (option,value) => {
    if(option == "Genre"){
      setSelected([...selected, {option:option, value:value}]);
      setGenres([...genres,value]);
    }
    else if(option == "Release Year"){
      setSelected([...selected, {option:option, value:value}]);
      setReleaseYears([...releaseYears,value]);
    }
    else if(option == "Rating"){
      setSelected([...selected.filter(selection => selection.option !== "Rating"), {option:option, value:value}]);
      setRatings([value]);
    }
    else {
      setSelected([...selected, {option:option, value:value}]);
      setStatus([...status,value]);
    }
  }

  const handleDeselect = (option,value) => {
    setSelected(selected.filter(selection => selection.value !== value));
    if(option == "Genre"){
      setGenres(genres.filter(selection => selection !== value));
    }
    else if(option == "Release Year"){
      setReleaseYears(releaseYears.filter(selection => selection !== value));
    }
    else if(option == "Rating"){
      setRatings([]);
    }
    else {
      setStatus(status.filter(selection => selection !== value));
    }
  }

  console.log(selected);
  console.log(ratings);
  return (
    <div className="container mx-auto">
      <div className="flex flex-row space-x-8">
      <FilterDropDown selectCallback={handleSelect} deselectCallback={handleDeselect} title={dropdowns.genre.title} options={dropdowns.genre.options} selected={genres}/>
      <FilterDropDown selectCallback={handleSelect} deselectCallback={handleDeselect} title={dropdowns.releaseYears.title} options={dropdowns.releaseYears.options} selected={releaseYears}/>
      <FilterDropDown selectCallback={handleSelect} deselectCallback={handleDeselect} title={dropdowns.ratings.title} options={dropdowns.ratings.options} selected={ratings} />
      <FilterDropDown selectCallback={handleSelect} deselectCallback={handleDeselect} title={dropdowns.status.title} options={dropdowns.status.options} selected={status}/>
      </div>
      {selected.length ?
        <div>
          <div className="flex flex-row space-x-4 my-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-comic stroke-white" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            {selected.map((selection) => (
              <div className="badge bg-comic border-none cursor-pointer mt-.5 p-2.5" onClick={() => handleDeselect(selection.option,selection.value)}>
                {selection.value}
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-1 h-3 w-3 stroke-2 stroke-white" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            ))}
          </div>
          <BrowseFiltered />

        </div>
      :
      <div className="mt-3">
        <BrowseTrending />
        <br />
        <BrowsePopular />
        <br />
        <BrowseTopRated />
      </div>
      }
    </div>
  );
}

export default BrowseScreen;
