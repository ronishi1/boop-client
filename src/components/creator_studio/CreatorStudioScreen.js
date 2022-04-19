import React, {useState, useEffect} from "react";
import WorkCard from './WorkCard';
import WorkListEntry from './WorkListEntry';
import CreateContent from './CreateContent';
import { GET_MY_CONTENT } from '../../cache/queries';
import {useQuery, useMutation} from '@apollo/client'
const CreatorStudioScreen = () => {
  // will replace published with dates later, currently just using booleans to make it easier
  let contents;
  const [showCreate,setShowCreate] = useState(false);

  const { loading, error, data, refetch } = useQuery(GET_MY_CONTENT);

  useEffect(() => {
    refetch();
  })
  if(loading) { console.log(loading, 'loading'); }
  if(error) { console.log(error, 'error'); }
  if(data) {
    contents = data.getMyContent;
    console.log(contents);
  }

  return contents ? (
    <div>
      <div>
        <input
          type="checkbox"
          id="create-content-modal"
          class="modal-toggle"
          checked={showCreate}
          onClick={() => {setShowCreate(false)}}
        />

      <label for="create-content-modal" className="modal cursor-pointer">
          <label class="modal-box w-4/12 max-w-5xl">
            <CreateContent
              toggleCreateCallback={setShowCreate}/>
          </label>
        </label>
      </div>
      <div class="container mx-auto">
        <div className="grid grid-cols-4">
          <div className="col-span-1 border-r-2  border-base-content/10">
            <div className="flex flex-row items-center justify-between">
              <div className="text-2xl font-normal">Works Overview</div>
              <div className="btn btn-xs mr-7 bg-base-content/90 pr-3 border-none" onClick={() => {setShowCreate(true)}}>+ Create</div>
            </div>
            {contents.map((content) => (
              <WorkListEntry seriesTitle={content.series_title} contentType={content.content_type} published={content.published} />
            ))}
          </div>
          <div className="col-span-3 ml-10">
            <div className="text-2xl font-normal">Published Works</div>
            <div className="flex flex-row overflow-x-scroll space-x-5">
              {contents.map((content) => {
                let temp = new Date(content.publication_date);
                let temp2 = new Date(null);
                if(temp.getTime() != temp2.getTime()){
                  return <WorkCard contentID={content._id} seriesTitle={content.series_title} cover={content.cover_image} contentType={content.content_type}/>
                }
              })}
            </div>
            <div className="divider"></div>
            <div className="text-2xl font-normal">Unpublished Works</div>
            <div className="flex flex-row overflow-x-scroll space-x-5">
              {contents.map((content) => {
                let temp = new Date(content.publication_date);
                let temp2 = new Date(null);
                if(temp.getTime() == temp2.getTime()){
                  return <WorkCard contentID={content._id} seriesTitle={content.series_title} cover={content.cover_image} contentType={content.content_type}/>
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : <div>Loading...</div>
};

export default CreatorStudioScreen;
