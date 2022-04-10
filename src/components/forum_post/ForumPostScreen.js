import React from "react";
import ForumPost from "./ForumPost";

const ForumPostScreen = () => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=329%3A2498
  const samplePost = {
    title: "sample post title :D",
    author: "author of this post",
    tags: ["Discussion", "Spoilers"],
    content: {
      title: "Kaguya-sama Love Is War",
      cover_image:
        "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974706631/kaguya-sama-love-is-war-vol-10-9781974706631_hr.jpg",
      genres: ["Comedy", "Romance"],
      synopsis:
        "Considered a genius due to having the highest grades in the country, Miyuki Shirogane leads the prestigious Shuchiin Academy's student council as its president, working alongside the beautiful and wealthy vice president Kaguya Shinomiya. The two are often regarded as the perfect couple by students despite them not being in any sort of romantic relationship. However, the truth is that after spending so much time together, the two have developed feelings for one another; unfortunately, neither is willing to confess, as doing so would be a sign of weakness. With their pride as elite students on the line, Miyuki and Kaguya embark on a quest to do whatever is necessary to get a confession out of the other. Through their daily antics, the battle of love begins!",
    },
    replies: [
      {
        username: "sample user 1",
        profile_picture:
          "https://i.pinimg.com/originals/66/6e/59/666e59a6a8e6982d099a552eb6cdd99f.jpg",
        publication_date: new Date(2022, 2, 14, 23, 24),
        reply_content:
          "test post with a lot of text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur libero id faucibus nisl tincidunt eget nullam non nisi. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Faucibus pulvinar elementum integer enim neque volutpat. Lobortis scelerisque fermentum dui faucibus in ornare quam. Gravida cum sociis natoque penatibus et. Pharetra diam sit amet nisl suscipit adipiscing bibendum est. Integer eget aliquet nibh praesent tristique magna sit. Massa eget egestas purus viverra accumsan in nisl nisi. Viverra ipsum nunc aliquet bibendum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur libero id faucibus nisl tincidunt eget nullam non nisi. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Quis imperdiet massa tincidunt nunc pulvinar sapien et ligula. Faucibus pulvinar elementum integer enim neque volutpat. Lobortis scelerisque fermentum dui faucibus in ornare quam. Gravida cum sociis natoque penatibus et. Pharetra diam sit amet nisl suscipit adipiscing bibendum est. Integer eget aliquet nibh praesent tristique magna sit. Massa eget egestas purus viverra accumsan in nisl nisi. Viverra ipsum nunc aliquet bibendum.",
        post_count: 24,
      },
      {
        username: "sample user 2",
        profile_picture:
          "https://i.pinimg.com/originals/0d/19/39/0d1939679a3a4377383d5c38f928d5d8.jpg",
        publication_date: new Date(2022, 2, 15, 14, 12),
        reply_content: "test post 2",
        post_count: 10,
      },
      {
        username: "sample user 2",
        profile_picture:
          "https://i.pinimg.com/originals/0d/19/39/0d1939679a3a4377383d5c38f928d5d8.jpg",
        publication_date: new Date(2022, 2, 15, 14, 12),
        reply_content: "test post 3",
        post_count: 10,
      },
      {
        username: "sample user 1",
        profile_picture:
          "https://i.pinimg.com/originals/66/6e/59/666e59a6a8e6982d099a552eb6cdd99f.jpg",
        publication_date: new Date(2022, 2, 16, 23, 10),
        reply_content: "test post 4",
        post_count: 24,
      },
      {
        username: "sample user 1",
        profile_picture:
          "https://i.pinimg.com/originals/66/6e/59/666e59a6a8e6982d099a552eb6cdd99f.jpg",
        publication_date: new Date(2022, 2, 16, 23, 10),
        reply_content: "test post 5, on page 2",
        post_count: 24,
      },
    ],
  };

  return (
    <div className="flex place-content-center">
      <ForumPost post={samplePost} />
    </div>
  );
};

export default ForumPostScreen;
