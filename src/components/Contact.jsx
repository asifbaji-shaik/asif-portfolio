import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send, 
  Copy, 
  Check, 
  Sparkles, 
  AlertCircle, 
  CheckCircle2,
  Loader2,
  ExternalLink
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null); // { type: 'success' | 'error', text: '' }
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject is required';
    if (!formData.message.trim()) {
      errs.message = 'Message cannot be empty';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Please write at least 10 characters';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // safe fallback
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setStatusMessage(null);

    // Try EmailJS if service configured, or fallback gracefully with mailto
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_portfolio';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_contact';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

    try {
      if (publicKey && publicKey !== '') {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_email: personalInfo.email,
          },
          publicKey
        );
        setStatusMessage({
          type: 'success',
          text: 'Thank you! Your message has been sent directly to Shaik Asif Baji.'
        });
        triggerConfetti();
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // Mailto simulation fallback with prompt
        const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
          formData.subject
        )}&body=${encodeURIComponent(
          `Hi Asif,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;

        window.open(mailtoLink, '_blank');
        setStatusMessage({
          type: 'success',
          text: 'Opening your default email client with your message drafted to asifbajishaik33@gmail.com!'
        });
        triggerConfetti();
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('Email send error:', error);
      // Fallback to mailto
      const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Hi Asif,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoLink;
      setStatusMessage({
        type: 'success',
        text: 'Message drafted! Opening email client to send directly to Asif.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/50">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-violet-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono tracking-wider uppercase">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Let's Connect & <span className="text-gradient">Build Something Great!</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            I'm open to job opportunities, internships, collaborations, and exciting projects. Feel free to reach out.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Contact Cards & Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Cards */}
            <div className="space-y-4">
              
              {/* Email Card */}
              <div className="glass-card rounded-2xl p-5 border border-white/10 hover:border-blue-500/40 transition-all duration-300 group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30 group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-mono">Email Address</p>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-sm font-semibold text-white hover:text-blue-400 transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personalInfo.email, 'email')}
                    className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700/60 transition-all"
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    {copiedField === 'email' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Phone Card */}
              <div className="glass-card rounded-2xl p-5 border border-white/10 hover:border-violet-500/40 transition-all duration-300 group">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-violet-500/20 text-violet-400 border border-violet-500/30 group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 font-mono">Phone / WhatsApp</p>
                      <a
                        href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                        className="text-sm font-semibold text-white hover:text-violet-400 transition-colors"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(personalInfo.phone, 'phone')}
                    className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700/60 transition-all"
                    title="Copy Phone"
                    aria-label="Copy Phone"
                  >
                    {copiedField === 'phone' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Location Card */}
              <div className="glass-card rounded-2xl p-5 border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-mono">Location</p>
                    <p className="text-sm font-semibold text-white">
                      {personalInfo.location}
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Social Profiles Card */}
            <div className="glass-card rounded-2xl p-6 border border-white/10 space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Professional Networks
              </h4>
              <div className="flex flex-col gap-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/80 text-slate-200 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-5 h-5 text-blue-400" />
                    <div>
                      <span className="text-sm font-semibold block">LinkedIn Profile</span>
                      <span className="text-[11px] text-slate-400 font-mono">in/shaik-asif-baji</span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-violet-500/50 hover:bg-slate-800/80 text-slate-200 hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-5 h-5 text-violet-400" />
                    <div>
                      <span className="text-sm font-semibold block">GitHub Profile</span>
                      <span className="text-[11px] text-slate-400 font-mono">@asifbaji-shaik</span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-violet-400 transition-colors" />
                </a>
              </div>
            </div>

            {/* Response Time Guarantee Pill */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-900/30 via-indigo-900/20 to-purple-900/30 border border-indigo-500/20 flex items-center gap-3 text-xs text-slate-300">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Prompt communication: usually responds within 24 hours.</span>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl relative">
              
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill out the form below to reach me regarding full-time roles, internships, freelance, or inquiries.
              </p>

              {/* Status Alert Banner */}
              {statusMessage && (
                <div
                  className={`p-4 rounded-xl mb-6 flex items-start gap-3 text-xs sm:text-sm ${
                    statusMessage.type === 'success'
                      ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-300'
                      : 'bg-rose-500/15 border border-rose-500/30 text-rose-300'
                  }`}
                >
                  {statusMessage.type === 'success' ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  )}
                  <span>{statusMessage.text}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label 
                      htmlFor="name"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-300"
                    >
                      Full Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-white text-sm placeholder:text-slate-500 focus:outline-none transition-all ${
                        errors.name
                          ? 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                          : 'border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div className="space-y-1.5">
                    <label 
                      htmlFor="email"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-300"
                    >
                      Email Address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-white text-sm placeholder:text-slate-500 focus:outline-none transition-all ${
                        errors.email
                          ? 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                          : 'border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label 
                    htmlFor="subject"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-300"
                  >
                    Subject <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Regarding Software Engineer Opportunity / Project Inquiry"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-white text-sm placeholder:text-slate-500 focus:outline-none transition-all ${
                      errors.subject
                        ? 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                        : 'border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-[11px] text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label 
                    htmlFor="message"
                    className="block text-xs font-mono uppercase tracking-wider text-slate-300"
                  >
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Asif, I came across your portfolio and would love to discuss..."
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-white text-sm placeholder:text-slate-500 focus:outline-none transition-all resize-none ${
                      errors.message
                        ? 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                        : 'border-slate-800 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm sm:text-base bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white shadow-glow-sm hover:shadow-glow-md hover:scale-[1.01] active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;

