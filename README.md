# 🚇 Metro Railway Operations Dashboard (Frontend)

A modern **React + Material UI** dashboard designed as a **Smart India Hackathon–style prototype** for metro railway operations.  
This repository contains a **frontend-only implementation** focused on UI/UX, visualization, and modular operational workflows.

---

## 📌 Overview

Metro railway systems generate large volumes of operational data such as maintenance logs, train fitness records, cleaning schedules, branding campaigns, and stabling layouts.  
In many cases, this data is fragmented across spreadsheets, PDFs, chat exports, and manual logbooks.

The **Metro Railway Operations Dashboard** consolidates these streams into a **single, operator-friendly web interface**, enabling faster decision-making and improved situational awareness.

**Primary Users**
- Metro Operations Managers  
- Maintenance & Engineering Teams  
- Cleaning & Detailing Teams  
- Branding / Advertising Coordinators  
- Control Room Staff  

---

## 🛠️ Tech Stack

**Frontend**
- React
- React Router
- Material UI (MUI)

**State Management**
- React Hooks (`useState`, `useMemo`)

**UI Capabilities**
- Light / Dark theme toggle
- Multi-language support using translation maps

**Backend**
- ❌ Not implemented (frontend prototype only)

---

## ✨ Key Features (Frontend Prototype)

### 🔐 Authentication & Layout
- Demo login screen built with Material UI components.
- Global layout including:
  - Topbar (theme toggle, language selector, logout)
  - Sidebar navigation for all modules
- Optimized layout for control room and large-screen environments.

---

### 📊 Dashboard
A centralized overview providing a “one-glance” view of metro operations:
- Stat cards showing train readiness, alerts, deadlines, and system health
- Quick action cards for fast navigation
- Context panels for daily priorities and system messages

---

### 📤 Input Upload Module
Unified interface for ingesting multiple operational data sources:
- Maintenance logbooks (PDF)
- WhatsApp chat exports (text)
- Spreadsheets (CSV / Excel)
- IoT sensor data (structured inputs)

**Frontend Behavior**
- File selection previews
- Simulated upload workflow
- Snackbar-based success and error feedback
- No real network or API calls (UI/UX prototype)

---

### 🚆 Train Audit Module
A focused view for train-level operational audits.

**Fleet Overview Panel**
- Searchable train list
- Fitness status, pending jobs, mileage, bay allocation
- Color-coded status indicators using MUI Chips

**Train Detail Panel**
- Detailed information for selected trains
- Fitness, operational status, metadata, and placeholders for deeper analytics

---

## 🧩 Planned Modules (Conceptual / Partial)

Designed UX modules that may be partially implemented or planned:
- Fitness Certificates Management
- Job-Card and Maintenance Tracking
- Branding and Advertising Campaigns
- Mileage Balancing
- Cleaning and Detailing Schedules
- Stabling Geometry and Yard Occupancy

All modules follow consistent UI principles:
- Sticky-header MUI tables
- Color-coded chips and labels
- Summary cards and filters

---

## 👩‍💻 My Contribution

- Designed and developed the **complete frontend architecture**
- Implemented responsive layouts using **Material UI**
- Built reusable UI components and layouts
- Focused on **operator-friendly UX** for metro control room environments
- Worked as **Frontend Developer** in a hackathon team setting

---

## 📁 Project Structure (High Level)

```text
src/
  App.js               # Routing, theme, and login state
  locales/             # Translation strings
  pages/               # Application pages
  components/          # Reusable UI components

▶️ Getting Started
Prerequisites

Node.js (LTS version recommended)

npm or yarn

Installation & Run
git clone <repository-url>
cd <project-folder>
npm install
npm start


Open in browser:
👉 http://localhost:3000

Demo Login

Username: admin

Password: railway123

(Demo-only authentication)

🚧 Current Limitations

Frontend-only prototype

Static / demo data

No real authentication or persistence

No backend or database integration

🧭 Future Enhancements

Backend integration (Node.js / REST APIs)

JWT-based authentication and role-based access control

Live IoT data ingestion

Predictive maintenance and ML analytics

Advanced visualizations and yard / stabling mapping

📌 Disclaimer

This project is a hackathon-style frontend prototype intended for demonstrations, academic evaluation, and UI/UX showcasing.
It is not a production-ready metro operations system.
