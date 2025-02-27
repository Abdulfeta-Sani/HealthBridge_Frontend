import { useParams, Link } from "react-router-dom";

// Sample medicines data
const medicines = [
  { id: 1, name: "Paracetamol", category: "Painkiller", price: 10, description: "Used for reducing fever and mild to moderate pain.", pharmacy: "Pharmacy A" },
  { id: 2, name: "Amoxicillin", category: "Antibiotic", price: 15, description: "An antibiotic used to treat bacterial infections.", pharmacy: "Pharmacy B" },
  { id: 3, name: "Ibuprofen", category: "Painkiller", price: 12, description: "Reduces inflammation and pain.", pharmacy: "Pharmacy C" },
  { id: 4, name: "Cough Syrup", category: "Cough & Cold", price: 8, description: "Used to relieve cough symptoms.", pharmacy: "Pharmacy A" },
];

const MedicineDetails = () => {
  const { id } = useParams();
  const medicine = medicines.find((med) => med.id === parseInt(id));

  if (!medicine) {
    return <div className="p-6 text-center text-red-500">Medicine not found!</div>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-gray-900">{medicine.name}</h1>
      <p className="text-gray-600 mt-2">Category: {medicine.category}</p>
      <p className="text-gray-600 mt-2">Price: ${medicine.price}</p>
      <p className="text-gray-600 mt-2">Available at: {medicine.pharmacy}</p>
      <p className="text-gray-700 mt-4">{medicine.description}</p>

      {/* Action Buttons */}
      <div className="mt-6 flex space-x-4">
        <button className="bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700">
          Add to Cart
        </button>
        <Link
            to={`/dashboard/order-checkout/${medicine.id}`}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700" >
                Order Now
        </Link>

      </div>

      {/* Back to Search Button */}
      <div className="mt-6">
        <Link to="/dashboard/medicine-search" className="text-teal-600 hover:underline">
          ← Back to Medicine Search
        </Link>
      </div>
    </div>
  );
};

export default MedicineDetails;
