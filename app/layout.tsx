import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saifuddin Tipu — Senior Software Developer",
  description:
    "6+ years building enterprise-grade platforms — from resolving production crises to architecting systems that serve 10,000+ users daily.",
  keywords: [
    "Saifuddin Tipu",
    "Senior Software Developer",
    "Node.js",
    "NestJS",
    "Next.js",
    "TypeScript",
    "MongoDB",
    "WebSocket",
    "Malaysia",
  ],
  authors: [{ name: "Saifuddin Tipu" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saifuddintipu.vercel.app",
    title: "Saifuddin Tipu — Senior Software Developer",
    description:
      "6+ years building enterprise-grade platforms — from resolving production crises to architecting systems that serve 10,000+ users daily.",
    siteName: "Saifuddin Tipu Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saifuddin Tipu — Senior Software Developer",
    description:
      "6+ years building enterprise-grade platforms — from resolving production crises to architecting systems that serve 10,000+ users daily.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-[#0f0f0f] antialiased`}>
        {children}
      </body>
    </html>
  );
}
