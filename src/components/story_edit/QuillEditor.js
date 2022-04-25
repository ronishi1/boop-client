import React, {useState} from 'react';
import StoryBoardTool from './StoryBoardTool';
import QuillToolbar, { modules, formats } from "./QuillToolbar";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'

const QuillEditor = () => {
    const [text, setText]  = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare ut sem ut rutrum. Nam iaculis condimentum mi non ullamcorper. Nullam iaculis metus sit amet ante condimentum vulputate. Curabitur nec gravida ipsum, non pulvinar massa. Mauris vitae quam nisi. Integer tincidunt feugiat libero quis blandit. Nulla a dolor eros. Sed fringilla ante non nunc venenatis, ut suscipit orci bibendum. In porttitor est id dolor vehicula, sit amet pharetra nisl placerat. Quisque consectetur lectus quis eleifend molestie.")
    return (
        <div>
            <QuillToolbar toolbarId={'t1'}/>
            <ReactQuill 
                theme="snow" 
                value={text}
                modules={modules('t1')}
                formats={formats}
                />
        </div>
    );
  }
  
  export default QuillEditor;
  
