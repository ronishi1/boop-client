import React, { useEffect, useState } from "react";
import ProfileActivity from "./ProfileActivity";
import ProfilePublished from "./ProfilePublished";
import { useParams } from 'react-router-dom';
import { GET_USER_PROFILE } from '../../cache/queries';
import { UPDATE_BIO, FOLLOW_USER, UNFOLLOW_USER,UPDATE_PROFILE_PICTURE} from '../../cache/mutations';
import { useQuery, useMutation } 	from '@apollo/client';
import { Transition } from '@headlessui/react';
import { uploadFile } from '../../utils/utils.js';
import { useNavigate } from 'react-router-dom';
import PageNotFound from '../page_not_found/PageNotFound';
import Loading from '../loading/Loading';
import {Link} from 'react-router-dom';

const ProfileScreen = ({fetchUser,user}) => {
  let profile = {};
  let { username } = useParams();
  let navigate = useNavigate();

  const { loading, error, data, refetch } = useQuery(GET_USER_PROFILE, {
      variables: { username: username },
    });

  const [UpdateBio] = useMutation(UPDATE_BIO);
  const [FollowUser] = useMutation(FOLLOW_USER);
  const [UnfollowUser] = useMutation(UNFOLLOW_USER);
  const [UpdateProfilePicture] = useMutation(UPDATE_PROFILE_PICTURE);

  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=294%3A2257
  const [editingBio, toggleBioEdit] = useState(false);
  const [input, setInput] = useState("");
  const [selectedCollection, setSelectedCollection] = useState("Published");
  const [imageError, setImageError] = useState({status:false,message:""})

  useEffect(() => {
    refetch();
  },[]);

  if(loading) { return <Loading /> }
	if(error) { console.log(error, 'error'); }
  if(data) {
    profile = data.getUserProfile;
    if(profile == null){
      return <PageNotFound />
    }
  }

  // converts follower/following count to a readable number
  const readableNumber = (number) => {
    if (number < 1000) return number;
    var s = ["", "k", "m"];
    var e = Math.floor(Math.log(number) / Math.log(1000));
    return (number / Math.pow(1000, e)).toFixed(1) + " " + s[e];
  };

  // handles following/unfollowing of user who owns this profile
  const handleFollow = async () => {
    if(!profile.followers.includes(user._id)){
      await FollowUser({variables:{followID: profile._id}});
    }
    else{
      await UnfollowUser({variables:{followID: profile._id}});
    }
    refetch();
  };

  const handleBioEdit = async () => {
    await UpdateBio({variables:{newBio: input}});
    toggleBioEdit(!editingBio);
    refetch();
  }

  const handleUpload = async(e) => {
    const file = e.target.files[0]
    const url = await uploadFile(file, updatePFPCallback, fetchUser, setImageError)
  }

  const updatePFPCallback = async (input) => {
    await UpdateProfilePicture(input)
  }

  return profile ? (
    <div className="flex flex-row place-content-center">
      <div className="card w-1/4 shadow">
        <div className="text-center font-bold pt-10 pb-4">
          {profile.username}
        </div>
        {user && profile && profile.username == user.username ? (
          <div>
            <div className="flex place-content-center">
            <img
              className="h-48 object-contain mask mask-circle"
              src={user.profile_pic ? user.profile_pic : "https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png"}
            />
            </div>
            <div className="flex place-content-center">
              <Transition
                  show={imageError.status}
                  enter="transition-opacity duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                <div className="alert alert-error py-1.5 shadow-lg mt-5">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>{imageError.message}</span>
                  </div>
                </div>
              </Transition>
            </div>
            <div className="flex place-content-center mt-5 mb-5">
              <label htmlFor="upload-photo" className="btn bg-forum border-none">
                Change avatar
              </label>
              <input type="file" id="upload-photo" hidden={true} onChange={handleUpload}/>
            </div>
          </div>
        ) : (
          <img
            className="h-48 object-contain mask mask-circle"
            src={profile ? (profile.profile_pic ? profile.profile_pic : "https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png") : <></>}
          />
        )}
        <div className="grid grid-cols-2 place-content-center mt-5 mb-5">
            <div
              className="btn bg-forum border-none col-span-1 mx-2"
              onClick={() => {navigate(`/read-list/${username}`)}}>Read List</div>
            <div
              className="btn bg-forum border-none col-span-1 mx-2"
              onClick={() => {navigate(`/favorites/${username}`)}}>Favorites</div>
        </div>
        <div className="grid grid-cols-2 justify-items-center">
          <div className="rounded p-4">
            <div className="font-bold text-center">
              {profile.followers ? readableNumber(profile.followers.length) : 0}
            </div>
            <div>Followers</div>
          </div>
          <Link to="/followed">
          <div className="rounded p-4 hover:bg-gray-300">
            <div className="font-bold text-center">
              {profile.following ? readableNumber(profile.following.length) : 0}
            </div>
            <div>Following</div>
          </div>
          </Link>
        </div>
        <div className="flex flex-col place-content-center mb-8 pt-4 px-16">
          {editingBio ?
          (<div className="flex flex-col">
            <textarea className="textarea border-2 border-gray-500/30 focus:ring-0 focus:outline-none" placeholder="Bio" onChange={(event) => { setInput(event.target.value);}}>{profile.bio}</textarea>
            <div className="flex justify-end space-x-4">
              <a className="link no-underline text-forum py-4 w-min" onClick={() => toggleBioEdit(!editingBio)}>
                Cancel
              </a>
              <a className="link no-underline text-forum py-4 w-min" onClick={() => handleBioEdit()}>
                Save
              </a>
            </div>
          </div>)
          : (<div className="w-full">
              {profile.bio ? profile.bio : <p className="text-gray-400">User does not have a bio</p>}
            </div>)}
          {user && profile && profile.username == user.username && !editingBio ? (
            <div className="flex justify-end">
              <a className="link no-underline text-forum py-4 w-min" onClick={() => toggleBioEdit(!editingBio)}>Edit</a>
            </div>
          ) : (
            <></>
          )}
        </div>
        {user && profile && profile.username != user.username ? (
          <div className="flex place-content-center py-8">
            <button
              className="btn bg-forum border-forum hover:bg-forum hover:opacity-50 hover:border-forum"
              onClick={() => handleFollow()}
            >
              {profile.followers ? (profile.followers.includes(user._id) ? "Followed" : "Follow") : <></>}
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="w-1/2">
        <ProfileActivity username={username}/>
        <ProfilePublished username={username}/>
      </div>
    </div>
  ) : <div>loading...</div>;
};

export default ProfileScreen;
