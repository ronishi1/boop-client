import React from "react";
import DeleteContentModal from "../modals/DeleteContentModal";
import PublishModal from "../modals/PublishModal";
import UploadCoverModal from "../modals/UploadCoverModal";
import CreateChapterModal from "../modals/CreateChapterModal";

// WIP DIFFICULT TO BREAK INTO COMPONENTS RIGHT NOW
const CreatorStudioScreen = () => {
  return (
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
      <PublishModal
        title="Spiderman"
        modalName="publish-comic-modal"
        content="comic"
      />
      <PublishModal
        title="Harry Potter"
        modalName="publish-story-modal"
        content="story"
      />
      <UploadCoverModal
        title="Spiderman"
        modalName="cover-comic-modal"
        content="comic"
      />
      <UploadCoverModal
        title="Harry Potter"
        modalName="cover-story-modal"
        content="story"
      />
      <CreateChapterModal modalName="comic-chap-modal" content="comic" />
      <CreateChapterModal modalName="story-chap-modal" content="story" />
    </div>
  );
};

export default CreatorStudioScreen;
