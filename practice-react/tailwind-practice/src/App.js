// src/App.js
import React from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ResponsiveImage from "./components/ResponsiveImage";
import CardGrid from "./components/CardGrid"; 

const App = () => {
  return (
    <ThemeProvider>
      <div>
      <Navbar />
      <main>
        <Hero />
        <ResponsiveImage />
        <CardGrid />
      </main>
      <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
