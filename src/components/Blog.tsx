
"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type BlogItem = {
  title: string;
  excerpt: string;
  image: string;
  category: string;
  link?: string;
};

const blogs: BlogItem[] = [
  {
    title: "Mastering React & Next.js",
    excerpt:
      "Modern front-end frameworks like React & Next.js simplify web development by offering both server-side and client-side rendering, component-based architecture, and fast performance optimization techniques.",
    image: "/blogs/frontend.png",
    category: "Front-End Frameworks",
    link: "#",
  },
  {
    title: "Becoming a Full-Stack Developer",
    excerpt:
      "Follow the roadmap of full-stack development, including mastering Node.js, Express, MongoDB, SQL, and deploying real-world applications efficiently.",
    image: "/blogs/fullstack.png",
    category: "Full Stack Development",
    link: "#",
  },
  {
    title: "Python for Everyone",
    excerpt:
      "Python is a versatile language suitable for backend development, data analysis, scripting, and rapid prototyping, making it a must-learn for every developer.",
    image: "/blogs/python.png",
    category: "Python",
    link: "#",
  },
  {
    title: "Graphic Design Principles",
    excerpt:
      "Learn the essential principles of graphic design including typography, color theory, layout design, and building cohesive brand systems.",
    image: "/blogs/design.png",
    category: "Graphic Design",
    link: "#",
  },
  {
    title: "Quality Education in Tech",
    excerpt:
      "Practical learning, mentorship, and hands-on experience are key to acquiring skills that matter in the fast-evolving tech industry.",
    image: "/blogs/education.png",
    category: "Quality Education",
    link: "#",
  },
  {
    title: "Best Travel Tips for Developers",
    excerpt:
      "Discover how remote developers can efficiently balance work and travel, using productivity tools and structured routines while exploring the world.",
    image: "/blogs/travel.png",
    category: "Travel",
    link: "#",
  },
  {
    title: "Effective Gym Workouts",
    excerpt:
      "Short, high-impact workouts designed for busy professionals to maintain health, energy, and focus throughout the day.",
    image: "/blogs/gym.png",
    category: "Gym Workout",
    link: "#",
  },
  {
    title: "Pro Video Editing Workflow",
    excerpt:
      "Learn workflows and techniques to speed up video editing in Premiere Pro and DaVinci Resolve without sacrificing quality.",
    image: "/blogs/video.png",
    category: "Video Editing",
    link: "#",
  },
  {
    title: "Soft Skills for Developers",
    excerpt:
      "Mastering communication, teamwork, and leadership is as critical as coding skills to advance in your career as a software engineer.",
    image: "/blogs/softskills.png",
    category: "Soft Skills",
    link: "#",
  },
  {
    title: "Tailwind CSS vs Bootstrap",
    excerpt:
      "A practical comparison of Tailwind CSS and Bootstrap: understand their utility-first vs component-based approaches, customization ease, and performance benefits for modern web development.",
    image: "/blogs/tailwind-bootstrap.png",
    category: "Front-End Frameworks",
    link: "#",
  },
];

// Framer Motion variants
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.995 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45 } },
};

export default function Blog() {
  const [category, setCategory] = useState<string>("All");
  const categories = ["All", ...Array.from(new Set(blogs.map((b) => b.category)))];
  const filtered = category === "All" ? blogs : blogs.filter((b) => b.category === category);

  return (
    <section id="blog" className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-3">Blog</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Articles & guides on development, design, education, and productivity.
        </p>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((c) => (
            <button
              type="button"
              key={c}
              onClick={() => setCategory(c)}
              className={`px-4 py-1 rounded-full text-sm font-medium ring-1 ring-transparent transition ${
                c === category ? "bg-blue-600 text-white" : "bg-white/5 hover:bg-white/10"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((b, idx) => (
            <motion.a
              key={`${b.title}-${idx}`}
              href={b.link ?? "#"}
              target={b.link ? "_blank" : undefined}
              rel={b.link ? "noopener noreferrer" : undefined}
              variants={cardVariants}
              className="block bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition transform hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative w-full aspect-video bg-gray-100 dark:bg-gray-700">
                <Image
                  src={b.image}
                  alt={b.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-lg">{b.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{b.excerpt}</p>
                <div className="mt-3 text-xs text-gray-500">{b.category}</div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
