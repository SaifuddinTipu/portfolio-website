"use client";

import { motion } from "framer-motion";
import { techStack } from "@/data/resume";

export default function TechStack() {
  return (
    <section id="about" className="py-20 px-6 bg-[#111111]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#f5f5f5] mb-2">Tech Stack</h2>
          <p className="text-[#71717a]">Technologies I work with</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techStack.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#0a0a0a] border border-[#1f1f1f] rounded-xl p-6"
            >
              <h3 className="text-[#7c3aed] font-semibold mb-4 text-sm uppercase tracking-wider">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2 py-1 rounded-md bg-[#1f1f1f] text-[#71717a] border border-[#1f1f1f] hover:text-[#f5f5f5] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
