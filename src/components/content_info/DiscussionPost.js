import React 	from 'react';
import {Link} from 'react-router-dom';
import { GET_POST_BASIC } from '../../cache/queries';
import { useQuery } from '@apollo/client';

const DiscussionPost = ({post,coverImage}) => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=315%3A2257
  const months = [ "Jan", "Feb", "Mar", "April", "May", "June",
  "July", "Aug", "Sep", "Oct", "Nov", "Dec" ];

  const { data, loading, error, refetch } = useQuery(GET_POST_BASIC, {
    variables: { postId: post },
  });

  if(loading){
    return <></>;
  }

  if(error){
    return <div>error</div>
  }

  let post_data = data.getPost;
  let date = new Date(post_data.timestamp)

  const formatDate = (date) => {
    let month = months[date.getMonth()-1];
    let pm = date.getHours() > 12;
    let hour = date.getHours();
    if(pm) hour -= 12;
    if(hour == 0) hour = 12;
    let strHour = ("0" + hour).slice(-2);
    let strMinutes = ("0" + date.getMinutes()).slice(-2);
    return month + " " + date.getDate() + ", " + strHour + ":" + strMinutes + (pm ? "pm" : "am");
  }

  return (
    <div className='flex flex-row h-full '>
      <img className="h-24 w-16 object-cover" src={coverImage} alt="cover art"/>
      <div className='pl-2 text-xs w-full'>
        <Link to="/post">
          <p className='card-title text-link'>{post_data.title}</p>
        </Link>
        <div className='flex flex-row'>by: <p className='text-link'>{post_data.author_name}</p></div>
        <p>{formatDate(date)}</p>
      </div>
    </div>
  );
}

export default DiscussionPost;
