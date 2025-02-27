import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md h-full p-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Admin Dashboard</h2>

      <ul className="space-y-4">
        <li>
          <Link to="/admin/dashboard" className="block p-2 text-gray-700 hover:text-teal-600">
            📊 Dashboard Overview
          </Link>
        </li>

        <li>
          <Link to="/admin/dashboard/users" className="block p-2 text-gray-700 hover:text-teal-600">
            👥 Manage Users
          </Link>
        </li>

        <li>
          <Link to="/admin/dashboard/pharmacies" className="block p-2 text-gray-700 hover:text-teal-600">
            🏥 Register Pharmacy
          </Link>
        </li>

        <li>
          <Link to="/admin/dashboard/delivery" className="block p-2 text-gray-700 hover:text-teal-600">
            🚚 Register Delivery Personnel
          </Link>
        </li>

        <li>
          <Link to="/admin/dashboard/reports" className="block p-2 text-gray-700 hover:text-teal-600">
            📊 Generate Reports
          </Link>
        </li>

        <li>
          <Link to="/admin/dashboard/password-policy" className="block p-2 text-gray-700 hover:text-teal-600">
            🔐 Set Password Policy
          </Link>
        </li>
        
        <li>
          <Link to="/admin/dashboard/session-timeout" className="block p-2 text-gray-700 hover:text-teal-600">
            ⏳ Set Session Timeout
          </Link>
        </li>

        <li>
          <Link to="/admin/dashboard/logs" className="block p-2 text-gray-700 hover:text-teal-600">
            📜 View System Log
          </Link>
        </li>

        <li>
          <Link to="/admin/dashboard/notifications" className="block p-2 text-gray-700 hover:text-teal-600">
            🔔 Notifications
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default AdminSidebar;
