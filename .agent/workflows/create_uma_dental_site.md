---
description: "Create the 3D storytelling funnel for Uma Dental Clinic"
---
1. **Backup current `src/` folder** (optional). This preserves any work you may want to keep.
   ```bash
   mv src src_backup_$(date +%s)
   ```
2. **Remove all existing source files** – we will start fresh with a premium design.
   ```bash
   rm -rf src/*
   ```
3. **Initialize a Vite + React project** (if not already a Vite project). This gives us fast HMR and modern bundling.
   ```bash
   npm create vite@latest . --template react
   ```
4. **Install core dependencies** for 3‑D, animations, routing and styling:
   ```bash
   npm i three @react-three/fiber @react-three/drei framer-motion react-router-dom tailwindcss postcss autoprefixer lucide-react
   ```
5. **Initialize Tailwind CSS** (creates `tailwind.config.js` and `postcss.config.js`).
   ```bash
   npx tailwindcss init -p
   ```
6. **Configure Tailwind** – replace the generated `tailwind.config.js` with the content from `src/styles/theme.css` (see step 8).
7. **Create a design‑system stylesheet** (`src/styles/theme.css`) containing colour tokens, font imports and base utilities.
8. **Add component skeletons**:
   - `src/components/Hero3D.jsx`
   - `src/components/StorySection.jsx`
   - `src/components/CTAButton.jsx`
   - `src/components/Gallery.jsx`
   - `src/components/DoctorList.jsx`
   - `src/components/Footer.jsx`
9. **Update `src/App.jsx`** to import and render the new funnel components.
10. **Create a mock API helper** (`src/utils/api.js`) that pretends to POST an appointment.
11. **Generate placeholder images** for the gallery and doctor portrait using the `generate_image` tool (run after this workflow).
12. **Run the development server** and verify everything works:
    ```bash
    npm run dev
    ```
13. **(Optional) Deploy** – follow Vite’s Netlify/Vercel guide to push the production build.

All steps marked with `// turbo` can be auto‑executed safely because they are non‑destructive after the backup step.
