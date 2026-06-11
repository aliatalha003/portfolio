import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { experience } from '../data/portfolio';

function TimelineItem({ item, index }) {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      className="relative pl-10 pb-12 last:pb-0"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Vertical line */}
      <div className="absolute left-0 top-2 bottom-0 w-px dark:bg-white/10 bg-black/10" />

      {/* Dot */}
      <motion.div
        className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full border-2 border-amber-400 bg-transparent"
        animate={isInView ? { scale: [0, 1.3, 1] } : {}}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        style={{ boxShadow: isInView ? '0 0 12px rgba(245, 158, 11, 0.5)' : 'none' }}
      />

      {/* Content */}
      <div className="min-w-7xl dark:bg-obsidian-800/40 bg-gray-50 rounded-2xl p-6 border dark:border-white/5 border-black/5 group hover:dark:border-white/10 hover:border-black/10 transition-colors">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <h3 className="font-display font-bold text-xl dark:text-white text-obsidian-900">{item.role}</h3>
            <span className="font-mono text-sm text-amber-400">{item.company}</span>
          </div>
          <span className="font-mono text-xs dark:text-white/30 text-obsidian-400 dark:bg-white/5 bg-black/5 px-3 py-1.5 rounded-full">
            {item.period}
          </span>
        </div>
        <p className="font-body text-sm dark:text-white/50 text-obsidian-500 leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #F59E0B 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          className="flex items-center gap-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs text-amber-400 tracking-widest">04 /</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl dark:text-white text-obsidian-900">Experience</h2>
          <div className="flex-1 h-px dark:bg-white/10 bg-black/10 ml-4" />
        </motion.div>

        <motion.p
          className="font-body dark:text-white/40 text-obsidian-400 text-base mb-16 max-w-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Frontend Developer & UI/UX Designer with hands-on experience building responsive government platforms and user-centered interfaces.
        </motion.p>

        <div className="max-w-6xl">
          {experience.map((item, i) => (
            <TimelineItem key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* Resume CTA */}
        <motion.div
          className="mt-16 ml-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="https://drive.google.com/file/d/1LveFikKY4jlG2FgS-r8pGqYaxmgY0-om/view?usp=sharing"
            className="inline-flex items-center gap-2 px-6 py-3 border dark:border-white/15 border-black/15 dark:text-white/70 text-obsidian-600 rounded-full text-sm font-medium hover:dark:border-amber-400/50 hover:border-amber-500/50 hover:text-amber-500 dark:hover:text-amber-400 transition-colors group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Download CV
            <span className="group-hover:translate-y-0.5 transition-transform">↓</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
