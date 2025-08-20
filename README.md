# Surafel Mengist — Next.js Portfolio (App Router)

This project uses **Next.js (App Router)** with **Tailwind CSS** and **CSS Modules**, plus **framer-motion** for scroll animations.

## 1) Use this project
```bash
# unzip then cd into the folder
npm install
npm run dev
```

## 2) If creating from scratch instead
```bash
npx create-next-app@latest surafel-portfolio --typescript --app --eslint --src-dir --tailwind
cd surafel-portfolio
npm i framer-motion lucide-react
```

## 3) Folder layout
- `src/app` — App Router pages (`page.tsx`, `layout.tsx`) and `globals.css`
- `src/components` — UI sections (some styled by **CSS Modules**)
- `src/styles` — CSS Modules files (`*.module.css`)
- `public/` — images and project thumbnails

## 4) Edit content
- Update social links and email in `src/components/Nav.tsx` and `Contact.tsx`
- Replace portfolio thumbnails in `public/projects/*`
- Edit About, Skills, Experience, etc. in component files

## 5) Deploy
- **Vercel**: push to GitHub, import the repo in Vercel, build settings default.
- **Static export** not recommended because of App Router features.

## 6) Notes
- Scroll reveal uses an `IntersectionObserver` + framer-motion in `useReveal.tsx`.
- Tailwind + CSS Modules are both used: see `Hero.module.css`, `About.module.css`, and utility classes.
- Contact form opens the user's email app. For a hosted endpoint, connect Getform or Formspree.
