"use client"
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import Link from "next/link";

import { FaEye, FaEyeSlash } from "react-icons/fa";


interface FormData {
  name: string;
  email: string;
  phone: string;
  password: string;
  role: string;
  referralCode?: string;
}

interface FormErrors {
  name: string;
  email: string;
  phone: string;
  password: string;
}

interface SignUpError {
  status: number;
  data: {
    message: string;
  };
}

const Page: React.FC = () => {

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "+252",
    password: "",
    role: "player",
    
  });

  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

 

  useEffect(() => {
    const path = localStorage.getItem("path");
  }, []);

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "name":
        return value.trim() === "" ? "Name is required." : "";
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ""
          : "Invalid email format.";
      // case "phone":
      //   return /^\d{10,15}$/.test(value) ? "" : "Invalid phone number.";
      // case "password":
      //   return /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value)
      //     ? ""
      //     : "Password must be at least 8 characters, include one uppercase, one number, and one special character.";
      default:
        return "";
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Validate in real-time
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      phone: validateField("phone", formData.phone),
      password: validateField("password", formData.password),
    };

    setErrors(validationErrors);

   
  };

 

 

  return (
    <div className="text-gray-800 flex justify-center items-center min-h-screen flex-col">
      <div className="w-[92%] max-w-md mt-[10rem] mb-5 p-6 md:p-8 space-y-6 bg-gradient-to-b bg-[#fff] border-solid border-blue border-[2px] rounded-xl shadow-3xl md:mt-24">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            Sign <span className="text-[#F1BF04]">Up</span>
          </h2>
          <p className="mt-2 text-gray-800">Welcome to Litavo</p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-800">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="text-gray-500 block bg-white-150 w-full px-4 py-3 mt-1 border border-gray-200 rounded-md shadow-sm sm:text-sm outline-none"
              placeholder="Enter your Name"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-800">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="text-gray-500 block bg-white-150 w-full px-4 py-3 mt-1 border border-gray-200 rounded-md shadow-sm sm:text-sm outline-none"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-800">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="text-gray-500 block bg-white-150 w-full px-4 py-3 mt-1 border border-gray-200 rounded-md shadow-sm sm:text-sm outline-none"
              placeholder="Enter your phone"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>
          <div className="relative">
            <label className="block text-sm font-medium text-gray-800">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="text-gray-500 block bg-white-150 w-full px-4 py-3 mt-1 border border-gray-200 rounded-md shadow-sm sm:text-sm outline-none"
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute top-[1.34rem] inset-y-0 right-5 flex items-center text-gray-400"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
          <div>
            <button
              type="submit"
              className="w-full flex items-center lg:px-[42px] px-5 h-14 justify-center text-lg text-blue font-normal border-solid bg-[#F1C017] hover:bg-yellow-600 shadow-3xl border-blue border-[2px] rounded-xl relative"
            >
           
            </button>
            
          </div>
        </form>
        <div className="flex items-center justify-center mt-4">
          <p className="text-center text-gray-800">
            {" "}
            Already have an account?{" "}
            <Link href="/signin" legacyBehavior>
              <span className="font-medium text-[#F1C017] cursor-pointer">Sign In</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;