"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import { Button } from "@/components/ui/Button";
import { Briefcase, MapPin, Calendar, Download } from "lucide-react";

export function Experience() {
  return (
    <section className="py-24 bg-zinc-900">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg mb-6">
            A decade of building production software and leading technical teams.
          </p>
          <Button href="/Daniel_Minton_Resume.pdf" variant="outline" size="md">
            <Download size={16} className="mr-2" />
            Download Resume
          </Button>
        </motion.div>

        {/* Timeline - simplified for better readability */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-zinc-800" />

          {experience.map((exp, i) => (
            <motion.div
              key={exp.id}
              className="relative mb-12 last:mb-0 pl-12 md:pl-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-4 md:left-8 w-4 h-4 rounded-full border-4 -translate-x-1/2 ${
                  exp.current
                    ? "bg-violet-500 border-violet-500/30"
                    : "bg-zinc-700 border-zinc-800"
                }`}
              />

              {/* Content card */}
              <div
                className={`p-6 rounded-xl bg-zinc-800/50 border border-zinc-700/50 ${
                  exp.current ? "border-violet-500/30" : ""
                }`}
              >
                {/* Header row */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  {exp.current && (
                    <span className="px-2 py-1 rounded-full bg-violet-500/20 text-violet-400 text-xs font-medium">
                      Current
                    </span>
                  )}
                  <span className="flex items-center gap-1 text-zinc-500 text-sm">
                    <Calendar size={14} />
                    {exp.period}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-2">
                  {exp.title}
                </h3>

                {/* Company & Location */}
                <div className="flex flex-wrap items-center gap-3 mb-4 text-sm">
                  <span className="flex items-center gap-1 text-violet-400">
                    <Briefcase size={14} />
                    {exp.company}
                  </span>
                  <span className="flex items-center gap-1 text-zinc-500">
                    <MapPin size={14} />
                    {exp.location}
                  </span>
                </div>

                {/* Description list */}
                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, j) => (
                    <li
                      key={j}
                      className="text-zinc-400 text-sm leading-relaxed flex items-start gap-2"
                    >
                      <span className="text-violet-500 mt-1.5 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                {exp.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded-md bg-zinc-700/50 text-zinc-400 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
