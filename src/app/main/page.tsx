'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export default function LandingPage() {
  return (
    <div className={`min-h-screen ${poppins.className}`}>
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">HyreSync.AI</h1>
            </div>
            <div className="flex space-x-4">
              
              <Link href="./" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Find Top Tech Talent from Pakistan
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Connect with skilled developers, designers, and tech professionals. 
                Streamline your hiring process and build your dream team.
              </p>
              <div className="space-x-4">
                <Link href="./candidates" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 inline-block">
                  Start Hiring
                </Link>
                <Link href="/about" className="text-blue-600 px-6 py-3 rounded-lg border border-blue-600 hover:bg-blue-50 inline-block">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/assets/hero-image.png"
                alt="Hiring Platform"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose HyreSync.AI?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Verified Talent Pool</h3>
              <p className="text-gray-600">Access pre-screened developers and tech professionals from Pakistan.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black  mb-2">Fast Hiring</h3>
              <p className="text-gray-600">Streamlined process to help you hire within weeks, not months.</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold  text-black mb-2">Quality Assured</h3>
              <p className="text-gray-600">Rigorous vetting process ensures top-quality candidates.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#0057FF]">HyreSync.AI</h3>
              <p className="text-gray-600">Connecting German companies with Pakistani talent.</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4 text-black">For Employers</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-600 hover:text-blue-600">How it Works</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-blue-600">Pricing</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-blue-600">Post a Job</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4 text-black">For Talent</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-600 hover:text-blue-600">Browse Jobs</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-blue-600">Create Profile</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-blue-600">Resources</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-4 text-black">Contact</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-600 hover:text-blue-600">Support</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-blue-600">Terms</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-blue-600">Privacy</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-gray-600">
            <p>&copy; 2024 HyreSync.AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}