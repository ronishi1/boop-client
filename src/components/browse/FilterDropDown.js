import React, {useState} from 'react';

const FilterDropDown = ({title,options,selectCallback,deselectCallback,selected}) => {
  // https://www.figma.com/file/oP2NOFuaNPMCreFx2L7iSU/Boop-Mockups?node-id=298%3A1279

  const selectOption = (option) => {
    selectCallback(title,option);
  }

  const deselectOption = (option) => {
    deselectCallback(title,option);
  }

  let preview;
  if(selected.length == 0){
    preview = <div disabled className="cursor-pointer mt-1.5 font-normal text-sm">Any</div>
  }
  else if(selected.length == 1){
    preview =
    <div disabled className="cursor-pointer mt-1.5 font-normal text-sm badge border-none bg-gray-400 text-black opacity-50">{selected[0]}</div>
  }
  else {
    preview =
    <div>
      <div disabled className="cursor-pointer mt-1.5 font-normal mr-1 text-sm badge border-none bg-gray-400 text-black opacity-50">{selected[0]}</div>
      <div disabled className="cursor-pointer mt-1.5 font-normal text-sm badge border-none bg-gray-400 text-black opacity-50">+{selected.length-1}</div>
    </div>
  }

  return (
    <div>
      <p className="text=lg">{title}</p>
      <div class="dropdown">
        <label tabindex="0" className="select select-bordered h-8 min-h-0 w-52">
          {preview}
        </label>
        <ul tabindex="0" class="dropdown-content absolute z-10 mt-2 border-solid border-2 menu bg-base-100 w-52 rounded-box overflow-scroll max-h-80">
          {options.map((option) => {
            if(selected.includes(option)){
              return(
                <li>
                  <a className="flex justify-between py-1.5 h-8 text-sm hover:bg-gray-400/25" onClick={() => {deselectOption(option)}}>
                    <div>{option}</div>
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-white fill-comic stroke-[.15px]" viewBox="0 0 20 20" >
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </a>
                </li>
              )
            }
            else {
              return <li><a className="text-sm py-1.5 h-8 hover:bg-gray-400/25" onClick={() => {selectOption(option)}}>{option}</a></li>
            }
          })}
        </ul>
      </div>
    </div>
  );
}

export default FilterDropDown;
