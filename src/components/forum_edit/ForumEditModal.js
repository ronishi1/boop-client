import React, { useState, useEffect} from "react";
import { EDIT_POST } from '../../cache/mutations';
import { useMutation } from '@apollo/client';

const ForumEditModal = ({postId, title, linked_title, content, propTags, toggleForumCallback}) => {
  const [spoiler, toggleSpoiler] = useState(false);
  const [nsfw, toggleNSFW] = useState(false);
  const [discussion, toggleDiscussion] = useState(false);
  const [tags, setTags] = useState(new Set());
  const [link, setLink] = useState(linked_title);
  const [forumTitle, setTitle] = useState(title);
  const [forumDescription, setDescription] = useState(content);

  const [EditPost] = useMutation(EDIT_POST);

  const initializeTags = ()=> {
    if (propTags.includes("Discussion")) {
      tags.add("Discussion")
      toggleDiscussion(true)
    }
    if (propTags.includes("NSFW")) {
      tags.add("NSFW")
      toggleNSFW(true)
    }
    if (propTags.includes("Spoiler")) {
      tags.add("Spoiler")
      toggleSpoiler(true)
    }
  }
  useEffect(()=> {
    initializeTags();
  }, [])

  const handleClick = (tagType) => {
      if (tagType === "Spoiler") {
          if (spoiler) {
              tags.delete("Spoiler")
          } 
          else {
              tags.add("Spoiler")
          }
          toggleSpoiler(!spoiler)
      } 
      else if (tagType === "NSFW") {
          if (nsfw) {
              tags.delete("NSFW")
          }
          else {
              tags.add("NSFW")
          }
          toggleNSFW(!nsfw)
      }
      else if (tagType === "Discussion") {
          if (discussion) {
              tags.delete("Discussion")
          }
          else {
              tags.add("Discussion")
          }
          toggleDiscussion(!discussion)
      }
  }

  const handleSubmit = async (e) => {
    let tagsArray = Array.from(tags)
    if(forumTitle.length === 0 || forumDescription.length === 0 || tagsArray.length === 0){
      return;
    }
    await EditPost({variables: {postID: postId, title:forumTitle, content: forumDescription, tags: tagsArray}})
  }

  return (
    <div>
      <form className="w-full h-full m-1.5 space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-row justify-between">
          <div>
            <h3 className="font-bold text-lg">Edit Forum Post</h3>
          </div>
          <div>
            <label onClick={() => toggleForumCallback(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </label>
          </div>  
        </div>

        <div id="ForumEditModal-PostTitle">
          <label>Post Title*</label>
          <input 
            type="text" 
            className="input input-bordered w-full focus:outline-none" 
            onChange={(e) => setTitle(e.target.value)} 
            placeholder="Give your post a title"
            value={forumTitle}
          />
        </div>

        {link ? <div id="ForumEditModal-LinkedTo">
          <label>Linked To </label>
          <strong className="cursor-pointer">{link}</strong>
        </div> : <></>}
        
        <div id="ForumEditModal-Tags">
          <label>Tags*</label>
          <div className="flex">
            <div className={`badge ${spoiler===true ? "bg-spoiler" :""} ${spoiler===true ? "text-white" :"text-spoiler"} border-spoiler badge-outline text-xs mr-1 cursor-pointer`} onClick={() => handleClick("Spoiler")}>Spoiler</div>
            <div className={`badge ${nsfw===true ? "bg-nsfw" :""} ${nsfw===true ? "text-white" :"text-nsfw"} border-nsfw badge-outline text-xs mr-1 cursor-pointer`} onClick={() => handleClick("NSFW")}>NSFW</div>
            <div className={`badge ${discussion===true ? "bg-discussion" :""} ${discussion===true ? "text-white" :"text-discussion"} border-discussion badge-outline text-xs mr-1 cursor-pointer`} onClick={() => handleClick("Discussion")}>Discussion</div>
          </div>
        </div>
    
        <div id="ForumEditModal-Description">
          <label>Description*</label>
          <textarea 
            className="w-full textarea textarea-bordered rounded-md leading-normal text-sm" 
            placeholder="Post Description" 
            onChange={(e)=> setDescription(e.target.value)} 
            value={forumDescription}
          />
        </div>

        <div id="ForumEditModal-Footer" className="flex flex-row justify-between items-center">
          <div className="text-sm">*required</div>
          <div className="space-x-2">
            <a 
              className="link no-underline text-sm" 
              onClick={() => toggleForumCallback(false)}
            >
              Cancel
            </a>
            <button 
              className={"btn btn-sm normal-case "+(forumTitle.length === 0 || forumDescription.length === 0 || Array.from(tags).length === 0 ? "btn-disabled":"")} 
              type="submit"
            >
              Save
            </button>
          </div>
        </div>
        
      </form>
    </div>
  );
};

export default ForumEditModal;
