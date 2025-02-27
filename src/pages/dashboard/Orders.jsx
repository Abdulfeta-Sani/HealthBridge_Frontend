const Orders = () => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-900">My Orders</h1>
        <p className="text-gray-600 mt-2">Track and manage your past and current orders.</p>
  
        {/* Sample Order List */}
        <div className="mt-4 space-y-4">
          <div className="p-4 border rounded-lg shadow-sm">
            <h3 className="font-semibold">Order #12345</h3>
            <p className="text-sm text-gray-600">Status: <span className="text-teal-600">Shipped</span></p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm">
            <h3 className="font-semibold">Order #67890</h3>
            <p className="text-sm text-gray-600">Status: <span className="text-yellow-600">Pending</span></p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Orders;
  