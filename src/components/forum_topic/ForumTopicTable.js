import React 	from 'react';
import ForumTopicTableEntry from './ForumTopicTableEntry';

const ForumTopicTable = ({posts}) => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=275%3A1703
  return (
    <div className='w-full h-full overflow-y-auto bg-white'>
      <table className="w-full table-fixed bg-white border-2">
        <thead className='border-b-2'>
          <tr>
            <th className='p-4 w-2/3 text-left'>Title</th>
            <th>Replies</th>
            <th>Recent Posts</th>
          </tr>
        </thead>
        <tbody>
          {posts.length == 0 ? <div className="text-lg p-4 text-gray-400">There are currently no posts in this topic.</div> : <></>}
          {posts.map((post) => {
            return <ForumTopicTableEntry post={post}/>
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ForumTopicTable;
