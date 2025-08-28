import React from "react";
import hero from "../assets/images/hero.png";

export default function HeroSection() {
  return (
    <section id="home" className="relative isolate min-h-screen flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 -top-40">
        <img
          src={hero}
          alt="Elegant portrait background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="font-display italic font-bold leading-[0.95] text-5xl sm:text-6xl lg:text-7xl mb-6 ml-9">
              Shoot from
              <br />
              <span className="ml-11">anywhere!</span>
            </h1>
            <p className="text-base sm:text-lg opacity-90 leading-relaxed max-w-sm ml-20">
              Forget the hassle of traveling across town or booking expensive studios. Whether
              you're at home, outdoors, or on vacation, we bring the professional photoshoot to
              you—no commute, no stress; just effortless results.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-col gap-3 w-fit ml-20">
              <a
                href="#book"
                className="inline-flex items-center justify-center border border-white px-7 py-3 text-sm sm:text-base font-medium hover:bg-white hover:text-black transition-colors"
              >
                Book a Session
              </a>
              <a
                href="#results"
                className="inline-flex items-center justify-center border border-white px-7 py-3 text-sm sm:text-base font-medium hover:bg-white hover:text-black transition-colors"
              >
                See Results
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
