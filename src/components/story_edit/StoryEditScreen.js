import React from 'react';
import StoryBoardTool from './StoryBoardTool';
import QuillEditor from './QuillEditor';

const StoryEditScreen = () => {

    return (
        <div class="flex">
            <div class="flex-auto"> 
                <QuillEditor></QuillEditor>
            </div>
            {/* <div class="drawer"> */}
                {/* <div class="drawer-content">
                        <label for="my-drawer-4" class="drawer-button btn btn-primary">Open drawer</label>
                </div>  */}

            {/* <div class="drawer drawer-end">
                <input id="my-drawer-4" type="checkbox" class="drawer-toggle"/>

                <div class="drawer-content max-w-[10%]">
                    <label for="my-drawer-4" class="drawer-button btn btn-primary">Open drawer</label>
                </div> 
                <StoryBoardTool></StoryBoardTool> 
            </div>
            </div> */}
            <div>
                <label for="my-drawer-4" class="drawer-button btn btn-primary">Arrow</label>
            </div>
            <div >
                {/* <label for="my-drawer-4" class="drawer-button btn btn-primary">Open drawer</label> */}
                <div class="drawer drawer-end">
                    <input id="my-drawer-4" type="checkbox" class="drawer-toggle"/>
                <div class="drawer-content">
                    {/* <label for="my-drawer-4" class="drawer-button btn btn-primary">Open drawer</label> */}
                    {/* <QuillEditor></QuillEditor> */}
                </div> 
                    <div class="drawer-side">
                        <label for="my-drawer-4" class="drawer-overlay"></label>
                        <ul class="menu p-4 overflow-y-auto w-96 bg-base-100 text-base-content">
                        
                        <StoryBoardTool></StoryBoardTool>
                        {/* <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default StoryEditScreen;
  