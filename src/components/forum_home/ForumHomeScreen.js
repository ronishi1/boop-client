import React from "react";
import ForumHomeGeneral from "./ForumHomeGeneral";
import ForumHomeComic from "./ForumHomeComic";
import ForumHomeStory from "./ForumHomeStory";
import ForumPostCard from "./ForumPostCard";

const ForumHomeScreen = () => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=249%3A446
  const data = {
    general: [
      {
        title: "Community Announcements",
        description:
          "Updates, changes, and announcements for Boop and community",
        posts: [
          {
            cover_image:
              "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974706631/kaguya-sama-love-is-war-vol-10-9781974706631_hr.jpg",
            title: "post title",
            author: "post author",
            publication_date: new Date(2022, 4, 17, 2, 5),
          },
          {
            cover_image:
              "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974706631/kaguya-sama-love-is-war-vol-10-9781974706631_hr.jpg",
            title: "post title",
            author: "post author",
            publication_date: new Date(2022, 4, 17, 2, 5),
          },
          {
            cover_image:
              "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974706631/kaguya-sama-love-is-war-vol-10-9781974706631_hr.jpg",
            title: "post title",
            author: "post author",
            publication_date: new Date(2022, 4, 17, 2, 5),
          },
        ],
      },
      {
        title: "Casual Discussion",
        description: "casual discussion desc",
        posts: [
          {
            cover_image:
              "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974706631/kaguya-sama-love-is-war-vol-10-9781974706631_hr.jpg",
            title: "post title",
            author: "post author",
            publication_date: new Date(2022, 4, 17, 2, 5),
          },
          {
            cover_image:
              "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974706631/kaguya-sama-love-is-war-vol-10-9781974706631_hr.jpg",
            title: "post title",
            author: "post author",
            publication_date: new Date(2022, 4, 17, 2, 5),
          },
          {
            cover_image:
              "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974706631/kaguya-sama-love-is-war-vol-10-9781974706631_hr.jpg",
            title: "post title",
            author: "post author",
            publication_date: new Date(2022, 4, 17, 2, 5),
          },
        ],
      },
      {
        title: "Miscellaneous Discussion",
        description: "misc discussion desc",
        posts: [
          {
            cover_image:
              "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974706631/kaguya-sama-love-is-war-vol-10-9781974706631_hr.jpg",
            title: "post title",
            author: "post author",
            publication_date: new Date(2022, 4, 17, 2, 5),
          },
          {
            cover_image:
              "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974706631/kaguya-sama-love-is-war-vol-10-9781974706631_hr.jpg",
            title: "post title",
            author: "post author",
            publication_date: new Date(2022, 4, 17, 2, 5),
          },
          {
            cover_image:
              "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974706631/kaguya-sama-love-is-war-vol-10-9781974706631_hr.jpg",
            title: "post title",
            author: "post author",
            publication_date: new Date(2022, 4, 17, 2, 5),
          },
        ],
      },
    ],
    comics: [
      {
        title: "Comic Discussions",
        description:
          "Updates, changes, and announcements for Boop and community",
        posts: [
          {
            cover_image:
              "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974706631/kaguya-sama-love-is-war-vol-10-9781974706631_hr.jpg",
            title: "post title",
            author: "post author",
            publication_date: new Date(2022, 4, 17, 2, 5),
          },
          {
            cover_image:
              "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974706631/kaguya-sama-love-is-war-vol-10-9781974706631_hr.jpg",
            title: "post title",
            author: "post author",
            publication_date: new Date(2022, 4, 17, 2, 5),
          },
          {
            cover_image:
              "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974706631/kaguya-sama-love-is-war-vol-10-9781974706631_hr.jpg",
            title: "post title",
            author: "post author",
            publication_date: new Date(2022, 4, 17, 2, 5),
          },
        ],
      },
      {
        title: "Comic Recommendations",
        description: "casual discussion desc",
        posts: [
          {
            cover_image:
              "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974706631/kaguya-sama-love-is-war-vol-10-9781974706631_hr.jpg",
            title: "post title",
            author: "post author",
            publication_date: new Date(2022, 4, 17, 2, 5),
          },
          {
            cover_image:
              "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974706631/kaguya-sama-love-is-war-vol-10-9781974706631_hr.jpg",
            title: "post title",
            author: "post author",
            publication_date: new Date(2022, 4, 17, 2, 5),
          },
          {
            cover_image:
              "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974706631/kaguya-sama-love-is-war-vol-10-9781974706631_hr.jpg",
            title: "post title",
            author: "post author",
            publication_date: new Date(2022, 4, 17, 2, 5),
          },
        ],
      },
      {
        title: "Upcoming Releases",
        description: "misc discussion desc",
        posts: [
          {
            cover_image:
              "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974706631/kaguya-sama-love-is-war-vol-10-9781974706631_hr.jpg",
            title: "post title",
            author: "post author",
            publication_date: new Date(2022, 4, 17, 2, 5),
          },
          {
            cover_image:
              "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974706631/kaguya-sama-love-is-war-vol-10-9781974706631_hr.jpg",
            title: "post title",
            author: "post author",
            publication_date: new Date(2022, 4, 17, 2, 5),
          },
          {
            cover_image:
              "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974706631/kaguya-sama-love-is-war-vol-10-9781974706631_hr.jpg",
            title: "post title",
            author: "post author",
            publication_date: new Date(2022, 4, 17, 2, 5),
          },
        ],
      },
    ],
    stories: [
      {
        title: "Story Discussions",
        description:
          "Updates, changes, and announcements for Boop and community",
        posts: [
          {
            cover_image:
              "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974706631/kaguya-sama-love-is-war-vol-10-9781974706631_hr.jpg",
            title: "post title",
            author: "post author",
            publication_date: new Date(2022, 4, 17, 2, 5),
          },
          {
            cover_image:
              "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974706631/kaguya-sama-love-is-war-vol-10-9781974706631_hr.jpg",
            title: "post title",
            author: "post author",
            publication_date: new Date(2022, 4, 17, 2, 5),
          },
          {
            cover_image:
              "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974706631/kaguya-sama-love-is-war-vol-10-9781974706631_hr.jpg",
            title: "post title",
            author: "post author",
            publication_date: new Date(2022, 4, 17, 2, 5),
          },
        ],
      },
      {
        title: "Story Recommendations",
        description: "casual discussion desc",
        posts: [
          {
            cover_image:
              "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974706631/kaguya-sama-love-is-war-vol-10-9781974706631_hr.jpg",
            title: "post title",
            author: "post author",
            publication_date: new Date(2022, 4, 17, 2, 5),
          },
          {
            cover_image:
              "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974706631/kaguya-sama-love-is-war-vol-10-9781974706631_hr.jpg",
            title: "post title",
            author: "post author",
            publication_date: new Date(2022, 4, 17, 2, 5),
          },
          {
            cover_image:
              "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974706631/kaguya-sama-love-is-war-vol-10-9781974706631_hr.jpg",
            title: "post title",
            author: "post author",
            publication_date: new Date(2022, 4, 17, 2, 5),
          },
        ],
      },
      {
        title: "Upcoming Releases",
        description: "misc discussion desc",
        posts: [
          {
            cover_image:
              "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974706631/kaguya-sama-love-is-war-vol-10-9781974706631_hr.jpg",
            title: "post title",
            author: "post author",
            publication_date: new Date(2022, 4, 17, 2, 5),
          },
          {
            cover_image:
              "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974706631/kaguya-sama-love-is-war-vol-10-9781974706631_hr.jpg",
            title: "post title",
            author: "post author",
            publication_date: new Date(2022, 4, 17, 2, 5),
          },
          {
            cover_image:
              "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974706631/kaguya-sama-love-is-war-vol-10-9781974706631_hr.jpg",
            title: "post title",
            author: "post author",
            publication_date: new Date(2022, 4, 17, 2, 5),
          },
        ],
      },
    ],
    recentPosts: [
      {
        cover_image:
          "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974706631/kaguya-sama-love-is-war-vol-10-9781974706631_hr.jpg",
        title: "post title",
        author: "post author",
        publication_date: new Date(2022, 4, 17, 2, 5),
        replies: [{}, {}, {}, {}, {}, {}],
      },
      {
        cover_image:
          "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974706631/kaguya-sama-love-is-war-vol-10-9781974706631_hr.jpg",
        title: "post title",
        author: "post author",
        publication_date: new Date(2022, 4, 17, 2, 5),
        replies: [{}, {}, {}, {}, {}, {}],
      },
      {
        cover_image:
          "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974706631/kaguya-sama-love-is-war-vol-10-9781974706631_hr.jpg",
        title: "post title",
        author: "post author",
        publication_date: new Date(2022, 4, 17, 2, 5),
        replies: [{}, {}, {}, {}, {}, {}],
      },
      {
        cover_image:
          "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974706631/kaguya-sama-love-is-war-vol-10-9781974706631_hr.jpg",
        title: "post title",
        author: "post author",
        publication_date: new Date(2022, 4, 17, 2, 5),
        replies: [{}, {}, {}, {}, {}, {}],
      },
      {
        cover_image:
          "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974706631/kaguya-sama-love-is-war-vol-10-9781974706631_hr.jpg",
        title: "post title",
        author: "post author",
        publication_date: new Date(2022, 4, 17, 2, 5),
        replies: [{}, {}, {}, {}, {}, {}],
      },
    ],
    popularPosts: [
      {
        cover_image:
          "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974706631/kaguya-sama-love-is-war-vol-10-9781974706631_hr.jpg",
        title: "post title",
        author: "post author",
        publication_date: new Date(2022, 4, 17, 2, 5),
        replies: [{}, {}, {}, {}, {}, {}],
      },
      {
        cover_image:
          "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974706631/kaguya-sama-love-is-war-vol-10-9781974706631_hr.jpg",
        title: "post title",
        author: "post author",
        publication_date: new Date(2022, 4, 17, 2, 5),
        replies: [{}, {}, {}, {}, {}, {}],
      },
      {
        cover_image:
          "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974706631/kaguya-sama-love-is-war-vol-10-9781974706631_hr.jpg",
        title: "post title",
        author: "post author",
        publication_date: new Date(2022, 4, 17, 2, 5),
        replies: [{}, {}, {}, {}, {}, {}],
      },
      {
        cover_image:
          "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974706631/kaguya-sama-love-is-war-vol-10-9781974706631_hr.jpg",
        title: "post title",
        author: "post author",
        publication_date: new Date(2022, 4, 17, 2, 5),
        replies: [{}, {}, {}, {}, {}, {}],
      },
      {
        cover_image:
          "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974706631/kaguya-sama-love-is-war-vol-10-9781974706631_hr.jpg",
        title: "post title",
        author: "post author",
        publication_date: new Date(2022, 4, 17, 2, 5),
        replies: [{}, {}, {}, {}, {}, {}],
      },
    ],
  };
  
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
          Trending Posts
        </div>
        <div className="flex flex-col">
          <div className="px-2 text-md font-medium">Popular Posts</div>
          {data.popularPosts.map((post) => {
            return (
              <div className="h-16 m-2 flex flex-row">
                <ForumPostCard post={post} />
              </div>
            );
          })}
          <div className="px-2 text-md font-medium">Recent Posts</div>
          {data.recentPosts.map((post) => {
            return (
              <div className="h-16 m-2 flex flex-row">
                <ForumPostCard post={post} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ForumHomeScreen;
