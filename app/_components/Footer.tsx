// File: components/Footer.js
export default function Footer() {
    return (
      <footer className="bg-black text-gray-300 py-4 relative">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
          {/* Left: Copyright */}
          <div className="text-sm text-center md:text-left">
            © 2024 Umul Qura. All Rights Reserved
          </div>
  
          {/* Right: Links */}
          <div className="flex space-x-6 mt-2 md:mt-0">
            <a href="#" className="hover:text-gray-100 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-100 transition">
              Terms & Conditions
            </a>
          </div>
        </div>
  
        {/* Floating Buttons */}
        <div className="absolute right-4 bottom-8 flex flex-col space-y-4">
          {/* WhatsApp Icon */}
          <a
            href="https://wa.me/252617388383"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-md hover:bg-green-600 transition"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.52 3.478a11.64 11.64 0 00-16.446 0A11.6 11.6 0 003 12.072c0 1.885.48 3.74 1.392 5.384L3 21l3.636-1.344a11.56 11.56 0 005.412 1.344 11.6 11.6 0 008.474-3.594 11.64 11.64 0 000-16.478zm-4.374 13.27l-.54.556c-.24.252-.48.264-.84.168-.588-.168-1.932-.744-3.612-2.064-1.344-1.056-2.256-2.4-2.52-2.688-.276-.3-.624-.816-.864-1.164-.204-.3-.432-.588-.384-.948.048-.408.24-.672.432-.9l.648-.708c.228-.276.492-.276.768-.18l.792.3c.24.096.576.192.624.42.204.84.444 1.32 1.056 1.908.516.492.66.576 1.536.888.144.048.276.048.384-.096l.684-.768c.192-.24.456-.3.72-.18.204.096 1.308.612 1.536.744.432.252.72.384.816.588.096.204.096.588-.048.804l-.732.792z"
              />
            </svg>
          </a>
  
          {/* Chat Icon */}
          <a
            href="#"
            className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shadow-md hover:bg-red-600 transition"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 3C6.477 3 2 7.038 2 12c0 2.15.816 4.124 2.299 5.69l-1.26 3.24a.75.75 0 00.947.949l3.24-1.26A9.956 9.956 0 0012 21c5.523 0 10-4.038 10-9s-4.477-9-10-9zm4 11h-8a1 1 0 010-2h8a1 1 0 010 2zm-2-4H8a1 1 0 010-2h6a1 1 0 010 2z" />
            </svg>
          </a>
        </div>
      </footer>
    );
  }
  