"use client";
// import MotionSection from "./useReveal";
import { MotionSection } from "./useReveal"; 
import Image from "next/image";
import styles from "./About.module.css";
// import MotionSection from "./useReveal";
export default function About() {
  return (
    <MotionSection id="about"  className="section container">
      <h2 className="heading">About Me</h2>

      <p className="subtle mt-2 max-w-3xl">
        I am a multidisciplinary professional with over 10 years of experience in education and leadership,
        and 4+ years as a full-stack developer. Alongside my technical expertise, I bring strong skills in
        graphic design and video editing, enabling me to create both functional and visually engaging solutions.
        <br /><br />
        I am a fast learner who thrives on problem-solving, mentoring students, and collaborating with teams.
        My passion lies in turning ideas into practical products that make a real impact.
      </p>

      <div className={styles.grid + " mt-8"}>
        {/* Education & Certifications */}
        <div className="card">
          <h3 className="font-semibold text-xl">Education & Certifications</h3>
          <ul className={styles.list + " mt-4"}>
            <li className={styles.item}>
              BSc in Computer Science (With Distinction) — Rift Valley University
            </li>
            <li className={styles.item}>
              BSc in Sport Science (With Distinction) — Addis Ababa University
            </li>
            <li className={styles.item}>
              Graphic Design Certificate — Leket College
            </li>
            <li className={styles.item}>
              Completed multiple online bootcamps & short-term courses in Full-Stack Development, UI/UX, and Video Editing
            </li>
          </ul>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
            <Image
              src="/degree-cs.jpg"
              width={600}
              height={420}
              alt="Computer Science degree"
              className="rounded-lg border border-white/10"
            />
            <Image
              src="/degree-sport.jpg"
              width={600}
              height={420}
              alt="Sport Science degree"
              className="rounded-lg border border-white/10"
            />
          </div>
        </div>

        {/* Key Achievements */}
        <div className="card">
          <h3 className="font-semibold text-xl">Key Achievements</h3>
          <ul className={styles.list + " mt-4"}>
            <li className={styles.item}>10+ years teaching & leadership experience.</li>
            <li className={styles.item}>4+ years building full-stack apps and web solutions.</li>
            <li className={styles.item}>50+ design projects across branding, UI, and multimedia.</li>
            <li className={styles.item}>Completed multiple professional bootcamps and certification programs.</li>
          </ul>
        </div>
      </div>
    </MotionSection>
  );
}
