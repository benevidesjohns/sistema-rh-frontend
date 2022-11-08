import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import RegisterPage from "./pages/RegisterPage";
import JobsPage from "./pages/JobsPage";
import RegisterCandidatePage from "./pages/RegisterCandidatePage";
import RegisterJobPage from "./pages/RegisterJobPage";
import ConfigPage from "./pages/ConfigPage";
import ReviewCandidatesPage from "./pages/ReviewCandidatesPage";

import { AuthProvider } from './contexts/auth';
import Sidebar from './components/sidebar';

const AppRoutes = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/candidates/create" element={
            <>
              <Sidebar />
              <RegisterCandidatePage />
            </>
          } />
          <Route path="/candidates/review" element={
            <>
              <Sidebar />
              <ReviewCandidatesPage />
            </>
          } />
          <Route path="/jobs" element={
            <>
              <Sidebar />
              <JobsPage />
            </>
          } />
          <Route path="/jobs/create" element={
            <>
              <Sidebar />
              <RegisterJobPage />
            </>
          } />
          <Route path="/config" element={
            <>
              <Sidebar />
              <ConfigPage />
            </>
          } />
          <Route path="/dashboard" element={
            <>
              <Sidebar />
              <DashboardPage />
            </>
          } />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRoutes;
