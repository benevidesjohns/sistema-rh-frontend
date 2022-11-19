import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import { GlobalProvider } from '../contexts/global';

import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import RegisterPage from "../pages/RegisterPage";
import JobsPage from "../pages/JobsPage";
import RegisterCandidatePage from "../pages/RegisterCandidatePage";
import RegisterJobPage from "../pages/RegisterJobPage";
import ConfigPage from "../pages/ConfigPage";
import CandidatesPage from "../pages/CandidatesPage";
import JobCandidatesPage from "../pages/JobCandidatesPage";
import JobCandidatesAddPage from "../pages/JobCandidatesAddPage";

import Sidebar from '../components/sidebar';
import { ROUTES } from './paths';

const AppRoutes = () => {
  const PageWithSidebar = ({ page }) => {
    return (
      <>
        <Sidebar />
        {page}
      </>
    );
  }

  return (
    <Router>
      <GlobalProvider>
        <Routes>
          {/* Auth */}
          <Route exact path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route path={ROUTES.REGISTER} element={<RegisterPage />} />

          {/* General */}
          <Route path={ROUTES.DASHBOARD} element={
            <PageWithSidebar page={<DashboardPage />} />
          } />
          <Route path={ROUTES.CONFIG} element={
            <PageWithSidebar page={<ConfigPage />} />
          } />

          {/* Candidates */}
          <Route path={ROUTES.CANDIDATES} element={
            <PageWithSidebar page={<CandidatesPage />} />
          } />
          <Route path={ROUTES.CREATE_CANDIDATE} element={
            <PageWithSidebar page={<RegisterCandidatePage />} />
          } />

          {/* Jobs */}
          <Route path={ROUTES.JOBS} element={
            <PageWithSidebar page={<JobsPage />} />
          } />
          <Route path={ROUTES.CREATE_JOB} element={
            <PageWithSidebar page={<RegisterJobPage />} />
          } />
          <Route path={ROUTES.JOB_CANDIDATES} element={
            <PageWithSidebar page={<JobCandidatesPage />} />
          } />
          <Route path={ROUTES.JOB_CANDIDATES_ADD} element={
            <PageWithSidebar page={<JobCandidatesAddPage />} />
          } />

        </Routes>
      </GlobalProvider>
    </Router>
  );
};

export default AppRoutes;
