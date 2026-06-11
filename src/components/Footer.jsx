import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="py-10 border-t dark:border-white/5 border-black/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display font-black text-lg dark:text-white/20 text-obsidian-300">
          AT<span className="text-amber-400/50">.</span>
        </span>
        <p className="font-mono text-xs dark:text-white/20 text-obsidian-400 text-center">
          Designed & built by Alyaa Talha — {new Date().getFullYear()}
        </p>
        <p className="font-mono text-xs dark:text-white/15 text-obsidian-300">
          React · Tailwind · Framer Motion
        </p>
      </div>
    </footer>
  );
}
