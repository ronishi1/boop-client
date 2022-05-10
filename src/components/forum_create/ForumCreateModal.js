import React, { useState, useEffect} from "react";
import CancelPostModal from "../modals/CancelPostModal";
import { GET_LINK } from '../../cache/queries';
import { CREATE_POST } from '../../cache/mutations';
import { useLazyQuery, useMutation } from '@apollo/client';
import Select from 'react-select';

const ForumCreateModal = ({toggleForumCreateCallback}) => {
  const [spoiler, toggleSpoiler] = useState(false);
  const [nsfw, toggleNSFW] = useState(false);
  const [discussion, toggleDiscussion] = useState(false);
  const [tags, setTags] = useState(new Set());
  const [forumTitle, setTitle] = useState("Create Forum Post");
  const [forumDescription, setDescription] = useState("");

  const [link, setLink] = useState({
    value: 'Enter Series Title To Link', 
    label: 'Enter Series Title To Link',
    contentId: "",
    contentImage: "",
    contentType: "",
    authorUsername: "",
  });
  const [searchTitle, setSearch] = useState("")
  const [options, setOptions] = useState([{
    value:"test", 
    label:"test",
    contentId: "",
    contentImage: "",
    contentType: "",
    authorUsername: "",
  }])
  const [forumTopic, setTopic] = useState({value:"Comic Recommendations", label:"Comic Recommendations"})

  const [GetLink, { loading, error:err, data, refetch }] = useLazyQuery(GET_LINK);
  const [CreatePost] = useMutation(CREATE_POST);

  const customStyles = {
    option: (provided) => ({
      ...provided,
      cursor: "pointer"
    }),
    input: (provided) => ({
      ...provided,
      cursor: "text"
    })
  }
  
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
    let result = await GetLink({variables: {seriesTitle: searchTitle}});
    console.log(result.data.getLink)
    let newOptions = []
    for (let i = 0 ; i <= 10; i++) {
      if (result.data.getLink[i] === undefined) {
        break;
      }
      let item = result.data.getLink[i];
      newOptions.push({
        value: item.content_title, 
        label: item.content_title,
        contentId: item.content_ID,
        contentImage: item.content_image,
        contentType: item.content_type,
        authorUsername: item.author_username,
      });
    }
    if (newOptions.length !== 0) {
      setOptions(newOptions)
    }
  }

  useEffect(() => {
    fetchData(searchTitle)
  }, [])

  // const handleTitleInputChange = (seriesTitle) => {
  //   setSearch(seriesTitle)
  //   fetchData(searchTitle)
  // }

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
    await CreatePost({variables: {forumPost: forumPostInput}})
  }
  const handleDesc = (e) => {
    setDescription(e.target.value)
    let tagsArray = Array.from(tags)
    console.log(link.value)
    console.log(forumTopic.value)
    console.log(tagsArray)
  }
  return (
    <div>
      <form className="w-full h-full m-1.5 space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-row justify-between">
          <div>
            <h3 className="font-bold text-lg">Create Forum Post</h3>
          </div>
          <div>
            <label onClick={() => toggleForumCreateCallback(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </label>
          </div>
        </div>

        <div id="ForumCreateModal-PostTitle">
          <label>Post Title*</label>
          <input 
            type="text" 
            placeholder="Post Title" 
            className="input input-bordered w-full focus:outline-none rounded-md" 
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        
        <div id="ForumCreateModal-LinkedContent">
          <label>Linked To</label>
          <Select 
            value={link}
            styles = {customStyles}
            onChange={(e)=> {
              if(e === null){
                setLink({value: 'Enter Series Title To Link', label: 'Enter Series Title To Link'})
                return;
              }
              setLink(e);
            }}
            defaultValue={{value: 'Enter Series Title To Link', label: 'Enter Series Title To Link'}} 
            options={options}
            isClearable={true}
          />
          {link.contentId !== "" ?
            <a href={"/info/"+link.contentId} target="_blank"><div 
              className={"card card-bordered mt-2 rounded-none flex flex-row "
              + "hover:bg-"+(link.contentType === "S" ? "story" : "comic")}
            >
              <img className="h-[72px] w-12 m-1 object-cover" src={link.contentImage}/>
              <div className="flex flex-col">
                <div className="text-xl font-semibold truncate">{link.label}</div>
                <div className="text-sm leading-none truncate">{link.authorUsername}</div>
              </div>
            </div></a>
          : <></>}
        </div>

        <div id="ForumCreateModal-ForumTopic">
          <label>Forum Topic*</label>
          <Select 
            isSearchable={false}
            value = {forumTopic}
            defaultValue={{value: 'Select Forum Topic', label: 'Select Forum Topic'}} 
            options={forumTopics}
            onChange={(e) => setTopic(e)}
          />
        </div>

        <div id="ForumCreateModal-Tags">
          <label>Tags*</label>
          <div className="flex">
            <div className={`badge ${spoiler===true ? "bg-spoiler" :""} ${spoiler===true ? "text-white" :"text-spoiler"} border-spoiler badge-outline text-xs mr-1 cursor-pointer`} onClick={() => handleClick('Spoiler')}>Spoiler</div>
            <div className={`badge ${nsfw===true ? "bg-nsfw" :""} ${nsfw===true ? "text-white" :"text-nsfw"} border-nsfw badge-outline text-xs mr-1 cursor-pointer`} onClick={() => handleClick('NSFW')}>NSFW</div>
            <div className={`badge ${discussion===true ? "bg-discussion" :""} ${discussion===true ? "text-white" :"text-discussion"} border-discussion badge-outline text-xs mr-1 cursor-pointer`} onClick={() => handleClick('Discussion')}>Discussion</div>
          </div>
        </div>

        <div id="ForumCreateModal-Description">
          <label>Description*</label>
          <textarea 
            className="w-full textarea textarea-bordered rounded-md leading-normal text-sm" 
            placeholder="Post Description" 
            onChange={(e) => handleDesc(e)}
          />
        </div>
        
        <div id="ForumCreateModal-Footer" className="flex flex-row justify-between items-center">
          <div className="text-sm">*required</div>
          <div className="space-x-2">
            <a 
              className="link no-underline text-sm" 
              onClick={() => toggleForumCreateCallback(false)}
            >
              Cancel
            </a>
            <button 
              className={"btn btn-sm border-none normal-case "+
              (forumTitle.length === 0 || forumDescription.length===0 || Array.from(tags).length===0 ? "btn-disabled":"")} 
              type="submit"
            >
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ForumCreateModal;
