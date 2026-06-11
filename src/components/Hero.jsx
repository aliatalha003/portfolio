import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Twitter, Linkedin } from 'lucide-react';

const ROLES = [
  'Frontend Developer',
  'UI/UX Designer',
  'React Developer',
  'Figma UI Designer'
];
function TypewriterText({ texts }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[currentIndex];
    let delay = 80; // default typing speed

    if (!isDeleting) {
      // Typing phase
      if (displayed.length < current.length) {
        delay = 80;
      } else {
        // Text fully typed, pause before deleting
        delay = 2000;
        setIsDeleting(true);
        const timer = setTimeout(() => {}, delay);
        return () => clearTimeout(timer);
      }
    } else {
      // Deleting phase
      if (displayed.length > 0) {
        delay = 40;
      } else {
        // Text fully deleted, move to next role
        delay = 200;
        setCurrentIndex((i) => (i + 1) % texts.length);
        setIsDeleting(false);
        const timer = setTimeout(() => {}, delay);
        return () => clearTimeout(timer);
      }
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, displayed.length + 1));
      } else {
        setDisplayed(current.slice(0, displayed.length - 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [displayed, isDeleting, currentIndex, texts]);

  return (
    <span>
      {displayed}
      <span className="inline-block w-0.5 h-[0.9em] bg-amber-400 ml-1 animate-cursor-blink align-middle" />
    </span>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.07]"
          style={{ background: 'radial-gradient(circle, #F59E0B 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.07, 0.1, 0.07] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-60 -left-40 w-[500px] h-[500px] rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(circle, #60A5FA 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.08, 0.05] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 text-sm font-mono dark:text-white/50 text-obsidian-500">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Open to opportunities
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-black text-[clamp(3rem,8vw,7rem)] leading-[0.95] tracking-tight dark:text-white text-obsidian-900 mb-6"
          >
            Alyaa
            <br />
            <span className="italic dark:text-white text-obsidian-900">Talha</span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div
            variants={itemVariants}
            className="font-display text-[clamp(1.25rem,3vw,2rem)] font-medium dark:text-white/40 text-obsidian-400 mb-8 italic"
          >
            <TypewriterText texts={ROLES} />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="font-body text-lg dark:text-white/50 text-obsidian-500 max-w-xl leading-relaxed mb-12"
          >
            I design and develop modern, responsive web applications using React, and Tailwind CSS — combining clean code with intuitive UI/UX to deliver seamless user experiences.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-16">
            <motion.a
              href="#projects"
              onClick={e => { e.preventDefault(); document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' }); }}
              className="group flex items-center gap-2 px-7 py-3.5 bg-amber-400 text-obsidian-900 font-medium rounded-full text-sm hover:bg-amber-300 transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              View Projects
              <motion.span
                className="inline-block"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>

            <motion.a
              href="#about"
              onClick={e => { e.preventDefault(); document.querySelector('#about').scrollIntoView({ behavior: 'smooth' }); }}
              className="px-7 py-3.5 border dark:border-white/15 border-black/15 dark:text-white/70 text-obsidian-700 rounded-full text-sm hover:dark:border-white/40 hover:border-black/40 transition-colors font-medium"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              About me
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={itemVariants} className="flex items-center gap-6">
            {[
              { icon: Github, href: 'https://github.com/aliatalha003', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/alia-talha-580059225/', label: 'LinkedIn' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                className="dark:text-white/30 text-obsidian-400 dark:hover:text-white hover:text-obsidian-900 transition-colors"
                whileHover={{ y: -2, scale: 1.1 }}
              >
                <Icon size={18} />
              </motion.a>
            ))}
            <span className="dark:text-white/15 text-black/15 text-xs font-mono ml-2">/ aliatalha003</span>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 right-6 md:right-12 flex flex-col items-center gap-2 dark:text-white/25 text-obsidian-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <span className="font-mono text-xs tracking-widest rotate-90 origin-center mb-4">SCROLL</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown size={14} />
          </motion.div>
        </motion.div>

        {/* Large decorative number */}
        <motion.span
          className="absolute right-6 top-1/2 -translate-y-1/2 font-display font-black text-[20vw] dark:text-white/[0.02] text-black/[0.03] leading-none select-none pointer-events-none hidden lg:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          01
        </motion.span>
      </div>
    </section>
  );
}
