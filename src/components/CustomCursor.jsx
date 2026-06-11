import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const dotX = useSpring(mouseX, springConfig);
  const dotY = useSpring(mouseY, springConfig);

  const ringSpring = { damping: 20, stiffness: 150, mass: 0.8 };
  const ringX = useSpring(mouseX, ringSpring);
  const ringY = useSpring(mouseY, ringSpring);

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
    };
    const down = () => setClicking(true);
    const up = () => setClicking(false);

    const checkHover = (e) => {
      const target = e.target;
      const isInteractive = target.closest('a, button, input, textarea, [role="button"]');
      setHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mousemove', checkHover);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    document.documentElement.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousemove', checkHover);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
      document.documentElement.style.cursor = '';
    };
  }, [mouseX, mouseY]);

  if (!visible) return null;

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div
          className="rounded-full shadow-lg"
          style={{
            background: 'radial-gradient(circle, #F59E0B 0%, #D97706 100%)',
            boxShadow: '0 0 20px rgba(245, 158, 11, 0.5)',
          }}
          animate={{
            width: hovering ? 12 : clicking ? 8 : 6,
            height: hovering ? 12 : clicking ? 8 : 6,
            scale: clicking ? 0.8 : 1,
          }}
          transition={{ duration: 0.15, ease: 'easeOut' }}
        />
      </motion.div>

      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div
          className="rounded-full border-2 shadow-xl"
          style={{
            borderColor: 'rgba(245, 158, 11, 0.3)',
            boxShadow: hovering
              ? '0 0 30px rgba(245, 158, 11, 0.4), inset 0 0 30px rgba(245, 158, 11, 0.1)'
              : '0 0 20px rgba(245, 158, 11, 0.2)',
          }}
          animate={{
            width: hovering ? 48 : clicking ? 32 : 40,
            height: hovering ? 48 : clicking ? 32 : 40,
            opacity: clicking ? 0.8 : 1,
            rotate: hovering ? 180 : 0,
          }}
          transition={{
            duration: 0.3,
            ease: 'easeOut',
            rotate: { duration: 0.5, ease: 'easeInOut' }
          }}
        />
      </motion.div>

      {/* Trail effect */}
      <motion.div
        className="fixed top-0 left-0 z-[9997] pointer-events-none"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
      >
        <motion.div
          className="rounded-full border border-amber-400/20"
          animate={{
            width: hovering ? 80 : 60,
            height: hovering ? 80 : 60,
            opacity: hovering ? 0.3 : 0.1,
            scale: hovering ? 1.2 : 1,
          }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </motion.div>
    </>
  );
}
