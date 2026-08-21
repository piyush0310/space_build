"use client";

import React from "react";
import Image from "next/image";

const AboutSection: React.FC = () => {
  return (
    <section className="bg-[#EDF4F8] py-20 px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[700px]">

          {/* Left Content */}
          <div className="flex flex-col justify-center h-full lg:pr-8">

            <h3 className="text-center text-black font-serif uppercase tracking-[0.35em] text-3xl md:text-5xl mb-8">
              BRAND STORY
            </h3>

            <h4 className="text-center text-black text-2xl md:text-3xl font-medium mb-10">
              Welcome To SPACE BUILD,
            </h4>

            <div className="max-w-xl mx-auto">
              <p className="text-black text-base md:text-lg leading-9 text-left">
                At <strong>SPACE BUILD</strong>, we are passionate about
                transforming spaces into extraordinary experiences. With a
                commitment to innovation, craftsmanship, and personalized
                design, we create interiors that reflect the unique tastes and
                lifestyles of our clients.
                <br />
                <br />
                Our team of skilled designers and architects works closely with
                you to bring your vision to life, blending functionality with
                aesthetics to craft spaces that inspire and delight. From
                concept to completion, we are dedicated to delivering
                exceptional results that exceed expectations and make every
                space truly special.
              </p>
            </div>

          </div>

          {/* Right Image */}
          <div className="relative">

            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1680007889201-114ac772447d?q=80&w=764&auto=format&fit=crop"
                alt="Modern Interior"
                width={700}
                height={700}
                priority
                className="w-full h-[650px] lg:h-[700px] object-cover"
              />
            </div>

            {/* Small Overlay Image */}
            <div className="absolute -bottom-6 -left-6 w-36 h-36 rounded-xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="https://res.cloudinary.com/dkpejqlby/image/upload/v1763232541/p21_rlpio9_bvaerk.png"
                alt="Interior"
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative Blur */}
            <div className="absolute top-8 -right-5 w-20 h-20 bg-[#D4A574] rounded-full opacity-30 blur-2xl"></div>
            <div className="absolute -top-6 left-10 w-16 h-16 bg-black rounded-full opacity-10 blur-xl"></div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;