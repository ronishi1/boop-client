import React, {useEffect} from "react";
import ContentCard from "../common/ContentCard";
import { GET_RECENT_CONTENT } from '../../cache/queries'
import { useQuery } from '@apollo/client';
import Loading from '../loading/Loading'

const BrowseRecent = () => {
  // USES MEDIUM CONTENT CARDS
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=293%3A1950

  const { data, loading, refetch } = useQuery(GET_RECENT_CONTENT);

  useEffect(() => {
    refetch();
  },[])

  let contents = [];
  if(data){
    contents = data.getRecentContent;
  }

  return (
    <div>
      <p className="text-2xl">Recently Released</p>
      <div className="overflow-x-scroll flex flex-row space-x-3">
        {contents.map((content) => (
          <ContentCard
            key={content._id}
            title={content.series_title}
            cover={content.cover_image}
            id={content._id}
            size="M"
            contentType={content.content_type}
          />
        ))}
      </div>
    </div>
  );
};

export default BrowseRecent;
