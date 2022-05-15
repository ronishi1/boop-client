import React, { useState } from "react";
import ForumPostLink from "./ForumPostLink";
import { GET_POST } from '../../cache/queries';
import { CREATE_REPLY, DELETE_REPLY, EDIT_REPLY } from '../../cache/mutations';
import {useMutation, useQuery} from '@apollo/client';
import {useParams} from 'react-router-dom';
import Loading from '../loading/Loading'
import ForumReplySection from "./ForumReplySection";
import { Transition } from '@headlessui/react';
import PageNotFound from '../page_not_found/PageNotFound';
const ForumPostScreen = ({auth, user}) => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=329%3A2498
  const { id } = useParams();
  const { data, loading, refetch } = useQuery(GET_POST, {
    variables: { postId: id },
  });

  const [CreateReply] = useMutation(CREATE_REPLY);
  const [DeleteReply] = useMutation(DELETE_REPLY);
  const [EditReply] = useMutation(EDIT_REPLY);

  const [isReplying,toggleReply] = useState(false);
  const [reply, setReply] = useState("");
  const [error,setError] = useState({status:false,message:""});

  const handleCreateReply = async () => {
    if(reply.length === 0){
      setError({status:true,message:"Reply cannot be empty"});
      setTimeout(() => {
        setError({status:false,message:''});
      },2000)
      return;
    }
    await CreateReply({variables : {
      postID: id,
      content: reply
    }});
    toggleReply(false);
    refetch();
  }

  const handleDeleteReply = async (replyId) => {
    await DeleteReply({variables: {
      postID: id,
      replyID: replyId
    }});
    refetch();
  }

  const handleEditReply = async (replyId, content) => {
    await EditReply({ variables: {
      postID: id,
      content: content,
      replyID: replyId
    }});
    refetch();
  }

  if(loading || (auth && !user)){
    return <Loading />
  }
  if(data.getPost == null){
    return <PageNotFound />
  }
  console.log(data.getPost.author_name)
  return (
    <div className="flex justify-center">
      <div className='flex flex-col w-5/6 space-y-4'>
        <div
          className="flex shadow justify-between items-center h-16 w-full p-4 bg-forum"
        >
          <div className='text-white font-bold'>
            {data.getPost.title}
          </div>
          {user && !isReplying ? <button
            className="btn btn-outline btn-sm border-white text-white
            hover:text-forum hover:bg-white hover:border-white"
            onClick={() => {
              setReply("");
              toggleReply(!isReplying);
            }}
          >
            Reply
          </button> : <></>}
        </div>
        <div className="flex flex-row space-x-4">
          <div className="w-1/4">
            <ForumPostLink post={data.getPost} />
          </div>
          <div className="w-3/4 space-y-4">
            {isReplying ?
              <div className='card flex flex-col p-4 rounded-none shadow'>
                <div className='space-y-2'>
                  <Transition
                    show={error.status}
                    enter="transition-opacity duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="alert alert-error py-1.5 shadow-lg">
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>{error.message}</span>
                      </div>
                    </div>
                  </Transition>
                  <label>Reply to <strong>{data.getPost.title}</strong></label>
                  <textarea
                    className='w-full textarea textarea-bordered leading-normal whitespace-pre-wrap'
                    onChange={(e) => setReply(e.target.value)}
                    value={reply}
                    placeholder="Reply to post"
                  />
                  <div className='flex justify-end space-x-4'>
                    <a
                      className="link no-underline text-gray-400
                      hover:brightness-90"
                      onClick={() => {
                        toggleReply(false);
                        setReply("");
                      }}
                    >
                      Cancel
                    </a>
                    <a
                      className="link no-underline text-forum font-semibold
                      hover:brightness-90"
                      onClick={handleCreateReply}
                    >
                    Reply
                    </a>
                  </div>
                </div>
              </div>: <></>
            }
            <ForumReplySection replies={data.getPost.replies} user={user} handleDeleteReply={handleDeleteReply}
            handleEditReply={handleEditReply}
            post={{
              content:data.getPost.content,
              author: data.getPost.author,
              author_name: data.getPost.author_name,
              timestamp: data.getPost.timestamp
            }}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumPostScreen;
