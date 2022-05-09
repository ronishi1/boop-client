import React, { useState, useEffect} from "react";
import CancelPostModal from "../modals/CancelPostModal";
import { GET_SERIES_TITLES } from '../../cache/queries';
import { CREATE_POST } from '../../cache/mutations';
import { useLazyQuery, useMutation } from '@apollo/client';
import Select from 'react-select'

const ForumCreateModal = ({toggleForumCreateCallback}) => {
  const [spoiler, toggleSpoiler] = useState(false);
  const [nsfw, toggleNSFW] = useState(false);
  const [discussion, toggleDiscussion] = useState(false);
  const [tags, setTags] = useState(new Set());
  const [forumTitle, setTitle] = useState("Create Forum Post");
  const [forumDescription, setDescription] = useState("");

  const [link, setLink] = useState({value: 'Enter Series Title To Link', label: 'Enter Series Title To Link'});
  const [searchTitle, setSearch] = useState("")
  const [options, setOptions] = useState([{value:"test", label:"test"}])
  const [forumTopic, setTopic] = useState("")

  const [GetSeriesTitles, { loading, error, data, refetch }] = useLazyQuery(GET_SERIES_TITLES);
  const [CreatePost] = useMutation(CREATE_POST);
  
  const forumTopics = [
    {value:"Comic Recommendations", label:"Comic Recommendations"},
    {value:"Comic Discussions", label:"Comic Discussions"},
    {value:"Comic Upcoming Releases", label:"Comic Upcoming Releases"},
    {value:"Story Recommendations", label:"Story Recommendations"},
    {value:"Story Discussions", label:"Story Discussions"},
    {value:"Story Upcoming Releases", label:"Story Upcoming Releases"},
    {value:"Community Announcements", label:"Community Announcements"},
    {value:"Casual Discussion", label:"Casual Discussion"},
    {value:"Games, Music, and Entertainment", label:"Games, Music, and Entertainment"},
  ]
  
  const fetchData = async (searchTitle) => {
    let result = await GetSeriesTitles({variables: {seriesTitle: searchTitle}})
    console.log(result.data.getSeriesTitles)
    let newOptions = []
    for (let i = 0 ; i <= 10; i++) {
      if (result.data.getSeriesTitles[i] === undefined) {
        break
      }
      newOptions.push({value:result.data.getSeriesTitles[i], label: result.data.getSeriesTitles[i]})
    }
    if (newOptions.length !== 0) {
      setOptions(newOptions)
    }
  }

  useEffect(() => {
    fetchData(searchTitle)
  }, [])

  const handleTitleInputChange = (seriesTitle) => {
    setSearch(seriesTitle)
    fetchData(searchTitle)
  }

  const handleTitleChange = (seriesTitle) => {
    setLink(seriesTitle)
  }
  const handleForumTopicChange = (forumTopic) => {
    setTopic(forumTopic)
  }
  

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
    console.log(forumTitle)
    console.log(forumDescription)
    console.log(tagsArray)
    console.log(link)
    console.log(forumTopic)
    let forumPostInput = {
      title: forumTitle,
      content: forumDescription,
      tags: tagsArray,
      linked_content: link.value,
      topic : forumTopic.value
    }
    CreatePost({variables: {forumPost: forumPostInput}})
  }
  const handleDesc = (e) => {
    setDescription(e.target.value)
    let tagsArray = Array.from(tags)
    console.log(link.value)
    console.log(tagsArray)
    console.log(forumTopic.value)
  }
  return (
    <div>
    <form className="w-full h-full m-1.5" onSubmit={handleSubmit}>
            <div className="flex flex-row justify-between">
              <div>
                <h3 className="font-bold text-lg">Create Forum Post</h3>
              </div>
              <div>
                <label for="forum-modal" onClick={() => toggleForumCreateCallback(false)}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </label>
              </div>
              
            </div>
            <input type="text" placeholder="Post Title" className="input input-bordered w-full focus:outline-none py-4" onChange={(e) => setTitle(e.target.value)}/>
            <p className="py-4">Linked to 
              <Select 
                value = {link}
                onChange={(e)=> setLink(e)}
                defaultValue={{value: 'Enter Series Title To Link', label: 'Enter Series Title To Link'}} 
                options={options}
                onInputChange={handleTitleInputChange}
                onChange={handleTitleChange}
              />
            </p>
            <p className="py-4">Forum Topic: 
              <Select 
                isSearchable={false}
                value = {forumTopic}
                onChange={(e)=> setLink(e)}
                defaultValue={{value: 'Select Forum Topic', label: 'Select Forum Topic'}} 
                options={forumTopics}
                onChange={handleForumTopicChange}
              />
            </p>
            <p>
              Tags
            </p>
            <div className="flex">
              <div className={`badge ${spoiler===true ? "bg-spoiler" :""} ${spoiler===true ? "text-white" :"text-spoiler"} border-spoiler badge-outline text-xs mr-1 cursor-pointer`} onClick={() => handleClick('Spoiler')}>Spoiler</div>
              <div className={`badge ${nsfw===true ? "bg-nsfw" :""} ${nsfw===true ? "text-white" :"text-nsfw"} border-nsfw badge-outline text-xs mr-1 cursor-pointer`} onClick={() => handleClick('NSFW')}>NSFW</div>
              <div className={`badge ${discussion===true ? "bg-discussion" :""} ${discussion===true ? "text-white" :"text-discussion"} border-discussion badge-outline text-xs mr-1 cursor-pointer`} onClick={() => handleClick('Discussion')}>Discussion</div>
            </div>
            <textarea className="w-full border-2 border-grey rounded text-sm pl-2 pb-6 mt-4" placeholder="Post Description" onChange={(e) => handleDesc(e)}></textarea>
            <div className="flex flex-row justify-between items-center">
              <label for="forum-modal" className="cursor-pointer ml-4" onClick={() => toggleForumCreateCallback(false)}>Cancel</label>
                <button className="btn border-none bg-forum normal-case mr-4" type="submit">Post</button>
            </div>
        </form>
    </div>
  );
};

export default ForumCreateModal;
