// import { FaBell, FaUserCircle, FaBars } from "react-icons/fa";
// import { useState } from "react";

// const DashboardNavbar = ({ toggleSidebar }) => {
//   return (
//     <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
//       {/* Sidebar Toggle Button for Mobile */}
//       <button className="md:hidden text-gray-700" onClick={toggleSidebar}>
//         <FaBars className="text-2xl" />
//       </button>

//       {/* Dashboard Title */}
//       <h1 className="text-xl font-bold text-gray-900">Customer Dashboard</h1>

//       {/* Right Icons */}
//       <div className="flex items-center space-x-4">
//         {/* Notifications Icon */}
//         <button className="relative text-gray-700 hover:text-teal-600">
//           <FaBell className="text-2xl" />
//           <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
//             3
//           </span>
//         </button>

//         {/* User Profile */}
//         <div className="flex items-center space-x-2">
//           <FaUserCircle className="text-2xl text-gray-600" />
//           <span className="text-gray-800 font-medium">John Doe</span>
//         </div>

//         {/* Logout Button */}
//         <button className="bg-teal-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-teal-700">
//           Logout
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default DashboardNavbar;


import { FaBell, FaUserCircle, FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const DashboardNavbar = ({ toggleSidebar }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("customer"); // Clear user session
    navigate("/login"); // Redirect to login page
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Sidebar Toggle Button for Mobile */}
      <button className="md:hidden text-gray-700" onClick={toggleSidebar}>
        <FaBars className="text-2xl" />
      </button>

      {/* Dashboard Title */}
      <h1 className="text-xl font-bold text-gray-900">Customer Dashboard</h1>

      {/* Right Icons */}
      <div className="flex items-center space-x-4">
        {/* Notifications Icon */}
        <button className="relative text-gray-700 hover:text-teal-600">
          <FaBell className="text-2xl" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
            3
          </span>
        </button>

        {/* User Profile */}
        <div className="flex items-center space-x-2">
          <FaUserCircle className="text-2xl text-gray-600" />
          <span className="text-gray-800 font-medium">Customer</span>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

// ✅ Add PropTypes validation
DashboardNavbar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};

export default DashboardNavbar;
