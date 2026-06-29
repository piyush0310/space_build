"use client";

import React from "react";
import Image from "next/image";

const AboutSection: React.FC = () => {
  const [showMore, setShowMore] = React.useState(false);

  const handleKnowMoreClick = () => {
    const servicesElement = document.getElementById("services");
    if (servicesElement) {
      servicesElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="relative bg-[#EDF4F8] py-16 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Brand Story Header */}
            <div className="space-y-2">
              <h3 className="text-black text-2xl md:text-4xl text-center font-serif tracking-[0.3em] uppercase">
                BRAND STORY
              </h3>
            </div>

            {/* Welcome Text */}
            <h4 className="text-black text-center text-lg md:text-2xl font-medium">
              Welcome To SPACE BUILD, 
            </h4>

            {/* Full Description */}
            <div className="space-y-2 text-left text-black text-sm md:text-base lg:text-lg leading-relaxed max-w-prose mx-auto">
             <p>At SPACE BUILD, we are passionate about transforming spaces into extraordinary experiences. With a commitment to innovation, craftsmanship, and personalized design, we create interiors that reflect the unique tastes and lifestyles of our clients. Our team of skilled designers and architects work closely with you to bring your vision to life, blending functionality with aesthetics to craft spaces that inspire and delight. From concept to completion, we are dedicated to delivering exceptional results that exceed expectations and make every space truly special.</p>
              
              
              
            </div>
          </div>

          {/* Right Images */}
          <div className="relative">
            {/* Main Large Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1680007889201-114ac772447d?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={600}
                height={500}
                alt="Modern interior design showcase"
                className="w-full h-[700px] object-cover"
                priority
              />
            </div>

            {/* Small Overlay Image */}
            <div className="absolute -bottom-6 -left-6 w-36 h-36 rounded-xl overflow-hidden shadow-xl bg-white">
              <Image
                src="https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p21_rlpio9_bvaerk.png"
                width={200}
                height={200}
                alt="Interior design detail"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-8 -right-4 w-20 h-20 bg-[#d4a574] opacity-20 rounded-full blur-xl"></div>
            <div className="absolute -top-6 left-12 w-14 h-14 bg-black opacity-10 rounded-full blur-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;