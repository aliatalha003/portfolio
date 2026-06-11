import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Github, Twitter, Linkedin, Mail, Send, CheckCircle } from 'lucide-react';

const socials = [
  {
    icon: Github,
    label: 'GitHub',
    handle: 'github.com/aliatalha003',
    href: 'https://github.com/aliatalha003',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    handle: 'linkedin.com/in/alia-talha',
    href: 'https://www.linkedin.com/in/alia-talha-580059225/',
  },
  {
    icon: Mail,
    label: 'Email',
    handle: 'aliatalha003@gmail.com',
    href: 'mailto:aliatalha003@gmail.com',
  },
];

export default function Contact() {
  const { ref, isInView } = useScrollAnimation();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState(null);

 const handleSubmit = (e) => {
  e.preventDefault();
  window.location.href = `mailto:your@email.com?subject=Message from ${form.name}&body=${form.message}`;
  setSent(true);
};

  const inputClass = (field) => `
    w-full bg-transparent px-0 py-3 font-body text-base dark:text-white text-obsidian-900
    border-b dark:border-white/15 border-black/15 outline-none
    transition-all duration-300 placeholder:dark:text-white/20 placeholder:text-obsidian-300
    ${focused === field
      ? 'dark:border-amber-400/70 border-amber-500/70'
      : 'dark:hover:border-white/30 hover:border-black/30'
    }
  `;

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle, #F59E0B 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 7, repeat: Infinity }}
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
          <span className="font-mono text-xs text-amber-400 tracking-widest">05 /</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl dark:text-white text-obsidian-900">Let's Talk</h2>
          <div className="flex-1 h-px dark:bg-white/10 bg-black/10 ml-4" />
        </motion.div>

        {/* Large invite headline */}
        <motion.h3
          className="font-display font-black text-[clamp(2rem,6vw,5rem)] leading-[1] dark:text-white text-obsidian-900 mb-6 mt-10 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Have a project in mind?
          <br />
          <span className="italic text-stroke dark:text-white text-obsidian-900">Let’s bring it to life.</span>
        </motion.h3>

        <motion.p
          className="font-body dark:text-white/40 text-obsidian-400 text-lg mb-16 max-w-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          I’m always open to discussing frontend projects, UI/UX ideas, or new opportunities. Feel free to reach out — I’d love to connect.
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <AnimatePresence mode="wait">
              {!sent ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-8"
                >
                  <div>
                    <label className="font-mono text-xs dark:text-white/30 text-obsidian-400 tracking-widest uppercase block mb-1">Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      className={inputClass('name')}
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs dark:text-white/30 text-obsidian-400 tracking-widest uppercase block mb-1">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                      className={inputClass('email')}
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs dark:text-white/30 text-obsidian-400 tracking-widest uppercase block mb-1">Message</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell me about your project..."
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      className={`${inputClass('message')} resize-none`}
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="group flex items-center gap-3 px-8 py-4 bg-amber-400 text-obsidian-900 rounded-full font-medium text-sm hover:bg-amber-300 transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Send message
                    <motion.span
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <Send size={14} />
                    </motion.span>
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-start gap-4 py-12"
                >
                  <CheckCircle className="text-green-400" size={40} />
                  <h4 className="font-display font-bold text-2xl dark:text-white text-obsidian-900">Message sent!</h4>
                  <p className="font-body dark:text-white/50 text-obsidian-500">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="lg:pl-8"
          >
            <h4 className="font-mono text-xs dark:text-white/30 text-obsidian-400 tracking-widest uppercase mb-8">Find me online</h4>
            <div className="space-y-4">
              {socials.map(({ icon: Icon, label, handle, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  className="group flex items-center gap-5 p-4 rounded-xl dark:bg-white/[0.03] bg-black/[0.03] border dark:border-white/5 border-black/5 dark:hover:border-white/10 hover:border-black/10 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 + 0.3 }}
                  whileHover={{ x: 4 }}
                >
                  <div className="w-10 h-10 rounded-lg dark:bg-white/5 bg-black/5 flex items-center justify-center dark:text-white/50 text-obsidian-500 group-hover:text-amber-400 group-hover:dark:bg-amber-400/10 transition-all">
                    <Icon size={16} />
                  </div>
                  <div>
                    <div className="font-body font-medium text-sm dark:text-white text-obsidian-900">{label}</div>
                    <div className="font-mono text-xs dark:text-white/30 text-obsidian-400">{handle}</div>
                  </div>
                  <span className="ml-auto dark:text-white/20 text-obsidian-300 group-hover:text-amber-400 transition-colors text-sm">→</span>
                </motion.a>
              ))}
            </div>

            {/* Availability note */}
            <div className="mt-10 p-5 rounded-xl dark:bg-amber-400/5 bg-amber-50 border dark:border-amber-400/15 border-amber-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="font-mono text-xs text-green-400 font-medium">Currently available</span>
              </div>
              <p className="font-body text-sm dark:text-white/50 text-obsidian-500">
                Open to full-time roles, freelance projects, and consulting engagements starting June 2026.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
