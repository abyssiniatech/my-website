

"use client";
import React, { useState } from "react";
import { MotionSection } from "./useReveal";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

type ContactItem = {
  Icon: IconType;
  label: string;
  href: string;
  text: string;
  iconClass?: string;
  external?: boolean;
};

const contacts: ContactItem[] = [
  {
    Icon: FaEnvelope,
    label: "Email",
    href: "mailto:surafelmengist2015@gmail.com",
    text: "surafelmengist2015@gmail.com",
    iconClass: "text-red-500",
  },
  {
    Icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/surafel-mengist-3a254b261",
    text: "linkedin.com/in/surafel-mengist-3a254b261",
    iconClass: "text-blue-600",
    external: true,
  },
  {
    Icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/abyssiniatech",
    text: "github.com/abyssiniatech",
    iconClass: "text-gray-800 dark:text-gray-200",
    external: true,
  },
  {
    Icon: SiLeetcode,
    label: "LeetCode",
    href: "https://leetcode.com/u/surafel-mengist/",
    text: "leetcode.com/u/surafel-mengist",
    iconClass: "text-orange-500",
    external: true,
  },
  {
    Icon: FaPhone,
    label: "Phone",
    href: "tel:+251977898771",
    text: "+251 977 898 771",
    iconClass: "text-green-500",
  },
];

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent("[Portfolio] New message");
    const body = encodeURIComponent(
      `Name: ${data.get("name")}
Email: ${data.get("email")}
Message:
${data.get("message")}`
    );
    window.location.href = `mailto:surafelmengist2015@example.com?subject=${subject}&body=${body}`;
    setStatus("Opening your email app…");
  };

  return (
    <MotionSection id="contact" className="section container">
      <h2 className="heading">Contact</h2>
      <p className="subtle mt-2">Let’s connect! </p>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {/* Contact Form */}
        <form onSubmit={onSubmit} className="card grid gap-3">
          <input
            required
            name="name"
            placeholder="Your name"
            className="bg-transparent border border-white/15 rounded-lg px-3 py-2"
          />
          <input
            required
            type="email"
            name="email"
            placeholder="Your email"
            className="bg-transparent border border-white/15 rounded-lg px-3 py-2"
          />
          <textarea
            required
            name="message"
            rows={5}
            placeholder="Message"
            className="bg-transparent border border-white/15 rounded-lg px-3 py-2"
          />
          <button className="px-4 py-2 rounded-lg bg-blue-500/80 hover:bg-blue-500 transition">
            Send
          </button>
          {status && <p className="text-sm subtle">{status}</p>}
        </form>

        {/* Contact Info with Icons */}
        <div className="card">
          <ul className="grid gap-4">
            {contacts.map((c, i) => (
              <motion.li
                key={c.label}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.12, duration: 0.45 }}
                // @ts-expect-error: className is supported on motion.li
                className="group flex items-center gap-3"
              >
                <c.Icon
                  className={`w-6 h-6 ${c.iconClass ?? ""} transition-transform group-hover:scale-110`}
                  aria-hidden
                />
                <a
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  className="hover:text-blue-500 transition group-hover:translate-x-0.5"
                >
                  {c.text}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </MotionSection>
  );
}
