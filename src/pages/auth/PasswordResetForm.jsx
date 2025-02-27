import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PasswordResetForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Get stored user
    const email = localStorage.getItem("resetEmail");
    if (!email) {
      setError("No reset request found.");
      return;
    }

    const savedUser = JSON.parse(localStorage.getItem("customer"));
    if (savedUser && savedUser.email === email) {
      // Update password (Simulating database update)
      savedUser.password = formData.password;
      localStorage.setItem("customer", JSON.stringify(savedUser));

      // Clear reset session
      localStorage.removeItem("resetEmail");

      setSuccess("Password updated successfully! Redirecting to login...");
      setTimeout(() => navigate("/login"), 3000);
    } else {
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-900 text-center">Set a New Password</h2>

        {error && <p className="text-red-600 text-center mt-2">{error}</p>}
        {success && <p className="text-green-600 text-center mt-2">{success}</p>}

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div>
            <label className="block text-gray-700">New Password</label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            />
          </div>
          <div>
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            />
          </div>

          <button type="submit" className="bg-teal-600 text-white w-full p-3 rounded-lg hover:bg-teal-700">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordResetForm;
