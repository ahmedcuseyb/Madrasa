// File: pages/why-us.js

import Image from "next/image";

export default function WhyUs() {
  return (
    <div className="bg-white min-h-screen py-12">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-8">
        {/* Left Section: Image */}
        <div className="flex-1 w-full">
          <Image
            src="/images/us.jpg" // 
            alt="Why study at ours"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>

        {/* Right Section: Text */}
        <div className="flex-1 w-full">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Top Reasons To Study at our shool
          </h2>
          <p className="text-gray-600 mb-8">
            We would like to remind you of some of the many benefits of studying at diasmog.
          </p>

          <ul className="space-y-6">
            {[
              { title: "Islamic Ethics", text: "We strive for the highest standards of personal integrity, honesty and responsibility as Muslims first." },
              { title: "Authenticity", text: "Our curriculum is based on correct and authentic knowledge based on the Quran and Sunnah." },
              { title: "Affordability", text: "Fees are comparatively low and affordable for a degree program." },
              { title: "Accessibility", text: "You can study online from anywhere in the world." },
              { title: "Community", text: "You can be part of a global community of Muslim students from over 200 countries." },
            ].map((item, index) => (
              <li key={index}>
                <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </li>
            ))}
          </ul>

          <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
            View More
          </button>
        </div>
      </div>
    </div>
  );
}
