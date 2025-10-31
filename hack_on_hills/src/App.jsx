import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import LoginPage from "./pages/Login.jsx";
import FYPPage from "./pages/FYPage.jsx";
import ProfilePage from "./pages/ProfileF.jsx";
import ProjectDetailsPage from "./pages/Projectid.jsx";
import DashboardPage from "./pages/DashboardF.jsx";
import NotificationPage from "./pages/NotificationF.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/fyp" element={<FYPPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/project/:id" element={<ProjectDetailsPage />} />
      <Route path="/notifications" element={<NotificationPage />} />
    </Routes>
  );
}

export default App;
