import React, { useState, useEffect} from "react";
import { EDIT_POST } from '../../cache/mutations';
import { useMutation } from '@apollo/client';

const ForumEditModal = ({postId, title, content, propTags, toggleForumCallback}) => {
  const [spoiler, toggleSpoiler] = useState(false);
  const [nsfw, toggleNSFW] = useState(false);
  const [discussion, toggleDiscussion] = useState(false);
  const [tags, setTags] = useState(new Set());
  const [link, setLink] = useState('Spy x Family');
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

  const handleSubmit = (e) => {
    let tagsArray = Array.from(tags)
    EditPost({variables: {postID: postId, title:forumTitle, content: forumDescription, tags: tagsArray}})
  }
  return (
    <div>
    <form className="w-full h-full m-1.5" onSubmit={handleSubmit}>
            <div className="flex flex-row justify-between">
              <div>
                <h3 className="font-bold text-lg">Edit Forum Post</h3>
              </div>
              <div>
                <label for="forum-modal">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </label>
              </div>
              
            </div>
            <input type="text"  className="input input-bordered w-full focus:outline-none py-4" onChange={(e) => setTitle(e.target.value)} value={forumTitle}/>
            <p className="py-4">Linked to <strong className="cursor-pointer">{link}</strong></p>
            <div className="flex">
              <div className={`badge ${spoiler===true ? "bg-spoiler" :""} ${spoiler===true ? "text-white" :"text-spoiler"} border-spoiler badge-outline text-xs mr-1 cursor-pointer`} onClick={() => handleClick("Spoiler")}>Spoiler</div>
              <div className={`badge ${nsfw===true ? "bg-nsfw" :""} ${nsfw===true ? "text-white" :"text-nsfw"} border-nsfw badge-outline text-xs mr-1 cursor-pointer`} onClick={() => handleClick("NSFW")}>NSFW</div>
              <div className={`badge ${discussion===true ? "bg-discussion" :""} ${discussion===true ? "text-white" :"text-discussion"} border-discussion badge-outline text-xs mr-1 cursor-pointer`} onClick={() => handleClick("Discussion")}>Discussion</div>
            </div>
            <textarea className="w-full border-2 border-grey rounded text-sm pl-2 pb-6 mt-4" placeholder={content} onChange={(e)=> setDescription(e.target.value)} value={forumDescription}></textarea>
            <div className="flex flex-row justify-between items-center">
              <label for="forum-modal" className="cursor-pointer ml-4">Cancel</label>
                <button className="btn border-none bg-forum normal-case mr-4" type="submit">Edit</button>
            </div>
        </form>
    </div>
  );
};

export default ForumEditModal;
