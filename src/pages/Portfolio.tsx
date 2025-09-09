// src/pages/Portfolio.tsx
import React from "react";
import PortfolioGrid from "../components/PortfolioGrid";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import WhatsAppFloatingButton from "../components/FloatingButton";

import adm1 from "../assets/images/portfolio/adm1.webp";
import adm2 from "../assets/images/portfolio/adm2.webp";
import adm3 from "../assets/images/portfolio/adm3.webp";
import adm4 from "../assets/images/portfolio/adm4.webp";
import adm5 from "../assets/images/portfolio/adm5.webp";

import adwoa1 from "../assets/images/portfolio/adwoa1.webp";
import adwoa2 from "../assets/images/portfolio/adwoa2.webp";
import adwoa3 from "../assets/images/portfolio/adwoa3.webp";
import adwoa4 from "../assets/images/portfolio/adwoa4.webp";
import adwoa5 from "../assets/images/portfolio/adwoa5.webp";
import adwoa6 from "../assets/images/portfolio/adwoa6.webp";

import chris1 from "../assets/images/portfolio/chris1.webp";
import chris2 from "../assets/images/portfolio/chris2.webp";
import chris3 from "../assets/images/portfolio/chris3.webp";
import chris4 from "../assets/images/portfolio/chris4.webp";
import chris5 from "../assets/images/portfolio/chris5.webp";
import chris6 from "../assets/images/portfolio/chris6.webp";
import chris7 from "../assets/images/portfolio/chris7.webp";

import daisy1 from "../assets/images/portfolio/daisy1.webp";
import daisy2 from "../assets/images/portfolio/daisy2.webp";
import daisy4 from "../assets/images/portfolio/daisy4.webp";
import daisy5 from "../assets/images/portfolio/daisy5.webp";
import daisy10 from "../assets/images/portfolio/daisy10.webp";

import martin1 from "../assets/images/portfolio/martin1.webp";
import martin2 from "../assets/images/portfolio/martin2.webp";
import martin3 from "../assets/images/portfolio/martin3.webp";
import martin4 from "../assets/images/portfolio/martin4.webp";
import martin5 from "../assets/images/portfolio/martin5.webp";
import martin6 from "../assets/images/portfolio/martin6.webp";
import martin7 from "../assets/images/portfolio/martin7.webp";
import martin8 from "../assets/images/portfolio/martin8.webp";
import martin9 from "../assets/images/portfolio/martin9.webp";
import martin10 from "../assets/images/portfolio/martin10.webp";

import mimi1 from "../assets/images/portfolio/mimi1.webp";
import mimi2 from "../assets/images/portfolio/mimi2.webp";
import mimi3 from "../assets/images/portfolio/mimi3.webp";
import mimi4 from "../assets/images/portfolio/mimi4.webp";
import mimi5 from "../assets/images/portfolio/mimi5.webp";
import mimi6 from "../assets/images/portfolio/mimi6.webp";
import mimi7 from "../assets/images/portfolio/mimi7.webp";

import pat1 from "../assets/images/portfolio/pat1.webp";
import pat2 from "../assets/images/portfolio/pat2.webp";
import pat3 from "../assets/images/portfolio/pat3.webp";
import pat4 from "../assets/images/portfolio/pat4.webp";
import pat5 from "../assets/images/portfolio/pat5.webp";
import pat6 from "../assets/images/portfolio/pat6.webp";
import pat7 from "../assets/images/portfolio/pat7.webp";

import princilla1 from "../assets/images/portfolio/princilla1.webp";
import princilla3 from "../assets/images/portfolio/princilla3.webp";
import princilla4 from "../assets/images/portfolio/princilla4.webp";
import princilla5 from "../assets/images/portfolio/princilla5.webp";
import princilla6 from "../assets/images/portfolio/princilla6.webp";
import princilla7 from "../assets/images/portfolio/princilla7.webp";

import sara1 from "../assets/images/portfolio/sara1.webp";
import sara2 from "../assets/images/portfolio/sara2.webp";
import sara3 from "../assets/images/portfolio/sara3.webp";
import sara4 from "../assets/images/portfolio/sara4.webp";
import sara5 from "../assets/images/portfolio/sara5.webp";
import sara6 from "../assets/images/portfolio/sara6.webp";


const Portfolio = () => {
  const images = [
    { src: adm1, alt: "first pic of adm1" },
    { src: adm2, alt: "second pic of adm2" },
    { src: adm3, alt: "third pic of adm3" },
    { src: adm4, alt: "fourth pic of adm4" },
    { src: adm5, alt: "fifth pic of adm5" },

    { src: adwoa1, alt: "first pic of adwoa1" },
    { src: adwoa2, alt: "second pic of adwoa2" },
    { src: adwoa3, alt: "third pic of adwoa3" },
    { src: adwoa4, alt: "fourth pic of adwoa4" },
    { src: adwoa5, alt: "fifth pic of adwoa5" },
    { src: adwoa6, alt: "sixth pic of adwoa6" },

    { src: chris1, alt: "first pic of chris1" },
    { src: chris2, alt: "second pic of chris2" },
    { src: chris3, alt: "third pic of chris3" },
    { src: chris4, alt: "fourth pic of chris4" },
    { src: chris5, alt: "fifth pic of chris5" },
    { src: chris6, alt: "sixth pic of chris6" },
    { src: chris7, alt: "seventh pic of chris7" },

    { src: daisy1, alt: "first pic of daisy1" },
    { src: daisy2, alt: "second pic of daisy2" },
    { src: daisy4, alt: "third pic of daisy4" },
    { src: daisy5, alt: "fourth pic of daisy5" },
    { src: daisy10, alt: "fifth pic of daisy10" },

    { src: martin1, alt: "first pic of martin1" },
    { src: martin2, alt: "second pic of martin2" },
    { src: martin3, alt: "third pic of martin3" },
    { src: martin4, alt: "fourth pic of martin4" },
    { src: martin5, alt: "fifth pic of martin5" },
    { src: martin6, alt: "sixth pic of martin6" },
    { src: martin7, alt: "seventh pic of martin7" },
    { src: martin8, alt: "eighth pic of martin8" },
    { src: martin9, alt: "ninth pic of martin9" },
    { src: martin10, alt: "tenth pic of martin10" },

    { src: mimi1, alt: "first pic of mimi1" },
    { src: mimi2, alt: "second pic of mimi2" },
    { src: mimi3, alt: "third pic of mimi3" },
    { src: mimi4, alt: "fourth pic of mimi4" },
    { src: mimi5, alt: "fifth pic of mimi5" },
    { src: mimi6, alt: "sixth pic of mimi6" },
    { src: mimi7, alt: "seventh pic of mimi7" },

    { src: pat1, alt: "first pic of pat1" },
    { src: pat2, alt: "second pic of pat2" },
    { src: pat3, alt: "third pic of pat3" },
    { src: pat4, alt: "fourth pic of pat4" },
    { src: pat5, alt: "fifth pic of pat5" },
    { src: pat6, alt: "sixth pic of pat6" },
    { src: pat7, alt: "sixth pic of pat7" },

    { src: princilla1, alt: "first pic of princilla1" },
    { src: princilla3, alt: "second pic of princilla3" },
    { src: princilla4, alt: "third pic of princilla4" },
    { src: princilla5, alt: "fourth pic of princilla5" },
    { src: princilla6, alt: "fifth pic of princilla6" },
    { src: princilla7, alt: "sixth pic of princilla7" },

    { src: sara1, alt: "first pic of sara1" },
    { src: sara2, alt: "second pic of sara2" },
    { src: sara3, alt: "third pic of sara3" },
    { src: sara4, alt: "fourth pic of sara4" },
    { src: sara5, alt: "fifth pic of sara5" },
    { src: sara6, alt: "sixth pic of sara6" },
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
