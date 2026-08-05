'use client';

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  services: string;
  message: string;
}

const WeddingForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    services: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (error) setError("");
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setError("");
    setIsSubmitting(true);

    const requiredFields = [
      { field: "email", label: "Email" },
      { field: "phone", label: "Phone number" },
    ];

    for (const { field, label } of requiredFields) {
      if (!formData[field as keyof FormData].toString().trim()) {
        setError(`${label} is required.`);
        setIsSubmitting(false);
        return;
      }
    }

    const form = new FormData();

    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("services", formData.services);
    form.append("message", formData.message);

    form.append(
      "_subject",
      `🏗️ SPACE BUILD | New Enquiry from ${formData.name}`
    );

    form.append("_captcha", "false");

    form.append(
      "_next",
      "https://www.spacebuild.co.in/thankyou"
    );

    try {
      const response = await fetch(
        "https://formsubmit.co/dhruvkaushik150@gmail.com",
        {
          method: "POST",
          body: form,
        }
      );

      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          services: "",
          message: "",
        });

        window.location.href =
          "https://www.spacebuild.co.in/thankyou";
      } else {
        throw new Error("Submission failed.");
      }
    } catch (err) {
      console.error("Form submission error:", err);

      setError(
        "There was an error submitting the form. Please try again."
      );

      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white/95 backdrop-blur-lg rounded-lg shadow-lg border border-rose-100 p-8 w-full max-w-6xl mx-auto">
      <h3 className="text-2xl font-bold  text-center text-gray-800 mb-6">
        Book Your Expert Consultation Today
      </h3>

      {error && (
        <div className="mb-2 p-8 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
          <div className="flex items-center">
            <svg
              className="w-4 h-4 mr-2 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
            {error}
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border text-black border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-rose-400"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Email <span className="text-red-500">*</span>
              </label>

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 text-black rounded text-sm focus:outline-none focus:ring-1 focus:ring-rose-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Phone <span className="text-red-500">*</span>
              </label>

              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 text-black rounded text-sm focus:outline-none focus:ring-1 focus:ring-rose-400"
              />
            </div>

            <div className="relative">
              <label className="block text-sm text-gray-600 mb-1">
                Services
              </label>

              <select
                name="services"
                value={formData.services}
                onChange={handleChange}
                className="w-full px-4 py-3 pr-7 text-black border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-rose-400 bg-white appearance-none"
              >
                <option value="" disabled>
                  Select
                </option>

                <option value="Vastu Construction">
                  VASTU CONSTRUCTION
                </option>

                <option value="Interior Designing">
                  INTERIOR DESIGNING
                </option>

                <option value="Vastu Renovation">
                  VASTU RENOVATION
                </option>

                <option value="PMC">
                  PROJECT MANAGEMENT CONSULTATION (PMC)
                </option>

                <option value="Modular Kitchen">
                  MODULAR KITCHEN
                </option>

                <option value="Pest Control">
                  PEST CONTROL SERVICES
                </option>

                <option value="Others">
                  Others
                </option>
              </select>

              <ChevronDown className="absolute right-2 top-7 w-3 h-3 text-gray-400 pointer-events-none" />
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Message
            </label>

            <textarea
              name="message"
              placeholder="Tell us about your project..."
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 text-black border border-gray-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-rose-400 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 text-base bg-[#28344B] text-white font-semibold rounded text-sm  transition-colors shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting
              ? "Submitting..."
              : "Submit Enquiry"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default WeddingForm;