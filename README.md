<p align="center">
  <img src="public/logo/quizzy_horizontal.png" alt="Quizzy" height="80" />
</p>

## Quizzy Frontend

A modern React + Vite frontend for the AI‑powered Quizzy platform. It provides student and teacher experiences for creating templates, generating assessments with AI, taking assessments, and reviewing submissions with helpful breakdowns and metric.

### <img src="public/logo/quizzy_logo.png" alt="" height="16" style="vertical-align:middle; margin-right:6px;" /> Tech Stack
- **Framework**: React 19, React Router 7
- **State**: Redux Toolkit, React‑Redux
- **Build**: Vite 6
- **Styling**: Tailwind CSS 4
- **UI/UX**: Tippy.js tooltip, Lucide icon, React Markdown
- **Linting**: ESLint 9

### <img src="public/logo/quizzy_logo.png" alt="" height="16" style="vertical-align:middle; margin-right:6px;" /> Requirements
- Node.js 18+ (LTS recommended)
- pnpm, npm, or yarn (examples below use npm)
- Backend API running locally at `http://localhost:3000/api` (configurable)

### <img src="public/logo/quizzy_logo.png" alt="" height="16" style="vertical-align:middle; margin-right:6px;" /> Getting Started
1. Install dependencies:
```bash
npm install
```
2. Start the dev server (HMR enabled):
```bash
npm run dev
```
3. Open the app:
- Vite will print a local URL (typically `http://localhost:5173`).

### <img src="public/logo/quizzy_logo.png" alt="" height="16" style="vertical-align:middle; margin-right:6px;" /> Available Scripts
- `npm run dev`: Start Vite dev server
- `npm run build`: Production build
- `npm run preview`: Preview the production build locally
- `npm run lint`: Run ESLint

### <img src="public/logo/quizzy_logo.png" alt="" height="16" style="vertical-align:middle; margin-right:6px;" /> Environment Configuration
The frontend selects the API base URL in this order:
1. `VITE_API_URL` (from `.env`)
2. If running on `localhost`/`127.0.0.1`: `http://localhost:3000/api`
3. Otherwise: `https://quizzy-the-ai-powered-app-backend.onrender.com/api`

Implementation:
```javascript
const getDefaultBaseUrl = () => {
  const isBrowser = typeof window !== "undefined";
  const hostname = isBrowser ? window.location.hostname : "";
  const isLocal = hostname === "localhost" || hostname === "127.0.0.1";
  return isLocal
    ? "http://localhost:3000/api"
    : "https://quizzy-the-ai-powered-app-backend.onrender.com/api";
};

export const BASE_URL = (import.meta.env.VITE_API_URL?.trim()) || getDefaultBaseUrl();
```

Set a local override by creating `.env` in the `frontend/` folder:
```bash
# .env
VITE_API_URL=http://localhost:3000/api
```

Deployed backend (default): [`https://quizzy-the-ai-powered-app-backend.onrender.com`](https://quizzy-the-ai-powered-app-backend.onrender.com)

### <img src="public/logo/quizzy_logo.png" alt="" height="16" style="vertical-align:middle; margin-right:6px;" /> Project Structure
Key directories and files:
- `src/main.jsx`: App bootstrap with Redux store provider
- `src/App.jsx`: Top‑level routes and lazy‑loading
- `src/routes/`: Route definitions for student/teacher flows
- `src/components/`: Reusable UI components (tables, inputs, question renders, layouts)
- `src/pages/`: Page‑level views for dashboards, assessments, submissions
- `src/store/`: Redux slices, actions, and RTK setup for app state
- `src/constants/`: API endpoints and shared constants
- `src/utils/`: Utility helpers (formatting, calculations)

### <img src="public/logo/quizzy_logo.png" alt="" height="16" style="vertical-align:middle; margin-right:6px;" /> Routing
Routing is configured with React Router and lazy loading:
```jsx
// src/App.jsx
<Route path="/" element={<Home />} />
<Route element={<TeacherLayout />}>{teacherRoutes.map(generateRouteComponent)}</Route>
<Route element={<StudentLayout />}>{studentRoutes.map(generateRouteComponent)}</Route>
<Route path="*" element={<NotFoundPage />} />
```
- `teacherRoutes` and `studentRoutes` provide feature routes under their respective layouts.

### <img src="public/logo/quizzy_logo.png" alt="" height="16" style="vertical-align:middle; margin-right:6px;" /> State Management
- Uses Redux Toolkit slices under `src/store/features/` for:
  - `assesments` (create, fetch, take, submit)
  - `template` (create templates, manage question types)
  - `submissions` (list and detail views)
  - `common` (layout, sidebar state)
- Actions and selectors are organized by feature for clarity and scalability.

### <img src="public/logo/quizzy_logo.png" alt="" height="16" style="vertical-align:middle; margin-right:6px;" /> Styling
- Tailwind CSS v4 is configured via the Vite Tailwind plugin.
- Global styles live in `src/index.css`.

### <img src="public/logo/quizzy_logo.png" alt="" height="16" style="vertical-align:middle; margin-right:6px;" /> API
- Base exports in `src/constants/api/index.js`:
  - `BASE_URL`
  - Template APIs: `templates.js`
  - Assessment APIs: `assessments.js`
  - Submission APIs: `submissions.js`
- The frontend expects the backend to expose routes under `/api`.

### <img src="public/logo/quizzy_logo.png" alt="" height="16" style="vertical-align:middle; margin-right:6px;" /> Development Tips
- Prefer lazy‑loading pages to keep initial bundles small.
- Keep UI elements in `components/common` and domain UIs under feature folders.
- Use selectors from `store/features/*/selectors` to keep components lean.

### <img src="public/logo/quizzy_logo.png" alt="" height="16" style="vertical-align:middle; margin-right:6px;" /> Production Build
Create an optimized build:
```bash
npm run build
```
Preview the built app locally:
```bash
npm run preview
```
Deploy the contents of `dist/` to your static host (e.g., Netlify, Vercel, S3 + CloudFront).

### <img src="public/logo/quizzy_logo.png" alt="" height="16" style="vertical-align:middle; margin-right:6px;" /> Customization
- **API URL**: Change `BASE_URL` or switch to `VITE_API_URL` env var.
- **Branding**: Replace assets in `public/logo/`.
- **Navigation**: Adjust `src/routes/studentRoutes.js` and `src/routes/teacherRoutes.js`.

### <img src="public/logo/quizzy_logo.png" alt="" height="16" style="vertical-align:middle; margin-right:6px;" /> Troubleshooting
- Port in use: change the Vite dev port via `vite --port 5174` or Vite config.
- CORS errors: ensure the backend enables CORS for the frontend origin.
- Blank page after build: verify correct base path in hosting and no mixed‑content issues.

### <img src="public/logo/quizzy_logo.png" alt="" height="16" style="vertical-align:middle; margin-right:6px;" /> License
This frontend is part of the Quizzy project. See the repository root `README.md` for overall licensing and contribution guidelines.
