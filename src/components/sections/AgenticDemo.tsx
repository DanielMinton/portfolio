"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
  Bot,
  Brain,
  Search,
  Database,
  FileText,
  CheckCircle,
  ArrowRight,
  Loader2,
  Sparkles,
  Code2,
  RefreshCw,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface AgentStep {
  id: string;
  type: "thinking" | "tool_call" | "tool_result" | "response";
  content: string;
  tool?: string;
  status: "pending" | "running" | "complete";
  detail?: string;
}

interface Message {
  role: "user" | "assistant";
  content: string;
  steps?: AgentStep[];
}

const DEMO_SCENARIOS = [
  {
    id: "research",
    label: "Research Task",
    query: "What are the top 3 JavaScript frameworks for building dashboards, and which has the best performance?",
    steps: [
      {
        id: "t1",
        type: "thinking" as const,
        content: "Breaking down the user's request into sub-tasks",
        status: "complete" as const,
        detail: "Need to: 1) Identify popular JS dashboard frameworks 2) Compare performance metrics 3) Synthesize findings",
      },
      {
        id: "t2",
        type: "tool_call" as const,
        tool: "web_search",
        content: "Searching for popular JavaScript dashboard frameworks 2024",
        status: "complete" as const,
      },
      {
        id: "t3",
        type: "tool_result" as const,
        content: "Found: React + Recharts, Vue + ECharts, Angular + ngx-charts, Svelte + LayerCake",
        status: "complete" as const,
      },
      {
        id: "t4",
        type: "tool_call" as const,
        tool: "web_search",
        content: "Searching for React Recharts vs ECharts performance benchmark",
        status: "complete" as const,
      },
      {
        id: "t5",
        type: "tool_result" as const,
        content: "ECharts handles 100k+ data points better; Recharts simpler for <10k points",
        status: "complete" as const,
      },
      {
        id: "t6",
        type: "thinking" as const,
        content: "Synthesizing findings into recommendation",
        status: "complete" as const,
        detail: "ECharts wins on raw performance, but React + Recharts has better DX for most use cases",
      },
      {
        id: "t7",
        type: "response" as const,
        content: "Based on my research:\n\n1. **React + Recharts** - Best DX, great for dashboards <10k data points\n2. **Vue + ECharts** - Best performance for large datasets (100k+ points)\n3. **Svelte + LayerCake** - Smallest bundle, fastest initial load\n\n**Recommendation:** For most dashboards, React + Recharts. For data-heavy analytics, ECharts.",
        status: "complete" as const,
      },
    ],
    response: "Based on my research:\n\n1. **React + Recharts** - Best DX, great for dashboards <10k data points\n2. **Vue + ECharts** - Best performance for large datasets (100k+ points)\n3. **Svelte + LayerCake** - Smallest bundle, fastest initial load\n\n**Recommendation:** For most dashboards, React + Recharts. For data-heavy analytics, ECharts.",
  },
  {
    id: "code",
    label: "Code Generation",
    query: "Create a TypeScript function that validates email addresses with detailed error messages",
    steps: [
      {
        id: "c1",
        type: "thinking" as const,
        content: "Analyzing requirements for email validation",
        status: "complete" as const,
        detail: "Need: RFC 5322 compliant regex, specific error messages for each failure mode, TypeScript types",
      },
      {
        id: "c2",
        type: "tool_call" as const,
        tool: "code_interpreter",
        content: "Generating email validation function with error types",
        status: "complete" as const,
      },
      {
        id: "c3",
        type: "tool_result" as const,
        content: "Function generated: validateEmail(email: string): ValidationResult",
        status: "complete" as const,
      },
      {
        id: "c4",
        type: "tool_call" as const,
        tool: "code_interpreter",
        content: "Running test cases: valid emails, missing @, invalid domain, etc.",
        status: "complete" as const,
      },
      {
        id: "c5",
        type: "tool_result" as const,
        content: "All 8 test cases passed ✓",
        status: "complete" as const,
      },
      {
        id: "c6",
        type: "response" as const,
        content: "```typescript\ntype ValidationError = \n  | 'EMPTY_INPUT'\n  | 'MISSING_AT_SYMBOL'\n  | 'INVALID_LOCAL_PART'\n  | 'INVALID_DOMAIN'\n  | 'DOMAIN_TOO_SHORT';\n\ninterface ValidationResult {\n  valid: boolean;\n  error?: ValidationError;\n  message?: string;\n}\n\nexport function validateEmail(email: string): ValidationResult {\n  if (!email?.trim()) {\n    return { valid: false, error: 'EMPTY_INPUT', message: 'Email is required' };\n  }\n  \n  if (!email.includes('@')) {\n    return { valid: false, error: 'MISSING_AT_SYMBOL', message: 'Email must contain @' };\n  }\n  \n  const [local, domain] = email.split('@');\n  \n  if (!local || !/^[a-zA-Z0-9._%+-]+$/.test(local)) {\n    return { valid: false, error: 'INVALID_LOCAL_PART', message: 'Invalid characters before @' };\n  }\n  \n  if (!domain || !domain.includes('.')) {\n    return { valid: false, error: 'INVALID_DOMAIN', message: 'Domain must contain a period' };\n  }\n  \n  if (domain.split('.').pop()!.length < 2) {\n    return { valid: false, error: 'DOMAIN_TOO_SHORT', message: 'Domain extension too short' };\n  }\n  \n  return { valid: true };\n}\n```",
        status: "complete" as const,
      },
    ],
    response: "Here's a TypeScript email validator with detailed errors. All 8 test cases pass.",
  },
  {
    id: "data",
    label: "Data Analysis",
    query: "Analyze this sales data: Q1: $45k, Q2: $52k, Q3: $48k, Q4: $67k. What's the trend and forecast for next Q1?",
    steps: [
      {
        id: "d1",
        type: "thinking" as const,
        content: "Parsing quarterly sales data for trend analysis",
        status: "complete" as const,
        detail: "Data points: [45000, 52000, 48000, 67000]. Will calculate growth rate and apply forecasting model.",
      },
      {
        id: "d2",
        type: "tool_call" as const,
        tool: "calculator",
        content: "Calculating quarter-over-quarter growth rates",
        status: "complete" as const,
      },
      {
        id: "d3",
        type: "tool_result" as const,
        content: "Q1→Q2: +15.6%, Q2→Q3: -7.7%, Q3→Q4: +39.6%. Avg growth: +15.8%",
        status: "complete" as const,
      },
      {
        id: "d4",
        type: "tool_call" as const,
        tool: "calculator",
        content: "Applying linear regression for Q1 forecast",
        status: "complete" as const,
      },
      {
        id: "d5",
        type: "tool_result" as const,
        content: "Trend line: y = 6.5x + 40.5. R² = 0.72. Forecast Q1: $73k (±$8k)",
        status: "complete" as const,
      },
      {
        id: "d6",
        type: "thinking" as const,
        content: "Noting Q4 spike may be seasonal (holiday sales)",
        status: "complete" as const,
        detail: "Q4 growth of 39.6% is an outlier. If seasonal, next Q1 may see typical post-holiday dip.",
      },
      {
        id: "d7",
        type: "response" as const,
        content: "**Trend Analysis:**\n- Overall upward trend with 15.8% average quarterly growth\n- Q4 spike (+39.6%) likely seasonal\n- R² of 0.72 indicates moderate predictability\n\n**Forecast for Next Q1:**\n- Linear model: **$73k** (range: $65k-$81k)\n- If seasonal correction: **$58k-$65k**\n\n**Recommendation:** Budget conservatively at $65k, with stretch target of $73k.",
        status: "complete" as const,
      },
    ],
    response: "Analyzed. Overall upward trend with 15.8% avg growth. Q1 forecast: $73k (or $58-65k if Q4 was seasonal).",
  },
];

const toolIcons: Record<string, typeof Search> = {
  web_search: Search,
  code_interpreter: Code2,
  calculator: Database,
  file_reader: FileText,
};

function StepNode({ step, isLast }: { step: AgentStep; isLast: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = step.tool ? toolIcons[step.tool] || Bot :
    step.type === "thinking" ? Brain :
    step.type === "response" ? Sparkles : Bot;

  const bgColor =
    step.type === "thinking" ? "bg-amber-500/10 border-amber-500/30" :
    step.type === "tool_call" ? "bg-blue-500/10 border-blue-500/30" :
    step.type === "tool_result" ? "bg-green-500/10 border-green-500/30" :
    "bg-violet-500/10 border-violet-500/30";

  const iconColor =
    step.type === "thinking" ? "text-amber-400" :
    step.type === "tool_call" ? "text-blue-400" :
    step.type === "tool_result" ? "text-green-400" :
    "text-violet-400";

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="relative"
    >
      {/* Connection line */}
      {!isLast && (
        <div className="absolute left-5 top-10 w-0.5 h-full bg-zinc-700" />
      )}

      <div className={`flex items-start gap-3 p-3 rounded-lg border ${bgColor}`}>
        <div className={`mt-0.5 ${iconColor}`}>
          {step.status === "running" ? (
            <Loader2 size={18} className="animate-spin" />
          ) : step.status === "complete" ? (
            <Icon size={18} />
          ) : (
            <div className="w-4.5 h-4.5 rounded-full border-2 border-zinc-600" />
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-zinc-500 uppercase">
              {step.type === "tool_call" ? step.tool : step.type}
            </span>
            {step.status === "complete" && (
              <CheckCircle size={12} className="text-green-400" />
            )}
          </div>
          <p className="text-sm text-zinc-300 mt-1">{step.content}</p>

          {step.detail && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-1 text-xs text-zinc-500 mt-2 hover:text-zinc-300"
            >
              {expanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
              {expanded ? "Hide" : "Show"} reasoning
            </button>
          )}

          <AnimatePresence>
            {expanded && step.detail && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <p className="text-xs text-zinc-500 mt-2 p-2 bg-zinc-800/50 rounded">
                  {step.detail}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

export function AgenticDemo() {
  const [selectedScenario, setSelectedScenario] = useState(DEMO_SCENARIOS[0]);
  const [isRunning, setIsRunning] = useState(false);
  const [visibleSteps, setVisibleSteps] = useState<AgentStep[]>([]);
  const [showResponse, setShowResponse] = useState(false);
  const stepsRef = useRef<HTMLDivElement>(null);

  const runDemo = () => {
    setIsRunning(true);
    setVisibleSteps([]);
    setShowResponse(false);

    let stepIndex = 0;
    const steps = selectedScenario.steps;

    const showNextStep = () => {
      if (stepIndex < steps.length) {
        setVisibleSteps((prev) => [
          ...prev,
          { ...steps[stepIndex], status: "running" },
        ]);

        setTimeout(() => {
          setVisibleSteps((prev) =>
            prev.map((s, i) =>
              i === prev.length - 1 ? { ...s, status: "complete" } : s
            )
          );
          stepIndex++;

          if (stepIndex < steps.length) {
            setTimeout(showNextStep, 600);
          } else {
            setShowResponse(true);
            setIsRunning(false);
          }
        }, 800 + Math.random() * 400);
      }
    };

    setTimeout(showNextStep, 300);
  };

  useEffect(() => {
    if (stepsRef.current) {
      stepsRef.current.scrollTop = stepsRef.current.scrollHeight;
    }
  }, [visibleSteps]);

  return (
    <section className="py-24 bg-zinc-900">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 text-sm mb-4">
            <Bot size={14} />
            Interactive Demo
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Agentic AI <span className="text-violet-400">Visualizer</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Watch how AI agents break down complex tasks into steps, use tools,
            and reason through problems. This simulates the orchestration layer
            I build for production LLM applications.
          </p>
        </motion.div>

        <Card className="overflow-hidden">
          <CardHeader className="border-b border-zinc-800 pb-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex gap-2">
                {DEMO_SCENARIOS.map((scenario) => (
                  <button
                    key={scenario.id}
                    onClick={() => {
                      setSelectedScenario(scenario);
                      setVisibleSteps([]);
                      setShowResponse(false);
                    }}
                    disabled={isRunning}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                      selectedScenario.id === scenario.id
                        ? "bg-violet-600 text-white"
                        : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 disabled:opacity-50"
                    }`}
                  >
                    {scenario.label}
                  </button>
                ))}
              </div>
              <div className="sm:ml-auto">
                <Button
                  onClick={runDemo}
                  disabled={isRunning}
                  variant="primary"
                  size="sm"
                >
                  {isRunning ? (
                    <>
                      <Loader2 size={14} className="mr-2 animate-spin" />
                      Running...
                    </>
                  ) : visibleSteps.length > 0 ? (
                    <>
                      <RefreshCw size={14} className="mr-2" />
                      Run Again
                    </>
                  ) : (
                    <>
                      <Sparkles size={14} className="mr-2" />
                      Run Demo
                    </>
                  )}
                </Button>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-0">
            {/* User query */}
            <div className="p-4 border-b border-zinc-800 bg-zinc-800/30">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-zinc-700 flex items-center justify-center text-zinc-300 text-sm font-medium">
                  U
                </div>
                <div className="flex-1">
                  <p className="text-sm text-zinc-500 mb-1">User Query</p>
                  <p className="text-zinc-200">{selectedScenario.query}</p>
                </div>
              </div>
            </div>

            {/* Agent steps */}
            <div
              ref={stepsRef}
              className="p-4 space-y-3 max-h-[400px] overflow-y-auto"
            >
              {visibleSteps.length === 0 && !isRunning && (
                <div className="text-center py-12 text-zinc-500">
                  <Bot size={32} className="mx-auto mb-3 opacity-50" />
                  <p>Click &quot;Run Demo&quot; to see the agent in action</p>
                </div>
              )}

              <AnimatePresence>
                {visibleSteps.map((step, i) => (
                  <StepNode
                    key={step.id}
                    step={step}
                    isLast={i === visibleSteps.length - 1 && !showResponse}
                  />
                ))}
              </AnimatePresence>
            </div>

            {/* Final response */}
            <AnimatePresence>
              {showResponse && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 border-t border-zinc-800 bg-gradient-to-r from-violet-500/5 to-fuchsia-500/5"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center">
                      <Bot size={16} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-violet-400 mb-2 font-medium">
                        Final Response
                      </p>
                      <div className="text-zinc-300 prose prose-sm prose-invert max-w-none">
                        {selectedScenario.response.split("\n").map((line, i) => (
                          <p key={i} className="mb-1">
                            {line.startsWith("**") ? (
                              <strong>{line.replace(/\*\*/g, "")}</strong>
                            ) : line.startsWith("- ") ? (
                              <span className="block pl-4">• {line.slice(2)}</span>
                            ) : (
                              line
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </CardContent>
        </Card>

        {/* Tech callout */}
        <motion.div
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {[
            { label: "Tool Orchestration", desc: "Multi-step planning" },
            { label: "Streaming Output", desc: "Real-time visibility" },
            { label: "Error Recovery", desc: "Graceful fallbacks" },
            { label: "Type Safety", desc: "Structured outputs" },
          ].map((item) => (
            <div
              key={item.label}
              className="p-4 rounded-xl bg-zinc-800/50 border border-zinc-700/50"
            >
              <p className="text-white font-medium text-sm">{item.label}</p>
              <p className="text-zinc-500 text-xs mt-1">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
