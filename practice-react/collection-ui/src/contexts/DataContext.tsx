import React, { createContext, useState, ReactNode } from 'react';

interface CardData {
    id: number;
    title: string;
    subTitle: string;
    isVideo: boolean;
    videoSrc?: string;
    imageSrc?: string;
    showAlternateContent: boolean;
    type: string;
    currentTitle: string;
}

interface DataContextType {
    cardsData: CardData[];
    setCardsData: React.Dispatch<React.SetStateAction<CardData[]>>; // Add setCardsData to context
    doRenaming: boolean; // Boolean state for renaming
    toggleRenaming: () => void; // Function to toggle renaming
    searchedData: string | null; // Allow searchedData to be null
    setSearchedData: React.Dispatch<React.SetStateAction<string | null>>; // Setter for searched data
    searchedType: string | null;
    setSearchedType: React.Dispatch<React.SetStateAction<string | null>>;
}

export const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cardsData, setCardsData] = useState<CardData[]>([
        {
            id: 1,
            title: "Collection 1",
            subTitle: "5 Photos",
            isVideo: false,
            imageSrc: `${process.env.PUBLIC_URL}/assets/photos/charlie-chapline.png`,
            showAlternateContent: false,
            type:'Photos',
            currentTitle: "Collection 1",
        },
        {
            id: 2,
            title: "Collection 2",
            subTitle: "3 Videos",
            isVideo: false,
            imageSrc: `${process.env.PUBLIC_URL}/assets/photos/meet-disha.png`,
            showAlternateContent: false,
            type:'Videos',
            currentTitle: "Collection 2",
        },
        {
            id: 3,
            title: "Collection 3",
            subTitle: "5 Photos",
            isVideo: false,
            imageSrc: `${process.env.PUBLIC_URL}/assets/photos/paperflite-well.png`,
            showAlternateContent: false,
            type:'Photos',
            currentTitle: "Collection 3",
        },
        {
            id: 4,
            title: "Collection 4",
            subTitle: "3 Videos",
            isVideo: true,
            videoSrc: `${process.env.PUBLIC_URL}/assets/videos/research.mp4`,
            showAlternateContent: false,
            type:'Videos',
            currentTitle: "Collection 4",
        },
        {
            id: 5,
            title: "Collection 5",
            subTitle: "5 Photos",
            isVideo: false,
            imageSrc: `${process.env.PUBLIC_URL}/assets/photos/buiness.jpg`,
            showAlternateContent: false,
            type:'Photos',
            currentTitle: "Collection 5",
        },
        {
            id: 6,
            title: "Collection 6",
            subTitle: "4 Videos",
            isVideo: true,
            videoSrc: `${process.env.PUBLIC_URL}/assets/videos/architecture.mp4`,
            showAlternateContent: false,
            type:'Videos',
            currentTitle: "Collection 6",
        },
        {
            id: 7,
            title: "Collection 7",
            subTitle: "3 Videos",
            isVideo: false,
            imageSrc: `${process.env.PUBLIC_URL}/assets/photos/fishing.jpg`,
            showAlternateContent: false,
            type:'Videos',
            currentTitle: "Collection 7",
        },
        {
            id: 8,
            title: "Collection 8",
            subTitle: "5 Photos",
            isVideo: false,
            imageSrc: `${process.env.PUBLIC_URL}/assets/photos/basketball.jpg`,
            showAlternateContent: false,
            type:'Photos',
            currentTitle: "Collection 8",
        },
        // Add more card data as needed
    ]);

    const [doRenaming, setDoRenaming] = useState<boolean>(false); // Initialize doRenaming to false
    
    const [searchedData, setSearchedData] = useState<string | null>(null); // Initialize searched data as null

    const [searchedType, setSearchedType] = useState<string | null>('All Files');

    const toggleRenaming = () => {
        setDoRenaming((prev) => !prev); // Toggle the doRenaming state
    };

    return (
        <DataContext.Provider value={{ cardsData, setCardsData, doRenaming, toggleRenaming, searchedData, 
        setSearchedData, searchedType,setSearchedType }}>
            {children}
        </DataContext.Provider>
    );
};