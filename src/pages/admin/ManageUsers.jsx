import { useState } from "react";

const sampleUsers = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Customer", status: "Active" },
  { id: 2, name: "Alice Smith", email: "alice@example.com", role: "Pharmacy", status: "Active" },
  { id: 3, name: "Michael Brown", email: "michael@example.com", role: "Delivery Personnel", status: "Active" },
];

const ManageUsers = () => {
  const [users, setUsers] = useState(sampleUsers);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleUserStatus = (id) => {
    setUsers(users.map((user) => 
      user.id === id ? { ...user, status: user.status === "Active" ? "Deactivated" : "Active" } : user
    ));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-900">Manage Users</h1>
      <p className="text-gray-600 mt-2">View and manage all registered users.</p>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mt-4 p-3 border rounded-lg w-full"
      />

      {/* Users List */}
      <div className="mt-6 space-y-4">
        {users
          .filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((user) => (
            <div key={user.id} className="p-4 border rounded-lg shadow-sm flex justify-between items-center">
              <div>
                <h3 className="font-semibold">{user.name}</h3>
                <p className="text-sm text-gray-600">Email: {user.email}</p>
                <p className="text-sm text-gray-600">Role: {user.role}</p>
                <p className="text-sm text-gray-600">
                  Status: <span className={`font-bold ${user.status === "Active" ? "text-green-600" : "text-red-600"}`}>
                    {user.status}
                  </span>
                </p>
              </div>
              <button
                onClick={() => toggleUserStatus(user.id)}
                className={`px-4 py-2 rounded-lg font-medium ${
                  user.status === "Active" ? "bg-red-600 text-white hover:bg-red-700" : "bg-green-600 text-white hover:bg-green-700"
                }`}
              >
                {user.status === "Active" ? "Deactivate" : "Activate"}
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ManageUsers;
