import { useState } from "react";
import { Link } from "react-router-dom";

const medicines = [
  { id: 1, name: "Paracetamol", category: "Painkiller", price: 10, pharmacy: "Pharmacy A" },
  { id: 2, name: "Amoxicillin", category: "Antibiotic", price: 15, pharmacy: "Pharmacy B" },
  { id: 3, name: "Ibuprofen", category: "Painkiller", price: 12, pharmacy: "Pharmacy C" },
  { id: 4, name: "Cough Syrup", category: "Cough & Cold", price: 8, pharmacy: "Pharmacy A" },
];

const MedicineSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMedicines = medicines.filter((medicine) => 
    medicine.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-900">Search for Medicines</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mt-4 p-3 border rounded-lg w-full"
      />

      {/* Medicine List */}
      <div className="mt-6 space-y-4">
        {filteredMedicines.length > 0 ? (
          filteredMedicines.map((medicine) => (
            <Link 
              key={medicine.id} 
              to={`/dashboard/medicine-details/${medicine.id}`} 
              className="block p-4 border rounded-lg shadow-sm hover:bg-gray-100"
            >
              <h3 className="font-semibold">{medicine.name}</h3>
              <p className="text-sm text-gray-600">Category: {medicine.category}</p>
              <p className="text-sm text-gray-600">Price: ${medicine.price}</p>
              <p className="text-sm text-gray-600">Available at: {medicine.pharmacy}</p>
            </Link>
          ))
        ) : (
          <p className="text-gray-600 mt-4">No medicines found.</p>
        )}
      </div>
    </div>
  );
};

export default MedicineSearch;
