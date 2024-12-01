import React, { useContext } from 'react';
import { DataContext } from '../contexts/DataContext'; // Adjust import path as necessary
import Card from './Card'; // Import your Card component
import NotFound from './NotFound'; // Import your NotFound component

const CardContainer: React.FC = () => {
    const context = useContext(DataContext); // Access context
    if (!context) {
        return <div>Loading...</div>; // Handle the case where context is undefined
    }

    const { cardsData, doRenaming, searchedData, searchedType } = context; // Destructure safely
    // Determine the cards to display
    // let filteredCards = searchedData
    //     ? cardsData.filter((card) =>
    //         {return card.title === searchedData;}
    //       )
    //     : cardsData;
    let filteredCards = searchedData
        ? cardsData.filter((card) => {
        // First, check if the title matches
            if (card.title === searchedData) {
                return true; // Include this card
            }
            // If title doesn't match, check if searchedData is in subTitle
            if (card.subTitle.toLowerCase().includes(searchedData.toLowerCase())) {
                return true; // Include this card
            }
            // If neither matches, exclude this card
            return false;
        })
    : cardsData; // If searchedData is null, return all cards

    filteredCards = searchedType === 'All Files'? filteredCards : filteredCards.filter((card) =>
        {return card.type === searchedType;}
    )

    return (
        <div className="p-4 max-[635px]:mt-[50px]">
            {filteredCards.length > 0 ? (
                <div className="grid grid-cols-[repeat(auto-fill,minmax(284px,1fr))] gap-4">
                    {filteredCards.map((card) => (
                        <Card
                            key={card.id}
                            title={card.title}
                            subTitle={card.subTitle}
                            isVideo={card.isVideo}
                            videoSrc={card.videoSrc}
                            imageSrc={card.imageSrc}
                            showAlternateContent={doRenaming} // Show input fields if renaming
                            type={card.type}
                            currentTitle={card.currentTitle}
                            id={card.id}
                        />
                    ))}
                </div>
            ) : (
                <NotFound message="No matching cards found" />
            )}
        </div>
    );
};

export default CardContainer;
