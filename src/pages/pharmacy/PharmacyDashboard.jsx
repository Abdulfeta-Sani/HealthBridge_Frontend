import { useState } from "react";
import { Outlet } from "react-router-dom";
import PharmacySidebar from "../../components/PharmacySidebar";
import PharmacyNavbar from "../../components/PharmacyNavbar";

const PharmacyDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar - Hide on Mobile */}
      {sidebarOpen && <PharmacySidebar />}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <PharmacyNavbar toggleSidebar={toggleSidebar} />

        {/* Dynamic Content */}
        <div className="p-6">
          <Outlet /> {/* This displays the active pharmacy section */}
        </div>
      </div>
    </div>
  );
};

export default PharmacyDashboard;
