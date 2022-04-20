import React, { useState,useEffect } 	from 'react';
import ChapterEntry from './ChapterEntry'
import GenreSelector from './GenreSelector';
import Unauthorized from '../unauthorized/Unauthorized'
import CreateChapter from './CreateChapter'
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useLazyQuery, useMutation } 		from '@apollo/client';
import { GET_CONTENT_INFO } from '../../cache/queries';
import { uploadFile } from '../../utils/utils.js'
import { UPDATE_COVER_IMAGE, EDIT_CONTENT, DELETE_CONTENT, PUBLISH_CONTENT} from '../../cache/mutations';
import { Transition } from '@headlessui/react'
import { useNavigate } from 'react-router-dom';
const ContentManagementScreen = ({user}) => {
  let { id } = useParams();
  let navigate = useNavigate();

  const [GetContentInfo,{ loading, error, data,refetch}]= useLazyQuery(GET_CONTENT_INFO);
  const [UpdateCoverImage] = useMutation(UPDATE_COVER_IMAGE);
  const [EditContent] = useMutation(EDIT_CONTENT);
  const [DeleteContent] = useMutation(DELETE_CONTENT);
  const [PublishContent] = useMutation(PUBLISH_CONTENT);


  const [imageError, setImageError] = useState({status:false,message:""});
  const [titleError, setTitleError] = useState({status:false,message:""});
  const [content,setContent] = useState({});
  const [submitted,setSubmitted] = useState(false);
  const [showDelete,setShowDelete] = useState(false);
  const [showCreateChapter,setShowCreateChapter] = useState(false);
  const [showPublishConfirm,setShowPublishConfirm] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContent({
      ...content,
      [name]: value,
    });
  }
  useEffect(() => {
    async function fetchData() {
      let result = await GetContentInfo({variables: {contentID:id}});
      setContent(result.data.getContentInfo);
    }
    fetchData();
  },[]);

  const selectGenreCallback = (genre) => {
    let temp = content.genres;
    setContent({...content,genres:[...temp,genre]});
  }

  const updateCoverCallback = async (input) => {
    input.variables.contentID = content._id;
    await UpdateCoverImage(input);
  }

  const refetchCallback = async() => {
    let result = await GetContentInfo({variables: {contentID:id}});
    setContent(result.data.getContentInfo);
  }

  const handleUpload = async(e) => {
    const file = e.target.files[0]
    const url = await uploadFile(file, updateCoverCallback, refetchCallback, setImageError);
  }
  console.log(content);
  const handleDelete = async() => {
    await DeleteContent({variables:{contentID:id}});
    navigate("/studio");
  }

  const handlePublish = async()  => {
    await PublishContent({variables:{contentID:id}});
    navigate("/studio");
  }
  const saveChanges = async() => {
    if(content.series_title.length < 3){
      setTitleError({status:true,message:"Series title must be at least 3 characters"});
      setTimeout(() => {
        setTitleError({status:false,message:''});
      },3000)
      return;
    }
    let contentInput = {
      series_title: content.series_title,
      synopsis: content.synopsis,
      content_type: content.content_type,
      genres: content.genres
    }
    await EditContent({variables: {contentID: content._id,contentInput:contentInput}});
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    },3000)
  }
  const genres = ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Horror", "Mecha", "Music", "Mystery", "Psychological", "Romance", "SciFi", "Sports", "Supernatural", "Thriller"];
  if(user && Object.keys(content).length !== 0){
    if(user._id == content.author){
      let published = false;
      let temp = new Date(content.publication_date);
      let temp2 = new Date(null);
      if(temp.getTime() != temp2.getTime()){
        published = true;
      }
      console.log(published);
      return (
        <div className="-mt-5">
          <div>
            <input
              type="checkbox"
              id="create-chapter-modal"
              class="modal-toggle"
              checked={showCreateChapter}
              onClick={() => {setShowCreateChapter(false)}}
            />

          <label for="create-chapter-modal" className="modal cursor-pointer">
              <label class="modal-box w-4/12 max-w-5xl">
                <CreateChapter
                  toggleCreateChapterCallback={setShowCreateChapter} contentID={content._id}/>
              </label>
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="publish-confirm-modal"
              class="modal-toggle"
              checked={showPublishConfirm}
              onChange={() => {setShowPublishConfirm(false)}}
              />

            <label for="publish-confirm-modal" class="modal cursor-pointer">
              <label class="modal-box w-4/12 max-w-5xl">
                <div>
                  <div class="grid items-center space-y-4 p-4 mr-8 ml-8">
                    <div class="w-full flex flex-row justify-between">
                      <div class="text-left text-xl font-medium">
                        Are you sure you want to publish this work?
                        <div className="text-xs">You will not be able to change the title, synopsis, genres or cover image after you publish.</div>

                      </div>
                      <div className="cursor-pointer" onClick={() => {setShowPublishConfirm(false)}}>
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
                    <span class="w-full flex flex-row justify-between items-center">
                      <label
                        className="text-zinc-400 text-sm ml-2 cursor-pointer"
                        onClick={() => {setShowPublishConfirm(false)}}
                        >
                        Cancel
                      </label>
                      <div
                        className="btn bg-forum border-none hover:bg-forum/80 normal-case mr-2"
                        onClick={() => {handlePublish()}}
                        >
                        Publish
                      </div>
                    </span>
                  </div>
                </div>
              </label>
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="delete-modal"
              class="modal-toggle"
              checked={showDelete}
              onChange={() => {setShowDelete(false)}}
              />

            <label for="delete-modal" class="modal cursor-pointer">
              <label class="modal-box w-4/12 max-w-5xl">
                <div>
                  <div class="grid items-center space-y-4 p-4 mr-8 ml-8">
                    <div class="w-full flex flex-row justify-between">
                      <div class="text-left text-xl font-medium">
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
                    <span class="w-full flex flex-row justify-between items-center">
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
          <div class="container mx-auto">
            <div className='grid grid-cols-2 w-full'>
              <div className='col-span-1 flex flex-col w-full my-8 space-y-2 place-content-center w-5/6 ml-5'>

                <div className='flex justify-between space-x-2'>
                  <div className="flex flex-row">
                    <Link to="/studio">
                      <div className="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                        </svg>
                      </div>
                    </Link>
                    {published ? <></> :
                      <div className="space-x-2">
                        <button className="btn" onClick={() => saveChanges()}>Save</button>
                        <button className="btn" onClick={() => setShowPublishConfirm(true)}>Publish</button>
                      </div>
                    }
                  </div>
                  <button className="btn bg-red-400 border-none hover:bg-red-500" onClick={() => {setShowDelete(true)}}>Delete</button>
                </div>
                <Transition
                  show={submitted}
                  enter="transition-opacity duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                  >
                  <div class="alert alert-info shadow-lg">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      <span>Your changes have been saved</span>
                    </div>
                  </div>
                </Transition>
                <Transition
                  show={titleError.status}
                  enter="transition-opacity duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity duration-500"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                  >
                  <div class="alert alert-error py-1.5 shadow-lg mt-5">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      <span>{titleError.message}</span>
                    </div>
                  </div>
                </Transition>
                <div className='flex'>
                  <div className='w-full'>
                    <div class="form-control mt-2">
                      <span class="text-2xl font-medium">Series Title</span>
                      {published ?
                        <div className="text-xl">{content.series_title}</div>
                        :
                        <input
                          type="text"
                          placeholder="Title your series"
                          className="input input-bordered"
                          name="series_title"
                          value={content.series_title}
                          onChange={handleChange}
                          />
                      }
                    </div>
                    <div className="mt-2">
                      <span class="text-2xl font-medium">Synopsis</span>
                      {published ?
                      <div className="text-md">{content.synopsis}</div>
                      :
                      <textarea
                        class="textarea w-full border-2 border-gray-500/30 focus:ring-0 focus:outline-none h-64"
                        placeholder="Give your series a synopsis"
                        value = {content.synopsis}
                        onChange={(e) => {setContent({...content,synopsis:e.target.value})}}
                        />
                      }
                    </div>
                    <div className="mt-2">
                      <span class="text-2xl font-medium">Genres</span>
                      {published ?
                      <div className="flex flex-row flex-wrap space-x-1">
                        {content.genres.map((genre) => {
                          let initialState = content.genres.includes(genre)
                          return <GenreSelector genre={genre} initialState={initialState} contentType={content.content_type} selectGenreCallback={selectGenreCallback} published={true}/>
                        })}
                      </div>
                      :
                      <div className='flex flex-row flex-wrap space-x-1'>
                        {genres.map((genre) => {
                          let initialState = content.genres.includes(genre)
                          return <GenreSelector genre={genre} initialState={initialState} contentType={content.content_type} selectGenreCallback={selectGenreCallback} published={false}/>
                        })}
                      </div>
                      }
                    </div>
                    <div>
                      <Transition
                        show={imageError.status}
                        enter="transition-opacity duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        >
                        <div class="alert alert-error py-1.5 shadow-lg mt-5">
                          <div>
                            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>{imageError.message}</span>
                          </div>
                        </div>
                      </Transition>
                      <div className="flex flex-row justify-between mt-2">
                        <span className="text-2xl font-medium">Cover Image</span>
                        {published ? <></> :
                        <label for="upload-photo" className="btn btn-xs bg-forum border-none flex flex-row items-center mt-1">
                          <div className="mr-1">
                            Change cover image
                          </div>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                          </svg>
                        </label>
                      }
                      </div>
                      {published ? <></> :
                      <div className="text-xs">Please note that changing the cover image here will save it. However all other fields must be saved explicitly using the <span className="font-bold">SAVE</span> button</div>
                      }
                      {content.cover_image ?
                        <div>
                          {published ?
                            <img
                              className='w-full max-w-lg'
                              src={content.cover_image}
                              />
                            :
                            <div>
                          <input type="file" id="upload-photo" hidden="true" onChange={handleUpload}/>
                          <label for="upload-photo" className="cursor-pointer">
                            <img
                              className='w-full max-w-lg hover:cursor-pointer hover:opacity-80'
                              src={content.cover_image}
                              />
                          </label>
                        </div>
                          }
                        </div>
                        :
                        <div className="cursor-pointer">
                          <label for="upload-photo" className="cursor-pointer">
                            <div className="flex place-content-center">
                              <div className="text-lg">
                                No cover image
                              </div>
                            </div>
                            <div className="flex place-content-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                          </label>
                          <input type="file" id="upload-photo" hidden="true" onChange={handleUpload}/>

                        </div>
                      }
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-span-1 m-8'>
                <div className="flex flex-row justify-between">
                  <div className="text-2xl">
                    Chapter List
                  </div>
                  <div className="btn btn-sm mr-7 bg-base-content/90 pr-3 border-none" onClick={() => {setShowCreateChapter(true)}}>+ Create</div>
                </div>

                <div className="card static rounded-none h-full overflow-y-auto">
                  {content.chapters.map(chapter => (
                    <ChapterEntry chapterID={chapter}/>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
    else {
      return (
        <div className="container mx-auto">
          <Unauthorized message="You are not the author of this work." />
        </div>
      )
    }
  }
  else {
    if(!user && content.author){
      return (
        <div className="container mx-auto">
          <Unauthorized message="You are not the author of this work." />
        </div>
      )
    }
    else {
      return (
        <div>
          Loading...
        </div>
      )
    }
  }
}

export default ContentManagementScreen;
