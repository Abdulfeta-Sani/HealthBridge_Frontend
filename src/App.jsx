import { BrowserRouter as Router, useLocation } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <ConditionalNavbar />
      <AppRoutes />
    </Router>
  );
}

// Function to control Navbar visibility
const ConditionalNavbar = () => {
  const location = useLocation();

  // Hide Landing Page Navbar for both Customer & Pharmacy Dashboards
  if (location.pathname.startsWith("/dashboard") || location.pathname.startsWith("/pharmacy/dashboard") || location.pathname.startsWith("/admin/dashboard")) {
    return null;
  }

  return <Navbar />;
};

export default App;