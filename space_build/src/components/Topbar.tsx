import React from 'react';
import { 
  IoLocationOutline, 
  IoCallOutline, 
  IoMailOutline 
} from 'react-icons/io5';

const TopBar: React.FC = () => {
  return (
    <div className="bg-white border-b border-gray-200 py-2">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm">
          {/* Phone */}
          <a 
            href="tel:+91992706086899," 
            className="flex items-center space-x-1 sm:space-x-2 text-gray-600 hover:text-purple-600 transition-colors duration-200"
            aria-label="Call us"
          >
            <IoCallOutline className="w-4 h-4 sm:w-5 sm:h-5 text-black" aria-hidden="true" />
            <span className="text-xs sm:text-sm">+91992706086899</span>
          </a>
          {/* Separator */}
          <div className="hidden md:block w-px h-4 bg-gray-300"></div>
          <a 
            href="tel:+918077970608," 
            className="flex items-center space-x-1 sm:space-x-2 text-gray-600 hover:text-purple-600 transition-colors duration-200"
            aria-label="Call us"
          >
            <IoCallOutline className="w-4 h-4 sm:w-5 sm:h-5 text-black" aria-hidden="true" />
            <span className="text-xs sm:text-sm">+918077970608</span>
          </a>

          {/* Separator */}
          <div className="hidden md:block w-px h-4 bg-gray-300"></div>

          {/* Email */}
          <a 
            href="mailto:spacebuild.india@gmail.com" 
            className="flex items-center space-x-1 sm:space-x-2 text-gray-600 hover:text-purple-600 transition-colors duration-200"
            aria-label="Email us"
          >
            <IoMailOutline className="w-4 h-4 sm:w-5 sm:h-5 text-black" aria-hidden="true" />
            <span className="sm:inline text-xs sm:text-sm">spacebuild.india@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
