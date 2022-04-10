import React, {useState, useRef} from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Line, Text } from 'react-konva';
import { Html } from 'react-konva-utils';
import IroColorPicker from "./IroColorPicker"
import Draggable from 'react-draggable'; // The default

const ComicEditScreen = () => {
  const [seriesTitle, setSeriesTitle] = useState("Attack on Titan")
  const [chapterTitle, setChapterTitle] = useState("Big Titan Leans on Wall")
  const [chapter, setChapter] = useState("5")

  const [tool, setTool] = useState('pen');
  const [lines, setLines] = useState([]);
  const [stroke, setStroke] = useState('#df4b26')
  const isDrawing =  useRef(false);
  const stageRef = useRef(null);
  const layerRef = useRef(null);

  const handleMouseDown = (e) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { tool, points: [pos.x, pos.y], stroke: stroke }]);
    console.log(lines);
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
  };

  const onColorChange = (color) => {
    // setStroke(color)
    setStroke(color)
    console.log(stroke)
    // console.log(JSON.stringify(color.color.hexstring));
  }

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
          <div className="btn cursor-pointer mr-4 mb-4">Save</div>
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
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={handleMouseDown}
        onMousemove={handleMouseMove}
        onMouseup={handleMouseUp}
        ref = {stageRef}
      >
      
        <Layer ref = {layerRef}>
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
            <Draggable handle="strong">
            <div>
            <strong><div>DRAG ME</div></strong>
              <div>
                <IroColorPicker onColorChange={onColorChange}/>
              </div>
            </div>
            </Draggable>
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
    
    
  );
};

export default ComicEditScreen; 
