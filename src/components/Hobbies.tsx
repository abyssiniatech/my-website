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

// FIX: Remove className from motion.div and wrap in a div for styling
export default function HobbiesSection() {
  return (
    <section className="py-16 min-h-screen bg-black bg-[url('/grid.svg')] bg-cover bg-fixed flex items-center border-0">
      <div className="w-full max-w-7xl mx-auto px-4 flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-12 text-white drop-shadow-lg transition-all">
          Hobbies
        </h2>
        {/* motion.div should NOT have className. Wrap in a div for styling. */}
        <div className="w-full">
          <motion.div
            variants={containerVariantsHobbies}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div
              className="
                grid
                gap-8
                justify-items-center
                sm:grid-cols-2
                md:grid-cols-3
                lg:grid-cols-4
                xl:grid-cols-7
                transition-all
                animate-hobbies-grid"
            >
              {hobbies.map((hobby, index) => (
                <motion.div key={index} variants={itemVariantsHobbies}>
                  <div className="
                    bg-gradient-to-br from-zinc-800 via-gray-900 to-black
                    rounded-3xl shadow-2xl border border-gray-800
                    p-8
                    flex flex-col items-center
                    hover:scale-105 hover:shadow-purple-900 transition-all duration-300
                    backdrop-blur-lg
                  ">
                    <div className="text-5xl mb-4 animate-bounce">{hobby.icon}</div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 text-center">{hobby.name}</h3>
                    <p className="mt-2 text-gray-300 text-center text-sm sm:text-base">{hobby.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <style jsx>{`
        .animate-hobbies-grid {
          animation: gridFadeIn 1.2s ease-in;
        }
        @keyframes gridFadeIn {
          0% { opacity: 0; transform: scale(0.95); }
          70% { opacity: 1; transform: scale(1.02); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
}