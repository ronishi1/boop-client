import React 	from 'react';
import { GET_USER_PUBLISHED } from '../../cache/queries';
import { useQuery } 	from '@apollo/client';
import ContentCard from '../common/ContentCard';
const ProfilePublished = ({username}) => {
  // Holds the users published
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=330%3A2331
  let publishedWorks = [];

  const { loading, error, data, refetch } = useQuery(GET_USER_PUBLISHED, {
      variables: { username: username },
    });

  if(loading) { console.log(loading, 'loading'); }
  if(error) { console.log(error, 'error'); }
  if(data) {
    publishedWorks = data.getUserPublished;
    console.log(publishedWorks);
  }
  return (
    <div className="card ml-8 my-4 py-4 px-12 shadow">
      <div className='py-4 text-lg font-medium'>Published Works</div>
      <div className='flex flex-row space-x-2 overflow-x-auto'>
        {publishedWorks.map((content) => (
          <ContentCard
            id={content._id}
            title={content.series_title}
            cover={content.cover_image}
            contentType={content.content_type}
            size="S"
          />
        ))}
      </div>
    </div>
  );
}

export default ProfilePublished;
