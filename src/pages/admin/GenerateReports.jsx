import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title } from "chart.js";

// Register Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Title);

const GenerateReports = () => {
  const [selectedRange, setSelectedRange] = useState("last7days");

  const reportData = {
    last7days: {
      users: 50,
      orders: 120,
      revenue: 3000,
      activePharmacies: 15,
    },
    last30days: {
      users: 200,
      orders: 480,
      revenue: 12000,
      activePharmacies: 18,
    },
  };

  const data = reportData[selectedRange];

  const chartData = {
    labels: ["Users", "Orders", "Revenue ($)", "Active Pharmacies"],
    datasets: [
      {
        label: "Report Data",
        data: [data.users, data.orders, data.revenue, data.activePharmacies],
        backgroundColor: ["#16a34a", "#0284c7", "#f59e0b", "#ef4444"],
      },
    ],
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-900">Generate Reports</h1>
      <p className="text-gray-600 mt-2">View system statistics and export data.</p>

      {/* Date Range Selector */}
      <div className="mt-4">
        <label className="block text-gray-700">Select Date Range</label>
        <select
          value={selectedRange}
          onChange={(e) => setSelectedRange(e.target.value)}
          className="w-full p-3 border rounded-lg"
        >
          <option value="last7days">Last 7 Days</option>
          <option value="last30days">Last 30 Days</option>
        </select>
      </div>

      {/* Chart Display */}
      <div className="mt-6">
        <Bar data={chartData} />
      </div>

      {/* Export Buttons */}
      <div className="mt-6 flex space-x-4">
        <button className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700">
          Export CSV
        </button>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Export PDF
        </button>
      </div>
    </div>
  );
};

export default GenerateReports;
