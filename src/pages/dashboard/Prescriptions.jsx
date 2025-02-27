const Prescriptions = () => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-900">Prescriptions</h1>
        <p className="text-gray-600 mt-2">Upload and manage your medical prescriptions.</p>
  
        {/* Upload Button */}
        <div className="mt-4">
          <label className="block font-medium text-gray-700">Upload Prescription:</label>
          <input type="file" className="mt-2 p-2 border rounded-lg w-full" />
        </div>
  
        {/* Uploaded Prescriptions */}
        <div className="mt-6">
          <h3 className="font-semibold text-lg">Uploaded Documents</h3>
          <ul className="mt-2 text-gray-700">
            <li className="p-3 border rounded-lg shadow-sm">Prescription_01.pdf</li>
            <li className="p-3 border rounded-lg shadow-sm mt-2">Prescription_02.pdf</li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Prescriptions;
  