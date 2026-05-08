"use client";

import { motion } from "framer-motion";
import { personal } from "@/data/resume";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6 bg-white">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="max-w-4xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 text-[#7c3aed] text-sm font-semibold tracking-widest uppercase mb-6 bg-violet-50 border border-violet-200 px-4 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#7c3aed] animate-pulse" />
            {personal.location}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4 leading-tight tracking-tight">
            {personal.name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#7c3aed] font-semibold mb-6">
            {personal.title}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            {personal.tagline}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#projects"
              className="px-6 py-3 bg-[#7c3aed] hover:bg-[#6d28d9] text-white rounded-lg transition-colors font-medium shadow-lg shadow-violet-200"
            >
              View Projects
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-200 hover:border-[#7c3aed] hover:text-[#7c3aed] text-gray-700 rounded-lg transition-colors font-medium bg-white"
            >
              GitHub
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-gray-200 hover:border-[#7c3aed] hover:text-[#7c3aed] text-gray-700 rounded-lg transition-colors font-medium bg-white"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
