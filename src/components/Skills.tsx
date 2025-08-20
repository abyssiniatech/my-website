// import { MotionSection } from "./useReveal";

// const groups: Record<string,string[]> = {
//   "Development": ["HTML","CSS","JavaScript","TypeScript","React","Next.js","Tailwind CSS","Git","SQL","NoSQL"],
//   "Video Editing": ["Premiere Pro","After Effects","DaVinci Resolve"],
//   "Graphic Design": ["Photoshop","Illustrator","Figma","Canva"],
//   "Teaching & Leadership": ["Curriculum design","Research supervision","Classroom management"]
// };

// export default function Skills() {
//   return (
//     <MotionSection id="skills" className="section container">
//       <h2 className="heading">Skills</h2>
//       <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
//         {Object.entries(groups).map(([k, list]) => (
//           <div key={k} className="card">
//             <h3 className="font-semibold">{k}</h3>
//             <ul className="mt-3 grid gap-2">
//               {list.map((s) => (
//                 <li key={s} className="text-sm subtle">• {s}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </MotionSection>
//   );
// }










"use client";
import React from "react";
import { MotionSection } from "./useReveal";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiGit,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiPython,
  SiPhp,
  SiDjango,
  SiLaravel,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiCanva,
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiDavinciresolve,
} from "react-icons/si";

const groups: Record<string, { name: string; icon: React.ReactNode }[]> = {
  "Development": [
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss3 /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "React", icon: <SiReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Git", icon: <SiGit /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "SQL", icon: <SiMysql /> },
    { name: "Python", icon: <SiPython /> },
    { name: "PHP", icon: <SiPhp /> },
    { name: "Django", icon: <SiDjango /> },
    { name: "Laravel", icon: <SiLaravel /> },
  ],
  "Video Editing": [
    { name: "Premiere Pro", icon: <SiAdobepremierepro /> },
    { name: "After Effects", icon: <SiAdobeaftereffects /> },
    { name: "DaVinci Resolve", icon: <SiDavinciresolve /> },
  ],
  "Graphic Design": [
    { name: "Photoshop", icon: <SiAdobephotoshop /> },
    { name: "Illustrator", icon: <SiAdobeillustrator /> },
    { name: "Figma", icon: <SiFigma /> },
    { name: "Canva", icon: <SiCanva /> },
  ],
  "Teaching & Leadership": [
    { name: "Curriculum Design", icon: <SiFigma /> }, // placeholder icon
    { name: "Research Supervision", icon: <SiFigma /> },
    { name: "Classroom Management", icon: <SiFigma /> },
  ],
};

export default function Skills() {
  return (
    <MotionSection id="skills" className="section container py-16">
      <h2 className="text-3xl font-bold text-center mb-10">Skills</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {Object.entries(groups).map(([category, list]) => (
          <div key={category} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center">
            <h3 className="font-semibold text-lg mb-4">{category}</h3>
            <div className="grid grid-cols-3 gap-4 justify-items-center">
              {list.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center gap-1 text-gray-700 dark:text-gray-200 transform transition duration-300 hover:scale-110"
                >
                  <div className="text-4xl">{skill.icon}</div>
                  <span className="text-sm font-medium text-center">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </MotionSection>
  );
}



