import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if user exists (Temporary - Replace with API call later)
    const savedUser = JSON.parse(localStorage.getItem("customer"));

    if (!savedUser || savedUser.email !== formData.email || savedUser.password !== formData.password) {
      setError("Invalid email or password.");
      return;
    }

    // Redirect to Dashboard
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-900 text-center">Login to Your Account</h2>

        {error && <p className="text-red-600 text-center mt-2">{error}</p>}

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
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
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            />
          </div>

          <button type="submit" className="bg-teal-600 text-white w-full p-3 rounded-lg hover:bg-teal-700">
            Login
          </button>
        </form>

        <div className="text-center mt-4">
          <a href="/password-reset" className="text-teal-600 hover:underline">
            Forgot Password?
          </a>
        </div>

        <p className="text-gray-600 text-center mt-4">
          Don't have an account? <a href="/signup" className="text-teal-600 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
