"use client";
import React from "react";
import Image from "next/image";
const founders = [
  {
    name: "Mohd. Shafi",
    role:
      "Founder & Managing Director • Interior Designer • MahaVastu Expert",
    image:
      "https://res.cloudinary.com/dv9tivfvq/image/upload/v1783926150/IMG_20260713_122604.jpg_ffy5fu.jpg",
    description:
      "Mohd. Shafi leads Space Build with a vision of creating premium interiors that combine luxury, functionality, and positive spatial energy. He oversees business strategy, client relationships, design direction, and project planning while ensuring every project reflects exceptional craftsmanship, innovation, and attention to detail. His expertise in Interior Design and MahaVastu helps deliver spaces that are both visually stunning and thoughtfully planned.",
  },
  {
    name: "Shane Alam",
    role:
      "Co-Founder • Director – Operations & Project Execution • Interior Designer",
    image:
      "https://res.cloudinary.com/dv9tivfvq/image/upload/v1783926148/IMG_20260713_122637.jpg_fh3n84.jpg",
    description:
      "Shane Alam manages the complete execution of Space Build projects, ensuring every design is delivered with precision, quality, and efficiency. From site supervision and vendor coordination to timeline management and client communication, he oversees every stage of project execution. His practical approach and leadership ensure every project is completed smoothly while maintaining the highest standards of workmanship.",
  },
  {
    name: "Khusbu",
    role: "Front Office Executive",
    image:
      "https://res.cloudinary.com/dv9tivfvq/image/upload/v1783926146/IMG_20260713_122406.jpg_xmahqg.jpg",
    description:
      "Khusbu is the first point of contact for clients at Space Build and ensures a welcoming, professional experience for every visitor. She manages appointments, client enquiries, office coordination, and administrative support while maintaining smooth communication between clients and the project team. Her organized approach helps create an efficient and customer-focused workplace.",
  },
  {
    name: "Sujeevan Singh",
    role: "Senior Interior Designer",
    image:
      "https://res.cloudinary.com/dv9tivfvq/image/upload/v1783926146/IMG_20260713_122738.jpg_hhrw6z.jpg",
    description:
      "Sujeevan Singh creates elegant and functional interior designs tailored to each client's vision and lifestyle. He specializes in space planning, layout development, furniture concepts, lighting, and material selection while working closely with the execution team. His creative thinking and technical expertise ensure every Space Build project achieves the perfect balance of aesthetics and practicality.",
  },
];
export default function KnowMore() {
  return (
    <section className="bg-[#edf4f8] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-[#B68D40] uppercase tracking-[6px] text-sm font-semibold">
            Meet Our Experts
          </span>
          <h2 className="mt-4 font-[Forum] text-4xl md:text-5xl lg:text-6xl text-[#0F172A]">
            OUR TEAM
          </h2>
          <div className="w-28 h-1 rounded-full bg-[#B68D40] mx-auto mt-6"></div>
          <p className="mt-8 text-gray-600 leading-8 text-base md:text-lg">
            Behind every successful Space Build project is a passionate team of
            designers, planners, and professionals committed to delivering
            luxury interiors with exceptional quality, creativity, and flawless
            execution.
          </p>
        </div>
        {/* Team Cards Start */}
        <div className="space-y-16">
                    {founders.map((member, index) => (
            <div
              key={member.name}
              className="bg-white rounded-[32px] shadow-xl overflow-hidden border border-gray-200"
            >
              <div
                className={`grid lg:grid-cols-2 items-center gap-0 ${
                  index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* ================= IMAGE ================= */}
                <div className="p-6 lg:p-10">
                  <div className="rounded-3xl overflow-hidden bg-[#F5F7FA] shadow-lg">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={700}
                      height={900}
                      priority={index === 0}
                      className="
                        w-full
                        h-[380px]
                        sm:h-[450px]
                        md:h-[520px]
                        lg:h-[560px]
                        object-contain
                        object-center
                      "
                    />
                  </div>
                </div>
                {/* ================= CONTENT ================= */}
                <div className="px-6 pb-8 lg:px-10 lg:pb-10 flex flex-col justify-center">
                  <span className="inline-block text-[#B68D40] font-semibold uppercase tracking-[4px] text-sm mb-3">
                    Space Build Team
                  </span>
                  <h3 className="font-[Forum] text-3xl md:text-4xl text-[#0F172A] leading-tight">
                    {member.name}
                  </h3>
                  <div className="w-20 h-[3px] bg-[#B68D40] rounded-full my-5"></div>
                  <p className="text-[#8B6A2F] text-base md:text-lg font-medium leading-7">
                    {member.role}
                  </p>
                  <p className="mt-6 text-gray-600 text-[16px] md:text-[17px] leading-8 text-justify">
                    {member.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
                  </div>
      </div>
    </section>
  );
}