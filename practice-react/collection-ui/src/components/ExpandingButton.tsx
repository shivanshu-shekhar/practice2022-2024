// import React from 'react';

// const ExpandingButton: React.FC = () => {
//     return (
//         <div className="flex items-center justify-center">
//             <div className="relative flex items-center justify-center w-[40px] h-[40px] border-2 border-dashed
//              border-gray-400 rounded-full transition-all duration-300 hover:bg-gray-100 cursor-pointer group">
//                 {/* Default Icon */}
//                 <img 
//                     src={`${process.env.PUBLIC_URL}/assets/icons/vector.png`} // Replace with your plus icon path
//                     alt="Vector"
//                     className="absolute w-[35%] h-35% transition-transform duration-300 group-hover:scale-0" // Hide on hover
//                 />
//                 {/* Hover Icon */}
//                 <img 
//                     src={`${process.env.PUBLIC_URL}/assets/icons/colored-vector.png`} // Replace with your new folder icon path
//                     alt="Colored Vector"
//                     className="absolute w-[35%] h-35% transition-transform duration-300 scale-0 group-hover:scale-100" // Show on hover
//                 />
//                 {/* Text */}
//                 <span className="absolute text-sm font-medium text-gray-700 transition-opacity duration-300 
//                 opacity-0 group-hover:opacity-100">
//                     New Folder
//                 </span>
//             </div>
//         </div>
//     );
// };

// export default ExpandingButton;

import React from 'react';

const ExpandingButton: React.FC = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="relative flex items-center justify-center w-[40px] hover:w-[100px] h-[40px] border-2 border-dashed
            hover:justify-start hover:p-[5px] hover:mr-[2px]
            border-gray-400 rounded-full transition-all duration-300 cursor-pointer group">
                {/* Default Icon */}
                <img 
                    src={`${process.env.PUBLIC_URL}/assets/icons/vector.png`} // Replace with your plus icon path
                    alt="Vector"
                    className="absolute w-[14px] h-[35%] transition-transform duration-300 group-hover:scale-0" // Hide on hover
                />
                {/* Hover Icon */}
                <img 
                    src={`${process.env.PUBLIC_URL}/assets/icons/colored-vector.png`} // Replace with your new folder icon path
                    alt="Colored Vector"
                    className="absolute w-[14px] h-[35%] transition-transform duration-300 scale-0 group-hover:scale-100" // Show on hover
                />
                {/* Text */}
                <span className="ml-4  text-[12px] font-medium text-[#E51058] transition-opacity duration-50 opacity-0 group-hover:opacity-100">
                    New Folder
                </span>
            </div>
        </div>
    );
};

export default ExpandingButton;