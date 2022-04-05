import React from 'react';
import StoryBoardTool from './StoryBoardTool';

const StoryEditScreen = () => {

    return (
        <div class="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" class="drawer-toggle"/>
            <div class="drawer-content">
                <label for="my-drawer-4" class="drawer-button btn btn-primary">Open drawer</label>
            </div> 
            <StoryBoardTool></StoryBoardTool> 
        </div>
    );
  }
  
  export default StoryEditScreen;
  