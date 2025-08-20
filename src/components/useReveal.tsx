
"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation, HTMLMotionProps } from "framer-motion";

export function useReveal() {
  const ref = useRef<HTMLElement | null>(null);
  const controls = useAnimation();

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) controls.start("animate");
        });
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [controls]);

  return { ref, controls };
}

// Variants without transition
export const revealVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

// MotionSection component
import { ComponentProps } from "react";

type MotionSectionProps = React.PropsWithChildren<ComponentProps<typeof motion.section>>;

export const MotionSection: React.FC<MotionSectionProps> = ({ children, ...rest }) => {
  const { ref, controls } = useReveal();

  return (
    <motion.section
      ref={ref as any}
      initial="initial"
      animate={controls}
      variants={revealVariants}
      transition={{ duration: 0.6 }}
      {...rest}
    >
      {children}
    </motion.section>
  );
};
