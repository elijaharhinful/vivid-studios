// src/pages/Portfolio.tsx
import React from "react";
import PortfolioGrid from "../components/PortfolioGrid";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import WhatsAppFloatingButton from "../components/FloatingButton";

const modules = import.meta.glob(
  "../assets/images/portfolio/*.{png,jpg,jpeg,webp}",
  { eager: true, import: "default" }
);

// Convert to image array with generated captions
const images = Object.entries(modules).map(([path, src]: [string, any]) => {
  const file = path.split("/").pop() || "";
  const base = file.replace(/\.(png|jpe?g|webp)$/i, "");
  
  // Generate readable alt text from filename
  const alt = base
    .replace(/[-_]+/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .trim();
  
  // Generate caption from alt text
  const caption = alt + " - Professional AI Photography";
  
  return { 
    src: src as string, 
    alt,
    caption 
  };
});


const Portfolio = () => {

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <WhatsAppFloatingButton
        phone="233264525811"
        message="Hello! I'd like to book a Vivid Studios session."
      />
      <PortfolioGrid title="Portfolio" images={images} />
      <Footer />
    </div>
  );
};

export default Portfolio;
