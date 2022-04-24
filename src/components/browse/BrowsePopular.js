import React, {useEffect} 	from 'react';
import ContentCard from '../common/ContentCard';
import { GET_POPULAR_CONTENT } from '../../cache/queries'
import { useQuery } from '@apollo/client';
import Loading from '../loading/Loading'
const BrowsePopular = () => {
  // USES MEDIUM CONTENT CARDS
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=293%3A2104

  const { data, loading, refetch } = useQuery(GET_POPULAR_CONTENT);

  useEffect(() => {
    refetch();
  },[])

  let contents = [];
  if(data){
    contents = data.getPopularContent;
  }

  return (
    <div>
      <p className="text-2xl">Most Popular</p>
      <div className="overflow-x-scroll flex flex-row space-x-3">
        {contents.map((content) => (
          <ContentCard
            key={content._id}
            title={content.series_title}
             cover={content.cover_image}
             size="M"
             id={content._id}
             contentType={content.content_type} />
        ))}
      </div>
    </div>
  );
}

export default BrowsePopular;
