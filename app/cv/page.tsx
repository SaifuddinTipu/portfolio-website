"use client";

import { useEffect } from "react";
import { personal, experience, education, professionalDevelopment, techStack } from "@/data/resume";

export default function CVPage() {
  useEffect(() => {
    window.print();
  }, []);

  return (
    <>
      <style>{`
        @media print {
          @page { margin: 1.2cm 1.4cm; size: A4; }
          body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          .no-print { display: none !important; }
        }
        body { margin: 0; background: white; }
      `}</style>

      {/* Print hint bar — hidden when printing */}
      <div className="no-print bg-violet-600 text-white text-sm text-center py-2 px-4">
        Press <strong>Ctrl+P</strong> (or <strong>⌘+P</strong> on Mac) → Save as PDF &nbsp;·&nbsp;
        <a href="/portfolio-website/" className="underline">← Back to portfolio</a>
      </div>

      <div className="max-w-[780px] mx-auto px-10 py-8 font-sans text-gray-900 text-sm leading-relaxed">

        {/* Header */}
        <div className="border-b-2 border-violet-600 pb-4 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">{personal.name}</h1>
          <p className="text-violet-600 font-semibold text-base mt-1">{personal.title}</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-gray-500 text-xs">
            <span>{personal.location}</span>
            <span>·</span>
            <span>{personal.phone}</span>
            <span>·</span>
            <a href={`mailto:${personal.email}`} className="text-violet-600">{personal.email}</a>
            <span>·</span>
            <a href={personal.linkedin} className="text-violet-600">linkedin.com/in/saifuddintipu</a>
            <span>·</span>
            <a href={personal.github} className="text-violet-600">github.com/SaifuddinTipu</a>
          </div>
        </div>

        {/* Summary */}
        <section className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-widest text-violet-600 mb-2">Professional Summary</h2>
          <p className="text-gray-700 leading-relaxed">{personal.summary}</p>
        </section>

        {/* Experience */}
        <section className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-widest text-violet-600 mb-3">Experience</h2>
          <div className="space-y-5">
            {experience.map((job) => (
              <div key={job.company}>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-gray-900">{job.title}</p>
                    <p className="text-gray-600 text-xs">{job.company} &middot; {job.location}</p>
                  </div>
                  <span className="text-gray-400 text-xs whitespace-nowrap ml-4">{job.period}</span>
                </div>
                <ul className="mt-2 space-y-1">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2 text-gray-700">
                      <span className="text-violet-500 flex-shrink-0 mt-0.5">▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Open Source */}
        <section className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-widest text-violet-600 mb-3">Open Source — npm Packages</h2>
          <div className="space-y-2">
            {[
              { name: "nestjs-webhook-sender", desc: "Production-ready NestJS module for outbound webhook delivery — HMAC signing (Stripe/GitHub/Standard Webhooks), BullMQ retry queue, exponential backoff, dead-letter queue, and per-attempt delivery logs." },
              { name: "nestjs-socket-presence", desc: "Drop-in NestJS module for real-time user presence tracking via Socket.IO and Redis. Multi-socket per user, TTL-based ghost-user prevention, room presence, and bulk queries." },
              { name: "express-correlation-context", desc: "Express middleware for automatic correlation ID propagation via AsyncLocalStorage. Access request metadata (ID, IP, duration, custom fields) anywhere in the call stack without passing req around." },
            ].map((pkg) => (
              <div key={pkg.name} className="flex gap-2">
                <span className="text-violet-500 flex-shrink-0 mt-0.5">▸</span>
                <p className="text-gray-700"><span className="font-semibold text-gray-900">{pkg.name}</span> — {pkg.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-widest text-violet-600 mb-3">Technical Skills</h2>
          <div className="space-y-1.5">
            {techStack.map((cat) => (
              <div key={cat.category} className="flex gap-2">
                <span className="font-semibold text-gray-900 w-24 flex-shrink-0">{cat.category}:</span>
                <span className="text-gray-700">{cat.skills.join(", ")}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-widest text-violet-600 mb-3">Education</h2>
          <div className="flex justify-between items-start">
            <div>
              <p className="font-bold text-gray-900">{education.degree}</p>
              <p className="text-gray-600 text-xs">{education.university}</p>
            </div>
            <div className="text-right text-xs text-gray-400">
              <p>{education.year}</p>
              <p>CGPA {education.cgpa}</p>
            </div>
          </div>
        </section>

        {/* Professional Development */}
        <section>
          <h2 className="text-xs font-bold uppercase tracking-widest text-violet-600 mb-3">Certifications & Development</h2>
          <div className="grid grid-cols-2 gap-x-8 gap-y-1">
            {professionalDevelopment.map((item) => (
              <div key={item.title} className="flex justify-between">
                <span className="text-gray-700">{item.title} <span className="text-gray-400">· {item.org}</span></span>
                <span className="text-gray-400 text-xs ml-2">{item.year}</span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
