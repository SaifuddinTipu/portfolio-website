"use client";

import { motion } from "framer-motion";
import { personal } from "@/data/resume";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[#7c3aed] text-sm font-medium tracking-widest uppercase mb-4">
            {personal.location}
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-[#f5f5f5] mb-4 leading-tight">
            {personal.name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#71717a] font-medium mb-6">
            {personal.title}
          </h2>
          <p className="text-[#71717a] text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            {personal.tagline}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#projects"
              className="px-6 py-3 bg-[#7c3aed] hover:bg-[#6d28d9] text-white rounded-lg transition-colors font-medium"
            >
              View Projects
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-[#1f1f1f] hover:border-[#7c3aed] text-[#f5f5f5] rounded-lg transition-colors font-medium"
            >
              GitHub
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-[#1f1f1f] hover:border-[#7c3aed] text-[#f5f5f5] rounded-lg transition-colors font-medium"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
