const DashboardContent = () => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-900">Welcome to Your Dashboard</h1>
        <p className="text-gray-600 mt-2">Here you can manage your orders, prescriptions, and profile.</p>
  
        {/* Sample Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="p-6 bg-teal-600 text-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Active Orders</h3>
            <p className="text-2xl font-bold">2</p>
          </div>
          <div className="p-6 bg-teal-500 text-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Pending Prescriptions</h3>
            <p className="text-2xl font-bold">1</p>
          </div>
          <div className="p-6 bg-teal-400 text-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Delivered Orders</h3>
            <p className="text-2xl font-bold">5</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default DashboardContent;
  