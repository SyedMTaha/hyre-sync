'use client';

import React, {useState} from 'react';
import Image from 'next/image';
import { Poppins } from 'next/font/google'
import {useRouter} from 'next/navigation';
import Link from 'next/link';
import {auth } from '../../config/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

const handleGoogleSignIn = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    // Handle successful sign in
    console.log(result.user);
  } catch (error) {
    // Handle errors
    console.error(error);
  }
};

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    // Password length validation
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    // If validation passes, proceed with authentication
    // For demo purposes, using a simple check
    if (email === 'demo@gmail.com' && password === '123456') {
      router.push('/main');
    } else {
      setError('Invalid email or password');
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log('Google Sign In successful', result.user);
      router.push('/main'); // Redirect after successful sign in
    } catch (error) {
      console.error('Google Sign In Error:', error);
      setError('Failed to sign in with Google');
    }
  };
    
    // After successful authentication, navigate to main page
    // router.push('/main');

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
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              {error}
            </div>
          )}
          
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium  text-black mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 text-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium   text-black mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300  text-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                onClick={handleGoogleSignIn}
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
