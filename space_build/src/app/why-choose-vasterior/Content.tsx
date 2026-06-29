import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function WhyChooseSpaceBuildPage() {
  return (
    <div className="min-h-screen bg-[#FFF2EB]">
      {/* Hero Section */}
     
      

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif text-center text-gray-800 mb-6">
            Why Choose SPACE BUILD
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Selecting the right design partner is the foundation of creating spaces that are not only beautiful but also purposeful and inspiring. At Space Build, we go beyond traditional design to deliver experiences that merge functionality, elegance, and innovation. Every project is driven by creativity, precision, and personalization—ensuring that the final result reflects both beauty and individuality.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            What makes us stand apart is our commitment to excellence at every stage. From the very first consultation to final execution, we listen carefully, understand your vision, and transform it into reality with meticulous attention to detail. Guided by Aparna&apos;s refined design sensibility, our team blends timeless aesthetics with modern ideas—creating interiors that are sophisticated, functional, and built to last.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We also offer end-to-end solutions across multiple design disciplines—including interior design, Vastu consultation, spatial planning, styling, wedding design, PMC (Project Management Consultancy), smart home automation, and furniture sourcing. This makes Space Build a one-stop destination for those seeking holistic, seamless design experiences. Whether designing a cozy residence, a luxury villa, a commercial workspace, or a memorable celebration, our expertise ensures personalized, flawless results.
          </p>
        </div>
      </section>

      {/* Why Clients Trust SPACE BUILD */}
      <section className="-12">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-serif text-gray-800 mb-8 text-center">Why Clients Trust SPACE BUILD</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-[#D4935D] font-bold text-2xl">•</span>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Personalized Approach</h4>
                  <p className="text-gray-700 text-lg">Every project is tailored to your story, lifestyle, and preferences.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#D4935D] font-bold text-2xl">•</span>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Expert Guidance</h4>
                  <p className="text-gray-700 text-lg">Led by Aparna and supported by experienced professionals.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#D4935D] font-bold text-2xl">•</span>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Quality & Precision</h4>
                  <p className="text-gray-700 text-lg">Use of premium materials with uncompromised attention to detail.</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-[#D4935D] font-bold text-2xl">•</span>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Creativity & Innovation</h4>
                  <p className="text-gray-700 text-lg">Merging timeless elegance with modern design trends.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#D4935D] font-bold text-2xl">•</span>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Transparency & Trust</h4>
                  <p className="text-gray-700 text-lg">Open communication, fair pricing, and reliable delivery.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#D4935D] font-bold text-2xl">•</span>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Comprehensive Services</h4>
                  <p className="text-gray-700 text-lg">From concept to completion, everything under one roof.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Testimonial/Trust Section */}
      <section className=" bg-[#FFF2EB] py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          
          <div className="bg-[#FFF2EB] rounded-2xl p-8 shadow-sm">
            <p className="text-xl font-serif text-gray-800 italic leading-relaxed">
              At SPACE BUILD, we don&apos;t just design spaces—we craft experiences that inspire and endure. Our promise is to create environments that are elegant yet functional, timeless yet innovative, and always a reflection of you.
            </p>
          </div>
        </div>
      </section>

      
    </div>
  );
}