import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import leftTopImg from "../assets/images/how/1.webp";
import rightTopImg from "../assets/images/how/3.webp";
import leftBottomImg from "../assets/images/how/2.webp";
import rightBottomImg from "../assets/images/how/4.webp";
import arrowImg from "../assets/images/arrow.png";

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-black text-gray-200">
      <Navigation />

      {/* Hero */}
      <header className="mx-auto max-w-6xl px-4 py-8">
        <h1 className="text-4xl md:text-6xl text-center md:text-left font-display italic font-bold tracking-tight text-white">
          How It Works
        </h1>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-4 md:py-4 space-y-10">
        {/* TOP: Step 1 */}
        <section aria-labelledby="step1" className="space-y-8">
          <div className="flex items-center justify-between gap-6">
            <h2
              id="step1"
              className="text-2xl md:text-3xl font-semibold text-white"
            >
              Step 1 – Send Us Your Photos
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300">
                Upload{" "}
                <span className="text-white font-semibold">
                  20 clear reference images
                </span>
                :
              </p>
              <ul className="list-disc pl-6">
                <li>
                  <span className="text-white font-medium">10 face shots</span>{" "}
                  <span className="text-gray-300">
                    (different angles &amp; expressions, no glasses or masks)
                  </span>
                </li>
                <li>
                  <span className="text-white font-medium">
                    10 full-body shots
                  </span>{" "}
                  <span className="text-gray-300">
                    (in fitted clothing — avoid oversized outfits)
                  </span>
                </li>
              </ul>
              <p className="mt-4 text-gray-300">
                <span className="text-white font-medium">Tip:</span> Take photos
                at eye or chest level to keep proportions natural.
              </p>
            </div>
          </div>

          {/* Two images (left & right) */}
          <div className="grid grid-cols-2 gap-6">
            <div className="overflow-hidden">
              <img
                src={leftTopImg}
                alt="Sample reference image (left)"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="overflow-hidden">
              <img
                src={rightTopImg}
                alt="Sample reference image (right)"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </section>

        {/* MIDDLE */}
        <section aria-label="Process bridge" className="py-0">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6">
            {/* Left text */}
            <div className="flex md:justify-end justify-center">
              <p className="text-lg md:text-xl text-gray-200">Take a nap.</p>
            </div>

            {/* Middle arrows (images) */}
            <div className="flex items-center justify-center gap-6">
              {/* Left arrow pointing right */}
              <img
                src={arrowImg}
                alt="Arrow pointing right"
                className="w-24 h-48 select-none"
                draggable={false}
              />
              {/* Right arrow pointing left (rotate the same image) */}
              <img
                src={arrowImg}
                alt="Arrow pointing left"
                className="w-24 h-48 scale-x-[-1] select-none"
                draggable={false}
              />
            </div>

            {/* Right text */}
            <div className="flex md:justify-start justify-center">
              <p className="text-lg md:text-xl text-gray-200">
                It’s that simple!
              </p>
            </div>
          </div>
        </section>

        {/* BOTTOM: Step 2 */}
        <section aria-labelledby="step2" className="space-y-8">
          <div className="flex items-center justify-center gap-6">
            <h2
              id="step2"
              className="text-2xl md:text-3xl font-semibold text-white"
            >
              Step 2 – We Do the Magic
            </h2>
          </div>

          {/* Two images (left & right) */}
          <div className="grid grid-cols-2 gap-6">
            <div className="overflow-hidden">
              <img
                src={leftBottomImg}
                alt="Production sample (left)"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="overflow-hidden">
              <img
                src={rightBottomImg}
                alt="Production sample (right)"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </section>

        {/* Closing Section */}
        <section aria-labelledby="closing" className="p-8 md:p-10 text-center">
          <h3
            id="closing"
            className="text-2xl md:text-3xl font-semibold text-white"
          >
            Trust the Process.
          </h3>
          <p className="mt-3 text-gray-300">
            Simple, seamless, and spectacular — that’s the Vivid way.
          </p>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-black font-semibold border border-white rounded-none hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Get Started Today
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
