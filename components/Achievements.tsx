"use client";

import { motion } from "framer-motion";
import { strengths } from "@/data/resume";

export default function Achievements() {
  return (
    <section className="py-20 px-6 bg-gray-50 border-y border-gray-100">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-2">What I Bring</h2>
          <p className="text-gray-500">The things I care about and do well</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {strengths.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#7c3aed] hover:shadow-lg hover:shadow-violet-100 transition-all flex flex-col gap-3"
            >
              <span className="text-3xl">{item.icon}</span>
              <div>
                <p className="text-gray-900 font-bold text-base mb-1">{item.title}</p>
                <p className="text-[#7c3aed] text-xs font-medium">{item.summary}</p>
              </div>
              <ul className="space-y-1 mt-1">
                {item.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-gray-500 text-sm">
                    <span className="text-[#7c3aed] mt-0.5 flex-shrink-0">▸</span>
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
