"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, Loader2 } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-4 md:inset-8 lg:inset-12 z-50 flex flex-col rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 300,
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-900/95 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                >
                  <span className="text-white font-bold text-lg">
                    {project.title[0]}
                  </span>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-white">
                    {project.title}
                  </h2>
                  <p className="text-sm text-zinc-400">{project.description}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium rounded-lg bg-zinc-800 text-white hover:bg-zinc-700 transition-colors"
                >
                  <Github size={16} className="mr-2" />
                  View Code
                </a>
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-lg bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Demo iframe container */}
            <div className="flex-1 relative bg-zinc-950">
              {/* Loading state */}
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-zinc-950">
                  <div className="flex flex-col items-center gap-4">
                    <Loader2 size={32} className="text-violet-500 animate-spin" />
                    <p className="text-zinc-400 text-sm">Loading demo...</p>
                  </div>
                </div>
              )}

              {/* Skeleton loader */}
              {isLoading && (
                <div className="absolute inset-0 p-8">
                  <div className="h-full rounded-lg bg-zinc-900 animate-pulse" />
                </div>
              )}

              {/* Demo iframe */}
              <iframe
                src={project.demo}
                className="w-full h-full border-0"
                title={`${project.title} Demo`}
                onLoad={() => setIsLoading(false)}
              />
            </div>

            {/* Footer with project details */}
            <div className="px-6 py-4 border-t border-zinc-800 bg-zinc-900/95 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-md text-xs font-medium bg-zinc-800 text-zinc-400 border border-zinc-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-zinc-500 text-sm">
                  <ExternalLink size={14} />
                  Interactive Demo
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
