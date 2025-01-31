import React from 'react';
import { BookOpen, Calendar, Users, Bell, ChevronRight, GraduationCap, Library, Award, Quote } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <GraduationCap className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold">Excellence Academy</span>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:bg-blue-800 px-3 py-2 rounded-md">Home</a>
              <a href="#" className="hover:bg-blue-800 px-3 py-2 rounded-md">Academics</a>
              <a href="#" className="hover:bg-blue-800 px-3 py-2 rounded-md">Admissions</a>
              <a href="#" className="hover:bg-blue-800 px-3 py-2 rounded-md">Campus Life</a>
              <a href="#" className="hover:bg-blue-800 px-3 py-2 rounded-md">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <div className="relative h-[600px] bg-cover bg-center" style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")'
    }}>
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to Excellence Academy</h1>
          <p className="text-xl mb-8">Nurturing minds, Building futures</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center">
            Learn More <ChevronRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

function Features() {
  const features = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Academic Excellence",
      description: "Comprehensive curriculum designed for student success"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Faculty",
      description: "Experienced teachers dedicated to student growth"
    },
    {
      icon: <Library className="h-8 w-8" />,
      title: "Modern Facilities",
      description: "State-of-the-art classrooms and laboratories"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Student Achievement",
      description: "Consistent record of outstanding results"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Us</h2>
          <p className="mt-4 text-lg text-gray-600">Discover what makes Excellence Academy special</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  const testimonials = [
    {
      content: "Excellence Academy has transformed my daughter's approach to learning. The teachers here don't just teach; they inspire and nurture a genuine love for knowledge.",
      author: "Sarah Johnson",
      role: "Parent",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    },
    {
      content: "The opportunities I've had at Excellence Academy have been incredible. From advanced placement courses to leadership programs, I feel prepared for university and beyond.",
      author: "Michael Chen",
      role: "Senior Student",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    },
    {
      content: "As an alumnus, I can confidently say that my years at Excellence Academy laid the foundation for my success. The values and skills I learned here continue to guide me.",
      author: "Emily Rodriguez",
      role: "Alumni, Class of 2020",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    }
  ];

  return (
    <div className="py-16 bg-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">What Our Community Says</h2>
          <p className="mt-4 text-lg text-blue-200">Hear from our students, parents, and alumni</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg relative">
              <Quote className="absolute top-4 right-4 h-8 w-8 text-blue-200" />
              <p className="text-gray-600 mb-6 italic">{testimonial.content}</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="h-12 w-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function NewsEvents() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">News & Events</h2>
          <p className="mt-4 text-lg text-gray-600">Stay updated with the latest happenings</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
              alt="Science Fair"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                March 15, 2024
              </div>
              <h3 className="text-xl font-semibold mb-2">Annual Science Fair</h3>
              <p className="text-gray-600">Join us for an exciting showcase of student projects and innovations.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1511732831640-a201294ac90e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
              alt="Sports Day"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                March 20, 2024
              </div>
              <h3 className="text-xl font-semibold mb-2">Sports Day 2024</h3>
              <p className="text-gray-600">A day of athletic excellence and friendly competition.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
              alt="Art Exhibition"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <Calendar className="h-4 w-4 mr-2" />
                March 25, 2024
              </div>
              <h3 className="text-xl font-semibold mb-2">Student Art Exhibition</h3>
              <p className="text-gray-600">Experience the creativity of our talented young artists.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>123 Education Street</p>
            <p>Cityville, ST 12345</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@excellenceacademy.edu</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400">Admissions</a></li>
              <li><a href="#" className="hover:text-blue-400">Programs</a></li>
              <li><a href="#" className="hover:text-blue-400">Calendar</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Student Portal</a></li>
              <li><a href="#" className="hover:text-blue-400">Parent Portal</a></li>
              <li><a href="#" className="hover:text-blue-400">Library</a></li>
              <li><a href="#" className="hover:text-blue-400">Career Services</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <p className="mb-4">Subscribe to our newsletter for updates</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-lg text-gray-900 w-full"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg">
                <Bell className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; 2024 Excellence Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <NewsEvents />
      <Footer />
    </div>
  );
}

export default App;