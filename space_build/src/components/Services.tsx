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
    title: "MAHAVASTU YOGDAN",
    image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGludGVyaW9yJTIwZGVzaWdufGVufDB8MXwwfHx8MA%3D%3D",
    alt: "Modern interior with artistic decor",
    description: "Integrating technology with elegant design",
    link: "#",
  },
  {
    title: "INTERIOR DESIGNING",
    image: "https://res.cloudinary.com/dkpejqlby/image/upload/v1766997001/2_q9dxca.jpg",
    alt: "Luxury pool with classical architecture",
    description: "Creating timeless architectural masterpieces",
    link: "#",
  },
  {
    title: "VASTU GRIDDING SURVEY",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&auto=format&fit=crop&q=100",
    alt: "Modern interior with artistic decor",
    description: "Integrating technology with elegant design",
    link: "#",
  },
  {
    title: "SPATIAL FLOW PLANNING",
    image: "https://res.cloudinary.com/dkpejqlby/image/upload/v1766997044/2_zr6vnt.jpg",
    alt: "Luxury pool with classical architecture",
    description: "Creating timeless architectural masterpieces",
    link: "#",
  },
  {
    title: "MAHAVASTU CONSULTATION",
    image: "https://res.cloudinary.com/dkpejqlby/image/upload/v1766997024/2_wmuetw.jpg",
    alt: "Classical garden with pool and statues",
    description: "Crafting outdoor spaces that inspire",
    link: "#",
  },
  {
    title: "VASTU STYLING",
    image: "https://res.cloudinary.com/dkpejqlby/image/upload/v1766997071/1_vuhagj.jpg",
    alt: "Classical garden with pool and statues",
    description: "Crafting outdoor spaces that inspire",
    link: "#",
  },
  
  {
    title: "VASTU RENOVATION",
    image: "https://res.cloudinary.com/dkpejqlby/image/upload/v1766997058/2_mcrjvd.jpg",
    alt: "Classical garden with pool and statues",
    description: "Crafting outdoor spaces that inspire",
    link: "#",
  },
  {
  title: "PROJECT MANAGEMENT CONSULTATION (PMC)",
  image: "https://res.cloudinary.com/dkpejqlby/image/upload/v1766997027/2_rgmivl.jpg",
  alt: "Professional project management consultation services",
  description: "Professional project management consultation by space build for efficient planning, execution, and delivery.",
  link: "#",
},

  
  
 
];


  return (
    <section className="bg-[#EDF4F8] text-black py-8 md:py-16 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="!text-black text-4xl md:text-5xl font-serif tracking-[0.2em] text-gray-800 mb-8">
            SERVICES
          </h2>
          <p className="text-lg text-gray-600 max-w-7xl mx-auto leading-relaxed">
            At space build, we deliver a complete range of design solutions, spanning architecture, interiors, furniture, lighting, product design, and landscaping—offering clients a seamless and integrated experience. Led by space build’s refined vision, our team blends innovation, precision, and functionality to craft spaces that feel timeless, elegant, and personal. From material selection to colors, textures, and lighting, every detail is thoughtfully curated to create environments—be it homes, commercial spaces, or bespoke furniture—that inspire, engage, and leave a lasting impression.

          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.link}
              className="group relative overflow-hidden cursor-pointer rounded-2xl block"
            >
              <div className="aspect-[4/5] relative overflow-hidden rounded-2xl">
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
                  <h3 className="font-[Forum] text-lg md:text-2xl lg:text-3xl text-white tracking-widest opacity-100 p-3">
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