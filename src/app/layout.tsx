import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sana Ambreen",
  description: "Data Scientist • Dallas, TX",
};

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/70 backdrop-blur">
      <nav className="mx-auto max-w-5xl px-4 py-3 flex gap-6 text-sm text-zinc-700">
        <Link href="/" className="font-medium hover:text-black">Home</Link>
        <Link href="/resume" className="hover:text-black">Resume</Link>
        <Link href="/work" className="hover:text-black">Work</Link>
        <Link href="/gallery" className="hover:text-black">Gallery</Link>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mx-auto max-w-5xl px-4 py-12 text-xs text-zinc-600">
      © {new Date().getFullYear()} Sana Ambreen
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-300 to-pink-300 text-zinc-900">
        <Header />
        <main className="mx-auto max-w-5xl px-4 py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
