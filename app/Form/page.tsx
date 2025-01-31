"use client"
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface FormData {
  fullName: string;
  age: string;
  email: string;
  phone: string;
  telegramHandle: string;
  marketingExperience: string;
  marketingDescription: string;
  knowledgeOfGame: string;
  knowledgeOfCrypto: string;
  motivation: string;
}

interface FormErrors {
  fullName: string;
  age: string;
  email: string;
  phone: string;
  telegramHandle: string;
  marketingExperience: string;
}

const Page: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    age: "",
    email: "",
    phone: "+252",
    telegramHandle: "",
    marketingExperience: "",
    marketingDescription: "",
    knowledgeOfGame: "",
    knowledgeOfCrypto: "",
    motivation: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    fullName: "",
    age: "",
    email: "",
    phone: "",
    telegramHandle: "",
    marketingExperience: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  useEffect(() => {
    const path = localStorage.getItem("path");
  }, []);

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "fullName":
        return value.trim() === "" ? "Full Name is required." : "";
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Invalid email format.";
      case "phone":
        return /^\d{10,15}$/.test(value) ? "" : "Invalid phone number.";
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

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = {
      fullName: validateField("fullName", formData.fullName),
      email: validateField("email", formData.email),
      phone: validateField("phone", formData.phone),
    };
  };

  return (
    <div className="text-gray-800 flex justify-center items-center min-h-screen flex-col">
      <div className="w-[92%] max-w-md mt-[10rem] mb-5 p-6 md:p-8 space-y-6 bg-gradient-to-b bg-[#fff] border-solid border-blue border-[2px] rounded-xl shadow-3xl md:mt-24">
        <div className="text-center">
        <h2 className="text-2xl font-semibold mb-6 text-center">Formka Codsiga ee Sarifaha-Litavo</h2>
        <p>Fadlan buuxi macluumaadkaaga hoose si aad uga qayb qaadato barnaamijka Litavo 
              qeybteeda sarifka LTV ga.
        </p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-semibold text-gray-800">Magaca oo dhammeystiran</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="text-gray-500 block bg-white-150 w-full px-4 py-3 mt-1 border border-gray-200 rounded-md shadow-sm sm:text-sm outline-none"
              placeholder="Enter your full name"
            />
            {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-800">Da'da</label>
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="text-gray-500 block bg-white-150 w-full px-4 py-3 mt-1 border border-gray-200 rounded-md shadow-sm sm:text-sm outline-none"
              placeholder="Enter your age"
            />
            {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-800">Emailka</label>
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
            <label className="block text-sm font-semibold text-gray-800">Lambarka Taleefanka</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="text-gray-500 block bg-white-150 w-full px-4 py-3 mt-1 border border-gray-200 rounded-md shadow-sm sm:text-sm outline-none"
              placeholder="Enter your phone number"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-800">Magaca Taleefarmka (Telegram Handle)</label>
            <input
              type="text"
              name="telegramHandle"
              value={formData.telegramHandle}
              onChange={handleChange}
              className="text-gray-500 block bg-white-150 w-full px-4 py-3 mt-1 border border-gray-200 rounded-md shadow-sm sm:text-sm outline-none"
              placeholder="Enter your Telegram handle"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">Ma leedahay waayo-aragnimo iibin?  
            </label>
            <div className="space-y-4 mt-2">
              <p className="items-center text-sm">
                <input type="radio" name="has-opinion" className="form-radio" /> Haa
              </p>
              <p className="items-center text-sm">
                <input type="radio" name="has-opinion" className="form-radio" /> Maya
              </p>
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-800">Haddii ay jawaabtu tahay 'Haa', sharax waayo-argimimadda</label>
            <textarea
              name="marketingDescription"
              value={formData.marketingDescription}
              className="text-gray-500 block bg-white-150 w-full px-4 py-3 mt-1 border border-gray-200 rounded-md shadow-sm sm:text-sm outline-none"
              placeholder="Describe your marketing experience"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">Ma ciyaartay Litavo Game ama ma leedahay aqoon ku saabsan?</label>
          <div className="space-y-4 mt-2">
              <p className="items-center text-sm">
                <input type="radio" name="has-experience" className="form-radio" /> Haa, waan ciyaaray
              </p>
              <p className="items-center text-sm">
                <input type="radio" name="has-experience" className="form-radio" /> Maya, weli ma ciyaarin
              </p>
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700">Maxaad ka taqaan isdhexgalka lacagaha cryptocurrency ama coinnada?</label>
            <div className="space-y-4 mt-2">
              <p className="items-center text-sm">
                  <input type="radio" name="crypto-knowledge" className="form-radio" /> <span className="ml-2">aad ufiican </span>
              </p>
              <p className="items-center text-sm">
                  <input type="radio" name="crypto-knowledge" className="form-radio" /> <span className="ml-2">Dhexdhaxaad ah</span>
              </p>
              <p className="items-center text-sm">
                  <input type="radio" name="crypto-knowledge" className="form-radio" /> <span className="ml-2">Ma badna</span>
              </p>
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-800">Maxaa kuugu dhiirrigeliyay inaad rabto inaad noqoto sariflaha Litavo?</label>
            <textarea
              name="motivation"
              value={formData.motivation}
              className="text-gray-500 block bg-white-150 w-full px-4 py-3 mt-1 border border-gray-200 rounded-md shadow-sm sm:text-sm outline-none"
              placeholder="What motivated you?"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex items-center lg:px-[42px] px-5 h-14 justify-center text-lg text-blue font-normal border-solid bg-[#F1C017] hover:bg-yellow-600 shadow-3xl border-blue border-[2px] rounded-xl relative"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="flex items-center justify-center mt-4">
          
        </div>
      </div>
    </div>
  );
};

export
default Page;
