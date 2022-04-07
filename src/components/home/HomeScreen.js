import React, {useState}	from 'react';
import HomeRecentlyReleased from './HomeRecentlyReleased';
import HomeMostPopular from './HomeMostPopular';
import HomeTopRated from './HomeTopRated';
import HomeReadList from './HomeReadList';

const HomeScreen = () => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=207%3A324
  // temporarily going to use state to flip between logged in and logged out
  const [loginStatus,setLoginStatus] = useState(false);
  return (
    <div className="container mx-auto">
      <button className="btn" onClick={() => {setLoginStatus(!loginStatus)}}>SWITCH LOGIN STATUS</button>
      {loginStatus ? <HomeReadList /> : <></>}
      <HomeMostPopular />
      <HomeTopRated />
      <HomeRecentlyReleased />
    </div>
  );
}

export default HomeScreen;
