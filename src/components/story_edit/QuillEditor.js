import React, {useState} from 'react';
import StoryBoardTool from './StoryBoardTool';
import QuillToolbar, { modules, formats } from "./QuillToolbar";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'


const QuillEditor = () => {
    // const [text, setText]  = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare ut sem ut rutrum. Nam iaculis condimentum mi non ullamcorper. Nullam iaculis metus sit amet ante condimentum vulputate. Curabitur nec gravida ipsum, non pulvinar massa. Mauris vitae quam nisi. Integer tincidunt feugiat libero quis blandit. Nulla a dolor eros. Sed fringilla ante non nunc venenatis, ut suscipit orci bibendum. In porttitor est id dolor vehicula, sit amet pharetra nisl placerat. Quisque consectetur lectus quis eleifend molestie.")
    var [text, setText] = useState('')

    function handleChange(content, delta, source, editor) {
        let test = "%3Cp%20class%3D%22ql-align-center%22%3E%3Cu%3EI%20think%20it%20should%20work%3C%2Fu%3E%3C%2Fp%3E%3Cp%20class%3D%22ql-align-center%22%3Estuffis%20%3Cstrong%3Ebeing%20done%20dsadsadsa%3C%2Fstrong%3E%3Cem%3Edsadsadsa%3C%2Fem%3E%3Cspan%20style%3D%22color%3A%20rgb(230%2C%200%2C%200)%3B%22%3Edsadsadsadsadsa%3C%2Fspan%3E%3C%2Fp%3E"
        let encode = encodeURIComponent(content)
        console.log(encode)
        setText(decodeURIComponent(test))
        console.log(delta)
        console.log(source)
        console.log(editor)
    }
    return (
        <div>
            <QuillToolbar toolbarId={'t1'}/>
            <ReactQuill 
                theme="snow" 
                value={decodeURIComponent("%3Cp%20class%3D%22ql-align-center%22%3E%3Cu%3EI%20think%20it%20should%20work%3C%2Fu%3E%3C%2Fp%3E%3Cp%20class%3D%22ql-align-center%22%3Estuffis%20%3Cstrong%3Ebeing%20done%20dsadsadsa%3C%2Fstrong%3E%3Cem%3Edsadsadsa%3C%2Fem%3E%3Cspan%20style%3D%22color%3A%20rgb(230%2C%200%2C%200)%3B%22%3Edsadsadsadsadsa%3C%2Fspan%3E%3C%2Fp%3E")}
                onChange={handleChange}
                modules={modules('t1')}
                formats={formats}
                readOnly={true}
                />
        </div>
    );
  }
  
  export default QuillEditor;
  
