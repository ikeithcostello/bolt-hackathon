import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Layout
import MainLayout from './layouts/MainLayout';

// Pages
import Landing from './pages/Landing';
import Register from './pages/Register';
import JudgeApplication from './pages/JudgeApplication';
import Login from './pages/Login';
import Dashboard from './pages/admin/Dashboard';
import JudgeDashboard from './pages/judge/Dashboard';
import ParticipantDashboard from './pages/participant/Dashboard';
import NotFound from './pages/NotFound';

// Demo pages - these would be replaced with actual implementations
import AdminSubmissions from './pages/admin/Submissions';
import AdminJudges from './pages/admin/Judges';
import AdminCalibration from './pages/admin/Calibration';
import AdminConflicts from './pages/admin/Conflicts';
import AdminReports from './pages/admin/Reports';
import AdminAwards from './pages/admin/Awards';
import AdminSettings from './pages/admin/Settings';

import JudgeEvaluations from './pages/judge/Evaluations';
import JudgeCompleted from './pages/judge/Completed';
import JudgeSettings from './pages/judge/Settings';

import ParticipantSubmissions from './pages/participant/Submissions';
import ParticipantLeaderboard from './pages/participant/Leaderboard';
import ParticipantAwards from './pages/participant/Awards';
import ParticipantSettings from './pages/participant/Settings';

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/judge/apply" element={<JudgeApplication />} />
          <Route path="/login" element={<Login />} />

          {/* Admin routes */}
          <Route path="/admin" element={<MainLayout role="admin" />}>
            <Route index element={<Dashboard />} />
            <Route path="judges" element={<AdminJudges />} />
            <Route path="submissions" element={<AdminSubmissions />} />
            <Route path="conflicts" element={<AdminConflicts />} />
            <Route path="calibration" element={<AdminCalibration />} />
            <Route path="reports" element={<AdminReports />} />
            <Route path="awards" element={<AdminAwards />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>

          {/* Judge routes */}
          <Route path="/judge" element={<MainLayout role="judge" />}>
            <Route index element={<JudgeDashboard />} />
            <Route path="evaluations" element={<JudgeEvaluations />} />
            <Route path="completed" element={<JudgeCompleted />} />
            <Route path="settings" element={<JudgeSettings />} />
          </Route>

          {/* Participant routes */}
          <Route path="/participant" element={<MainLayout role="participant" />}>
            <Route index element={<ParticipantDashboard />} />
            <Route path="submissions" element={<ParticipantSubmissions />} />
            <Route path="leaderboard" element={<ParticipantLeaderboard />} />
            <Route path="awards" element={<ParticipantAwards />} />
            <Route path="settings" element={<ParticipantSettings />} />
          </Route>

          {/* 404 route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;