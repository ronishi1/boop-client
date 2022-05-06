import React from 'react';
import { Link } from "react-router-dom";

const SearchEntry = ({content}) => {

    const formatDate = () => {
      let publicationDate = new Date(content.content_timestamp);
      let month = publicationDate.getMonth()
      let day = publicationDate.getDate()
      let year = publicationDate.getYear()
      return month + "/" + day + "/" + `${year + 1900}`
    }

    const badgeColor = () => {
        if (content.content_type === "C") {
            return "bg-comic"
        }
        else if (content.content_type === "S"){
            return "bg-story"
        }
        else {
            return "bg-forum"
        }
    }
    const setContent = () => {
        if (content.content_type === "C") {
            return "Comic"
        }
        else if (content.content_type === "S"){
            return "Story"
        }
        else {
            return "Forum Post"
        }
    }
    return (
        <div className="flex flex-row">
          {content.content_type == "F" ?
            <Link to={`/post/${content.content_ID}`}>
              <img className="object-cover w-40 h-60 rounded" src={content.content_image}/>
            </Link>
            :
            <Link to={`/info/${content.content_ID}`}>
              <img className="object-cover w-40 h-60 rounded" src={content.content_image}/>
            </Link>
          }
            <div className="ml-2 h-60 w-72">
              {content.content_type == "F" ?
                <Link to={`/post/${content.content_ID}`}>
                  <div className="text-xl font-medium truncate text-forum">{content.content_title}</div>
                </Link>
                :
                <Link to={`/info/${content.content_ID}`}>
                  <div className={`text-xl font-medium truncate ${content.content_type == "C" ? "text-comic" : "text-story"}`}>{content.content_title}</div>
                </Link>
              }
              {content.content_author_name != "AutoModerator" ?
                <Link to={`/profile/${content.content_author_name}`}>
                  <div className="text-base font-medium text-link">{content.content_author_name}</div>
                </Link>
                :
                <div className="text-base font-medium">{content.content_author_name}</div>
              }
                <div className="text-base font-medium">{formatDate()}</div>

                <div className={`badge ${badgeColor()} text-xs border-none -ml-1`}>{setContent()}</div>

                <div className="text-sm line-clamp-5">
                    {content.content_info}
                </div>
            </div>
        </div>
    );
}

export default SearchEntry;
