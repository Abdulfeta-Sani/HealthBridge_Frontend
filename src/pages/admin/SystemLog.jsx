import { useState } from "react";

const sampleLogs = [
  { id: 1, type: "Login", description: "Admin logged in", timestamp: "2025-02-25 09:00 AM" },
  { id: 2, type: "User Update", description: "John Doe updated profile details", timestamp: "2025-02-25 09:30 AM" },
  { id: 3, type: "Order", description: "Order #12345 marked as Delivered", timestamp: "2025-02-25 10:00 AM" },
];

const SystemLog = () => {
  const [logs, setLogs] = useState(sampleLogs);
  const [searchTerm, setSearchTerm] = useState("");

  const clearLogs = () => {
    setLogs([]);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-900">System Logs</h1>
      <p className="text-gray-600 mt-2">Monitor system activities and security events.</p>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search logs..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mt-4 p-3 border rounded-lg w-full"
      />

      {/* Logs List */}
      <div className="mt-6 space-y-4">
        {logs
          .filter((log) => log.description.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((log) => (
            <div key={log.id} className="p-4 border rounded-lg shadow-sm bg-gray-100">
              <p className="text-gray-800">{log.description}</p>
              <p className="text-sm text-gray-600">{log.timestamp}</p>
              <p className="text-sm font-bold text-teal-600">{log.type}</p>
            </div>
          ))}
      </div>

      {logs.length > 0 && (
        <button
          onClick={clearLogs}
          className="mt-6 bg-red-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-700"
        >
          Clear Logs
        </button>
      )}
    </div>
  );
};

export default SystemLog;
