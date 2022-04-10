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
// nav and sidebar, might also move or do something else with but will keep explicit path for dev purposes
import NavBar from "./components/navbar/NavBar";
import SideBar from "./components/sidebar/SideBar";

// modals (to get rid of after dev, since they are modals that should load from navbar for example)
import Login from "./components/modals/Login";
import SignUp from "./components/modals/SignUp";
import ResetPassword from "./components/modals/ResetPassword";

// FOR DEV PURPOSES DEFINITELY DELETE AFTER
import Dev from "./Dev";
import StoryEditScreen from "./components/story_edit/StoryEditScreen";
import ComicEditScreen from "./components/comic_edit/ComicEditScreen";
import DeleteContentModal from "./components/modals/DeleteContentModal";
import DeleteAccountModal from "./components/modals/DeleteAccountModal";
import DeleteForumModal from "./components/modals/DeleteForumModal";
import CancelPostModal from "./components/modals/CancelPostModal";
import BoardAddModal from "./components/storyboardModals/BoardAddModal";
import BoardEditModal from "./components/storyboardModals/BoardEditModal";
const App = () => {
  // Might be replacing this into a constant variable later when we incorporate the get_current_user query
  const [auth,setAuth] = useState(false);

  // MODAL CODE
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);

  const toggleLoginCallback = (show) => {
    setShowLogin(show);
    if(show){
      setShowSignUp(false)
    }
  }

  const toggleSignUpCallback = (show) => {
    setShowSignUp(show);
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

  // Temporary for now, will probably delete when login functionality works and auto refetch user query
  const authTrueCallback = () => {
    setAuth(true);
  }

  const authFalseCallback = () => {
    setAuth(false);

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
        toggleSignUpCallback={toggleSignUpCallback}
        logoutCallback={authFalseCallback}
      />
      <div>
        <input
          type="checkbox"
          id="reset-password-modal"
          class="modal-toggle"
          checked={showResetPassword}
          onClick={() => {toggleResetPasswordCallback(false)}}
        />

        <label for="reset-password-modal" class="modal cursor-pointer">
          <label class="modal-box w-4/12 max-w-5xl">
            <ResetPassword
              toggleResetPasswordCallback={toggleResetPasswordCallback}/>
          </label>
        </label>
      </div>
      <div>
        <input
          type="checkbox"
          id="login-modal"
          class="modal-toggle"
          checked={showLogin}
          onClick={() => {toggleLoginCallback(false)}}
        />
      <label for="login-modal" class="modal cursor-pointer">
          <label class="modal-box w-5/12 max-w-5xl">
            <Login
              toggleLoginCallback={toggleLoginCallback}
              toggleSignUpCallback={toggleSignUpCallback}
              toggleResetPasswordCallback={toggleResetPasswordCallback}
              loginCallback={authTrueCallback}/>
          </label>
      </label>
      </div>
      <div>
        <input
          type="checkbox"
          id="signup-modal"
          class="modal-toggle"
          checked={showSignUp}
          onClick={() => {toggleSignUpCallback(false)}}
        />

        <label for="signup-modal" class="modal cursor-pointer">
          <label class="modal-box w-6/12 max-w-5xl">
            <SignUp
              toggleLoginCallback={toggleLoginCallback}
              toggleSignUpCallback={toggleSignUpCallback}
              signUpCallback={authTrueCallback}
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
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/favorites" element={<FavoritesScreen />} />
        <Route path="/read-list" element={<ReadListScreen />} />
        <Route path="/update-account" element={<UpdateAccountScreen />} />
        <Route path="/content-management" element={<ContentManagementScreen />} />

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
              <DeleteAccountModal />
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
