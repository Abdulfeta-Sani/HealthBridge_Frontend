import { useState } from "react";

const samplePrescriptions = [
  { id: 1, customer: "John Doe", medicine: "Amoxicillin", uploadedAt: "Feb 20, 2025", status: "Pending", fileUrl: "https://via.placeholder.com/150" },
  { id: 2, customer: "Alice Smith", medicine: "Cough Syrup", uploadedAt: "Feb 19, 2025", status: "Pending", fileUrl: "https://via.placeholder.com/150" },
];

const ViewPrescriptions = () => {
  const [prescriptions, setPrescriptions] = useState(samplePrescriptions);

  const updatePrescriptionStatus = (id, newStatus) => {
    setPrescriptions(
      prescriptions.map((prescription) =>
        prescription.id === id ? { ...prescription, status: newStatus } : prescription
      )
    );
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-900">View Uploaded Prescriptions</h1>
      <p className="text-gray-600 mt-2">Review and process customer prescriptions.</p>

      <div className="mt-6 space-y-4">
        {prescriptions.length > 0 ? (
          prescriptions.map((prescription) => (
            <div key={prescription.id} className="p-4 border rounded-lg shadow-sm">
              <h3 className="font-semibold">Prescription #{prescription.id}</h3>
              <p className="text-sm text-gray-600">Customer: {prescription.customer}</p>
              <p className="text-sm text-gray-600">Medicine: {prescription.medicine}</p>
              <p className="text-sm text-gray-600">Uploaded: {prescription.uploadedAt}</p>
              <p className="text-sm text-gray-600">
                Status: <span className={`font-bold ${prescription.status === "Validated" ? "text-green-600" : prescription.status === "Rejected" ? "text-red-600" : "text-yellow-600"}`}>
                  {prescription.status}
                </span>
              </p>

              {/* Prescription Preview */}
              <div className="mt-4">
                <img src={prescription.fileUrl} alt="Prescription" className="w-40 h-40 object-cover border rounded-lg shadow-md" />
              </div>

              {/* Actions */}
              {prescription.status === "Pending" && (
                <div className="mt-4 flex space-x-2">
                  <button
                    onClick={() => updatePrescriptionStatus(prescription.id, "Validated")}
                    className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700"
                  >
                    Validate
                  </button>
                  <button
                    onClick={() => updatePrescriptionStatus(prescription.id, "Rejected")}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                  >
                    Reject
                  </button>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-600 mt-4">No uploaded prescriptions found.</p>
        )}
      </div>
    </div>
  );
};

export default ViewPrescriptions;
