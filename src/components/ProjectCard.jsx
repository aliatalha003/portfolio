import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  const { title, category, year, description, tags, color, link } = project;

  return (
    <motion.a
      href={link}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover="hover"
      className="group block relative dark:bg-obsidian-800/60 bg-gray-50 border dark:border-white/5 border-black/5 rounded-2xl p-8 overflow-hidden cursor-pointer"
    >
      {/* Hover gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{ background: `radial-gradient(ellipse at top left, ${color}10 0%, transparent 60%)` }}
      />

      {/* Top row */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <span className="font-mono text-xs dark:text-white/30 text-obsidian-400 tracking-wider">{category}</span>
          <div className="w-8 h-1 rounded-full mt-2" style={{ backgroundColor: color }} />
        </div>
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs dark:text-white/25 text-obsidian-400">{year}</span>
          <motion.div
            className="w-8 h-8 rounded-full flex items-center justify-center border dark:border-white/10 border-black/10 dark:text-white/40 text-obsidian-400"
            variants={{
              hover: { scale: 1.15, borderColor: color, color: color }
            }}
            transition={{ duration: 0.2 }}
          >
            <ArrowUpRight size={14} />
          </motion.div>
        </div>
      </div>

      {/* Title */}
      <h3 className="font-display font-bold text-2xl md:text-3xl dark:text-white text-obsidian-900 mb-4 group-hover:translate-x-1 transition-transform duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="font-body text-sm dark:text-white/45 text-obsidian-500 leading-relaxed mb-6">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <span
            key={tag}
            className="px-3 py-1 text-xs font-mono dark:bg-white/5 bg-black/5 dark:text-white/40 text-obsidian-400 rounded-full border dark:border-white/5 border-black/5"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.a>
  );
}
