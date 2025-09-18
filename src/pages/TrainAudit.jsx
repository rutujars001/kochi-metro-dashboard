import React, { useState } from "react";
import {
  Box, Grid, Paper, Typography, Chip, TextField, InputAdornment, IconButton, Button
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsRailwayIcon from "@mui/icons-material/DirectionsRailway";
import VisibilityIcon from "@mui/icons-material/Visibility";

const trains = [
  {
    id: "TR-4521",
    name: "Metro Express 2020",
    fitness: "Valid",
    jobs: 2,
    mileage: "125,430",
    bay: "A-12",
    status: "Active"
  },
  {
    id: "TR-4522",
    name: "Metro Express 2019",
    fitness: "Expired",
    jobs: 5,
    mileage: "98,750",
    bay: "M-3",
    status: "Maintenance"
  },
  {
    id: "TR-4523",
    name: "Metro Express 2021",
    fitness: "Valid",
    jobs: 1,
    mileage: "87,250",
    bay: "B-7",
    status: "Active"
  },
  {
    id: "TR-4524",
    name: "Metro Express 2020",
    fitness: "Due Soon",
    jobs: 3,
    mileage: "112,800",
    bay: "A-5",
    status: "Active"
  },
  {
    id: "TR-4525",
    name: "Metro Express 2022",
    fitness: "Valid",
    jobs: 0,
    mileage: "112,800",
    bay: "C-2",
    status: "Active"
  }
];

const fitnessColor = {
  Valid: "success",
  "Due Soon": "warning",
  Expired: "error"
};

const statusColor = {
  Active: "success",
  Maintenance: "warning"
};

export default function TrainAudit() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const filteredTrains = trains.filter(t =>
    (t.id + t.name).toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, minHeight: "100vh", bgcolor: "background.default" }}>
      <Typography variant="h4" fontWeight={700} mb={1}>
        Train Audit
      </Typography>
      <Typography variant="body1" color="text.secondary" mb={3}>
        Comprehensive train profiles and operational status
      </Typography>
      {/* Overview stats */}
      <Grid container spacing={2} mb={2}>
        <Grid item xs={6} sm={2.4}>
          <Paper sx={{ p: 2, textAlign: "center" }}>
            <Typography color="success.main" fontWeight={700} fontSize={28}>4</Typography>
            <Typography variant="caption">Active Trains</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={2.4}>
          <Paper sx={{ p: 2, textAlign: "center" }}>
            <Typography color="warning.main" fontWeight={700} fontSize={28}>1</Typography>
            <Typography variant="caption">In Maintenance</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={2.4}>
          <Paper sx={{ p: 2, textAlign: "center" }}>
            <Typography color="error.main" fontWeight={700} fontSize={28}>1</Typography>
            <Typography variant="caption">Fitness Expired</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={2.4}>
          <Paper sx={{ p: 2, textAlign: "center" }}>
            <Typography color="secondary.main" fontWeight={700} fontSize={28}>11</Typography>
            <Typography variant="caption">Pending Jobs</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={2.4}>
          <Paper sx={{ p: 2, textAlign: "center" }}>
            <Typography color="primary.main" fontWeight={700} fontSize={28}>$54.4K</Typography>
            <Typography variant="caption">Ad Revenue</Typography>
          </Paper>
        </Grid>
      </Grid>
      {/* Main audit area */}
      <Grid container spacing={3} mt={1}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, minHeight: 400 }}>
            <Typography variant="h6" fontWeight={600} mb={2}>Fleet Overview</Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              Complete list of trains with key metrics
            </Typography>
            <TextField
              value={search}
              onChange={e => setSearch(e.target.value)}
              fullWidth
              variant="outlined"
              size="small"
              placeholder="Search trains..."
              margin="dense"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
                endAdornment: search && (
                  <IconButton onClick={() => setSearch("")}>
                    ×
                  </IconButton>
                )
              }}
            />
            <Box mt={2}>
              {filteredTrains.map((train, idx) => (
                <Paper
                  key={train.id}
                  sx={{ mb: 2, p: 2, display: "flex", alignItems: "center", cursor: "pointer", bgcolor: selected === idx ? "action.selected" : "background.paper" }}
                  onClick={() => setSelected(idx)}
                  elevation={selected === idx ? 4 : 1}
                >
                  <DirectionsRailwayIcon sx={{ mr: 2, color: "primary.main" }} />
                  <Box flex={1}>
                    <Typography fontWeight={600}>
                      {train.id} <span style={{ fontWeight: 400, color: "#888" }}>{train.name}</span>
                    </Typography>
                    <Box display="flex" alignItems="center" gap={2} mt={0.5}>
                      <span>
                        Fitness: <Chip size="small" label={train.fitness} color={fitnessColor[train.fitness]} />
                      </span>
                      <span>
                        Pending Jobs: <b>{train.jobs}</b>
                      </span>
                      <span>
                        Mileage: <b>{train.mileage}</b>
                      </span>
                      <span>
                        Bay: <b>{train.bay}</b>
                      </span>
                    </Box>
                  </Box>
                  <Chip
                    size="small"
                    label={train.status}
                    color={statusColor[train.status]}
                    sx={{ mr: 2 }}
                  />
                  <IconButton>
                    <VisibilityIcon />
                  </IconButton>
                </Paper>
              ))}
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, textAlign: "center", minHeight: 400 }}>
            {selected === null ? (
              <>
                <DirectionsRailwayIcon color="disabled" sx={{ fontSize: 48, mb: 1 }} />
                <Typography variant="h6" fontWeight={700}>Select a Train</Typography>
                <Typography color="text.secondary">
                  Click on a train from the list to view detailed information
                </Typography>
              </>
            ) : (
              <>
                <DirectionsRailwayIcon color="primary" sx={{ fontSize: 48, mb: 1 }} />
                <Typography variant="h6" fontWeight={700}>
                  {trains[selected].id} - {trains[selected].name}
                </Typography>
                <Typography mb={2} color="text.secondary">
                  Mileage: <b>{trains[selected].mileage}</b> | Bay: <b>{trains[selected].bay}</b>
                </Typography>
                <Chip
                  label={`Fitness ${trains[selected].fitness}`}
                  color={fitnessColor[trains[selected].fitness]}
                  sx={{ mb: 1, mr: 1 }}
                />
                <Chip
                  label={`Status ${trains[selected].status}`}
                  color={statusColor[trains[selected].status]}
                  sx={{ mb: 1 }}
                />
                <Typography>
                  Pending Jobs: <b>{trains[selected].jobs}</b>
                </Typography>
                <Box mt={3}>
                  <Button variant="outlined" color="primary">
                    View Full Profile
                  </Button>
                </Box>
              </>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
