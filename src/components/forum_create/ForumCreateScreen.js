import React, { useState } from "react";
import CancelPostModal from "../modals/CancelPostModal";

// Can use this class for reply, edit, and create
const ForumCreateScreen = () => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=274%3A632
  const [spoiler, toggleSpoiler] = useState(false);
  const [nsfw, toggleNSFW] = useState(false);
  const [discussion, toggleDiscussion] = useState(false);
  const [tags, setTags] = useState(new Set());
  const [link, setLink] = useState('Spy x Family');
  const [forumTitle, setTitle] = useState("Create Forum Post");
  const [forumDescription, setDescription] = useState("");
  // forum types can be either create forum post, edit forum post, or reply 
  const [forumType, setForum] = useState("Create Forum Post");

  const handleClick = (tagType) => {
      if (tagType === "S") {
          if (spoiler) {
              tags.delete('S')
          } 
          else {
              tags.add('S')
          }
          toggleSpoiler(!spoiler)
      } 
      else if (tagType === "N") {
          if (nsfw) {
              tags.delete('N')
          }
          else {
              tags.add('N')
          }
          toggleNSFW(!nsfw)
      }
      else if (tagType === "D") {
          if (discussion) {
              tags.delete('D')
          }
          else {
              tags.add('D')
          }
          toggleDiscussion(!discussion)
      }
  }

  const handleSubmit = (e) => {
    console.log(forumTitle)
    console.log(forumDescription)
  }
  return (
    <div>
    <form className="w-full h-full m-1.5" onSubmit={handleSubmit}>
      <label for="forum-modal" className="btn modal-button">Create Forum Post</label>

      <input type="checkbox" id="forum-modal" className="modal-toggle w-max"/>
        <div className="modal">
        
          <div className="modal-box">
            <div className="flex flex-row justify-between">
              <div>
                <h3 className="font-bold text-lg">{forumType}</h3>
              </div>
              <div>
                <label for="forum-modal">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </label>
              </div>
              
            </div>
            <input type="text" placeholder="Post Title" className="input input-bordered w-full focus:outline-none py-4" onChange={(e) => setTitle(e.target.value)}/>
            <p className="py-4">Linked to <strong className="cursor-pointer">{link}</strong></p>
            <div className="flex">
              <div className={`badge ${spoiler===true ? "bg-spoiler" :""} ${spoiler===true ? "text-white" :"text-spoiler"} border-spoiler badge-outline text-xs mr-1 cursor-pointer`} onClick={() => handleClick('S')}>Spoiler</div>
              <div className={`badge ${nsfw===true ? "bg-nsfw" :""} ${nsfw===true ? "text-white" :"text-nsfw"} border-nsfw badge-outline text-xs mr-1 cursor-pointer`} onClick={() => handleClick('N')}>NSFW</div>
              <div className={`badge ${discussion===true ? "bg-discussion" :""} ${discussion===true ? "text-white" :"text-discussion"} border-discussion badge-outline text-xs mr-1 cursor-pointer`} onClick={() => handleClick('D')}>Discussion</div>
            </div>
            <textarea className="w-full border-2 border-grey rounded text-sm pl-2 pb-6 mt-4" placeholder="Post Description" onChange={(e)=> setDescription(e.target.value)}></textarea>
            <div className="flex flex-row justify-between items-center">
              <label for="forum-modal" className="cursor-pointer ml-4">Cancel</label>
                <button className="btn border-none bg-forum normal-case mr-4" type="submit">Post</button>
            </div>
          </div>
        </div>
        </form>
      <CancelPostModal />
    </div>
  );
};

export default ForumCreateScreen;
