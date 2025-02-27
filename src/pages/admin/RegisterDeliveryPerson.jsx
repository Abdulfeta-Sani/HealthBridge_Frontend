import { useState } from "react";

const RegisterDeliveryPerson = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    vehicleType: "",
    license: "",
  });

  const [deliveryPersonnel, setDeliveryPersonnel] = useState([]);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.contact || !formData.vehicleType || !formData.license) {
      setMessage("All fields are required.");
      return;
    }

    // Register new delivery personnel (Temporary - Replace with API call later)
    const newDeliveryPerson = { ...formData, id: Date.now(), status: "Active" };
    setDeliveryPersonnel([...deliveryPersonnel, newDeliveryPerson]);

    setMessage("Delivery person registered successfully!");

    // Reset form
    setFormData({ name: "", email: "", contact: "", vehicleType: "", license: "" });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-900">Register Delivery Personnel</h1>
      <p className="text-gray-600 mt-2">Add a new delivery person to the system.</p>

      {message && <p className="text-green-600 mt-2">{message}</p>}

      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
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
          <label className="block text-gray-700">Vehicle Type</label>
          <input
            type="text"
            name="vehicleType"
            required
            value={formData.vehicleType}
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
          Register Delivery Person
        </button>
      </form>

      {/* Registered Delivery Personnel List */}
      {deliveryPersonnel.length > 0 && (
        <div className="mt-6">
          <h2 className="text-xl font-bold text-gray-900">Registered Delivery Personnel</h2>
          <ul className="mt-4 space-y-2">
            {deliveryPersonnel.map((person) => (
              <li key={person.id} className="p-3 border rounded-lg shadow-sm">
                <p className="font-semibold">{person.name}</p>
                <p className="text-sm text-gray-600">Email: {person.email}</p>
                <p className="text-sm text-gray-600">Contact: {person.contact}</p>
                <p className="text-sm text-gray-600">Vehicle Type: {person.vehicleType}</p>
                <p className="text-sm text-gray-600">License: {person.license}</p>
                <p className="text-sm text-gray-600">Status: <span className="font-bold text-green-600">Active</span></p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RegisterDeliveryPerson;
