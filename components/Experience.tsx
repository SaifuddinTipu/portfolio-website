"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/resume";

export default function Experience() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Experience</h2>
        </motion.div>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2" />
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
              <div className="absolute left-4 md:left-1/2 top-1 w-3 h-3 rounded-full bg-[#7c3aed] border-2 border-white shadow-md -translate-x-1/2" />
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#7c3aed] hover:shadow-lg hover:shadow-violet-100 transition-all">
                <p className="text-[#7c3aed] text-xs font-semibold uppercase tracking-wider mb-1">
                  {job.period}
                </p>
                <h3 className="text-gray-900 font-bold text-lg">{job.title}</h3>
                <p className="text-gray-500 text-sm mb-4">
                  {job.company} · {job.location}
                </p>
                <ul className="space-y-2">
                  {job.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-2 text-gray-600 text-sm leading-relaxed">
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
