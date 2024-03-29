import  { useState } from "react";
import { useAppStore } from "../../appStore";
import TestimonialIcon from "../../assets/TestinomialIcon";

const testimonialData = [
  {
    id: 1,
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    name: "Jane Smith",
    text: "Pellentesque vel libero sit amet metus vulputate luctus.",
  },
  {
    id: 3,
    name: "Alice Johnson",
    text: "Fusce in libero vitae orci tempus elementum.",
  },
  {
    id: 4,
    name: "John Doe1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 5,
    name: "Jane Smith2",
    text: "Pellentesque vel libero sit amet metus vulputate luctus.",
  },

  // Add more testimonials here
];

const TestimonialsSection = () => {
  const { darkMode, language } = useAppStore();
  const [currentTestimonials, setCurrentTestimonials] = useState(0);

  const showTestimonials = testimonialData.slice(
    currentTestimonials,
    currentTestimonials + 3
  );

  const nextTestimonials = () => {
    if (currentTestimonials + 3 < testimonialData.length) {
      setCurrentTestimonials(currentTestimonials + 3);
    }
  };

  const prevTestimonials = () => {
    if (currentTestimonials > 0) {
      setCurrentTestimonials(currentTestimonials - 3);
    }
  };

  const containerClasses = `h-auto min-h-screen  bg-${
    darkMode ? "gray-800" : "teal-100"
  } text-${darkMode ? "white" : "gray-800"} py-16`;

  const testimonialClasses = ` p-8 custom-card ${
    darkMode ? "bg-gray-700" : "bg-gray-100"
  } text-${darkMode ? "white" : "gray-800"} rounded-lg`;

  const headingClasses = "text-4xl font-bold mb-8";

  const nameClasses = "text-xl font-semibold mb-2";

  return (
    <section id="testimonials-section" className={containerClasses}>
      <div className="grid grid-cols-1  md:grid-cols-2 px-4">
        <div className="w-[85%] mx-auto my-auto">
          <TestimonialIcon />
        </div>

        <div className="container mx-auto text-center my-auto">
          <h2 className={headingClasses}>
            {language === "Farsi" ? "نظرات مشتریان" : "Customer Testimonials"}
          </h2>
          <div className=" grid grid-cols-1 md:grid-cols-1 gap-6">
            {showTestimonials.map((testimonial) => (
              <div key={testimonial.id} className={testimonialClasses}>
                <p>{testimonial.text}</p>
                <p className={nameClasses}>{testimonial.name}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-evenly p-2 mt-4 font-bold">
            <button
              onClick={prevTestimonials}
              className={`btn btn-secondary ${
                darkMode ? "hover:text-teal-500" : "hover:text-gray-400"
              }`}
            >
              {language === "Farsi" ? "▶️ قبلی " : "◀️Previous"}
            </button>
            <button
              onClick={nextTestimonials}
              className={`btn btn-secondary ml-2  ${
                darkMode ? "hover:text-teal-500" : "hover:text-gray-400"
              }`}
            >
              {language === "Farsi" ? " بعدی ◀️" : "Next▶️"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
