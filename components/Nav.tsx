"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Nav() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-[#7c3aed]">
          ST
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="#projects" className="text-gray-500 hover:text-[#7c3aed] transition-colors text-sm font-medium">
            Projects
          </Link>
          <Link href="#about" className="text-gray-500 hover:text-[#7c3aed] transition-colors text-sm font-medium">
            About
          </Link>
          <Link href="#contact" className="text-gray-500 hover:text-[#7c3aed] transition-colors text-sm font-medium">
            Contact
          </Link>
          <a
            href="/cv.pdf"
            download
            className="px-4 py-2 bg-[#7c3aed] hover:bg-[#6d28d9] text-white text-sm rounded-lg transition-colors font-medium"
          >
            Download CV
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
