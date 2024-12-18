import React,{useContext} from 'react';
import { DataContext } from '../contexts/DataContext';

const RenamingPrompt: React.FC = () => {
    const context = useContext(DataContext);
    if (!context) return null; // Handle case where context is undefined
    const { setCardsData, toggleRenaming,doRenaming } = context;

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
        <div className={`w-[390px] md:w-[390px] max-[376px]:w-[340px]
            transition-all duration-500 ease-in-out overflow-hidden ${doRenaming?'h-[120px]': 'h-[0px]'} 
            py-4  flex gap-2.5 pb-[8px]`}> {/* 10px gap max-md:py-0*/} 
            <div className={`w-[67%] h-[70px] text-[12px] text-right text-[#717274] ${doRenaming?'block': 'hidden'}`}>
                All changes made to this section will reflect for
                all users in the content hub.
            </div>
            <div className={`w-[17%] h-[70px] ${doRenaming?'block': 'hidden'}`} onClick={handleSave} >
                <img
                    src={`${process.env.PUBLIC_URL}/assets/icons/save-icon.png`}
                    alt="Save"
                    className="h-[44%] p-0 w-full"
                />
            </div>
            <div className={`w-[16%] h-[70px] ${doRenaming?'block': 'hidden'}`} onClick={handleCancel}>
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
//it uses setCardsData, toggleRenaming from DataContext
//this component is either finalizing the changes or cancelling them for renaming functionality
//added the animation for conditional rendering for renaming prompt appearing and disappearing
