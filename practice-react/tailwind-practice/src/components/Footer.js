// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="p-4 bg-gray-200 dark:bg-gray-900 dark:text-gray-100">
      <hr className="border-gray-300 dark:border-gray-700 mb-4" />
      <div className="text-center text-sm">&copy; 2024 Shivanshu Shekhar</div>
      <div className="flex justify-center gap-4 mt-2 flex-wrap md:flex-nowrap">
        <a href="#home" className="hover:text-gray-700 dark:hover:text-gray-300">Home</a>
        <a href="#about" className="hover:text-gray-700 dark:hover:text-gray-300">About</a>
        <a href="#contact" className="hover:text-gray-700 dark:hover:text-gray-300">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;
