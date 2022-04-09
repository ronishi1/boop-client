import React 	from 'react';
import { Link } from "react-router-dom";

const ContentCard = ({title,cover,size}) => {
  // Size will be S M L
  // SEE FIGMA FOR REFERENCE
  // Small is the card size for recently released content on home for example
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=293%3A1457
  // Medium is the card size for content on browse for example\
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=293%3A1491
  // Large is the card size for content on favorite/readlist for example
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=328%3A1965

  let contentCard;
  if(size == "S"){
    contentCard =
        <Link to="/info">
          <div className="cursor-pointer card text-primary-content text-center h-36 w-24">
            <div className="card-body justify-end p-2 text-white" style={{background:`linear-gradient(180deg, hsl(0, 100%, 100%, 0), hsl(0, 0%, 0%, 0.65)),url(${cover}) no-repeat center center`,backgroundSize:"cover"}}>
              <div className="font-medium card-title block" style={{fontSize:".6rem",lineHeight:".5rem"}}>{title}</div>
            </div>
          </div>
        </Link>
  }
  else if(size == "M"){
    contentCard =
            <Link to="/info">
              <div className="cursor-pointer card text-primary-content text-center h-48 w-32">
                <div className="card-body justify-end p-2 text-white" style={{background:`linear-gradient(180deg, hsl(0, 100%, 100%, 0), hsl(0, 0%, 0%, 0.65)),url(${cover}) no-repeat center center`,backgroundSize:"cover"}}>
                  <div className="font-medium card-title leading-4 text-xs block">{title}</div>
                </div>
              </div>
            </Link>
  }
  else if(size == "L"){
    contentCard =
            <Link to="/info">
              <div className="cursor-pointer card text-primary-content text-center h-60 w-40">
                <div className="card-body justify-end p-2 text-white" style={{background:`linear-gradient(180deg, hsl(0, 100%, 100%, 0), hsl(0, 0%, 0%, 0.65)),url(${cover}) no-repeat center center`,backgroundSize:"cover"}}>
                  <div className="font-medium card-title leading-4 text-sm block">{title}</div>
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
