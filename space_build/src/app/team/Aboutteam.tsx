"use client";

import React from "react";

  const founders = [
    {
      name: "Mohd. Shafi",
      role: "Interior Designer • MahaVastu Expert • Founder, Space Build",
      bio: [
        "Raised in Hyderabad and rooted in the quiet power of design, Mohd. Shafi represents a rare blend of technical precision, spiritual sensitivity, and instinctive aesthetic intelligence. His journey began long before Space Build took shape, in the corridors of his family's tile and stone business, where textures, materials, and craftsmanship shaped his earliest memories of space.",
        "A Hyderabad boy through and through, Mohd. Shafi completed his schooling and BBA graduation there, carrying forward a deep appreciation for culture, structure, and disciplined work ethics. Soon after, he stepped into the family business ecosystem, gaining hands-on experience in tiles, stones, and later, the manufacturing of packaging materials and corrugated cardboard. These early chapters gave him a tactile understanding of materials, something that continues to define his design language today.",
        "But his true calling emerged at the intersection of art, energy, and functionality.",
        "Driven by curiosity, Mohd. Shafi began journey in spatial designing and became a certified interior designer. Along with learning the theories of spatial alignment and planning, he also learned design tools like AutoCAD and gradually immersed himself in the science of spatial energy. What started as exploration soon turned into mastery, as he trained rigorously in Vastu Shastra and ultimately evolved into a certified MahaVastu expert. Over time, he developed a keen ability to read the subtle energy flow of spaces, understanding how direction, activity, objects, and intention shape human experience.",
        "In 2023, this vision found its home in Space Build, co-founded with his college friend and creative collaborator Jane Smith. Together, they built a design philosophy rooted in a simple belief:",
        "A space should not only look beautiful, it should feel aligned, effortless, and alive.",
      ],
      highlights: [
        "Design & Direction",
        "Materiality & Energy",
        "Luxury Aesthetics & Vastu Logic",
      ],
      closing: [
        "His work is defined by warm, intentional spaces that honour both craftsmanship and consciousness.",
        "From intricate residential transformations to boutique commercial spaces, and from energy mapping to client mentoring, Chitresh approaches each project with an artist's heart and an engineer's discipline. His clients describe him as intuitive, meticulous, and quietly visionary, someone who can read both the blueprint and the energy blueprint of a home.",
        "Today, Space Build stands as a growing design studio powered by his philosophy:",
        "Design is more than just decoration; it is alignment, clarity, and emotional grounding.",
        "And at the heart of it is Chitresh; a designer shaped by heritage, a MahaVastu expert shaped by discipline, and a founder shaped by the belief that spaces can transform lives when they are crafted with intention.",
      ],
    },
    {
      name: "Shane Alam",
      role: "Co-Founder, Space Build • Co-Founder, PS Décor\nInterior Designer • Luxury Wedding Creative Director",
      bio: [
        "Born and raised in Moradabad, Shane Alam has always carried an instinct for aesthetics, organisation, and large-scale celebrations. His journey began in the quiet discipline of St. Mary's Convent School, where he developed both his cultural sensitivity and his ability to bring people together. He later moved to Delhi to pursue his B.Com at Delhi University, and it was here that his talent for events first found its stage.",
        "Whether it was managing youth festivals, coordinating campus celebrations, or shaping the cultural narrative of his college, Shane's leadership stood out early. By the end of graduation, he was elected Vice-President of Commsoc, his college's commerce department, a role that refined his skills in creative direction, leadership, and people management. After completing his bachelor's degree, he did his MBA in marketing.",
        "But Shane's real education came outside the classroom.",
        "Guided by intuition more than convention, he joined an event management institute, realising he wanted real, hands-on experience, not just theoretical training. Along with his course, he joined a leading wedding management company and learned on-ground, learning every detail of the industry, from timelines and décor to family dynamics and venue operations. Yet Shane's creative curiosity didn't stop there.",
        "Drawn toward interiors and the deeper psychology of space, he pursued an Interior Designing course, further expanding his design language and visual vocabulary. In 2024, he co-founded Space Build with MahaVastu expert Chitresh Jain, a studio built on the belief that spaces, like events, can shape emotions, behaviours, and the energy of those who live within them.",
        "At Space Build, Shane blends his event design sensibility; mood, texture, colour harmony, human experience, with the intentionality of interior design. Together, he and Chitresh create luxury spaces that combine aesthetics with alignment, intuition with structure, form with feeling.",
        "Today, in Space Build, Jane stands as a creative force; a designer, storyteller, manager, and visionary; shaping not just events or interiors, but experiences that stay with people long after they leave the room.",
      ],
    },

  ];

function KnowMore() {
  return (
    <div className=" bg-[#edf4f8] mx-auto lg:px-20 py-16 pt-4">
      {/* Our Team Heading */}
      <h2 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-serif tracking-[0.2em] text-gray-800 mb-4 sm:mb-6 lg:mb-8">
        Our Team
      </h2>
      <p className="text-center text-gray-600 text-sm sm:text-base mb-8 sm:mb-10 lg:mb-12">
        Meet the talented team behind Space Build – skilled craftsmen, designers, and production experts dedicated to delivering exceptional interior solutions with precision and artistry.
      </p>
      {/* Founders Section */}
      <div className="mt-5">
        {founders.map((founder, index) => (
          <div key={index} className="mb-20">
            <h3 className="font-[Forum] text-3xl md:text-4xl text-black font-bold tracking-wide mb-2 text-center">
              {founder.name}
            </h3>
            <h4 className="text-lg text-gray-600 mb-8 text-center whitespace-pre-line">
              {founder.role}
            </h4>
            
            <div className="max-w-7xl mx-auto space-y-4 text-black leading-relaxed text-justify">
              {founder.bio.map((paragraph, i) => (
                <p key={i} className={paragraph.length < 100 ? 'font-semibold italic text-left' : ''}>
                  {paragraph}
                </p>
              ))}
            </div>

            {founder.highlights && (
              <div className="max-w-7xl mx-auto mt-6 text-justify">
                <p className="font-semibold mb-2 text-black">As the Founder and Spatial Flow Consultant at Space Build, Chitresh bridges:</p>
                <ul className="list-none space-y-1 text-black">
                  {founder.highlights.map((highlight, i) => (
                    <li key={i}>• {highlight}</li>
                  ))}
                </ul>
              </div>
            )}

            {founder.closing && (
              <div className="max-w-7xl mx-auto mt-6 space-y-4 text-black leading-relaxed text-justify">
                {founder.closing.map((paragraph, i) => (
                  <p key={i} className={paragraph.length < 100 ? 'font-semibold italic text-left' : ''}>
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

     


    </div>
  );
}

export default KnowMore;