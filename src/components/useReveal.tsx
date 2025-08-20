"use client";

import { useEffect, useRef, HTMLAttributes } from "react";
import { motion, useAnimation, MotionProps } from "framer-motion";

export function useReveal() {
  const ref = useRef<HTMLElement | null>(null);
  const controls = useAnimation();

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) controls.start({ opacity: 1, y: 0 });
        });
      },
      { threshold: 0.2 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [controls]);

  return { ref, controls };
};

// Combine HTML <section> props with motion props
type MotionSectionProps = HTMLAttributes<HTMLElement> & MotionProps & {
  children: React.ReactNode;
};

export const MotionSection: React.FC<MotionSectionProps> = ({ children, ...props }) => {
  const { ref, controls } = useReveal();

  return (
    <motion.section
      ref={ref as any} // keep this to satisfy TypeScript
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      {...props} // ✅ now id, className, style, etc. work
    >
      {children}
    </motion.section>
  );
};
