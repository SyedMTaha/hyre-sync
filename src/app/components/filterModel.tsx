import React from 'react';

interface FilterOptions {
  locations: string[];
  germanLevels: string[];
  availability: string[];
  visaStatus: string[];
  skills: string[];
  jobTitles: string[];
}

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  filterOptions: FilterOptions;
  selectedFilters: any;
  onFilterChange: (filterType: string, value: string) => void;
  onApplyFilters: () => void;
}

export default function filterModel({ isOpen, onClose, filterOptions, selectedFilters, onFilterChange, onApplyFilters }: FilterModalProps) {
    if (!isOpen) return null;
  
    // Add safety check for filterOptions
    const safeFilterOptions = {
      locations: filterOptions?.locations || [],
      germanLevels: filterOptions?.germanLevels || [],
      availability: filterOptions?.availability || [],
      visaStatus: filterOptions?.visaStatus || [],
      skills: filterOptions?.skills || [],
      jobTitles: filterOptions?.jobTitles || []
    };
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl p-6 w-full max-w-md">
          {/* ... existing code ... */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <select 
                className="w-full border border-gray-300 rounded-lg p-2 text-black"
                onChange={(e) => onFilterChange('location', e.target.value)}
                value={selectedFilters.location || ''}
              >
                <option value="">All Locations</option>
                {safeFilterOptions.locations.map((location) => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">German Level</label>
              <select 
                className="w-full border border-gray-300 rounded-lg p-2 text-black"
                onChange={(e) => onFilterChange('germanLevel', e.target.value)}
                value={selectedFilters.germanLevel || ''}
              >
                <option value="">All Levels</option>
                {safeFilterOptions.germanLevels.map((level) => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
            {/* ... rest of the code ... */}
          </div>
        </div>
      </div>
    );
  }