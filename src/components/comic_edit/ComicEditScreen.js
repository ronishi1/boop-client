import React, {useState, useRef, useEffect} from 'react';
import { render } from 'react-dom';
import { useParams } from 'react-router-dom'
import { Stage, Layer, Line, Text, Image} from 'react-konva';
import { Html } from 'react-konva-utils';
import IroColorPicker from "./IroColorPicker"
import useImage from 'use-image'
import { b64toBlob } from '../../utils/utils.js'

import { GET_CONTENT_CHAPTER } from '../../cache/queries';
import { ADD_PAGE, SAVE_PAGE, DELETE_PAGE } from '../../cache/mutations'
import { useLazyQuery, useMutation } 	from '@apollo/client';


const ComicEditScreen = () => {
  let { id } = useParams();

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

   
  const [tool, setTool] = useState('pen');
  const [lines, setLines] = useState([]);
  const [stroke, setStroke] = useState('#df4b26')
  const isDrawing =  useRef(false);
  const stageRef = useRef(null);
  const layerRef = useRef(null);
  const backgroundRef = useRef(null);

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
  
  const handleMouseDown = (e) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { tool, points: [pos.x, pos.y], stroke: stroke }]);
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
    isDrawing.current = false;
  };

  const onColorChange = (color) => {
    setStroke(color)
  }
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
    })
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
      <div className="ml-4 mb-4">
            Series Title: <strong>{chapter.series_title}</strong>
      </div>
      <div className="flex flex-row justify-between">
        <div className="ml-4 mb-4">
          Chapter Title : <strong>{chapter.chapter_title}</strong>
         
          <div class="dropdown">
            <label
              tabindex="0"
              className="select select-bordered h-8 min-h-0 w-28"
            >
              Page: {currentPage}
            </label>
            <ul
              tabindex="0"
              class="dropdown-content absolute z-10 mt-2 border-solid border-2 menu bg-base-100 w-28 rounded-box overflow-auto max-h-88"
            >
              {pageDropdown.map((page, i) => {
                return (
                  <li key={i}>
                    <a
                      
                      className="text-sm py-1.5 h-8 hover:bg-gray-400/25"
                      onClick={() => {
                        handleSelectPage(i + 1);
                      }}
                    >
                      {i+1}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        
        <div>
          <div className="btn cursor-pointer mr-4 mb-4" onClick={handleSave}>Save</div>
          <div className="btn cursor-pointer mr-4 mb-4" onClick={handleAddPage}>Add Page</div>
          <div className="btn cursor-pointer mr-4 mb-4" onClick={handleDeletePage}>Delete Page</div>
        </div>
      </div>
      <select
        value={tool}
        onChange={(e) => {
          setTool(e.target.value);
        }}
      >
        <option value="pen">Pen</option>
        <option value="eraser">Eraser</option>
      </select>
      <div className="flex justify-center relative">
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
            ref = {stageRef}
          >
            
            <Layer ref = {layerRef}>
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
                  strokeWidth={5}
                  tension={0.5}
                  lineCap="round"
                  globalCompositeOperation={
                    line.tool === 'eraser' ? 'destination-out' : 'source-over'
                  }
                />
              ))}
              
              
            </Layer>
            
          </Stage>
          </div>
        </div>
      </div>
      <div className="flex">
          <IroColorPicker onColorChange={onColorChange}/>
      </div>
    </div>


  );
};

export default ComicEditScreen;
