🚆 Metro Railway Operations Dashboard (Frontend)
A modern React + Material UI dashboard for metro railway operations, designed as a Smart India Hackathon–style prototype.
This repository currently contains only the frontend (no backend/API integration yet).

📌 Project Overview
Metro systems generate huge amounts of operational data: train fitness, maintenance jobs, branding campaigns, cleaning schedules, and stabling layouts. A lot of this still lives in spreadsheets, PDFs, WhatsApp chats, and manual logbooks.

Metro Railway Operations Dashboard brings these streams into a single, operator-friendly web interface. The focus is on clear visualization, quick status checks, and modular pages for different operational functions.

Primary users:

🧑‍✈️ Metro operations managers

🛠️ Maintenance and engineering teams

🧹 Cleaning and detailing teams

📢 Branding / advertising coordinators

🎛️ Control room staff

✨ Key Features (Frontend Prototype)
1. 🔐 Authentication & Layout
Login Screen

Simple username/password form using Material UI.

Demo-only login logic (no real authentication).

Global Layout

Topbar with:

🌗 Light/Dark theme toggle.

🌐 Language selector (e.g., English, Malayalam, Hindi, Tamil).

🚪 Logout button (toggles frontend login state).

Sidebar navigation:

Links to Dashboard, Input Upload, Train Audit, and other planned modules.

Icon-based, persistent layout suitable for control room usage.

2. 📊 Dashboard
Central overview page with:

Stat Cards

✅ Trains ready for service.

⚠️ Active maintenance alerts.

📅 Advertising deadlines.

💹 System health / uptime.

Quick Action Cards

Shortcuts to:

📈 Data Prediction (placeholder)

🧰 Maintenance Hub (concept)

🚉 Train Audit

🛏️ Stabling Status (concept)

Context Panels

📌 Today’s operational priorities.

🛰️ High-level system status.

👋 Login/welcome message area.

The goal is a “one glance” network health view for managers.

3. 📥 Input Upload Page
A unified interface for ingesting different types of operational data sources.

Categories:

📄 Logbook
For PDF maintenance logs.

💬 WhatsApp Messages
For exported text-based chats.

📑 Spreadsheet Data
For CSV/Excel schedules and reports.

⚡ IoT Sensor Data
For structured telemetry and readings.

Behaviors (Frontend-only):

Each card includes:

Icon, title, short description.

“Choose File” button with per-type file acceptance.

Selected file name preview.

“Send Input” button:

Simulates upload by listing selected files in an Uploaded Files panel.

Uses a MUI Snackbar for success/error notifications.

❗ No actual network requests yet – this is a UI/UX prototype ready to be wired to APIs later.

4. 🚉 Train Audit Page
A focused view for train-level operational audits.

Left: Fleet Overview

Searchable list of trains, each row showing:

🆔 Train ID and name.

🧾 Fitness status (Valid, Due Soon, Expired) via color-coded MUI Chips.

🧰 Pending maintenance jobs count.

📏 Mileage.

📍 Bay allocation.

🟢 Overall status (Active / Maintenance) via colored chips.

Row hover effect and selected-row highlighting.

Visibility icon to indicate more details.

Right: Train Detail Panel

Displays details for the currently selected train:

Large train icon and title.

Mileage and bay.

Fitness and status chips.

Pending jobs and key metadata.

Placeholder “View Full Profile” button for deeper drill-down in future.

This page establishes a reusable pattern: table/grid on one side, detail/intelligence panel on the other.

🧩 Planned / Designed Modules (Concept Only)
These modules are in the design scope and can be implemented as additional pages following the current UI patterns.

🛡️ Fitness Certificates

Table columns:

Train ID

Certificate Status (Valid / Expired / Due Soon – colored chip)

Expiry Date

Certificate Type (Annual / Monthly / Quarterly)

Risk Level (Low / Medium / High – colored chip)

Summary cards: counts of valid, due soon, and expired certificates.

🧾 Job-Card Status

Table columns:

Job ID

Train

Work Type (Brake System, Engine Check, Cleaning, etc.)

Status (Open / Closed / In Progress – colored chip)

Priority (High / Medium / Low – colored chip)

Assigned Team

Filters by status, priority, and team.

📢 Branding Priorities

Campaign management table:

Campaign Name

Train

Status (Active / Expired / Scheduled – colored chip)

Expiry Date

Revenue generated

Sorting and filtering by status and expiry.

📉 Mileage Balancing

Table with:

Train ID

Current Mileage

Target Mileage

Variance (% positive/negative)

Efficiency level (High / Normal / Low – label/chip)

🧼 Cleaning & Detailing

Schedule table:

Train ID

Bay (location)

Date/time slot

Status (Completed / In Progress / Pending – chip)

Cleaning Type (Deep Clean / Standard / Quick Turnaround)

🛏️ Stabling Geometry

Yard/platform occupancy view:

Train ID

Bay (location)

Position (Platform Side / Maintenance / Storage)

Occupied Since

Departure Time

Status (Occupied / Available – chip)

All modules follow common UI guidelines:

MUI Paper/Card containers

Clear headings and subheadings

Color-coded Chips for state and priority

Sticky table headers and row hover effects

Optional summary analytics cards

🛠️ Tech Stack
Frontend

⚛️ React

🌐 React Router

🎨 Material UI (MUI) for:

Layout: Box, Grid, Paper, AppBar, Toolbar

Inputs: TextField, Button, Menu, Snackbar

Display: Typography, Chip, Card

Icons: @mui/icons-material

State Management

React Hooks: useState, useMemo, etc.

Local isLoggedIn state for demo authentication gating.

Internationalization & Theme

translations map for multi-language labels (stored in locales).

MUI createTheme for light/dark mode toggle.

Backend

❌ Not implemented in this repository.

No database, REST APIs, or real auth yet.

📂 Project Structure (High Level)
text
src/
  App.js                 # Main entry: routing, theme, login state
  locales/
    index.js             # Translation strings (t object)
  pages/
    Login.jsx            # Login screen
    Dashboard.jsx        # Primary overview dashboard
    InputUpload.jsx      # Multi-source upload UI
    TrainAudit.jsx       # Train-level audit UI
    DataPrediction.jsx   # Placeholder for analytics module
    MLAnalysis.jsx       # Placeholder for ML module
    Simulation.jsx       # Placeholder for simulation module
  components/
    Topbar.jsx           # Header with theme toggle, language, logout
    Sidebar.jsx          # Navigation sidebar
    StatCard.jsx         # Metric/stat cards
    ActionCard.jsx       # Quick action cards
🚀 Getting Started
✅ Prerequisites
Node.js (LTS recommended)

npm or yarn

🔧 Installation & Run
bash
# Clone the repository
git clone <your-repo-url>.git
cd <your-repo-folder>

# Install dependencies
npm install

# Start development server
npm start

# Visit in browser
http://localhost:3000
🔑 Demo Login
(If using the sample logic from Login.jsx)

Username: admin

Password: railway123

This simply updates frontend state and is not secure or persistent.

⚠️ Current Limitations
Frontend-only prototype
No backend, database, or integration with real metro systems.

Static/demo data only
Tables and stats are powered by hardcoded arrays.

No real authentication
Login is simulated using useState.

No persistence
Page refresh clears all “uploaded” data and selected items.

Perfect for UI/UX demos, academic work, and hackathon screening, but not production-ready yet.

🧭 Roadmap & Future Enhancements
Potential improvements if extended beyond prototype:

🔗 Backend Integration

Node.js/Express or Django REST.

PostgreSQL/MySQL for persistent storage.

🛡️ Real Authentication

JWT-based login.

Role-based access: admin, operations, maintenance, branding, cleaning.

📡 Live Data Integration

IoT feeds for stabling and sensor data.

Automated ingestion from logbook PDFs, WhatsApp exports, etc.

🤖 Analytics & ML

Predictive maintenance models.

Data-driven cleaning and stabling recommendations.

📈 Rich Visualizations

Charts for mileage balance, downtime, and revenue trends.

Yard/stabling map visualizations.

🤝 Contributing / Forking
This repo is primarily a showcase / hackathon-style prototype.

You’re welcome to:

🍴 Fork it and plug in your own backend.

🔁 Replace demo data with live APIs.

🧩 Add new modules or extend existing ones (filters, charts, admin tools, etc.).

If you turn this into a production-grade system, make sure to:

Harden auth and authorization.

Add robust error handling and logging.

Improve accessibility and cross-device responsiveness.

📜 Disclaimer
This project is a frontend prototype intended for demonstrations, academic projects, and hackathon screenings. It is not an official metro operator system and should not be used for real-world operational decisions without a proper backend, security hardening, and reliability guarantees.
