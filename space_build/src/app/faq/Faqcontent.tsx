import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "What services does Vasterior offer?",
      answer: "At Vasterior, we provide a comprehensive range of design and consultancy services, including Interior Design, Vastu Consultation, Interior Styling & Material Consultation, Spatial Planning, Wedding Designing, PMC (Project Management Consultancy), Smart Home Solutions, and Furniture Sourcing. Each service is designed with a balance of creativity, functionality, and personalization to meet unique client needs."
    },
    {
      question: "How do I book a consultation?",
      answer: "Booking with us is quick and easy. You can email us at spacebuild.india@gamil.com or call us directly at +917906086899. Our team will schedule a convenient time to understand your requirements and guide you through the next steps."
    },
    {
      question: "Do you provide customized interior designs?",
      answer: "Yes, we specialize in bespoke interior designs tailored to your lifestyle, preferences, and vision. Every project is approached as unique, ensuring your space truly reflects your individuality."
    },
    {
      question: "How long does a project usually take?",
      answer: "Project timelines vary depending on the scope and complexity. Smaller styling or consultation projects may take a few weeks, while large-scale interiors or PMC projects may take several months. During consultation, we provide a detailed schedule and keep you updated at every stage for transparency."
    },
    {
      question: "Do you provide online consultations?",
      answer: "Yes. For clients unable to meet in person, we offer online consultations through video calls, digital layouts, and virtual design presentations. This makes it convenient to work with us from anywhere. To book a session, simply contact us via spacebuild.india@gamil.com or +917906086899."
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing is project-specific and depends on the services required, scale of work, and material choices. We share a transparent quotation after the initial consultation to ensure clarity for both premium and budget-conscious clients. For inquiries, connect with us at spacebuild.india@gamil.com or +917906086899."
    }
  ];

  return (
    <div className="bg-[#f6eade] min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif tracking-[0.2em] text-gray-800 mb-8">
            FREQUENTLY ASKED QUESTIONS
          </h1>
        </div>

        {/* FAQ Items */}
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {index + 1}. {faq.question}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        
        
      </div>
    </div>
  );
};

export default FAQ;
