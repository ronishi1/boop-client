import React 	from 'react';
import { Link } from "react-router-dom";

const ForumManagementReply = ({replyDate, replyAuthor, title}) => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=718%3A3453
  const months = [ "Jan", "Feb", "Mar", "April", "May", "June",
  "July", "Aug", "Sep", "Oct", "Nov", "Dec" ];
  
  const formatDate = () => {
    let date = replyDate;
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
    <div className="mb-4">
      <strong>{formatDate()}</strong>
      <div className="text-base">
        <p className="cursor-pointer text-discussion">{replyAuthor}</p>
        replied to your post.
      </div>
      <div className="text-discussion"><Link to="/post">{title}</Link></div>
    </div>
  );
}

export default ForumManagementReply;
