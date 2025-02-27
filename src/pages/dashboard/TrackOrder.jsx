import { useState } from "react";

const sampleOrders = [
  { id: 12345, name: "Paracetamol", status: "Shipped", deliveryDate: "Feb 20, 2025", method: "Delivery" },
  { id: 67890, name: "Ibuprofen", status: "Pending", deliveryDate: "TBD", method: "Pickup" },
  { id: 11121, name: "Amoxicillin", status: "Delivered", deliveryDate: "Feb 18, 2025", method: "Delivery" },
];

const TrackOrder = () => {
  const [orders, setOrders] = useState(sampleOrders);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-900">Track Your Orders</h1>
      <p className="text-gray-600 mt-2">View the status of your current and past orders.</p>

      <div className="mt-6 space-y-4">
        {orders.length > 0 ? (
          orders.map((order) => (
            <div key={order.id} className="p-4 border rounded-lg shadow-sm">
              <h3 className="font-semibold">Order #{order.id}</h3>
              <p className="text-sm text-gray-600">Medicine: {order.name}</p>
              <p className="text-sm text-gray-600">
                Status: <span className={`font-bold ${order.status === "Shipped" ? "text-blue-600" : order.status === "Delivered" ? "text-green-600" : "text-yellow-600"}`}>
                  {order.status}
                </span>
              </p>
              <p className="text-sm text-gray-600">Delivery Method: {order.method}</p>
              <p className="text-sm text-gray-600">Estimated Delivery: {order.deliveryDate}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-600 mt-4">No orders found.</p>
        )}
      </div>
    </div>
  );
};

export default TrackOrder;
