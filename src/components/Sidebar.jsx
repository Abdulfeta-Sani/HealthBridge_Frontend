import { Link } from "react-router-dom";
import { FaHome, FaFileMedical, FaShoppingCart, FaUser } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white shadow-md h-screen p-6">
      <h2 className="text-2xl font-bold text-teal-600">Dashboard</h2>
      <nav className="mt-6">
        <ul className="space-y-4">
          <li>
            <Link to="/dashboard" className="flex items-center space-x-3 text-gray-700 hover:text-teal-600">
              <FaHome /> <span>Overview</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/orders" className="flex items-center space-x-3 text-gray-700 hover:text-teal-600">
              <FaShoppingCart /> <span>My Orders</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/prescriptions" className="flex items-center space-x-3 text-gray-700 hover:text-teal-600">
              <FaFileMedical /> <span>Prescriptions</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/profile" className="flex items-center space-x-3 text-gray-700 hover:text-teal-600">
              <FaUser /> <span>Profile</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/medicine-search" className="flex items-center space-x-3 text-gray-700 hover:text-teal-600">
                        <span>🔎</span> <span>Medicine Search</span>
            </Link>
            </li>
            <li>
                <Link to="/dashboard/track-order" className="flex items-center space-x-3 text-gray-700 hover:text-teal-600">
                    <span>📦</span> <span>Track Order</span>
                </Link>
            </li>

            <li>
                <Link to="/dashboard/order-history" className="flex items-center space-x-3 text-gray-700 hover:text-teal-600">
                    <span>📜</span> <span>Order History</span>
                </Link>
            </li>

            <li>
                <Link to="/dashboard/notifications" className="flex items-center space-x-3 text-gray-700 hover:text-teal-600">
                    <span>🔔</span> <span>Notifications</span>
                </Link>
            </li>

            <li>
              <Link to="/dashboard/update-profile" className="flex items-center space-x-3 text-gray-700 hover:text-teal-600">
                <span>✏️</span> <span>Update Profile</span>
              </Link>
            </li>

        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
