import React, { useState } from "react";
import { useAppStore } from "../../appStore";

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

  const containerClasses = `h-[90vh]  bg-${
    darkMode ? "gray-800" : "teal-100"
  } text-${darkMode ? "white" : "gray-800"} py-48`;

  const testimonialClasses = `p-4 custom-card ${
    darkMode ? "bg-gray-700" : "bg-gray-100"
  } text-${darkMode ? "white" : "gray-800"} rounded-lg`;

  const headingClasses = "text-4xl font-bold mb-8";

  const nameClasses = "text-xl font-semibold mb-2";

  return (
    <section id="testimonials-section" className={containerClasses}>
      <div className="container mx-auto text-center">
        <h2 className={headingClasses}>
          {language === "Farsi" ? "نظرات مشتریان" : "Customer Testimonials"}
        </h2>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-4">
          {showTestimonials.map((testimonial) => (
            <div key={testimonial.id} className={testimonialClasses}>
              <p>{testimonial.text}</p>
              <p className={nameClasses}>{testimonial.name}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center p-2 mt-4">
          <button onClick={prevTestimonials} className="btn btn-secondary">
            {language === "Farsi" ? "قبلی" : "Previous"}
          </button>
          <button
            onClick={nextTestimonials}
            className="btn btn-secondary ml-2 "
          >
            {language === "Farsi" ? "بعدی" : "Next▶️"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
