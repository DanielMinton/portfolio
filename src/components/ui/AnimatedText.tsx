"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
}

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.03,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export function AnimatedText({
  text,
  className,
  delay = 0,
  once = true,
}: AnimatedTextProps) {
  const words = text.split(" ");

  return (
    <motion.span
      className={cn("inline-block", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-50px" }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-[0.25em]">
          {word.split("").map((letter, letterIndex) => (
            <motion.span
              key={letterIndex}
              className="inline-block"
              custom={wordIndex * 5 + letterIndex + delay * 10}
              variants={letterVariants}
            >
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.span>
  );
}

interface TypewriterProps {
  words: string[];
  className?: string;
}

export function Typewriter({ words, className }: TypewriterProps) {
  return (
    <motion.span
      className={cn("inline-block", className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, display: "none" }}
          animate={{
            opacity: [0, 1, 1, 0],
            display: ["none", "inline-block", "inline-block", "none"],
          }}
          transition={{
            duration: 3,
            delay: i * 3,
            repeat: Infinity,
            repeatDelay: words.length * 3 - 3,
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
