// src/components/Hero.js
import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-wrap items-center justify-center p-8 bg-gray-100 dark:bg-gray-800 dark:text-gray-100">
      <div className="w-full md:w-1/2 p-4">
        <img src="https://images.pexels.com/photos/245240/pexels-photo-245240.jpeg" alt="Hero" className="w-full rounded-lg" />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <h1 className="text-3xl font-bold mb-4">Welcome to Our Site</h1>
        <p className="text-lg">This is a brief description or call to action text.</p>
      </div>
    </section>
  );
};

export default Hero;
