import React from "react";
import ForumTopicTable from "./ForumTopicTable";
import { useParams, Link } from 'react-router-dom'
import { GET_TOPIC } from '../../cache/queries';
import {useQuery} from '@apollo/client'
import Loading from '../loading/Loading'
const ForumTopicScreen = () => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=255%3A636
  let { id } = useParams();

  const { loading, error, data, refetch } = useQuery(GET_TOPIC, {
      variables: { topicId: id },
    });

  let bg = "";
  let topic = {}
  if(data) {
    topic = data.getTopic;
    console.log(topic);
    if(topic.category == "General"){
      bg = "bg-forum";
    }
    else if (topic.category == "Comics"){
      bg = "bg-comic";
    }
    else {
      bg = "bg-story";
    }
  }

  const data2 = {
    topic_title: "Topic Title",
    topic_description: "this is the description of topic title",
    topic_color: "comic",
    topic_posts: [
      {
        cover_image:
          "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974706631/kaguya-sama-love-is-war-vol-10-9781974706631_hr.jpg",
        title: "sample post 1",
        replies: [{}, {}, {}, {}, {}, {}],
        tags: ["Discussion", "Spoilers"],
        publication_date: new Date(2022, 4, 17, 2, 14),
        author: "post author",
        recent_post: new Date(2022, 4, 16, 4, 17),
      },
      {
        cover_image:
          "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974706631/kaguya-sama-love-is-war-vol-10-9781974706631_hr.jpg",
        title: "sample post 2",
        replies: [{}, {}, {}],
        tags: ["Discussion", "Spoilers"],
        publication_date: new Date(2022, 6, 12, 15, 20),
        author: "post author",
        recent_post: new Date(2022, 4, 16, 4, 17),
      },
    ],
  };
  if(loading){
    return <Loading />
  }
  return (
    <div className="flex place-content-center">
      <div className={"card rounded-none w-5/6 h-3/4-screen static"}>
        <div className={`grid grid-cols-2 ${bg}`}>
          <div>
            <div className="grid grid-cols-12">
                <Link to="/forum-home" className="col-span-1 pt-3 pl-3">
                  <div className="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 stroke-white stroke-2" fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                    </svg>
                  </div>
                </Link>
                <div className="col-span-11">
              <div className="pt-4 pl-2 text-lg font-bold text-white">
                {topic.name}
              </div>
              <div className="pl-2 pb-4 pt-2 text-normal font-medium text-white">
                {topic.description}
              </div>
              </div>
            </div>
          </div>
          <div class="dropdown dropdown-end justify-self-end self-center pr-2">
            <label tabindex="0" class="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Most Views</a>
              </li>
              <li>
                <a>Most Replies</a>
              </li>
              <li>
                <a>Most Recent</a>
              </li>
              <li>
                <a>Oldest</a>
              </li>
            </ul>
          </div>
        </div>
        <ForumTopicTable posts={topic.posts} />
      </div>
    </div>
  );
};

export default ForumTopicScreen;
