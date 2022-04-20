import React from "react";
import ContentCard from "../common/ContentCard";
import { GET_READ_LIST } from '../../cache/queries'
import { useQuery } from '@apollo/client';

const HomeReadList = ({user}) => {
  // USES MEDIUM CONTENT CARDS
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=276%3A760
  const { data, loading, refetch } = useQuery(GET_READ_LIST, {
    variables: {
      userID: user._id
    }
  });

  if(loading){
    return <div></div>
  }

  const readList = data.getReadList;

  return (
    <div>
      <div className="ml-10 text-2xl">My Read List</div>
      {readList.length != 0 ? <div className="flex flex-row space-x-3 overflow-x-auto ml-10">
        {readList.map((content) => (
          <ContentCard
            id={content._id}
            title={content.series_title}
            cover={content.cover_image}
            size="M"
          />
        ))}
      </div> : <div className="ml-10 text-gray-400">Your read list is currently empty</div>}
    </div>
  );
};

export default HomeReadList;
