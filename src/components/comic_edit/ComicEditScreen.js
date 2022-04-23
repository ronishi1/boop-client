import React, {useState, useRef, useEffect} from 'react';
import { render } from 'react-dom';
import { useParams } from 'react-router-dom'
import { Stage, Layer, Line, Text, Image} from 'react-konva';
import { Html } from 'react-konva-utils';
import useImage from 'use-image'
import { b64toBlob, comicEditTransaction } from '../../utils/utils.js'

import { GET_CONTENT_CHAPTER } from '../../cache/queries';
import { ADD_PAGE, SAVE_PAGE, DELETE_PAGE, PUBLISH_CHAPTER } from '../../cache/mutations'
import { useLazyQuery, useMutation } 	from '@apollo/client';
import ComicTopToolbar from './ComicTopToolbar';
import ComicLeftToolbar from './ComicLeftToolbar';
import ComicRightToolbar from './ComicRightToolbar';

import { useNavigate } from "react-router-dom";
import { cloneDeep } from '@apollo/client/utilities';

import { Transition } from '@headlessui/react'
const ComicEditScreen = ({tps}) => {
  let { id } = useParams();
  let navigate = useNavigate();

  const [GetContentChapter, { loading, error, data, refetch }] = useLazyQuery(GET_CONTENT_CHAPTER);

  // const [currentChapter, setCurrent] = useState(1)
  const [currentPage, setPage] = useState(1)
  const [chapter, setChapter] = useState({})
  const [pageBackground, setBackground] = useState("")
  const [pageDropdown, setDropdown] = useState([])
  const [saveClicked,setSaveClicked] = useState(false);
  const [addPageClicked,setAddPageClicked] = useState(false);
  const [showPublishConfirm,setShowPublishConfirm] = useState(false);
  const [showDelete,setShowDelete] = useState(false);

  // might not even use the error

  const [SavePage] = useMutation(SAVE_PAGE);
  const [DeletePage] = useMutation(DELETE_PAGE);
  const [AddPage] = useMutation(ADD_PAGE);
  const [PublishChapter] = useMutation(PUBLISH_CHAPTER);

  const [tool, setTool] = useState('pen');
  const [lines, setLines] = useState([]);
  const [text, setText] = useState([]);

  const [color, setColor] = useState('#df4b26')
  const [stroke, setStroke] = useState({
    width: 5,
    opacity: 1,
  });
  const [isTyping, toggleTyping] = useState(false);
  const [hasUndo, toggleUndo] = useState(tps.hasTransactionToUndo());
  const [hasRedo, toggleRedo] = useState(tps.hasTransactionToRedo());

  const isDrawing =  useRef(false);
  const stageRef = useRef(null);
  const layerRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    tps.clearStack();
  },[]);

  // attempt to set up undo/redo
  useEffect(() => {
		const keyboardShortcut = (e) => {
			if(e.ctrlKey && e.key==='z'){
        handleUndo();
      }
			if(e.ctrlKey && e.key==='y'){
				handleRedo();
			}
      if(isTyping) return;
      switch(e.key) {
        case "p":
          setTool("pen");
          break;
        case "e":
          setTool("eraser")
          break;
        case "t":
          setTool("text")
          break;
        case "d":
          setTool("dropper")
          break;
        default:
      }
		}

		window.addEventListener("keydown", keyboardShortcut);
		return () => window.removeEventListener("keydown", keyboardShortcut);
	});

  const handleUndo = () => {
    tps.undoTransaction();
    toggleUndo(tps.hasTransactionToUndo());
  }

  const handleRedo = () => {
    tps.redoTransaction();
    toggleRedo(tps.hasTransactionToRedo());
  }
  // attempt to set up undo/redo

  async function fetchData() {
    // let result = await GetContentChapter({variables: {chapterID:id}});
    // setChapter(result.data.getContentChapter);
    // let chapter = result.data.getContentChapter
    // let data = null
    // console.log(currentPage)
    // console.log(chapter.page_JSONS[currentPage])
    // if((chapter.page_JSONS[currentPage] !== undefined && chapter.page_JSONS[currentPage] !== || chapter.page_JSONS[currentPage-1])
    // if (currentPage == 1) {
    //   data = JSON.parse(decodeURI(chapter.page_JSONS[currentPage]));
    // }
    // else {
    //   data = JSON.parse(decodeURI(chapter.page_JSONS[currentPage-1]));
    // }
    // setLines(data.lines);
    // setText(data.text);

    // Background code
    let result = await GetContentChapter({variables: {chapterID:id}});
    setChapter(result.data.getContentChapter);
    let chapter = result.data.getContentChapter
    const background = chapter.page_images[currentPage-1]
    if (background !== undefined && background !== "Unsaved URL") {
      setBackground(chapter.page_images[currentPage-1])
    }
    let dropdown = []
    for (var i = 0; i < chapter.num_pages; i++) {
      dropdown.push(i+1)
    }
    setDropdown(dropdown)
    // console.log(pageBackground)
  }
  useEffect(() => {
    fetchData();
  },[]);

  const handleClick = (e) => {
    if(tool === 'dropper'){
      setColor(e.target.attrs.stroke);
    }
    // create circle of stroke width at coordinates if using pen/eraser
    // allow for selection of text objects for scaling if using text
  }

  const handleDoubleClick = (i) => {
    if(tool === 'text') {
      let prev = [...text];
      let newText = [...text];
      newText.pop(i);
      setText(newText);
      tps.addTransaction(new comicEditTransaction('deleteText',prev,newText,setText));
      toggleUndo(tps.hasTransactionToUndo());
      toggleRedo(tps.hasTransactionToRedo());
    }
  }

  const handleDragEnd = (index,e) => {
    if(tool === 'text'){
      const pos = [
        e.target.x(),
        e.target.y()
      ];
      let prev = cloneDeep(text)
      let newText = [...text];
      newText[index].points = pos;
      setText(newText);
      tps.addTransaction(new comicEditTransaction('transform', prev, newText, setText));
      toggleUndo(tps.hasTransactionToUndo());
      toggleRedo(tps.hasTransactionToRedo());
    }
  }

  const handleAddText = (newText) => {
    let prev = [...text];
    let next = [...text,newText];
    setText([...text,newText]);
    tps.addTransaction(new comicEditTransaction(tool,prev,next,setText));
    toggleUndo(tps.hasTransactionToUndo());
    toggleRedo(tps.hasTransactionToRedo());
  }

  const handleMouseDown = (e) => {
    if(tool == 'eraser' || tool == 'pen'){
      isDrawing.current = true;
      const pos = e.target.getStage().getPointerPosition();
      setLines([...lines, { tool, points: [pos.x, pos.y], stroke: (tool==='eraser' ? "#ffffff" :color), strokeWidth: stroke.width, opacity: stroke.opacity }]);
      let prev = [...lines];
      prev.pop();
      let next = [...lines];
      tps.addTransaction(new comicEditTransaction(tool, prev, next, setLines));
      toggleUndo(tps.hasTransactionToUndo());
      toggleRedo(tps.hasTransactionToRedo());
    }
    // console.log(lines);
  };

  const handleMouseMove = (e) => {
    // no drawing - skipping
    if (!isDrawing.current) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    let lastLine = lines[lines.length - 1];
    // add point
    lastLine.points = lastLine.points.concat([point.x, point.y]);

    // replace last
    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());
  };

  const handleMouseUp = () => {
    if(tool === 'pen' || tool === 'eraser'){
      isDrawing.current = false;
      tps.transactions.pop();
      tps.ptr--;
      let prev = [...lines];
      prev.pop();
      let next = [...lines];
      tps.addTransaction(new comicEditTransaction(tool, prev, next, setLines));
      toggleUndo(tps.hasTransactionToUndo());
      toggleRedo(tps.hasTransactionToRedo());
    }
  };

  const handleSave = async () => {
    if (backgroundRef.current !== null) {
      backgroundRef.current.show()
    }
    const dataURL = stageRef.current.toDataURL({
      mimeType: "image/png",
      quality: 0,
      pixelRatio:1
    })
    if (backgroundRef.current !== null) {
      backgroundRef.current.hide()
    }
    setSaveClicked(true);
    setTimeout(() => {
      setSaveClicked(false);
    },3000)
    var data = new FormData();
    let converted = b64toBlob(dataURL, "image/png")
    data.append('content', converted)
    data.append('data', dataURL)
    fetch(`${process.env.REACT_APP_BACKEND_SERVER}imageUpload`, {
        method: 'post',
        body: data
    }).then(
        response => response.json()
    ).then(async data => {
        console.log(data)
        console.log(encodeURI(JSON.stringify({lines:lines, text:text})));
        await SavePage({variables:{chapterID:chapter._id, pageNumber:currentPage, url:data.url, pageJSON: encodeURI(JSON.stringify({lines:lines, text:text})) }});
        console.log("saved!");
        let result = await GetContentChapter({variables: {chapterID:id}});
        setChapter(result.data.getContentChapter);
        setBackground(data.url)
        console.log(result.data.getContentChapter, data.url)
    });
  }

  const handlePublish = async () => {
    await PublishChapter({variables:{chapterID: chapter._id}});
    refetch();
    console.log(chapter);
    navigate(`/content-management/${chapter.series_id}`);
  }

  const handleAddPage = async () => {
    await AddPage({variables: {chapterID: chapter._id}})
    let addedPage = pageDropdown
    addedPage.push(pageDropdown[-1] + 1)
    setDropdown(addedPage)
    fetchData()
    setAddPageClicked(true);
    setTimeout(() => {
      setAddPageClicked(false);
    },3000)
  }
  const handleDeletePage = async () => {
    await DeletePage({variables: {chapterID: chapter._id, pageNumber: currentPage}})
    if (currentPage > 1) {
      setPage(currentPage - 1)
    }
    console.log(pageDropdown)
    let deletedPage = pageDropdown
    deletedPage.pop()
    // setLines(JSON.parse(decodeURI(chapter.page_JSONS[currentPage])).lines);
    setLines([])
    console.log(currentPage)
    if(deletedPage.length === 0) {
      await AddPage({variables: {chapterID: chapter._id}})
      deletedPage.push(1)
      await fetchData()
    }
    else {
      console.log(deletedPage.length)
      setDropdown(deletedPage)
      await fetchData()
    }
    setShowDelete(false);
  }
  const handleSelectPage = (pageNum) => {
    setPage(pageNum)
    setLines([])
    // setLines(JSON.parse(decodeURI(chapter.page_JSONS[pageNum-1])).lines);
  }
  // const handleColor = () => {
  //   console.log("enter")
  //   setStroke('#000000')
  // }
  const URLImage = ({ url }) => {
    const [image, status] = useImage(url, "Anonymous");

    return (
      <Image
        image={image}
        x={0}
        y={0}
        visible={false}
        ref={backgroundRef}
      />
    );
  };

  return (
    <div>
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
                    Are you sure you want to delete this page?
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
                    onClick={() => {handleDeletePage()}}
                    >
                    Delete
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
      <div className="px-8 pb-4" style={{boxShadow: "0 1px 1px 0 rgb(0 0 0 / 0.1)"}}>
        <div className="flex flex-row justify-between">
          <div className='flex flex-col'>
            <p className='text-xs'>Series Title: <strong>{chapter.series_title}</strong></p>
            <p className='text-lg'>Chapter Title : <strong>{chapter.chapter_title}</strong></p>
          </div>
          <Transition
            show={saveClicked}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            >
            <div className="flex place-content-center -mt-2">
            <div class="alert alert-info shadow-lg">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>Your changes have been saved.</span>
              </div>
            </div>
            </div>
          </Transition>
          <Transition
            show={addPageClicked}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            >
            <div className="flex place-content-center -mt-2">
            <div class="alert alert-info shadow-lg">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>New page #{pageDropdown.length} has been successfully created.</span>
              </div>
            </div>
            </div>
          </Transition>
          <div className="btn" onClick={() => {setShowPublishConfirm(true)}}>Publish</div>
        </div>

      </div>
      <ComicTopToolbar currentPage={currentPage} pages={pageDropdown} handleUndo={handleUndo} handleRedo={handleRedo} hasUndo={hasUndo} hasRedo={hasRedo}
        handleSelectPage={handleSelectPage} handleSave={handleSave} handleAddPage={handleAddPage} handleDeletePage={() => setShowDelete(true)}/>
      <div className='flex flex-row justify-between'>
        <ComicLeftToolbar tool={tool} setTool={setTool}/>
        <div className="flex w-5/6 justify-center relative overflow-hidden">
          <div className="h-[1650px] w-[1275px] border-2">
          {chapter.page_images !== undefined ?
            <div className="relative">
              {
                chapter.page_images[currentPage-1] === undefined  || chapter.page_images[currentPage-1] === "Unsaved URL"
                ?
                <div></div>
                :
                <img src={chapter.page_images[currentPage-1]} alt="Background image" />
              }
            </div>
            :
            <div className="relative"></div>
            }
            <div class="absolute top-0">
            <Stage
              height={1650}
              width={1275}
              onMouseDown={handleMouseDown}
              onMousemove={handleMouseMove}
              onMouseup={handleMouseUp}
              onClick={(e) => handleClick(e)}
              ref = {stageRef}
            >
              <Layer
                ref = {layerRef}
              >
                {chapter.page_images !== undefined  && chapter.page_images[currentPage-1] !== "Unsaved URL"  ? <URLImage url={chapter.page_images[currentPage-1]}/>  : null}
              <Html
                  divProps={{
                    style: {
                      position: 'inline',
                      top: 0,
                      left: 0,
                      zIndex: 1
                    },
                  }}
                >

                </Html>
                {lines.map((line, i) => (
                  <Line
                    key={i}
                    points={line.points}
                    stroke={line.stroke}
                    strokeWidth={line.strokeWidth}
                    tension={0.5}
                    lineCap="round"
                    opacity={line.opacity}
                  />
                ))}
                {text.length > 0 ? text.map((text, i) => (
                  <Text
                    text={text.text}
                    x={text.points[0]}
                    y={text.points[1]}
                    fontSize={text.fontSize}
                    fill={text.fill}
                    onDblClick={() => handleDoubleClick(i)}
                    draggable={tool==="text"}
                    onDragEnd={(e) => handleDragEnd(i,e)}
                  />
                ))
                : <></>}
              </Layer>
            </Stage>
            </div>
          </div>
        </div>
        <ComicRightToolbar tool={tool} stroke={stroke} text={text} setText={setText} setStroke={setStroke} color={color} setColor={setColor}
          handleAddText={handleAddText} toggleTyping={toggleTyping}/>
      </div>
    </div>


  );
};

export default ComicEditScreen;
