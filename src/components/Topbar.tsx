import React from "react";
import {
  IoLocationOutline,
  IoCallOutline,
  IoMailOutline,
} from "react-icons/io5";

const TopBar: React.FC = () => {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-4">
        <div className="py-2">
          {/* Mobile & Desktop Layout */}
          <div className="flex justify-between items-start md:items-center">
            
            {/* Left Side - Phone Numbers */}
            <div className="flex flex-row md:flex-row md:items-center">
              
              {/* Phone 1 */}
              <a
                href="tel:+919927611780"
                className="flex items-center space-x-1 sm:space-x-2 text-gray-600 hover:text-purple-600 transition-colors duration-200"
                aria-label="Call us"
              >
                <IoCallOutline
                  className="w-4 h-4 sm:w-5 sm:h-5 text-black"
                  aria-hidden="true"
                />
                <span className="text-[10px] sm:text-sm whitespace-nowrap">
                     +91 9927611780
                 </span>
              </a>

              {/* Mobile + Desktop Separator */}
                <div className="w-px h-4 bg-gray-300 mx-2 sm:mx-3"></div>

              {/* Phone 2 */}
              <a
                href="tel:+918077973797"
                className="flex items-center space-x-1 sm:space-x-2 text-gray-600 hover:text-purple-600 transition-colors duration-200"
                aria-label="Call us"
              >
                <IoCallOutline
                  className="w-4 h-4 sm:w-5 sm:h-5 text-black"
                  aria-hidden="true"
                />
                <span className="text-[10px] sm:text-sm whitespace-nowrap"> 
                      +91 8077973797
                  </span>
              </a>
            </div>

           {/* Mobile Only Divider */}
              <div className="block md:hidden w-px h-5 bg-gray-300 mx-2 shrink-0"></div>

{/* Right Side - Email */}
<a
  href="mailto:spacebuild.india@gmail.com"
  className="flex items-center space-x-1 sm:space-x-2 text-gray-600 hover:text-purple-600 transition-colors duration-200"
  aria-label="Email us"
>
  <IoMailOutline
    className="w-4 h-4 sm:w-5 sm:h-5 text-black"
    aria-hidden="true"
  />

  <span className="text-[10px] sm:text-sm">
    spacebuild.india@gmail.com
  </span>
</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;