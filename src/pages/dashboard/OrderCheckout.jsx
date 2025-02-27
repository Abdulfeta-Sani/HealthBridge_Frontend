import { useState } from "react";
import { useParams, Link } from "react-router-dom";

const medicines = [
  { id: 1, name: "Paracetamol", price: 10, pharmacy: "Pharmacy A" },
  { id: 2, name: "Amoxicillin", price: 15, pharmacy: "Pharmacy B" },
  { id: 3, name: "Ibuprofen", price: 12, pharmacy: "Pharmacy C" },
  { id: 4, name: "Cough Syrup", price: 8, pharmacy: "Pharmacy A" },
];

const OrderCheckout = () => {
  const { id } = useParams();
  const medicine = medicines.find((med) => med.id === parseInt(id));

  const [deliveryOption, setDeliveryOption] = useState("Delivery");
  const [address, setAddress] = useState("");

  if (!medicine) {
    return <div className="p-6 text-center text-red-500">Medicine not found!</div>;
  }

  const handleOrderConfirm = () => {
    alert("Order placed successfully!");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-900">Order Checkout</h1>

      {/* Order Details */}
      <div className="mt-4 p-4 border rounded-lg shadow-sm">
        <h3 className="font-semibold">{medicine.name}</h3>
        <p className="text-sm text-gray-600">Pharmacy: {medicine.pharmacy}</p>
        <p className="text-sm text-gray-600">Price: ${medicine.price}</p>
      </div>

      {/* Delivery Option */}
      <div className="mt-4">
        <label className="block font-medium text-gray-700">Select Delivery Option</label>
        <select
          value={deliveryOption}
          onChange={(e) => setDeliveryOption(e.target.value)}
          className="p-3 border rounded-lg w-full mt-2"
        >
          <option value="Delivery">Delivery</option>
          <option value="Pickup">Self Pickup</option>
        </select>
      </div>

      {/* Delivery Address (only if Delivery is selected) */}
      {deliveryOption === "Delivery" && (
        <div className="mt-4">
          <label className="block font-medium text-gray-700">Delivery Address</label>
          <input
            type="text"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="p-3 border rounded-lg w-full mt-2"
          />
        </div>
      )}

      {/* Confirm Order Button */}
      <button
        onClick={handleOrderConfirm}
        className="mt-6 bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700 w-full"
      >
        Confirm Order
      </button>

      {/* Back Button */}
      <div className="mt-6">
        <Link to="/dashboard/medicine-search" className="text-teal-600 hover:underline">
          ← Back to Medicine Search
        </Link>
      </div>
    </div>
  );
};

export default OrderCheckout;
