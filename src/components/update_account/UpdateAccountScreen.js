import React from "react";
import DeleteAccountModal from "../modals/DeleteAccountModal";
import UploadPicture from "../modals/UploadPicture";

const UpdateAccountScreen = () => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=270%3A511
  const user_data = {
    username: "the_current_username",
    email: "currentemail@email.com",
    profile_picture: "https://wallpapercave.com/wp/wp5338281.jpg",
  }
  
  return (
    <div className="flex flex-col">
      <div className="flex flex-row place-content-center">
        <div className="w-1/3 flex flex-col place-content-center">
          <div className="w-full flex place-content-center">
            <div className="avatar">
              <div className="mt-20 w-64 rounded-full border-2 border-forum">
                <label for="upload-picture-modal" class="modal-button hover:cursor-pointer hover:opacity-80">
                  <img src={user_data.profile_picture} />
                </label>
                <UploadPicture/>
              </div>
            </div>
          </div>
          <div className="flex place-content-center">
            <div className="card w-3/4 mt-10 p-8 shadow">
              <div className="flex flex-row ">
                <p className="pr-1">Username: </p>
                <p className="font-medium">{user_data.username}</p>
              </div>
              <input type="text" placeholder="Enter new username" class="mt-4 input input-bordered w-full"/>
              <div className="flex justify-end">
                <a class="link no-underline text-forum mt-2">Update</a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 flex flex-col">
          <div className="flex place-content-center">
            <div className="card w-3/4 mt-10 p-8 shadow">
              <div className="flex flex-row ">
                <p className="pr-1">Email: </p>
                <p className="font-medium">{user_data.email}</p>
              </div>
              <input type="text" placeholder="Enter new email" class="mt-4 input input-bordered w-full"/>
              <input type="text" placeholder="Enter password" class="mt-4 input input-bordered w-full"/>
              <div className="flex justify-end">
                <a class="link no-underline text-forum mt-2">Update</a>
              </div>
            </div>
          </div>
          <div className="flex place-content-center">
            <div className="card w-3/4 mt-10 p-8 shadow">
              <div className="flex flex-row ">
                <p className="pr-1">Password</p>
              </div>
              <input type="text" placeholder="Enter new password" class="mt-4 input input-bordered w-full"/>
              <input type="text" placeholder="Confirm new Password" class="mt-4 input input-bordered w-full"/>
              <input type="text" placeholder="Enter old Password" class="mt-4 input input-bordered w-full"/>
              <div className="flex justify-end">
                <a class="link no-underline text-forum mt-2">Update</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex place-content-center py-16">
        <DeleteAccountModal />
      </div>
    </div>
  );
};
{/* 
      <UploadPicture /> */}
export default UpdateAccountScreen;
