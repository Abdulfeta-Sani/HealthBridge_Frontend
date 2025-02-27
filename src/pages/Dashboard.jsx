
// // import { useState } from "react";
// // import { Outlet } from "react-router-dom";
// // import Sidebar from "../components/Sidebar";
// // import DashboardNavbar from "../components/DashboardNavbar";

// // const Dashboard = () => {
// //   const [sidebarOpen, setSidebarOpen] = useState(true);

// //   const toggleSidebar = () => {
// //     setSidebarOpen(!sidebarOpen);
// //   };

// //   return (
// //     <div className="flex h-screen bg-gray-100">
// //       {/* Sidebar - Hide on Mobile */}
// //       {sidebarOpen && <Sidebar />}

// //       {/* Main Content */}
// //       <div className="flex-1 flex flex-col">
// //         {/* Navbar */}
// //         <DashboardNavbar toggleSidebar={toggleSidebar} />

// //         {/* Dynamic Content */}
// //         <div className="p-6">
// //           <Outlet />  {/* This displays the active dashboard section */}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Dashboard;


// import { useState, useEffect } from "react";
// import { Outlet, useNavigate } from "react-router-dom";
// import Sidebar from "../components/Sidebar";
// import DashboardNavbar from "../components/DashboardNavbar";

// const Dashboard = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const navigate = useNavigate();

//   // Protect Dashboard from unauthorized access
//   useEffect(() => {
//     const user = localStorage.getItem("customer");
//     if (!user) {
//       navigate("/login"); // Redirect to login if not logged in
//     }
//   }, [navigate]);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar - Hide on Mobile */}
//       {sidebarOpen && <Sidebar />}

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         {/* Navbar */}
//         <DashboardNavbar toggleSidebar={toggleSidebar} />

//         {/* Dynamic Content */}
//         <div className="p-6">
//           <Outlet /> {/* This displays the active dashboard section */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [customerName, setCustomerName] = useState(""); // Store customer name
  const navigate = useNavigate();

  // Protect Dashboard from unauthorized access
  useEffect(() => {
    const user = localStorage.getItem("customer");

    if (!user) {
      navigate("/login"); // Redirect to login if not logged in
    } else {
      const customerData = JSON.parse(user);
      setCustomerName(customerData.name || "Customer"); // Display name if available
    }
  }, [navigate]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar - Hide on Mobile */}
      {sidebarOpen && <Sidebar />}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <DashboardNavbar toggleSidebar={toggleSidebar} />

        {/* Welcome Message - Styled */}
        <div className="p-6">
          <div className="bg-gradient-to-r from-teal-500 to-teal-700 text-white text-3xl font-bold py-4 px-6 rounded-lg shadow-md text-center">
            👋 Welcome, {customerName}!
          </div>
        </div>

        {/* Dynamic Content */}
        <div className="p-6">
          <Outlet /> {/* This displays the active dashboard section */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
