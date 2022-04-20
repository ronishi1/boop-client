import React, {useState, useRef} from 'react';
// import { SAVE_PAGE } from '../../cache/mutations';
import { useQuery, useMutation } 	from '@apollo/client';
import { render } from 'react-dom';
import { Stage, Layer, Line, Text, Image} from 'react-konva';
import { Html } from 'react-konva-utils';
import IroColorPicker from "./IroColorPicker"
import Draggable from 'react-draggable'; // The default
import useImage from 'use-image'

const ComicEditScreen = () => {
  const [seriesTitle, setSeriesTitle] = useState("Attack on Titan")
  const [chapterTitle, setChapterTitle] = useState("Big Titan Leans on Wall")
  const [chapter, setChapter] = useState("5")

  // const [SavePage] = useMutation(SAVE_PAGE);

  const [tool, setTool] = useState('pen');
  const [lines, setLines] = useState([]);
  const [stroke, setStroke] = useState('#df4b26')
  const isDrawing =  useRef(false);
  const stageRef = useRef(null);
  const layerRef = useRef(null);
  const backgroundRef = useRef(null);

  const handleMouseDown = (e) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { tool, points: [pos.x, pos.y], stroke: stroke }]);
    // console.log(lines);
    const stringified = encodeURIComponent(JSON.stringify(lines))
    // console.log(stringified)
    // console.log(JSON.stringify(lines))
    // console.log(JSON.parse(decodeURIComponent("%5B%7B%22tool%22%3A%22pen%22%2C%22points%22%3A%5B456.5%2C326%5D%2C%22stroke%22%3A%22%23df4b26%22%7D%2C%7B%22tool%22%3A%22pen%22%2C%22points%22%3A%5B576.5%2C294%5D%2C%22stroke%22%3A%22%23df4b26%22%7D%2C%7B%22tool%22%3A%22pen%22%2C%22points%22%3A%5B425.5%2C348%5D%2C%22stroke%22%3A%22%23df4b26%22%7D%2C%7B%22tool%22%3A%22pen%22%2C%22points%22%3A%5B647.5%2C301%5D%2C%22stroke%22%3A%22%23df4b26%22%7D%5D")))
    // console.log(lines)
    // console.log(JSON.parse([{"tool":"pen","points":[472.5,363],"stroke":"#df4b26"},{"tool":"pen","points":[580.5,559,580.5,559,581.5,559,585.5,555,598.5,544,620.5,525,648.5,498,681.5,467,709.5,439,736.5,414,759.5,393,772.5,382,781.5,374,787.5,370,790.5,368,791.5,367,791.5,366],"stroke":"#df4b26"},{"tool":"pen","points":[496.5,275,496.5,276,496.5,288,501.5,314,509.5,345,517.5,373,524.5,396,528.5,411,531.5,419,532.5,425,533.5,428,533.5,430,533.5,430,533.5,430,533.5,430],"stroke":"#df4b26"}]))
    // console.log(stageRef.current.width)
    // console.log(stageRef.current.toJSON())
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

  const handleSave = () => {
    backgroundRef.current.show()
    const dataURL = stageRef.current.toDataURL({
      mimeType: "image/png",
      quality: 0,
      pixelRatio:1
    })
    backgroundRef.current.hide()
    // const chapterID = "625e65b4e8f235e9ab4f37a9"
    // const PageInput = {
    //   _id: ""
    // }
    // console.log("handlign sAve")
    // console.log(stageRef)
    // console.log(stageRef.current.bufferCanvas.toDataURL())
    // console.log(stageRef.toDataURL())
  }

  const handleNewPage = () => {
    console.log("handling new page")
  }

  const URLImage = ({ url }) => {
    const [image, status] = useImage("https://res.cloudinary.com/dnfazdhwm/image/upload/v1650425530/ewsdnix5uo5jipsivtsr.png", "Anonymous");
    
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
            Series Title: <strong>{seriesTitle}</strong>
      </div>
      <div className="flex flex-row justify-between">
        <div className="ml-4 mb-4">
          Chapter {chapter} : <strong>{chapterTitle}</strong>
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
            <img src={"https://res.cloudinary.com/dnfazdhwm/image/upload/v1650425530/ewsdnix5uo5jipsivtsr.png"} />
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
              <URLImage url={"https://res.cloudinary.com/dnfazdhwm/image/upload/v1650425530/ewsdnix5uo5jipsivtsr.png"} />
            {/* <img src="https://res.cloudinary.com/dnfazdhwm/image/upload/v1650425530/ewsdnix5uo5jipsivtsr.png"/> */}
            <Html
                divProps={{
                  style: {
                    position: 'inline',
                    top: 10,
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
