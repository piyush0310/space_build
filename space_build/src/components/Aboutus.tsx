import React from 'react';
import Image from 'next/image';

interface TeamMember {
  id: number;
  name: string;
  image: string;
  description: string;
}

const AboutUs: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Mr. John Doe',
      image: 'https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8MXwwfHx8MA%3D%3D',
      description: 'Interior Designer and MahaVastu Acharya.',
    },
    {
      id: 2,
      name: 'Mrs. Jane Smith',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHwxfDB8fHww',
      description: 'Wedding Designer and Interior Stylist.',
    },
    {
      id: 3,
      name: 'Ms. Emily Davis',
      image: 'https://plus.unsplash.com/premium_photo-1670884441862-ddb29ed1f25e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvZmVzc2lvbmFsJTIwd29tYW58ZW58MHwxfDB8fHww',
      description: 'MahaVastu Acharya & Astrologer.',
    },
    {
      id: 4,
      name: 'Mr. Michael Brown',
      image: 'https://images.unsplash.com/photo-1624797432677-6f803a98acb3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmVzc2lvbmFsJTIwbWFufGVufDB8MXwwfHx8MA%3D%3D',
      description: 'Interior Stylist and Director.',
    },
  ];

  return (
    <section id="aboutus" className="py-8 sm:py-12 lg:py-16 px-4 bg-[#EDF4F8]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif tracking-[0.2em] text-gray-800 mb-4 sm:mb-6 lg:mb-8">
            ABOUT US
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-2">
            A dedicated group of skilled designers and architects committed to delivering
            personalized, functional, and aesthetically pleasing interior design solutions.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-6 xl:gap-8 lg:items-start">
          {teamMembers.map((member, index) => {
            const isOffset = index % 2 === 1;
            return (
              <div
                key={member.id}
                style={{
                  marginTop: isOffset ? '4rem' : '0rem',
                }}
                className="group relative bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/* Description */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <p className="text-xs sm:text-sm leading-relaxed font-medium">
                      {member.description}
                    </p>
                  </div>
                </div>

                {/* Name */}
                <div className="p-4 text-center">
                  <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800">
                    {member.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;