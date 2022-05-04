import React, {useEffect}	from 'react';
import { useParams } from 'react-router-dom'
import { GET_FOLLOWED_ACTIVITY } from '../../cache/queries';
import { useQuery } from '@apollo/client';
import Loading from '../loading/Loading';
import Activity from './Activity';
import Unauthorized from '../unauthorized/Unauthorized';
const FollowedScreen = ({user}) => {
  let activities = [];

  const { loading, error, data, refetch } = useQuery(GET_FOLLOWED_ACTIVITY);

  if(loading) { console.log(loading, 'loading'); }
	if(error) { console.log(error, 'error'); }
  if(data) {
    activities = data.getFollowedActivity;
  }

  useEffect(() => {
    refetch();
  },[])

  if(loading){
    return <Loading />
  }
  if(!user){
    return <Unauthorized message="You must be logged in to view this page." />
  }
  else {
    return (
      <div className="container mx-auto w-4/5">
        <div className="text-3xl">
         Followed Users Recent Activity
        </div>
        <div className="divider"></div>
        <div className='grid grid-cols-12 font-normal text-2xl'>
          <div className="col-span-9">
            Activity
          </div>
          <div className="col-span-3 text-right">
            Timestamp
          </div>
        </div>

        <div>
          {activities.map((activity) => (
            <Activity activity={activity.activity} username={activity.username} />
          ))}
          {activities.length == 0 ? <div className="text-gray-400 text-2xl">There is no recent activity by any users you follow.</div> : <></>}
        </div>
      </div>
    );
  }
}

export default FollowedScreen;
