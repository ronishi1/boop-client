import React 	from 'react';

const ForumReply = ({reply}) => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=341%3A2898
  const months = [ "Jan", "Feb", "Mar", "April", "May", "June",
  "July", "Aug", "Sep", "Oct", "Nov", "Dec" ];
  
  const formatDate = () => {
    let date = reply.publication_date;
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
    <div className='card rounded-none w-full border-t-2 shadow mb-4'>
      <div className='border-b-2'>{formatDate(reply.publication_date)}</div>
      <div className='flex flex-cols items-stretch'>
        <div className='w-1/6 border-r-2'>
          <div className='flex flex-col'>
            <p className='text-link font-medium'>{reply.username}</p>
            <img className="h-full object-contain" src={reply.profile_picture}/>
            <p>Posts: {reply.post_count}</p>
          </div>
        </div>
        <div className='w-5/6'>
          <p className='text-left h-min'>
            {reply.reply_content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ForumReply;
