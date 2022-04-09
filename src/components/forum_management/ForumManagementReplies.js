import React 	from 'react';
import ForumManagementReply from './ForumManagementReply';

const ForumManagementReplies = () => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=718%3A3454
  var data = [
    {
      date: new Date(2022, 3, 24, 14, 11),
      reply_user: "Bing Bong",
      title: "Comic with great action!!!"
    },
    {
      date: new Date(2022, 3, 24, 14, 11),
      reply_user: "Bing Bong",
      title: "Comic with great action!!!"
    },
    {
      date: new Date(2022, 3, 24, 14, 11),
      reply_user: "Bing Bong",
      title: "Comic with great action!!!"
    },
    {
      date: new Date(2022, 3, 24, 14, 11),
      reply_user: "Bing Bong",
      title: "Comic with great action!!!"
    },
    {
      date: new Date(2022, 3, 24, 14, 11),
      reply_user: "Bing Bong",
      title: "Comic with great action!!!"
    },
    {
      date: new Date(2022, 3, 24, 14, 11),
      reply_user: "Bing Bong",
      title: "Comic with great action!!!"
    },
    {
      date: new Date(2022, 3, 24, 14, 11),
      reply_user: "Bing Bong",
      title: "Comic with great action!!!"
    },
    {
      date: new Date(2022, 3, 24, 14, 11),
      reply_user: "Bing Bong",
      title: "Comic with great action!!!"
    },
  ]
  return (
    <div className="overflow-auto">
      {data.map((post,i) => (
          <ForumManagementReply
              key={i} 
              replyDate={post.date}
              replyAuthor={post.reply_user}
              title={post.title} 
          />
        ))}
    </div>
  );
}

export default ForumManagementReplies;
