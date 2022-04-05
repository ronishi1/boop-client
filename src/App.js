import React 	from 'react';
import './css/App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import BrowseScreen from './components/browse/BrowseScreen';
import ContentInfoScreen from './components/content_info/ContentInfoScreen';
import ContentViewScreen from './components/content_view/ContentViewScreen';
import CreatorStudioScreen from './components/creator_studio/CreatorStudioScreen';
import ForumCreateScreen from './components/forum_create/ForumCreateScreen';
import ForumEditScreen from './components/forum_edit/ForumEditScreen';
import ForumHomeScreen from './components/forum_home/ForumHomeScreen';
import ForumManagementScreen from './components/forum_management/ForumManagementScreen';
import ForumPostScreen from './components/forum_post/ForumPostScreen';
import ForumTopicScreen from './components/forum_topic/ForumTopicScreen';
import HomeScreen from "./components/home/HomeScreen";
import LandingScreen from './components/landing/LandingScreen';
import ProfileScreen from './components/profile/ProfileScreen';
import UpdateAccountScreen from './components/update_account/UpdateAccountScreen';

// nav and sidebar, might also move or do something else with but will keep explicit path for dev purposes
import NavBar from './components/navbar/NavBar';
import SideBar from './components/sidebar/SideBar';

// modals (to get rid of after dev, since they are modals that should load from navbar for example)
import Login from './components/modals/Login';
import SignUp from './components/modals/SignUp';
import ResetPassword from './components/modals/ResetPassword';



// FOR DEV PURPOSES DEFINITELY DELETE AFTER
import Dev from './Dev';
import StoryEditScreen from './components/story_edit/StoryEditScreen';
const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/browse" element={<BrowseScreen />} />
        <Route path="/info" element={<ContentInfoScreen />} />
        <Route path="/view" element={<ContentViewScreen />} />
        <Route path="/studio" element={<CreatorStudioScreen />} />
        <Route path="/forum-create" element={<ForumCreateScreen />} />
        <Route path="/forum-edit" element={<ForumEditScreen />} />
        <Route path="/forum-home" element={<ForumHomeScreen />} />
        <Route path="/forum-management" element={<ForumManagementScreen />} />
        <Route path="/post" element={<ForumPostScreen />} />
        <Route path="/topic" element={<ForumTopicScreen />} />
        <Route path="/landing" element={<LandingScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/update-account" element={<UpdateAccountScreen />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/resetpassword" element={<ResetPassword />} />

        <Route path="/dev" element={<Dev />} />

        <Route path="/storyedit" element={<StoryEditScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
