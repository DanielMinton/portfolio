"use client";

import { motion } from "framer-motion";
import { Heart, Code2 } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-zinc-900 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-zinc-500 text-sm flex items-center gap-2">
            <Code2 size={14} className="text-violet-400" />
            Built with Next.js, TypeScript, and too much coffee
          </p>

          <p className="text-zinc-500 text-sm flex items-center gap-1">
            &copy; {currentYear} Daniel Minton. Made with
            <Heart size={14} className="text-red-400 fill-red-400" />
            in San Francisco
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
