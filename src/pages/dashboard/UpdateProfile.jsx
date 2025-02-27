import { useState, useEffect } from "react";

const UpdateProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Load existing user details from local storage (Temporary - Replace with API call later)
    const savedUser = JSON.parse(localStorage.getItem("customer"));
    if (savedUser) {
      setFormData({ name: savedUser.name, email: savedUser.email, phone: savedUser.phone || "", password: "", confirmPassword: "" });
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate passwords match (if changed)
    if (formData.password && formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    // Update user details in local storage (Temporary - Replace with API call later)
    const updatedUser = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      password: formData.password ? formData.password : JSON.parse(localStorage.getItem("customer")).password, // Keep existing password if unchanged
    };

    localStorage.setItem("customer", JSON.stringify(updatedUser));
    setMessage("Profile updated successfully!");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-900">Update Profile</h1>
      <p className="text-gray-600 mt-2">Modify your account details below.</p>

      {message && <p className="text-green-600 mt-2">{message}</p>}

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label className="block text-gray-700">Full Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />
        </div>
        <div>
          <label className="block text-gray-700">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />
        </div>
        <div>
          <label className="block text-gray-700">New Password (Optional)</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />
        </div>
        <div>
          <label className="block text-gray-700">Confirm New Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />
        </div>

        <button type="submit" className="bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
