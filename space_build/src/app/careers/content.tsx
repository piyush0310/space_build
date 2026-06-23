"use client";
import React from "react";
import { Briefcase, Sparkles, Users } from "lucide-react"; // icons

const Careers = () => {
  const jobs = [
    {
      title: "Interior Designer",
      experience: "2+ years",
      location: "Noida",
      link: "/" // Google Form link
    },
    {
      title: "3D Visualizer",
      experience: "1+ years",
      location: "Remote",
      link: "/"// Google Form link
    },
    {
      title: "Project Manager",
      experience: "3+ years",
      location: "Gurgaon",
      link: "/",// Google Form link
    },
  ];

  return (
    <div className="bg-[#f6eade] min-h-screen">
      <div className="pt-[120px]">
        {/* Hero Section */}
        <section className="container mx-auto px-6 text-center mb-16">
          <h1 className="text-5xl font-serif text-black mb-4">
            Join Our Creative Team
          </h1>          
          <div className="max-w-7xl mx-auto">
            <p className="text-gray-700 text-lg leading-relaxed font-light">
              At Vasterior, we believe that great design comes from passionate people. Our team is built on creativity, collaboration, and innovation, and we are always looking for talented individuals who share our vision of redefining spaces with elegance and functionality. Whether you&apos;re a designer, planner, or creative thinker, we offer opportunities to grow, learn, and work on inspiring projects that make a real impact. If you&apos;re ready to be part of a dynamic and forward-thinking design studio, we&apos;d love to hear from you.
            </p>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="container mx-auto px-6 mb-20">
          <h2 className="text-3xl font-serif text-black text-center mb-10">
            Why Work With Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-2xl p-8 text-center hover:shadow-xl transition">
              <Sparkles className="mx-auto text-[#f7d9bc] w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-black">
                Creative Freedom
              </h3>
              <p className="text-gray-600">
                Express your imagination in an environment that values bold ideas.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-2xl p-8 text-center hover:shadow-xl transition">
              <Briefcase className="mx-auto text-[#f7d9bc] w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-black">
                Career Growth
              </h3>
              <p className="text-gray-600">
                Learn, evolve, and take on leadership roles as you progress.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-2xl p-8 text-center hover:shadow-xl transition">
              <Users className="mx-auto text-[#f7d9bc] w-10 h-10 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-black">
                Team Spirit
              </h3>
              <p className="text-gray-600">
                Collaborate with supportive colleagues who inspire and uplift you.
              </p>
            </div>
          </div>
        </section>

        {/* Current Openings */}
        <section className="container mx-auto px-6 pb-16">
          <h2 className="text-4xl font-serif text-black text-center mb-12">
            Current Openings
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {jobs.map((job, idx) => (
              <div
                key={idx}
                className="p-8 bg-white shadow-lg rounded-2xl hover:shadow-xl transition relative overflow-hidden group"
              >
                {/* Decorative highlight */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#f7d9bc] opacity-20 rounded-bl-full transform translate-x-6 -translate-y-6 group-hover:scale-110 transition"></div>

                <h3 className="text-2xl text-black font-semibold mb-2">
                  {job.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  Experience: {job.experience} | Location: {job.location}
                </p>
                <a
                  href={job.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#f7d9bc] hover:bg-[#f5c89d] text-white font-medium px-6 py-2 rounded-lg transition"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </section>

        
      </div>
    </div>
  );
};

export default Careers;