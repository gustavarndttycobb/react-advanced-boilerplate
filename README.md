# React Advanced Boilerplate ⚡️

> A production-ready, highly scalable React boilerplate with modern tools and best practices.

## 🚀 Features

- ⚛️ React 19 + TypeScript
- ⚡ Vite for fast builds and hot reload
- 🎨 Tailwind CSS for utility-first styling
- 🌐 React Router DOM for modular routing
- 🌍 Internationalization with react-i18next
- 📦 Global state management with Zustand
- 📚 Component documentation with Storybook and Chromatic
- 🧪 Unit and integration testing with Jest, Testing Library, Vitest, and MSW
- 🔌 Mocked APIs using MSW
- 🧼 Linting, formatting and Git hooks with ESLint, Prettier, and Husky
- 🐳 Docker Compose support
- 🧩 Modular and scalable project architecture

---

## 📦 Getting Started

### Requirements

- Node.js 22+
- npm v9+

### Install dependencies

```bash
npm install
````

### Start development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

---

## 🧪 Testing

Includes unit, integration, and browser-based testing support.

### Run tests

```bash
npm run test
```

---

## 📚 Component Documentation

Visual and interactive component documentation is available via Storybook.

### Start Storybook

```bash
npm run storybook
```

### Build Storybook

```bash
npm run build-storybook
```

---

## 🔌 API Mocking

Mock Service Worker (MSW) is configured to intercept and mock HTTP requests in both development and test environments.

---

## 🌍 Internationalization

The project supports multiple languages using `react-i18next`.

---

## 🧠 State Management

Zustand is used for minimal and scalable global state management.

---

## 🎨 Styling

Tailwind CSS is integrated with helper libraries such as:

* clsx
* class-variance-authority
* tailwind-merge
* tw-animate-css

Icon support via Lucide React and layout helpers via Radix UI Slot.

---

## 🧼 Code Quality

### Linting

```bash
npm run lint
```

### Fix lint issues

```bash
npm run lint:fix
```

### Code formatting

```bash
npm run format
```

---

## 🔐 Git Hooks

Git hooks are managed using Husky and automatically installed via the `prepare` script.

```bash
npm run prepare
```

---

## 🐳 Docker Support

Includes a basic `docker-compose.yml` setup to run the app in an isolated environment.

---

---

## 🧰 Available Scripts

| Script            | Description                     |
| ----------------- | ------------------------------- |
| `dev`             | Start dev server with Vite      |
| `build`           | Build for production            |
| `preview`         | Preview the production build    |
| `test`            | Run unit/integration tests      |
| `lint`            | Run ESLint                      |
| `lint:fix`        | Fix lint issues automatically   |
| `format`          | Format code with Prettier       |
| `storybook`       | Launch Storybook                |
| `build-storybook` | Generate static Storybook build |
| `prepare`         | Install Husky Git hooks         |

---

## ✅ Tech Stack Overview

| Category             | Tools / Libraries                                       |
| -------------------- | ------------------------------------------------------- |
| Framework            | React 19 + TypeScript                                   |
| Build Tool           | Vite                                                    |
| Styling              | Tailwind CSS, clsx, cva, tailwind-merge, tw-animate-css |
| Routing              | React Router DOM                                        |
| State Management     | Zustand                                                 |
| Internationalization | react-i18next                                           |
| Component Docs       | Storybook, Chromatic                                    |
| Testing              | Jest, Testing Library, MSW, Vitest, Playwright          |
| Code Quality         | ESLint, Prettier, Husky                                 |
| API Mocking          | MSW                                                     |
| Icons / UI Utils     | Lucide React, Radix UI Slot                             |

---

## 📄 License

MIT

---

## 🙌 Contributing

Feel free to fork, customize, and contribute to improve this boilerplate. Pull requests are welcome!

```

