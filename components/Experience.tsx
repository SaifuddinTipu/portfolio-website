"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/resume";

export default function Experience() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#f5f5f5] mb-2">Experience</h2>
        </motion.div>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-[#1f1f1f] ml-4 md:ml-0 md:left-1/2" />
          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative mb-12 pl-10 md:pl-0 ${
                i % 2 === 0 ? "md:pr-[calc(50%+2rem)]" : "md:pl-[calc(50%+2rem)]"
              }`}
            >
              <div className="absolute left-2 md:left-1/2 top-1 w-4 h-4 rounded-full bg-[#7c3aed] border-2 border-[#0a0a0a] -translate-x-1/2" />
              <div className="bg-[#111111] border border-[#1f1f1f] rounded-xl p-6 hover:border-[#7c3aed] transition-colors">
                <p className="text-[#7c3aed] text-xs font-medium uppercase tracking-wider mb-1">
                  {job.period}
                </p>
                <h3 className="text-[#f5f5f5] font-bold text-lg">{job.title}</h3>
                <p className="text-[#71717a] text-sm mb-4">
                  {job.company} · {job.location}
                </p>
                <ul className="space-y-2">
                  {job.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-2 text-[#71717a] text-sm leading-relaxed">
                      <span className="text-[#7c3aed] mt-1 flex-shrink-0">▸</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
