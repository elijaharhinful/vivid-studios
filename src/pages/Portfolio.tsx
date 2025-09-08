// src/pages/Portfolio.tsx
import React from "react";
import PortfolioGrid from "../components/PortfolioGrid";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import WhatsAppFloatingButton from "../components/FloatingButton";

import roses from "../assets/images/roses.png";
import sara from "../assets/images/sara.png";
import funky from "../assets/images/funky.png";
import edna from "../assets/images/edna.png";
import boxer from "../assets/images/boxer.png";
import fire from "../assets/images/fire.png";
import cake from "../assets/images/cake.png";
import yellow from "../assets/images/yellow.png";
import blue_dress from "../assets/images/black_dress.png";
import Fabric_holding from "../assets/images/Fabric_holding.png";

const Portfolio = () => {
  const images = [
    { src: roses, alt: "Lady with roses photoshoot", caption: "Elegant portrait with roses" },
    { src: sara, alt: "Sara with specs portrait", caption: "Professional headshot" },
    { src: funky, alt: "Funky with headphones photoshoot", caption: "Creative music-themed shoot" },
    { src: edna, alt: "Edna portrait", caption: "Classic portrait style" },
    { src: boxer, alt: "Boxing style photoshoot", caption: "Athletic themed session" },
    { src: fire, alt: "Fire hair artistic portrait", caption: "Artistic hair styling" },
    { src: cake, alt: "Celebration cake portrait", caption: "Birthday celebration shoot" },
    { src: yellow, alt: "Casual sports style photoshoot", caption: "Casual lifestyle photography" },
    { src: blue_dress, alt: "Lady in black portrait", caption: "Elegant black dress styling" },
    { src: Fabric_holding, alt: "Fabric holding photoshoot", caption: "Fashion fabric styling" },
  ];

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