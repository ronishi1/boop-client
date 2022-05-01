import React 	from 'react';
import { Link } from "react-router-dom";

const ForumPostCard = ({post}) => {
  // USED ON FORUM HOME SCREEN
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=255%3A543
  const months = [ "Jan", "Feb", "Mar", "April", "May", "June",
  "July", "Aug", "Sep", "Oct", "Nov", "Dec" ];

  const formatDate = () => {
    console.log(post);
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
    <div className='card-content grid content-center'>
      <figure className='flex'>
        <Link to={`/post/${post._id}`}>
          <img className="h-16 w-16 object-cover pr-2" src={post.linked_image ? post.linked_image : "https://static.thenounproject.com/png/944120-200.png"} alt="cover art"/>
        </Link>
        <div className='flex flex-col'>
          <Link to={`/post/${post._id}`}>
            <div className='text-lg text-link font-medium leading-none'>
              {post.title}
            </div>
          </Link>
          <div className='text-xs leading-snug flex flex-col'>
            <div className='flex flex-row'>
              <p className='mr-1'>by</p>
                {post.author_name != "AutoModerator" ?
                  <Link to={`/profile/${post.author_name}`}>
                    <div className='text-link'>{post.author_name}</div>
                  </Link>
                  :
                  <div>{post.author_name}</div>
                }
            </div>
            {formatDate()}
          </div>
        </div>
      </figure>
    </div>
  );
}

export default ForumPostCard;
