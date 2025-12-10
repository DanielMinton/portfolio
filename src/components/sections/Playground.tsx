"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  Sparkles,
  Code2,
  Palette,
  Zap,
  Terminal,
  Bot,
  Loader2,
  Copy,
  Check,
  RefreshCw,
} from "lucide-react";

// Demo 1: Color Palette Generator
function ColorPaletteDemo() {
  const [colors, setColors] = useState([
    "#8b5cf6",
    "#ec4899",
    "#06b6d4",
    "#10b981",
    "#f59e0b",
  ]);
  const [copied, setCopied] = useState<string | null>(null);

  const generatePalette = () => {
    const newColors = Array.from(
      { length: 5 },
      () => `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`
    );
    setColors(newColors);
  };

  const copyColor = (color: string) => {
    navigator.clipboard.writeText(color);
    setCopied(color);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <Palette size={20} className="text-violet-400" />
          <h4 className="text-lg font-semibold text-white">Palette Generator</h4>
        </div>
        <p className="text-zinc-400 text-sm">
          Click to copy. Press generate for new colors.
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          {colors.map((color, i) => (
            <motion.button
              key={i}
              className="flex-1 h-20 rounded-lg relative group cursor-pointer"
              style={{ backgroundColor: color }}
              onClick={() => copyColor(color)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 rounded-lg">
                {copied === color ? (
                  <Check size={16} className="text-white" />
                ) : (
                  <Copy size={16} className="text-white" />
                )}
              </div>
            </motion.button>
          ))}
        </div>
        <Button
          onClick={generatePalette}
          variant="secondary"
          className="w-full"
        >
          <RefreshCw size={16} className="mr-2" />
          Generate New Palette
        </Button>
      </CardContent>
    </Card>
  );
}

// Demo 2: Code Snippet Formatter
function CodeFormatterDemo() {
  const [input, setInput] = useState("const x=1;const y=2;console.log(x+y)");
  const [formatted, setFormatted] = useState("");

  const formatCode = () => {
    // Simple formatter for demo
    const result = input
      .replace(/;/g, ";\n")
      .replace(/\{/g, " {\n  ")
      .replace(/\}/g, "\n}")
      .trim();
    setFormatted(result);
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <Code2 size={20} className="text-violet-400" />
          <h4 className="text-lg font-semibold text-white">Code Formatter</h4>
        </div>
        <p className="text-zinc-400 text-sm">Paste minified code to prettify.</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full h-20 bg-zinc-800 rounded-lg p-3 text-zinc-300 text-sm font-mono resize-none focus:outline-none focus:ring-2 focus:ring-violet-500"
          placeholder="Paste code here..."
        />
        <Button onClick={formatCode} variant="secondary" className="w-full">
          <Zap size={16} className="mr-2" />
          Format Code
        </Button>
        {formatted && (
          <pre className="w-full bg-zinc-800 rounded-lg p-3 text-zinc-300 text-sm font-mono overflow-x-auto">
            {formatted}
          </pre>
        )}
      </CardContent>
    </Card>
  );
}

// Demo 3: AI Prompt Builder (simulated)
function AIPromptDemo() {
  const [task, setTask] = useState("");
  const [style, setStyle] = useState("concise");
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const buildPrompt = () => {
    setLoading(true);
    setTimeout(() => {
      const templates: Record<string, string> = {
        concise: `You are a helpful assistant. ${task}. Be brief and direct.`,
        detailed: `You are an expert assistant. Please help with the following task:\n\n${task}\n\nProvide a comprehensive response with examples where relevant.`,
        creative: `You are a creative collaborator. ${task}. Think outside the box and offer unique perspectives.`,
      };
      setPrompt(templates[style] || templates.concise);
      setLoading(false);
    }, 800);
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <Bot size={20} className="text-violet-400" />
          <h4 className="text-lg font-semibold text-white">AI Prompt Builder</h4>
        </div>
        <p className="text-zinc-400 text-sm">Generate optimized prompts.</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="w-full bg-zinc-800 rounded-lg p-3 text-zinc-300 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
          placeholder="Describe your task..."
        />
        <div className="flex gap-2">
          {["concise", "detailed", "creative"].map((s) => (
            <button
              key={s}
              onClick={() => setStyle(s)}
              className={`flex-1 py-2 rounded-lg text-sm font-medium transition-colors ${
                style === s
                  ? "bg-violet-600 text-white"
                  : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
              }`}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>
        <Button
          onClick={buildPrompt}
          variant="secondary"
          className="w-full"
          disabled={!task || loading}
        >
          {loading ? (
            <Loader2 size={16} className="mr-2 animate-spin" />
          ) : (
            <Sparkles size={16} className="mr-2" />
          )}
          Build Prompt
        </Button>
        {prompt && (
          <div className="w-full bg-zinc-800 rounded-lg p-3 text-zinc-300 text-sm">
            {prompt}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// Demo 4: Terminal Animation
function TerminalDemo() {
  const [running, setRunning] = useState(false);
  const [lines, setLines] = useState<string[]>([]);

  const runCommand = () => {
    setRunning(true);
    setLines([]);

    const commands = [
      "$ npm run build",
      "Building Next.js application...",
      "✓ Compiled successfully",
      "✓ Linting and type checking...",
      "✓ Generating static pages (8/8)",
      "✓ Collecting build traces",
      "✓ Finalizing page optimization",
      "",
      "Route (app)                     Size",
      "├ /                            5.2 kB",
      "├ /about                       3.1 kB",
      "├ /work                        4.8 kB",
      "└ /playground                  6.4 kB",
      "",
      "✓ Build completed in 12.4s",
    ];

    let i = 0;
    const interval = setInterval(() => {
      if (i < commands.length) {
        setLines((prev) => [...prev, commands[i]]);
        i++;
      } else {
        clearInterval(interval);
        setRunning(false);
      }
    }, 200);
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <Terminal size={20} className="text-violet-400" />
          <h4 className="text-lg font-semibold text-white">Build Simulation</h4>
        </div>
        <p className="text-zinc-400 text-sm">Watch a Next.js build in action.</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-zinc-950 rounded-lg p-4 h-48 overflow-auto font-mono text-xs">
          {lines.map((line, i) => {
            const text = line ?? "";
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={
                  text.startsWith("✓")
                    ? "text-green-400"
                    : text.startsWith("$")
                      ? "text-violet-400"
                      : "text-zinc-400"
                }
              >
                {text || "\u00A0"}
              </motion.div>
            );
          })}
          {running && (
            <motion.span
              className="inline-block w-2 h-4 bg-violet-400"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            />
          )}
        </div>
        <Button
          onClick={runCommand}
          variant="secondary"
          className="w-full"
          disabled={running}
        >
          {running ? (
            <Loader2 size={16} className="mr-2 animate-spin" />
          ) : (
            <Terminal size={16} className="mr-2" />
          )}
          Run Build
        </Button>
      </CardContent>
    </Card>
  );
}

export function Playground() {
  return (
    <section id="playground" className="py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-violet-400">Playground</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Interactive demos showcasing UI components, micro-interactions,
            and creative coding experiments. Click around.
          </p>
        </motion.div>

        {/* Demo grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <ColorPaletteDemo />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <CodeFormatterDemo />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <AIPromptDemo />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <TerminalDemo />
          </motion.div>
        </div>

        {/* Additional note */}
        <motion.p
          className="text-center text-zinc-500 text-sm mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          These are client-side demos. For full API integrations and AI experiments,
          check out my GitHub repositories.
        </motion.p>
      </div>
    </section>
  );
}
