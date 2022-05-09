import React, { useState } 	from 'react';
import {useQuery} from '@apollo/client';
import { Link } from "react-router-dom";
import { GET_CONTENT_BASIC } from '../../cache/queries';

const ForumPost = ({post}) => {
  // This is the initial post, should make it different in looks like reddit does
  // replies should be a less of a focus, don't follow figma mockup
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=341%3A2882
  const [tab, setTab] = useState(1);

  const linkedContent = post.linked_content !== null ? post.linked_content : "123456789012345678901234"
  const { loading, error, data } = useQuery(GET_CONTENT_BASIC, {
    variables: { contentID: linkedContent },
  });

  if(loading){
    return <></>;
  }
  console.log("This is the data when it's getting loaded")
  console.log(data)
  let content_color = "";
  if (post.linked_content === null || data.getContentInfo === null) {
    console.log("enters here")
    content_color = "dead"
  }
  else {
    switch (data.getContentInfo.content_type) {
      case "C":
        content_color = "comic";
        break;
      case "S":
        content_color = "story";
        break;
      default:
    }
  }
  console.log(post)
  return (
    <div className='card py-6 px-4 flex flex-col rounded-none shadow'>
      <Link to={'/info/'+post.linked_content}>
        <div>
          <p className={'text-center font-bold text-'+content_color}>
            {post.linked_title ? post.linked_title : "Unlinked Content"}
          </p>
        </div>
      </Link>
      <div className='flex flex-row place-content-center'>
        {post.tags.map((tag, i) => {
          let color;
          switch(tag) {
            case 'Discussion':
              color = "discussion"
              break;
            case 'Spoilers':
              color = 'spoiler'
              break;
            case 'NSFW':
              color = "nsfw"
              break;
            default:
          }
          return (
          <div className={'badge bg-'+color+' border-'+color} key={i}>
            {tag}
          </div>);
        })}
      </div>
      <Link to={'/info/'+post.linked_content}>
        <div className='flex my-4 place-content-center h-2/5'>
          <img className='h-72 w-48 object-cover' src={post.linked_image ? post.linked_content : "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Question_mark_%28black%29.svg/800px-Question_mark_%28black%29.svg.png" } alt="cover image"/>
        </div>
      </Link>
      <div className='grid grid-cols-1 justify-items-center space-y-2'>
        <div className="tabs">
          <a 
            className={"tab tab-bordered " + ( tab==1 ? 'tab-active' : '')}
            onClick={() => setTab(1)}
          >
            Post
          </a> 
          <a 
            className={"tab tab-bordered " + ( tab==2 ? 'tab-active' : '')}
            onClick={() => setTab(2)}
          >
            Synopsis
          </a> 
        </div>
        <div className='h-72 overflow-y-auto'>
          {tab == 1 ? <p>{post.content}</p>:<p>{post.linked_synopsis}</p>}
        </div>
      </div>
    </div>
  );
}

export default ForumPost;
