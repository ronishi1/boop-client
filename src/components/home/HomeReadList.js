import React from "react";
import ContentCard from "../common/ContentCard";
import { GET_CURRENT_USER } from '../../cache/queries'
import { useQuery } from '@apollo/client';

const HomeReadList = () => {
  // USES MEDIUM CONTENT CARDS
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=276%3A760
  const { data, loading, refetch } = useQuery(GET_CURRENT_USER);
  if(loading){
    return <div></div>
  }

  const readList = data.getCurrentUser.read_list;

  return (
    <div>
      <div className="ml-10 text-2xl">My Read List</div>
      {readList.length != 0 ? <div className="flex flex-row space-x-3 overflow-x-auto ml-10">
        {readList.map((content) => (
          <ContentCard
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
