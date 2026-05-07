"use client";

import { motion } from "framer-motion";
import { education, professionalDevelopment } from "@/data/resume";

export default function Education() {
  return (
    <section className="py-20 px-6 bg-[#111111]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#f5f5f5] mb-2">Education & Development</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#0a0a0a] border border-[#1f1f1f] rounded-xl p-6 hover:border-[#7c3aed] transition-colors"
          >
            <p className="text-[#7c3aed] text-xs font-medium uppercase tracking-wider mb-1">
              {education.year} · CGPA {education.cgpa}
            </p>
            <h3 className="text-[#f5f5f5] font-bold text-lg mb-1">{education.degree}</h3>
            <p className="text-[#71717a] text-sm">{education.university}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-[#0a0a0a] border border-[#1f1f1f] rounded-xl p-6"
          >
            <h3 className="text-[#7c3aed] text-xs font-medium uppercase tracking-wider mb-4">
              Professional Development
            </h3>
            <ul className="space-y-3">
              {professionalDevelopment.map((item) => (
                <li key={item.title} className="flex justify-between items-start">
                  <div>
                    <p className="text-[#f5f5f5] text-sm font-medium">{item.title}</p>
                    <p className="text-[#71717a] text-xs">{item.org}</p>
                  </div>
                  <span className="text-[#71717a] text-xs">{item.year}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
