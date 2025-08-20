"use client";
import { FileDown } from "lucide-react";

export default function Resume() {
  return (
    <section id="resume" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Resume</h2>
        <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 mb-8">
          Download my full resume to learn more about my background, education, and work experience.  
          I’m always open to new opportunities in software development, design, and education.
        </p>
        <a
          href="/Surafel-Mengist-Resume.pdf"  // <-- place your resume file inside /public folder
          download
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-xl shadow-md transition"
        >
          <FileDown className="w-5 h-5" />
          Download Resume
        </a>
      </div>
    </section>
  );
}
