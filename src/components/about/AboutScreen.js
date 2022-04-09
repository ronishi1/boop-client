import React 	from 'react';

const AboutScreen = () => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=255%3A538
  return (
    <div className="container mx-auto px-52">
      <div className="font-medium text-2xl">
        About Boop
      </div>
      <div className="text-xl">
        Boop is the name of our comic and story content platform that is being developed for the CSE416 course.
        The platform provides ways for users to view content, interact with others on forums, and even create their own content
        through the use of our creator studio.
      </div>
      <div className="divider"></div>
      <div className="font-medium text-2xl">
        About the team
      </div>
      <div className="grid grid-cols-2 gap-y-4">
        <div>
          <div className="text-xl">
            Ray Onishi
          </div>
          <ul>
            <li>Junior</li>
          </ul>
        </div>
        <div>
          <div className="text-xl">
            Nelson Liang
          </div>
          <ul>
            <li>Senior</li>
          </ul>
        </div>
        <div>
          <div className="text-xl">
            Iris Zheng
          </div>
          <ul>
            <li>Junior</li>
          </ul>
        </div>
        <div>
          <div className="text-xl">
            Kelvin Chen
          </div>
          <ul>
            <li>Senior</li>
          </ul>
        </div>
      </div>
    </div>

  );
}

export default AboutScreen;
