import React from "react";
import ForumHomeGeneral from "./ForumHomeGeneral";
import ForumHomeComic from "./ForumHomeComic";
import ForumHomeStory from "./ForumHomeStory";
import ForumPostCard from "./ForumPostCard";
import ForumHomeRecent from './ForumHomeRecent';
const ForumHomeScreen = () => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=249%3A446

  return (
    <div className="flex place-content-center">
      <div className="w-1/2 mr-20">
        <div className="pb-4">
          <ForumHomeGeneral />
        </div>
        <div className="pb-4">
          <ForumHomeStory/>
        </div>
        <div className="pb-4">
          <ForumHomeComic />
        </div>
      </div>
      <div className="w-64 h-max flex flex-col rounded-none border-4 border-forum">
        <div className="p-2 text-white text-lg font-medium bg-forum">
          Recent Posts
        </div>
        <div className="flex flex-col">
          <ForumHomeRecent />
        </div>
      </div>
    </div>
  );
};

export default ForumHomeScreen;
