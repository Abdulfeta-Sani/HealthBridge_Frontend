import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative text-center text-white z-10 px-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Connecting Pharmacies to Your Doorstep
        </h1>
        <p className="mt-4 text-lg">
          Find medicines, upload prescriptions, and order conveniently
        </p>

        {/* Buttons */}
        <div className="mt-6 flex space-x-4 justify-center">
          <Link
            to="/signup"
            className="bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700"
          >
            Get Started
          </Link>
          <Link
            to="/about"
            className="border border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-gray-900"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
