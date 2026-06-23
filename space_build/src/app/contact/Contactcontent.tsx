"use client";

import React, { useState } from "react";
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const WEB3FORMS_ACCESS_KEY = "0c50987f-8718-4d9d-9f2c-1ef00a4b1e6c";

const Contact = () => {
  const services = ["Residential", "Commercial", "Retail", "other"];

  const [formData, setFormData] = useState({
    name: "",
    contact_number: "",
    email: "",
    project_type: "",
    location: "",
    message: "",
  });

  const [error, setError]               = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData(p => ({ ...p, [e.target.name]: e.target.value }));
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!formData.contact_number.trim()) {
      setError("Contact number is required.");
      return;
    }
    if (!formData.email.trim()) {
      setError("Email is required.");
      return;
    }

    setIsSubmitting(true);

    const payload = {
      access_key:     WEB3FORMS_ACCESS_KEY,
      botcheck:       false,                    // ← honeypot: keeps Web3Forms from flagging as spam
      name:           formData.name,
      contact_number: formData.contact_number,
      email:          formData.email,
      project_type:   formData.project_type,
      location:       formData.location,
      message:        formData.message,
      subject:        "New Client Inquiry - Interior Design Service",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method:  "POST",
        headers: {
          "Content-Type": "application/json",
          Accept:         "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        window.location.href = "https://www.vasterior.com/thankyou";
      } else {
        throw new Error(result.message || "Submission failed.");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setError("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  const inputCls =
    "block w-full p-3 sm:p-4 bg-white border border-gray-300 rounded-md " +
    "focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm " +
    "transition-all duration-200 text-sm sm:text-base hover:border-indigo-300 focus:-translate-y-0.5";

  return (
    <div className="min-h-screen bg-[#EDF4F8] px-4 py-4 sm:py-8">
      <div className="max-w-7xl mx-auto mt-5 sm:mt-20">

        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-black mb-4">
            Get Expert Advice
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Planning your dream interior or looking for expert MahaVastu guidance? We'd love to
            help! Connect with us today and let&apos;s create a beautiful, balanced, and functional
            space that reflects your lifestyle, energy, and vision.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">

          {/* ── Form card ── */}
          <div className="lg:col-span-2">
            <div className="bg-[#28344B] text-gray-900 shadow-xl rounded-lg p-6 sm:p-8 h-full">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-white">
                Send us a Message
              </h3>

              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-6">

                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block font-medium text-white text-sm sm:text-base">
                      Name
                    </label>
                    <input
                      id="name" type="text" name="name"
                      placeholder="Enter your name"
                      value={formData.name} onChange={handleChange}
                      className={inputCls}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact_number" className="block font-medium text-white text-sm sm:text-base">
                      Contact Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact_number" type="tel" name="contact_number"
                      placeholder="Enter your contact number"
                      value={formData.contact_number} onChange={handleChange}
                      pattern="[0-9]{10,15}"
                      className={inputCls}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="block font-medium text-white text-sm sm:text-base">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email" type="email" name="email"
                      placeholder="Enter your email"
                      value={formData.email} onChange={handleChange}
                      className={inputCls}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="project_type" className="block font-medium text-white text-sm sm:text-base">
                      Project Type
                    </label>
                    <select
                      id="project_type" name="project_type"
                      value={formData.project_type} onChange={handleChange}
                      className={inputCls}
                    >
                      <option value="" disabled>Select a Service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="location" className="block font-medium text-white text-sm sm:text-base">
                    Location
                  </label>
                  <input
                    id="location" type="text" name="location"
                    placeholder="Enter your location"
                    value={formData.location} onChange={handleChange}
                    className={inputCls}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block font-medium text-white text-sm sm:text-base">
                    Message
                  </label>
                  <textarea
                    id="message" name="message" rows={4}
                    placeholder="Write your message here..."
                    minLength={10}
                    value={formData.message} onChange={handleChange}
                    className={`${inputCls} resize-vertical`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#EDF4F8] text-black py-3 sm:py-4 px-4 sm:px-6
                    rounded-lg flex items-center justify-center gap-2 sm:gap-3 font-medium shadow-md
                    transition-all duration-200 text-sm sm:text-base hover:shadow-lg hover:-translate-y-0.5
                    active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#f7d9bc] focus:ring-offset-2
                    disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending…" : "Send Message"}
                  {!isSubmitting && <FaPaperPlane className="text-sm sm:text-base" />}
                </button>

                <p className="text-xs sm:text-sm text-gray-600 text-center mt-4">
                  We&apos;ll get back to you within 24 hours.
                </p>
              </form>
            </div>
          </div>

          {/* ── Contact info card ── */}
          <div className="lg:col-span-1">
            <div className="bg-[#28344B] text-gray-900 shadow-xl rounded-lg p-6 sm:p-8 h-full">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-white">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#EDF4F8] p-3 rounded-full flex-shrink-0">
                    <FaMapMarkerAlt className="text-black text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Address</h4>
                    <p className="text-white text-sm">
                      Bilari, Uttar Pradesh, India
                    </p>
                  </div>
                  
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#EDF4F8] p-3 rounded-full flex-shrink-0">
                    <FaPhone className="text-black text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Phone</h4>
                    <p className="text-white text-sm">+917906086899</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#EDF4F8] p-3 rounded-full flex-shrink-0">
                    <FaEnvelope className="text-black text-lg" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-white text-sm">info@spacebuild.com</p>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold text-white mb-3">Find Us on Map</h4>
                  <div className="w-full h-66 rounded-lg overflow-hidden shadow-md">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.872468086007!2d78.8019067!3d28.623224250000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ae7aea2c57a09%3A0x3f54246d7eb35f53!2sBilari%2C%20Uttar%20Pradesh%20244411!5e0!3m2!1sen!2sin!4v1782193404770!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Our Office Location"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;