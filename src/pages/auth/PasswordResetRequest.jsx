import { useState } from "react";
import { useNavigate } from "react-router-dom";

const PasswordResetRequest = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulating email verification (Replace with API call later)
    const savedUser = JSON.parse(localStorage.getItem("customer"));
    
    if (!savedUser || savedUser.email !== email) {
      setMessage("No account found with this email.");
      return;
    }

    // Simulating sending a reset link
    localStorage.setItem("resetEmail", email);
    setMessage("A password reset link has been sent to your email.");
    
    // Redirect to Reset Form after 3 seconds
    setTimeout(() => {
      navigate("/password-reset-form");
    }, 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-900 text-center">Reset Your Password</h2>

        {message && <p className="text-green-600 text-center mt-2">{message}</p>}

        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div>
            <label className="block text-gray-700">Enter Your Email</label>
            <input
              type="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-lg"
            />
          </div>

          <button type="submit" className="bg-teal-600 text-white w-full p-3 rounded-lg hover:bg-teal-700">
            Send Reset Link
          </button>
        </form>

        <p className="text-gray-600 text-center mt-4">
          Remember your password? <a href="/login" className="text-teal-600 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default PasswordResetRequest;
