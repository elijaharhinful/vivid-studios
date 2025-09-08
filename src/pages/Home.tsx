// src\pages\Home.tsx
import React, { useState } from "react";
import Navigation from "../components/Navigation";
import WhatsAppFloatingButton from "../components/FloatingButton";
import HeroSection from "../components/HeroSection";
import GallerySection from "../components/GallerySection";
import BeforeAfterSection from "../components/BeforeAfterSection";
import Footer from "../components/Footer";
import { MotionConfig, LazyMotion, domAnimation } from "framer-motion";

import boxer from "../assets/images/boxer.png";
import fire from "../assets/images/fire.png";
import cake from "../assets/images/cake.png";
import yellow from "../assets/images/yellow.png";
import blue_dress from "../assets/images/black_dress.png";
import Fabric_holding from "../assets/images/Fabric_holding.png";
import Group from "../assets/images/Group.png";
import Group70 from "../assets/images/Group70.png";
import roses from "../assets/images/roses.png";
import sara from "../assets/images/sara.png";
import funky from "../assets/images/funky.png";
import edna from "../assets/images/edna.png";
import Group71 from "../assets/images/Group71.png";
import beforenafterphone from "../assets/images/Before after slot_phone_1.png";
import before from "../assets/images/before.png";
import after from "../assets/images/after.png";
import arrow from "../assets/images/arrow.png";

const Home = () => {

  const instantVarietyImages = [
    { src: boxer, alt: "Boxing style photoshoot" },
    { src: fire, alt: "Fire hair artistic portrait" },
    { src: cake, alt: "Celebration cake portrait" },
  ];

  const clothingImages = [
    { src: yellow, alt: "casual sports style photoshoot" },
    { src: blue_dress, alt: "lady in balck portrait" },
    { src: Fabric_holding, alt: "fabric holding photoshoot" },
  ];

  const makeupImages = [
    {
      src: Group,
      alt: "Colorful makeup look",
      className: "hidden sm:block",
      aspect: "landscape169" as const,
    },
    {
      src: Group70,
      alt: "Colorful makeup look (mobile)",
      className: "block sm:hidden",
      mobileAspect: "portrait34" as const,
    },
  ];

  const portfolioImages = [
    { src: roses, alt: "lady with roses photoshoot" },
    { src: sara, alt: "sara with specs portrait" },
    { src: funky, alt: "funky with headphones photoshoot" },
    { src: edna, alt: "edna portrait" },
  ];

  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation}>
        <div className="min-h-screen bg-black text-white">
          <Navigation />
          <HeroSection />
          <WhatsAppFloatingButton
            phone="233264525811"
            message="Hello! I'd like to book a Vivid Studios session."
          />
          <GallerySection
            id="instant-variety"
            title="Instant<br />Variety"
            description="Why settle for one look when you can have many? From red-carpet glam to boardroom-ready, switch styles in a single session; no outfit changes, no limits."
            images={instantVarietyImages}
            columns={3}
            headingVariant="splitLeftRight"
            varietyIndentClass="pl-10 md:pl-14"
            aspect="portrait45"
          />

          <BeforeAfterSection
            id="before-after"
            desktopImage={Group71}
            mobileMode="separate"
            mobileComposite={beforenafterphone}
            titleTop="Before"
            titleBottom="After"
            description="Just send us your raw, everyday images, and we’ll transform them into polished, professional photoshoots."
            description1="Your part is easy. We do the magic. Trust the Process!"
            beforeImage={before}
            afterImage={after}
            arrowImage={arrow}
          />
          <GallerySection
            id="bye-bye"
            title="Bye Bye<br />Clothing Rentals..."
            description="You don't need to buy or rent a single outfit. Whether you want chic, professional, casual, or high-fashion, every look is created to match your style without the wardrobe struggle."
            images={clothingImages}
            columns={3}
            headingVariant="centered"
            varietyIndentClass="pl-10 md:pl-14"
            aspect="square"
          />
          <GallerySection
            title="Forget Makeup!<br />No Hair stress..."
            description="Look your best effortlessly. No more hours in front of a mirror, salon appointments, or shopping over beauty routines."
            images={makeupImages}
            columns={1}
            headingVariant="splitLeftRight"
            layout="single"
          />
          <GallerySection
            title="Vivid Visuals Always"
            description="Every image bursts with clarity, color and detail. No dull frames, no flat lighting.From portraits to full creative spreads, your photos always look striking, polished, and alive."
            images={portfolioImages}
            columns={4}
            headingVariant="centered"
            varietyIndentClass="pl-10 md:pl-14"
            aspect="square"
          />
          <Footer />
        </div>
      </LazyMotion>
    </MotionConfig>
  );
};

export default Home;
