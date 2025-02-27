import { useState } from "react";

const PasswordPolicy = () => {
  const [policy, setPolicy] = useState({
    minLength: 8,
    requireNumber: true,
    requireSpecialChar: true,
    requireUppercase: true,
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setPolicy({ ...policy, [name]: type === "checkbox" ? checked : parseInt(value) });
  };

  const handleSave = () => {
    localStorage.setItem("passwordPolicy", JSON.stringify(policy));
    setMessage("Password policy updated successfully!");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-900">Set Password Policy</h1>
      <p className="text-gray-600 mt-2">Define security rules for user passwords.</p>

      {message && <p className="text-green-600 mt-2">{message}</p>}

      <div className="mt-4 space-y-4">
        <div>
          <label className="block text-gray-700">Minimum Password Length</label>
          <input
            type="number"
            name="minLength"
            min="6"
            max="20"
            value={policy.minLength}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="requireNumber"
            checked={policy.requireNumber}
            onChange={handleChange}
            className="mr-2"
          />
          <label className="text-gray-700">Require at least one number</label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="requireSpecialChar"
            checked={policy.requireSpecialChar}
            onChange={handleChange}
            className="mr-2"
          />
          <label className="text-gray-700">Require at least one special character</label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="requireUppercase"
            checked={policy.requireUppercase}
            onChange={handleChange}
            className="mr-2"
          />
          <label className="text-gray-700">Require at least one uppercase letter</label>
        </div>
      </div>

      <button
        onClick={handleSave}
        className="mt-6 bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700"
      >
        Save Policy
      </button>
    </div>
  );
};

export default PasswordPolicy;
