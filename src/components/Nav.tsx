"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "@/styles/Nav.module.css";
import { Github, Linkedin, Mail, Phone, Code2 } from "lucide-react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const onScroll = () => setOpen(false);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`${styles.header} fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md`}
    >
      <div className="container mx-auto flex items-center justify-between gap-6 py-3 px-4 md:px-8">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-2 font-bold text-lg">
          <Code2 />
          <span className="text-blue-700 f-bold">Surafel</span>
        </Link>

        {/* Nav links */}
        <nav
          className={`${styles.nav} ${open ? styles.open : ""} flex gap-6`}
        >
          {[
            "home",
            "about",
            "skills",
            "portfolio",
            "experience",
            "testimonials",
            "contact",
            "blog",
          ].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="relative text-sm font-medium tracking-wide transition-colors hover:text-blue-500
              after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>

        {/* Social links + Theme toggle */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="https://github.com/abyssiniatech"
            target="_blank"
            aria-label="GitHub"
            className="hover:text-blue-500 transition-colors"
          >
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/surafel-mengist"
            target="_blank"
            aria-label="LinkedIn"
            className="hover:text-blue-500 transition-colors"
          >
            <Linkedin />
          </a>
          <a
            href="mailto:surafelmengist2015@gmail.com"
            aria-label="Email"
            className="hover:text-blue-500 transition-colors"
          >
            <Mail />
          </a>
          <a
            href="tel:+251977898771"
            aria-label="Phone"
            className="hover:text-blue-500 transition-colors"
          >
            <Phone />
          </a>

          {/* Dark/Light toggle */}
          <button
            onClick={toggleTheme}
            className="ml-2 text-xl hover:scale-110 transition-transform"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          aria-label="Menu"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={styles.burger} />
        </button>
      </div>
    </header>
  );
}
