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
    name: "Mohd. Shafi",
    image:
      "https://res.cloudinary.com/dv9tivfvq/image/upload/v1783926150/IMG_20260713_122604.jpg_ffy5fu.jpg",
    description:
      "Founder & Managing Director • Interior Designer • MahaVastu Expert",
  },
  {
    id: 2,
    name: "Shane Alam",
    image:
      "https://res.cloudinary.com/dv9tivfvq/image/upload/v1783926148/IMG_20260713_122637.jpg_fh3n84.jpg",
    description:
      "Co-Founder • Director – Operations & Project Execution",
  },
    {
    id: 3,
    name: "Khusbu",
    image:
      "https://res.cloudinary.com/dv9tivfvq/image/upload/v1783926146/IMG_20260713_122406.jpg_xmahqg.jpg",
    description:
      "Front Office Executive",
  },
  {
    id: 4,
    name: "Sujeevan Singh",
    image:
      "https://res.cloudinary.com/dv9tivfvq/image/upload/v1783926146/IMG_20260713_122738.jpg_hhrw6z.jpg",
    description:
      "Senior Interior Designer",
  },
];

  return (
    <section id="aboutus" className="py-8 sm:py-6 lg:py-8 px-4 bg-[#EDF4F8]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-8 lg:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif tracking-[0.2em] text-gray-800 mb-4 sm:mb-6 lg:mb-8">
            ABOUT US
          </h2>
<p className="w-full text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed text-center">
  At Space Build, we believe every space has the potential to inspire. We are a passionate team of architects, interior designers, and construction professionals dedicated to creating modern, functional, and timeless spaces that reflect our clients' vision and lifestyle.
  <br /><br />
  From residential homes and luxury interiors to commercial spaces and complete construction solutions, we manage every project with precision, creativity, and attention to detail. Our approach combines innovative design, quality craftsmanship, and transparent communication to ensure a smooth experience from concept to completion.
  <br /><br />
</p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-3 xl:gap-4 lg:items-start">
          {teamMembers.map((member, index) => {
            const isOffset = index % 2 === 1;
            return (
<div
  key={member.id}
  className={`group relative bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2
    ${isOffset ? "lg:mt-16" : ""}
    ${member.id === 3 ? "mt-6 lg:mt-0" : ""}
  `}
>
                {/* Image */}
                <div className="relative h-[360px] sm:h-[360px] md:h-[420px] overflow-hidden bg-gray-100">
                  <Image
  src={member.image}
  alt={member.name}
  fill
  className={`object-cover transition-transform duration-500 group-hover:scale-110 ${
    member.id === 2
      ? "object-[center_25%]"
      : member.id === 3
      ? "object-[center_25%]"
      : member.id === 4
      ? "object-[center_25%]"
      : "object-center"
  }`}
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

  {/* Mobile Description */}
  <p className="block lg:hidden mt-2 text-xs text-gray-600 leading-relaxed">
    {member.description}
  </p>
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