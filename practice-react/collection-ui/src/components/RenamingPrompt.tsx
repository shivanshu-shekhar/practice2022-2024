import React,{useContext} from 'react';
import { DataContext } from '../contexts/DataContext';

const RenamingPrompt: React.FC = () => {
    const context = useContext(DataContext);
    if (!context) return null; // Handle case where context is undefined
    const { cardsData,setCardsData, toggleRenaming } = context;

    const handleSave = () => {
        // Update all cards' titles to their currentTitle
        setCardsData(prevCards =>
            prevCards.map(card => ({
                ...card,
                title: card.currentTitle // Assign currentTitle to title
            }))
        );
        toggleRenaming(); // Optionally toggle renaming mode off after saving
    };

    const handleCancel = () => {
        // Revert all cards' currentTitle back to their original title
        setCardsData(prevCards => {
            const updatedCards = prevCards.map(card => ({
                ...card,
                currentTitle: card.title // Assign title back to currentTitle
            }));
            // console.log(updatedCards); // Log updated cards to see changes
            return updatedCards; // Return new state
        });
        toggleRenaming(); // Optionally toggle renaming mode off after canceling
    };
    
    
    return (
        <div className={`w-[390px] md:w-[390px] h-[80%] py-4 max-md:py-0 flex gap-2.5 pb-[8px]`}> {/* 10px gap */} 
            <div className="w-[67%] h-[70px] text-[12px] text-right text-[#717274]">
                All changes made to this section will reflect for
                all users in the content hub.
            </div>
            <div className="w-[17%] h-[70px]" onClick={handleSave}>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/icons/save-icon.png`}
                    alt="Save"
                    className="h-[44%] p-0 w-full"
                />
            </div>
            <div className="w-[16%] h-[70px]" onClick={handleCancel}>
            <img
                    src={`${process.env.PUBLIC_URL}/assets/icons/cancel-icon.png`}
                    alt="Cancel"
                    className="h-[44%] p-0 w-full"
                />
            </div>
        </div>
    );
};

export default RenamingPrompt;