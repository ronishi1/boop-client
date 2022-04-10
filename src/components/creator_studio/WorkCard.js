import React 	from 'react';
import { Link } from "react-router-dom";

const WorkCard = ({title,cover,content_type}) => {
  // Work card is each individual document on the google drive esque page
  let badge;
  let link;
  if(content_type == "C"){
    badge = <div className="badge text-xs border-none bg-comic mx-auto">Comic</div>;
    link = "/comic-edit";
  }
  else {
    badge = <div className="badge text-xs border-none bg-story mx-auto">Story</div>
    link = "/story-edit";
  }
  return (
    <div>
      <Link to={link}>
        <div className="cursor-pointer card text-primary-content text-center h-48 w-32">
          <div className="card-body justify-end p-2 text-white" style={{background:`linear-gradient(180deg, hsl(0, 100%, 100%, 0), hsl(0, 0%, 0%, 0.65)),url(${cover}) no-repeat center center`,backgroundSize:"cover"}}>
            <div className="font-medium card-title leading-4 text-sm block">{title}</div>
            {badge}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default WorkCard;
