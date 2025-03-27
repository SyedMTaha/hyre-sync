'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

// Mock detailed candidate data
const candidateDetails = {
  id: 1,
  name: 'Sarah Khan',
  role: 'Full Stack Developer',
  experience: '5 years',
  skills: ['React', 'Node.js', 'Python', 'MongoDB', 'TypeScript'],
  image: '/assets/avatar1.png',
  email: 'sarah.khan@example.com',
  location: 'Lahore, Pakistan',
  about: 'Experienced Full Stack Developer with a strong background in building scalable web applications...',
  education: 'BS Computer Science - FAST NUCES',
  languages: ['English', 'Urdu'],
  projects: [
    {
      name: 'E-commerce Platform',
      description: 'Built a full-stack e-commerce platform using MERN stack...'
    },
    // Add more projects
  ]
};

export default function CandidateDetails() {
  const params = useParams();
  
  return (
    <div className={`min-h-screen bg-gray-50 ${poppins.className}`}>
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center">
          <Link href="/candidates" className="text-blue-600 hover:text-blue-700 mr-4">
            ← Back to Candidates
          </Link>
          <h1 className="text-2xl font-bold text-[#0057FF]">HyreSync.AI</h1>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="flex items-center space-x-6 mb-8">
            <div className="relative w-24 h-24">
              <Image
                src={candidateDetails.image}
                alt={candidateDetails.name}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">{candidateDetails.name}</h2>
              <p className="text-xl text-blue-600">{candidateDetails.role}</p>
              <p className="text-gray-600">{candidateDetails.location}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <section>
                <h3 className="text-xl font-semibold mb-3">About</h3>
                <p className="text-gray-600">{candidateDetails.about}</p>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">Projects</h3>
                {candidateDetails.projects.map((project, index) => (
                  <div key={index} className="mb-4">
                    <h4 className="font-semibold text-gray-900">{project.name}</h4>
                    <p className="text-gray-600">{project.description}</p>
                  </div>
                ))}
              </section>
            </div>

            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold mb-3">Details</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-gray-700">Experience</p>
                    <p className="text-gray-600">{candidateDetails.experience}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Education</p>
                    <p className="text-gray-600">{candidateDetails.education}</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Languages</p>
                    <p className="text-gray-600">{candidateDetails.languages.join(', ')}</p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-3">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {candidateDetails.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              <button className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition duration-200">
                Contact Candidate
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}