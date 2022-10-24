import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import LoginPage from "./pages/LoginPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
