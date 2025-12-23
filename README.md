Metro Railway Operations Dashboard (Frontend)
A modern React + Material UI dashboard for metro railway operations, designed as a Smart India Hackathon–style prototype.
This repository currently contains only the frontend (no backend/api integration yet).

🚆 Project Overview
Metro systems generate huge amounts of operational data: train fitness, maintenance jobs, branding campaigns, cleaning schedules, and stabling layouts. Today, much of this is scattered across spreadsheets, PDFs, WhatsApp chats, and manual logbooks.

Metro Railway Operations Dashboard brings these streams into a single, operator-friendly web interface. It focuses on clear visualization, quick status checks, and modular pages for different operational functions.

Primary users:

Metro operations managers

Maintenance and engineering teams

Cleaning and detailing teams

Branding / advertising coordinators

Control room staff

✨ Key Features (Frontend Prototype)
1. Authentication & Layout
Login Screen

Simple username/password form with Material UI components.

Demo-only login logic (no real authentication yet).

Global Layout

Topbar with:

Light/Dark theme toggle.

Language selector (e.g., English, Malayalam, Hindi, Tamil).

Logout button (toggles frontend login state).

Sidebar navigation:

Links to Dashboard, Input Upload, Train Audit, and other planned modules.

Icon-based, persistent layout suitable for control room usage.

2. Dashboard
Central overview page with:

Stat Cards

Trains ready for service.

Active maintenance alerts.

Advertising deadlines.

System health / uptime.

Quick Action Cards

Shortcut navigation to:

Data Prediction (placeholder)

Maintenance Hub (concept)

Train Audit

Stabling Status (concept)

Context Panels

Today’s operational priorities.

High-level system status.

Login/welcome message area.

This page gives managers a “one glance” view of network health.

3. Input Upload Page
A unified interface for ingesting different kinds of operational data sources.

Categories:

Logbook

For PDF maintenance logs.

WhatsApp Messages

For exported text-based chats.

Spreadsheet Data

For CSV/Excel–based schedules and reports.

IoT Sensor Data

For structured telemetry and readings.

Behaviors (Frontend-only):

Each card shows:

Icon, title, description.

“Choose File” button with per-type file acceptance where applicable.

Selected file name preview.

“Send Input” button:

Simulates upload by listing selected files in an “Uploaded Files” panel.

Uses a MUI Snackbar for success/error notifications.

No actual network requests are sent; this is a UI/UX prototype to be wired to an API later.

4. Train Audit Page
A focused view for train-level operational audits.

Left: Fleet Overview

Searchable list of trains, each row showing:

Train ID and name.

Fitness status (Valid, Due Soon, Expired) via color-coded MUI Chips.

Pending maintenance jobs count.

Mileage.

Bay allocation.

Overall status (Active, Maintenance) via colored chips.

Hover effect and visual selection state.

Inline visibility icon to indicate more details.

Right: Train Detail Panel

Displays details for the currently selected train:

Large train icon and title.

Mileage and bay.

Fitness and status chips.

Pending jobs and key metadata.

Placeholder “View Full Profile” button (for future expansion to deeper drill-down).

This page demonstrates the pattern for all future modules: table/grid on one side, detail/intelligence panel on the other.

📦 Planned / Designed Modules (Concept Only)
These modules are defined in the UX/design but may be partially implemented or still to be developed:

Fitness Certificates

Table with:

Train ID

Certificate Status (Valid / Expired / Due Soon – colored chip)

Expiry Date

Certificate Type (Annual / Monthly / Quarterly)

Risk Level (Low / Medium / High – colored chip)

Summary cards: count of valid, due soon, expired certificates.

Job-Card Status

Table with:

Job ID

Train

Work Type (Brake System, Engine Check, Cleaning, etc.)

Status (Open / Closed / In Progress – colored chip)

Priority (High / Medium / Low – colored chip)

Assigned Team

Filters by status, priority, and team.

Branding Priorities

Campaign management table:

Campaign Name

Train

Status (Active / Expired / Scheduled – colored chip)

Expiry Date

Revenue generated

Sorting and filtering by status and expiry.

Mileage Balancing

Table tracking:

Train ID

Current Mileage

Target Mileage

Variance (% positive/negative)

Efficiency level (High / Normal / Low – label/chip)

Cleaning & Detailing

Schedule table:

Train ID

Bay (location)

Date/time slot

Status (Completed / In Progress / Pending – chip)

Cleaning Type (Deep Clean / Standard / Quick Turnaround)

Stabling Geometry

Yard/platform occupancy view:

Train ID

Bay (location)

Position (Platform Side / Maintenance / Storage)

Occupied Since

Departure Time

Status (Occupied / Available – chip)

All of these will follow the same UI principles: MUI tables with sticky headers, row hover, color-coded chips, and optional summary cards.

🛠️ Tech Stack
Frontend:

React

React Router

Material UI (MUI) for:

Layout (Box, Grid, Paper, AppBar, Toolbar)

Inputs (TextField, Button, Menu, Snackbar)

Display (Typography, Chip, Card)

Icons (@mui/icons-material)

State Management:

Simple React state (hooks like useState, useMemo).

Local login state (isLoggedIn) for demo authentication gating.

Internationalization & Theme:

translations map for multi-language labels (stored in locales).

Theme toggle between light and dark using MUI’s createTheme.

Backend:

Not implemented in this repository.

No database, no REST APIs, no authentication server.

📁 Project Structure (High Level)
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
Depending on your exact implementation, file names may differ slightly, but this is the intended organization.

▶️ Getting Started
Prerequisites
Node.js (LTS version recommended)

npm or yarn

Installation & Run
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
Demo Login
If using the sample logic from Login.jsx:

Username: admin

Password: railway123

This simply flips frontend state and is not secure or persistent.

🚧 Current Limitations
Frontend-only prototype:
No real backend, database, or live metro system integration.

Static/demo data:
Tables and stats use hardcoded arrays to demonstrate UX and interactions.

No real authentication:
Login is simulated using in-memory state only.

No persistence:
Page refresh clears all “uploaded” data and selections.

This makes it ideal for showcasing UI/UX and concept flow, but not yet suitable for production deployment.

🧭 Roadmap & Future Enhancements
Planned improvements if extended beyond prototype:

Backend Integration

Node.js/Express or Django REST API.

Integration with operational databases (PostgreSQL/MySQL).

Real Authentication

JWT-based login.

Role-based access control (admin, maintenance, branding, cleaning).

Live Data

Connect to real IoT feeds for stabling and sensor data.

Scheduled jobs pulling from logbook/WhatsApp exports and normalizing them.

Analytics & ML

Predictive maintenance for trains based on usage and fault history.

Usage-based cleaning and stabling recommendations.

Enhanced Visualizations

Charts for mileage balance, downtime, revenue trends.

Yard/stabling map views.

🤝 Contributing / Forking
This repository is primarily a showcase / hackathon-style prototype.
You are welcome to:

Fork and integrate your own backend.

Replace demo data with live APIs.

Extend modules (e.g., more filters, charts, or admin tools).

If you use this as a base for a real system, consider:

Hardening authentication.

Adding proper logging and error handling.

Implementing accessibility and responsiveness thoroughly.

📌 Disclaimer
This project is a frontend prototype intended for demonstrations, academic projects, and hackathon screenings. It does not represent an official metro operator system and should not be used for real-world operational decision-making without substantial backend, security, and reliability enhancements.
