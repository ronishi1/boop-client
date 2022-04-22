import React, { useState } from 'react';
import IroColorPicker from './IroColorPicker';

const ComicRightToolbar = ({tool, stroke, setStroke, color, setColor, handleAddText, isTyping, toggleTyping}) => {
  const [textInput, setTextInput] = useState("");
  const [fontSize, setFontSize] = useState(12);
  const toolsUsingColorWheel = ['pen','text','dropper']
  
  function onColorChange(color) {
    setColor(color);
  }

  const handleCreateText = () => {
    handleAddText({text:textInput, points:[0,0], fill:color, fontSize:fontSize})
  }

  return (
    <div className='w-1/6 min-w-max p-4' style={{boxShadow: "-1px 0px 0px 0px rgb(0 0 0 / 0.1)"}}>
      <div className='space-y-4 grid grid-cols-1 justify-items-center'>
        {toolsUsingColorWheel.includes(tool) ? 
        <div className='grid grid-cols-1 justify-items-center'>
          <label className='text-center'>Color Picker</label>
          <IroColorPicker width={180} wheelLightness={false} color={color} onColorChange={onColorChange}/>
        </div>: <></>}
        {tool === 'pen' || tool === 'eraser' ? 
        <div className='grid grid-cols-1 justify-items-center'>
          <label className='text-center'>Stroke Width</label>
          <div>{stroke.width}</div>
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={stroke.width} 
            className="range range-xs w-max"
            onChange={(e) => {
              setStroke({...stroke, width: parseInt(e.target.value)})}}
          />
          <label className='text-center'>Opacity</label>
          <div>{stroke.opacity}</div>
          <input 
            type="range" 
            min="0" 
            max="100"
            value={stroke.opacity * 100} 
            className="range range-xs w-max"
            onChange={(e) => {
              setStroke({...stroke, opacity: parseInt(e.target.value)/100})}}
          />
        </div> : <></>}
        {tool === "text" ? 
        <div className='grid grid-cols-1 justify-items-center space-y-2'>
          <label className='text-center'>Text</label>
          <textarea 
            className="textarea textarea-bordered p-2" 
            placeholder='Type here...'
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            onFocus={() => toggleTyping(true)}
            onBlur={() => toggleTyping(false)}
          />
          <div className='btn' onClick={handleCreateText}>Submit</div>
          <label className='text-center pt-4'>Font Size</label>
          <input 
            type="number" 
            className="input input-bordered w-max max-w-xs"
            value={fontSize}
            onChange={(e) => setFontSize(parseInt(e.target.value))}
          />
          <label className='text-center pt-4'>Double click on text to delete</label>
        </div> : <></>
        }
      </div>
      
    </div>
  );
};

export default ComicRightToolbar;
