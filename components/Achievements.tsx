"use client";

import { motion } from "framer-motion";
import { achievements } from "@/data/resume";

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
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Key Achievements</h2>
          <p className="text-gray-500">Measurable impact in production environments</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, i) => (
            <motion.div
              key={item.metric}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#7c3aed] hover:shadow-lg hover:shadow-violet-100 transition-all"
            >
              <p className="text-4xl font-bold text-[#7c3aed] mb-2">{item.metric}</p>
              <p className="text-gray-900 font-semibold mb-2">{item.label}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
