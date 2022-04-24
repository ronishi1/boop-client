import React, {useEffect} 	from 'react';
import ContentCard from '../common/ContentCard';
import { GET_RECENT_CONTENT } from '../../cache/queries'
import { useQuery } from '@apollo/client';

const HomeRecentlyReleased= () => {
  // USES SMALL CONTENT CARDS
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=211%3A353

  const { data, loading, refetch } = useQuery(GET_RECENT_CONTENT);

  useEffect(() => {
    refetch();
  },[])

  if(loading){
    return <div></div>
  }
  const recentContent = data.getRecentContent;

  return (
    <div>
      <p className="text-2xl ml-10">Recently Released</p>
      <div className="flex flex-row space-x-3 overflow-x-auto ml-10">
        {recentContent.map((content) => (
          <ContentCard
            id={content._id}
            key={content._id}
            title={content.series_title}
            cover={content.cover_image}
            size="S"
            contentType={content.content_type}/>
        ))}
      </div>
    </div>
  );
}

export default HomeRecentlyReleased;
