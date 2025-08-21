
"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

// Type definitions
type BlogItem = {
  title: string;
  excerpt: string;
  image: string;
  link?: string;
  category?: string;
};

interface BlogProps {
  filtered?: BlogItem[]; // optional
}

// Framer Motion variants
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

// Sample blog content
const sampleBlogs: BlogItem[] = [
  {
    title: "Mastering React in 2025",
    excerpt: "Learn how to build modern React apps with hooks, context, and more.",
    image: "/blogs/react.jpg",
    link: "https://reactjs.org",
    category: "React",
  },
  {
    title: "Next.js for Fullstack Developers",
    excerpt: "Step-by-step guide to building fullstack apps with Next.js and API routes.",
    image: "/blogs/nextjs.jpg",
    link: "https://nextjs.org",
    category: "Next.js",
  },
  {
    title: "Tailwind CSS: Utility-first Styling",
    excerpt: "A complete guide to building beautiful UIs quickly with Tailwind CSS.",
    image: "/blogs/tailwind.jpg",
    link: "https://tailwindcss.com",
    category: "CSS",
  },
  {
    title: "Node.js & Express Basics",
    excerpt: "Build backend APIs and handle routing efficiently with Node.js and Express.",
    image: "/blogs/node.jpg",
    link: "https://nodejs.org",
    category: "Node.js",
  },
  {
    title: "MongoDB for Beginners",
    excerpt: "Learn how to store and query data using MongoDB NoSQL database.",
    image: "/blogs/mongo.jpg",
    link: "https://www.mongodb.com",
    category: "Database",
  },
];

export default function Blog({ filtered = sampleBlogs }: BlogProps) {
  if (!filtered.length) return null;

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Blog</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-xl mx-auto">
          Discover the latest articles, tutorials, and tips on fullstack development, React, Next.js, Tailwind, and more.
        </p>
      </div>

      {/* Blog Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        // FIX: Use 'style' instead of 'className' directly, and wrap in a div for tailwind className
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                    src={b.image || "/default-image.jpg"}
                    alt={b.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-semibold text-lg line-clamp-1">{b.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 line-clamp-3">
                    {b.excerpt}
                  </p>
                  {b.category && (
                    <span className="mt-2 inline-block text-xs text-gray-500 dark:text-gray-400">
                      {b.category}
                    </span>
                  )}
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}