import React 	from 'react';
import { Link } from "react-router-dom";

const ForumTopicTableEntry = ({post}) => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=275%3A1703
  const months = [ "Jan", "Feb", "Mar", "April", "May", "June",
  "July", "Aug", "Sep", "Oct", "Nov", "Dec" ];

  const formatDate = () => {
    let date = new Date(post.timestamp);
    let month = months[date.getMonth()];
    let pm = date.getHours() > 12;
    let hour = date.getHours();
    if(pm) hour -= 12;
    if(hour == 0) hour = 12;
    let strHour = ("0" + hour).slice(-2);
    let strMinutes = ("0" + date.getMinutes()).slice(-2);
    return month + " " + date.getDate() + ", " + strHour + ":" + strMinutes + (pm ? "pm" : "am");
  }
  return (
    <tr className='hover:bg-gray-400/25'>
      <th className='h-20 text-left grid grid-cols-2 m-4 items-center'>
        <div className='h-20 w-96 flex flex-row items-center'>
          <img className="h-20 w-16 mr-2 object-cover" src={post.linked_image ? post.linked_image : "https://cdn2.iconfinder.com/data/icons/user-interface-vol-2-21/64/No_Data-512.png"} alt="cover art"/>
          <div className='flex flex-col h-20 w-80'>
            <Link to={`/post/${post._id}`}>
              <div className='text-lg text-link line-clamp-2'>{post.title}</div>
            </Link>
            <div className='flex flex-row text-sm'>
              <div>{formatDate()}</div>
              <div className='px-1'> by </div>
              {post.author_name != "AutoModerator" ?
                <Link to={`/profile/${post.author_name}`}>
                  <div className='text-link'>{post.author_name}</div>
                </Link>
                :
                <div>{post.author_name}</div>
              }
            </div>
          </div>
        </div>
        <div className='justify-self-end'>
          {post.tags.map((tag) => {
            let color;
            switch(tag) {
              case 'Discussion':
                color = "discussion"
                break;
              case 'Spoilers':
                color = 'spoiler'
                break;
              case 'NSFW':
                color = "nsfw"
                break;
              default:
            }
            return (
            <div class={'badge bg-'+color+' border-'+color}>
              {tag}
            </div>);
          })}
        </div>
      </th>
      <th>{post.num_replies}</th>
      <th>{post.replies.length != 0 ? new Date(post.replies[post.replies.length-1].timestamp).toDateString() : <div className="text-gray-400 text-sm p-2">There are no replies to this post</div>}</th>
    </tr>
  );
}

export default ForumTopicTableEntry;
