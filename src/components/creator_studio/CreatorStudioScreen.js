import React, {useState, useEffect} from "react";
import WorkCard from './WorkCard';
import WorkListEntry from './WorkListEntry';
import CreateContent from './CreateContent';
import Unauthorized from '../unauthorized/Unauthorized';
import Loading from '../loading/Loading';
import { GET_MY_CONTENT } from '../../cache/queries';
import { DELETE_CONTENT } from '../../cache/mutations';
import {Transition} from '@headlessui/react'
import {useQuery, useMutation} from '@apollo/client'
const CreatorStudioScreen = ({user}) => {
  // will replace published with dates later, currently just using booleans to make it easier
  let contents;
  const [showCreate,setShowCreate] = useState(false);
  const [showDelete,setShowDelete] = useState(false);

  const [toDelete,setToDelete] = useState("");
  const [DeleteContent] = useMutation(DELETE_CONTENT);

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

  const deleteContentCallback = (contentID) => {
    setToDelete(contentID);
    setShowDelete(true);
  }

  const handleDelete = async() => {
    await DeleteContent({variables:{contentID:toDelete}});
    refetch();
    setShowDelete(false);
  }

  let anyPublished = false;
  let anyUnpublished = false;
  if(contents){
    contents.forEach((content) => {
      if(content != null){
        let published = false;
        let temp = new Date(content.publication_date);
        let temp2 = new Date(null);
        if(temp.getTime() != temp2.getTime()){
          anyPublished = true;
        }
        if(temp.getTime() == temp2.getTime()){
          anyUnpublished = true;
        }
      }
    })
  }
  if(loading){
    return <Loading />
  }
  if(user){
    return contents ? (
      <div>
        <div>
          <input
            type="checkbox"
            id="create-content-modal"
            className="modal-toggle"
            checked={showCreate}
            onChange={() => {setShowCreate(false)}}
          />

        <label htmlFor="create-content-modal" className="modal cursor-pointer">
            <label className="modal-box w-4/12 max-w-5xl">
              <CreateContent
                toggleCreateCallback={setShowCreate}/>
            </label>
          </label>
        </div>
        <div>
          <input
            type="checkbox"
            id="delete-modal"
            className="modal-toggle"
            checked={showDelete}
            onChange={() => {setShowDelete(false)}}
            />

          <label htmlFor="delete-modal" className="modal cursor-pointer">
            <label className="modal-box w-4/12 max-w-5xl">
              <div>
                <div className="grid items-center space-y-4 p-4 mr-8 ml-8">
                  <div className="w-full flex flex-row justify-between">
                    <div className="text-left text-xl font-medium">
                      Are you sure you want to delete this work?
                    </div>
                    <div className="cursor-pointer" onClick={() => {setShowDelete(false)}}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="grey"
                        strokeWidth={2}
                        >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                          />
                      </svg>
                    </div>
                  </div>
                  <span className="w-full flex flex-row justify-between items-center">
                    <label
                      className="text-zinc-400 text-sm ml-2 cursor-pointer"
                      onClick={() => {setShowDelete(false)}}
                      >
                      Cancel
                    </label>
                    <div
                      className="btn bg-red-400 border-none hover:bg-red-500 normal-case mr-2"
                      onClick={() => {handleDelete()}}
                      >
                      Delete
                    </div>
                  </span>
                </div>
              </div>
            </label>
          </label>
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-11">
            <div className="col-span-4 border-r-2  border-base-content/10">
              <div className="flex flex-row items-center justify-between">
                <div className="text-2xl font-normal">Works Overview</div>
                <div className="btn btn-xs mr-7 bg-base-content/90 pr-3 border-none" onClick={() => {setShowCreate(true)}}>+ Create</div>
              </div>
              {contents.map((content) => {
                if(content != null){
                  let published = false;
                  let temp = new Date(content.publication_date);
                  let temp2 = new Date(null);
                  if(temp.getTime() != temp2.getTime()){
                    published = true;
                  }
                  return(
                    <WorkListEntry
                    key={content._id}
                    contentID={content._id}
                    seriesTitle={content.series_title}
                    contentType={content.content_type}
                    published={published}
                    deleteContentCallback={deleteContentCallback} />
                  )
                }
              })}
              {contents.length == 0 ? <div className="text-lg text-gray-400">You have no works in progress</div> : <></>}
            </div>
            <div className="col-span-7 ml-10">
              <div className="text-2xl font-normal">Published Works</div>
                <Transition
                  appear={true}
                  show={true}
                  enter="transition-opacity duration-[400ms]"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity duration-0"
                  leaveFrom="hidden"
                  leaveTo="hidden"
                  >
              <div className="flex flex-row overflow-x-scroll space-x-5">
                {contents.map((content) => {
                    if(content != null){
                    let temp = new Date(content.publication_date);
                    let temp2 = new Date(null);
                    if(temp.getTime() != temp2.getTime()){
                      return (
                        <WorkCard
                          key={content._id}
                          contentID={content._id}
                          seriesTitle={content.series_title}
                          cover={content.cover_image}
                          contentType={content.content_type}/>
                      )
                    }
                  }
                })}
                {!anyPublished ? <div className="text-lg text-gray-400">You have no published works.</div> : <></>}
              </div>
            </Transition>
              <div className="divider"></div>
              <div className="text-2xl font-normal">Unpublished Works</div>
                <Transition
                  appear={true}
                  show={true}
                  enter="transition-opacity duration-[400ms]"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity duration-0"
                  leaveFrom="hidden"
                  leaveTo="hidden"
                  >
              <div className="flex flex-row overflow-x-scroll space-x-5">
                {contents.map((content) => {
                  if(content != null){
                    let temp = new Date(content.publication_date);
                    let temp2 = new Date(null);
                    if(temp.getTime() == temp2.getTime()){
                      return (
                        <WorkCard
                          key={content._id}
                          contentID={content._id}
                          seriesTitle={content.series_title}
                          cover={content.cover_image}
                          contentType={content.content_type}/>
                      )
                    }
                  }
                })}
                {!anyUnpublished ? <div className="text-lg text-gray-400">You have no unpublished works.</div> : <></>}

              </div>
            </Transition>

            </div>
          </div>
        </div>
      </div>
    ) : <div>Loading...</div>
  }
  else {
    return (
      <div className="container mx-auto">
        <Unauthorized message="You must be logged in to view this page." />
      </div>
    )
  }
};

export default CreatorStudioScreen;
