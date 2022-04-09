import React 	from 'react';

const ProfilePublished = ({published}) => {
  // Holds the users published
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=330%3A2331
  return (
    <div className='flex flex-row space-x-2 overflow-x-auto'>
      {published.map((content) => {
        return <div className='h-20 w-16'>
          <img className={'h-full w-full object-cover border-2 border-'+content.content_color} src={content.cover_art}/>
        </div>
      })}
    </div>
  );
}

export default ProfilePublished;
