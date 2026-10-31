<img width="1260" height="616" alt="{F568BBAB-8FDC-4217-9AB7-1E4777E0D8C0}" src="https://github.com/user-attachments/assets/dbc66505-aac4-426d-88ad-c2ded24ab79d" />
<img width="1265" height="616" alt="{C305E70E-64C2-4445-AE1F-BF921AD4C5D0}" src="https://github.com/user-attachments/assets/55500be0-9c35-461c-b259-74b65c581a26" />
<img width="1264" height="620" alt="{12B164A7-B2A1-4490-BCE8-1BCDD33D80B2}" src="https://github.com/user-attachments/assets/9778070f-00e9-4837-b539-efa94360b2c7" />
<img width="1266" height="620" alt="{5F38411D-5E77-433B-95D7-39325945D2F3}" src="https://github.com/user-attachments/assets/332545c4-8f20-4598-9a50-422c8a682e70" />
<img width="1267" height="618" alt="{EBB78387-4873-4BBC-A1FB-B91420881FA2}" src="https://github.com/user-attachments/assets/86c13653-1f21-4360-aacb-0b5cd0b17008" />
<img width="1263" height="618" alt="{8215443C-F522-472D-BDAF-FAF2DFC27864}" src="https://github.com/user-attachments/assets/8a9b3382-951d-4b7c-ac04-9058398672d2" />


<div align="center">

# 🎓 Edustiy

**Better education for a better world.**

A modern, responsive landing page for an education platform, built with React and Vite.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Styling-1572B6?logo=css3&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-9-4B32C3?logo=eslint&logoColor=white)

[Live Demo](#) · [Report a Bug](https://github.com/khawllach/edustiy/issues) · [Request a Feature](https://github.com/khawllach/edustiy/issues)

</div>

---

## 📖 About

**Edustiy** is a front-end web application for an education platform. Its mission is to provide better education for a better world, with a modern curriculum designed to give students the knowledge, skills and experiences they need to excel in a fast-changing field.

The site is a single-page experience: visitors can learn about the platform, see how it works, meet the team and get in touch, all with smooth scrolling between sections.

## 🖼️ Preview

<!--
Add your screenshots here. Tip: create a `screenshots/` folder in the repo, commit your images,
and reference them like this:

![Home page](./screenshots/home.png)
-->

## ✨ Features

- 🧭 **Smooth-scroll navigation** between sections, powered by `react-scroll`
- 🦸 **Hero section** with a clear call to action
- 🤝 **Help section** presenting what the platform offers
- 🔄 **"How it works" section** guiding visitors step by step
- 👥 **Team section** introducing the people behind the project
- 📬 **Contact section** so visitors can reach out
- 📱 **Responsive layout** for mobile, tablet and desktop
- ⚡ **Fast dev experience** with Vite and Hot Module Replacement (HMR)

## 🛠️ Tech Stack

| Category | Technology |
| --- | --- |
| Framework | [React 19](https://react.dev/) |
| Build tool | [Vite 7](https://vite.dev/) |
| Navigation | [react-scroll](https://github.com/fisshy/react-scroll) |
| Styling | CSS |
| Linting | [ESLint](https://eslint.org/) with `react-hooks` and `react-refresh` plugins |

## 📁 Project Structure

```
edustiy/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images and static resources
│   ├── components/
│   │   ├── Navbar.jsx      # Top navigation bar
│   │   ├── Hero.jsx        # Landing hero section
│   │   ├── Help.jsx        # Help / services section
│   │   ├── Howwork.jsx     # "How it works" section
│   │   ├── Team.jsx        # Team members
│   │   ├── Contact.jsx     # Contact section
│   │   └── Footer.jsx      # Page footer
│   ├── App.jsx             # Root component
│   ├── App.css             # App styles
│   ├── index.css           # Global styles
│   └── main.jsx            # React entry point
├── index.html              # HTML template
├── vite.config.js          # Vite configuration
├── eslint.config.js        # ESLint configuration
└── package.json            # Dependencies and scripts
```

> ✏️ Double-check the `components/` and `assets/` folder layout against your actual `src/` folder and adjust if needed.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v20.19 or newer (LTS recommended)
- npm (included with Node.js)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/khawllach/edustiy.git
   cd edustiy
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. Open the local URL shown in your terminal (usually <http://localhost:5173>).

## 📜 Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the development server with HMR |
| `npm run build` | Creates an optimized production build in `dist/` |
| `npm run preview` | Serves the production build locally for testing |
| `npm run lint` | Runs ESLint across the project |

## 🌐 Deployment

Build the project and deploy the generated `dist/` folder to any static hosting provider:

```bash
npm run build
```

Works great with [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/), [Cloudflare Pages](https://pages.cloudflare.com/) or [GitHub Pages](https://pages.github.com/).

## 🗺️ Roadmap

- [ ] Add a live demo link
- [ ] Connect the contact form to a backend or email service
- [ ] Add multilingual support
- [ ] Add dark mode

> ✏️ Edit this list to match your real plans, or remove the section.

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

1. Fork the project
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m "Add amazing feature"`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

Please run `npm run lint` before submitting a PR.

## 📄 License

This project is open source. Add a `LICENSE` file (for example MIT) to the repository and update this section accordingly.

## 👤 Author

**khawllach**

- GitHub: [@khawllach](https://github.com/khawllach)

---

<div align="center">

⭐ If you like this project, give it a star on GitHub!

</div>
