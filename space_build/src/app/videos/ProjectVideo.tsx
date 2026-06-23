import React from 'react';

export default function ProjectVideos() {
  // Add your YouTube video IDs or URLs here
  const videos = [
    'yep8UOXjSsw',
    'HJgSVIPvE5U',
    'irBW5Z7fM_A',
    'q24TxzZICvw',
    'PN4hY5aQ9xw',
    '5od06w8KSMU',
    '8l0-HIR2nRg',
    'OZ4SE-wjGQM',
    '0pYSWYvSgYk',
    'stNPeL8IRNE',
    '_GOINQBZfeo',  // Replace with your video ID
    'dcWHEl1_Ku4',  // Replace with your video ID
    'lyiGx4AnfOA',
    'lj2kGkWH4Ao', 
    '1BdHzbSFRuc', // Replace with your video ID
    '0pYSWYvSgYk',
    
                  // Add more video IDs here
  ];

  return (
    <div className="min-h-screen bg-[#FFF2EB] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-serif tracking-[0.2em] text-gray-800 mb-4 sm:mb-6 lg:mb-8">
          Project Videos
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((videoId, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative pb-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={`Project Video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}