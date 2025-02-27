import { useState } from "react";

const sampleOrders = [
  { id: 1, customer: "John Doe", medicine: "Paracetamol", quantity: 2, status: "Pending", requiresPrescription: false },
  { id: 2, customer: "Alice Smith", medicine: "Amoxicillin", quantity: 1, status: "Pending", requiresPrescription: true },
  { id: 3, customer: "Michael Brown", medicine: "Ibuprofen", quantity: 3, status: "Shipped", requiresPrescription: false },
];

const ManageOrders = () => {
  const [orders, setOrders] = useState(sampleOrders);

  const updateOrderStatus = (id, newStatus) => {
    setOrders(orders.map((order) => (order.id === id ? { ...order, status: newStatus } : order)));
  };

  const rejectOrder = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-900">Manage Orders</h1>
      <p className="text-gray-600 mt-2">View and process customer orders.</p>

      <div className="mt-6 space-y-4">
        {orders.length > 0 ? (
          orders.map((order) => (
            <div key={order.id} className="p-4 border rounded-lg shadow-sm">
              <h3 className="font-semibold">Order #{order.id}</h3>
              <p className="text-sm text-gray-600">Customer: {order.customer}</p>
              <p className="text-sm text-gray-600">Medicine: {order.medicine}</p>
              <p className="text-sm text-gray-600">Quantity: {order.quantity}</p>
              <p className="text-sm text-gray-600">
                Status: <span className={`font-bold ${order.status === "Shipped" ? "text-blue-600" : order.status === "Delivered" ? "text-green-600" : "text-yellow-600"}`}>
                  {order.status}
                </span>
              </p>

              {order.requiresPrescription && (
                <p className="text-sm text-red-600">📜 Prescription Required</p>
              )}

              {/* Order Actions */}
              <div className="mt-4 flex space-x-2">
                {order.status === "Pending" && (
                  <>
                    <button onClick={() => updateOrderStatus(order.id, "Shipped")} className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700">
                      Accept Order
                    </button>
                    <button onClick={() => rejectOrder(order.id)} className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
                      Reject Order
                    </button>
                  </>
                )}
                {order.status === "Shipped" && (
                  <button onClick={() => updateOrderStatus(order.id, "Delivered")} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    Mark as Delivered
                  </button>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 mt-4">No orders found.</p>
        )}
      </div>
    </div>
  );
};

export default ManageOrders;
