
"use client";

import { motion } from "framer-motion";

const hobbies = [
  { icon: "📚", name: "Reading", description: "Exploring tech blogs and fiction books." },
  { icon: "🎵", name: "Music", description: "Watching Movies and listening to jazz." },
  { icon: "🏋️", name: "Sports", description: "Running and swimming to stay healthy." },
  { icon: "💻", name: "Side Projects", description: "Building  web apps ." },
  { icon: "💡", name: "Problem Solving", description: "Solving coding challenges and puzzles." },
{ icon: "⛰️", name: "Hiking", description: "Exploring nature trails and mountain paths." },
{ icon: "✈️", name: "Traveling", description: "Discovering new cultures and destinations." },

];

const containerVariantsHobbies = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const itemVariantsHobbies = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function HobbiesSection() {
  return (
    <section className="py-16 bg-inherit  border-gray-200">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Hobbies</h2>
        {/* FIX: Remove className from motion.div and wrap it in a div for styling */}
        <motion.div
          variants={containerVariantsHobbies}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex flex-wrap justify-center gap-6">
            {hobbies.map((hobby, index) => (
              <motion.div
                key={index}
                variants={itemVariantsHobbies}
              >
                <div className="w-48 bg-gray-50 rounded-xl shadow-md p-6 hover:scale-105 transition-transform">
                  <div className="text-4xl mb-4">{hobby.icon}</div>
                  <h3 className="text-xl font-semibold">{hobby.name}</h3>
                  <p className="mt-2 text-gray-600">{hobby.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}