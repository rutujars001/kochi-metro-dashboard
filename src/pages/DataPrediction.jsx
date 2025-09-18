import React, { useState } from "react";
import { Box, Tabs, Tab, Typography, Grid, Paper, Chip } from "@mui/material";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import ShieldIcon from "@mui/icons-material/Shield";

// Metric cards
const stats = [
  { label: "Active Predictions", value: 24, icon: <ShowChartIcon color="primary" fontSize="large" /> },
  { label: "Risk Alerts", value: 8, icon: <WarningAmberIcon color="warning" fontSize="large" /> },
  { label: "Data Sources", value: 6, icon: <ShieldIcon color="success" fontSize="large" /> },
];

const modules = [
  { label: "Fitness" },
  { label: "Job Cards" },
  { label: "Branding" },
  { label: "Mileage" },
  { label: "Cleaning" },
  { label: "Stabling" },
];

// --- Fitness Certificates Data & Component ---
const fitnessData = [
  { trainId: "TR-4521", status: "Valid", expiry: "2024-03-15", type: "Annual", risk: "Low" },
  { trainId: "TR-4522", status: "Expired", expiry: "2024-01-20", type: "Monthly", risk: "High" },
  { trainId: "TR-4523", status: "Valid", expiry: "2024-05-10", type: "Annual", risk: "Low" },
  { trainId: "TR-4524", status: "Due Soon", expiry: "2024-02-05", type: "Quarterly", risk: "Medium" },
];

const statusColor = {
  Valid: "success",
  Expired: "error",
  "Due Soon": "warning",
  Open: "error",
  Closed: "success",
  Active: "success",
  "In Progress": "warning",
  Completed: "default",
  Available: "success",
  Occupied: "default",
  
};

const riskColor = {
  Low: "success",
  Medium: "warning",
  High: "error"
};

function FitnessTable() {
  return (
    <div>
      <Typography variant="h6" mb={1}>Fitness Certificates</Typography>
      <Typography variant="body2" mb={2}>Operational data and analytics for fitness certificates</Typography>
      <Box sx={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", background: "white" }}>
          <thead>
            <tr>
              <th align="left">Train ID</th>
              <th align="left">Status</th>
              <th align="left">Expiry Date</th>
              <th align="left">Certificate Type</th>
              <th align="left">Risk Level</th>
            </tr>
          </thead>
          <tbody>
            {fitnessData.map((row) => (
              <tr key={row.trainId}>
                <td>{row.trainId}</td>
                <td>
                  <Chip size="small" label={row.status} color={statusColor[row.status] || "default"} />
                </td>
                <td>{row.expiry}</td>
                <td>{row.type}</td>
                <td>
                  <Chip size="small" label={row.risk} color={riskColor[row.risk] || "default"} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </div>
  );
}

// --- Job Cards Data & Component ---
const jobCardsData = [
  { jobId: "JC-2024-001", train: "TR-4521", type: "Brake System", status: "Open", priority: "High", assigned: "Team A" },
  { jobId: "JC-2024-002", train: "TR-4522", type: "Engine Check", status: "Open", priority: "Medium", assigned: "Team B" },
  { jobId: "JC-2024-003", train: "TR-4523", type: "Cleaning", status: "Closed", priority: "Low", assigned: "Team C" },
  { jobId: "JC-2024-004", train: "TR-4524", type: "Electrical", status: "Open", priority: "High", assigned: "Team A" },
];

const priorityColor = {
  Low: "success",
  Medium: "warning",
  High: "error"
};

function JobCardsTable() {
  return (
    <div>
      <Typography variant="h6" mb={1}>Job-Card Status</Typography>
      <Typography variant="body2" mb={2}>Operational data and analytics for job-card status</Typography>
      <Box sx={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", background: "white" }}>
          <thead>
            <tr>
              <th align="left">Job ID</th>
              <th align="left">Train</th>
              <th align="left">Work Type</th>
              <th align="left">Status</th>
              <th align="left">Priority</th>
              <th align="left">Assigned To</th>
            </tr>
          </thead>
          <tbody>
            {jobCardsData.map((row) => (
              <tr key={row.jobId}>
                <td>{row.jobId}</td>
                <td>{row.train}</td>
                <td>{row.type}</td>
                <td>
                  <Chip size="small" label={row.status} color={statusColor[row.status] || "default"} />
                </td>
                <td>
                  <Chip size="small" label={row.priority} color={priorityColor[row.priority] || "default"} />
                </td>
                <td>{row.assigned}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </div>
  );
}

// --- Branding Data & Component ---
const brandingData = [
  { campaign: "Metro Express", train: "TR-4521", status: "Active", expiry: "2024-06-15", revenue: "$15,000" },
  { campaign: "City Transit", train: "TR-4522", status: "Expired", expiry: "2024-01-30", revenue: "$12,500" }
];

function BrandingTable() {
  return (
    <div>
      <Typography variant="h6" mb={1}>Branding Priorities</Typography>
      <Typography variant="body2" mb={2}>Operational data and analytics for branding priorities</Typography>
      <Box sx={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", background: "white" }}>
          <thead>
            <tr>
              <th align="left">Campaign</th>
              <th align="left">Train</th>
              <th align="left">Status</th>
              <th align="left">Expiry</th>
              <th align="left">Revenue</th>
            </tr>
          </thead>
          <tbody>
            {brandingData.map((row, idx) => (
              <tr key={idx}>
                <td>{row.campaign}</td>
                <td>{row.train}</td>
                <td>
                  <Chip size="small" label={row.status} color={statusColor[row.status] || "default"} />
                </td>
                <td>{row.expiry}</td>
                <td>{row.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </div>
  );
}

// --- Mileage Data & Component ---
const mileageData = [
  { trainId: "TR-4521", mileage: "125,430", target: "130,000", variance: "+3.5%", efficiency: "High" },
  { trainId: "TR-4522", mileage: "98,750", target: "100,000", variance: "-1.3%", efficiency: "Normal" }
];

function MileageTable() {
  return (
    <div>
      <Typography variant="h6" mb={1}>Mileage Balancing</Typography>
      <Typography variant="body2" mb={2}>Operational data and analytics for mileage balancing</Typography>
      <Box sx={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", background: "white" }}>
          <thead>
            <tr>
              <th align="left">Train ID</th>
              <th align="left">Current Mileage</th>
              <th align="left">Target</th>
              <th align="left">Variance</th>
              <th align="left">Efficiency</th>
            </tr>
          </thead>
          <tbody>
            {mileageData.map((row, idx) => (
              <tr key={idx}>
                <td>{row.trainId}</td>
                <td>{row.mileage}</td>
                <td>{row.target}</td>
                <td>{row.variance}</td>
                <td>{row.efficiency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </div>
  );
}

// --- Cleaning Data & Component ---
const cleaningData = [
  { trainId: "TR-4521", bay: "Bay 3", time: "2024-02-01 14:00", status: "Completed", type: "Deep Clean" },
  { trainId: "TR-4522", bay: "Bay 1", time: "2024-02-01 16:00", status: "In Progress", type: "Standard" }
];

function CleaningTable() {
  return (
    <div>
      <Typography variant="h6" mb={1}>Cleaning & Detailing Slots</Typography>
      <Typography variant="body2" mb={2}>Operational data and analytics for cleaning & detailing slots</Typography>
      <Box sx={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", background: "white" }}>
          <thead>
            <tr>
              <th align="left">Train ID</th>
              <th align="left">Bay/Slot</th>
              <th align="left">Scheduled Time</th>
              <th align="left">Status</th>
              <th align="left">Cleaning Type</th>
            </tr>
          </thead>
          <tbody>
            {cleaningData.map((row, idx) => (
              <tr key={idx}>
                <td>{row.trainId}</td>
                <td>{row.bay}</td>
                <td>{row.time}</td>
                <td>
                  <Chip size="small" label={row.status} color={statusColor[row.status] || "default"} />
                </td>
                <td>{row.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </div>
  );
}

// --- Stabling Data & Component ---
const stablingData = [
  { trainId: "TR-4521", bay: "A-12", position: "Platform Side", occupied: "18:30", depart: "05:45", status: "Occupied" },
  { trainId: "TR-4522", bay: "B-7", position: "Maintenance", occupied: "20:15", depart: "06:30", status: "Available" }
];

function StablingTable() {
  return (
    <div>
      <Typography variant="h6" mb={1}>Stabling Geometry</Typography>
      <Typography variant="body2" mb={2}>Operational data and analytics for stabling geometry</Typography>
      <Box sx={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", background: "white" }}>
          <thead>
            <tr>
              <th align="left">Train ID</th>
              <th align="left">Bay</th>
              <th align="left">Position</th>
              <th align="left">Occupied Since</th>
              <th align="left">Departure Time</th>
              <th align="left">Status</th>
            </tr>
          </thead>
          <tbody>
            {stablingData.map((row, idx) => (
              <tr key={idx}>
                <td>{row.trainId}</td>
                <td>{row.bay}</td>
                <td>{row.position}</td>
                <td>{row.occupied}</td>
                <td>{row.depart}</td>
                <td>
                  <Chip size="small" label={row.status} color={statusColor[row.status] || "default"} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </div>
  );
}

// --- Main Data Prediction Page ---
export default function DataPrediction() {
  const [tab, setTab] = useState(0);

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, bgcolor: "background.default", minHeight: "100vh" }}>
      <Typography variant="h4" fontWeight={700} mb={0.5}>
        Data Prediction & Analytics
      </Typography>
      <Typography variant="body1" mb={3} color="text.secondary">
        Operational data analysis and predictive insights
      </Typography>
      <Grid container spacing={2} mb={2}>
        {stats.map((s) => (
          <Grid item xs={12} sm={4} key={s.label}>
            <Paper elevation={1} sx={{ p: 2, display: "flex", alignItems: "center", minHeight: 76 }}>
              <Box sx={{ mr: 2 }}>{s.icon}</Box>
              <Box>
                <Typography variant="subtitle2" color="text.secondary">{s.label}</Typography>
                <Typography variant="h5" fontWeight={700}>{s.value}</Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Tabs value={tab} onChange={(_, v) => setTab(v)} sx={{ mb: 3 }}>
        {modules.map((mod) => (
          <Tab key={mod.label} label={mod.label} />
        ))}
      </Tabs>
      <Paper elevation={0} sx={{ p: 3, bgcolor: "background.paper" }}>
        {tab === 0 && <FitnessTable />}
        {tab === 1 && <JobCardsTable />}
        {tab === 2 && <BrandingTable />}
        {tab === 3 && <MileageTable />}
        {tab === 4 && <CleaningTable />}
        {tab === 5 && <StablingTable />}
      </Paper>
    </Box>
  );
}
