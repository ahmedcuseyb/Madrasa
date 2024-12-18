"use client"

import { FC, useState, ChangeEvent, FormEvent } from 'react';
import Head from 'next/head';

interface FormData {
  email: string;
  password: string;
}

interface FormErrors {
  email: string;
  password: string;
}

const SignInPage: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState<FormErrors>({
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: FormErrors = {
      email: '',
      password: ''
    };

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password = 'Password must be at least 8 characters long and contain a mix of letters, numbers, and special characters';
    }

    setErrors(newErrors);

    const isValid = !newErrors.email && !newErrors.password;

    if (isValid) {
      console.log('Form submitted:', formData);
    }
  };

  const handleShowPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setShowPassword(e.target.checked);
  };

  return (
    <div className="w-full min-h-screen bg-[#04062f] px-4 md:px-10 flex flex-col items-center justify-center">
      <Head>
        <title>Sign In - Umul Qura</title>
      </Head>
      <div className="w-full py-8 flex flex-col items-center">
        {/* <img
          src="/heider.png" 
          alt="Lottobit Logo"
          className="h-16 mb-4"
        />
        <button className="bg-white text-gray-700 px-4 py-2 rounded-lg flex items-center mb-4">
          <img src="/google.svg" alt="Google Logo" className="h-5 mr-2" />
          Continue with Google
        </button>
        <div className="text-center text-white mb-4">OR</div> */}
      </div>
      <div className="w-full flex justify-center">
        <div className="bg-[#1a1a40] shadow-lg rounded-lg p-4 md:p-8 w-full max-w-md mb-8">
          <h2 className="text-center text-2xl font-bold text-white mb-6">Sign In</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-white">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1 bg-transparent text-white"
                placeholder="Email"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div className="mb-6 relative">
              <label htmlFor="password" className="block text-white">Password</label>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mt-1 bg-transparent text-white"
                placeholder="Password"
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="showPassword"
                checked={showPassword}
                onChange={handleShowPasswordChange}
                className="mr-2"
              />
              <label htmlFor="showPassword" className="text-white">Show password</label>
            </div>
            <button
              type="submit"
              className="bg-yellow-500 text-white w-full py-2 rounded-lg"
            >
              Sign In
            </button>
          </form>
          <div className="text-center text-white mt-4">
            Not registered? <a href="/signup" className="text-yellow-500">Create account</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
