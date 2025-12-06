"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";
import { skills } from "@/data/experience";
import {
  Code2,
  Server,
  Cloud,
  Brain,
  Wrench,
  Rocket,
  Users,
  Zap,
  Heart,
} from "lucide-react";

const skillCategories = [
  { id: "frontend", label: "Frontend", icon: Code2 },
  { id: "backend", label: "Backend", icon: Server },
  { id: "infrastructure", label: "Infrastructure", icon: Cloud },
  { id: "ai", label: "AI / ML", icon: Brain },
  { id: "tools", label: "Tools", icon: Wrench },
] as const;

const highlights = [
  {
    icon: Rocket,
    title: "Shipped Daily",
    description: "9 years of production deployments at Neon Panda",
  },
  {
    icon: Users,
    title: "50+ Clients",
    description: "Built systems that real businesses depend on",
  },
  {
    icon: Zap,
    title: "Zero Incidents",
    description: "$12M+ in transactions with zero data integrity issues",
  },
  {
    icon: Heart,
    title: "Startup DNA",
    description: "Founded, built, and scaled a profitable tech company",
  },
];

function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm text-zinc-300">{name}</span>
        <span className="text-sm text-zinc-500">{level}%</span>
      </div>
      <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-violet-400">Me</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Engineer, founder, builder. I care about shipping quality software
            that solves real problems.
          </p>
        </motion.div>

        {/* Bio section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Left - Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">The Story</h3>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                I spent 9 years running Neon Panda, a technology company I
                founded from scratch. We served 50+ B2B clients in hospitality
                and small business, building everything from client portals to
                payment systems that processed $12M+ annually.
              </p>
              <p>
                That experience taught me what actually matters: software that
                works reliably, code that can be maintained, and features that
                solve real problems for real people. Zero financial discrepancies.
                99.9% uptime. Shipped daily.
              </p>
              <p>
                Now I&apos;m building AI-augmented tools that combine LLM orchestration
                with solid engineering fundamentals. Not chatbots—real agent workflows
                that parse documents, validate data, and make decisions with human oversight.
                The kind of systems that need both AI intuition and production reliability.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <item.icon
                    size={20}
                    className="text-violet-400 mb-2"
                  />
                  <h4 className="text-white font-medium text-sm">
                    {item.title}
                  </h4>
                  <p className="text-zinc-500 text-xs mt-1">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Skills</h3>

            {skillCategories.map((category) => (
              <div key={category.id} className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <category.icon size={16} className="text-violet-400" />
                  <span className="text-zinc-300 font-medium text-sm uppercase tracking-wider">
                    {category.label}
                  </span>
                </div>
                {skills
                  .filter((skill) => skill.category === category.id)
                  .map((skill) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                    />
                  ))}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Philosophy cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card glow>
            <CardContent className="pt-6">
              <Code2 className="text-violet-400 mb-4" size={32} />
              <h4 className="text-lg font-semibold text-white mb-2">
                Ship Over Perfect
              </h4>
              <p className="text-zinc-400 text-sm">
                Perfect is the enemy of done. I iterate fast, gather feedback,
                and improve continuously. Working software beats beautiful
                mockups.
              </p>
            </CardContent>
          </Card>

          <Card glow>
            <CardContent className="pt-6">
              <Users className="text-violet-400 mb-4" size={32} />
              <h4 className="text-lg font-semibold text-white mb-2">
                User-First
              </h4>
              <p className="text-zinc-400 text-sm">
                Every technical decision traces back to user impact. Technology
                is a means to an end - solving real problems for real people.
              </p>
            </CardContent>
          </Card>

          <Card glow>
            <CardContent className="pt-6">
              <Heart className="text-violet-400 mb-4" size={32} />
              <h4 className="text-lg font-semibold text-white mb-2">
                Details Matter
              </h4>
              <p className="text-zinc-400 text-sm">
                The difference between good and great is in the details.
                Micro-interactions, edge cases, error states - I sweat the small
                stuff.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
