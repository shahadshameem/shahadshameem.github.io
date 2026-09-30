import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copiedType, setCopiedType] = useState<'email' | 'phone' | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Construct mailto link as fallback
    const mailto = `mailto:${PORTFOLIO_DATA.personal.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailto;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 border-t border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Copy Buttons */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs text-sky-400 uppercase tracking-widest mb-2 font-semibold">
                <span className="w-4 h-px bg-sky-400" />
                <span>Get In Touch</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Let's Build Together
              </h2>
              <p className="text-neutral-400 text-sm mt-3 leading-relaxed">
                I am actively open to embedded systems engineering internships, IoT firmware roles, off-campus placements, and technical collaborations.
              </p>
            </div>

            {/* Direct Contact Cards with One-Click Copy */}
            <div className="space-y-3">
              {/* Email */}
              <div className="p-4 rounded-xl bg-neutral-900/70 border border-neutral-800 flex items-center justify-between group hover:border-neutral-700 transition-colors">
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
                      Email Address
                    </div>
                    <a
                      href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                      className="text-xs sm:text-sm font-mono text-white hover:text-sky-300 transition-colors"
                    >
                      {PORTFOLIO_DATA.personal.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(PORTFOLIO_DATA.personal.email, 'email')}
                  className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-all flex items-center gap-1.5 text-xs font-mono"
                  title="Copy email"
                >
                  {copiedType === 'email' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-[11px] text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[11px] hidden sm:inline">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="p-4 rounded-xl bg-neutral-900/70 border border-neutral-800 flex items-center justify-between group hover:border-neutral-700 transition-colors">
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
                      Direct Phone
                    </div>
                    <a
                      href={`tel:${PORTFOLIO_DATA.personal.phone.replace(/\s+/g, '')}`}
                      className="text-xs sm:text-sm font-mono text-white hover:text-emerald-300 transition-colors"
                    >
                      {PORTFOLIO_DATA.personal.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(PORTFOLIO_DATA.personal.phone, 'phone')}
                  className="p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-all flex items-center gap-1.5 text-xs font-mono"
                  title="Copy phone"
                >
                  {copiedType === 'phone' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-[11px] text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[11px] hidden sm:inline">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Location */}
              <div className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/60 flex items-center gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-neutral-800 flex items-center justify-center text-neutral-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider">
                    Current Location
                  </div>
                  <div className="text-xs sm:text-sm text-neutral-300 font-mono">
                    {PORTFOLIO_DATA.personal.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Profiles */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={PORTFOLIO_DATA.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 text-xs font-mono flex items-center gap-2 transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                <span>github/shahadshameem</span>
              </a>

              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 text-xs font-mono flex items-center gap-2 transition-all"
              >
                <LinkedinIcon className="w-4 h-4 text-sky-400" />
                <span>linkedin/in/shahad-shameem</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="studio-card rounded-2xl p-6 sm:p-8">
              <div className="flex items-center gap-2.5 mb-6 text-neutral-200">
                <MessageSquare className="w-5 h-5 text-sky-400" />
                <h3 className="text-lg font-bold tracking-tight">Send a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-white text-sm outline-none focus:border-sky-500 transition-colors placeholder:text-neutral-600 font-mono text-xs"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-white text-sm outline-none focus:border-sky-500 transition-colors placeholder:text-neutral-600 font-mono text-xs"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider">
                    Subject / Opportunity
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Embedded Engineering Role / Project Inquiry"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-white text-sm outline-none focus:border-sky-500 transition-colors placeholder:text-neutral-600 font-mono text-xs"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-mono text-neutral-400 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your team, system requirements, or project vision..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-white text-sm outline-none focus:border-sky-500 transition-colors placeholder:text-neutral-600 font-mono text-xs resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className={`w-full py-3 rounded-lg font-mono text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                    submitted
                      ? 'bg-emerald-500 text-neutral-950'
                      : 'bg-sky-500 text-neutral-950 hover:bg-sky-400 shadow-md shadow-sky-500/20'
                  }`}
                >
                  {submitted ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Opening Mail Client & Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Transmit Message</span>
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
