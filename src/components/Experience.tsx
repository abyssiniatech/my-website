"use client";

import { MotionSection } from "./useReveal";
import { motion } from "framer-motion";

const roles = [
  {
    title: "Teacher",
    org: "Addis Ababa Education Bureau",
    period: "Feb 2015 — Present",
    bullets: [
      "Deliver engaging lessons and mentorship in various subjects.",
      "Implement modern teaching methodologies to enhance student learning."
    ]
  },
  {
    title: "Freelance Full-Stack Web Developer",
    org: "Self-employed",
    period: "2021 — Present",
    bullets: [
      "Develop responsive websites, dashboards, and web applications for clients.",
      "Collaborate with clients to gather requirements and deliver scalable solutions."
    ]
  },
  {
    title: "Freelance Graphic Designer & Video Editor",
    org: "Self-employed",
    period: "2023 — Present",
    bullets: [
      "Create visually appealing graphics, logos, and branding materials.",
      "Edit videos for promotional, educational, and social media content."
    ]
  }
];

export default function Experience() {
  return (
    <MotionSection id="experience" className="section container">
      <h2 className="heading">Experience</h2>
      <div className="mt-6 grid gap-4">
        {roles.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="card"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="font-semibold">
                {r.title} — <span className="subtle">{r.org}</span>
              </div>
              <div className="text-sm subtle">{r.period}</div>
            </div>
            <ul className="mt-3 grid gap-2 subtle">
              {r.bullets.map((b, j) => (
                <li key={j}>• {b}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </MotionSection>
  );
}
