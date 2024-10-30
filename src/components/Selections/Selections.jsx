import React from 'react';

const Selections = ({availableBtnHandler,selectedBtnHandler,isActiveAvailable,isActiveSelected}) => {
    return (
        <div className="flex justify-between items-center my-8 container mx-auto">
        <h1 className="font-bold text-xl">{isActiveAvailable? "Available Player": "Selected Player"}</h1>
        <div>
          <button onClick={()=>availableBtnHandler()} className={`rounded-l-lg border-l border-t border-b ${isActiveAvailable? "bg-lime-400" : "bg-white" }  px-4 py-2`}>Available</button>
          <button onClick={()=>selectedBtnHandler()} className={`rounded-r-lg border-r border-t border-b ${isActiveSelected? "bg-lime-400" : "bg-white" } px-4 py-2`}>Selected</button>
        </div>
      </div>
    );
};

export default Selections;