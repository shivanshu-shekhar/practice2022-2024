import React, { useState, useContext } from 'react';
import { DataContext } from '../contexts/DataContext';

interface CardProps {
    title: string;
    subTitle: string;
    isVideo: boolean; // Determines if the content is a video
    videoSrc?: string; // Video source URL
    imageSrc?: string; // Image source URL
    showAlternateContent: boolean;// State to control alternate content visibility
    type: string;
    currentTitle: string;
    id: number;
}

const Card: React.FC<CardProps> = ({ title, isVideo, videoSrc, imageSrc, showAlternateContent, subTitle, currentTitle, id }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [inputValue, setInputValue] = useState(currentTitle); // Local state for input value
    const context = useContext(DataContext);
    if (!context) return null; // Handle case where context is undefined
    const { setCardsData } = context;

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newTitle = event.target.value;
        setInputValue(newTitle); // Update local input value

        // Update the currentTitle in cardsData
        setCardsData(prevCards =>
            prevCards.map(card =>
                card.id === id ? { ...card, currentTitle: newTitle } : card
            )
        );
        
    };

    return (
        <div 
            className={"h-[244px] w-[100%] transition-all duration-300"}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Media Container */}
            <div className={`h-[180px] w-full rounded-[20px] overflow-hidden transition-transform duration-300 ${isHovered ? 'translate-y-[-4px]' : ''}`}>
                {isVideo && videoSrc ? (
                    <video 
                        src={videoSrc} 
                        autoPlay 
                        loop 
                        muted 
                        className="w-full h-full object-cover" 
                    />
                ) : (
                    <img 
                        src={imageSrc} 
                        alt={title} 
                        className="w-full h-full object-cover" 
                    />
                )}
            </div>

            {/* Title or Alternate Content */}
            <div className="w-[90%] mt-2">
                {showAlternateContent ? (
                    <div className="flex justify-between items-center border-b border-[#DBDBDB] pb-1">
                        <span className="text-[14px] text-[#000000]">
                            <input type="text" value={currentTitle} // Set the default value to title
                                onChange={handleInputChange}// Set onChange handler
                                className="text-[14px] text-[#000000] border-none focus:outline-none bg-transparent"
                                // Add any other input attributes you need, like onChange for controlled input
                            />
                        </span>
                    </div>
                ) : (<div className="relative">
                    <span className="text-[14px] text-[#000000]">{title}</span>
                        {!showAlternateContent && isHovered && (
                            <span className={`absolute right-0 text-[14px] text-[#000000]
                            transition-transform duration-500  ease-in-out transform ${isHovered ? 'translate-x-0' : 'translate-x-full'}`}>
                            {/* Replace with actual icon, e.g., an SVG or an icon component */}
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/icons/rt-arrow.png`} // Change to your hover image
                                    alt="Rt Arrow"
                                /> 
                            {/* Example using Font Awesome */}
                            </span>
                        )}
                        <div className="text-[12px] text-[#717274]">
                            {subTitle}
                        </div>
                    </div>
                )}
</div>
        </div>
    );
};

export default Card;