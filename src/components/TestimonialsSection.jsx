import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "John Doe",
    review: "HealthBridge made it so easy to find my medications. Fast and reliable!",
    image: "/assets/user1.jpg",
    rating: 3,
  },
  {
    name: "Sarah Smith",
    review: "Great service! I no longer have to visit multiple pharmacies.",
    image: "/assets/user2.jpg",
    rating: 4,
  },
  {
    name: "Michael Brown",
    review: "Highly recommend this platform. Super convenient!",
    image: "/assets/user3.jpg",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-gray-900">What Our Customers Say</h2>
      <div className="mt-8 flex flex-wrap justify-center gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="w-80 p-6 bg-white border rounded-lg shadow-md flex flex-col items-center space-y-4"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <h3 className="text-lg font-medium">{testimonial.name}</h3>
            <p className="text-gray-600">"{testimonial.review}"</p>
            <div className="flex">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <FaStar key={i} className="text-yellow-500" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
