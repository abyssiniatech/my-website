"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants, HTMLMotionProps } from "framer-motion";

type BlogItem = {
  title: string;
  excerpt: string;
  image: string;
  link?: string;
  category?: string;
};

interface BlogProps {
  filtered: BlogItem[];
}

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export default function Blog({ filtered }: BlogProps) {
  return (
    <motion.div
      {...({
        className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
        variants: containerVariants,
        initial: "hidden",
        whileInView: "show",
        viewport: { once: true, amount: 0.15 },
      } as HTMLMotionProps<"div">)}
    >
      {filtered.map((b, idx) => (
        <motion.div key={`${b.title}-${idx}`} variants={cardVariants}>
          <a
            href={b.link ?? "#"}
            target={b.link ? "_blank" : undefined}
            rel={b.link ? "noopener noreferrer" : undefined}
            className="block bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-transform hover:-translate-y-1"
          >
            {/* Image */}
            <div className="relative w-full h-40 bg-gray-100 dark:bg-gray-700">
              <Image
                src={b.image ?? "/default-image.jpg"}
                alt={b.title}
                fill={true}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Content */}
            <div className="p-3">
              <h3 className="font-semibold text-base line-clamp-1">{b.title}</h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 mt-1 line-clamp-2">
                {b.excerpt}
              </p>
              {b.category && (
                <div className="mt-2 text-[10px] text-gray-500">{b.category}</div>
              )}
            </div>
          </a>
        </motion.div>
      ))}
    </motion.div>
  );
}
