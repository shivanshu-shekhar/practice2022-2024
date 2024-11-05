// src/components/Navbar.js
import React, { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">DW</div>

        {/* Links for medium and larger screens */}
        <nav className="flex-grow flex justify-center gap-4 hidden md:flex ">
          <a href="#home" className="hover:text-gray-700 dark:hover:text-gray-300">
            Home
          </a>
          <a href="#about" className="hover:text-gray-700 dark:hover:text-gray-300">
            About
          </a>
          <a href="#contact" className="hover:text-gray-700 dark:hover:text-gray-300">
            Contact
          </a>
          {/* <button onClick={toggleTheme} className="p-2">
            {isDarkMode ? "🌙" : "☀️"}
          </button>
          <button className="p-2 bg-blue-500 text-white rounded-md">Log Out</button> */}
        </nav>
        <div className="hidden md:flex items-center gap-4">
      <button onClick={toggleTheme} className="p-2">
        {isDarkMode ? "🌙" : "☀️"}
      </button>
      <button className="p-2 bg-blue-500 text-white rounded-md">Log Out</button>
    </div>

        {/* Hamburger Icon for small screens */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleTheme} className="p-2">
            {isDarkMode ? "🌙" : "☀️"}
          </button>
          <button onClick={toggleMenu} className="p-2 focus:outline-none">
            ☰
          </button>
        </div>
      </div>

      {/* Menu for small screens */}
      {isOpen && (
        <nav className="flex flex-col items-center gap-2 md:hidden bg-white dark:bg-gray-900 p-4">
          <a href="#home" className="hover:text-gray-700 dark:hover:text-gray-300">
            Home
          </a>
          <a href="#about" className="hover:text-gray-700 dark:hover:text-gray-300">
            About
          </a>
          <a href="#contact" className="hover:text-gray-700 dark:hover:text-gray-300">
            Contact
          </a>
          <button className="p-2 bg-blue-500 text-white rounded-md">Log Out</button>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
