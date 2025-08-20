"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

export function useReveal() {
  const ref = useRef<HTMLElement | null>(null);
  const controls = useAnimation();
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) controls.start({opacity:1, y:0});
      });
    }, { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, [controls]);
  return { ref, controls };
}

export const revealVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export const MotionSection: React.FC<React.PropsWithChildren<{id?: string, className?: string}>> = ({ children, id, className }) => {
  const { ref, controls } = useReveal();
  return (
    <motion.section
      id={id}
      ref={ref as any}
      className={className}
      initial="initial"
      animate={controls}
      variants={revealVariants}
      transition={revealVariants.transition}
    >
      {children}
    </motion.section>
  );
};
