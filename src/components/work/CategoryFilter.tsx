"use client";

import { motion } from "framer-motion";
import { categories, type CategoryId } from "@/data/projects";

interface CategoryFilterProps {
  activeCategory: CategoryId;
  onCategoryChange: (category: CategoryId) => void;
}

export function CategoryFilter({
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <motion.div
      className="flex flex-wrap justify-center gap-2 mb-12"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
    >
      {categories.map((category) => (
        <motion.button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            activeCategory === category.id
              ? "text-white"
              : "text-zinc-400 hover:text-white bg-zinc-800/50 hover:bg-zinc-800"
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Active background with gradient */}
          {activeCategory === category.id && (
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600"
              layoutId="activeCategory"
              transition={{
                type: "spring",
                stiffness: 380,
                damping: 30,
              }}
            />
          )}

          {/* Label */}
          <span className="relative z-10 flex items-center gap-2">
            {category.label}
            <span
              className={`text-xs px-1.5 py-0.5 rounded-full ${
                activeCategory === category.id
                  ? "bg-white/20 text-white"
                  : "bg-zinc-700 text-zinc-400"
              }`}
            >
              {category.count}
            </span>
          </span>
        </motion.button>
      ))}
    </motion.div>
  );
}
