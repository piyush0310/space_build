import React from "react";

import LandingEnquiry from "@/components/LandingEnquiry";
import PostNavigation from "@/components/PostNavigation";

const Content = () => {
  return (
    <div className="min-h-screen bg-[#FFF2EB] pt-15">
      <div className="flex flex-col lg:flex-row">
        {/* Content Section */}
        <div className="flex-1 px-4 sm:px-8 md:px-16 py-12 order-1 lg:order-1">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-8 text-gray-900">
            Best Interior Designer in East Delhi
          </h2>
          <div className="space-y-8 text-gray-700 leading-relaxed max-w-4xl">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Transform Your Space with the Best Interior Designer in East Delhi
            </h3>
            <p>
              Your home deserves more than furniture. It deserves a story. At Vasterior, we create elegant, functional, and timeless interiors that reflect your personality. As the best interior designer in East Delhi, we bring creativity, craftsmanship, and precision together to design spaces that inspire. Whether it is your dream home, a cozy apartment, or a modern office, Vasterior delivers design excellence that enhances every space.
            </p>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              About Vasterior
            </h2>
            <p>
              Vasterior is a leading interior design company based in Delhi NCR, known for its luxury residential and commercial designs. With over a decade of professional experience, our team of designers and architects delivers spaces that blend beauty with practicality.
              Our philosophy is simple: design should make everyday living more beautiful and comfortable. Every project begins with understanding your lifestyle and ends with delivering a space that exceeds your expectations. From consultation to final installation, Vasterior ensures quality and perfection at every step.
            </p>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
             SPACE BUILD - The Best Interior Designer in East Delhi
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Personalized Designs</strong> – Every home is unique. We tailor each concept to match your taste, lifestyle, and vision.</li>
              <li><strong>Luxury Meets Functionality</strong> – We specialize in home interior design, modular kitchen design, and space planning that combine aesthetics with usability.</li>
              <li><strong>Experienced Design Team</strong> – Our expert designers have years of experience in residential and commercial interiors.</li>
              <li><strong>Premium Quality Materials</strong> – We use trusted materials, fittings, and finishes for long-lasting beauty and durability.</li>
              <li><strong>Complete Project Management</strong> – From design consultation to final handover, Vasterior manages every detail seamlessly.</li>
              <li><strong>On-Time Delivery</strong> – We respect deadlines and ensure your dream interiors are ready on schedule.</li>
            </ul>
            <p>
              At Vasterior, every project is built on creativity, transparency, and a strong commitment to customer satisfaction.
            </p>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Interior Design Services in East Delhi
            </h2>
            <p>
              As the best interior designer in East Delhi, Vasterior offers a complete range of services designed to create functional and stylish spaces.
            </p>
            <h3 className="font-semibold text-gray-900 mb-2">Residential Interior Design</h3>
            <p>
              We create homes that reflect elegance and comfort. Whether it is a small apartment or a large villa, we focus on making every space truly yours.
            </p>
            <h3 className="font-semibold text-gray-900 mb-2">Modular Kitchen Design</h3>
            <p>
              Our modular kitchen designs combine intelligent layouts with modern aesthetics. We design kitchens that are stylish, organized, and easy to use.
            </p>
            <h3 className="font-semibold text-gray-900 mb-2">Living Room and Bedroom Interiors</h3>
            <p>
              Enhance your living room with refined furniture, lighting, and textures. Make your bedroom a peaceful retreat with soft tones, smart storage, and elegant decor.
            </p>
            <h3 className="font-semibold text-gray-900 mb-2">Office and Commercial Interiors</h3>
            <p>
              {`Vasterior designs offices that promote productivity and modernity. Our commercial interiors align with your brand's vision and functional needs.`}
            </p>
            <h3 className="font-semibold text-gray-900 mb-2">Renovation and Remodeling</h3>
            <p>
              Upgrade your old interiors with a fresh, contemporary design. Our remodeling experts bring new life into existing spaces with smart solutions.
            </p>
            <h3 className="font-semibold text-gray-900 mb-2">3D Visualization and Space Planning</h3>
            <p>
              We provide 3D renders so you can visualize your interiors before work begins. Every layout is thoughtfully planned for maximum space efficiency.
            </p>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Our Portfolio and Work Quality
            </h2>
            <p>
              At Vasterior, design meets innovation. Our portfolio showcases a blend of creativity, luxury, and fine craftsmanship. From compact city apartments to luxury homes in East Delhi, each project demonstrates precision and style.
              We work only with trusted brands for lighting, furnishings, and finishes to ensure that every project reflects the highest standards of quality. Our design process emphasizes attention to detail, clear communication, and flawless execution.
            </p>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Client Testimonials
            </h2>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                {`"Vasterior transformed our flat in East Delhi into a stunning modern home. The team understood exactly what we wanted and delivered beyond expectations." - Priya Sharma`}
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                {`"The best interior designer in East Delhi without a doubt. The team was professional, responsive, and very creative." - Rohit Malhotra`}
              </blockquote>
              <blockquote className="border-l-4 border-gray-300 pl-4 italic">
                {`"Our modular kitchen and living room were designed beautifully. The work was finished on time and within our budget." - Neha and Ankit Mehra`}
              </blockquote>
            </div>
            <p>These reviews highlight our dedication to excellence and customer satisfaction.</p>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6 mt-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q1. Who is the best interior designer in East Delhi?</h3>
                <p>A: Vasterior is recognized as the best interior designer in East Delhi, offering luxury interiors, innovative designs, and personalized service.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q2. How much does interior design cost in East Delhi?</h3>
                <p>A: The cost depends on the project size, design style, and materials. Vasterior provides tailored estimates based on your requirements.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q3. Do you offer modular kitchen design services?</h3>
                <p>A: Yes, we specialize in modular kitchen design with smart layouts, durable finishes, and efficient storage solutions.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q4. How long does an interior design project take?</h3>
                <p>A: Most residential projects take between 6 and 12 weeks. Vasterior ensures timely completion with detailed project planning.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Q5. Why should I hire a professional interior designer?</h3>
                <p>A: A professional designer ensures a well-planned, beautiful, and functional space. With Vasterior, you get expert design, quality execution, and complete peace of mind.</p>
              </div>
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Contact Vasterior Today for Your Dream Home Interiors in East Delhi
            </h2>
            <div className="space-y-2">
              <p><strong>Location:</strong> East Delhi, India</p>
              <p><strong>Phone:</strong> +91-9100883355</p>
              <p><strong>Website:</strong> <a href="https://www.vasterior.com" target="_blank" rel="noopener noreferrer">www.vasterior.com</a></p>
              <p><strong>Email:</strong> <a href="mailto:spacebuild.india@gamil.com">spacebuild.india@gamil.com</a></p>
            </div>
            <p className="mt-4 font-semibold text-gray-900">
              Vasterior - The Best Interior Designer in East Delhi for Elegant and Functional Living Spaces.
            </p>
          </div>
          <PostNavigation slug="best-interior-designer-east-delhi" />
        </div>
        {/* Form Section - Smart positioning with CSS order */}
        <div className="w-full lg:w-[450px] p-8 order-2 lg:order-2">
          <div className="lg:sticky lg:top-28">
            <LandingEnquiry />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;