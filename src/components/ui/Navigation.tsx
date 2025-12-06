"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X, Github, Linkedin, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Playground", href: "#playground" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/TheModernOpossum",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/NeonPanda",
    label: "LinkedIn",
  },
  {
    icon: Facebook,
    href: "https://facebook.com/",
    label: "Facebook",
  },
  {
    icon: Instagram,
    href: "https://instagram.com/",
    label: "Instagram",
  },
  {
    icon: Youtube,
    href: "https://youtube.com/",
    label: "YouTube",
  },
  { icon: Mail, href: "mailto:daniel_minton@icloud.com", label: "Email" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navItems.map((item) => item.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 hidden md:block transition-all duration-300",
          scrolled
            ? "bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800/50"
            : "bg-transparent"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="#home" className="text-xl font-bold text-white">
            <span className="text-violet-400">D</span>M
          </Link>

          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors relative py-2",
                    activeSection === item.href.slice(1)
                      ? "text-violet-400"
                      : "text-zinc-400 hover:text-white"
                  )}
                >
                  {item.label}
                  {activeSection === item.href.slice(1) && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-violet-400"
                      layoutId="activeNav"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label={link.label}
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50">
        <div
          className={cn(
            "flex items-center justify-between px-4 py-4 transition-all duration-300",
            scrolled || isOpen
              ? "bg-zinc-950/95 backdrop-blur-lg"
              : "bg-transparent"
          )}
        >
          <Link href="#home" className="text-xl font-bold text-white">
            <span className="text-violet-400">D</span>M
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute top-full left-0 right-0 bg-zinc-950/95 backdrop-blur-lg border-b border-zinc-800"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="py-4">
                {navItems.map((item, i) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "block px-6 py-3 text-lg font-medium transition-colors",
                        activeSection === item.href.slice(1)
                          ? "text-violet-400 bg-violet-500/10"
                          : "text-zinc-300 hover:text-white hover:bg-zinc-800/50"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="flex items-center justify-center gap-6 py-4 border-t border-zinc-800">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-violet-400 transition-colors"
                    aria-label={link.label}
                  >
                    <link.icon size={24} />
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
