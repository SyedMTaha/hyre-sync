'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Poppins } from 'next/font/google';
import { useEffect, useState } from 'react';
import FilterModel from '../components/filterModel';

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
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterOptions, setFilterOptions] = useState({
    locations: [],
    germanLevels: [],
    availability: [],
    visaStatus: [],
    skills: [],
    jobTitles: []
  });
  const [selectedFilters, setSelectedFilters] = useState({});

  useEffect(() => {
    fetchFilterOptions();
  }, []);

  const fetchFilterOptions = async () => {
    try {
      const response = await fetch('https://hyresync-backend.vercel.app/filter_options');
      const data = await response.json();
      setFilterOptions(data);
    } catch (error) {
      console.error('Error fetching filter options:', error);
    }
  };

  const handleFilterChange = (filterType: string, value: string) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const handleApplyFilters = () => {
    // Here you would implement the logic to filter candidates based on selectedFilters
    console.log('Applying filters:', selectedFilters);
    setIsFilterOpen(false);
  };
  return (
    <div className={`min-h-screen bg-white ${poppins.className}`}>
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <Link href="/main" className="text-2xl font-bold text-[#0057FF]">HyreSync.AI</Link>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="search"
                placeholder="Search candidates..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
              />
              <svg className="w-5 h-5 text-gray-700 absolute left-3 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <button onClick={() => setIsFilterOpen(true)} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Filter
            </button>
            <FilterModel
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        filterOptions={filterOptions}
        selectedFilters={selectedFilters}
        onFilterChange={handleFilterChange}
        onApplyFilters={handleApplyFilters}
      />
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Available Candidates</h2>
            <p className="text-gray-600 mt-1">Find and connect with top tech talent</p>
          </div>
          <div className="flex gap-2 ">
            <button className="px-4 py-2 border text-gray-500 border-gray-300 rounded-lg hover:bg-gray-50">
              Sort by: Recent
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {candidates.map((candidate) => (
            <Link href={`/candidates/${candidate.id}`} key={candidate.id}>
              <div className="bg-white border rounded-xl p-6 hover:border-blue-500 transition duration-200">
                <div className="flex items-start space-x-4">
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <Image
                      src={candidate.image}
                      alt={candidate.name}
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">{candidate.name}</h3>
                    <p className="text-blue-600 mb-2">{candidate.role}</p>
                    <div className="flex items-center text-gray-600 text-sm mb-3">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {candidate.experience} experience
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {candidate.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}