"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Nav() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0a0a0a]/80 border-b border-[#1f1f1f]"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-[#7c3aed]">
          ST
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="#projects" className="text-[#71717a] hover:text-[#f5f5f5] transition-colors text-sm">
            Projects
          </Link>
          <Link href="#about" className="text-[#71717a] hover:text-[#f5f5f5] transition-colors text-sm">
            About
          </Link>
          <Link href="#contact" className="text-[#71717a] hover:text-[#f5f5f5] transition-colors text-sm">
            Contact
          </Link>
          <a
            href="/cv.pdf"
            download
            className="px-4 py-2 bg-[#7c3aed] hover:bg-[#6d28d9] text-white text-sm rounded-lg transition-colors"
          >
            Download CV
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
