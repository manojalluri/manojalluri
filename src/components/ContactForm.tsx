import React, { useState, useEffect } from "react";
import {
  Sparkles,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
} from "lucide-react";
import confetti from "canvas-confetti";
import { siteConfig } from "../config/site";
import type { ContactFormData } from "../types";

interface ContactFormProps {
  preselectedService?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: preselectedService || siteConfig.serviceOptions[0],
    budget: siteConfig.budgetOptions[1],
    message: "",
  });

  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      // Find matching service option or fallback to closest
      const match = siteConfig.serviceOptions.find((opt) =>
        preselectedService.toLowerCase().includes(opt.toLowerCase())
      );
      setFormData((prev) => ({
        ...prev,
        service: match || (preselectedService.includes("Inquiry") ? "Other" : preselectedService),
      }));
    }
  }, [preselectedService]);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address (e.g., name@company.com)";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    if (!formData.budget) {
      newErrors.budget = "Please select an estimated budget range";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please describe what you are looking to build";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Please provide a bit more detail (at least 10 characters)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot trap
    if (honeypot) {
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    const endpoint =
      (typeof import.meta !== "undefined" && import.meta.env?.VITE_CONTACT_FORM_ENDPOINT) ||
      siteConfig.contact.formspreeEndpoint ||
      "https://formspree.io/f/mpppdqnz";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Not provided",
          company: formData.company || "Not provided",
          service: formData.service,
          budget: formData.budget,
          message: formData.message,
          _subject: `New Project Inquiry from ${formData.name}: ${formData.service}`,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(
          errorData?.errors?.map((err: { message: string }) => err.message).join(", ") ||
            "Unable to submit form. Please check your network or message directly via WhatsApp."
        );
      }

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#B8F36B", "#ffffff", "#111318", "#86D42A"],
        });
      } catch (err) {
        // Fallback gracefully if confetti fails
      }

      setIsSubmitted(true);
    } catch (error: unknown) {
      const errMsg =
        error instanceof Error
          ? error.message
          : "Something went wrong sending your inquiry. Please try again or reach out on WhatsApp.";
      setErrors({ form: errMsg });
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateWhatsAppUrl = () => {
    const text = `Hi Manoj, I'm reaching out from your portfolio website!

Name: ${formData.name || "A potential client"}
Email: ${formData.email || "Not specified"}
Service: ${formData.service}
Budget: ${formData.budget}

Details: ${formData.message || "I'd like to discuss a project."}`;

    return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(text)}`;
  };


  return (
    <section id="contact" className="py-20 md:py-28 bg-[#111318] text-white relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#B8F36B]/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="max-w-3xl mb-14 sm:mb-18 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F232B] border border-[#2B303C] text-xs font-bold uppercase tracking-wider text-[#B8F36B] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.08] mb-4">
            Ready to Build <span className="text-[#B8F36B]">Something Great?</span>
          </h2>
          <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed max-w-2xl">
            Have a business idea, a website to redesign, or a digital product to launch?
            Let's discuss what you need, define the scope, and bring your vision to life.
          </p>
        </div>

        {/* Form & Direct Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Inquiry Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-[#181B22] border border-[#272B35] rounded-3xl p-6 sm:p-10 shadow-2xl">
              {isSubmitted ? (
                <div className="py-12 text-center animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-[#B8F36B] text-[#111318] flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                    Inquiry Received!
                  </h3>
                  <p className="text-sm text-[#9CA3AF] max-w-md mx-auto mb-8 leading-relaxed">
                    Thank you for reaching out, <span className="text-white font-bold">{formData.name}</span>!
                    I have logged your project requirements and will reply within 24 hours.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold text-xs uppercase tracking-wider transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Ping on WhatsApp Now ↗</span>
                    </a>
                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          company: "",
                          service: siteConfig.serviceOptions[0],
                          budget: siteConfig.budgetOptions[1],
                          message: "",
                        });
                      }}
                      className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#222631] text-[#9CA3AF] hover:text-white font-bold text-xs uppercase tracking-wider transition-all"
                    >
                      <span>Submit Another Inquiry</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {/* Honeypot field (hidden from real users) */}
                  <input
                    type="text"
                    name="website_url"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    style={{ display: "none" }}
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  {errors.form && (
                    <div className="p-3.5 rounded-xl bg-red-950/60 border border-red-800 text-red-200 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                      <span>{errors.form}</span>
                    </div>
                  )}

                  {/* Row 1: Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-white uppercase tracking-wider mb-2">
                        Your Name <span className="text-[#B8F36B]">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: "" });
                        }}
                        className={`w-full px-4 py-3 rounded-xl bg-[#111318] border text-sm text-white placeholder-zinc-500 focus:outline-hidden transition-colors ${
                          errors.name
                            ? "border-red-500 focus:border-red-500"
                            : "border-[#272B35] focus:border-[#B8F36B]"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-400 mt-1 font-medium">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-white uppercase tracking-wider mb-2">
                        Email Address <span className="text-[#B8F36B]">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="e.g. rahul@company.com"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: "" });
                        }}
                        className={`w-full px-4 py-3 rounded-xl bg-[#111318] border text-sm text-white placeholder-zinc-500 focus:outline-hidden transition-colors ${
                          errors.email
                            ? "border-red-500 focus:border-red-500"
                            : "border-[#272B35] focus:border-[#B8F36B]"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-400 mt-1 font-medium">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Phone and Company (Optional) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-white uppercase tracking-wider mb-2">
                        Phone / WhatsApp <span className="text-zinc-500 text-[10px]">(Optional)</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#111318] border border-[#272B35] text-sm text-white placeholder-zinc-500 focus:outline-hidden focus:border-[#B8F36B] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-xs font-bold text-white uppercase tracking-wider mb-2">
                        Company / Brand Name <span className="text-zinc-500 text-[10px]">(Optional)</span>
                      </label>
                      <input
                        id="company"
                        type="text"
                        placeholder="Acme Studio / Farm2Spoon"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#111318] border border-[#272B35] text-sm text-white placeholder-zinc-500 focus:outline-hidden focus:border-[#B8F36B] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 3: Service Required */}
                  <div>
                    <label htmlFor="service" className="block text-xs font-bold text-white uppercase tracking-wider mb-2">
                      Service Required <span className="text-[#B8F36B]">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#111318] border border-[#272B35] text-sm text-white focus:outline-hidden focus:border-[#B8F36B] transition-colors cursor-pointer"
                    >
                      {siteConfig.serviceOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#111318] text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Row 4: Estimated Budget */}
                  <div>
                    <label className="block text-xs font-bold text-white uppercase tracking-wider mb-2">
                      Estimated Budget Range <span className="text-[#B8F36B]">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {siteConfig.budgetOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: opt })}
                          className={`px-3 py-2.5 rounded-xl text-xs font-semibold border text-center transition-all cursor-pointer ${
                            formData.budget === opt
                              ? "bg-[#B8F36B] text-[#111318] border-[#B8F36B] font-bold shadow-xs"
                              : "bg-[#111318] text-[#9CA3AF] border-[#272B35] hover:border-[#656B76] hover:text-white"
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Row 5: Project Description */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-white uppercase tracking-wider mb-2">
                      Project Description <span className="text-[#B8F36B]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Tell me about your business, the goals for this website, key pages or features, and any reference sites you admire..."
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: "" });
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-[#111318] border text-sm text-white placeholder-zinc-500 focus:outline-hidden transition-colors resize-y ${
                        errors.message
                          ? "border-red-500 focus:border-red-500"
                          : "border-[#272B35] focus:border-[#B8F36B]"
                      }`}
                    ></textarea>
                    {errors.message && (
                      <p className="text-[11px] text-red-400 mt-1 font-medium">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#B8F36B] hover:bg-[#A3E94E] text-[#111318] font-black text-sm uppercase tracking-wider py-4 rounded-xl transition-all cursor-pointer shadow-lg hover:shadow-xl hover:scale-[1.01] disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-[#111318] border-t-transparent rounded-full animate-spin"></div>
                          <span>Submitting Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Project Inquiry</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    <p className="text-center text-[11px] text-[#9CA3AF] mt-3">
                      ⚡ Quick response guaranteed within 24 hours. Your details remain strictly confidential.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Direct Quick Connect & Social Proof */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* What Happens Next & Process */}
            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-[#181B22] border border-[#272B35]">
                <h3 className="text-base font-bold text-white tracking-tight mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#B8F36B]"></span>
                  <span>What happens after submitting?</span>
                </h3>
                <div className="space-y-3.5 text-xs text-[#9CA3AF]">
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-lg bg-[#222631] text-[#B8F36B] font-mono font-bold flex items-center justify-center shrink-0">
                      1
                    </span>
                    <div>
                      <strong className="text-white block font-semibold">Scope &amp; Requirements Review</strong>
                      <span>I carefully examine your goals, feature wishlist, and target timeline.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-lg bg-[#222631] text-[#B8F36B] font-mono font-bold flex items-center justify-center shrink-0">
                      2
                    </span>
                    <div>
                      <strong className="text-white block font-semibold">Detailed Proposal &amp; Estimate</strong>
                      <span>You receive a transparent milestone breakdown, architecture plan, and fixed quote.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-lg bg-[#222631] text-[#B8F36B] font-mono font-bold flex items-center justify-center shrink-0">
                      3
                    </span>
                    <div>
                      <strong className="text-white block font-semibold">Discovery &amp; Kickoff</strong>
                      <span>We align on wireframes and start turning your vision into production reality.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location & Availability Card */}
              <div className="p-5 rounded-2xl bg-[#181B22] border border-[#272B35] flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#222631] text-[#9CA3AF] flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#9CA3AF] uppercase tracking-wider block">
                    Location &amp; Delivery
                  </span>
                  <span className="text-sm font-bold text-white block">
                    {siteConfig.location}
                  </span>
                  <span className="text-xs text-[#86D42A] font-semibold mt-0.5 block flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#86D42A] animate-ping"></span>
                    Currently accepting projects for this month
                  </span>
                </div>
              </div>
            </div>

            {/* Response Time Guarantee Banner */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1C2028] to-[#14161D] border border-[#2B303C]">
              <div className="flex items-center gap-2 text-xs font-bold text-[#B8F36B] uppercase tracking-wider mb-2">
                <Clock className="w-4 h-4" />
                <span>Response Time Commitment</span>
              </div>
              <p className="text-xs text-[#9CA3AF] leading-relaxed">
                I respect your time. Every inquiry sent through this form receives a thoughtful response
                with initial thoughts, project scoping questions, and estimated timeline within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
