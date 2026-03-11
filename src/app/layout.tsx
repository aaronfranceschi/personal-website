import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "@/../utils/ScrollToTopButton";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Aaron Franceschi | Full Stack Developer & AI Product  Specialist",
  description:
    "Explore the portfolio of Aaron Franceschi, a Professional Full Stack Developer specializing in Next.js, AI Automation, and modern web solutions. Built for performance and user experience.",
  keywords: [
    "Aaron Franceschi",
    "Full Stack Developer",
    "Next.js Portfolio",
    "AI Product Specialist",
    "Software Engineer",
    "React Developer",
  ],
  authors: [{ name: "Aaron Franceschi" }],
  openGraph: {
    title: "Aaron Franceschi | Personal Portfolio",
    description:
      "Full Stack Developer & AI Product Specialist — Building the future of the web.",
    url: "https://aaronfranceschi.vercel.app",
    siteName: "Aaron Franceschi Portfolio",
    images: [
      {
        url: "/Website-overview.png",
        width: 1200,
        height: 630,
        alt: "Aaron Franceschi Portfolio Overview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aaron Franceschi | Full Stack Developer",
    description: "Building scalable AI-powered web applications.",
    images: ["/Website-overview.png"],
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="text-white">
          <div className="container">{children}</div>
        </main>
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
