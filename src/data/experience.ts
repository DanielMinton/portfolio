export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  current: boolean;
  description: string[];
  technologies?: string[];
}

export const experience: Experience[] = [
  {
    id: "jpmorgan",
    title: "Network Engineer",
    company: "JPMorgan Chase",
    location: "San Francisco Bay Area, CA",
    period: "June 2025 - Present",
    current: true,
    description: [
      "Build and maintain infrastructure supporting critical financial operations at Fortune 10 scale",
      "Implement secure, high-availability systems under strict regulatory requirements",
      "Develop automation and monitoring solutions for enterprise-scale networks",
    ],
    technologies: ["AWS", "Azure", "Terraform", "Python", "Networking"],
  },
  {
    id: "neonpanda",
    title: "Founder & Engineering Lead",
    company: "Neon Panda Technology Management",
    location: "Tampa Bay, FL",
    period: "October 2011 - September 2020",
    current: false,
    description: [
      "Founded B2B technology company from zero, grew to 50+ clients and profitability",
      "Built and led engineering team with high-trust, low-overhead culture",
      "Shipped production software daily: React frontends, Ruby on Rails APIs, PostgreSQL",
      "Made critical technical decisions with high ambiguity, balancing speed and quality",
      "Owned full product lifecycle: customer discovery, architecture, implementation, support",
    ],
    technologies: [
      "React",
      "Ruby on Rails",
      "PostgreSQL",
      "Redis",
      "AWS",
      "Docker",
    ],
  },
  {
    id: "beverage",
    title: "Owner & Operations Lead",
    company: "Beverage License Consultants",
    location: "Tampa Bay, FL",
    period: "January 2007 - June 2022",
    current: false,
    description: [
      "Led operations for financial services company handling $12M+ in annual transactions",
      "Built internal tools that automated 40% of manual workflows",
      "Zero financial discrepancies over 10+ years of operation",
      "Architected document automation systems for legal compliance",
    ],
    technologies: ["Python", "PostgreSQL", "Document Processing", "Automation"],
  },
];

export interface Skill {
  name: string;
  level: number; // 0-100
  category: "frontend" | "backend" | "infrastructure" | "ai" | "tools";
}

export const skills: Skill[] = [
  // Frontend
  { name: "React / Next.js", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Three.js / WebGL", level: 75, category: "frontend" },
  { name: "Framer Motion / GSAP", level: 85, category: "frontend" },
  { name: "TailwindCSS", level: 90, category: "frontend" },

  // Backend
  { name: "Ruby on Rails", level: 85, category: "backend" },
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Python", level: 75, category: "backend" },
  { name: "PostgreSQL", level: 85, category: "backend" },
  { name: "REST APIs", level: 90, category: "backend" },

  // Infrastructure
  { name: "AWS", level: 80, category: "infrastructure" },
  { name: "Docker", level: 75, category: "infrastructure" },
  { name: "CI/CD", level: 80, category: "infrastructure" },
  { name: "Linux", level: 85, category: "infrastructure" },

  // AI
  { name: "LangChain", level: 70, category: "ai" },
  { name: "OpenAI / Anthropic APIs", level: 75, category: "ai" },
  { name: "RAG Pipelines", level: 65, category: "ai" },

  // Tools
  { name: "Git", level: 90, category: "tools" },
  { name: "Figma", level: 70, category: "tools" },
];
