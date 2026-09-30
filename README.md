# Shahad Shameem V.P — Engineering Portfolio

[![Deploy to GitHub Pages](https://github.com/shahadshameem/shahadshameem.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/shahadshameem/shahadshameem.github.io/actions/workflows/deploy.yml)
[![Live Site](https://img.shields.io/badge/Live_Site-shahadshameem.github.io-0284c7?style=flat&logo=googlechrome&logoColor=white)](https://shahadshameem.github.io)
[![Tech Stack](https://img.shields.io/badge/Stack-React_19_•_TypeScript_•_Tailwind_v4_•_Vite-0ea5e9)](https://react.dev)

A modern, high-performance portfolio website built with **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Vite**, featuring a clean studio aesthetic and interactive engineering tools.

---

## ⚡ Key Highlights & Features

- **Interactive Hardware CLI Terminal**: Embedded shell simulation (`shahad@cet-node:~$`) with command history, quick-run suggestion chips, firmware inspect (`cat lora.c`), telemetry testing (`ping 1.2km`), and project inspect (`cat waymate.md`).
- **Interactive Project Filtering**: Filter projects by **All (5)**, **Embedded & IoT (3)**, and **Web & Cloud Platforms (2)**.
- **Architecture Deep-Dive Modal**: Detailed lightbox displaying ASCII system topology pipelines, problem vs. solution analysis, key telemetry metrics, and source links.
- **Shipped Work Showcase**:
  1. **LoRa Fault-Tolerant Weather Monitoring System**: Dual-brain STM32 + ESP32 WSN with the Survivor Failover Protocol (>1.2 km range).
  2. **WayMate**: Campus ride-sharing & cab-pooling PWA for verified CET students with Firestore transactional seat reservations ([Live App](https://waymate-u.web.app/)).
  3. **Biometric Attendance System**: Fingerprint authentication with cloud spreadsheet logging via Google Sheets API.
  4. **IoT Smart Home Automation**: Wi-Fi appliance control with ESP8266 and Blynk IoT.
  5. **ICC CET Mess Management**: Student registration, meal opt-outs, and monthly billing platform.
- **Quick-Copy Contact Affordance**: One-click clipboard copy for email and phone with visual toast notification.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVGs
- **Deployment**: [GitHub Pages](https://pages.github.com/) via GitHub Actions (`.github/workflows/deploy.yml`)

---

## 🚀 Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/shahadshameem/shahadshameem.github.io.git
   cd shahadshameem.github.io
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start local development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 🌐 GitHub Pages Deployment

The repository includes a pre-configured automated GitHub Actions workflow at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

To ensure the automatic deployment runs smoothly:
1. Open your repository on GitHub: `https://github.com/shahadshameem/shahadshameem.github.io`
2. Navigate to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. Every push to `main` will automatically build and deploy the production bundle to `https://shahadshameem.github.io`.

*(Note: The `/docs` folder is also pre-built as a secondary fallback if deploying from the `main` branch `/docs` folder).*

---

© 2026 Shahad Shameem V.P. All rights reserved.
