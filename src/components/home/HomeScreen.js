import React, {useState}	from 'react';
import HomeRecentlyReleased from './HomeRecentlyReleased';
import HomeMostPopular from './HomeMostPopular';
import HomeTopRated from './HomeTopRated';
import HomeReadList from './HomeReadList';

const HomeScreen = ({auth, user}) => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=207%3A324
  return (
    <div className="container mx-auto">
      <div className="grid grid-flow-row auto-rows-max gap-6">
        <div>
          {auth && user ? <HomeReadList user={user}/> : <></>}
        </div>
        <div className="h-64">
          <HomeMostPopular />
        </div>
        <div className="h-64">
          <HomeTopRated />
        </div>
        <div className="h-64 overflow-x-auto">
          <HomeRecentlyReleased />
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
