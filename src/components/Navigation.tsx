import React, { useState } from "react";
import logo from "../assets/images/vivid_logo.png";
import { motion } from "framer-motion";

const linksLeft = [
  { label: "How It Works", href: "#how" },
  { label: "Portfolio", href: "#portfolio" },
];

const linksRight = [
  { label: "FAQ", href: "#faq" },
  { label: "Contact us", href: "#contact" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="w-full h-24 bg-black sticky top-0 z-50 pt-3"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 h-16 flex items-center sm:grid sm:grid-cols-[1fr_auto_1fr]">
        {/* Mobile: left space / hamburger */}
        <div className="flex items-center sm:hidden">
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center h-10 w-10 rounded-md text-white/90 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
          >
            {/* Simple hamburger / close icon */}
            <span className="sr-only">Toggle navigation</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`h-6 w-6 transition-transform ${
                open ? "rotate-90" : "rotate-0"
              }`}
            >
              {open ? (
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M3.75 6.75A.75.75 0 0 1 4.5 6h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm0 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Zm.75 4.5a.75.75 0 0 0 0 1.5h15a.75.75 0 0 0 0-1.5h-15Z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Left links (desktop) */}
        <div className="hidden sm:flex items-center gap-24 text-white/90 text-md tracking-wide">
          {linksLeft.map((link) => (
            <motion.a whileHover={{ y: -1, opacity: 1 }} whileTap={{ scale: 0.98 }}
              key={link.label}
              href={link.href}
              className="hover:text-white hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded"
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Center logo */}
        <div className="justify-self-center mx-auto">
          <motion.a whileHover={{ y: -1, opacity: 1 }} whileTap={{ scale: 0.98 }} href="#home" aria-label="VIVID Home" className="inline-block">
            <img
              src={logo}
              alt="VIVID Studios logo"
              className="block h-18 w-auto sm:h-18"
            />
          </motion.a>
        </div>

        {/* Right links (desktop) */}
        <div className="hidden sm:flex items-center justify-end gap-24 text-white/90 text-md tracking-wide">
          {linksRight.map((link) => (
            <motion.a whileHover={{ y: -1, opacity: 1 }} whileTap={{ scale: 0.98 }} 
              key={link.label}
              href={link.href}
              className="hover:text-white hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded"
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        {/* Mobile: right spacer to balance the grid when hamburger is shown */}
        <div className="sm:hidden w-10" aria-hidden="true" />
      </div>

      {/* Mobile menu panel */}
      <div
        className={`sm:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="px-4 pb-4 pt-0 border-t border-white/10">
          <div className="flex flex-col gap-2 py-3">
            {[...linksLeft, ...linksRight].map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded px-3 py-2 text-white/90 hover:text-white hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
