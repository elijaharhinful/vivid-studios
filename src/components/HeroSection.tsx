import React from "react";
import hero from "../assets/images/hero.png";
import heroMobile from "../assets/images/phone_v_fina.jpg";
import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

  const phone="233264525811";
  const message = "Hello! I'd like to book a Vivid Studios session.";
  const book_href = `https://wa.me/${phone}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen flex items-center overflow-hidden"
    >
      {/* Background images */}
      <div className="absolute inset-0 -top-40">
        {/* Desktop background */}
        <motion.img
          src={hero}
          alt="Elegant portrait background"
          className="w-full h-full object-cover hidden sm:block"
          initial={{ scale: 1.05 }}
          animate={{ scale: [1.05, 1.02, 1.05], x: [0, 6, 0], y: [0, -6, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Mobile background */}
        <motion.img
          src={heroMobile}
          alt="Mobile portrait background"
          className="w-full h-full object-cover block sm:hidden"
          initial={{ scale: 1.05 }}
          animate={{ scale: [1.05, 1.02, 1.05], x: [0, 6, 0], y: [0, -6, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Foreground content */}
      <motion.div
        className="relative z-10 w-full"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-85 sm:mt-0">
          <div className="max-w-2xl sm:max-w-none text-center sm:text-left">
            <motion.h1
              variants={fadeUp}
              className="font-display italic font-bold leading-[0.95] text-5xl sm:text-6xl lg:text-7xl mb-6 -ml-5 sm:ml-9"
            >
              Shoot from
              <br />
              <span className="ml-14 sm:ml-11">anywhere!</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-sm/6 sm:text-lg opacity-90 leading-relaxed max-w-sm mx-auto sm:mx-0 sm:ml-20"
            >
              Forget the hassle of traveling across town. No matter where you are, we bring the photoshoot to you. No commute, No stress; just effortless results!
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col gap-3 w-fit mx-auto sm:mx-0 sm:ml-20"
            >
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={book_href}
                className="inline-flex items-center justify-center border border-white px-7 py-3 text-sm sm:text-base font-medium hover:bg-white hover:text-black transition-colors"
              >
                Book a Session
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#results"
                className="inline-flex items-center justify-center border border-white px-7 py-3 text-sm sm:text-base font-medium hover:bg-white hover:text-black transition-colors"
              >
                See Results
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}