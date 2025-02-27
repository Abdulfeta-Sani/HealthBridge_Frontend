import { useState } from "react";

const ContactUsSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>

      <div className="mt-8 max-w-3xl mx-auto bg-[#d6e5e7] p-10 rounded-3xl shadow-lg">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          {/* Name */}
          <div className="relative">
            <label className="absolute -top-3 left-3 bg-[#d6e5e7] px-1 text-gray-700 text-sm">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border-b-2 border-gray-600 bg-transparent focus:outline-none p-2 text-gray-900"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <label className="absolute -top-3 left-3 bg-[#d6e5e7] px-1 text-gray-700 text-sm">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border-b-2 border-gray-600 bg-transparent focus:outline-none p-2 text-gray-900"
            />
          </div>

          {/* Subject */}
          <div className="relative">
            <label className="absolute -top-3 left-3 bg-[#d6e5e7] px-1 text-gray-700 text-sm">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full border-b-2 border-gray-600 bg-transparent focus:outline-none p-2 text-gray-900"
            />
          </div>

          {/* Message */}
          <div className="relative">
            <label className="absolute -top-3 left-3 bg-[#d6e5e7] px-1 text-gray-700 text-sm">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full border-b-2 border-gray-600 bg-transparent focus:outline-none p-2 text-gray-900"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#2C6E85] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#1E4F60] self-end"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUsSection;
