import React from 'react';
import ResponsiveNavbar from './ResponsiveNavbar';
import ResponsiveMenuBar from "./ResponsiveMenuBar";
import CardContainer from './CardContainer';
//import RenamingPrompt from './RenamingPrompt';

const FullPageFlexbox: React.FC = () => {
    return (
        <div className="flex h-screen  bg-[#EFEFEF]">
            {/* Left Sidebar */}
            <div className="w-1/20 bg-[#EFEFEF] flex items-center justify-center ">
            <img src={`${process.env.PUBLIC_URL}/assets/icons/left-sidebar.png`} alt="Left Sidebar Icon" className="mb-4" 
            style={{ width: '1rem', height: '36rem' }}/>
            </div>
            {/* Right Container */}
            <div className="w-[94%] h-[95%] bg-[#FAFAFA] my-5 rounded-[12px] overflow-y-auto scrollbar-hidden">
                <div className="w-[100%] h-[20%] ">
                    <ResponsiveNavbar/>
                    <ResponsiveMenuBar/>
                    <CardContainer/>
                    {/* here my CardContainer will come  */}
                </div>
            </div>
        </div>
    );
};

export default FullPageFlexbox;