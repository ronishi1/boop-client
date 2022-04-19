import React 	from 'react';
import { Link } from "react-router-dom";

const DetailedContentCard = ({title,cover,genres,synopsis}) => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=211%3A556
  return (
    <div className="flex flex-row">
      <img className="object-cover w-40 h-60 rounded" src={cover}/>
      <div className="ml-2 min-h-60 max-h-60 min-w-96 max-w-96">
        <Link to="/info">
          <div className="text-lg font-medium">{title}</div>
        </Link>
        <div className="-mt-1.5">
          {genres.map((genre) => (
            <div className="badge bg-comic text-xs border-none mr-1">{genre}</div>
          ))}
        </div>
        <div className="text-sm line-clamp-9">
          {synopsis}
        </div>
      </div>
    </div>
        );
}

export default DetailedContentCard;
