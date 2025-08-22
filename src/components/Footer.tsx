
// "use client";
// import { ArrowUp } from "lucide-react"; // you can use emoji instead if you prefer
// import Link from "next/link";

// export default function Footer() {
//   return (
//     <footer className="py-6 bg-gray-100 dark:bg-gray-800 text-center relative">
//       <div className="container mx-auto flex flex-col items-center gap-4">
//         <p className="text-sm text-gray-600 dark:text-gray-400">
//           © {new Date().getFullYear()} Surafel Mengist. All rights reserved.
//         </p>

//         {/* Up Arrow Button */}
//         <a
//           href="#home"
//           aria-label="Back to top"
//           className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition shadow-md"
//         >
//           <ArrowUp className="w-5 h-5" />
//           {/* Or use emoji instead: <span className="text-lg">⬆️</span> */}
//         </a>
//       </div>

//       {/* Fork and Starter Project Buttons */}
//       <div className="absolute left-8 bottom-6 flex gap-3">
//         {/* Fork Button */}
//         <a
//           href="https://github.com/abyssiniatech/my-website.git/fork"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="
//             flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white
//             hover:bg-slate-700 transition shadow-md text-sm font-semibold
//           "
//           aria-label="Fork this project"
//         >
//           <span role="img" aria-label="Fork">🍴</span> Fork
//         </a>
//         {/* Starter Project Button */}
//         <a
//           href="https://github.com/abyssiniatech/my-website.git"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="
//             flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 text-white
//             hover:bg-green-500 transition shadow-md text-sm font-semibold
//           "
//           aria-label="Starter project"
//         >
//           <span role="img" aria-label="Start">⚡</span> Starter Project
//         </a>
//       </div>
//     </footer>
//   );
// }















"use client";
import { ArrowUp } from "lucide-react"; // you can use emoji instead if you prefer
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-6 bg-gray-100 dark:bg-gray-800 text-center relative">
      <div className="container mx-auto flex flex-col items-center gap-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Surafel Mengist. All rights reserved.
        </p>

        {/* Up Arrow Button */}
        <a
          href="#home"
          aria-label="Back to top"
          className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition shadow-md"
        >
          <ArrowUp className="w-5 h-5" />
          {/* Or use emoji instead: <span className="text-lg">⬆️</span> */}
        </a>
      </div>

      {/* Fork and Starter Project Buttons */}
      <div className="absolute left-8 bottom-6 flex gap-3">
        {/* Fork Button */}
        <a
          href="https://github.com/abyssiniatech/my-website/fork"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white
            hover:bg-slate-700 transition shadow-md text-sm font-semibold
          "
          aria-label="Fork this project"
        >
          <span role="img" aria-label="Fork">🍴</span> Fork
        </a>
        {/* Starter Project Button */}
        <a
          href="https://github.com/abyssiniatech/my-website"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 text-white
            hover:bg-green-500 transition shadow-md text-sm font-semibold
          "
          aria-label="Starter project"
        >
          <span role="img" aria-label="Start">🚀</span> Starter Project
        </a>
      </div>
    </footer>
  );
}