
"use client";
import Image from "next/image";
import { useState } from "react";
import { MotionSection } from "./useReveal";
import styles from "@/styles/Portfolio.module.css";

type Item = {
  title: string;
  image: string;
  link?: string;
  github?: string;
  category: "Development" | "Design" | "Video" | "Teaching";
};

const items: Item[] = [
  // Development Projects
  {
    title: "E-commerce Dashboard",
    image: "/projects/dev/dev1.png",
    link: "https://ecommerce-demo.com",
    github: "https://github.com/abyssiniatech/ecommerce-dashboard",
    category: "Development",
  },
  {
    title: "API Boilerplate (Node.js + Express)",
    image: "/projects/dev/dev2.png",
    github: "https://github.com/abyssiniatech/api-boilerplate",
    category: "Development",
  },
  {
    title: "Portfolio Website (Next.js + Tailwind)",
    image: "/projects/dev/dev3.png",
    link: "https://portfolio-demo.com",
    github: "https://github.com/abyssiniatech/portfolio",
    category: "Development",
  },
  {
    title: "Blog Platform (MERN Stack)",
    image: "/projects/dev/dev4.png",
    link: "https://blog-demo.com",
    github: "https://github.com/abyssiniatech/blog-platform",
    category: "Development",
  },

  // Design / Graphics Projects
  {
    title: "Brand Kit — Aster",
    image: "/projects/design/design1.png",
    category: "Design",
  },
  {
    title: "UI Kit — Nebula",
    image: "/projects/design/design2.png",
    category: "Design",
  },
  {
    title: "Logo Pack — Modern Startups",
    image: "/projects/design/design3.png",
    category: "Design",
  },
  {
    title: "Poster Design — Tech Summit 2025",
    image: "/projects/design/design4.png",
    category: "Design",
  },

  // Video Editing Projects
  {
    title: "Showreel 2025",
    image: "/projects/video/video1.png",
    link: "https://youtube.com",
    category: "Video",
  },
  {
    title: "Event Highlight — Addis Ababa Marathon",
    image: "/projects/video/video2.png",
    link: "https://youtube.com",
    category: "Video",
  },
  {
    title: "Educational Explainer — AI Basics",
    image: "/projects/video/video3.png",
    link: "https://youtube.com",
    category: "Video",
  },

  // Teaching / Training Projects
  {
    title: "Course: Web Fundamentals",
    image: "/projects/teaching/teach1.png",
    category: "Teaching",
  },
  {
    title: "Workshop: Intro to React",
    image: "/projects/teaching/teach2.png",
    category: "Teaching",
  },
  {
    title: "Seminar: Software Engineering Best Practices",
    image: "/projects/teaching/teach3.png",
    category: "Teaching",
  },
  {
    title: "Mentorship Program: Full-Stack Development",
    image: "/projects/teaching/teach4.png",
    category: "Teaching",
  },
];

const tabs = ["Development", "Design", "Video", "Teaching"] as const;

export default function Portfolio() {
  const [tab, setTab] = useState<typeof tabs[number]>("Development");
  const filtered = items.filter((i) => i.category === tab);

  return (
    <MotionSection id="portfolio" className="section container">
      <h2 className="heading">Portfolio</h2>

      {/* Tabs */}
      <div className="mt-4 flex gap-2 flex-wrap">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`${styles.tab} ${t === tab ? styles.active : ""}`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Projects */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {filtered.map((p, idx) => (
          <a
            key={idx}
            href={p.link || p.github || "#"}
            target="_blank"
            className="card hover:scale-[1.02] transition"
          >
            <Image
              src={p.image}
              width={600}
              height={400}
              alt={p.title}
              className="rounded-lg border border-white/10"
            />
            <div className="mt-3 font-medium">{p.title}</div>
            <div className="text-sm subtle">{p.category}</div>
          </a>
        ))}
      </div>
    </MotionSection>
  );
}
