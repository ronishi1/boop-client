import React from 'react';
import BrowseTrending from './BrowseTrending';
import BrowsePopular from './BrowsePopular';
import BrowseTopRated from './BrowseTopRated'
import FilterDropDown from './FilterDropDown';

const BrowseScreen = () => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=293%3A1849
  return (
    <div className="container mx-auto">
      <div className="flex flex-row space-x-4">
        <FilterDropDown />
        <FilterDropDown />
        <FilterDropDown />
        <FilterDropDown />
      </div>
      <BrowseTrending />
      <br />
      <BrowsePopular />
      <br />
      <BrowseTopRated />
    </div>
  );
}

export default BrowseScreen;
