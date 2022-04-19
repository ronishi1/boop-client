import React, {useState} from "react";
import "./css/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BrowseScreen from "./components/browse/BrowseScreen";
import ContentInfoScreen from "./components/content_info/ContentInfoScreen";
import ContentViewScreen from "./components/content_view/ContentViewScreen";
import CreatorStudioScreen from "./components/creator_studio/CreatorStudioScreen";
import ForumCreateScreen from "./components/forum_create/ForumCreateScreen";
import ForumEditScreen from "./components/forum_edit/ForumEditScreen";
import ForumHomeScreen from "./components/forum_home/ForumHomeScreen";
import ForumManagementScreen from "./components/forum_management/ForumManagementScreen";
import ForumPostScreen from "./components/forum_post/ForumPostScreen";
import ForumTopicScreen from "./components/forum_topic/ForumTopicScreen";
import HomeScreen from "./components/home/HomeScreen";
import LandingScreen from "./components/landing/LandingScreen";
import ProfileScreen from "./components/profile/ProfileScreen";
import UpdateAccountScreen from "./components/update_account/UpdateAccountScreen";
import SearchScreen from "./components/search/SearchScreen"
import FavoritesScreen from './components/profile_lists/FavoritesScreen';
import ReadListScreen from './components/profile_lists/ReadListScreen';
import AboutScreen from './components/about/AboutScreen';
import HelpScreen from './components/help/HelpScreen';
import ContentManagementScreen from './components/content_management/ContentManagementScreen'
import ResetPasswordScreen from './components/reset_password/ResetPasswordScreen';

// nav and sidebar, might also move or do something else with but will keep explicit path for dev purposes
import NavBar from "./components/navbar/NavBar";
import SideBar from "./components/sidebar/SideBar";

// modals (to get rid of after dev, since they are modals that should load from navbar for example)
import Login from "./components/modals/Login";
import Register from "./components/modals/Register";
import ResetPassword from "./components/modals/ResetPassword";

// FOR DEV PURPOSES DEFINITELY DELETE AFTER
import Dev from "./Dev";
import StoryEditScreen from "./components/story_edit/StoryEditScreen";
import ComicEditScreen from "./components/comic_edit/ComicEditScreen";
import DeleteContentModal from "./components/modals/DeleteContentModal";
import DeleteAccountModal from "./components/update_account/DeleteAccountModal";
import DeleteForumModal from "./components/modals/DeleteForumModal";
import CancelPostModal from "./components/modals/CancelPostModal";
import BoardAddModal from "./components/storyboardModals/BoardAddModal";
import BoardEditModal from "./components/storyboardModals/BoardEditModal";

import { useMutation, useQuery } 		from '@apollo/client';
import { GET_CURRENT_USER } 				from './cache/queries';

const App = () => {
  let user = null;
  const { loading, error, data, refetch } = useQuery(GET_CURRENT_USER);
  if(error) { console.log(error); }
  if(loading) { console.log(loading); }
  if(data) {
    let { getCurrentUser } = data;
    if(getCurrentUser !== null) { user = getCurrentUser; }
  }
  const auth = user === null ? false : true;

  // Might be replacing this into a constant variable later when we incorporate the get_current_user query
  // const [auth,setAuth] = useState(false);

  // MODAL CODE
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);

  const toggleLoginCallback = (show) => {
    setShowLogin(show);
    if(show){
      setShowRegister(false)
    }
  }

  const toggleRegisterCallback = (show) => {
    setShowRegister(show);
    if(show){
      setShowLogin(false);
    }
  }

  const toggleResetPasswordCallback = (show) => {
    setShowResetPassword(show);
    if(show){
      setShowLogin(false);
    }
  }

  const [showSidebar, setShowSidebar] = useState(false);

  const showSidebarCallback = () => {
    setShowSidebar(true);
  }

  const hideSidebarCallback = () => {
    setShowSidebar(false);
  }
  return (
    <BrowserRouter>
      <NavBar
        showSidebarCallback={showSidebarCallback}
        auth={auth}
        toggleLoginCallback={toggleLoginCallback}
        toggleRegisterCallback={toggleRegisterCallback}
        fetchUser={refetch}
        user={user}
      />
      <div>
        <input
          type="checkbox"
          id="reset-password-modal"
          className="modal-toggle"
          checked={showResetPassword}
          onClick={() => {toggleResetPasswordCallback(false)}}
        />

      <label for="reset-password-modal" className="modal cursor-pointer">
          <label className="modal-box w-4/12 max-w-5xl">
            <ResetPassword
              toggleResetPasswordCallback={toggleResetPasswordCallback}/>
          </label>
        </label>
      </div>
      <div>
        <input
          type="checkbox"
          id="login-modal"
          className="modal-toggle"
          checked={showLogin}
          onClick={() => {toggleLoginCallback(false)}}
        />
      <label for="login-modal" className="modal cursor-pointer">
          <label className="modal-box w-5/12 max-w-5xl">
            <Login
              toggleLoginCallback={toggleLoginCallback}
              toggleRegisterCallback={toggleRegisterCallback}
              toggleResetPasswordCallback={toggleResetPasswordCallback}
              fetchUser={refetch}
              />
          </label>
      </label>
      </div>
      <div>
        <input
          type="checkbox"
          id="signup-modal"
          className="modal-toggle"
          checked={showRegister}
          onClick={() => {toggleRegisterCallback(false)}}
        />

      <label for="signup-modal" className="modal cursor-pointer">
          <label className="modal-box w-6/12 max-w-5xl">
            <Register
              toggleLoginCallback={toggleLoginCallback}
              toggleRegisterCallback={toggleRegisterCallback}
              fetchUser={refetch}
              />
          </label>
        </label>
      </div>
      {showSidebar ?
        <SideBar
          auth={auth}
          showSidebar={showSidebar}
          hideSidebarCallback={hideSidebarCallback}/>
         : <></>}
      <Routes>
        <Route path="/" element={<HomeScreen auth={auth}/>} />
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
        <Route path="/profile/:username" element={<ProfileScreen user={user} fetchUser={refetch}/>} />
        <Route path="/favorites" element={<FavoritesScreen />} />
        <Route path="/read-list" element={<ReadListScreen />} />
        <Route path="/update-account" element={<UpdateAccountScreen fetchUser={refetch} user={user}/>} />
        <Route path="/content-management/:id" element={<ContentManagementScreen user={user}/>} />
        <Route path="/reset/:reset_string" element={<ResetPasswordScreen />} />

        <Route path="/search" element={<SearchScreen/>} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/help" element={<HelpScreen />} />

        <Route path="/dev" element={<Dev />} />

        <Route path="/story-edit" element={<StoryEditScreen />} />
        <Route path="/comic-edit" element={<ComicEditScreen />} />

        <Route
          path="/deletestory"
          element={
            <div>
              <DeleteContentModal
                title="Percy Jackson"
                modalName="delete-story-modal"
                content="story"
              />
              <DeleteContentModal
                title="Attack on Titan"
                modalName="delete-comic-modal"
                content="comic"
              />
              <DeleteContentModal
                title="Eren Yeager"
                modalName="delete-char-modal"
                content="character"
              />
              <DeleteContentModal
                title="Army Training"
                modalName="delete-plot-modal"
                content="plot point"
              />
              <DeleteAccountModal fetchUser={refetch}/>
              <DeleteForumModal title="Dark Fantasy Recs" />
              <CancelPostModal />
            </div>
          }
        />
        <Route
          path="/editboard"
          element={
            <div>
              <BoardAddModal content="Character" modalName="add-char-modal" />
              <BoardAddModal content="Plot Point" modalName="add-plot-modal" />
              <BoardEditModal content="Character" modalName="edit-char-modal" />
              <BoardEditModal
                content="Plot Point"
                modalName="edit-plot-modal"
              />
            </div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
