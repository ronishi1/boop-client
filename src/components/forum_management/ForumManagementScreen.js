import React, {useState} from "react";
import ForumManagementPosts from "./ForumManagementPosts";
import ForumManagementReplies from "./ForumManagementReplies";

const ForumManagementScreen = ({user}) => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=328%3A5250
  const [forumTitle, setForumTitle] = useState("");
  return (
    <div>
      <p className="text-lg ml-4 mb-4 font-semibold">
        Forum Management
      </p>
      <div className="grid grid-cols-3 gap-3 divide-x">
        <div className="col-span-2 ml-4 ">
          <p className="text-lg font-semibold">
            My Posts
          </p>
          <ForumManagementPosts />
        </div>
        <div className="pl-4">
          <p className="text-lg font-semibold">
            Recent Replies To Your Posts
          </p>
          <ForumManagementReplies />
        </div>


      </div>
    </div>
  );
};

export default ForumManagementScreen;
