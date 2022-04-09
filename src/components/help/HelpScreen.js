import React 	from 'react';

const HelpScreen = () => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=255%3A538
  return (
    <div className="container mx-auto px-52">
      <div className="font-medium text-3xl mb-1">Help Desk</div>
      <div className="font-medium text-2xl">
        How do I create an account?
      </div>
      <div className="text-xl">
        You can create an account by clicking on the avatar icon on the far right of the navigation bar and clicking on
        <span className="font-medium"> Register </span>
        in the dropdown.
      </div>
      <div className="divider"></div>
      <div className="font-medium text-2xl">
        What if I forgot my password?
      </div>
      <div className="text-xl">
        You can reset your password by clicking on the avatar icon on the far right of the navigation bar and clicking on
        <span className="font-medium"> Login </span>
        in the dropdown. Then on the prompt click on the <span className="font-medium"> Forgot Password? </span> text
        under the form.
      </div>
    <div className="divider"></div>
      <div className="font-medium text-2xl">
        How do I use the forums?
      </div>
      <div className="text-xl">
        You can navigate to the forums using either the sidebar which you can access using the icon on the far left of the
        navigation bar or by clicking on the forum icon next to the avatar icon.
      </div>
      <div className="divider"></div>
      <div className="font-medium text-2xl">
        How do I create my own story or comic?
      </div>
      <div className="text-xl">
        Once you are logged in, you can create a comic or story by clicking on the third icon (the folder icon) in the
        navigation bar. You will be redirected to the creator studio where you can then create a new comic or story
      </div>
      <div className="divider"></div>
    </div>

  );
}

export default HelpScreen;
