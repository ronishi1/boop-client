import React 	from 'react';
import ReactQuill from 'react-quill';

const StoryViewScreen = ({chapter}) => {
  // Might get rid of page select? also maybe change this format or story view format to match since it's weird
  // to have them have different designs
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=314%3A2502
  let content = decodeURI(chapter.page_JSONS[0]);
  // disable ctrl+c keyboard shortcut
  const handleCopy = (e) => {
    e.preventDefault();
  }

  return (
    <div className='flex justify-center'>
      <div className="w-3/4 m-8 leading-relaxed" 
        onMouseDown={handleCopy} onCopy={handleCopy} onCut={handleCopy}
        style={{MozUserSelect: "none", WebkitUserSelect: "none", msUserSelect: "none"}}
      >
        <ReactQuill 
          theme="snow" 
          value={content}
          readOnly={true}
          modules={{toolbar: false}}
        />
      </div>
    </div>
  );
}

export default StoryViewScreen;
