import { useState } from "react";

const sampleNotifications = [
  { id: 1, message: "New user registered: John Doe", time: "10 mins ago" },
  { id: 2, message: "Order #12345 marked as Delivered", time: "1 hour ago" },
  { id: 3, message: "System update applied successfully", time: "2 hours ago" },
];

const AdminNotifications = () => {
  const [notifications, setNotifications] = useState(sampleNotifications);

  const handleClearNotifications = () => {
    setNotifications([]);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
      <p className="text-gray-600 mt-2">Stay updated with system activities.</p>

      <div className="mt-6 space-y-4">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <div key={notification.id} className="p-4 border rounded-lg shadow-sm bg-gray-100">
              <p className="text-gray-800">{notification.message}</p>
              <p className="text-sm text-gray-600">{notification.time}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-600 mt-4">No new notifications.</p>
        )}
      </div>

      {notifications.length > 0 && (
        <button
          onClick={handleClearNotifications}
          className="mt-6 bg-red-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-700"
        >
          Clear Notifications
        </button>
      )}
    </div>
  );
};

export default AdminNotifications;
