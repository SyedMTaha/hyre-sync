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
  1: {
    id: 1,
    name: 'Sarah Khan',
    role: 'Full Stack Developer',
    experience: '5 years',
    skills: ['React', 'Node.js', 'Python', 'MongoDB', 'TypeScript'],
    image: '/assets/avatar1.jpg',
    email: 'sarah.khan@example.com',
    location: 'Lahore, Pakistan',
    about: 'Experienced Full Stack Developer with a strong background in building scalable web applications...',
    education: 'BS Computer Science - FAST NUCES',
    languages: ['English', 'Urdu'],
    projects: [
      {
        name: 'E-commerce Platform',
        description: 'Built a full-stack e-commerce platform using MERN stack...'
      }
    ],
    workExperience: [
      {
        role: 'Senior Full Stack Developer',
        company: 'TechCorp Solutions',
        duration: '2020 - Present',
        description: 'Leading development of enterprise web applications using React and Node.js...'
      },
      {
        role: 'Full Stack Developer',
        company: 'Digital Innovations',
        duration: '2018 - 2020',
        description: 'Developed and maintained multiple client projects...'
      }
    ],
    certifications: [
      {
        name: 'AWS Certified Developer',
        issuer: 'Amazon Web Services',
        year: '2022'
      },
      {
        name: 'MongoDB Certified Developer',
        issuer: 'MongoDB University',
        year: '2021'
      }
    ],
    references: [
      {
        name: 'John Smith',
        role: 'Technical Director',
        company: 'TechCorp Solutions',
        recommendation: 'Sarah is an exceptional developer with strong problem-solving skills...'
      }
    ]
  },
  2: {
    id: 2,
    name: 'Ali Ahmed',
    role: 'UI/UX Designer',
    experience: '3 years',
    skills: ['Figma', 'Adobe XD', 'Sketch', 'User Research'],
    image: '/assets/avatar2.jpg',
    email: 'ali.ahmed@example.com',
    location: 'Karachi, Pakistan',
    about: 'Creative UI/UX Designer with a passion for creating intuitive and engaging user experiences...',
    education: 'BFA Design - NCA',
    languages: ['English', 'Urdu'],
    projects: [
      {
        name: 'Healthcare App Design',
        description: 'Designed a user-friendly healthcare application focusing on accessibility...'
      }
    ],
    workExperience: [
      {
        role: 'Senior UI/UX Designer',
        company: 'DesignLab Solutions',
        duration: '2021 - Present',
        description: 'Led the UX strategy and design process for multiple enterprise and consumer-facing applications...',
      },
      {
        role: 'UI/UX Designer',
        company: 'Creative Digital Agency',
        duration: '2019 - 2021',
        description: 'Designed user interfaces and conducted user research for various client projects...',
      }
    ],
    certifications: [
      {
        name: 'Google UX Design Certificate',
        issuer: 'Google',
        year: '2022',
      },
      {
        name: 'Adobe Certified Expert - UX Design',
        issuer: 'Adobe',
        year: '2021',
      }
    ],
    references: [
      {
        name: 'Emma Wilson',
        role: 'Design Lead',
        company: 'DesignLab Solutions',
        recommendation:
          'Ayesha is a talented designer with a deep understanding of user experience principles and visual aesthetics...',
      }
    ]
  }
};

export default function  CandidateDetails() {
    const params = useParams();
    const candidateId = typeof params.id === 'string' ? parseInt(params.id) : null;
    const candidate = candidateId ? candidateDetails[candidateId as keyof typeof candidateDetails] : null;
  
    if (!candidate) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">Candidate not found</h2>
            <Link href="/candidates" className="text-blue-600 hover:text-blue-700 mt-4 inline-block">
              ← Back to Candidates
            </Link>
          </div>
        </div>
      );
    }
  
  
  return (
    <div className={`min-h-screen bg-white ${poppins.className}`}>
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/candidates" className="text-blue-600 hover:text-blue-700 flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Search
          </Link>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Share Profile
          </button>
        </div>
      </nav>
  
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Header Section */}
          <div className="flex items-start gap-6">
            <div className="relative w-32 h-32">
              <Image
                src={candidate.image}
                alt={candidate.name}
                fill
                className="rounded-lg object-cover border-2 border-gray-100"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{candidate.name}</h1>
              <p className="text-xl text-blue-600 mb-2">{candidate.role}</p>
              <div className="flex items-center gap-4 text-gray-600">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {candidate.location}
                </span>
                <span>•</span>
                <span>{candidate.experience} Experience</span>
              </div>
            </div>
          </div>
  
          {/* Main Content Grid */}
          <div className="grid grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="col-span-2 space-y-8">
              <section className="bg-white rounded-lg border p-6">
                <h2 className="text-xl font-semibold mb-4 text-black">About</h2>
                <p className="text-gray-600 leading-relaxed">{candidate.about}</p>
              </section>
  
              <section className="bg-white rounded-lg border p-6">
                <h2 className="text-xl font-semibold mb-4 text-black">Projects</h2>
                <div className="space-y-6">
                  {candidate.projects.map((project, index) => (
                    <div key={index}>
                      <h3 className="font-semibold text-gray-900">{project.name}</h3>
                      <p className="text-gray-600 mt-2">{project.description}</p>
                    </div>
                  ))}
                </div>
                
              </section>

              <section className="bg-white rounded-lg border p-6">
                <h2 className="text-xl font-semibold mb-4 text-black">Work Experience</h2>
                <div className="space-y-6">
                  {candidate.workExperience.map((experience, index) => (
                    <div key={index} className="border-l-2 border-gray-200 pl-4">
                      <h3 className="font-semibold text-gray-900">{experience.role}</h3>
                      <p className="text-blue-600">{experience.company}</p>
                      <p className="text-sm text-gray-500 mb-2">{experience.duration}</p>
                      <p className="text-gray-600">{experience.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-white rounded-lg border p-6">
                <h2 className="text-xl font-semibold mb-4 text-black">Certifications</h2>
                <div className="grid grid-cols-2 gap-4">
                  {candidate.certifications.map((cert, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-semibold text-gray-900">{cert.name}</h3>
                      <p className="text-sm text-gray-600">{cert.issuer}</p>
                      <p className="text-sm text-gray-500">{cert.year}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section className="bg-white rounded-lg border p-6">
                <h2 className="text-xl font-semibold mb-4 text-black">References</h2>
                <div className="space-y-6">
                  {candidate.references.map((reference, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold text-gray-900">{reference.name}</h3>
                        <span className="text-gray-500">•</span>
                        <p className="text-gray-600">{reference.role}</p>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{reference.company}</p>
                      <p className="text-gray-600 italic">"{reference.recommendation}"</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
  
            {/* Right Column */}
            <div className="space-y-6">
              <section className="bg-white rounded-lg border p-6">
                <h2 className="text-lg font-semibold mb-4 text-black">Contact</h2>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200">
                  Message Candidate
                </button>
                <p className="text-center text-sm text-gray-500 mt-3">
                  Usually responds within 24 hours
                </p>
              </section>
  
              <section className="bg-white rounded-lg border p-6">
                <h2 className="text-lg font-semibold mb-4 text-black">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {candidate.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>
  
              <section className="bg-white rounded-lg border p-6">
                <h2 className="text-lg font-semibold mb-4 text-black">Details</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500">Education</p>
                    <p className="text-gray-900">{candidate.education}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Languages</p>
                    <p className="text-gray-900">{candidate.languages.join(', ')}</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}