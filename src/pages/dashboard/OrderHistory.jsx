import { useState } from "react";

const sampleOrders = [
  { id: 11121, name: "Amoxicillin", status: "Delivered", price: 15, deliveryDate: "Feb 18, 2025", method: "Delivery" },
  { id: 12345, name: "Paracetamol", status: "Delivered", price: 10, deliveryDate: "Feb 15, 2025", method: "Pickup" },
];

const OrderHistory = () => {
  const [orders] = useState(sampleOrders);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-900">Order History</h1>
      <p className="text-gray-600 mt-2">View all your past orders.</p>

      <div className="mt-6 space-y-4">
        {orders.length > 0 ? (
          orders.map((order) => (
            <div key={order.id} className="p-4 border rounded-lg shadow-sm">
              <h3 className="font-semibold">Order #{order.id}</h3>
              <p className="text-sm text-gray-600">Medicine: {order.name}</p>
              <p className="text-sm text-gray-600">Price: ${order.price}</p>
              <p className="text-sm text-gray-600">Delivery Method: {order.method}</p>
              <p className="text-sm text-gray-600">
                Delivered on: <span className="text-green-600 font-bold">{order.deliveryDate}</span>
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-600 mt-4">No past orders found.</p>
        )}
      </div>
    </div>
  );
};

export default OrderHistory;
