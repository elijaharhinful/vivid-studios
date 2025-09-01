import React from "react";
import { Instagram, Linkedin } from "lucide-react";
import vividLogo from "../assets/images/vivid_logo.png";
import { motion } from "framer-motion";

const TikTokIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 28,
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M14.5 3c.2 1.7 1.3 3.2 3 3.9.6.3 1.3.4 2 .4v2.6c-1.7 0-3.4-.6-5-1.7v6.2c0 3-2.4 5.5-5.5 5.5S3.5 17.4 3.5 14.3 5.9 8.8 9 8.8c.6 0 1.2.1 1.7.3v2.7c-.5-.3-1.1-.4-1.7-.4-1.6 0-2.9 1.3-2.9 2.9S7.4 17 9 17s2.9-1.3 2.9-2.9V3h2.6z" />
  </svg>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white border-t-[0.5px] border-white/40 mt-20 sm:mt-0">
      <div className="max-w-6xl mx-auto px-0 py-16 text-center sm:text-left">
        {/* TOP: 4 columns */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 items-center"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          {/* 1) Brand logo + line */}
          <div className="flex flex-col items-center">
            <img
              src={vividLogo}
              alt="VIVID Studios logo"
              className="h-28 md:h-40 w-auto"
            />
            <p className="mt-3 text-xs opacity-80">
              Photography Anywhere, Anytime
            </p>
          </div>

          {/* 2) Location / Contact */}
          <div>
            <ul className="text-sm md:text-base opacity-80 space-y-1">
              <li>Location: Global · Virtual Studio</li>
              <li>
                Email:{" "}
                <a
                  href="mailto:info@vividstudios.com"
                  className="underline hover:opacity-100"
                >
                  info@vividstudios.com
                </a>
              </li>
              <li>
                WhatsApp:{" "}
                <a
                  href="https://wa.me/233264525811"
                  className="underline hover:opacity-100"
                >
                  +233 (26) 452 5811
                </a>
              </li>
            </ul>
          </div>

          {/* 3) Socials */}
          <div>
            <div className="flex items-center gap-6 justify-center">
              <motion.a
                whileHover={{ scale: 1.06, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                aria-label="TikTok"
                className="opacity-80 hover:opacity-100"
              >
                <TikTokIcon size={30} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.06, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                aria-label="Instagram"
                className="opacity-80 hover:opacity-100"
              >
                <Instagram size={30} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.06, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                aria-label="LinkedIn"
                className="opacity-80 hover:opacity-100"
              >
                <Linkedin size={30} />
              </motion.a>
            </div>
          </div>

          {/* 4) Services */}
          <div>
            <h4 className="text-base md:text-lg font-medium mb-3">
              Our Services
            </h4>
            <ul className="text-sm md:text-base opacity-80 space-y-1">
              <li>Virtual Photoshoots</li>
              <li>Personal Branding</li>
              <li>Fine Art Photography</li>
              <li>Campaigns & Commercial</li>
            </ul>
          </div>
        </motion.div>

        {/* BOTTOM: 2 columns */}
        <motion.div
          className="mt-12 pt-8 border-t border-white/80 text-sm md:text-base opacity-80 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* Left: copyright */}
          <div>© 2025 Vivid Studios. All rights reserved.</div>

          {/* Right: bottom nav */}
          <nav className="flex flex-wrap items-center gap-x-8 gap-y-2 justify-center md:justify-end">
            <a href="#home" className="hover:text-white">
              Home
            </a>
            <a href="#how" className="hover:text-white">
              How It Works
            </a>
            <a href="#portfolio" className="hover:text-white">
              Portfolio
            </a>
            <a href="#faq" className="hover:text-white">
              FAQ
            </a>
            <a href="#contact" className="hover:text-white">
              Contact Us
            </a>
          </nav>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
