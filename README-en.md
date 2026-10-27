<div align="center">
  <a href="README.md">KOR</a> | <strong>ENG</strong>
</div>

# ❖ React + Vite Boilerplate

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
[![CI Pipeline](https://img.shields.io/github/actions/workflow/status/pandemoniummm/react-vite-boilerplate/ci.yml?style=for-the-badge&label=CI%20Pipeline)](https://github.com/pandemoniummm/react-vite-boilerplate/actions)

A production-ready frontend boilerplate powered by React 19 & Vite.
Pre-configured with essential frontend infrastructure—including state management, network communication, routing, and a CI pipeline—optimized for stable deployment in static hosting environments.

## ⚙︎ Tech Stack

- **Core:** React 19, Vite 8, TypeScript
- **Styling:** Tailwind CSS v4 + `cn` utility (clsx + tailwind-merge)
- **Routing:** React Router v7
- **State & Data Management:**
  - Zustand
  - React Query / TanStack
  - Axios
- **Code Quality & Automation:**
  - ESLint v10 + Prettier (+ prettier-plugin-tailwindcss)
  - Husky + lint-staged
  - GitHub Actions
  - Renovate Bot

## ⚑ Architecture

### ◼︎ Declarative Async Handling (`AsyncBoundary`)

Inspired by Toss(SLASH) frontend architecture references, implemented a custom `AsyncBoundary` component that combines React Suspense and ErrorBoundary. By declaratively delegating loading and error states outside the component layer, it eliminates complex conditional logic (if-statements) and allows developers to focus entirely on business logic and UI rendering. Furthermore, it is **custom-designed to be highly modular, allowing developers to flexibly use only the Suspense or ErrorBoundary independently** when only one specific fallback state is needed, thereby maximizing component reusability.

### ◼︎ Separation of State Concerns (Client vs Server State)

Strictly separates the concerns of client and server states to prevent single-store bloat. Global client UI state is handled lightly with `Zustand`, while server-side data fetching and caching are entirely delegated to `React Query`, establishing a predictable and highly maintainable state flow.

### ◼︎ Array-based Routing

Utilizes React Router v7's `createBrowserRouter` to manage routes as an array of JavaScript objects rather than JSX components. This strictly separates route definitions from the View layer, improving readability and providing a highly scalable structure for future Lazy Loading and code splitting.

### ◼︎ Absolute Imports & Barrel Pattern

Configured absolute paths (`@/`) and the Barrel Pattern (`index.ts`) to maintain consistent and concise module import paths.

```tsx
import { Button, Modal } from '@/components';
```

All barrel files use `export *`, so components are written as named exports. (Exception: page components loaded with `React.lazy()` use default exports.)

### ◼︎ Maximized Developer Experience (DX): File Nesting

Applied VSCode's file nesting via `.vscode/settings.json` to logically group configuration files (e.g., `.prettierrc`, `vite.config.ts.timestamp-*`). This eliminates visual noise in the project root, providing a shared and minimalist workspace that keeps developers focused entirely on the core codebase.

### ◼︎ Automated Infrastructure

- **CI Pipeline**: Automates Lint and Build tests via GitHub Actions upon PR creation to maintain code quality.
- **Dependency Management**: Renovate bot detects package updates weekly and opens PRs. Minor and patch updates are auto-merged once CI passes; only major updates require manual review.
- **CD Pipeline (Intentionally Omitted)**: Not tied to any specific hosting platform. You can natively leverage the Auto Deployment systems of modern PaaS like Vercel, or freely configure a custom pipeline tailored to your project environment, such as AWS.

## 📁︎ Project Structure

```text
src/
├── api/            # Axios instance & interceptors
├── components/     # Shared UI components & AsyncBoundary
├── constants/      # Global constants & ENUM data
├── hooks/          # Custom React hooks
├── pages/          # Page-level components
├── router/         # Router configuration
├── store/          # Zustand global state store
├── types/          # TypeScript type definitions
├── utils/          # Utility functions (e.g. cn)
└── index.css       # Global CSS & Tailwind configuration
```

## ▶︎ Quick Start

> Requires **Node.js 20.19+ or 22.13+**

1. **Scaffold project**

```bash
npx degit https://github.com/pandemoniummm/react-vite-boilerplate.git [YOUR_PROJECT_NAME]
cd [YOUR_PROJECT_NAME]
```

2. **Install dependencies**

```bash
npm install
```

3. **Start local dev server**

```bash
npm run dev
```

> Default development env variables are included in `.env.development`, so no extra setup is required.
> Put values for your local environment only in `.env.development.local`. (ignored by git)

---

<div align="center">
  <p>
    <i>Built with a strict YAGNI philosophy.</i><br>
    <i>Focus on Core Logic · Maximize DX · Zero Over-engineering</i>
  </p>
  <p>
    &copy; 2026 <strong>pandemoniummm</strong>. All rights reserved.<br/>
    This project is licensed under the <a href="https://opensource.org/licenses/MIT">MIT License</a>.
  </p>
</div>

---
