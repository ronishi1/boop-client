import React 	from 'react';
import {Link} from 'react-router-dom'
import { GET_USER_PROFILE } from '../../cache/queries';
import { useQuery, useMutation } 	from '@apollo/client';

const Activity = ({activity,username}) => {
  let profile = {};
  const { loading, error, data, refetch } = useQuery(GET_USER_PROFILE, {
    variables: { username: username },
  });

  if(loading) { console.log(loading, 'loading'); }
  if(error) { console.log(error, 'error'); }
  if(data) {
    profile = data.getUserProfile;
  }

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
  console.log(activity);
  console.log(username);
  console.log(profile);

  if(activity.activity_type == "publish_comic_chapter"){
    return (
      <div className='grid grid-cols-12 text-lg'>
        <div className='flex flex-row col-span-9'>
          <p className='pr-1'>
            <div className="flex flex-row items-center">
              <Link to={`/profile/${username}`}>
                <div className="flex flex-row items-center">
                  <img
                    className="h-8 -mx-2 object-contain mask mask-circle"
                    src={profile.profile_pic ? profile.profile_pic : "https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png"} />
                  <div className="text-link">{username}</div>
                </div>
              </Link>
              <div>
                &nbsp;added new chapter
                <Link to={`/view/${activity.chapter_ID}`}><span className="text-comic">&nbsp;{activity.chapter_name}&nbsp;</span></Link>
                to
                <Link to={`/info/${activity.content_ID}`}><span className="text-comic">&nbsp;{activity.content_name}</span></Link>
              </div>
            </div>
          </p>
        </div>
        <p className='text-right col-span-3'>{formatDate(activity)}</p>
      </div>)
    }
    else if (activity.activity_type == "publish_story_chapter"){
      return (
        <div className='grid grid-cols-12 text-lg'>
          <div className='flex flex-row col-span-9'>
            <p className='pr-1'>
              <div className="flex flex-row items-center">
                <Link to={`/profile/${username}`}>
                  <div className="flex flex-row items-center">
                    <img
                      className="h-8 -mx-2 object-contain mask mask-circle"
                      src={profile.profile_pic ? profile.profile_pic : "https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png"} />
                    <div className="text-link">{username}</div>
                  </div>
                </Link>
                <div>
                  &nbsp;added new chapter
                  <Link to={`/view/${activity.chapter_ID}`}><span className="text-story">&nbsp;{activity.chapter_name}&nbsp;</span></Link>
                  to
                  <Link to={`/info/${activity.content_ID}`}><span className="text-story">&nbsp;{activity.content_name}</span></Link>
                </div>
              </div>
            </p>
          </div>
          <p className='text-right col-span-3'>{formatDate(activity)}</p>
        </div>)
      }
      else if(activity.activity_type == "publish_comic"){
        return (
          <div className='grid grid-cols-12 text-lg'>
            <div className='flex flex-row col-span-9'>
              <p className='pr-1'>
                <div className="flex flex-row items-center">
                  <Link to={`/profile/${username}`}>
                    <div className="flex flex-row items-center">
                      <img
                        className="h-8 -mx-2 object-contain mask mask-circle"
                        src={profile.profile_pic ? profile.profile_pic : "https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png"} />
                      <div className="text-link">{username}</div>
                    </div>
                  </Link>
                  <div>
                    &nbsp;published a new comic
                    <Link to={`/info/${activity.content_ID}`}><span className="text-comic">&nbsp;{activity.content_name}</span></Link>
                  </div></div>
                </p>
              </div>
              <p className='text-right col-span-3'>{formatDate(activity)}</p>
            </div>)
          }
          else if(activity.activity_type == "publish_story"){
            return (
              <div className='grid grid-cols-12 text-lg'>
                <div className='flex flex-row col-span-9'>
                  <p className='pr-1'>
                    <div className="flex flex-row items-center">
                      <Link to={`/profile/${username}`}>
                        <div className="flex flex-row items-center">
                          <img
                            className="h-8 -mx-2 object-contain mask mask-circle"
                            src={profile.profile_pic ? profile.profile_pic : "https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png"} />
                          <div className="text-link">{username}</div>
                        </div>
                        </Link>
                        <div>
                        &nbsp;published a new story
                        <Link to={`/info/${activity.content_ID}`}><span className="text-story">&nbsp;{activity.content_name}</span></Link>
                      </div>
                    </div>
                  </p>
                </div>
                <p className='text-right col-span-3'>{formatDate(activity)}</p>
              </div>)
            }
            else {
              return <div></div>
            }
          }

          export default Activity;
