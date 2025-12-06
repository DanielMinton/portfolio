"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Sparkles } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpenDemo: (project: Project) => void;
}

export function ProjectCard({ project, index, onOpenDemo }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{
        duration: 0.4,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated gradient border */}
      <div
        className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-sm`}
      />
      <div
        className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-25 transition-opacity duration-300`}
      />

      {/* Card content */}
      <div
        className="relative h-full rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden cursor-pointer transition-all duration-300 group-hover:border-transparent"
        onClick={() => onOpenDemo(project)}
      >
        {/* Header with gradient */}
        <div className={`relative h-40 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
          {/* Dot grid pattern */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
              backgroundSize: "20px 20px",
            }}
          />

          {/* Animated glow on hover */}
          <motion.div
            className="absolute inset-0 bg-white/5"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Project initial */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.span
              className="text-6xl font-bold text-white/10"
              animate={{
                scale: isHovered ? 1.1 : 1,
                opacity: isHovered ? 0.15 : 0.1,
              }}
              transition={{ duration: 0.3 }}
            >
              {project.title[0]}
            </motion.span>
          </div>

          {/* Featured badge */}
          {project.featured && (
            <div className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 rounded-full bg-black/15 backdrop-blur-sm text-white/90 text-xs font-medium">
              <Sparkles size={12} />
              Featured
            </div>
          )}

          {/* GitHub icon - separate click target */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/15 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-black/25 transition-all duration-200 hover:scale-110"
          >
            <Github size={16} />
          </a>

          {/* Live demo indicator */}
          <motion.div
            className="absolute bottom-3 left-3 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/15 backdrop-blur-sm text-white/90 text-xs font-medium"
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            transition={{ duration: 0.2 }}
          >
            <ExternalLink size={12} />
            Click to view live demo
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-fuchsia-400 transition-all duration-300">
            {project.title}
          </h3>

          <p className="text-zinc-400 text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 rounded-md text-xs font-medium bg-zinc-800/40 text-zinc-400 border border-zinc-700/25 backdrop-blur-sm transition-all duration-200 group-hover:border-zinc-600/50 group-hover:text-zinc-300"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="px-2 py-1 rounded-md text-xs font-medium bg-zinc-800/25 text-zinc-500">
                +{project.tags.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Bottom hover gradient */}
        <motion.div
          className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient}`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ transformOrigin: "left" }}
        />
      </div>
    </motion.div>
  );
}
