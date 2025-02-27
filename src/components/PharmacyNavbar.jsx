import { FaBell, FaBars } from "react-icons/fa";
import PropTypes from "prop-types";

const PharmacyNavbar = ({ toggleSidebar }) => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      {/* Sidebar Toggle Button for Mobile */}
      <button className="md:hidden text-gray-700" onClick={toggleSidebar}>
        <FaBars className="text-2xl" />
      </button>

      {/* Dashboard Title */}
      <h1 className="text-xl font-bold text-gray-900">Pharmacy Dashboard</h1>

      {/* Right Icons */}
      <div className="flex items-center space-x-4">
        {/* Notifications Icon */}
        <button className="relative text-gray-700 hover:text-teal-600">
          <FaBell className="text-2xl" />
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
            3
          </span>
        </button>
      </div>
    </nav>
  );
};

// ✅ Add PropTypes validation
PharmacyNavbar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};

export default PharmacyNavbar;
