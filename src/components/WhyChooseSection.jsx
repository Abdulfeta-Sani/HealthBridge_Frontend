import { FaShieldAlt, FaSearch, FaFileMedical, FaClock } from "react-icons/fa";

const WhyChooseSection = () => {
  const features = [
    { icon: <FaShieldAlt />, title: "Secure Payments" },
    { icon: <FaSearch />, title: "Easy Medicine Search" },
    { icon: <FaFileMedical />, title: "Digital Prescriptions" },
    { icon: <FaClock />, title: "Real-Time Availability" },
  ];

  return (
    <section id="features" className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-900">Why Choose HealthBridge?</h2>
      <div className="mt-8 flex flex-wrap justify-center gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="w-64 p-6 border rounded-lg shadow-md flex flex-col items-center space-y-4"
          >
            <div className="text-teal-600 text-4xl">{feature.icon}</div>
            <h3 className="text-lg font-medium">{feature.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseSection;
