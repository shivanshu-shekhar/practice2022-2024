import React, { useState, useContext } from "react";
import RenamingPrompt from "./RenamingPrompt";
import { DataContext } from "../contexts/DataContext";


const ResponsiveNavbar: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const context = useContext(DataContext); // Access context
    if (!context) {
        return <div>Loading...</div>; // Handle the case where context is undefined
    }
  const { doRenaming, toggleRenaming, setSearchedData  } = context;  // Get doRenaming and toggleRenaming from context

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const optimizingSearchedData = () => {
    const x = inputValue.trim();
    setInputValue(x);
    setSearchedData(x);
  };
  const handleMotifClick = () => {
    optimizingSearchedData();
  }

  const handleClearInput = () => {
    setInputValue("");
    setSearchedData("");
  };
  

  return (
    <nav className="w-full h-[100%] p-1">
      <div className="flex flex-wrap  h-full">
        {/* Left Div */}
        <div className="w-[390px] md:w-[390px] h-[120px] p-4 max-md:pb-0 max-[410px]:pt-0 max-[410px]:h-[80px] ">
          <div className="sm:text-[28px] md:text-[30px] text-[32px] font-gilroyextrabold1 font-bold text-[#121212]">
            collections
          </div>
          <div className="text-[16px] font-gilroysemibold text-[#717274] mt-0">
            personalized content storyboards
          </div>
        </div>
        {/* Gap */}
        <div className="flex-grow h-[120px] max-[420px]:h-0"></div> {/* This div creates the gap */}
        {/* Right Div max-md:py-0 */}
        <div className="flex flex-col  space-y-4 ">
          <div className={`w-[390px] md:w-[390px] max-[376px]:w-[340px] transition-all duration-500 ease-in-out overflow-hidden ${doRenaming ? 
            'h-[0px]':'h-[120px]'} p-4`}>
          <div className={`w-full md:w-full h-[50%]  flex ${doRenaming?'hidden': 'flex'}`}>
            <div className="w-[85%] h-full border-[1px] border-[#DBDBDB] rounded-[10px] p-[3px] flex items-center">
              <img
                src={`${process.env.PUBLIC_URL}/assets/icons/search-label-icon.png`}
                alt="Label Icon"
                className="h-[44%] w-[4%] mr-2" // Adjust size as needed
              />
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Type here to search..."
                name="search"
                className="flex-grow border-none outline-none bg-transparent text-black" // No border
              />
              {inputValue && (
                <img
                  src={`${process.env.PUBLIC_URL}/assets/icons/cancel-input-icon.png`}
                  alt="Close"
                  className="h-[44%] w-[4%] cursor-pointer ml-2"
                  onClick={handleClearInput} // Clear input on click
                />//appearing (x) aka close  icon
              )}
            </div>
            <div className="w-[10%] h-full border-[1px] border-[#DBDBDB] rounded-[10px] p-[1px] flex 
            items-center justify-center ml-2 relative group" onClick={handleMotifClick}>
              {/* Default Image (visible normally) */}
              <img
                src={`${process.env.PUBLIC_URL}/assets/icons/motif.png`}
                alt="Motif Icon"
                className="h-[44%] w-[44%] transition-opacity duration-300 group-hover:opacity-0" // Fade out on hover
              />
              {/* Hover Image (visible on hover) */}
              <img
                src={`${process.env.PUBLIC_URL}/assets/icons/hover-motif.png`} // Change to your hover image
                alt="Motif Icon Hover"
                className="absolute h-[44%] w-[44%] transition-opacity duration-300 opacity-0 group-hover:opacity-100" // Fade in on hover
              />
            </div>
          </div>
          <div className={`w-full md:w-full h-[45%] mt-2 flex ${doRenaming?'hidden': 'flex'}`}>
            <div className="w-[10%] h-full border-[1px] border-[#DBDBDB] rounded-[10px] p-[1px] flex items-center  
               justify-center  relative group" onClick={toggleRenaming}>
              <img
                src={`${process.env.PUBLIC_URL}/assets/icons/rename-icon.png`}
                alt="Rename Icon"
                className="h-[44%] w-[44%] transition-opacity duration-300 group-hover:opacity-0" // Fade out on hover
              />
              {/* Hover Image (visible on hover) */}
              <img
                src={`${process.env.PUBLIC_URL}/assets/icons/hover-rename-icon.png`} // Change to your hover image
                alt="Rename Icon Hover"
                className="absolute h-[44%] w-[44%] transition-opacity duration-300 opacity-0 group-hover:opacity-100" // Fade in on hover
              />
            </div>

            <div className="w-[10%] h-full border-[1px] border-[#DBDBDB] rounded-[10px] p-[1px] flex items-center justify-center ml-2 relative group">
              <img
                src={`${process.env.PUBLIC_URL}/assets/icons/delete-icon.png`}
                alt="Delete Icon"
                className="h-[44%] w-[44%] transition-opacity duration-300 group-hover:opacity-0" // Fade out on hover
              />
              {/* Hover Image (visible on hover) */}
              <img
                src={`${process.env.PUBLIC_URL}/assets/icons/hover-delete-icon.png`} // Change to your hover image
                alt="Delete Icon Hover"
                className="absolute h-[44%] w-[44%] transition-opacity duration-300 opacity-0 group-hover:opacity-100" // Fade in on hover
              />
            </div>

            <div className="w-[10%] h-full border-[1px] border-[#DBDBDB] rounded-[10px] p-[1px] flex items-center ml-2 justify-center  relative group">
              <img
                src={`${process.env.PUBLIC_URL}/assets/icons/copy-icon.png`}
                alt="Copy Icon"
                className="h-[44%] w-[44%] transition-opacity duration-300 group-hover:opacity-0" // Fade out on hover
              />
              {/* Hover Image (visible on hover) */}
              <img
                src={`${process.env.PUBLIC_URL}/assets/icons/hover-copy-icon.png`} // Change to your hover image
                alt="Copy Icon Hover"
                className="absolute h-[44%] w-[44%] transition-opacity duration-300 opacity-0 group-hover:opacity-100" // Fade in on hover
              />
            </div>

            <div className="w-[56%] h-full border-[1px] border-[#DBDBDB] rounded-[10px] p-[1px] flex items-center justify-center ml-2 relative group">
              <img
                src={`${process.env.PUBLIC_URL}/assets/icons/colored-vector.png`}
                alt="Colored vector Icon"
                className="h-[44%] pr-1"
              />
              <p>Create new collection</p>
            </div>
          </div>
        </div>
        <RenamingPrompt />
        </div>
      </div>
      
    </nav>
  );
};

export default ResponsiveNavbar;

//conditional rendering is happening
// interactive elements are there
// triggering and finalizing renaming operation 
// setting of the searched data after optemiztion
// having its state and also gettng shared state values there changing also occurs here that change other aspects of the page
//added the animation for conditional rendering for renaming prompt appearing and disappearing
