import React from 'react';
import { Link } from "react-router-dom";
// import link

const SearchEntry = ({cover, title, author, publicationDate, contentType, synopsis}) => {
    
    const formatDate = () => {
        let month = publicationDate.getMonth()
        let day = publicationDate.getDate()
        let year = publicationDate.getYear()
        return month + "/" + day + "/" + `${year + 1900}`
    } 

    const badgeColor = () => {
        if (contentType == "C") {
            return "bg-comic"
        } 
        else if (contentType == "S"){
            return "bg-story"
        }
        else {
            return "bg-forum"
        }
    }   
    const setContent = () => {
        if (contentType == "C") {
            return "Comic"
        } 
        else if (contentType == "S"){
            return "Story"
        }
        else {
            return "Forum Post"
        }
    }
    return (
        <div className="flex flex-row">
            <Link to="/info"><img className="object-fit max-h-48 max-w-fit w-auto h-auto rounded" src={cover}/></Link>
            <div className="ml-2 h-60 w-72">
                <Link to="/info"><div className="text-xl font-medium truncate">{title}</div></Link>
                <div className="text-base font-medium">{author}</div>
                <div className="text-base font-medium">{formatDate()}</div>

                <div className={`badge ${badgeColor()} text-xs border-none -ml-1`}>{setContent()}</div>

                <div className="text-sm line-clamp-5">
                    {synopsis}
                </div>
            </div>
        </div>
    );
}

export default SearchEntry;
