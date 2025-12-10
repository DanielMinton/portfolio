export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: "fullstack" | "data-ai" | "3d-viz" | "systems" | "devtools" | "creative";
  github: string;
  demo: string;
  featured: boolean;
  gradient: string;
}

export const projects: Project[] = [
  // Full-Stack Engineering
  {
    id: "streamsync",
    title: "StreamSync",
    description: "Real-time collaboration platform with conflict-free replicated data types",
    longDescription: "A distributed collaboration engine using CRDTs for seamless multi-user editing. Features WebSocket sync, operational transforms, and automatic conflict resolution across distributed nodes.",
    tags: ["TypeScript", "WebSockets", "CRDT", "Redis", "React"],
    category: "fullstack",
    github: "https://github.com/DanielMinton/streamsync",
    demo: "https://danielminton.github.io/StreamSync/",
    featured: true,
    gradient: "from-violet-600 to-indigo-600",
  },
  {
    id: "cloudforge",
    title: "CloudForge",
    description: "Infrastructure-as-code visual builder with live AWS deployment",
    longDescription: "Drag-and-drop infrastructure designer that generates Terraform/CloudFormation templates. Live deployment previews, cost estimation, and security scanning built-in.",
    tags: ["React", "Node.js", "AWS SDK", "Terraform", "D3.js"],
    category: "fullstack",
    github: "https://github.com/DanielMinton/cloudforge",
    demo: "https://danielminton.github.io/CloudForge/",
    featured: false,
    gradient: "from-orange-500 to-amber-500",
  },
  {
    id: "apiguard",
    title: "APIGuard",
    description: "Intelligent API gateway with ML-powered rate limiting and threat detection",
    longDescription: "Smart API gateway that learns traffic patterns and automatically adjusts rate limits. Includes anomaly detection, request validation, and real-time threat dashboards.",
    tags: ["Go", "Redis", "TensorFlow.js", "PostgreSQL", "Grafana"],
    category: "fullstack",
    github: "https://github.com/DanielMinton/apiguard",
    demo: "https://danielminton.github.io/APIGuard/",
    featured: false,
    gradient: "from-emerald-500 to-teal-500",
  },

  // Data & AI
  {
    id: "neuralcanvas",
    title: "NeuralCanvas",
    description: "AI-powered generative art studio with real-time style transfer",
    longDescription: "Interactive canvas that applies neural style transfer in real-time. Multiple AI models for different artistic styles, with adjustable parameters and layer blending.",
    tags: ["Python", "TensorFlow", "WebGL", "React", "FastAPI"],
    category: "data-ai",
    github: "https://github.com/DanielMinton/neuralcanvas",
    demo: "https://danielminton.github.io/NeuralCanvas/",
    featured: true,
    gradient: "from-fuchsia-500 to-pink-500",
  },
  {
    id: "dataweaver",
    title: "DataWeaver",
    description: "Visual ETL pipeline builder with AI-suggested transformations",
    longDescription: "No-code data pipeline designer with intelligent transformation suggestions. Connects to 50+ data sources, previews data at each step, and auto-generates documentation.",
    tags: ["TypeScript", "Apache Spark", "OpenAI", "React Flow", "PostgreSQL"],
    category: "data-ai",
    github: "https://github.com/DanielMinton/dataweaver",
    demo: "https://danielminton.github.io/DataWeaver/",
    featured: false,
    gradient: "from-cyan-500 to-blue-500",
  },

  // 3D & Visualization
  {
    id: "quantumviz",
    title: "QuantumViz",
    description: "Interactive quantum circuit simulator with 3D state visualization",
    longDescription: "Educational quantum computing visualizer that renders qubit states in 3D. Drag-and-drop circuit builder with real-time Bloch sphere updates and entanglement visualization.",
    tags: ["Three.js", "TypeScript", "WebGL", "Qiskit", "React"],
    category: "3d-viz",
    github: "https://github.com/DanielMinton/quantumviz",
    demo: "https://danielminton.github.io/QuantumViz/",
    featured: true,
    gradient: "from-purple-600 to-violet-600",
  },
  {
    id: "geostream",
    title: "GeoStream",
    description: "Real-time geospatial data streaming with 3D terrain rendering",
    longDescription: "Live mapping platform that streams geospatial data onto 3D terrain. Supports custom data layers, time-series playback, and WebGL-accelerated rendering of millions of points.",
    tags: ["Mapbox GL", "Three.js", "WebSockets", "PostGIS", "Deck.gl"],
    category: "3d-viz",
    github: "https://github.com/DanielMinton/geostream",
    demo: "https://danielminton.github.io/GeoStream/",
    featured: false,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: "particleforge",
    title: "ParticleForge",
    description: "GPU-accelerated particle system designer with physics simulation",
    longDescription: "Visual particle system editor running entirely on the GPU. Create complex effects with forces, attractors, and collisions. Export to WebGL, Unity, or Unreal.",
    tags: ["WebGL", "GLSL", "Three.js", "TypeScript", "Compute Shaders"],
    category: "3d-viz",
    github: "https://github.com/DanielMinton/particleforge",
    demo: "https://danielminton.github.io/ParticleForge/",
    featured: false,
    gradient: "from-rose-500 to-red-500",
  },

  // Systems & Performance
  {
    id: "rustwasm-encoder",
    title: "RustWASM Encoder",
    description: "High-performance media encoder compiled to WebAssembly",
    longDescription: "Rust-based video/audio encoder running in the browser via WASM. 10x faster than JavaScript implementations with near-native performance and zero dependencies.",
    tags: ["Rust", "WebAssembly", "FFmpeg", "TypeScript", "Workers API"],
    category: "systems",
    github: "https://github.com/DanielMinton/rustwasm-encoder",
    demo: "https://danielminton.github.io/RustWASM-Encoder/",
    featured: false,
    gradient: "from-orange-600 to-red-600",
  },
  {
    id: "cryptocore",
    title: "CryptoCore",
    description: "Zero-knowledge proof implementation with interactive verification",
    longDescription: "Educational cryptography library demonstrating ZK proofs, homomorphic encryption, and secure multi-party computation with visual step-by-step breakdowns.",
    tags: ["TypeScript", "Circom", "snarkjs", "React", "Web Crypto API"],
    category: "systems",
    github: "https://github.com/DanielMinton/cryptocore",
    demo: "https://danielminton.github.io/CryptoCore/",
    featured: false,
    gradient: "from-slate-600 to-zinc-600",
  },

  // Developer Tools
  {
    id: "devpulse",
    title: "DevPulse",
    description: "Real-time code performance profiler with flame graph visualization",
    longDescription: "Browser-based profiler that instruments JavaScript/TypeScript code in real-time. Interactive flame graphs, memory leak detection, and performance regression alerts.",
    tags: ["TypeScript", "Chrome DevTools Protocol", "D3.js", "React", "Node.js"],
    category: "devtools",
    github: "https://github.com/DanielMinton/devpulse",
    demo: "https://danielminton.github.io/DevPulse/",
    featured: false,
    gradient: "from-yellow-500 to-orange-500",
  },

  // Creative Tech
  {
    id: "morpheus",
    title: "Morpheus",
    description: "Procedural animation system with physics-based motion design",
    longDescription: "Creative coding framework for generative animations. Chain physics simulations, noise functions, and easing curves to create organic, responsive motion graphics.",
    tags: ["TypeScript", "Canvas API", "GSAP", "Matter.js", "React"],
    category: "creative",
    github: "https://github.com/DanielMinton/morpheus",
    demo: "https://danielminton.github.io/Morpheus/",
    featured: true,
    gradient: "from-indigo-500 to-purple-500",
  },
];

export const categories = [
  { id: "all", label: "All Projects", count: 12 },
  { id: "fullstack", label: "Full-Stack", count: 3 },
  { id: "data-ai", label: "Data & AI", count: 2 },
  { id: "3d-viz", label: "3D & Visualization", count: 3 },
  { id: "systems", label: "Systems", count: 2 },
  { id: "devtools", label: "Dev Tools", count: 1 },
  { id: "creative", label: "Creative Tech", count: 1 },
] as const;

export type CategoryId = typeof categories[number]["id"];
