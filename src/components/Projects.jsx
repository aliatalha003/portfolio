import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ProjectCard from './ProjectCard';
import { projects } from '../data/portfolio';

export default function Projects() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Section number */}
      <motion.span
        className="absolute right-0 top-1/2 -translate-y-1/2 font-display font-black text-[15vw] dark:text-white/[0.02] text-black/[0.03] leading-none select-none pointer-events-none hidden lg:block"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        03
      </motion.span>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          className="flex items-center gap-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs text-amber-400 tracking-widest">03 /</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl dark:text-white text-obsidian-900">Projects</h2>
          <div className="flex-1 h-px dark:bg-white/10 bg-black/10 ml-4" />
        </motion.div>

        <motion.p
          className="font-body dark:text-white/40 text-obsidian-400 text-base mb-16 max-w-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          A selection of real-world projects showcasing my work in frontend development and UI/UX design, including government platforms, mobile applications, and modern web interfaces.
        </motion.p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* See more */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.a
            href="https://github.com/aliatalha003"
            target="_blank"
            className="inline-flex items-center gap-2 font-body text-sm dark:text-white/40 text-obsidian-400 dark:hover:text-white hover:text-obsidian-900 transition-colors group"
            whileHover={{ gap: 12 }}
          >
            View all projects on GitHub
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
