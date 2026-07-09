import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Service {
  title: string;
  image: string;
  alt: string;
  description: string;
  link: string;
}

const Services: React.FC = () => {
 
  const services: Service[] = [
  {
    title: "VASTU CONSTRUCTION",
    image: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1783419078/8ef1e54938f4d6e27c32899b13b6da1c_e09pjm.jpg",
    alt: "Modern interior with artistic decor",
    description: "Integrating technology with elegant design",
    link: "/services/vastu-construction",
  },
  {
    title: "INTERIOR DESIGNING",
    image: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1782801422/IMG_20260630_112458.jpg_s8tdsa.jpg",
    alt: "Luxury pool with classical architecture",
    description: "Creating timeless architectural masterpieces",
    link: "/services/interior-designing",
  },
  
  {
    title: "VASTU RENOVATION",
    image: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1783508093/5ee5666025888d7cdd2271f53610ad1f_t9kje4.jpg",
    alt: "Classical garden with pool and statues",
    description: "Crafting outdoor spaces that inspire",
    link: "/services/vastu-renovation",
  },
  {
  title: "PROJECT MANAGEMENT CONSULTATION (PMC)",
  image: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1783508412/IMG_20260708_162906.jpg_atgdaa.jpg",
  alt: "Professional project management consultation services",
  description: "Professional project management consultation by SPACE BUILD for efficient planning, execution, and delivery.",
  link: "/services/project-management-consultation",
},
{
  title: "MODULER KITCHEN",
  image: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1783504422/1e1d2cae7decd74c98231647a79a911d_oqeof0.jpg",
  alt: "Modern moduler kitchen design and installation services",
  description: "Premium moduler kitchen solutions by SPACE BUILD with smart storage, modern designs, customized layouts, and elegant finishes.",
  link: "/services/moduler-kitchen",
},
{
  title: "PEST CONTROL SERVICE",
  image: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1783504729/c7a4c1b3449132996089eba738fbdafb_srwqml.jpg",
  alt: "Professional pest control and pest management services",
  description: "Reliable pest control solutions by SPACE BUILD for homes, offices, and commercial spaces with effective treatment, protection, and hygiene-focused services.",
  link: "/services/pest-control-services",
},
  
  
 
];


  return (
    <section className="bg-[#EDF4F8] text-black py-2 md:py-4 px-3">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="!text-black text-4xl md:text-5xl font-serif tracking-[0.2em] text-gray-800 mb-8">
            SERVICES
          </h2>
          <p className="text-lg text-gray-600 max-w-7xl mx-auto leading-relaxed">
            At SPACE BUILD, we deliver a complete range of design solutions, spanning architecture, interiors, furniture, lighting, product design, and landscaping—offering clients a seamless and integrated experience. Led by SPACE BUILD’s refined vision, our team blends innovation, precision, and functionality to craft spaces that feel timeless, elegant, and personal. From material selection to colors, textures, and lighting, every detail is thoughtfully curated to create environments—be it homes, commercial spaces, or bespoke furniture—that inspire, engage, and leave a lasting impression.

        </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className="group relative overflow-hidden cursor-pointer rounded-2xl block"
            >
              <div className="aspect-[4/4.4] relative overflow-hidden rounded-2xl">
                {service.image.startsWith('http') ? (
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="w-full h-full object-cover transition-transform duration-700 
                             scale-100 group-hover:scale-105 rounded-lg"
                  />
                ) : (
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-cover transition-transform duration-700 
                             scale-100 group-hover:scale-105 rounded-lg"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 25vw"
                  />
                )}
                <div className="absolute inset-0 bg-black/50 rounded-lg" />
                <div className="absolute inset-0 flex items-center justify-center text-center">
                  <h3 className="font-[Forum] text-base md:text-xl lg:text-2xl text-white tracking-widest p-3">
                    {service.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;