"use client";

import React from "react";

const KnowMore = () => {
  const teamMembers = [
    {
      name: "Himanshu",
      role: "Production & Operations",
      image: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763231885/himanshu_tedpnl_jqjlya.jpg",
      description: "Oversees the entire workflow with precision, ensuring smooth coordination between production and on-site execution while maintaining the highest quality standards.",
    },
    {
      name: "Naseer",
      role: "Carpentry & Woodwork",
      image: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763231886/naseer_olujvn_evpx8i.jpg",
      description: "Combines creativity and precision to craft extraordinary designs from natural, experiential pieces to modern minimalistic creations showcasing exceptional artistry and refined workmanship.",
    },
    {
      name: "Jigar",
      role: "Marble & Tiles Ninja",
      image: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763231887/Jigar_abnrqa_g8aia6.jpg",
      description: "Specialises in artistic stone and tile installations, blending traditional karigari craftsmanship from Rajasthan with contemporary design aesthetics.",
    },
    {
      name: "Ramu",
      role: "Paint Ninja",
      image: "https://res.cloudinary.com/dkpejqlby/image/upload/v1763231884/ramu_wkx85y_kflvxk.jpg",
      description: "Holds an expert understanding of colors, tones, and textures, ensuring every surface is finished with perfect balance, depth, and harmony.",
    },
  ];

  const founders = [
    {
      name: "Chitresh Jain",
      role: "Interior Designer • MahaVastu Expert • Co-Founder, Vasterior",
      bio: [
        "Raised in Hyderabad and rooted in the quiet power of design, Chitresh Jain represents a rare blend of technical precision, spiritual sensitivity, and instinctive aesthetic intelligence. His journey began long before Vasterior took shape, in the corridors of his family's tile and stone business, where textures, materials, and craftsmanship shaped his earliest memories of space.",
        "A Hyderabad boy through and through, Chitresh completed his schooling and BBA graduation there, carrying forward a deep appreciation for culture, structure, and disciplined work ethics. Soon after, he stepped into the family business ecosystem, gaining hands-on experience in tiles, stones, and later, the manufacturing of packaging materials and corrugated cardboard. These early chapters gave him a tactile understanding of materials, something that continues to define his design language today.",
        "But his true calling emerged at the intersection of art, energy, and functionality.",
        "Driven by curiosity, Chitresh began journey in spatial designing and became a certified interior designer. Along with learning the theories of spatial alignment and planning, he also learned design tools like AutoCAD and gradually immersed himself in the science of spatial energy. What started as exploration soon turned into mastery, as he trained rigorously in Vastu Shastra and ultimately evolved into a certified MahaVastu expert. Over time, he developed a keen ability to read the subtle energy flow of spaces, understanding how direction, activity, objects, and intention shape human experience.",
        "In 2023, this vision found its home in Vasterior, co-founded with his college friend and creative collaborator Charu Shukla. Together, they built a design philosophy rooted in a simple belief:",
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
        "Today, Vasterior stands as a growing design studio powered by his philosophy:",
        "Design is more than just decoration; it is alignment, clarity, and emotional grounding.",
        "And at the heart of it is Chitresh; a designer shaped by heritage, a MahaVastu expert shaped by discipline, and a founder shaped by the belief that spaces can transform lives when they are crafted with intention.",
      ],
    },
    {
      name: "Charu Shukla",
      role: "Co-Founder, Vasterior • Co-Founder, PS Décor\nInterior Designer • Luxury Wedding Creative Director",
      bio: [
        "Born and raised in Moradabad, Charu Shukla has always carried an instinct for aesthetics, organisation, and large-scale celebrations. Her journey began in the quiet discipline of St. Mary's Convent School, where she developed both her cultural sensitivity and her ability to bring people together. She later moved to Delhi to pursue her B.Com at Delhi University, and it was here that her talent for events first found its stage.",
        "Whether it was managing youth festivals, coordinating campus celebrations, or shaping the cultural narrative of her college, Charu's leadership stood out early. By the end of graduation, she was elected Vice-President of Commsoc, her college's commerce department, a role that refined her skills in creative direction, leadership, and people management. After completing her bachelor's degree, she did her MBA in marketing.",
        "But Charu's real education came outside the classroom.",
        "Guided by intuition more than convention, she joined an event management institute, realising she wanted real, hands-on experience, not just theoretical training. Along with her course, she joined a leading wedding management company and learned on-ground, learning every detail of the industry, from timelines and décor to family dynamics and venue operations. Yet Charu's creative curiosity didn't stop there.",
        "Drawn toward interiors and the deeper psychology of space, she pursued an Interior Designing course, further expanding her design language and visual vocabulary. In 2024, she co-founded Vasterior with MahaVastu expert Chitresh Jain, a studio built on the belief that spaces, like events, can shape emotions, behaviours, and the energy of those who live within them.",
        "At Vasterior, Charu blends her event design sensibility; mood, texture, colour harmony, human experience, with the intentionality of interior design. Together, she and Chitresh create luxury spaces that combine aesthetics with alignment, intuition with structure, form with feeling.",
        "Today, in Vasterior, Charu stands as a creative force; a designer, storyteller, manager, and visionary; shaping not just events or interiors, but experiences that stay with people long after they leave the room.",
      ],
    },
    {
      name: "Rounak Shukla",
      role: "Co-Founder, Vasterior\nHospitality Leader • Spatial Design Expert • Design-Driven Entrepreneur",
      bio: [
        "Born and brought up in Ghaziabad, Raunak Shukla grew up observing the quiet discipline of hospitality, where service is instinctive, guests are treated like family, and experiences are built through consistency rather than spectacle. After completing his schooling, he pursued a Bachelor's degree in Business Administration from Amity University, equipping himself with a strong understanding of operations, strategy, and people management.",
        "In 2018, at a pivotal moment early in his career, Raunak made a decision that would define his path. He turned down a lucrative job offer from Amazon, choosing instead to join his family's hotel business in Moradabad. The choice was intentional, rooted in his belief that true fulfilment lies in building experiences that touch people's lives, not just managing numbers.",
        "Immersed in the hospitality ecosystem, Raunak developed a deep understanding of guest psychology, operational excellence, and service-led luxury. Alongside managing hotel operations, he gravitated naturally toward the production and planning of luxury destination weddings, executing celebrations across Jim Corbett, Haridwar, and Rishikesh. These early projects refined his expertise in large-scale coordination, venue dynamics, guest flow, and seamless execution, the invisible details that define truly memorable weddings.",
        "His journey evolved further in 2023, when he joined Vasterior as a Co-Founder alongside his wife, Charu Shukla, driven by a shared belief that spaces, much like celebrations, have the power to influence emotion, behaviour, and well-being. At Vasterior, Raunak contributes a hospitality-first perspective to interior design, focusing on how people move, feel, and live within a space.",
        "Across both brands, Raunak's philosophy remains consistent:",
        "Luxury is not excess; it is intention, ease, and how an experience makes you feel.",
        "Today, he continues to shape PS Décor and Vasterior with grounded leadership, emotional intelligence, and a commitment to creating experiences, whether weddings or spaces, that leave a lasting imprint long after the moment has passed.",
      ],
    },

    {
  name: "Mehak Jain",
  role: "Co-Founder, Vasterior\nMahaVastu Acharya • Astrologer • Industrial & Commercial Vastu Specialist",
  bio: [
    "Mehak Jain is a Co-Founder of Vasterior and a distinguished practitioner of MahaVastu, known for her refined understanding of energy dynamics, directional intelligence, and industrial Vastu strategy. Her work combines intuitive depth, analytical precision, and contemporary luxury sensibilities, positioning her among the emerging voices redefining modern Vastu consultation for commercial and industrial environments.",

    "Her journey into astrology and ancient knowledge systems began in 2019 through a deep curiosity about the relationship between human experiences, environmental frequencies, and energetic influences. What started as personal exploration gradually evolved into a disciplined pursuit of higher learning in astrology, vastu, numerology, and palmistry.",

    "Her path eventually led her to the transformative discipline of MahaVastu under the mentorship of internationally acclaimed Vastu Shastri Khusheep Bansal. Following extensive training and advanced study, she earned the prestigious distinctions of both MahaVastu Expert and MahaVastu Acharya.",

    "In 2026, she formally joined the leadership and co-founding panel of Vasterior alongside Chitresh Jain, Charu Mamgain Shukla, and Rounak Shukla, contributing towards the company’s vision of integrating luxury design thinking with intelligent environmental planning.",

    "At Vasterior, Mehak Jain specialises in Industrial and Commercial MahaVastu, particularly for factories, manufacturing units, industrial plots, and business establishments. Her expertise includes identifying subtle energetic imbalances that may influence operational efficiency, financial growth, workforce harmony, and leadership clarity. She is also recognised for incorporating Devta Energy principles to support growth-oriented industrial environments.",

    "Known for her composed presence and perceptive understanding of human-environment interaction, Mehak Jain continues to bring a modern and elevated perspective to the ancient wisdom of MahaVastu."
  ],
}
  ];

  return (
    <div className="container mx-auto px-6 lg:px-20 py-16 pt-4">
      {/* Our Team Heading */}
      <h2 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-serif tracking-[0.2em] text-gray-800 mb-4 sm:mb-6 lg:mb-8">
        Our Team
      </h2>

      <div className="w-full mb-8">
  <img 
    src="https://res.cloudinary.com/dkpejqlby/image/upload/v1763231884/vasteriorteam_epwmdm_e13txw.jpg" 
    alt="Our Team" 
    className="w-full aspect-[16/9] md:aspect-[21/9] object-cover rounded-lg shadow-2xl"
  />
</div>


      {/* Team Description */}
      <p className="text-center text-gray-700 text-lg md:text-xl max-w-7xl mx-auto mb-16">
        The Vasterior team is a thoughtful blend of interior designers, spatial planners, and energy-alignment specialists who approach every space with intention and clarity. Co-founded by MahaVastu expert Chitresh Jain, Charu Shukla, and, Raunak Shukla the team works at the intersection of design aesthetics and vastu-aligned planning, creating environments that feel balanced, refined, and emotionally grounding. Every project is collaborative, detail-driven, and deeply client-centric, guided by the belief that well-designed spaces influence well-being, productivity, and peace. At Vasterior, the team doesn't just design interiors; they craft experiences that quietly support the lives lived within them.
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
                <p className="font-semibold mb-2 text-black">As the Founder and Spatial Flow Consultant at Vasterior, Chitresh bridges:</p>
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

      {/* Individual Team Members */}
      <div className="space-y-20">
        {teamMembers.map((member, index) => (
          <div 
            key={index} 
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-10`}
          >
            <img 
              src={member.image} 
              alt={member.name} 
              className="w-60 h-68 object-cover rounded-lg shadow-lg"
            />
            <div className={`md:w-3/5 ${index % 2 === 0 ? 'md:ml-6 md:text-left' : 'md:mr-6 md:text-right'} text-center mt-6 md:mt-0`}>
              <h3 className="font-[Forum] text-2xl md:text-3xl text-black text-bold tracking-widest">
                {member.name}
              </h3>
              <h4 className="headline-6 text-black section-title">{member.role}</h4>
              <p className="text-gray-700 mt-2">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KnowMore;