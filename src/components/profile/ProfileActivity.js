import React, {useEffect} from 'react';
import { GET_USER_ACTIVITY_FEED } from '../../cache/queries';
import { useQuery } 	from '@apollo/client';
import {Link} from 'react-router-dom';
const ProfileActivity = ({username}) => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=330%3A2333
  let activities = [];
  const { loading, error, data, refetch } = useQuery(GET_USER_ACTIVITY_FEED, {
    variables: { username: username },
  });
  if(loading){
    console.log(loading)
  }
  if(data){
    console.log(data.getUserActivityFeed);
    console.log(data);
    activities = data.getUserActivityFeed;
  }
  useEffect(() => {
    refetch();
  },[])
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
  return (
    <div className='card static ml-8 py-4 px-12 shadow'>
      <p className='py-4 text-lg font-medium'>Recent Activity</p>
      {activities.length == 0 ? <div className="text-gray-400">This user has no recent activity.</div> : <></>}
      {activities.slice(0).reverse().map((activity,index) => {
        if(activity.activity_type == "publish_comic_chapter"){
          return (
            <div key={index} className='grid grid-cols-12'>
              <div className='flex flex-row col-span-9'>
                <p className='pr-1'>
                  Added new chapter
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
            <div key={index} className='grid grid-cols-12'>
              <div className='flex flex-row col-span-9'>
                <p className='pr-1'>
                  Added new chapter
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
            <div key={index} className='grid grid-cols-12'>
              <div className='flex flex-row col-span-9'>
                <p className='pr-1'>
                  Published a new comic
                  <Link to={`/info/${activity.content_ID}`}><span className="text-comic">&nbsp;{activity.content_name}</span></Link>
                </p>
              </div>
              <p className='text-right col-span-3'>{formatDate(activity)}</p>
            </div>)
        }
        else if(activity.activity_type == "publish_story"){
          return (
            <div key={index} className='grid grid-cols-12'>
              <div className='flex flex-row col-span-9'>
                <p className='pr-1'>
                  Published a new story
                  <Link to={`/info/${activity.content_ID}`}><span className="text-story">&nbsp;{activity.content_name}</span></Link>
                </p>
              </div>
              <p className='text-right col-span-3'>{formatDate(activity)}</p>
            </div>)
        }
      })}

    </div>
  );
}

export default ProfileActivity;
