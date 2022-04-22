import React from "react";
import ContentCard from "../common/ContentCard";

const BrowseFiltered = () => {
  // USES MEDIUM CONTENT CARDS
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=298%3A1298
  let data = [];
  return (
    <div>
      <div className="grid lg:grid-cols-8 md:grid-cols-4 gap-6">
        {data.map((content) => (
          <ContentCard
            title={content.title}
            cover={content.cover_image}
            size="M"
          />
        ))}
      </div>
    </div>
  );
};

export default BrowseFiltered;
