import React 	from 'react';
import { Link } from "react-router-dom";

const ContentCard = ({id,title,cover,size,contentType}) => {
  // Size will be S M L
  // SEE FIGMA FOR REFERENCE
  // Small is the card size for recently released content on home for example
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=293%3A1457
  // Medium is the card size for content on browse for example\
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=293%3A1491
  // Large is the card size for content on favorite/readlist for example
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=328%3A1965
  let badge;
  if(size == "S"){
    if(contentType == "C"){
      badge = <div className="badge text-[0.6rem] p-[.3rem] border-none bg-comic mx-auto">Comic</div>;
    }
    else if(contentType == "S"){
      badge = <div className="badge text-xs border-none bg-story mx-auto">Story</div>
    }
    else {
      badge = <></>
    }
  }
  if(size == "M"){
    if(contentType == "C"){
      badge = <div className="badge text-xs border-none bg-comic mx-auto">Comic</div>;
    }
    else if(contentType == "S"){
      badge = <div className="badge text-xs border-none bg-story mx-auto">Story</div>
    }
    else {
      badge = <></>
    }
  }

  let contentCard;
  if(size == "S"){
    contentCard =
        <Link to={"/info/"+id}>
          <div className="cursor-pointer card static text-primary-content text-center h-36 w-24">
            <div className="card-body justify-end p-2 text-white" style={{background:`linear-gradient(180deg, hsl(0, 100%, 100%, 0), hsl(0, 0%, 0%, 0.65)),url(${cover}) no-repeat center center`,backgroundSize:"cover"}}>
              <div className="font-medium card-title block" style={{fontSize:".65rem",lineHeight:".6rem"}}>{title}</div>
              {badge}
            </div>
          </div>
        </Link>
  }
  else if(size == "M"){
    contentCard =
            <Link to={"/info/"+id}>
              <div className="cursor-pointer card static text-primary-content text-center h-48 w-32">
                <div className="card-body justify-end p-2 text-white" style={{background:`linear-gradient(180deg, hsl(0, 100%, 100%, 0), hsl(0, 0%, 0%, 0.65)),url(${cover}) no-repeat center center`,backgroundSize:"cover"}}>
                  <div className="font-medium card-title leading-4 text-xs block">{title}</div>
                  {badge}
                </div>
              </div>
            </Link>
  }
  else if(size == "L"){
    contentCard =
            <Link to={"/info/"+id}>
              <div className="cursor-pointer card static text-primary-content text-center h-60 w-40">
                <div className="card-body justify-end p-2 text-white" style={{background:`linear-gradient(180deg, hsl(0, 100%, 100%, 0), hsl(0, 0%, 0%, 0.65)),url(${cover}) no-repeat center center`,backgroundSize:"cover"}}>
                  <div className="font-medium card-title leading-4 text-sm block">{title}</div>
                  {badge}
                </div>
              </div>
            </Link>
  }

  return (
    <div>
      {contentCard}
    </div>
  );
}

export default ContentCard;
