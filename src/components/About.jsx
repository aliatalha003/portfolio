import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { skills } from '../data/portfolio';

function SkillBar({ name, level, index }) {
  const { ref, isInView } = useScrollAnimation();

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between mb-2">
        <span className="font-mono text-sm dark:text-white/70 text-obsidian-600">{name}</span>
        <motion.span
          className="font-mono text-xs dark:text-white/30 text-obsidian-400"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.1 + 0.5 }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-px dark:bg-white/5 bg-black/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-amber-400 rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

export default function About() {
  const { ref: sectionRef, isInView } = useScrollAnimation();

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Section number */}
      <motion.span
        className="absolute left-0 top-1/2 -translate-y-1/2 font-display font-black text-[15vw] dark:text-white/[0.02] text-black/[0.03] leading-none select-none pointer-events-none hidden lg:block"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        02
      </motion.span>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          ref={sectionRef}
          className="flex items-center gap-4 mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs text-amber-400 tracking-widest">02 /</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl dark:text-white text-obsidian-900">About</h2>
          <div className="flex-1 h-px dark:bg-white/10 bg-black/10 ml-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left: Bio */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Avatar placeholder */}
              <div className="relative mb-10 inline-block">
                <div className="w-48 h-48 rounded-2xl dark:bg-obsidian-700 bg-gray-100 overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center font-display font-black text-5xl dark:text-white/10 text-black/10">
                    AT
                  </div>
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(135deg, rgba(245,158,11,0.15) 0%, transparent 60%)'
                    }}
                  />
                </div>

                <div className="absolute -bottom-3 -right-3 px-3 py-2 rounded-xl bg-amber-400">
                  <span className="font-mono text-obsidian-900 font-bold text-xs">
                    2+ yr
                  </span>
                </div>
              </div>

              <h3 className="font-display font-bold text-2xl dark:text-white text-obsidian-900 mb-5">
                Frontend Developer & UI/UX Designer
                <br />
                <span className="italic dark:text-white/50 text-obsidian-400">
                  crafting modern and intuitive web experiences.
                </span>
              </h3>

              <div className="space-y-4 font-body dark:text-white/50 text-obsidian-500 text-base leading-relaxed">
                <p>
                  I'm a Frontend Developer and UI/UX Designer with experience building responsive and user-focused web applications. Currently working at Datacell Solutions in Dubai, I develop modern interfaces using React, Next.js, and Tailwind CSS.
                </p>

                <p>
                  I have a strong foundation in both design and development, allowing me to transform ideas into clean, functional, and visually engaging digital products.
                </p>

                <p>
                  I enjoy working on real-world projects, improving user experience, and continuously learning new technologies to grow as a developer.
                </p>
              </div>

              {/* Quick facts */}
              <div className="grid grid-cols-3 gap-6 mt-10">
                {[
                  { value: '7+', label: 'Projects' },
                  { value: '2yr+', label: 'Experience' },
                  { value: 'React', label: 'Main Stack' },
                ].map(({ value, label }) => (
                  <div key={label} className="border-l-2 border-amber-400 pl-4">
                    <div className="font-display font-black text-2xl dark:text-white text-obsidian-900">{value}</div>
                    <div className="font-mono text-xs dark:text-white/40 text-obsidian-400 mt-0.5">{label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <h3 className="font-mono text-xs text-amber-400 tracking-widest mb-8 uppercase">Core Skills</h3>
            <div className="space-y-7">
              {skills.map((skill, i) => (
                <SkillBar key={skill.name} {...skill} index={i} />
              ))}
            </div>

            {/* Tech cloud */}
            <div className="mt-12">
              <h3 className="font-mono text-xs dark:text-white/30 text-obsidian-400 tracking-widest mb-5 uppercase">Also proficient in</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'HTML',
                  'CSS',
                  'JavaScript',
                  'React',
                  'Tailwind CSS',
                  'Bootstrap',
                  'Figma'
                ].map(tech => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-mono dark:bg-white/5 bg-black/5 dark:text-white/50 text-obsidian-500 rounded-full border dark:border-white/5 border-black/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
