import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://danielminton.com"),
  title: "Daniel Minton | Full-Stack Engineer",
  description:
    "Full-stack engineer with 10+ years building production software. Founder, builder, and creative technologist based in San Francisco.",
  keywords: [
    "Daniel Minton",
    "Full Stack Developer",
    "Software Engineer",
    "React Developer",
    "TypeScript",
    "San Francisco",
    "Full-Stack Engineer",
  ],
  authors: [{ name: "Daniel Minton" }],
  creator: "Daniel Minton",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://danielminton.com",
    title: "Daniel Minton | Full-Stack Engineer",
    description:
      "Full-stack engineer with 10+ years building production software.",
    siteName: "Daniel Minton",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Minton | Full-Stack Engineer",
    description:
      "Full-stack engineer with 10+ years building production software.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-zinc-50`}
      >
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
