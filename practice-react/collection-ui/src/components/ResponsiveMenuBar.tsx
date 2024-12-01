import React,{useState, useContext} from 'react';
import ExpandingButton from './ExpandingButton';
import MenuButton from './MenuButton';
import { DataContext } from '../contexts/DataContext';


const ResponsiveMenuBar: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<string | null>('All Files'); // Default selection
    const context = useContext(DataContext); // Access context
    if (!context) {
        return <div>Loading...</div>; // Handle the case where context is undefined
    }
    const { setSearchedType } = context;

    const handleMenuButtonClick = (option: string) => {
        setSelectedOption(option); // Set the clicked option as selected
    };

    const options = ['All Files', 'Photos', 'Videos', 'Documents']; // Array of options

    return (
        <div className="flex flex-wrap justify-between w-full p-4  h-[90px] pb-0 max-[856px]:mt-[113px] mt-0 max-[410px]:p-0">
            {/* Left Div */}
            <div className="w-[404px] flex-shrink-0 p-4 rounded-lg max-[410px]:w-full max-[410px]:p-0">
                <div className='flex w-full'>
                    <ExpandingButton/>
                    {options.map((option) => (
                <MenuButton 
                    key={option} // Use a unique key for each button
                    selected={selectedOption === option} 
                    onClick={() => {
                        setSearchedType(option);
                        handleMenuButtonClick(option)}
                    }
                >
                    {option}
                </MenuButton>
            ))}
                </div>
            </div>

            {/* Right Div */}
            <div className="w-[145px] flex-shrink-0 flex h-[61px]  m-2 rounded-lg">
                {/* Left Side Div */}
                <div className="w-[62%] h-full">
                    {/* Top Div */}
                    <div className="w-full h-[50%] text-[10px] text-right font-gilroymedium text-[#717274] pt-[12px] pr-[9px]">
                        Sort by
                    </div>
                    {/* Bottom Flex Div */}
                    <div className="flex w-full h-[50%]">
                        {/* Left Div in Bottom Flex */}
                        <div className="w-[80%]  text-[#000000]  text-[12px]">
                            Created date
                        </div>
                        {/* Right Div in Bottom Flex */}
                        <div className="w-[20%] pl-[3px]">
                            <div>
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/icons/sorted-up.png`}
                                    alt="Sorted Up"
                                    className="h-[44%] p-0 w-[8px]"
                                />
                            </div>
                            <div>
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/icons/sorted-down.png`}
                                    alt="Sorted Down"
                                    className="h-[44%] p-0 w-[8px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side Div */}
                <div className="w-[28%] h-[69%]  border-[1px] border-[#DBDBDB] rounded-[10px] 
                    p-[1px] flex items-center ml-1 justify-center relative group mt-[7%]">
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/icons/list-icon.png`}
                        alt="List Icon"
                        className="h-[44%]  transition-opacity duration-300 group-hover:opacity-0" // Fade out on hover
                    />
                    {/* Hover Image (visible on hover) */}
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/icons/hover-list-icon.png`} // Change to your hover image
                        alt="List Icon Hover"
                        className="absolute h-[44%]  transition-opacity duration-300 opacity-0 group-hover:opacity-100" // Fade in on hover
                    /> 
                </div>
            </div>

        </div>
    );
};

export default ResponsiveMenuBar;