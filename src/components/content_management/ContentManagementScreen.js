import React, { useState,useEffect } 	from 'react';
import ChapterEntry from './ChapterEntry'
import GenreSelector from './GenreSelector';
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useLazyQuery, useMutation } 		from '@apollo/client';
import { GET_CONTENT_INFO } from '../../cache/queries';
import { uploadFile } from '../../utils/utils.js'
import { UPDATE_COVER_IMAGE, EDIT_CONTENT} from '../../cache/mutations';
import { Transition } from '@headlessui/react'

const ContentManagementScreen = ({user}) => {
  let { id } = useParams();

  const [GetContentInfo,{ loading, error, data,refetch}]= useLazyQuery(GET_CONTENT_INFO);
  const [UpdateCoverImage] = useMutation(UPDATE_COVER_IMAGE);
  const [EditContent] = useMutation(EDIT_CONTENT);

  const [imageError, setImageError] = useState({status:false,message:""});
  const [titleError, setTitleError] = useState({status:false,message:""});
  const [content,setContent] = useState({});
  const [submitted,setSubmitted] = useState(false);

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
  const genres = ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Horror", "Mecha", "Music", "Mystery", "Psychological", "Romance", "SciFi", "Slice of Life", "Sports", "Supernatural", "Thriller"];

  return (Object.keys(content).length !== 0) ? (
    <div class="container mx-auto">
      <div className='grid grid-cols-2 w-full'>
        <div className='col-span-1 flex flex-col w-full my-8 space-y-2 place-content-center w-5/6 ml-5'>

          <div className='flex justify-between space-x-2'>
              <div className="flex flex-row space-x-2">
                <Link to="/studio">
                  <div className="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                    </svg>
                  </div>
                </Link>
                <button className="btn" onClick={() => saveChanges()}>Save</button>
                <button className="btn">Publish</button>
              </div>
              <button className="btn bg-red-400 border-none hover:bg-red-500">Delete</button>
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
              <div class="form-control">
                <label class="label">
                  <span class="text-lg">Series Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Title your series"
                  className="input input-bordered"
                  name="series_title"
                  value={content.series_title}
                  onChange={handleChange}
                />
              </div>
              <label class="label">
                <span class="text-lg">Synopsis</span>
              </label>
              <textarea
                class="textarea w-full border-2 border-gray-500/30 focus:ring-0 focus:outline-none h-64"
                placeholder="Give your series a synopsis"
                value = {content.synopsis}
                onChange={(e) => {setContent({...content,synopsis:e.target.value})}}
              />
              <div>
                <label class="label">
                  <span class="text-lg">Genres</span>
                </label>
                <div className='flex flex-row flex-wrap'>
                  {genres.map((genre) => {
                    let initialState = content.genres.includes(genre)
                    return <GenreSelector genre={genre} initialState={initialState} contentType={content.content_type} selectGenreCallback={selectGenreCallback}/>
                  })}
                </div>
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
                <label className="label">
                  <span className="text-lg">Cover Image</span>
                  <label for="upload-photo" className="btn btn-xs bg-forum border-none flex flex-row items-center">
                    <div className="mr-1">
                    Change cover image
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                  </label>
                </label>
                <div className="text-xs -mt-1">Please note that changing the cover image here will save it. However all other fields must be saved explicitly using the <span className="font-bold">SAVE</span> button</div>
                {content.cover_image ?
                  <div>
                    <input type="file" id="upload-photo" hidden="true" onChange={handleUpload}/>
                      <label for="upload-photo" className="cursor-pointer">
                    <img
                      className='w-full max-w-lg hover:cursor-pointer hover:opacity-80'
                      src={content.cover_image}
                    />
                </label>
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
          <div className="text-2xl">
            Chapter List
          </div>
          <div className="card static rounded-none h-full overflow-y-auto">
            {content.chapters.map(chapter => (
              <ChapterEntry chapter={chapter}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : <div>Loading...</div>;
}

export default ContentManagementScreen;
