import React from 'react';

interface MenuButtonProps {
    children: React.ReactNode;
    selected: boolean;
    onClick: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ children, selected, onClick }) => {
    return (
        <button
            className={`flex items-center justify-center text-[12px] h-[40px] p-2 ml-[5px] 
                rounded-[50px] border-2 transition-colors duration-300 
                ${selected ? 'bg-[#E51058] text-white' : 'border-gray-400 text-black'} 
                hover:border-[#E51058]`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default MenuButton;