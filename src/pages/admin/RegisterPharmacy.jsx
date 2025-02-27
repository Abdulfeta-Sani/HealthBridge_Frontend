import { useState } from "react";

const RegisterPharmacy = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    license: "",
  });

  const [pharmacies, setPharmacies] = useState([]);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.contact || !formData.address || !formData.license) {
      setMessage("All fields are required.");
      return;
    }

    // Register new pharmacy (Temporary - Replace with API call later)
    const newPharmacy = { ...formData, id: Date.now(), status: "Active" };
    setPharmacies([...pharmacies, newPharmacy]);

    setMessage("Pharmacy registered successfully!");

    // Reset form
    setFormData({ name: "", email: "", contact: "", address: "", license: "" });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-900">Register Pharmacy</h1>
      <p className="text-gray-600 mt-2">Add a new pharmacy to the system.</p>

      {message && <p className="text-green-600 mt-2">{message}</p>}

      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        <div>
          <label className="block text-gray-700">Pharmacy Name</label>
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
          <label className="block text-gray-700">Contact Number</label>
          <input
            type="tel"
            name="contact"
            required
            value={formData.contact}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />
        </div>
        <div>
          <label className="block text-gray-700">Address</label>
          <input
            type="text"
            name="address"
            required
            value={formData.address}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />
        </div>
        <div>
          <label className="block text-gray-700">License Number</label>
          <input
            type="text"
            name="license"
            required
            value={formData.license}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />
        </div>

        <button type="submit" className="bg-teal-600 text-white w-full p-3 rounded-lg hover:bg-teal-700">
          Register Pharmacy
        </button>
      </form>

      {/* Registered Pharmacies List */}
      {pharmacies.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-bold text-gray-900">Registered Pharmacies</h2>
          <ul className="mt-4 space-y-2">
            {pharmacies.map((pharmacy) => (
              <li key={pharmacy.id} className="p-3 border rounded-lg shadow-sm">
                <p className="font-semibold">{pharmacy.name}</p>
                <p className="text-sm text-gray-600">Email: {pharmacy.email}</p>
                <p className="text-sm text-gray-600">Contact: {pharmacy.contact}</p>
                <p className="text-sm text-gray-600">Address: {pharmacy.address}</p>
                <p className="text-sm text-gray-600">License: {pharmacy.license}</p>
                <p className="text-sm text-gray-600">Status: <span className="font-bold text-green-600">Active</span></p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RegisterPharmacy;
