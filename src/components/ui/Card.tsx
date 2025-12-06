"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export function Card({
  className,
  children,
  hover = true,
  glow = false,
  onMouseEnter,
  onMouseLeave,
}: CardProps) {
  return (
    <motion.div
      className={cn(
        "relative rounded-2xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 overflow-hidden",
        hover && "transition-all duration-300 hover:border-violet-500/30",
        glow && "shadow-lg shadow-violet-500/5",
        className
      )}
      whileHover={hover ? { y: -4 } : undefined}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {glow && (
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent pointer-events-none" />
      )}
      {children}
    </motion.div>
  );
}

interface CardSectionProps {
  children: React.ReactNode;
  className?: string;
}

export function CardHeader({ className, children }: CardSectionProps) {
  return <div className={cn("p-6 pb-0", className)}>{children}</div>;
}

export function CardContent({ className, children }: CardSectionProps) {
  return <div className={cn("p-6", className)}>{children}</div>;
}

export function CardFooter({ className, children }: CardSectionProps) {
  return (
    <div className={cn("p-6 pt-0 flex items-center gap-4", className)}>
      {children}
    </div>
  );
}
