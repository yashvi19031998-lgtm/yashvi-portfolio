import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CursorGlow } from "@/components/ui/cursor-glow";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yashvi Shah | Premium Full Stack Developer Portfolio",
  description: "Awwwards-quality portfolio of Yashvi Shah, a premium Full Stack Developer specializing in high-end SaaS development, elegant user experiences, and robust scalable applications.",
  keywords: ["Yashvi Shah", "Full Stack Developer", "Portfolio", "SaaS Developer", "Next.js", "React", "Node.js", "Web Developer"],
  authors: [{ name: "Yashvi Shah" }],
  openGraph: {
    title: "Yashvi Shah | Full Stack Developer",
    description: "Premium SaaS portfolio demonstrating world-class web engineering and modern digital experiences.",
    url: "https://yashvishah.dev",
    siteName: "Yashvi Shah Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Yashvi Shah",
    "jobTitle": "Full-Stack Developer & Backend Engineer",
    "url": "https://yashvishah.dev",
    "email": "yashvishah917@gmail.com",
    "sameAs": [
      "https://github.com",
      "https://linkedin.com"
    ],
    "knowsAbout": [
      "PHP",
      "Laravel",
      "CodeIgniter",
      "Node.js",
      "Angular",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "MySQL",
      "REST APIs",
      "Tally ERP",
      "JWT"
    ],
    "description": "Professional Full-Stack Developer with over 5 years of experience in building enterprise CRM portals, Tally ERP modules, and high-performance web applications."
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} h-full antialiased dark`}
      style={{ scrollBehavior: "smooth" }}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground bg-grid-pattern antialiased selection:bg-primary/20 selection:text-white">
        <CursorGlow />
        <Header />
        <main className="flex-grow flex flex-col pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
