import React, { useState } from "react";
import ProfileActivity from "./ProfileActivity";
import ProfileFavorites from "./ProfileFavorites";
import ProfilePublished from "./ProfilePublished";
import { useParams } from 'react-router-dom'
import { GET_USER_PROFILE } from '../../cache/queries';
import { useQuery } 	from '@apollo/client';

const ProfileScreen = ({user}) => {
  let profile = {};
  let { username } = useParams();

  const { loading, error, data, refetch } = useQuery(GET_USER_PROFILE, {
      variables: { username: username },
    });

  if(loading) { console.log(loading, 'loading'); }
	if(error) { console.log(error, 'error'); }
  if(data) {
    profile = data.getUserProfile;
  }

  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=294%3A2257
  const [followed, setFollow] = useState(false);
  // 0 = GUEST, 1 = LOGGED-IN+NOT SELF, 2 = LOGGED-IN+SELF
  const [viewer, setViewer] = useState(0);
  const [selectedCollection, setSelectedCollection] = useState("Published");

  const user_data = {
    username: "username_goes_here",
    profilePicture: "https://i.imgflip.com/2r2rjf.jpg",
    followers: 14332,
    following: 12,
    bio: "this is a sample bio yep",
    published: [
      {
        cover_art:
          "https://64.media.tumblr.com/1c5fc044dd705d5cb8d599ca3d276996/af204ae0844cdf4f-7e/s500x750/75357cbfa0b6aa2e142cb43dc8ac16dd86130d62.jpg",
        content_color: "comic",
      },
    ],
    favorites: [
      {
        cover_art:
          "https://vignette.wikia.nocookie.net/tensei-shitara-slime-datta-ken/images/e/e7/LN_Vol_13.5.jpg/revision/latest?cb=20190116235139",
        content_color: "story",
      },
      {
        cover_art:
          "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974706631/kaguya-sama-love-is-war-vol-10-9781974706631_hr.jpg",
        content_color: "comic",
      },
    ],
    activities: [
      {
        activity_type: "Added chapter to",
        content: {
          title: "a published title",
          publication_date: new Date(2022, 5, 6, 14, 25),
          content_color: "comic",
        },
      },
      {
        activity_type: "Added chapter to",
        content: {
          title: "a published title 2",
          publication_date: new Date(2022, 5, 6, 14, 25),
          content_color: "story",
        },
      },
      {
        activity_type: "Replied to",
        content: {
          title: "forum post about something",
          publication_date: new Date(2022, 5, 6, 14, 25),
          content_color: "forum",
        },
      },
    ],
  };

  const readableNumber = (number) => {
    if (number < 1000) return number;
    var s = ["", "k", "m"];
    var e = Math.floor(Math.log(number) / Math.log(1000));
    return (number / Math.pow(1000, e)).toFixed(1) + " " + s[e];
  };

  const handleFollow = () => {
    setFollow(!followed);
  };

  const handleSelectedCollection = (collection) => {
    setSelectedCollection(collection);
  };

  const loadSelectedCollection = () => {
    switch (selectedCollection) {
      case "Published":
        return <ProfilePublished published={user_data.published} />;
      case "Favorites":
        return <ProfileFavorites favorites={user_data.favorites} />;
      default:
        return;
    }
  };

  return (
    <div className="flex flex-row place-content-center">
      <div className="card w-1/4 shadow">
        <div className="text-center font-bold pt-10 pb-4">
          {profile.username}
        </div>
        {user && profile && profile.username == user.username ? (
          <img
            className="mb-10 h-48 object-contain mask mask-circle hover:cursor-pointer hover:opacity-70"
            title="Edit Profile Picture"
            src={user_data.profilePicture}
          />
        ) : (
          <img
            className="mb-10 h-48 object-contain mask mask-circle"
            src={user_data.profilePicture}
          />
        )}
        <div className="grid grid-cols-2 justify-items-center">
          <div>
            <div className="font-bold text-center">
              {profile.followers ? readableNumber(profile.followers.length) : 0}
            </div>
            <div>Followers</div>
          </div>
          <div>
            <div className="font-bold text-center">
              {profile.following ? readableNumber(profile.following.length) : 0}
            </div>
            <div>Following</div>
          </div>
        </div>
        <div className="flex flex-col place-content-center mb-8 pt-4 px-16">
          <div className="w-full">{profile.bio}</div>
          {user && profile && profile.username == user.username ? (
            <div className="flex justify-end">
              <a className="link no-underline text-forum py-4 w-min">Edit</a>
            </div>
          ) : (
            <></>
          )}
        </div>
        {user && profile && profile.username != user.username ? (
          <div className="flex place-content-center py-8">
            <button
              class="btn bg-forum border-forum w-1/5 hover:bg-forum hover:opacity-50 hover:border-forum"
              onClick={() => handleFollow()}
            >
              {followed ? "Followed" : "Follow"}
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="w-1/2">
        <ProfileActivity activities={user_data.activities} />
        <div className="card ml-8 my-4 py-4 px-12 shadow">
          <div className="space-x-2">
            <a
              className={
                "link no-underline " +
                (selectedCollection == "Published" ? "font-bold" : "")
              }
              onClick={() => handleSelectedCollection("Published")}
            >
              Published
            </a>
            <a
              className={
                "link no-underline " +
                (selectedCollection == "Favorites" ? "font-bold" : "")
              }
              onClick={() => handleSelectedCollection("Favorites")}
            >
              Favorites
            </a>
          </div>
          <div className="card grid content-center px-4 h-24 bg-gray-300">
            {loadSelectedCollection()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
