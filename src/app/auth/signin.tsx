'use client';

import React from 'react';
import Image from 'next/image';
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export default function SignIn() {
  return (
    <div className={`flex items-center justify-center min-h-screen bg-[#0057FF] ${poppins.className}`} >
      <div className="flex bg-white  shadow-md w-full max-w-5xl overflow-hidden">
        {/* Left side - Image */}
        <div className="hidden md:block w-1/2 relative">
        <p className='text-2xl font-bold absolute z-10 p-6'>HyreSync.AI</p>
        <p className='text-small font-light absolute z-10 p-6 mt-10'> Make your dream job come to reality!</p>
          <Image
            src="/assets/login.png"
            alt="Login illustration"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {/* Right side - Login Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-black mb-6 text-center">Login to Your Account</h2>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium  text-black mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium   text-black mb-1">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-200"
            >
              Sign In
            </button>

            {/* Social Login Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            {/* Social Login Buttons */}
            <div className="space-y-3">
              <button
                type="button"
                className="w-full flex items-center justify-center px-4 py-2 border text-black border-gray-300 rounded-xl hover:bg-gray-50 transition duration-200"
              >
                <Image src="/assets/google-icon.png" alt="Google" width={30} height={30} className="mr-2" />
                Continue with Google
              </button>
              <button
                type="button"
                className="w-full flex items-center justify-center px-4 py-2 border text-black border-gray-300 rounded-xl hover:bg-gray-50 transition duration-200"
              >
                <Image src="/assets/apple-icon.png" alt="Apple" width={30} height={30} className="mr-2" />
                Continue with Apple
              </button>
            </div>
          </form>
          
        </div>
      </div>
    </div>
  );
}
