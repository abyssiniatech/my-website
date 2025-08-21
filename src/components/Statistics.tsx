
"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Projects" },
  { value: "10+", label: "Clients" },
  { value: "9", label: "Awards" },
  { value: "50+", label: "Certifications" },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function StatisticsSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-50 via-white to-indigo-50 border-t border-gray-200">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Statistics</h2>
        {/* FIX: Remove className from motion.div and wrap with a div for Tailwind class */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                // FIX: Remove className from motion.div and wrap with div below for Tailwind classes
              >
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-4xl md:text-5xl font-bold text-indigo-600">{stat.value}</h3>
                  <p className="mt-2 text-gray-600">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}