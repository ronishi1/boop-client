import React 	from 'react';

const DiscussionPost = ({post}) => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=315%3A2257
  const months = [ "Jan", "Feb", "Mar", "April", "May", "June",
  "July", "Aug", "Sep", "Oct", "Nov", "Dec" ];
  
  const formatDate = () => {
    let date = post.publication_date;
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
      <img className="h-full object-contain" src={post.cover_image} alt="cover art"/>
      <div className='pl-2 text-xs w-full'>
        <p className='text-secondary'>{post.title}</p>
        <p>by: {post.author}</p>
        <p>{formatDate()}</p>
      </div>
    </div>
  );
}

export default DiscussionPost;
