import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#A6C2C6] text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-6 text-center md:text-left">
        {/* Legal */}
        <div>
          <h4 className="font-bold">LEGAL</h4>
          <ul className="mt-2 text-gray-100 text-sm space-y-1">
            <li><Link to="/" className="hover:text-teal-300">Terms Of Use</Link></li>
            <li><Link to="/" className="hover:text-teal-300">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Join Us */}
        <div>
          <h4 className="font-bold">JOIN US</h4>
          <ul className="mt-2 text-gray-100 text-sm space-y-1">
            <li><Link to="/" className="hover:text-teal-300">Subscribe</Link></li>
            <li><Link to="/" className="hover:text-teal-300">Customer Service</Link></li>
            <li><Link to="/" className="hover:text-teal-300">Renew Subscription</Link></li>
          </ul>
        </div>

        {/* Pages */}
        <div>
          <h4 className="font-bold">PAGES</h4>
          <ul className="mt-2 text-gray-100 text-sm space-y-1">
            <li><Link to="/" className="hover:text-teal-300">Home</Link></li>
            <li><Link to="/" className="hover:text-teal-300">About</Link></li>
            <li><Link to="/" className="hover:text-teal-300">Programs</Link></li>
            <li><Link to="/" className="hover:text-teal-300">Contact</Link></li>
            <li><Link to="/" className="hover:text-teal-300">Plans & Pricing</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-bold">FOLLOW US</h4>
          <div className="mt-2 flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-gray-100 hover:text-teal-300 text-xl"><FaFacebook /></a>
            <a href="#" className="text-gray-100 hover:text-teal-300 text-xl"><FaTwitter /></a>
            <a href="#" className="text-gray-100 hover:text-teal-300 text-xl"><FaInstagram /></a>
            <a href="#" className="text-gray-100 hover:text-teal-300 text-xl"><FaLinkedin /></a>
          </div>
        </div>

        {/* Address */}
        <div>
          <h4 className="font-bold">ADDRESS</h4>
          <p className="mt-2 text-gray-100 text-sm">
            Addis Ababa, Ethiopia <br />
            +251 xxx xxxxx <br />
            info@healthbridge.com
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center mt-8 text-gray-100 font-semibold text-lg">
        HealthBridge &copy; 2017 - 2025. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
