// src/components/ResponsiveImage.js
import React from "react";

const ResponsiveImage = () => {
  return (
    <section className="p-8">
      <img src="https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg" alt="Large Screen Image" className="hidden md:block w-full rounded-lg" />
      <img src="https://images.pexels.com/photos/8284728/pexels-photo-8284728.jpeg" alt="Small Screen Image" className="md:hidden w-full rounded-lg" />
    </section>
  );
};

export default ResponsiveImage;
