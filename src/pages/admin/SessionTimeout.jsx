import { useState } from "react";

const SessionTimeout = () => {
  const [timeout, setTimeoutValue] = useState(30); // Default: 30 minutes
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setTimeoutValue(e.target.value);
  };

  const handleSave = () => {
    localStorage.setItem("sessionTimeout", timeout);
    setMessage("Session timeout updated successfully!");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-900">Set Session Timeout</h1>
      <p className="text-gray-600 mt-2">Define how long inactive users remain logged in before they are automatically logged out.</p>

      {message && <p className="text-green-600 mt-2">{message}</p>}

      <div className="mt-4">
        <label className="block text-gray-700">Session Timeout Duration (minutes)</label>
        <input
          type="number"
          min="5"
          max="120"
          value={timeout}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg"
        />
      </div>

      <button
        onClick={handleSave}
        className="mt-6 bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700"
      >
        Save Timeout
      </button>
    </div>
  );
};

export default SessionTimeout;
