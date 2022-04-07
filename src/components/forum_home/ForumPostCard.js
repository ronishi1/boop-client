import React 	from 'react';

const ForumPostCard = ({post}) => {
  // USED ON FORUM HOME SCREEN
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=255%3A543
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
    <div className='card-content flex flex-row'>
      <figure className='h-full inline-flex'>
        <img className="h-full object-contain pr-4" src={post.cover_image} alt="cover art"/>
        <div className='flex flex-col'>
          <div className='text-md text-link fond-md'>{post.title}</div>
          <div className='text-xs'>
            <div className='flex flex-row'>
              <div className='mr-1'>by</div>
            <div className='text-link'>{post.author}</div>
            </div>
            {formatDate()}
          </div>
        </div>
        
      </figure>
    </div>
  );
}

export default ForumPostCard;
