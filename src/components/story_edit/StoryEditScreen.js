import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom'
import QuillToolbar, { modules, formats } from "./QuillToolbar";
import ReactQuill, {Quill} from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import { GET_CONTENT_CHAPTER } from '../../cache/queries';
import { SAVE_TEXT , PUBLISH_CHAPTER, EDIT_CHAPTER } from '../../cache/mutations'
import { useLazyQuery, useMutation } 	from '@apollo/client';
import { Transition } from '@headlessui/react'

const StoryEditScreen = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  
  const [GetContentChapter, { loading, error, data, refetch }] = useLazyQuery(GET_CONTENT_CHAPTER);
  const [chapter, setChapter] = useState({});
  const [text, setText] = useState("")
  const [showPublishConfirm,setShowPublishConfirm] = useState(false);
  const [titleError,setTitleError] = useState({status:false,message:""});
  const [title, setTitle] = useState("");

  const [SaveText] = useMutation(SAVE_TEXT);
  const [EditChapter] = useMutation(EDIT_CHAPTER);
  const [PublishChapter] = useMutation(PUBLISH_CHAPTER);

  async function fetchData() {
    let result = await GetContentChapter({variables: {chapterID: id}});
    console.log(result)
    setChapter(result.data.getContentChapter)
    setTitle(result.data.getContentChapter.chapter_title)
    if (result.data.getContentChapter.page_JSONS[0] !== undefined) {
      console.log(decodeURI(result.data.getContentChapter.page_JSONS[0]))
      setText(decodeURI(result.data.getContentChapter.page_JSONS[0]))
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  const handleChange = (content, delta, source, editor) => {
    setText(content)
    let encode = encodeURI(content)
    SaveText({variables: {chapterID: chapter._id, pageJSON: encode}})
  }

  const handlePublish = async () => {
    await PublishChapter({variables:{chapterID: chapter._id}});
    refetch();
    console.log(chapter);
    navigate(`/content-management/${chapter.series_id}`);
  }

  const handleChangeTitle = async () => {
    if(title.length < 3){
      setTitleError({status:true,message:"Chapter title must be at least 3 characters"});
      setTimeout(() => {
        setTitleError({status:false,message:''});
      },2000)
      setTitle(chapter.chapter_title);
      return;
    }
    await EditChapter({variables: {chapterID: id, chapter_title: title}});
    refetch();
  }

  return (
    <div>
      <div>
        <input
          type="checkbox"
          id="publish-confirm-modal"
          className="modal-toggle"
          checked={showPublishConfirm}
          onChange={() => {setShowPublishConfirm(false)}}
          />

        <label form="publish-confirm-modal" className="modal cursor-pointer">
          <label className="modal-box w-4/12 max-w-5xl">
            <div>
              <div className="grid items-center space-y-4 p-4 mr-8 ml-8">
                <div className="w-full flex flex-row justify-between">
                  <div className="text-left text-xl font-medium">
                    Are you sure you want to publish this chapter?
                    <div className="text-xs">You will not be able to make any changes after you publish.</div>

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
                <span className="w-full flex flex-row justify-between items-center">
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
      <div className="flex justify-between"> 
        <div className="flex flex-row">
          <Link to={`/content-management/${chapter.series_id}`}>
            <div className="cursor-pointer mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
              </svg>
            </div>
          </Link>
          <div className='flex flex-col w-full'>
            <p className='text-xs'>Series Title: <strong>{chapter.series_title}</strong></p>
            <Transition
              show={titleError.status}
              enter="transition-opacity duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="alert alert-error py-1.5 shadow">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>{titleError.message}</span>
                </div>
              </div>
            </Transition>
            <div className='flex flex-row text-lg space-x-2'>
              <p className='border-2 border-transparent'>Chapter Title:</p>
              <input
                placeholder="Title your chapter"
                className='border-2 border-transparent hover:border-inherit focus:outline-none focus:border-inherit'
                value={title}
                onChange={(event) => { setTitle(event.target.value);}}
                onBlur={handleChangeTitle}
              />
            </div>
          </div>
        </div>
        <div className="btn mr-4 mb-4" onClick={() => {setShowPublishConfirm(true)}}>Publish</div>
      </div>
      <div className="mr-8 ml-8 mb-8">
        <QuillToolbar toolbarId={'t1'}/>
        <ReactQuill 
            theme="snow" 
            value={text !== "" ? text : ""}
            onChange={handleChange}
            modules={modules('t1')}
            formats={formats}
            />
        </div>
    </div>
  );
};

export default StoryEditScreen;
