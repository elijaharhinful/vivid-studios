//src\pages\Faq.tsx
import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

import Accordion from "../components/Accordion";
import { FAQItem } from "../components/Accordion";

export function FaqPage() {
  const faqs: FAQItem[] = [
    {
      question: "What is Vivid Studios Global?",
      answer: `Vivid Studios is a virtual photography brand that transforms your ordinary photos into polished, lifelike, professional‑quality portraits using advanced AI technology.`,
    },
    {
      question: "Do I need to visit a physical studio?",
      answer: `No. All our sessions are virtual. Simply provide your reference photos and we’ll craft your portraits from anywhere in the world.`,
    },
    {
      question: "How does the process work?",
      answer: `It’s simple:
        1) Send us 20 clear, everyday photos of yourself.
        2) Tell us your preferred style (professional, luxury, lifestyle, editorial, etc.).
        3) We deliver a curated gallery of polished, high‑resolution images.`,
    },
    {
      question: "How many reference images do I need to submit?",
      answer: `We recommend 20 photos in total:
        • 10 face photos — different angles and natural expressions (smiling, neutral, etc.). Avoid obstructions such as glasses or masks.
        • 10 full‑body photos — ideally in fitted clothing (shirts, trousers/jeans, or other well‑shaped outfits). Loose or oversized clothing may distort proportions.
        These references help us ensure your portraits are accurate, natural, and flattering.`,
    },
    {
      question: "What kind of photos should I submit?",
      answer: `Natural, unfiltered selfies or snapshots are ideal. Use clear lighting and capture different angles (front, three‑quarter, side; smiling and neutral).`,
    },
    {
      question: "Do I need makeup, hair styling, or wardrobe?",
      answer: `Not at all. Our process enhances your appearance, wardrobe, and overall style. No makeup sessions, hairstyling, or clothing rentals required.`,
    },
    {
      question: "Will the photos look realistic?",
      answer: `Absolutely. Our technology produces images that are indistinguishable from high‑end studio photography. Many clients describe the results as “magazine‑worthy.”`,
    },
    {
      question: "Who are your services for?",
      answer: `Anyone who wants high‑quality portraits without the stress of studio sessions — business professionals, founders, coaches, creatives, influencers, and individuals seeking a striking personal image.`,
    },
    {
      question: "Are the results instant?",
      answer: `Not instant, but fast. Typical turnaround is 2–3 business days. Rush delivery options are available.`,
    },
    {
      question: "Can I request multiple styles?",
      answer: `Yes. Many clients request variations — e.g., a professional headshot, a lifestyle portrait, and a creative editorial look — all from the same set of references.`,
    },
    {
      question: "How many photos will I receive?",
      answer: `Our current package delivers a curated gallery of finished images (usually 3–5).`,
    },
    {
      question: "What file format do I receive?",
      answer: `High‑resolution JPEGs suitable for LinkedIn, social media, and websites.`,
    },
    {
      question: "How should I take my reference photos?",
      answer: `For the best results, keep proportions natural:
        • Hold the camera at eye or chest level — avoid extreme angles.
        • Stand naturally with balanced posture.
        • Use bright, even lighting; avoid harsh shadows.
        • Keep your face/body unobstructed and avoid tight crops or leaning too close to the camera.`,
    },
    {
      question: "Can I get versions for both social media and print?",
      answer: `Yes. You automatically receive web‑optimized versions for sharing. Print‑ready files (enhanced for high‑resolution printing, posters, or marketing materials) are available on request for an additional fee.`,
    },
    {
      question: "Can you create group or family photos?",
      answer: `At this stage, our tools are designed for one person per photo, so we don’t create group/family images yet. For businesses and teams, we create consistent individual portraits for each member to match your brand.`,
    },
    {
      question: "Is my data and privacy safe?",
      answer: `Yes. Your reference photos are used only to create your portraits. We never sell or share your data. On request, we’ll delete your images after delivery.`,
    },
    {
      question: "Do you use AI?",
      answer: `Yes. We use advanced AI tools to craft luxury‑level visuals without the cost, time, and logistics of traditional studio shoots.`,
    },
    {
      question: "Can I request revisions?",
      answer: `We focus on delivering ample variety upfront. Instead of heavy back‑and‑forth edits, we include extra finished images in your gallery so you can simply choose the ones you love.`,
    },
    {
      question: "How do I pay?",
      answer: `Secure online payment. We accept major credit cards, PayPal, and mobile money (availability may vary by region).`,
    },
    {
      question: "Can businesses book for their teams?",
      answer: `Absolutely. We create cohesive, on‑brand portrait sets for companies, startups, and teams — ensuring consistent quality across all members.`,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-0 lg:px-0 p-10 md:pt-18 md:pb-14">
          <h1 className="text-2xl font-display md:text-5xl font-bold italic tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 md:mt-5 text-base md:text-lg text-white/70 max-w-3xl">
            Let's clarify what confuses you.
          </p>
        </div>
      </header>

      {/* Accordion */}
      <main id="faq" className="mx-auto max-w-6xl px-4 sm:px-0 lg:px-0 pb-20">
        <Accordion items={faqs} defaultOpenIndex={0} />

        {/* Contact CTA */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border border-white/10 bg-white/5 p-5">
          <div>
            <h3 className="text-lg font-medium">Still have questions?</h3>
            <p className="text-white/70">
              We’re happy to help clarify the process.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center border border-white/20 px-4 py-2 text-sm font-medium hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            Contact us
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default FaqPage;
