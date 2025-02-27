import { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";
import AdminNavbar from "../../components/AdminNavbar";

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar - Hide on Mobile */}
      {sidebarOpen && <AdminSidebar />}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <AdminNavbar toggleSidebar={toggleSidebar} />

        {/* Dynamic Content */}
        <div className="p-6">
          <Outlet /> {/* This displays the active admin section */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
