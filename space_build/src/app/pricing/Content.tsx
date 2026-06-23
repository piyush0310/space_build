"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  Phone, Mail, Download, CheckCircle2, Star, Zap, Crown, Gem,
  Video, ChevronDown, ShieldCheck, Wrench, TrendingUp,
  Warehouse, Factory, BriefcaseBusiness, Landmark, Building2, MapPin,
  Sparkles, Home, Heart, BarChart3, Layers, Infinity, ArrowRight,
  LayoutGrid, ChevronUp, ListOrdered, ExternalLink,
  X, ChevronLeft, ChevronRight, Info,
} from "lucide-react";
import Certificates from "./Certificates";
import GoogleReviews from "@/components/GoogleReviews";

// ─── Types ─────────────────────────────────────────────────────────────────────

type Plan = {
  id: string;
  badge: string;
  badgeVariant?: "featured" | "default";
  subtitle: string;
  price: string;
  mode: string;
  icon: React.ReactNode;
  deliverables: string;
  idealFor: string;
  features: string[];
  highlight: boolean;
};

type ModalPlan = {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  mode: string;
  icon: React.ReactNode;
  idealFor: string;
  deliverables: string;
  features: string[];
  tag?: string;
};

type Segment = "home" | "business" | "industrial" | "new";

// ─── Modal Plans — full detail for all 18 plans ────────────────────────────────

const modalPlans: ModalPlan[] = [
  {
    id: "discovery",
    title: "Discovery Consultation",
    subtitle: "First-Level Clarity",
    price: "₹5,100",
    mode: "Video / Phone · 30 min",
    icon: <Video size={28} strokeWidth={1.5} />,
    idealFor: "First-time clients seeking clarity",
    deliverables: "Directional understanding + intuitive remedy suggestions",
    features: [
      "Basic directional understanding & issue identification",
      "Video / Phone call with Acharya — 30 minutes",
      "Intuitive remedies suggestion",
      "Flexible scheduling",
    ],
    tag: "Best Starting Point",
  },
  {
    id: "alignment-audit",
    title: "Home Alignment Audit",
    subtitle: "Vasterior Home Alignment Check",
    price: "₹11,000",
    mode: "Online · 30 min call",
    icon: <Home size={28} strokeWidth={1.5} />,
    idealFor: "Residential clients wanting foundational analysis",
    deliverables: "Basic report + level-one remedies + zone understanding",
    features: [
      "MahaVastu gridding & directional mapping",
      "First-level analysis & remedy suggestions",
      "Online 30 min call with Vastu Expert",
      "Pre-requisite: Gridded Layout",
    ],
  },
  {
    id: "gridding-layout",
    title: "Gridding & Layout",
    subtitle: "MahaVastu Gridding and Layout",
    price: "₹11,000",
    mode: "Online / Offline · Site Visit",
    icon: <Layers size={28} strokeWidth={1.5} />,
    idealFor: "Commercial & residential spaces · Pre-requisite for others",
    deliverables: "16 zones + colored tape remedies + furniture repositioning",
    features: [
      "MahaVastu gridding & 16 Vastu Zones identification",
      "Directional mapping & first-level analysis",
      "First-level remedies using colored tapes",
      "Repositioning of furniture included",
    ],
    tag: "Most Popular",
  },
  {
    id: "numerology-brand",
    title: "Numerology Branding",
    subtitle: "Numerology Brand Alignment",
    price: "Starting ₹11,000",
    mode: "Online",
    icon: <BarChart3 size={28} strokeWidth={1.5} />,
    idealFor: "Personal brands & startups",
    deliverables: "Name analysis, colors, geometries, business card guidance",
    features: [
      "Numerology-based branding recommendations",
      "Name analysis & color guidance",
      "Geometries & business card guidance",
      "Online consultation",
    ],
  },
  {
    id: "wedding-venue",
    title: "Wedding Venue Vastu",
    subtitle: "Vastu for Wedding Couples",
    price: "₹11,000",
    mode: "Online / Offline",
    icon: <Heart size={28} strokeWidth={1.5} />,
    idealFor: "Couples planning their wedding",
    deliverables: "Complete vastu-based wedding venue plan",
    features: [
      "Complete vastu-based venue detail planning",
      "Astrological charts of Bride & Groom",
      "Online / Offline consultation",
      "Wedding venue plans delivered",
    ],
  },
  {
    id: "home-selection",
    title: "Home Selection Service",
    subtitle: "Vastu & Astro Property Selection",
    price: "₹11,000",
    mode: "Online / Offline",
    icon: <MapPin size={28} strokeWidth={1.5} />,
    idealFor: "Planning to buy a new property",
    deliverables: "Prioritised property options with vastu suitability",
    features: [
      "Analysis of options based on astrological chart",
      "Vastu suitability check for each option",
      "Priority ranking of properties",
      "Online / Offline guidance",
    ],
  },
  {
    id: "business-growth",
    title: "Business Growth Consultation",
    subtitle: "Business Growth MahaVastu",
    price: "Starting ₹11,000",
    mode: "Video / Offline",
    icon: <TrendingUp size={28} strokeWidth={1.5} />,
    idealFor: "Entrepreneurs & business owners",
    deliverables: "Business-oriented Vastu recommendations",
    features: [
      "Space-energy analysis linked to growth",
      "Stability & leadership clarity",
      "Business-oriented recommendations",
      "Video or offline consultation",
    ],
  },
  {
    id: "remedy-consultation",
    title: "Remedy Consultation",
    subtitle: "MahaVastu Remedy Consultation",
    price: "Starting ₹11,000",
    mode: "Online",
    icon: <Wrench size={28} strokeWidth={1.5} />,
    idealFor: "Clients seeking non-structural corrections",
    deliverables: "Customized remedy recommendations",
    features: [
      "Personalized remedy planning",
      "Without reconstruction / demolition",
      "Customized remedy recommendations",
      "Online consultation",
    ],
  },
  {
    id: "plot-analysis",
    title: "Plot MahaVastu Analysis",
    subtitle: "Commercial & Industrial Plot",
    price: "Starting ₹21,000",
    mode: "Site Visit Required",
    icon: <Warehouse size={28} strokeWidth={1.5} />,
    idealFor: "Commercial & industrial plot buyers",
    deliverables: "Plot assessment + construction planning guidance",
    features: [
      "Plot suitability & directional strengths analysis",
      "Construction orientation assessment",
      "Site visit mandatory for precision",
      "Plot assessment + planning guidance",
    ],
  },
  {
    id: "astro-brand",
    title: "Astro-Vastu Brand Alignment",
    subtitle: "Brand Alignment Consultation",
    price: "Starting ₹25,000",
    mode: "Video Consultation",
    icon: <Star size={28} strokeWidth={1.5} />,
    idealFor: "Founders & businesses",
    deliverables: "Brand direction, color & energy guidance",
    features: [
      "Astrology + Vastu-based business alignment",
      "Brand direction & color guidance",
      "Energy alignment for brand growth",
      "Video consultation with expert",
    ],
  },
  {
    id: "level-two",
    title: "Consultation Level Two",
    subtitle: "MahaVastu Level Two",
    price: "₹31,000",
    mode: "Online / Offline",
    icon: <Zap size={28} strokeWidth={1.5} />,
    idealFor: "Commercial & residential spaces",
    deliverables: "Consultation + detailed remedy recommendations",
    features: [
      "Directional analysis & energy flow study",
      "Growth & productivity evaluation",
      "Astrological chart analysis with activity-based remedies",
      "Objects & metals-based remedies using 16 MahaVastu zones",
    ],
  },
  {
    id: "zone-interior",
    title: "Zone-Based Interior Design",
    subtitle: "MahaVastu Interior Designing",
    price: "₹35,000 / Zone",
    mode: "Online / Offline",
    icon: <Sparkles size={28} strokeWidth={1.5} />,
    idealFor: "Clients wanting specific interior zones aligned",
    deliverables: "Layout planning, design direction, budgeting, material & color guidance",
    features: [
      "MahaVastu correction for selected zones",
      "6 Zones per house (extra charges beyond 6)",
      "Layout planning & design direction",
      "Budgeting, material & color guidance",
    ],
  },
  {
    id: "level-three",
    title: "Consultation Level Three",
    subtitle: "MahaVastu Level Three",
    price: "₹61,000",
    mode: "Site Visit Preferred",
    icon: <Crown size={28} strokeWidth={1.5} />,
    idealFor: "Commercial & residential spaces",
    deliverables: "Full home gridding + room-wise recommendations",
    features: [
      "Directional analysis & energy flow study",
      "Astrological chart, Palmistry, Numerology & Astrology combined",
      "Full home gridding + room-wise recommendations",
      "Site visit preferred for precision",
    ],
  },
  {
    id: "level-four",
    title: "Consultation Level Four",
    subtitle: "MahaVastu Level Four",
    price: "₹1,11,000",
    mode: "Site Visit Required",
    icon: <Gem size={28} strokeWidth={1.5} />,
    idealFor: "Those seeking manifestation of goals & visions",
    deliverables: "Full gridding + recommendations + 60-day guidance from Vastu Acharya",
    features: [
      "Analysis of entire space with Marma & Devta gridding",
      "Remedies based on Astrology, Numerology & Palmistry",
      "Full home gridding + 60-day complete guidance",
      "Direct guidance from Vastu Acharya",
    ],
    tag: "Most Comprehensive",
  },
  {
    id: "industrial",
    title: "Industrial MahaVastu",
    subtitle: "Industrial Consultation",
    price: "Starting ₹1,11,000",
    mode: "Site Visit Required",
    icon: <Factory size={28} strokeWidth={1.5} />,
    idealFor: "Factories, plants & manufacturing units",
    deliverables: "Industrial analysis + strategic remedies",
    features: [
      "Industrial energy mapping",
      "Productivity & operational alignment",
      "Site visit required",
      "Industrial analysis + strategic remedies",
    ],
  },
  {
    id: "luxury-interior",
    title: "Luxury MahaVastu Interior",
    subtitle: "Luxury Interior Design",
    price: "Custom Pricing",
    mode: "Offline / Hybrid",
    icon: <Sparkles size={28} strokeWidth={1.5} />,
    idealFor: "Premium residential interiors",
    deliverables: "Moodboards, layouts, design concepts, end-to-end planning",
    features: [
      "MahaVastu-based luxury interior design + layout",
      "Moodboards & design concepts",
      "Offline / Hybrid engagement",
      "End-to-end planning",
    ],
  },
  {
    id: "annual-advisory",
    title: "Premium Annual Advisory",
    subtitle: "MahaVastu Annual Advisory",
    price: "Custom Retainer",
    mode: "Priority Access",
    icon: <Infinity size={28} strokeWidth={1.5} />,
    idealFor: "High-net-worth & industrial clients",
    deliverables: "Quarterly reviews + strategic guidance + priority access",
    features: [
      "Ongoing consultation support throughout the year",
      "Priority access to Acharya",
      "Quarterly strategic reviews",
      "Customized annual plan",
    ],
    tag: "Premium",
  },
];

// ─── All Plans (collapsed full list) ──────────────────────────────────────────

const allTiers = [
  {
    label: "₹5,100",
    plans: [
      { id: "discovery",           title: "Discovery Consultation",      sub: "30 min · Video / Phone",        price: "₹5,100",         icon: <Video      size={15} strokeWidth={1.5} /> },
    ],
  },
  {
    label: "₹11,000",
    plans: [
      { id: "alignment-audit",     title: "Home Alignment Audit",        sub: "Online · 30 min call",          price: "₹11,000",        icon: <Home       size={15} strokeWidth={1.5} /> },
      { id: "gridding-layout",     title: "Gridding & Layout",           sub: "Online / Offline · Site visit", price: "₹11,000",        icon: <Layers     size={15} strokeWidth={1.5} /> },
      { id: "numerology-brand",    title: "Numerology Branding",         sub: "Online",                        price: "From ₹11,000",   icon: <BarChart3  size={15} strokeWidth={1.5} /> },
      { id: "wedding-venue",       title: "Wedding Venue Vastu",         sub: "Online / Offline",              price: "₹11,000",        icon: <Heart      size={15} strokeWidth={1.5} /> },
      { id: "home-selection",      title: "Home Selection Service",      sub: "Online / Offline",              price: "₹11,000",        icon: <MapPin     size={15} strokeWidth={1.5} /> },
      { id: "business-growth",     title: "Business Growth",             sub: "Video / Offline",               price: "From ₹11,000",   icon: <TrendingUp size={15} strokeWidth={1.5} /> },
      { id: "remedy-consultation", title: "Remedy Consultation",         sub: "Online",                        price: "From ₹11,000",   icon: <Wrench     size={15} strokeWidth={1.5} /> },
    ],
  },
  {
    label: "₹21,000+",
    plans: [
      { id: "plot-analysis",       title: "Plot MahaVastu Analysis",     sub: "Site visit required",           price: "From ₹21,000",   icon: <Warehouse  size={15} strokeWidth={1.5} /> },
    ],
  },
  {
    label: "₹25,000+",
    plans: [
      { id: "astro-brand",         title: "Astro-Vastu Brand Alignment", sub: "Video consultation",            price: "From ₹25,000",   icon: <Star       size={15} strokeWidth={1.5} /> },
    ],
  },
  {
    label: "₹31,000",
    plans: [
      { id: "level-two",           title: "Consultation Level Two",      sub: "Online / Offline",              price: "₹31,000",        icon: <Zap        size={15} strokeWidth={1.5} /> },
    ],
  },
  {
    label: "₹35,000 / Zone",
    plans: [
      { id: "zone-interior",       title: "Zone-Based Interior Design",  sub: "Online / Offline",              price: "₹35,000/zone",   icon: <Sparkles   size={15} strokeWidth={1.5} /> },
    ],
  },
  {
    label: "₹61,000",
    plans: [
      { id: "level-three",         title: "Consultation Level Three",    sub: "Site visit preferred",          price: "₹61,000",        icon: <Crown      size={15} strokeWidth={1.5} /> },
    ],
  },
  {
    label: "₹1,11,000+",
    plans: [
      { id: "level-four",          title: "Consultation Level Four",     sub: "Site visit + 60-day guidance",  price: "₹1,11,000",      icon: <Gem        size={15} strokeWidth={1.5} /> },
      { id: "industrial",          title: "Industrial MahaVastu",        sub: "Site visit required",           price: "From ₹1,11,000", icon: <Factory    size={15} strokeWidth={1.5} /> },
    ],
  },
  {
    label: "Custom",
    plans: [
      { id: "luxury-interior",     title: "Luxury MahaVastu Interior",   sub: "Offline / Hybrid",              price: "Custom",         icon: <Sparkles   size={15} strokeWidth={1.5} /> },
      { id: "annual-advisory",     title: "Premium Annual Advisory",     sub: "Priority access year-round",    price: "Retainer",       icon: <Infinity   size={15} strokeWidth={1.5} /> },
    ],
  },
];

// ─── Segment Plans ─────────────────────────────────────────────────────────────

const segmentPlans: Record<Segment, Plan[]> = {
  home: [
    {
      id: "discovery",
      badge: "Start here",
      subtitle: "Discovery Consultation",
      price: "₹5,100",
      mode: "Video / Phone · 30 min",
      icon: <Video size={20} strokeWidth={1.5} />,
      deliverables: "Directional clarity + remedy guidance",
      idealFor: "First-time clients seeking clarity",
      features: [
        "Understand your core Vastu issues",
        "Intuitive remedy suggestions",
        "Flexible scheduling",
        "No prior knowledge needed",
      ],
      highlight: false,
    },
    {
      id: "alignment-audit",
      badge: "Most popular",
      badgeVariant: "featured",
      subtitle: "Home Alignment Audit",
      price: "₹11,000",
      mode: "Online · 30 min call",
      icon: <LayoutGrid size={20} strokeWidth={1.5} />,
      deliverables: "Basic report + level-one remedies + zone understanding",
      idealFor: "Residential clients wanting foundational analysis",
      features: [
        "16 Vastu zone identification",
        "Directional mapping & first-level analysis",
        "Colored tape & furniture remedies",
        "Pre-requisite: Gridded layout",
      ],
      highlight: true,
    },
    {
      id: "level-three",
      badge: "Full deep-dive",
      subtitle: "Consultation Level Three",
      price: "₹61,000",
      mode: "Site visit preferred",
      icon: <Crown size={20} strokeWidth={1.5} />,
      deliverables: "Full home gridding + room-wise recommendations",
      idealFor: "Clients wanting maximum precision",
      features: [
        "Full home gridding + room-wise plan",
        "Astrological chart analysis",
        "Palmistry & Numerology combined",
        "Energy flow study across all spaces",
      ],
      highlight: false,
    },
  ],
  business: [
    {
      id: "business-growth",
      badge: "Entry point",
      subtitle: "Business Growth Consultation",
      price: "Starting ₹11,000",
      mode: "Video / Offline",
      icon: <TrendingUp size={20} strokeWidth={1.5} />,
      deliverables: "Business-oriented Vastu recommendations",
      idealFor: "Entrepreneurs & business owners",
      features: [
        "Stability & leadership clarity",
        "Business-oriented recommendations",
        "Productivity-linked energy analysis",
        "Video or offline consultation",
      ],
      highlight: false,
    },
    {
      id: "level-two",
      badge: "Recommended",
      badgeVariant: "featured",
      subtitle: "Consultation Level Two",
      price: "₹31,000",
      mode: "Online / Offline",
      icon: <Zap size={20} strokeWidth={1.5} />,
      deliverables: "Consultation + full remedy recommendations",
      idealFor: "Commercial & residential spaces",
      features: [
        "Growth & productivity evaluation",
        "Astrological chart with activity remedies",
        "16 MahaVastu zones analysis",
        "Objects & metals-based remedies",
      ],
      highlight: true,
    },
    {
      id: "astro-brand",
      badge: "Brand focus",
      subtitle: "Astro-Vastu Brand Alignment",
      price: "Starting ₹25,000",
      mode: "Video consultation",
      icon: <Star size={20} strokeWidth={1.5} />,
      deliverables: "Brand direction, color & energy guidance",
      idealFor: "Founders & businesses",
      features: [
        "Brand direction & color guidance",
        "Energy alignment for growth",
        "Numerology-based name analysis",
        "Astrology + Vastu business alignment",
      ],
      highlight: false,
    },
  ],
  industrial: [
    {
      id: "plot-analysis",
      badge: "Assessment first",
      subtitle: "Plot MahaVastu Analysis",
      price: "Starting ₹21,000",
      mode: "Site visit required",
      icon: <MapPin size={20} strokeWidth={1.5} />,
      deliverables: "Plot assessment + planning guidance",
      idealFor: "Commercial & industrial plot buyers",
      features: [
        "Plot suitability & directional strengths",
        "Construction orientation assessment",
        "Industrial planning guidance",
        "Site visit for precision",
      ],
      highlight: false,
    },
    {
      id: "industrial",
      badge: "Most comprehensive",
      badgeVariant: "featured",
      subtitle: "Industrial MahaVastu",
      price: "Starting ₹1,11,000",
      mode: "Site visit required",
      icon: <Factory size={20} strokeWidth={1.5} />,
      deliverables: "Industrial analysis + strategic remedies",
      idealFor: "Factories, plants & manufacturing units",
      features: [
        "Industrial energy mapping",
        "Productivity & operational alignment",
        "Strategic remedies for large spaces",
        "Complete space analysis",
      ],
      highlight: true,
    },
    {
      id: "annual-advisory",
      badge: "Ongoing support",
      subtitle: "Premium Annual Advisory",
      price: "Custom Retainer",
      mode: "Priority access",
      icon: <Infinity size={20} strokeWidth={1.5} />,
      deliverables: "Quarterly reviews + strategic guidance",
      idealFor: "High-net-worth & industrial clients",
      features: [
        "Direct access to Acharya year-round",
        "Quarterly strategic reviews",
        "Customised annual plan",
        "Priority scheduling",
      ],
      highlight: false,
    },
  ],
  new: [
    {
      id: "discovery",
      badge: "Perfect first step",
      badgeVariant: "featured",
      subtitle: "Discovery Consultation",
      price: "₹5,100",
      mode: "Video / Phone · 30 min",
      icon: <Video size={20} strokeWidth={1.5} />,
      deliverables: "Directional clarity + intuitive remedies",
      idealFor: "First-time clients seeking clarity",
      features: [
        "No prior knowledge needed",
        "Get clarity on your biggest concern",
        "Expert guidance on next steps",
        "Flexible scheduling",
      ],
      highlight: true,
    },
    {
      id: "home-selection",
      badge: "Property buyer",
      subtitle: "Home Selection Service",
      price: "₹11,000",
      mode: "Online / Offline",
      icon: <MapPin size={20} strokeWidth={1.5} />,
      deliverables: "Prioritised property recommendations",
      idealFor: "Planning to buy a new property",
      features: [
        "Analysis based on your astrological chart",
        "Vastu suitability for each option",
        "Priority ranking of properties",
        "Online / Offline guidance",
      ],
      highlight: false,
    },
  ],
};

// ─── Segment selector config ───────────────────────────────────────────────────

const segments: { id: Segment; label: string; icon: React.ReactNode }[] = [
  { id: "home",        label: "Home / Residence",  icon: <Home              size={14} strokeWidth={1.5} /> },
  { id: "business",   label: "Business / Office",  icon: <BriefcaseBusiness size={14} strokeWidth={1.5} /> },
  { id: "industrial", label: "Factory / Industry", icon: <Factory           size={14} strokeWidth={1.5} /> },
  { id: "new",        label: "Just Starting Out",  icon: <Sparkles          size={14} strokeWidth={1.5} /> },
];

// ─── Industrial section data ───────────────────────────────────────────────────

const vastuServices = [
  { icon: <Factory         size={16} strokeWidth={1.5} />, text: "Vastu for factory setup & layout planning" },
  { icon: <Landmark        size={16} strokeWidth={1.5} />, text: "Industrial vastu for manufacturing units & large industries" },
  { icon: <Warehouse       size={16} strokeWidth={1.5} />, text: "Vastu for warehouse, shop & commercial spaces" },
  { icon: <BriefcaseBusiness size={16} strokeWidth={1.5} />, text: "Vastu consultant for corporate office & business growth" },
  { icon: <Building2       size={16} strokeWidth={1.5} />, text: "Vastu for commercial building design & projects" },
  { icon: <Wrench          size={16} strokeWidth={1.5} />, text: "MahaVastu remedies & advanced corrections without demolition" },
];

const problemsSolve = [
  "Factory loss & production inefficiencies",
  "Business growth issues & financial blockages",
  "Office vastu dosh & workplace imbalance",
  "Warehouse vastu problems & storage issues",
  "Industrial land & layout vastu defects",
];

const newAndExisting = [
  "Vastu planning for new factory or industry",
  "Vastu for industrial land selection",
  "Factory & warehouse layout optimization",
  "Vastu correction for existing factories & offices",
];

const whyUs = [
  "Certified MahaVastu Acharya",
  "Among top vastu consultants in India",
  "Specialized in industrial & commercial vastu",
  "Practical remedies without structural changes",
  "Customized solutions for every business",
];



// ─── Plan Modal ────────────────────────────────────────────────────────────────

function PlanModal({
  planId,
  onClose,
}: {
  planId: string;
  onClose: () => void;
}) {
  const idx = modalPlans.findIndex((p) => p.id === planId);
  const [current, setCurrent] = useState(idx === -1 ? 0 : idx);

  const plan = modalPlans[current];
  const total = modalPlans.length;

  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);

  // Keyboard nav + scroll-lock
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Modal card */}
      <div className="relative w-full max-w-lg bg-[#fffaf5] rounded-3xl shadow-2xl border border-[#dfc9aa] overflow-hidden flex flex-col max-h-[90vh]">

        {/* Top gradient bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#d4b896] via-[#b5976a] to-[#8a6a42]" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-[#f0e0cc] border border-[#dfc9aa] flex items-center justify-center text-[#8a6a42] hover:bg-[#dfc9aa] transition-all duration-200"
        >
          <X size={14} strokeWidth={2.5} />
        </button>

        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1 px-7 pt-6 pb-4">

          {/* Plan counter */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[10px] font-sans font-bold tracking-widest uppercase text-[#b5976a]">
              Plan {current + 1} of {total}
            </span>
            {plan.tag && (
              <span className="text-[10px] font-sans font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-[#b5976a] text-white">
                {plan.tag}
              </span>
            )}
          </div>

          {/* Icon + Title */}
          <div className="flex items-start gap-4 mb-5">
            <div className="w-14 h-14 rounded-2xl bg-[#f6eade] border border-[#e0c9a8] flex items-center justify-center text-[#b5976a] shrink-0">
              {plan.icon}
            </div>
            <div>
              <h2 className="font-serif text-xl font-bold text-gray-800 leading-tight mb-0.5">{plan.title}</h2>
              <p className="text-xs font-sans text-[#a09080] italic">{plan.subtitle}</p>
            </div>
          </div>

          {/* Price + Mode */}
          <div className="flex items-baseline justify-between mb-4 pb-4 border-b border-[#e0c9a8]">
            <div>
              <div className="text-2xl font-sans font-semibold text-gray-900">{plan.price}</div>
              <div className="text-[11px] font-sans text-gray-400 mt-0.5">{plan.mode}</div>
            </div>
            <div className="text-right">
              <div className="text-[9px] font-sans font-bold uppercase tracking-widest text-[#b5976a] mb-0.5">Ideal for</div>
              <div className="text-xs font-sans text-gray-500 italic max-w-[160px] text-right">{plan.idealFor}</div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-4">
            <p className="text-[9px] font-sans font-bold uppercase tracking-widest text-[#b5976a] mb-3">What's included</p>
            <ul className="space-y-2.5">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 size={14} strokeWidth={2} className="mt-0.5 shrink-0 text-[#b5976a]" />
                  <span className="text-sm font-sans text-gray-700 leading-snug">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Deliverables */}
          <div className="bg-[#f6eade] border border-[#e0c9a8] rounded-xl px-4 py-3 mb-2">
            <p className="text-[9px] font-sans font-bold uppercase tracking-widest text-[#b5976a] mb-1">You receive</p>
            <p className="text-sm font-sans text-gray-700 leading-snug">{plan.deliverables}</p>
          </div>

        </div>

        {/* Bottom — gallery nav + CTA */}
        <div className="px-7 py-5 border-t border-[#e0c9a8] bg-[#f6eade]">

          {/* Dot indicators */}
          <div className="flex items-center justify-center gap-1.5 mb-4">
            {modalPlans.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-200 ${
                  i === current
                    ? "w-5 h-2 bg-[#b5976a]"
                    : "w-2 h-2 bg-[#dfc9aa] hover:bg-[#c9ad85]"
                }`}
              />
            ))}
          </div>

          {/* Prev / CTA / Next */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-xl border border-[#dfc9aa] bg-white flex items-center justify-center text-[#8a6a42] hover:bg-[#d4b896] hover:border-[#b5976a] transition-all duration-200 shrink-0"
            >
              <ChevronLeft size={16} strokeWidth={2} />
            </button>

            <Link
              href="/contact"
              onClick={onClose}
              className="flex-1 flex items-center justify-center gap-2 bg-[#b5976a] hover:bg-[#8a6a42] text-white py-2.5 rounded-xl text-sm font-sans font-semibold tracking-wide transition-all duration-200 shadow-md"
            >
              <Phone size={14} strokeWidth={2} />
              Contact Us
            </Link>

            <button
              onClick={next}
              className="w-10 h-10 rounded-xl border border-[#dfc9aa] bg-white flex items-center justify-center text-[#8a6a42] hover:bg-[#d4b896] hover:border-[#b5976a] transition-all duration-200 shrink-0"
            >
              <ChevronRight size={16} strokeWidth={2} />
            </button>
          </div>

          {/* Plan name hint */}
          <p className="text-center text-[10px] font-sans text-[#b5976a] mt-2.5">
            {current > 0 && (
              <span className="mr-2 opacity-60">← {modalPlans[current - 1].title}</span>
            )}
            {current < total - 1 && (
              <span className="ml-2 opacity-60">{modalPlans[current + 1].title} →</span>
            )}
          </p>

        </div>
      </div>
    </div>
  );
}

// ─── PlanCard ──────────────────────────────────────────────────────────────────

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={`
        relative flex flex-col rounded-2xl overflow-hidden border transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl
        ${plan.highlight
          ? "border-2 border-[#b5976a] bg-[#fffaf5] shadow-lg"
          : "border border-[#e0c9a8] bg-white shadow-md"
        }
      `}
    >
      <div className="flex items-center justify-between px-5 pt-5 pb-2">
        <span
          className={`
            text-[10px] font-sans font-bold tracking-widest uppercase px-3 py-1 rounded-full
            ${plan.badgeVariant === "featured"
              ? "bg-[#b5976a] text-white"
              : "bg-[#d4b896] text-[#6b4e2d]"
            }
          `}
        >
          {plan.badge}
        </span>
        <span className="text-[#b5976a]">{plan.icon}</span>
      </div>

      <div className="px-5 pb-2">
        <h3 className="font-serif text-lg font-semibold text-gray-800 leading-tight mb-1">{plan.subtitle}</h3>
        <p className="text-[11px] font-sans text-[#a09080] italic mb-3">{plan.idealFor}</p>
        <div className="text-2xl font-sans font-semibold text-gray-900 mb-0.5">{plan.price}</div>
        <p className="text-[11px] font-sans text-gray-400 mb-4">{plan.mode}</p>
        <div className="h-px bg-[#e0c9a8] mb-4" />
        <ul className="space-y-2 mb-4">
          {plan.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle2 size={13} strokeWidth={2} className="mt-0.5 shrink-0 text-[#b5976a]" />
              <span className="text-xs font-sans text-gray-700 leading-snug">{f}</span>
            </li>
          ))}
        </ul>
        <div className="bg-[#f6eade] border border-[#e0c9a8] rounded-xl px-3 py-2.5 mb-4">
          <p className="text-[9px] font-sans font-bold uppercase tracking-widest text-[#b5976a] mb-0.5">You receive</p>
          <p className="text-[11px] font-sans text-gray-600 leading-snug">{plan.deliverables}</p>
        </div>
      </div>

      <div className="px-5 pb-5 mt-auto">
        <Link
          href="/contact"
          className={`
            flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-sans font-semibold
            tracking-wide transition-all duration-200
            ${plan.highlight
              ? "bg-[#b5976a] text-white hover:bg-[#8a6a42] shadow-md"
              : "bg-[#d4b896] text-gray-800 hover:bg-[#b5976a] hover:text-white"
            }
          `}
        >
          Book this plan <ArrowRight size={13} />
        </Link>
      </div>
    </div>
  );
}

// ─── MiniRow ───────────────────────────────────────────────────────────────────

function MiniRow({
  plan,
  onReadMore,
}: {
  plan: { id: string; title: string; sub: string; price: string; icon: React.ReactNode };
  onReadMore: (id: string) => void;
}) {
  return (
    <div className="bg-white border border-[#e0c9a8] rounded-xl px-4 py-3 hover:shadow-md transition-all duration-200">

      {/* Main row — always single line */}
      <div className="flex items-center gap-3">
        <span className="text-[#b5976a] shrink-0">{plan.icon}</span>

        <div className="flex-1 min-w-0">
          <p className="text-sm font-sans font-medium text-gray-800 truncate">{plan.title}</p>
          <p className="text-[11px] font-sans text-gray-400">{plan.sub}</p>
        </div>

        {/* Read more — hidden on mobile, visible md+ */}
        <button
          onClick={() => onReadMore(plan.id)}
          className="hidden md:inline-flex shrink-0 items-center gap-1 text-[11px] font-sans font-semibold text-[#b5976a] hover:text-[#8a6a42] border border-[#dfc9aa] hover:border-[#b5976a] bg-[#f6eade] hover:bg-[#f0e0cc] px-2.5 py-1.5 rounded-lg transition-all duration-200"
        >
          <Info size={11} strokeWidth={2} />
          Read more
        </button>

        <span className="text-sm font-sans font-medium text-gray-800 shrink-0">{plan.price}</span>

        <Link
          href="/contact"
          className="shrink-0 bg-[#d4b896] hover:bg-[#b5976a] hover:text-white text-[#6b4e2d] text-[11px] font-sans font-bold px-3 py-1.5 rounded-lg transition-all duration-200"
        >
          Book
        </Link>
      </div>

      {/* Read more — mobile only, below the main row */}
      <button
        onClick={() => onReadMore(plan.id)}
        className="md:hidden mt-2 w-full inline-flex items-center justify-center gap-1.5 text-[11px] font-sans font-semibold text-[#b5976a] hover:text-[#8a6a42] border border-[#dfc9aa] hover:border-[#b5976a] bg-[#f6eade] hover:bg-[#f0e0cc] py-1.5 rounded-lg transition-all duration-200"
      >
        <Info size={11} strokeWidth={2} />
        Read more
      </button>

    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function PricingPage() {
  const [activeSegment, setActiveSegment] = useState<Segment>("home");
  const [allPlansOpen,  setAllPlansOpen]  = useState(false);
  const [modalPlanId,   setModalPlanId]   = useState<string | null>(null);

  const currentPlans = segmentPlans[activeSegment];

  return (
    <main className="min-h-screen bg-[#f6eade] font-serif">

      {/* ── Plan Detail Modal ── */}
      {modalPlanId && (
        <PlanModal planId={modalPlanId} onClose={() => setModalPlanId(null)} />
      )}

      {/* ── Hero ── */}
      <section className="pt-12 pb-6 px-4 text-center bg-[#f6eade]">
        <div className="max-w-2xl mx-auto">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-[#d4b896] text-[#6b4e2d] text-[10px] tracking-widest uppercase font-sans font-semibold">
            MahaVastu Consultation
          </span>
          <h1 className="text-3xl md:text-5xl font-serif text-gray-800 leading-tight mb-3">
            Find Your Perfect Plan
          </h1>
          <p className="text-gray-500 text-sm md:text-base font-sans leading-relaxed">
            Tell us what you need — we'll show you exactly what fits.
          </p>
          <div className="mt-5 flex items-center justify-center gap-3">
            <div className="h-px w-14 bg-[#c9ad85]" />
            <div className="w-2 h-2 rounded-full bg-[#b5976a]" />
            <div className="h-px w-14 bg-[#c9ad85]" />
          </div>
        </div>
      </section>

      {/* ── Segment Selector ── */}
      <section className="px-4 pb-2 bg-[#f6eade]">
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-[10px] font-sans font-semibold tracking-widest uppercase text-gray-400 mb-3">
            I'm looking for help with my…
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {segments.map((seg) => (
              <button
                key={seg.id}
                onClick={() => { setActiveSegment(seg.id); setAllPlansOpen(false); }}
                className={`
                  flex items-center gap-1.5 px-4 py-2 rounded-full border text-sm font-sans font-medium
                  transition-all duration-200
                  ${activeSegment === seg.id
                    ? "bg-[#b5976a] border-[#b5976a] text-white shadow-md"
                    : "bg-white border-[#dfc9aa] text-gray-600 hover:border-[#b5976a] hover:text-[#8a6a42]"
                  }
                `}
              >
                {seg.icon}
                {seg.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Recommended Cards ── */}
      <section className="py-8 px-4 bg-[#f6eade]">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-[10px] font-sans font-semibold tracking-widest uppercase text-gray-400 mb-6">
            Recommended for you
          </p>
          <div
            className={`
              grid gap-5
              ${currentPlans.length === 2
                ? "grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto"
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              }
            `}
          >
            {currentPlans.map((plan) => (
              <PlanCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* ── See All Plans Toggle ── */}
      <section className="px-4 pb-10 bg-[#f6eade]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <button
              onClick={() => setAllPlansOpen((v) => !v)}
              className="inline-flex items-center gap-2 border border-[#dfc9aa] bg-white text-gray-500 hover:border-[#b5976a] hover:text-[#8a6a42] text-sm font-sans font-medium px-5 py-2 rounded-full transition-all duration-200"
            >
              <ListOrdered size={14} strokeWidth={1.5} />
              {allPlansOpen ? "Hide all plans" : "See all plans"}
              {allPlansOpen ? <ChevronUp size={13} strokeWidth={2} /> : <ChevronDown size={13} strokeWidth={2} />}
            </button>
          </div>

          {allPlansOpen && (
            <div className="space-y-7">
              {allTiers.map((tier) => (
                <div key={tier.label}>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="h-px flex-1 bg-[#dfc9aa]" />
                    <span className="shrink-0 text-[10px] font-sans font-bold uppercase tracking-widest text-gray-400 px-3 py-1 rounded-full bg-[#f0e0cc] border border-[#dfc9aa]">
                      {tier.label}
                    </span>
                    <div className="h-px flex-1 bg-[#dfc9aa]" />
                  </div>
                  <div className="space-y-2">
                    {tier.plans.map((plan) => (
                      <MiniRow
                        key={plan.id}
                        plan={plan}
                        onReadMore={(id) => setModalPlanId(id)}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      

      {/* ── Expert & Industrial Section ── */}
      <section className="py-14 px-4 bg-[#f0e0cc]">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-10">
            <span className="inline-block mb-3 px-4 py-1 rounded-full bg-[#d4b896] text-[#6b4e2d] text-[10px] tracking-widest uppercase font-sans font-semibold">
              Industrial &amp; Commercial
            </span>
            <h2 className="font-serif text-2xl md:text-4xl font-medium text-gray-800 leading-snug mb-3">
              Best Vastu Consultant in India for<br className="hidden md:block" />
              Business, Factory &amp; Commercial Spaces
            </h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="h-px w-12 bg-[#c9ad85]" />
              <div className="w-2 h-2 rounded-full bg-[#b5976a]" />
              <div className="h-px w-12 bg-[#c9ad85]" />
            </div>
            <p className="mt-5 text-gray-600 font-sans text-sm md:text-base leading-relaxed max-w-3xl mx-auto">
              Grow your business with expert Maha Vastu Shastra consultation designed for factories, industries,
              warehouses, corporate offices, and commercial properties across India. If your business is not growing,
              facing financial losses, or dealing with vastu defects in factory, office, or warehouse — our solutions
              help you identify and correct energy imbalances for long-term success.
            </p>
          </div>

          {/* Acharya card */}
          <div className="bg-white rounded-2xl border border-[#dfc9aa] px-6 md:px-10 py-7 mb-6 shadow-sm">
            <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#b5976a] mb-2">
              About the Expert
            </p>
            <h3 className="font-serif text-xl font-bold text-gray-800 mb-2">
              <a
                href="https://www.linkedin.com/in/chitresh5/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#b5976a] transition-colors duration-200 inline-flex items-center gap-1.5"
              >
                MahaVastu Acharya Chitresh Jain
                <ExternalLink size={13} strokeWidth={1.5} className="text-[#b5976a]" />
              </a>
            </h3>
            <p className="text-sm font-sans text-gray-600 leading-relaxed">
              A highly respected MahaVastu expert, professionally trained and certified under the mentorship of{" "}
              <span className="font-semibold text-gray-800">Khushdeep Bansal</span>, Founder of MahaVastu.
              With <span className="font-semibold text-gray-800">15+ years of experience</span>, he delivers precise,
              result-oriented solutions by combining MahaVastu, Vedic astrology, and modern business needs.
            </p>
          </div>

          {/* 3-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            <div className="bg-white rounded-2xl border border-[#dfc9aa] px-6 py-6 shadow-sm">
              <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#b5976a] mb-4">Our Vastu Services</p>
              <div className="space-y-3">
                {vastuServices.map((s, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="shrink-0 mt-0.5 text-[#a0845a]">{s.icon}</span>
                    <span className="text-sm font-sans text-gray-700 leading-snug">{s.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#dfc9aa] px-6 py-6 shadow-sm">
              <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#b5976a] mb-4">Problems We Solve</p>
              <div className="space-y-2.5 mb-6">
                {problemsSolve.map((p, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 size={14} strokeWidth={2} className="mt-0.5 shrink-0 text-[#a0845a]" />
                    <span className="text-sm font-sans text-gray-700 leading-snug">{p}</span>
                  </div>
                ))}
              </div>
              <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#b5976a] mb-3">New &amp; Existing Businesses</p>
              <div className="space-y-2.5">
                {newAndExisting.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 size={14} strokeWidth={2} className="mt-0.5 shrink-0 text-[#a0845a]" />
                    <span className="text-sm font-sans text-gray-700 leading-snug">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#f7d9bc] rounded-2xl border border-[#dfc9aa] px-6 py-6 shadow-sm flex flex-col">
              <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#b5976a] mb-4">Why Choose Us</p>
              <div className="space-y-2.5 flex-1">
                {whyUs.map((w, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <ShieldCheck size={14} strokeWidth={2} className="mt-0.5 shrink-0 text-[#a0845a]" />
                    <span className="text-sm font-sans text-gray-700 leading-snug">{w}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-4 border-t border-[#dfc9aa]">
                <p className="text-sm font-sans text-gray-600 leading-relaxed mb-4">
                  We offer flexible plans for factories, commercial spaces, and corporate offices.
                </p>
                <div className="bg-white/70 rounded-xl border border-[#dfc9aa] px-4 py-4 text-center">
                  <TrendingUp size={18} strokeWidth={1.5} className="mx-auto mb-2 text-[#8a6a42]" />
                  <p className="text-xs font-sans font-semibold text-gray-800">Fix Your Business Vastu Today</p>
                  <p className="text-[11px] font-sans text-gray-500 mt-1 mb-3">Limited slots — Enquire now.</p>
                  <Link
                    href="/contact"
                    className="block w-full text-center py-2 rounded-lg text-xs font-sans font-bold bg-[#b5976a] text-white hover:bg-[#8a6a42] transition-all duration-200"
                  >
                    Book Consultation
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Certificates ── */}
      <Certificates />

      {/* ── Not Sure CTA ── */}
      <section className="py-12 px-4 bg-[#f6eade]">
        <div className="max-w-xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4 text-[#8a6a42]">
            <ChevronDown size={16} />
            <span className="text-[10px] font-sans font-semibold tracking-widest uppercase">Need Help Deciding?</span>
            <ChevronDown size={16} />
          </div>
          <h3 className="font-serif text-2xl md:text-3xl font-medium text-gray-800 mb-2">
            Not Sure Which Plan is Right?
          </h3>
          <p className="text-gray-500 font-sans text-sm mb-6">Get expert guidance before you decide</p>
          <Link
            href="/contact"
            className="inline-block bg-[#d4b896] hover:bg-[#b5976a] hover:text-white text-gray-800 px-8 py-3 rounded-xl font-sans font-semibold text-sm tracking-wide transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Book Consultation Now
          </Link>
        </div>
      </section>

      {/* ── Note & Download ── */}
      <section className="py-10 px-4 bg-[#f7d9bc]">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/70 rounded-2xl border border-[#dfc9aa] px-6 py-6 text-sm font-sans text-gray-600 leading-relaxed space-y-2 shadow-sm">
            <p>
              <span className="font-bold text-gray-800">Note:</span> Packages marked "Starting at" vary based on space
              size &amp; complexity. Areas up to <strong>5,000 sq. ft.</strong> are covered under standard pricing.
              For larger spaces, contact us for a custom quote.
            </p>
            <p>
              <span className="font-bold text-gray-800">Factory / Industry / MahaVastu Consultation</span> — Speak with
              our expert today.
            </p>
          </div>
          <div className="mt-5 text-center">
            <a
              href="/magazine/Gridded_Layouts.pdf"
              download="MahaVastu_Sample_Layout.pdf"
              className="inline-flex items-center gap-2 bg-[#d4b896] hover:bg-[#b5976a] hover:text-white text-gray-800 px-6 py-2.5 rounded-xl font-sans font-semibold text-sm tracking-wide transition-all duration-200 shadow"
            >
              <Download size={16} />
              Download Sample Layout
            </a>
          </div>
        </div>
      </section>

      <GoogleReviews />

      {/* ── Final CTA ── */}
      <section className="py-14 px-4 bg-[#f6eade]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-4xl font-medium text-gray-800 leading-tight mb-2">
            Ready to Transform Your Space?
          </h2>
          <p className="text-gray-600 font-sans text-sm md:text-base mb-8">
            Get expert Interior &amp; Vastu guidance tailored for your home or business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="tel:+917906086899"
              className="flex items-center gap-2 bg-white/70 hover:bg-white px-5 py-3 rounded-xl text-gray-800 font-sans font-semibold text-sm border border-[#c9ad85] transition-all duration-200 shadow-sm hover:shadow"
            >
              <Phone size={15} className="text-[#8a6a42]" />
              +917906086899
            </a>
            <a
              href="mailto:info@spacebuild.com"
              className="flex items-center gap-2 bg-white/70 hover:bg-white px-5 py-3 rounded-xl text-gray-800 font-sans font-semibold text-sm border border-[#c9ad85] transition-all duration-200 shadow-sm hover:shadow"
            >
              <Mail size={15} className="text-[#8a6a42]" />
              info@spacebuild.com
            </a>
          </div>
          <p className="text-xs font-sans text-gray-500 mb-5 tracking-wide uppercase">
            Book Your Consultation Now &amp; Start Your Dream Space Today!
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#d4b896] hover:bg-[#b5976a] hover:text-white text-gray-800 px-10 py-3.5 rounded-xl font-sans font-bold text-base tracking-wide transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Book Your Consultation Now
          </Link>
        </div>
      </section>

    </main>
  );
}