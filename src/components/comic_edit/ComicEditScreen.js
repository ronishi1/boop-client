import React, {useState, useRef, useEffect} from 'react';
import { render } from 'react-dom';
import { useParams } from 'react-router-dom'
import { Stage, Layer, Line, Text, Image} from 'react-konva';
import { Html } from 'react-konva-utils';
import IroColorPicker from "./IroColorPicker"
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


const ComicEditScreen = ({tps}) => {
  let { id } = useParams();
  let navigate = useNavigate();

  const [GetContentChapter, { loading, error, data, refetch }] = useLazyQuery(GET_CONTENT_CHAPTER);

  // const [currentChapter, setCurrent] = useState(1)
  const [currentPage, setPage] = useState(1)
  const [chapter, setChapter] = useState({})
  const [pageBackground, setBackground] = useState("")
  const [pageDropdown, setDropdown] = useState([])
  // might not even use the error

  const [SavePage] = useMutation(SAVE_PAGE);
  const [DeletePage] = useMutation(DELETE_PAGE);
  const [AddPage] = useMutation(ADD_PAGE);
  const [PublishChapter] = useMutation(PUBLISH_CHAPTER);

  // attempt to set up undo/redo
  const handleUndo = () => {
    tps.undoTransaction();
  }

  const handleRedo = () => {
    tps.redoTransaction();
  }
  // attempt to set up undo/redo
   
  const [tool, setTool] = useState('pen');
  const [lines, setLines] = useState([]);
  const [text, setText] = useState([]);

  const [color, setColor] = useState('#df4b26')
  const [stroke, setStroke] = useState({
    width: 5,
    opacity: 1,
  })
  const isDrawing =  useRef(false);
  const stageRef = useRef(null);
  const layerRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    tps.clearStack();
  },[]);

  async function fetchData() {
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
    // create circle of stroke width at coordinates if using pen/eraser
    // allow for selection of text objects for scaling if using text
  }

  const handleDoubleClick = (i) => {
    if(tool === 'text') {
      let newText = [...text];
      newText.pop(i);
      setText(newText);
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
    }
  }

  const handleAddText = (newText) => {
    let prev = [...text];
    let next = [...text,newText];
    setText([...text,newText]);
    tps.addTransaction(new comicEditTransaction(tool,prev,next,setText));
  }
  
  const handleMouseDown = (e) => {
    if(tool == 'eraser' || tool == 'pen'){
      isDrawing.current = true;
      const pos = e.target.getStage().getPointerPosition();
      setLines([...lines, { tool, points: [pos.x, pos.y], stroke: color, strokeWidth: stroke.width, opacity: stroke.opacity }]);
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
      let prev = [...lines];
      prev.pop();
      let next = [...lines]
      tps.addTransaction(new comicEditTransaction(tool, prev, next, setLines));
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
        await SavePage({variables:{chapterID:chapter._id, pageNumber:currentPage, url:data.url}})
        let result = await GetContentChapter({variables: {chapterID:id}});
        setChapter(result.data.getContentChapter);
        setBackground(data.url)
        console.log(result.data.getContentChapter, data.url)
    });
  }

  const handlePublish = async () => {
    await PublishChapter({variables:{chapterID: chapter._id}});
    refetch();
    navigate("/studio");
  }

  const handleAddPage = async () => {
    await AddPage({variables: {chapterID: chapter._id}})
    let addedPage = pageDropdown
    addedPage.push(pageDropdown[-1] + 1)
    setDropdown(addedPage)
    fetchData()
  }
  const handleDeletePage = async () => {
    await DeletePage({variables: {chapterID: chapter._id, pageNumber: currentPage}})
    if (currentPage > 1) {
      setPage(currentPage - 1)
    }
    console.log(pageDropdown)
    let deletedPage = pageDropdown
    deletedPage.pop()
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
    setLines([])
  }
  const handleSelectPage = (pageNum) => {
    setLines([])
    setPage(pageNum)
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
      <div className="px-8 pb-4" style={{boxShadow: "0 1px 1px 0 rgb(0 0 0 / 0.1)"}}>
        <div className="flex flex-row justify-between">
          <div className='flex flex-col'>
            <p className='text-xs'>Series Title: <strong>{chapter.series_title}</strong></p>
            <p className='text-lg'>Chapter Title : <strong>{chapter.chapter_title}</strong></p> 
          </div>
          <div className="btn" onClick={handlePublish}>Publish</div>
        </div>
        
      </div>
      <ComicTopToolbar currentPage={currentPage} pages={pageDropdown} handleUndo={handleUndo} handleRedo={handleRedo} tps={tps}
        handleSelectPage={handleSelectPage} handleSave={handleSave} handleAddPage={handleAddPage} handleDeletePage={handleDeletePage}/>
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
              onClick={handleClick}
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
                    globalCompositeOperation={
                      line.tool === 'eraser' ? 'destination-out' : 'source-over'
                    }
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
                    onClick={handleClick}
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
        <ComicRightToolbar tool={tool} stroke={stroke} text={text} setText={setText} setStroke={setStroke} color={color} setColor={setColor} handleAddText={handleAddText}/>
      </div>
    </div>


  );
};

export default ComicEditScreen;
