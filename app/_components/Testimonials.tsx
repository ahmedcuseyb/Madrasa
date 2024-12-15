// File: pages/testimonials.js
"use client"
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    text: "Asalamu o alikum brothers and sisters. Now I am proud to call myself Muslim. Allah gave me the chance to learn about our beautiful Islam. ALLAH AKBAR! I'm going to try my best to be a good Muslim. Many thanks to Dr. Bilal Philips for this opportunity.",
    name: "Easmin Akter",
  },
  {
    id: 2,
    text: "IOU has changed my life completely. I am now confident in understanding and practicing my religion in a way I never could before. May Allah bless this institute!",
    name: "Ahmed Khan",
  },
  {
    id: 3,
    text: "This platform is a blessing for students around the world. Accessible, affordable, and authentic knowledge has truly impacted my life positively.",
    name: "Fatima Noor",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-12">
      <div className="container mx-auto px-6 lg:px-20 text-center relative">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          What Our Students Say
        </h2>
        <p className="text-gray-600 mb-8">Testimonials from students</p>

        {/* Testimonial Card */}
        <div className="bg-white shadow-md p-8 rounded-lg max-w-3xl mx-auto">
          <div className="flex flex-col items-center">
            {/* Student Avatar */}
            <div className="w-16 h-16 bg-gray-800 text-white flex items-center justify-center rounded-full mb-4">
              <span className="text-3xl">🎓</span>
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-600 italic mb-4">
              "{testimonials[currentIndex].text}"
            </p>

            {/* Student Name */}
            <p className="font-semibold text-gray-800">
              {testimonials[currentIndex].name}
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-900 text-white p-2 rounded-full hover:bg-blue-700"
          onClick={handlePrev}
        >
          &#8592;
        </button>
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-900 text-white p-2 rounded-full hover:bg-blue-700"
          onClick={handleNext}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}
