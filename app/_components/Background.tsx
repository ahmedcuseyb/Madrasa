// components/Header.tsx
import React from 'react';

const Background = () => {
  return (
    <header className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/islam.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-6">
        <div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-4">Welcome to Our Site</h1>
          <p className="text-lg sm:text-xl mb-6">Explore our courses, stories, and more.</p>
          <a
            href="#"
            className="bg-teal-600 text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-teal-700 transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
};

export default Background;
