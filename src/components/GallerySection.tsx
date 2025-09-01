import React from "react";
import { motion, Variants } from "framer-motion";

type Aspect = "square" | "portrait34" | "portrait45" | "landscape169";

type ImageItem = {
  src: string;
  alt?: string;
  aspect?: Aspect;
  mobileAspect?: Aspect;
  className?: string;
};

interface GallerySectionProps {
  id?: string;
  title: string;
  description: string;
  images: ImageItem[];
  columns?: 1 | 3 | 4;
  layout?: "grid" | "single";
  headingVariant?: "splitLeftRight" | "default" | "centered";
  varietyIndentClass?: string;
  aspect?: Aspect;
}

const aspectClassMap: Record<Aspect, string> = {
  square: "aspect-square",
  portrait34: "aspect-[3/4]",
  portrait45: "aspect-[4/5]",
  landscape169: "aspect-[16/9]",
};

const GallerySection: React.FC<GallerySectionProps> = ({
  id,
  title,
  description,
  images,
  columns = 3,
  headingVariant = "default",
  varietyIndentClass = "pl-10 md:pl-14",
  aspect = "portrait34",
  layout = "grid",
}) => {
  const gridCols = (() => {
    switch (columns) {
      case 1:
        return "grid grid-cols-1";
      case 4:
        return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
      case 3:
      default:
        return "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3";
    }
  })();

  const lines = title.includes("<br")
    ? title
        .split(/<br\s*\/?>(?:\s*)?/i)
        .map((s) => s.trim())
        .filter(Boolean)
    : [title];

  const headingReveal: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
  };

  const gridContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
  };

  const card: Variants = {
    hidden: { opacity: 0, y: 18, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id={id} className="py-20 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto -mb-25 sm:-mb-0">
        {headingVariant === "splitLeftRight" ? (
          <motion.div
            className="mb-12 sm:mb-16"
            variants={headingReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="mx-auto max-w-4xl md:flex md:items-center justify-center md:gap-4">
              <h2 className="font-display italic font-bold leading-[0.95] text-5xl sm:text-6xl lg:text-7xl max-w-[20ch] shrink-0">
                <span className="block">{lines[0] || ""}</span>
                {lines[1] && (
                  <span className={`block ${varietyIndentClass}`}>
                    {lines[1]}
                  </span>
                )}
              </h2>
              <p className="text-base sm:text-lg opacity-80 max-w-[42ch] md:flex-1 md:mt-1">
                {description}
              </p>
            </div>
          </motion.div>
        ) : headingVariant === "centered" ? (
          <motion.div
            className="mb-12 sm:mb-16 text-center"
            variants={headingReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2
              className="font-display italic font-bold text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <p className="text-base sm:text-lg opacity-80 max-w-lg mx-auto">
              {description}
            </p>
          </motion.div>
        ) : (
          <motion.div
            className="mb-12 sm:mb-16"
            variants={headingReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2
              className="font-display italic font-bold text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <p className="text-base sm:text-lg opacity-80 max-w-lg">
              {description}
            </p>
          </motion.div>
        )}

        {layout === "single" ? (
          <motion.div
            className="max-w-7xl md:-mt-20 mx-auto"
            variants={headingReveal}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {images.map((image, index) => {
              const desktopAspect = aspectClassMap[image.aspect ?? aspect];
              const mobileAspect = image.mobileAspect
                ? aspectClassMap[image.mobileAspect]
                : desktopAspect;
              return (
                <motion.div
                  key={index}
                  className={`${mobileAspect} sm:${desktopAspect} ${
                    image.className ?? ""
                  } overflow-hidden`}
                  initial={{ opacity: 0, y: 18, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <img
                    src={image.src}
                    alt={image.alt ?? "Gallery image"}
                    className={`w-full h-full object-contain`}
                    loading={index > 1 ? "lazy" : undefined}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        ) : (
          <motion.div
            className={`${gridCols} gap-4 sm:gap-6`}
            variants={gridContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {images.map((image, index) => {
              const a = aspectClassMap[image.aspect ?? aspect];
              return (
                <motion.div
                  key={index}
                  className={`${a} overflow-hidden`}
                  variants={card}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <img
                    src={image.src}
                    alt={image.alt ?? "Gallery image"}
                    className="w-full h-full object-cover"
                    loading={index > 1 ? "lazy" : undefined}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
