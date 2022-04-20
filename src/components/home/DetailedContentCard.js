import React 	from 'react';
import { useNavigate } from "react-router-dom";

const DetailedContentCard = ({id,title,cover,genres,synopsis,type}) => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=211%3A556
  let contentColor = "";
  let contentBadge = <></>;
  switch (type) {
    case "C":
      contentColor = "comic"
      contentBadge = <div className={"badge text-xs border-none mr-1 bg-"+contentColor}>Comic</div>
      break;
    case "S":
      contentColor = "story"
      contentBadge = <div className={"badge text-xs border-none mr-1 bg-"+contentColor}>Story</div>
      break;
    default:
  }

  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/info/"+id)
  }

  return (
    <div className="flex flex-row hover:cursor-pointer" onClick={handleClick}>
      <img className="object-cover w-40 h-60 rounded" src={cover}/>
      <div className="ml-2 min-h-60 max-h-60 min-w-96 max-w-96">
        <div className={"text-lg font-medium"}>{title}</div>
        <div className="-mt-1.5">
          {contentBadge}
          {genres.map((genre) => (
            <div className={"badge text-xs border-none mr-1 bg-"+contentColor}>{genre}</div>
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
