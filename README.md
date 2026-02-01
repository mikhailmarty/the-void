# Mikhail's Atmospheric Workspace

A highly optimized, aesthetically driven personal portfolio and digital workspace built with **React**, **Vite**, and **Tailwind CSS**. Designed with an atmospheric glassmorphism aesthetic, featuring a unified design language, responsive layout, and performance-first architecture.

<div align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Vite-6-646CFF?style=flat&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=flat&logo=tailwind-css&logoColor=white" alt="Tailwind" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript&logoColor=white" alt="TypeScript" />
</div>

## ✨ Features

*   **Atmospheric Design:** Deep space aesthetic with glassmorphism cards, subtle gradients, and a unified visual style.
*   **Performance Optimized:** "Baked" blur effects and static rendering for maximum FPS on mobile and low-end devices. Minimized runtime animations.
*   **Fully Responsive:** Adaptive grid layouts (`2-col` mobile, `4-col` desktop), smart text clamping, and touch-friendly interfaces.
*   **Bilingual Support:** Built-in English/Russian language switcher with context-based translations.
*   **Self-Hosted Dashboard:** A visual command center showcasing self-hosted services (Nextcloud, Pterodactyl, etc.).
*   **Dark Mode Native:** Enforced dark theme with `color-scheme` and `darkreader-lock` meta tags to preserve the intended design against browser extensions.

## 🛠️ Tech Stack

*   **Frontend:** React 19, TypeScript
*   **Build Tool:** Vite
*   **Styling:** Tailwind CSS, custom CSS variables for glass effects
*   **Icons:** Lucide React
*   **Animation:** Framer Motion (Optimized usage)
*   **Containerization:** Docker, Nginx

## 🚀 Quick Start

### Prerequisites

*   Node.js 20+
*   npm

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/mikhailmarty/the-void.git
    cd the-void
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run development server:**
    ```bash
    npm run dev
    ```
    Open `http://localhost:3000` in your browser.

## 🐳 Docker Deployment

This project includes a production-ready Docker setup serving static assets via Nginx.

1.  **Build and Run:**
    ```bash
    docker-compose up -d --build
    ```

2.  **Access:**
    The site will be available at `http://localhost:8080`.

## 📂 Project Structure

```
/
├── components/       # UI Components (Hero, Dashboard, etc.)
├── context/          # React Context (Language)
├── i18n/             # Translations (EN/RU)
├── assets/           # Static images
├── public/           # Public assets
├── services/         # API services (if any)
└── Dockerfile        # Container configuration
```

## 🎨 Design Philosophy

*   **Simplicity is the ultimate sophistication.**
*   **Static over Dynamic:** Prioritizing visual stability and performance over heavy motion effects.
*   **Unified Style:** Consistent stroke widths (`1.5px`), padding, and "glass" material properties across all elements.

---

<div align="center">
    Created by <a href="https://github.com/mikhailmarty">Mikhail Martynenko</a>
</div>