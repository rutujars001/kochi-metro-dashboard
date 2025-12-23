# 🚆 Metro Railway Operations Dashboard (Frontend)

A modern **React + Material UI** dashboard for metro railway operations, designed as a **Smart India Hackathon–style prototype**.  
This repository currently contains **only the frontend** (no backend/API integration yet).

---

## 📌 Project Overview

Metro systems generate large volumes of operational data: train fitness, maintenance jobs, branding campaigns, cleaning schedules, and stabling layouts. Much of this is scattered across **spreadsheets, PDFs, WhatsApp chats, and manual logbooks**.

**Metro Railway Operations Dashboard** brings these streams into a single, operator-friendly web interface focused on:

- Clear visual status of trains and operations  
- Quick decision support for managers  
- Modular pages for different operational domains  

**Primary users:**

- 🧑‍✈️ Metro operations managers  
- 🛠️ Maintenance and engineering teams  
- 🧹 Cleaning and detailing staff  
- 📢 Branding / advertising coordinators  
- 🎛️ Control room staff  

---

## ✨ Key Features (Frontend Prototype)

### 1. 🔐 Authentication & Layout

**Login Screen**

- Username/password form using Material UI components  
- Demo-only login logic (no real authentication, local state only)

**Global Layout**

- `Topbar`  
  - 🌗 Light/Dark theme toggle  
  - 🌐 Language selector (e.g., English, Malayalam, Hindi, Tamil)  
  - 🚪 Logout button (logs out by toggling frontend `isLoggedIn` state)

- `Sidebar`  
  - Navigation links to **Dashboard**, **Input Upload**, **Train Audit**, and planned modules  
  - Icon-based, persistent layout suited for control room usage  

---

### 2. 📊 Dashboard

Central overview page with:

**Stat Cards**

- ✅ Trains ready for service  
- ⚠️ Active maintenance alerts  
- 📅 Advertising deadlines  
- 💹 System health / uptime  

**Quick Action Cards**

Shortcuts to:

- 📈 Data Prediction (placeholder)  
- 🧰 Maintenance Hub (concept)  
- 🚉 Train Audit  
- 🛏️ Stabling Status (concept)  

**Context Panels**

- 📌 Today’s operational priorities  
- 🛰️ High-level system status  
- 👋 Login / welcome message  

---

### 3. 📥 Input Upload Page

Unified interface to simulate ingestion of multiple data sources.

**Supported Categories**

- 📄 **Logbook** – PDF maintenance logs  
- 💬 **WhatsApp Messages** – exported text chats  
- 📑 **Spreadsheet Data** – CSV/Excel reports and schedules  
- ⚡ **IoT Sensor Data** – structured telemetry

**UI Behaviour (Frontend Only)**

- Each category card shows:
  - Icon, title, concise description  
  - “Choose File” button (with relevant `accept` filters when applicable)  
  - Selected filename preview  

- **“Send Input”** button:
  - Simulates upload by adding selected files to an **Uploaded Files** list  
  - Uses MUI **Snackbar** to show success or error messages  

> 🔗 No files are actually sent to a server. This is a **UX prototype** ready to be connected to a backend.

---

### 4. 🚉 Train Audit Page

Dedicated view for inspecting train-level operational data.

**Fleet Overview (Left Panel)**

- Search bar to filter by train ID or name  
- Train list with each row showing:
  - 🆔 Train ID and name  
  - 🧾 Fitness status (**Valid**, **Due Soon**, **Expired**) via color-coded Chips  
  - 🧰 Pending jobs count  
  - 📏 Mileage  
  - 📍 Bay allocation  
  - 🟢 Overall status (e.g., **Active**, **Maintenance**) via Chips  
- Row hover and selected-row highlighting for better UX  
- Visibility icon indicating detailed inspection

**Train Details (Right Panel)**

- Large icon and heading with selected train ID + name  
- Summary: mileage, bay, fitness status, current status  
- Chips for **Fitness** and **Status**  
- Pending jobs count and key attributes  
- Placeholder **“View Full Profile”** button for future deep dive

---

## 🧩 Planned / Designed Modules (Concept)

These modules follow the same UI patterns but may be partially implemented or only planned in this repo.

### 🛡️ Fitness Certificates

- Table columns:
  - Train ID  
  - Status (Valid / Expired / Due Soon – colored Chip)  
  - Expiry Date  
  - Certificate Type (Annual / Monthly / Quarterly)  
  - Risk Level (Low / Medium / High – colored Chip)  

- Summary cards:
  - Total Valid  
  - Total Due Soon  
  - Total Expired  

---

### 🧾 Job-Card Status

- Table columns:
  - Job ID  
  - Train  
  - Work Type (Brake System, Engine Check, Cleaning, etc.)  
  - Status (Open / Closed / In Progress – colored Chip)  
  - Priority (High / Medium / Low – colored Chip)  
  - Assigned Team  

- Filters:
  - By Status  
  - By Priority  
  - By Team  

---

### 📢 Branding Priorities

- Campaign management table:
  - Campaign Name  
  - Train  
  - Status (Active / Expired / Scheduled – Chip)  
  - Expiry Date  
  - Revenue generated  

- Capabilities:
  - Sort by expiry date  
  - Filter by status  

---

### 📉 Mileage Balancing

- Table columns:
  - Train ID  
  - Current Mileage  
  - Target Mileage  
  - Variance (e.g., `+3.5%`, `-2.1%`)  
  - Efficiency (High / Normal / Low – Chip/label)  

---

### 🧼 Cleaning & Detailing

- Table columns:
  - Train ID  
  - Bay (location)  
  - Time (date/time slot)  
  - Status (Completed / In Progress / Pending – Chip)  
  - Cleaning Type (Deep Clean / Standard / Quick Turnaround)  

---

### 🛏️ Stabling Geometry

- Table columns:
  - Train ID  
  - Bay (location)  
  - Position (Platform Side / Maintenance / Storage)  
  - Occupied Since  
  - Departure Time  
  - Status (Occupied / Available – Chip)  

---

## 🛠️ Tech Stack

**Frontend**

- ⚛️ React  
- 🌐 React Router  
- 🎨 Material UI (MUI):
  - Layout: `Box`, `Grid`, `Paper`, `AppBar`, `Toolbar`  
  - Inputs: `Button`, `Menu`, `Snackbar`, `TextField` (where used)  
  - Display: `Typography`, `Chip`, `Card`  
  - Icons: `@mui/icons-material`  

**State Management**

- React Hooks: `useState`, `useMemo`  
- `isLoggedIn` for demo auth gating (no real tokens/sessions)

**Theme & Language**

- MUI `createTheme` for light/dark mode  
- Simple `translations` map (in `locales`) for label localization

**Backend**

- 🚫 Not implemented in this repo  
- No real API, database, or auth backend yet  

---

## 📂 Project Structure (High Level)

```text
src/
App.js # Main entry: routing, theme, login logic
locales/
index.js # Translation strings and language map (t)
pages/
Login.jsx # Login screen
Dashboard.jsx # Main overview dashboard
InputUpload.jsx # Upload UI for multiple data types
TrainAudit.jsx # Train audit/fleet overview page
DataPrediction.jsx # Placeholder analytics page
MLAnalysis.jsx # Placeholder ML page
Simulation.jsx # Placeholder simulation page
components/
Topbar.jsx # Header with theme toggle, language select, logout
Sidebar.jsx # Left navigation drawer
StatCard.jsx # Stat/metric cards used on dashboard
ActionCard.jsx # Quick action cards for navigation
```

---

## 🚀 Getting Started

### ✅ Prerequisites

- Node.js (LTS recommended)  
- npm or yarn  

### 🔧 Setup & Run

## 1. Clone the repository
git clone <your-repo-url>.git
cd <your-repo-folder>

## 2. Install dependencies
npm install

## 3. Start the development server
npm start

## 4. Open in browser
http://localhost:3000


### 🔑 Demo Login

(If using the sample login in `Login.jsx`)

- **Username:** `admin`  
- **Password:** `railway123`  

> This only updates frontend state and is **not secure or persistent**.

---

## ⚠️ Current Limitations

- **Frontend-only**: no backend, no DB, no live metro system connection  
- **Static demo data**: tables and stats are powered by hardcoded arrays  
- **No real auth**: login is simulated via `useState`  
- **No persistence**: data resets on page refresh  

Ideal for:

- 🎓 Academic projects  
- 💡 Hackathon demos  
- 🖥️ UI/UX showcases  

Not yet suitable for **production use**.

---

## 🧭 Roadmap & Future Enhancements

Potential next steps if you extend this project:

1. 🔗 **Backend Integration**
   - Node.js/Express or Django REST API  
   - PostgreSQL/MySQL for persistence  

2. 🛡️ **Production-Grade Auth**
   - JWT-based authentication  
   - Role-based access control (admin, ops, maintenance, branding, cleaning)

3. 📡 **Real Data Integration**
   - IoT sensor streams for stabling and condition monitoring  
   - Automated pipelines for PDFs, chats, and spreadsheets  

4. 🤖 **Advanced Analytics**
   - Predictive maintenance and downtime forecasting  
   - Cleaning and stabling optimization based on usage patterns  

5. 📈 **Visualization & Mapping**
   - Charts/graphs for KPIs and trends  
   - Yard/stabling map views for spatial planning  

---

## 🤝 Contributing / Forking

This repo is primarily a **showcase / prototype**.

You can:

- 🍴 Fork it and integrate your preferred backend  
- 🔁 Replace mocked data with real APIs  
- 🧩 Add new modules or extend existing ones (filters, charts, reports)  

If you harden it for production, remember to add:

- Robust auth & authorization  
- Proper error handling and logging  
- Accessibility improvements and responsive design checks  

---

## 📜 Disclaimer

This project is a **frontend prototype** intended for **demonstrations, academic use, and hackathon screening**.  
It is **not an official metro operator system** and must not be used for real-world operational decision-making without a proper backend, security audits, and reliability engineering.
