import { Link } from "react-router-dom";

const PharmacySidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md h-full p-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Pharmacy Dashboard</h2>

      <ul className="space-y-4">
        <li>
          <Link to="/pharmacy/dashboard" className="block p-2 text-gray-700 hover:text-teal-600">
            📊 Dashboard Overview
          </Link>
        </li>
        <li>
          <Link to="/pharmacy/dashboard/medicines" className="block p-2 text-gray-700 hover:text-teal-600">
              💊 Manage Medicines
          </Link>
        </li>

        <li>
          <Link to="/pharmacy/dashboard/orders" className="block p-2 text-gray-700 hover:text-teal-600">
            📦 Manage Orders
          </Link>
        </li>

        <li>
          <Link to="/pharmacy/dashboard/prescriptions" className="block p-2 text-gray-700 hover:text-teal-600">
            📜 View Prescriptions
          </Link>
        </li>

        <li>
          <Link to="/pharmacy/dashboard/notifications" className="block p-2 text-gray-700 hover:text-teal-600">
            🔔 Notifications
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default PharmacySidebar;
