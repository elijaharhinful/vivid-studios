import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import WhatsAppFloatingButton from "../components/FloatingButton";

export default function Contact() {
  const [status, setStatus] = useState<null | "success" | "error">(null);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTimeout(() => setStatus("success"), 600);
  }

  return (
    <div className="min-h-screen bg-black text-neutral-200">
      <Navigation />

      {/* Hero */}
      <section className="relative overflow-hidden pt-7 pb-14 sm:pt-22 sm:pb-20">
        <div className="container mx-auto px-4 max-w-6xl relative">
          <h1 className="text-2xl sm:text-5xl font-display italic font-bold tracking-tight text-white">
            Let’s Create Something Vivid.
          </h1>
          <p className="mt-4 max-w-3xl text-base sm:text-lg text-neutral-300">
            Have questions, need guidance, or ready to book your session? We’d
            love to hear from you.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="container mx-auto px-4 max-w-6xl grid lg:grid-cols-3 gap-10">
          {/* Left: Direct contact + social + newsletter */}
          <aside className="lg:col-span-1 space-y-8">
            {/* Card: Direct Contact */}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-white">
                Direct Contact
              </h2>
              <div className="mt-4 space-y-3 text-sm">
                <div>
                  <p className="text-neutral-400">WhatsApp</p>
                  <a
                    href="https://wa.me/233000000000"
                    target="_blank"
                    rel="noreferrer"
                    className="text-white underline decoration-neutral-700 underline-offset-4 hover:decoration-white"
                  >
                    +233 264 525 811
                  </a>
                </div>
                <div>
                  <p className="text-neutral-400">Email</p>
                  <a
                    href="mailto:info@vividstudios.com"
                    className="text-white underline decoration-neutral-700 underline-offset-4 hover:decoration-white"
                  >
                    info@vividstudios.com
                  </a>
                </div>
              </div>
            </div>

            {/* Card: Stay Connected */}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-white">
                Stay Connected
              </h2>
              <div className="mt-4 flex items-center gap-4">
                {/* TikTok */}
                <a
                  href="https://vm.tiktok.com/ZMHtDF4DmBBWB-m8YbU/"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-white/40"
                  aria-label="TikTok"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-white"
                    aria-hidden
                  >
                    <path d="M16.5 3a5.5 5.5 0 0 0 3.5 1.4V8a8.4 8.4 0 0 1-3.5-.8V14a6 6 0 1 1-6-6c.2 0 .4 0 .6.1V11a3.5 3.5 0 1 0 2.9 3.4V3h2z" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/vivid-studios-global/about/?viewAsMember=true"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-white/40"
                  aria-label="LinkedIn"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-white"
                    aria-hidden
                  >
                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8.98h5V24H0V8.98zM8.5 8.98H13v2.05h.06c.63-1.2 2.17-2.47 4.47-2.47 4.78 0 5.66 3.15 5.66 7.25V24h-5v-6.45c0-1.54-.03-3.52-2.14-3.52-2.14 0-2.47 1.67-2.47 3.41V24h-5V8.98z" />
                  </svg>
                </a>
              </div>

              {/* Newsletter */}
              <form
                className="mt-6 flex gap-3"
                onSubmit={(e) => e.preventDefault()}
              >
                <label htmlFor="newsletter" className="sr-only">
                  Email for newsletter
                </label>
                <input
                  id="newsletter"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="flex-1 bg-neutral-800 text-white placeholder-neutral-500 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-white/30 px-4 py-3"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-3 bg-white text-black font-medium hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-white/40"
                >
                  Join
                </button>
              </form>
              <p className="mt-2 text-xs text-neutral-400">
                Be the first to see portfolio drops, offers, and
                behind‑the‑scenes stories.
              </p>
            </div>
          </aside>

          {/* Right: Form */}
          <div className="lg:col-span-2">
            <div className="p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-white">Contact Form</h2>
              <p className="mt-2 text-sm text-neutral-400">
                Fill this out and we’ll get back to you shortly.
              </p>

              <form
                onSubmit={onSubmit}
                className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5"
              >
                {/* Full Name */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="fullName"
                    className="block text-sm text-neutral-300 mb-2"
                  >
                    Full Name <span className="text-pink-400">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    placeholder="Your full name"
                    className="w-full bg-neutral-800 text-white placeholder-neutral-500 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-white/30 px-4 py-3"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-neutral-300 mb-2"
                  >
                    Email Address <span className="text-pink-400">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    required
                    placeholder="you@example.com"
                    className="w-full bg-neutral-800 text-white placeholder-neutral-500 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-white/30 px-4 py-3"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm text-neutral-300 mb-2"
                  >
                    Phone / WhatsApp
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    placeholder="e.g., +233 24 000 0000"
                    className="w-full bg-neutral-800 text-white placeholder-neutral-500 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-white/30 px-4 py-3"
                  />
                </div>

                {/* Subject */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="subject"
                    className="block text-sm text-neutral-300 mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-white/30 px-4 py-3"
                    defaultValue="General Inquiry"
                  >
                    <option>General Inquiry</option>
                    <option>Book a Session</option>
                    <option>Partnerships</option>
                    <option>Support</option>
                  </select>
                </div>

                {/* Message */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm text-neutral-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Tell us a bit about what you need…"
                    className="w-full bg-neutral-800 text-white placeholder-neutral-500 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-white/30 px-4 py-3"
                  />
                </div>

                {/* Submit */}
                <div className="sm:col-span-2 flex items-center gap-3">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center px-5 py-3 bg-white text-black font-medium hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-white/40"
                  >
                    Send Message
                  </button>
                  {status === "success" && (
                    <span className="text-sm text-emerald-400">
                      This feature is coming soon.
                    </span>
                  )}
                  {status === "error" && (
                    <span className="text-sm text-red-400">
                      Something went wrong. Please try again.
                    </span>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <WhatsAppFloatingButton
        phone="233264525811"
        message="Hello! I'd like to book a Vivid Studios session."
      />
      <Footer />
    </div>
  );
}
