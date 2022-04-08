import React 	from 'react';

const ForumTopicTableEntry = ({post}) => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=275%3A1703
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
    <tr className='hover:bg-gray-400/25'>
      <th className='h-16 text-left grid grid-cols-2 m-2'>
        <div className='h-16 flex flex-row'>
          <img className="h-full w-16 mr-2 object-contain" src={post.cover_image} alt="cover art"/>
          <div className='flex flex-col'>
            <div className='text-lg text-link'>{post.title}</div>
            <div className='flex flex-row text-sm'>
              <div>{formatDate(post.publication_date)}</div>
              <div className='px-1'> by </div>
              <div className='text-link'>{post.author}</div>
            </div>
          </div>
        </div>
        <div className='justify-self-end'>
          {post.tags.map((tag) => {
            return (
            <div class={'badge'}>
              {tag}
            </div>);
          })}
        </div>
      </th>
      <th>{post.replies.length}</th>
      <th>{post.recent_post.toDateString()}</th>
    </tr>
  );
}

export default ForumTopicTableEntry;
