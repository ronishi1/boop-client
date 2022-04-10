import React 	from 'react';
import ForumManagementPost from "./ForumManagementPost"
const ForumManagementPosts = ({toggleForumCallback, toggleForumDeleteCallback}) => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=718%3A3452
  
  var data = [
    {
      cover_image: "https://cover.nep.li/cover/Spy-X-Family.jpg",
      forum_title: "Comic with great action!!!",
      publication_date: new Date(2022, 3, 24, 14, 11),
      tags:["Spoiler", "NSFW", "Discussion"],
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      cover_image: "https://cover.nep.li/cover/Spy-X-Family.jpg",
      forum_title: "Comic with great action!!!",
      publication_date: new Date(2022, 3, 24, 14, 11),
      tags:["Spoiler", "NSFW", "Discussion"],
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      cover_image: "https://cover.nep.li/cover/Spy-X-Family.jpg",
      forum_title: "Comic with great action!!!",
      publication_date: new Date(2022, 3, 24, 14, 11),
      tags:["Spoiler", "NSFW", "Discussion"],
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      cover_image: "https://cover.nep.li/cover/Spy-X-Family.jpg",
      forum_title: "Comic with great action!!!",
      publication_date: new Date(2022, 3, 24, 14, 11),
      tags:["Spoiler", "NSFW", "Discussion"],
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      cover_image: "https://cover.nep.li/cover/Spy-X-Family.jpg",
      forum_title: "Comic with great action!!!",
      publication_date: new Date(2022, 3, 24, 14, 11),
      tags:["Spoiler", "NSFW", "Discussion"],
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
  ]
  
  return (
    <div>
      {data.map((post,i) => (
          <ForumManagementPost
              key={i} 
              cover={post.cover_image} 
              title={post.forum_title} 
              publicationDate={post.publication_date} 
              tags={post.tags}
              content={post.content}
              toggleForumCallback={toggleForumCallback}
              toggleForumDeleteCallback={toggleForumDeleteCallback}
          />
        ))}
    </div>
  );
}

export default ForumManagementPosts;
