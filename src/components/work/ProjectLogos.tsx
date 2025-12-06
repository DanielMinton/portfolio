"use client";

interface LogoProps {
  className?: string;
}

// StreamSync - Real-time sync waves
export function StreamSyncLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className}>
      <path d="M8 20C8 20 12 14 20 14C28 14 32 20 32 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.4"/>
      <path d="M8 20C8 20 12 26 20 26C28 26 32 20 32 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.7"/>
      <path d="M6 20C6 20 11 12 20 12C29 12 34 20 34 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="20" cy="20" r="3" fill="currentColor"/>
    </svg>
  );
}

// CloudForge - Cloud with gear
export function CloudForgeLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className}>
      <path d="M10 26C7.5 26 6 24 6 22C6 19.5 8 18 10 18C10 14 13 10 18 10C22 10 25 12.5 26 16C26 16 28 15 30 16C32.5 17 34 19.5 34 22C34 24.5 32 26 30 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="20" cy="24" r="5" stroke="currentColor" strokeWidth="2"/>
      <path d="M20 21V24L22 25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

// APIGuard - Shield with lock
export function APIGuardLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className}>
      <path d="M20 6L32 10V18C32 26 26 32 20 34C14 32 8 26 8 18V10L20 6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <rect x="15" y="17" width="10" height="8" rx="1" stroke="currentColor" strokeWidth="2"/>
      <path d="M17 17V14C17 12.5 18.5 11 20 11C21.5 11 23 12.5 23 14V17" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}

// NeuralCanvas - Brain/neural network pattern
export function NeuralCanvasLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className}>
      <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.6"/>
      <circle cx="28" cy="12" r="3" fill="currentColor" opacity="0.6"/>
      <circle cx="20" cy="20" r="4" fill="currentColor"/>
      <circle cx="10" cy="28" r="3" fill="currentColor" opacity="0.6"/>
      <circle cx="30" cy="28" r="3" fill="currentColor" opacity="0.6"/>
      <path d="M14 13L18 18M26 13L22 18M12 26L18 22M28 26L22 22" stroke="currentColor" strokeWidth="1.5" opacity="0.5"/>
    </svg>
  );
}

// DataWeaver - Data flow/pipeline
export function DataWeaverLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className}>
      <rect x="6" y="8" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="2"/>
      <rect x="6" y="24" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="2"/>
      <rect x="26" y="16" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="2"/>
      <path d="M14 12H18C22 12 22 20 26 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M14 28H18C22 28 22 20 26 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

// QuantumViz - Atom/orbital
export function QuantumVizLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className}>
      <ellipse cx="20" cy="20" rx="14" ry="6" stroke="currentColor" strokeWidth="2" transform="rotate(45 20 20)"/>
      <ellipse cx="20" cy="20" rx="14" ry="6" stroke="currentColor" strokeWidth="2" transform="rotate(-45 20 20)"/>
      <circle cx="20" cy="20" r="3" fill="currentColor"/>
    </svg>
  );
}

// GeoStream - Globe with signal
export function GeoStreamLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className}>
      <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="2"/>
      <ellipse cx="20" cy="20" rx="5" ry="12" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 20H32" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10 14H30" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
      <path d="M10 26H30" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
      <circle cx="28" cy="12" r="4" fill="currentColor" opacity="0.8"/>
      <circle cx="28" cy="12" r="6" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
    </svg>
  );
}

// ParticleForge - Particle explosion
export function ParticleForgeLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className}>
      <circle cx="20" cy="20" r="4" fill="currentColor"/>
      <circle cx="20" cy="8" r="2" fill="currentColor" opacity="0.7"/>
      <circle cx="20" cy="32" r="2" fill="currentColor" opacity="0.7"/>
      <circle cx="8" cy="20" r="2" fill="currentColor" opacity="0.7"/>
      <circle cx="32" cy="20" r="2" fill="currentColor" opacity="0.7"/>
      <circle cx="11" cy="11" r="1.5" fill="currentColor" opacity="0.5"/>
      <circle cx="29" cy="11" r="1.5" fill="currentColor" opacity="0.5"/>
      <circle cx="11" cy="29" r="1.5" fill="currentColor" opacity="0.5"/>
      <circle cx="29" cy="29" r="1.5" fill="currentColor" opacity="0.5"/>
      <path d="M20 16V10M20 24V30M16 20H10M24 20H30" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
    </svg>
  );
}

// RustWASM Encoder - Gear with code brackets
export function RustWasmLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className}>
      <path d="M20 6L22 10L26 8L26 12L30 12L28 16L32 18L28 20L30 24L26 24L26 28L22 26L20 30L18 26L14 28L14 24L10 24L12 20L8 18L12 16L10 12L14 12L14 8L18 10L20 6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <text x="14" y="23" fill="currentColor" fontSize="10" fontFamily="monospace" fontWeight="bold">W</text>
    </svg>
  );
}

// CryptoCore - Lock with key
export function CryptoCoreLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className}>
      <rect x="10" y="18" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
      <path d="M14 18V13C14 9.5 16.5 7 20 7C23.5 7 26 9.5 26 13V18" stroke="currentColor" strokeWidth="2"/>
      <circle cx="20" cy="25" r="2" fill="currentColor"/>
      <path d="M20 27V30" stroke="currentColor" strokeWidth="2"/>
    </svg>
  );
}

// DevPulse - Heartbeat/pulse line
export function DevPulseLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className}>
      <path d="M4 20H10L14 10L18 28L22 16L26 24L30 20H36" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
    </svg>
  );
}

// Morpheus - Abstract morphing shape
export function MorpheusLogo({ className }: LogoProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className}>
      <path d="M20 6C28 6 34 12 34 20C34 28 28 34 20 34C12 34 6 28 6 20C6 12 12 6 20 6Z" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
      <path d="M20 10C26 10 30 14 30 20C30 26 24 30 18 30C12 30 10 24 10 18C10 12 14 10 20 10Z" stroke="currentColor" strokeWidth="2" opacity="0.6"/>
      <path d="M20 14C24 14 26 16 26 20C26 24 22 26 18 26C14 26 14 22 14 18C14 14 16 14 20 14Z" fill="currentColor" opacity="0.8"/>
    </svg>
  );
}

// Map project IDs to logo components
export const projectLogos: Record<string, React.FC<LogoProps>> = {
  "streamsync": StreamSyncLogo,
  "cloudforge": CloudForgeLogo,
  "apiguard": APIGuardLogo,
  "neuralcanvas": NeuralCanvasLogo,
  "dataweaver": DataWeaverLogo,
  "quantumviz": QuantumVizLogo,
  "geostream": GeoStreamLogo,
  "particleforge": ParticleForgeLogo,
  "rustwasm-encoder": RustWasmLogo,
  "cryptocore": CryptoCoreLogo,
  "devpulse": DevPulseLogo,
  "morpheus": MorpheusLogo,
};
