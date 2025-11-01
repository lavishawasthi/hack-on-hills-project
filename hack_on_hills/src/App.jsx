import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";

// Main pages (public)
import LandingPage from "./pages/LandingPage";

// Dashboard pages (private area)
import Dashboard from "./pages/DashboardC";
import PostProject from "./pages/PostProjectC";
import MyProjects from "./pages/MyProjects";
import Payments from "./pages/PaymentC";
// import Chat from "./Pages/Chat";
// import Settings from "./Pages/Settings";

function App() {
  return (
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<LandingPage />} />

        {/* APP (Protected) ROUTES */}
        <Route path="/app" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="post-project" element={<PostProject />} />
          <Route path="projects" element={<MyProjects />} />
          <Route path="payments" element={<Payments />} />
          {/* <Route path="chat" element={<Chat />} /> */}
          {/* <Route path="settings" element={<Settings />} /> */}
        </Route>

        {/* 404 FALLBACK */}
        <Route path="*" element={<h1 className='text-center mt-20 text-2xl font-semibold'>404 | Page Not Found</h1>} />
      </Routes>
  );

}

export default App;
