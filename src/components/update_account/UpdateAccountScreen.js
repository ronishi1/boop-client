import React from "react";
import DeleteAccountModal from "../modals/DeleteAccountModal";
import UploadPicture from "../modals/UploadPicture";

const UpdateAccountScreen = () => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=270%3A511
  return (
    <div>
      <h1>Side Bar Filler</h1>
      <DeleteAccountModal />
      <UploadPicture />
    </div>
  );
};

export default UpdateAccountScreen;
