import { useState } from "react";

const ManageMedicines = () => {
  const [medicines, setMedicines] = useState([
    { id: 1, name: "Paracetamol", category: "Painkiller", price: 10, stock: 50 },
    { id: 2, name: "Amoxicillin", category: "Antibiotic", price: 15, stock: 30 },
    { id: 3, name: "Ibuprofen", category: "Painkiller", price: 12, stock: 40 },
  ]);
  const [newMedicine, setNewMedicine] = useState({ name: "", category: "", price: "", stock: "" });
  const [editingMedicine, setEditingMedicine] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setNewMedicine({ ...newMedicine, [e.target.name]: e.target.value });
  };

  const addMedicine = () => {
    if (!newMedicine.name || !newMedicine.category || !newMedicine.price || !newMedicine.stock) {
      alert("Please fill in all fields.");
      return;
    }

    setMedicines([...medicines, { ...newMedicine, id: Date.now(), price: parseFloat(newMedicine.price), stock: parseInt(newMedicine.stock) }]);
    setNewMedicine({ name: "", category: "", price: "", stock: "" });
  };

  const editMedicine = (medicine) => {
    setEditingMedicine(medicine);
    setNewMedicine(medicine);
  };

  const updateMedicine = () => {
    setMedicines(medicines.map((med) => (med.id === editingMedicine.id ? newMedicine : med)));
    setEditingMedicine(null);
    setNewMedicine({ name: "", category: "", price: "", stock: "" });
  };

  const deleteMedicine = (id) => {
    setMedicines(medicines.filter((med) => med.id !== id));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-900">Manage Medicines</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search for medicines..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mt-4 p-3 border rounded-lg w-full"
      />

      {/* Medicine List */}
      <div className="mt-6 space-y-4">
        {medicines
          .filter((medicine) => medicine.name.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((medicine) => (
            <div key={medicine.id} className="p-4 border rounded-lg shadow-sm flex justify-between items-center">
              <div>
                <h3 className="font-semibold">{medicine.name}</h3>
                <p className="text-sm text-gray-600">Category: {medicine.category}</p>
                <p className="text-sm text-gray-600">Price: ${medicine.price}</p>
                <p className="text-sm text-gray-600">Stock: {medicine.stock}</p>
              </div>
              <div className="space-x-2">
                <button onClick={() => editMedicine(medicine)} className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600">
                  Edit
                </button>
                <button onClick={() => deleteMedicine(medicine.id)} className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>

      {/* Add/Edit Medicine Form */}
      <div className="mt-6 p-6 border rounded-lg bg-gray-50">
        <h3 className="text-lg font-semibold">{editingMedicine ? "Edit Medicine" : "Add Medicine"}</h3>

        <div className="mt-4 space-y-2">
          <input
            type="text"
            name="name"
            placeholder="Medicine Name"
            value={newMedicine.name}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={newMedicine.category}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={newMedicine.price}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="number"
            name="stock"
            placeholder="Stock Quantity"
            value={newMedicine.stock}
            onChange={handleInputChange}
            className="w-full p-3 border rounded-lg"
          />
        </div>

        <button
          onClick={editingMedicine ? updateMedicine : addMedicine}
          className="mt-4 bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700 w-full"
        >
          {editingMedicine ? "Update Medicine" : "Add Medicine"}
        </button>
      </div>
    </div>
  );
};

export default ManageMedicines;
