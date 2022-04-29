import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from 'react-router-dom'
import QuillToolbar, { modules, formats } from "./QuillToolbar";
import ReactQuill, {Quill} from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import { GET_CONTENT_CHAPTER } from '../../cache/queries';
import { SAVE_TEXT , PUBLISH_CHAPTER } from '../../cache/mutations'
import { useLazyQuery, useMutation } 	from '@apollo/client';

const StoryEditScreen = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  
  const [GetContentChapter, { loading, error, data, refetch }] = useLazyQuery(GET_CONTENT_CHAPTER);
  const [chapter, setChapter] = useState({});
  const [text, setText] = useState("")
  const [showPublishConfirm,setShowPublishConfirm] = useState(false);

  const [SaveText] = useMutation(SAVE_TEXT);
  const [PublishChapter] = useMutation(PUBLISH_CHAPTER);

  async function fetchData() {
    let result = await GetContentChapter({variables: {chapterID: id}});
    console.log(result)
    setChapter(result.data.getContentChapter)
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

  return (
    <div>
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
      <div className="flex justify-between"> 
        <div className="flex flex-row">
              <Link to={`/content-management/${chapter.series_id}`}>
                <div className="cursor-pointer mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                  </svg>
                </div>
              </Link>
            <div className='flex flex-col'>
              <p className='text-xs'>Series Title: <strong>{chapter.series_title}</strong></p>
              <p className='text-lg'>Chapter Title : <strong>{chapter.chapter_title}</strong></p>
            </div>
        </div>
        <div className="btn mr-4 mb-4" onClick={() => {setShowPublishConfirm(true)}}>Publish</div>
      </div>
      <div className="mr-8 ml-8 ">
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
