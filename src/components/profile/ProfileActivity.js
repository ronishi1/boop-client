import React 	from 'react';

const ProfileActivity = ({activities}) => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=330%3A2333
  const months = [ "Jan", "Feb", "Mar", "April", "May", "June",
  "July", "Aug", "Sep", "Oct", "Nov", "Dec" ];
  
  const formatDate = (content) => {
    let date = content.publication_date;
    console.log(date)
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
    <div className='card ml-8 py-4 px-12 shadow'>
      <p className='py-4'>Recent Activity</p>
      {activities.map((activity) => {
        return (
          <div className='grid grid-cols-2'>
            <div className='flex flex-row'>
              <p className='pr-1'>{activity.activity_type}</p>
              <p className={"text-"+activity.content.content_color}>{activity.content.title}</p>
            </div>
            <p className='text-right'>{formatDate(activity.content)}</p>
          </div>)
      })}
      
    </div>
  );
}

export default ProfileActivity;
