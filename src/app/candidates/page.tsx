'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

// Mock data for candidates
const candidates = [
  {
    id: 1,
    name: 'Sarah Khan',
    role: 'Full Stack Developer',
    experience: '5 years',
    skills: ['React', 'Node.js', 'Python'],
    image: '/assets/avatar1.jpg',
  },
  {
    id: 2,
    name: 'Ali Ahmed',
    role: 'UI/UX Designer',
    experience: '3 years',
    skills: ['Figma', 'Adobe XD', 'Sketch'],
    image: '/assets/avatar2.jpg',
  },
  // Add more candidates as needed
];

export default function candidatesPage() {
  return (
    <div className={`min-h-screen bg-gray-50 ${poppins.className}`}>
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-[#0057FF]">HyreSync.AI</h1>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Available Candidates</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {candidates.map((candidate) => (
            <Link href={`/candidates/${candidate.id}`} key={candidate.id}>
              <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition duration-200">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="relative w-16 h-16">
                    <Image
                      src={candidate.image}
                      alt={candidate.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{candidate.name}</h3>
                    <p className="text-blue-600">{candidate.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-3">Experience: {candidate.experience}</p>
                <div className="flex flex-wrap gap-2">
                  {candidate.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}