import React from "react";
import ContentCard from "../common/ContentCard";
import { GET_FILTERED_CONTENT } from '../../cache/queries'
import { useQuery } from '@apollo/client';
import Loading from '../loading/Loading'
const BrowseFiltered = ({genres,rating,releaseYears,contentTypes}) => {
  let contents = [];

  let inputRating = null;
  if(rating.length > 0){
    inputRating = parseInt(rating[0].charAt(1));
  }
  let inputObj = {
    genres:genres,
    rating:inputRating,
    releaseYears: releaseYears,
    contentTypes:contentTypes
  }
  console.log(inputObj);

  const { loading, error, data, refetch } = useQuery(GET_FILTERED_CONTENT, {
      variables: inputObj,
    });

  if(loading) { console.log(loading, 'loading'); }
  if(error) { console.log(error, 'error'); }
  if(data) {
    contents = data.getFilteredContent;
    console.log(contents);
  }
  console.log(genres);
  console.log(rating);
  console.log(releaseYears);
  console.log(contentTypes);
  // USES MEDIUM CONTENT CARDS
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=298%3A1298
  return (
    <div>
      <div className="grid lg:grid-cols-8 md:grid-cols-4 gap-6">
        {contents.map((content) => (
          <ContentCard
            title={content.series_title}
            cover={content.cover_image}
            contentType={content.content_type}
            id={content._id}
            size="M"
          />
        ))}
      </div>
    </div>
  );
};

export default BrowseFiltered;
