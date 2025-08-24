import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aftab Hussain",
  description: "Data Scientist • Dallas, TX",
};

function Header() {
  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur z-50 border-b">
      <nav className="mx-auto max-w-2xl px-4 py-3 flex gap-5 text-sm">
        <a href="/" className="font-medium">Home</a>
        <a href="/about">About</a>
        <a href="/work">Work</a>
        <a href="/gallery">Gallery</a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mx-auto max-w-2xl px-4 py-12 text-xs text-zinc-500">
      © {new Date().getFullYear()} Aftab Hussain
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main className="mx-auto max-w-2xl px-4 py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
