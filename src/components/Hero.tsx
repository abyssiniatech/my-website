import Image from "next/image";
import styles from "./Hero.module.css";
import { MotionSection } from "./useReveal";
import Link from "next/link";

export default function Hero() {
  return (
    <MotionSection id="home" className="section container">
      <div className={styles.wrapper}>
        <div>
          <span className={`${styles.badge} animate-glow`}>Full-Stack Developer • Video Editor • Graphic Designer • Teacher</span>
          <h1 className={styles.title + " mt-4"}>
            Surafel Mengist
          </h1>
          <p className="mt-3 text-lg subtle">
            Building web solutions, crafting visuals, and empowering learners through teaching.
          </p>
          <div className={styles.actions + " mt-6"}>
            <Link href="#portfolio" className="card">View Portfolio</Link>
            <Link href="#contact" className="card">Hire Me</Link>
            <a href="mailto:surafel.mengist@example.com" className="card">Contact Me</a>
          </div>
        </div>
        <div className="justify-self-center">
          <Image src="/profile.jpg" width={420} height={520} alt="Surafel portrait" className={styles.avatar} priority />
        </div>
      </div>
    </MotionSection>
  );
}
