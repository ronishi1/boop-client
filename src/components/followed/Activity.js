import React 	from 'react';
import {Link} from 'react-router-dom'
const Activity = ({activity,username}) => {

  const months = [ "Jan", "Feb", "Mar", "April", "May", "June",
  "July", "Aug", "Sep", "Oct", "Nov", "Dec" ];

  const formatDate = (activity) => {
    let date = new Date(activity.timestamp);
    let month = months[date.getMonth()];
    let pm = date.getHours() > 12;
    let hour = date.getHours();
    if(pm) hour -= 12;
    if(hour == 0) hour = 12;
    let strHour = ("0" + hour).slice(-2);
    let strMinutes = ("0" + date.getMinutes()).slice(-2);
    return month + " " + date.getDate() + ", " + strHour + ":" + strMinutes + (pm ? "pm" : "am");
  }

  if(activity.activity_type == "publish_comic_chapter"){
    return (
      <div className='grid grid-cols-12 text-xl'>
        <div className='flex flex-row col-span-9'>
          <p className='pr-1'>
            <Link to={`/profile/${username}`}><span className="text-link">{username}</span></Link>
            &nbsp;added new chapter
            <Link to={`/view/${activity.chapter_ID}`}><span className="text-comic">&nbsp;{activity.chapter_name}&nbsp;</span></Link>
             to
            <Link to={`/info/${activity.content_ID}`}><span className="text-comic">&nbsp;{activity.content_name}</span></Link>
          </p>
        </div>
        <p className='text-right col-span-3'>{formatDate(activity)}</p>
      </div>)
  }
  else if (activity.activity_type == "publish_story_chapter"){
    return (
      <div className='grid grid-cols-12 text-xl'>
        <div className='flex flex-row col-span-9'>
          <p className='pr-1'>
            <Link to={`/profile/${username}`}><span className="text-link">{username}</span></Link>
            &nbsp;added new chapter
            <Link to={`/view/${activity.chapter_ID}`}><span className="text-story">&nbsp;{activity.chapter_name}&nbsp;</span></Link>
             to
            <Link to={`/info/${activity.content_ID}`}><span className="text-story">&nbsp;{activity.content_name}</span></Link>
          </p>
        </div>
        <p className='text-right col-span-3'>{formatDate(activity)}</p>
      </div>)
  }
  else if(activity.activity_type == "publish_comic"){
    return (
      <div className='grid grid-cols-12 text-xl'>
        <div className='flex flex-row col-span-9'>
          <p className='pr-1'>
            <Link to={`/profile/${username}`}><span className="text-link">{username}</span></Link>
            &nbsp;published a new comic
            <Link to={`/info/${activity.content_ID}`}><span className="text-comic">&nbsp;{activity.content_name}</span></Link>
          </p>
        </div>
        <p className='text-right col-span-3'>{formatDate(activity)}</p>
      </div>)
  }
  else if(activity.activity_type == "publish_story"){
    return (
      <div className='grid grid-cols-12 text-xl'>
        <div className='flex flex-row col-span-9'>
          <p className='pr-1'>
            <Link to={`/profile/${username}`}><span className="text-link">{username}</span></Link>
            &nbsp;published a new story
            <Link to={`/info/${activity.content_ID}`}><span className="text-story">&nbsp;{activity.content_name}</span></Link>
          </p>
        </div>
        <p className='text-right col-span-3'>{formatDate(activity)}</p>
      </div>)
  }
}

export default Activity;
