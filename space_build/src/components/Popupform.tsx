'use client';

import React, { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

interface FormData {
  name: string;
  email: string;
  mobile: string;
  projectType: string;
  location: string;
}

const STORAGE_KEY = "vasterior_popup";

function getState(): { count: number; lastClosed: number } {
  if (typeof window === "undefined") return { count: 0, lastClosed: 0 };
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : { count: 0, lastClosed: 0 };
  } catch {
    return { count: 0, lastClosed: 0 };
  }
}

function setState(count: number, lastClosed: number) {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ count, lastClosed }));
}

const WEB3FORMS_ACCESS_KEY = "0c50987f-8718-4d9d-9f2c-1ef00a4b1e6c";

export default function ConsultationPopup() {
  const pathname = usePathname();

  const [isOpen, setIsOpen]             = useState(false);
  const [visible, setVisible]           = useState(false);
  const [error, setError]               = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData]         = useState<FormData>({
    name: "", email: "", mobile: "", projectType: "", location: "",
  });

  const timerRef    = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastPathRef = useRef<string>("");
  const hasShownRef = useRef<boolean>(false);

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    const s = getState();
    if (s.count >= 2) return;
    if (isOpen) return;
    if (lastPathRef.current === pathname && hasShownRef.current) return;

    lastPathRef.current = pathname;

    const delay =
      s.count === 0
        ? 20_000
        : Math.max(500, 60_000 - (Date.now() - s.lastClosed));

    timerRef.current = setTimeout(() => {
      timerRef.current = null;
      hasShownRef.current = true;
      setIsOpen(true);
      requestAnimationFrame(() => requestAnimationFrame(() => setVisible(true)));
    }, delay);

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const closePopup = () => {
    (document.activeElement as HTMLElement)?.blur();
    setVisible(false);
    setTimeout(() => {
      setIsOpen(false);
      hasShownRef.current = false;
      lastPathRef.current = "";
      const s = getState();
      setState(s.count + 1, Date.now());
    }, 300);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(p => ({ ...p, [e.target.name]: e.target.value }));
    if (error) setError("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate — email AND mobile both required
    if (!formData.mobile.trim()) {
      setError("Mobile number is required.");
      return;
    }
    if (!formData.email.trim()) {
      setError("Email is required.");          // ← now enforced
      return;
    }

    setError("");
    setIsSubmitting(true);

    const payload = {
      access_key:  WEB3FORMS_ACCESS_KEY,
      botcheck:    false,                         // honeypot
      name:        formData.name,
      email:       formData.email,             // guaranteed non-empty
      mobile:      formData.mobile,
      projectType: formData.projectType,
      location:    formData.location,
      subject:     `New Vasterior Inquiry from ${formData.name}`,
      // ← "redirect" removed: only works in HTML form POST, not JSON API
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
        setState(2, Date.now());
        window.location.href = "https://www.vasterior.com/thankyou";
      } else {
        throw new Error(result.message || "Submission failed.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  const inputCls =
    "w-full px-3 py-2 border border-gray-200 rounded-md text-sm text-gray-800 " +
    "bg-white outline-none placeholder:text-gray-300 placeholder:text-xs " +
    "focus:border-gray-500 focus:ring-1 focus:ring-gray-300 transition-all duration-150 appearance-none";

  return (
    <>
      <div
        aria-modal="true"
        role="dialog"
        aria-hidden={!isOpen}
        onClick={e => { if (e.target === e.currentTarget) closePopup(); }}
        className={[
          "fixed inset-0 z-[9999] flex items-center justify-center p-4",
          "bg-black/50 transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none invisible",
        ].join(" ")}
      >
        <div
          className={[
            "w-full max-w-[460px] bg-white rounded-xl shadow-2xl border border-gray-100",
            "transition-all duration-300",
            visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95",
          ].join(" ")}
        >
          {/* Header */}
          <div className="relative bg-[#1a1a1a] rounded-t-xl px-6 py-5 text-center overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent" />
            <h2 className="sm:text-2xl md:text-3xl font-serif text-white leading-tight tracking-wide">
              Talk to Our Experts
            </h2>
            <p className="text-1xl text-gray-400 mt-1 font-light">
              Interior Design &amp; Vastu Guidance
            </p>
            <button
              onClick={closePopup}
              aria-label="Close"
              className="absolute top-3.5 right-3.5 w-7 h-7 rounded-full bg-white/10 text-gray-400 text-xs flex items-center justify-center hover:bg-white/20 hover:text-white transition-all duration-200 cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Body */}
          <div className="px-6 py-5">
            {error && (
              <div className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2 mb-4">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-3">


              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Name</label>
                  <input type="text" name="name" placeholder="Full name"
                    value={formData.name} onChange={handleChange} className={inputCls} />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                    Mobile <span className="text-red-400 normal-case">*</span>
                  </label>
                  <input type="tel" name="mobile" placeholder="+91 00000 00000"
                    value={formData.mobile} onChange={handleChange} className={inputCls} />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                  Email <span className="text-red-400 normal-case">*</span>
                </label>
                <input type="email" name="email" placeholder="your@email.com"
                  value={formData.email} onChange={handleChange} className={inputCls} />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Project Type</label>
                  <select name="projectType" value={formData.projectType}
                    onChange={handleChange}
                    className={`${inputCls} cursor-pointer pr-8`}
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%23999' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 10px center",
                    }}>
                    <option value="" disabled>Select…</option>
                    <option value="Interior Design">Interior Design</option>
                    <option value="Renovation">Renovation</option>
                    <option value="Vastu Consultation">Vastu Consultation</option>
                    <option value="All">All of the Above</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-gray-500 uppercase tracking-wide mb-1.5">Location</label>
                  <input type="text" name="location" placeholder="City / Area"
                    value={formData.location} onChange={handleChange} className={inputCls} />
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-2 pt-1">
                {["Luxury Interiors", "Vastu-Aligned Planning", "Quick Response"].map(item => (
                  <span key={item}
                    className="inline-flex items-center gap-1.5 text-[10px] text-gray-400 bg-gray-50 border border-gray-100 rounded-full px-2.5 py-1">
                    <span className="w-1 h-1 rounded-full bg-[#c9a84c] flex-shrink-0" />
                    {item}
                  </span>
                ))}
              </div>

              <button type="submit" disabled={isSubmitting}
                className="w-full py-3 bg-[#1a1a1a] text-white text-sm font-semibold rounded-lg
                  hover:bg-[#2e2e2e] active:scale-[0.99] transition-all duration-200
                  disabled:opacity-50 disabled:cursor-not-allowed tracking-wide">
                {isSubmitting ? "Submitting…" : "Submit →"}
              </button>
            </form>
          </div>

          {/* Footer */}
          <div className="flex items-start gap-2 px-6 pb-4 pt-0">
            <svg width="11" height="12" viewBox="0 0 12 13" fill="none" className="flex-shrink-0 mt-0.5 opacity-40">
              <rect x="1.5" y="5.5" width="9" height="7" rx="1.5" stroke="#666" strokeWidth="1.2" />
              <path d="M3.5 5.5V4a2.5 2.5 0 015 0v1.5" stroke="#666" strokeWidth="1.2" strokeLinecap="round" />
              <circle cx="6" cy="9" r="1" fill="#666" />
            </svg>
            <p className="text-[10px] text-gray-400 leading-relaxed">
              <strong className="text-gray-500 font-medium">Privacy Note — </strong>
              Your details are secure and used only for your design consultation.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}