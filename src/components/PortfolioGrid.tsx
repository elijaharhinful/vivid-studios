import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css"

type Img = { src: string; alt?: string; caption?: string };

interface Props {
  images: Img[];
  title?: string;
}

const PortfolioGrid: React.FC<Props> = ({ images, title = "Portfolio" }) => {
  const [index, setIndex] = useState(-1);

  const lightboxImages = images.map(img => ({
    src: img.src,
    alt: img.alt,
    title: img.caption || img.alt,
  }));

  return (
    <section className="py-10 md:py-15 px-8 bg-black text-white text-center md:text-left">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold italic mb-10">{title}</h2>
        
        <div className="columns-2 md:columns-3 lg:columns-4 gap-1 [column-fill:_balance]">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className="group mb-0 w-full break-inside-avoid overflow-hidden focus:outline-none focus:ring-0 transition-transform duration-300 hover:scale-[1.02]"
            >
              <img
                src={img.src}
                alt={img.alt || ""}
                loading="lazy"
                decoding="async"
                className="block w-full h-auto"
              />
            </button>
          ))}
        </div>
      </div>

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={lightboxImages}
        plugins={[Thumbnails, Zoom, Fullscreen]}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, 0.95)" },
        }}
        thumbnails={{
          position: "bottom",
          width: 80,
          height: 60,
          border: 2,
          borderColor: "#ffffff",
        }}
        zoom={{
          maxZoomPixelRatio: 3,
          zoomInMultiplier: 2,
        }}
      />
    </section>
  );
};

export default PortfolioGrid;