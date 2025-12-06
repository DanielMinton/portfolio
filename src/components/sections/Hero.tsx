"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/Button";
import { ArrowDown, Code2, Sparkles, Zap } from "lucide-react";

const ParticleField = dynamic(
  () => import("@/components/three/ParticleField"),
  {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-zinc-950" />,
  }
);

const traits = ["relentless", "intuitive", "innovative", "authentic"];

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950"
    >
      <ParticleField />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/50 via-transparent to-zinc-950/50 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Pre-title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <span className="text-zinc-500 text-sm tracking-widest uppercase">
            Full-Stack Engineer
          </span>
          <span className="w-8 h-px bg-violet-500" />
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-5xl sm:text-7xl md:text-8xl font-bold text-white mb-6 tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Daniel{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
            Minton
          </span>
        </motion.h1>

        {/* Rotating traits */}
        <motion.div
          className="h-12 mb-8 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="text-xl sm:text-2xl text-zinc-400">
            I am{" "}
            <span className="relative inline-block">
              {traits.map((trait, i) => (
                <motion.span
                  key={trait}
                  className="absolute left-0 text-violet-400 font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: [0, 1, 1, 0],
                    y: [20, 0, 0, -20],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 3,
                    repeat: Infinity,
                    repeatDelay: (traits.length - 1) * 3,
                    times: [0, 0.1, 0.9, 1],
                  }}
                >
                  {trait}.
                </motion.span>
              ))}
              <span className="invisible">{traits[0]}.</span>
            </span>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Full-stack engineer with 10+ years building production software.
          I make things that work beautifully
          and look like they do.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button href="#work" variant="primary" size="lg">
            <Code2 size={18} className="mr-2" />
            View My Work
          </Button>
          <Button href="#playground" variant="outline" size="lg">
            <Sparkles size={18} className="mr-2" />
            Explore Playground
          </Button>
        </motion.div>

        {/* Feature badges */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {[
            { icon: Code2, label: "Full-Stack" },
            { icon: Sparkles, label: "AI/ML" },
            { icon: Zap, label: "Performance" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800 text-zinc-400 text-sm"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1 + i * 0.1 }}
            >
              <item.icon size={14} className="text-violet-400" />
              {item.label}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-zinc-500"
        >
          <ArrowDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
