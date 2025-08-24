# Surafel Mengist — Next.js Portfolio (App Router)

Welcome to my personal portfolio website!  
This project showcases my experience, skills, and projects, built with modern web technologies for developers and recruiters.

**Live site:** [my-website-iota-olive-21.vercel.app](https://my-website-iota-olive-21.vercel.app/)

---

## 🚀 Description

This is a fast, modern portfolio built using **Next.js (App Router)**.  
It features animated sections, responsive design, and easy customization — perfect for developers who want an impressive online presence.

---

## 🛠️ Technologies Used

- [Next.js](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- [CSS Modules](https://nextjs.org/docs/pages/building-your-application/styling/css-modules)
- [framer-motion](https://www.framer.com/motion/) (scroll animations, reveal effects)
- [lucide-react](https://lucide.dev/) (icon library)
- [TypeScript](https://www.typescriptlang.org/) (type safety)
- [Vercel](https://vercel.com/) (deployment)
- [IntersectionObserver API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) (scroll reveal logic)

---

## 📦 Getting Started

### 1. **Use this project locally**

```bash
# Clone or unzip, then cd into the folder
npm install
npm run dev
```
Go to [http://localhost:3000](http://localhost:3000) to view your portfolio.

---

### 2. **Create from scratch (optional)**

```bash
npx create-next-app@latest surafel-portfolio --typescript --app --eslint --src-dir --tailwind
cd surafel-portfolio
npm i framer-motion lucide-react
```

---

### 3. **Project Structure**

- `src/app` — App Router pages (`page.tsx`, `layout.tsx`) and `globals.css`
- `src/components` — UI sections (styled with **CSS Modules** and Tailwind)
- `src/styles` — CSS Modules files (`*.module.css`)
- `public/` — images and project thumbnails

---

### 4. **Edit Content**

- Update socials & email in `src/components/Nav.tsx` and `Contact.tsx`
- Replace project thumbnails in `public/projects/*`
- Edit About, Skills, Experience, etc. in their respective component files

---

### 5. **Deploy**

- **Vercel:** Push to GitHub, import repo in Vercel, use default build settings.
- **Static export:** *Not recommended* due to App Router features.

---

### 6. **Customization & Notes**

- Scroll reveal uses an `IntersectionObserver` and framer-motion (`useReveal.tsx`)
- Both Tailwind and CSS Modules are used (see `Hero.module.css`, `About.module.css`)
- Contact form opens user's email app. To add hosted endpoint, connect Getform or Formspree.

---

## 🧑‍💻 How to Use

- Fork or clone the repo ([GitHub link](https://github.com/abyssiniatech/my-website.git))
- Install dependencies and run locally.
- Customize content in the components.
- Deploy on Vercel for instant hosting.

---

## 📎 Links

- **Live site:** [my-website-iota-olive-21.vercel.app](https://my-website-iota-olive-21.vercel.app/)
- **GitHub repo:** [abyssiniatech/my-website](https://github.com/abyssiniatech/my-website.git)

---

## 💡 Credits

Designed and coded by **Surafel Mengist**.

---

> Feel free to fork this project and use it as a template for your own portfolio!
