import React, {useState, useRef, useEffect} from 'react';
import { render } from 'react-dom';
import { useParams } from 'react-router-dom'
import { Stage, Layer, Line, Text, Image} from 'react-konva';
import { Html } from 'react-konva-utils';
import IroColorPicker from "./IroColorPicker"
import useImage from 'use-image'
import { uploadPage } from '../../utils/utils.js'

import { GET_CONTENT_CHAPTER } from '../../cache/queries';
import { ADD_PAGE, SAVE_PAGE, DELETE_PAGE } from '../../cache/mutations'
import { useLazyQuery, useMutation } 	from '@apollo/client';


const ComicEditScreen = () => {
  let { id } = useParams();

  const [GetContentChapter, { loading, error, data, refetch }] = useLazyQuery(GET_CONTENT_CHAPTER);

  // const [currentChapter, setCurrent] = useState(1)
  const [currentPage, setPage] = useState(1)
  const [chapter, setChapter] = useState({})
  // might not even use the error
  const [imageError, setImageError] = useState({status:false,message:""})

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

  useEffect(() => {
    async function fetchData() {
      let result = await GetContentChapter({variables: {chapterID:id}});
      console.log(result)
      setChapter(result.data.getContentChapter);
    }
    fetchData();
  },[]);
  
  const handleMouseDown = (e) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { tool, points: [pos.x, pos.y], stroke: stroke }]);
    // console.log(lines);
    const stringified = encodeURIComponent(JSON.stringify(lines))
    // console.log(stringified)
    // console.log(JSON.parse(decodeURIComponent("%5B%7B%22tool%22%3A%22pen%22%2C%22points%22%3A%5B456.5%2C326%5D%2C%22stroke%22%3A%22%23df4b26%22%7D%2C%7B%22tool%22%3A%22pen%22%2C%22points%22%3A%5B576.5%2C294%5D%2C%22stroke%22%3A%22%23df4b26%22%7D%2C%7B%22tool%22%3A%22pen%22%2C%22points%22%3A%5B425.5%2C348%5D%2C%22stroke%22%3A%22%23df4b26%22%7D%2C%7B%22tool%22%3A%22pen%22%2C%22points%22%3A%5B647.5%2C301%5D%2C%22stroke%22%3A%22%23df4b26%22%7D%5D")))
    // console.log(lines)
    // ON SAVE, take the list of lines and their attributes.
    //    Mutate to graphQL and then when important, map the lines
    //    with their attributes.
    // Exporting to cloudinary should be done through by calling
    //  stageRef.current.toDataURL()
    // console.log(layerRef.current.children)
    // console.log(stageRef.current.toDataURL())
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
    // console.log(stageRef.current.toDataURL())
  };

  const onColorChange = (color) => {
    // setStroke(color)
    setStroke(color)
    // console.log(stroke)
    // console.log(JSON.stringify(color.color.hexstring));
  }

  const refetchCallback = async() => {
    let result = await GetContentChapter({variables: {chapterID:id}});
    setChapter(result.data.getContentChapter);
  }

  const handleSave = async () => {
    backgroundRef.current.show()
    const dataURL = stageRef.current.toDataURL({
      mimeType: "image/png",
      quality: 0,
      pixelRatio:1
    })
    backgroundRef.current.hide()
    const url = await uploadPage(dataURL, savePageCallback, refetchCallback, setImageError)
  }
  
  const savePageCallback = async (input) => {
    input.variables.chapterID = chapter._id;
    input.variables.pageNumber = currentPage;
    await SavePage(input)
  }

  const handleNewPage = () => {
    console.log("handling new page")
  }

  const URLImage = ({ url }) => {
    const [image, status] = useImage(url, "Anonymous");
    
    // img.crossOrigin = 'Anonymous';
    return (
      <Image
        image={image}
        x={0}
        y={0}
        visible={false}
        ref={backgroundRef}
        // I will use offset to set origin to the center of the image
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
        </div>
        
        <div>
          <div className="btn cursor-pointer mr-4 mb-4" onClick={handleSave}>Save</div>
          <div className="btn cursor-pointer mr-4 mb-4" onClick={handleNewPage}>Add Page</div>
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
          <div className="relative">
            {
              chapter.page_images !== undefined && chapter.page_images[currentPage-1] !== "Unsaved URL"
              ?
              <img src={chapter.page_images[currentPage-1]} />
              :
              <div></div>
            }
          </div>
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
            {/* <img src="https://res.cloudinary.com/dnfazdhwm/image/upload/v1650425530/ewsdnix5uo5jipsivtsr.png"/> */}
            <Html
                divProps={{
                  style: {
                    position: 'inline',
                    top: 10,
                    left: 10,
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
