import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Raka Putra Pratidina — Machine Learning & AI Systems",
  description: "Explore Raka Putra Pratidina's machine learning applications, NLP research at BRIN, AI agents, and cloud infrastructure projects.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
