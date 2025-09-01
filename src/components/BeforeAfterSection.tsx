import React from "react";

type MobileMode = "composite" | "separate";

interface Props {
  id?: string;
  titleTop?: string;
  titleBottom?: string;
  description?: string;
  description1?: string;
  desktopImage: string;
  mobileMode?: MobileMode;
  mobileComposite?: string;
  beforeImage?: string;
  afterImage?: string;
  arrowImage?: string;
}

const BeforeAfterSection: React.FC<Props> = ({
  id,
  titleTop = "Before",
  titleBottom = "After",
  description = "",
  description1="",
  desktopImage,
  mobileMode = "composite",
  mobileComposite,
  beforeImage,
  afterImage,
  arrowImage,
}) => {
  return (
    <section id={id} className="px-6 sm:px-8 py-16 -mb-25 sm:-mb-0">
      {/* Desktop: one composite image */}
      <div className="hidden lg:block max-w-6xl mx-auto">
        <div className="aspect-[16/9] overflow-hidden rounded-xl">
          <img
            src={desktopImage}
            alt="Before & After composite"
            className="w-full h-full object-contain m-0"
          />
        </div>
      </div>

      {/* Mobile: either composite or separate pieces */}
      <div className="block lg:hidden max-w-md mx-auto text-center">
        <h2 className="font-display italic font-bold text-4xl mb-6">
          {titleTop}
        </h2>

        {mobileMode === "composite" && mobileComposite ? (
          <>
            <div className="aspect-[9/16] overflow-hidden rounded-xl">
              <img
                src={mobileComposite}
                alt="Before → After composite"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="relative left-0 -top-78 text-sm/6 opacity-80">
              {description}
            </p>
            <h2 className="font-display italic font-bold text-4xl mt-8">
              {titleBottom}
            </h2>
          </>
        ) : (
          <>
            {/* Separate before image */}
            {beforeImage && (
              <div className="aspect-[4/5] overflow-hidden rounded-xl mb-6">
                <img
                  src={beforeImage}
                  alt="Before image"
                  className="w-full h-full object-contain"
                />
              </div>
            )}

            {/* Arrow (image or SVG) */}
            <div className="my-4 -mr-6 flex justify-end items-end">
              {arrowImage ? (
                <img src={arrowImage} alt="" className="w-24" />
              ) : (
                <svg viewBox="0 0 100 100" className="w-24">
                  <path
                    d="M10 10 C 50 40 50 60 90 90"
                    fill="none"
                    stroke="white"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M72 82 L 90 90 L 82 72"
                    fill="none"
                    stroke="white"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </div>

            {/* Description */}
            <p className="relative -top-65 text-base opacity-80 -mb-20 max-w-3xs">{description}</p>
            
            <p className="relative -top-38 text-base opacity-80 -mb-20 max-w-3xs">{description1}</p>
            {/* After title + image */}
            {afterImage && (
              <div className="aspect-[4/5] overflow-hidden rounded-xl">
                <img
                  src={afterImage}
                  alt="After image"
                  className="w-full h-full object-contain"
                />
              </div>
            )}
            <h2 className="font-display italic font-bold text-4xl mb-6">
              {titleBottom}
            </h2>
          </>
        )}
      </div>
    </section>
  );
};

export default BeforeAfterSection;
